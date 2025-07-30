# Copyright (c) 2025, Kesav and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class ScannerAPI(Document):
	pass



@frappe.whitelist()
def save_scanner_data(user_name, password):
    doc = frappe.new_doc("Scanner API")
    doc.user_name = user_name
    doc.password = password
    doc.insert()
    frappe.db.commit()
