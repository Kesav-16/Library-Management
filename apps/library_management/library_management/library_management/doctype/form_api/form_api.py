# Copyright (c) 2025, Kesav and contributors
# For license information, please see license.txt

# import frappe
import frappe
from frappe.model.document import Document

class FormApi(Document):

    @frappe.whitelist()
    def custom_method_on_server(self, some_arg=None):
        return f"Received: {some_arg}"
# f format