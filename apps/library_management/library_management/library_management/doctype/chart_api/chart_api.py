# Copyright (c) 2025, Kesav and contributors
# For license information, please see license.txt

# import frappe
import frappe
from frappe import _
from frappe.model.document import Document


class ChartAPI(Document):
	pass


@frappe.whitelist()
def get_chart_data():
    query = """
        SELECT t1.grade, t1.number_of_students
        FROM `tabChart API` t1
        INNER JOIN (
            SELECT grade, MAX(creation) as max_creation
            FROM `tabChart API`
            GROUP BY grade
        ) t2 ON t1.grade = t2.grade AND t1.creation = t2.max_creation
        ORDER BY t1.grade ASC
    """
    data = frappe.db.sql(query, as_dict=True)
    return data