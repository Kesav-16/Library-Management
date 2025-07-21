# Copyright (c) 2025, Kesav and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class LibraryMember(Document):
	pass

class LibraryMember(Document):
    def before_save(self):
        self.full_name = f'{self.first_name} {self.last_name or ""}'
        # frappe.msgprint('Robertson')  # Optional debug message
    
    # def before_insert(self):
    #     frappe.msgprint("Before Insert Triggered")
    #     self.full_name = f"{self.first_name} {self.last_name or ''}".strip()

    # def after_insert(self):
    #     frappe.msgprint(f"New member {self.full_name} inserted successfully!")

    # def validate(self):
    #     if not self.email_address:
    #         frappe.throw("Email Address is mandatory")

    # 
    

@frappe.whitelist()
def add_static_member():
    if frappe.db.exists("Library Member", {"email_address": "shyam@gmail.com"}):
        frappe.throw("Member already exists with this email.")

    doc = frappe.get_doc({
        "doctype": "Library Member",
        "first_name": "Shyam",
        "last_name": "M",
        "email_address": "shyam@gmail.com",
        "phone": "+91-9876543210"
    })
    doc.insert(ignore_permissions=True)
    frappe.db.commit()
    return {"status": "success", "name": doc.name}


