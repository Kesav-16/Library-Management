# Copyright (c) 2025, Kesav and contributors
# For license information, please see license.txt
# Report Builder``````````````````````````````````````````````````````
import frappe
from frappe.utils.jinja import render_template 

def execute(filters=None):
    columns = get_columns()
    data = get_data(filters or {})
    return columns, data

def get_columns():
    return [
        {"label": "Image", "fieldname": "image", "fieldtype": "Data", "width": 100},
        {"label": "Article", "fieldname": "article_name", "fieldtype": "Data", "width": 300},
        {"label": "Author", "fieldname": "author", "fieldtype": "Data", "width": 150},
        {"label": "ISBN", "fieldname": "isbn", "fieldtype": "Data", "width": 150},
        {"label": "Status", "fieldname": "status", "fieldtype": "Data", "width": 100},
        {"label": "Publisher", "fieldname": "publisher", "fieldtype": "Data", "width": 200},
        {"label": "Description", "fieldname": "description", "fieldtype": "Data", "width": 300},
        {"label": "First Name", "fieldname": "first_name", "fieldtype": "Data", "width": 150},
        {"label": "Last Name", "fieldname": "last_name", "fieldtype": "Data", "width": 150},
        {"label": "Membership From Date", "fieldname": "from_date", "fieldtype": "Date", "width": 120},
        {"label": "Membership To Date", "fieldname": "to_date", "fieldtype": "Date", "width": 120},
    ]

def get_data(filters):
    condition = "1=1"
    values = []

    if filters.get("author"):
        condition += " AND A.author LIKE %s"
        values.append(f"%{filters['author']}%")

    if filters.get("status"):
        condition += " AND A.status = %s"
        values.append(filters["status"])

    query = f"""
        SELECT
            A.image,
            A.article_name,
            A.author,
            A.isbn,
            A.status,
            A.publisher,
            A.description,
            LM.first_name,
            LM.last_name,
            M.from_date,
            M.to_date
        FROM
            `tabArticle` A
        LEFT JOIN
            `tabLibrary Transaction` L ON L.article = A.name
        LEFT JOIN
            `tabLibrary Member` LM ON L.library_member = LM.name
        LEFT JOIN
            `tabLibrary Membership` M ON L.library_member = M.library_member
        WHERE
            {condition}
        ORDER BY
            A.modified DESC
    """

    return frappe.db.sql(query, values, as_dict=True)


# @frappe.whitelist()
# def get_custom_html(filters=None):
#     columns, data = execute(frappe.parse_json(filters or "{}"))

#     try:
#         html = render_template(
#             "library_management/report/article_report/templates/article_report.html",  # Must match file path
#             {
#                 "data": data,
#                 "filters": filters,
#                 "frappe": frappe,
#             }
#         )
#         return html
#     except Exception as e:
#         frappe.log_error(frappe.get_traceback(), "Custom HTML Render Failed")
#         return f"<p style='color:red;'>Template render failed:<br>{e}</p>"



