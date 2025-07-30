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
    
   
    # 
    
# using static reords created the records using Server Script````````````````````````
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

# Schedular events````````````````````````````````````
@frappe.whitelist()
def add_dynamic_member():
    # Hardcoded values or generate dynamically
    first_name = "Raghul"
    last_name = "S"
    email_address = "raghul@gmail.com"
    phone = "+91-9876534210"

    if frappe.db.exists("Library Member", {"email_address": email_address}):
        frappe.throw("Member already exists with this email.")

    doc = frappe.get_doc({
        "doctype": "Library Member",
        "first_name": first_name,
        "last_name": last_name,
        "email_address": email_address,
        "phone": phone
    })   
    doc.insert(ignore_permissions=True)
    frappe.db.commit()


@frappe.whitelist()
def get_membership_status(member_id):
    has_membership = frappe.db.exists(
        "Library Membership",
        {
            "library_member": member_id,
            "docstatus": 1,
            "from_date": ("<=", today()),
            "to_date": (">=", today())
        }
    )
    return "Active" if has_membership else "Inactive"
