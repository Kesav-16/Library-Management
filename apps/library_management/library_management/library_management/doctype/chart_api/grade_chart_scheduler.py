import frappe

def send_latest_grade_to_chart():
    grades = frappe.get_all("Chart API", fields=["grade", "number_of_students"], order_by="creation asc")
    published_grades = frappe.cache().get_value("published_grades") or []

    for g in grades:
        if g.grade not in published_grades:
            frappe.publish_realtime(
                "chart_api_event",
                {
                    "label": g.grade,
                    "points": [g.number_of_students]
                }
            )
            published_grades.append(g.grade)
            frappe.cache().set_value("published_grades", published_grades)
            break
            break
    