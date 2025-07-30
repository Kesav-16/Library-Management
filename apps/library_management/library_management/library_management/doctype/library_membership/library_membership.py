# Copyright (c) 2025, Kesav and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class LibraryMembership(Document):
	pass

from frappe.model.document import Document
from frappe.utils import add_days
import frappe
from frappe.model.docstatus import DocStatus

class LibraryMembership(Document):

    def before_submit(self):
        # Check for overlapping active membership
        exists = frappe.db.exists(
            "Library Membership",
            {
                "library_member": self.library_member,
                "docstatus": DocStatus.submitted(),
                "to_date": (">", self.from_date),
            }
        )
        if exists:
            frappe.throw("There is an active membership for this member.")

        # Get loan period and compute to_date
        loan_period = frappe.db.get_single_value("Library Settings", "loan_period")
        self.to_date = add_days(self.from_date, loan_period or 30)

    def validate(self):
        if not self.to_date:
            loan_period = frappe.db.get_single_value("Library Settings", "loan_period")
            self.to_date = add_days(self.from_date, loan_period or 30)

   
    
    # def before_insert(self):
    #     frappe.msgprint("Before Insert: Validating Membership")

    # def after_insert(self):
    #     frappe.msgprint(f"Membership for {self.full_name} created.")

    # def before_save(self):
    #     frappe.msgprint("Before Save triggered")

    # def after_save(self):
    #     frappe.msgprint("Membership saved successfully.")

    # def before_submit(self):
    #     frappe.msgprint(f"Submitting membership for {self.full_name}")

    # def on_submit(self):
    #     frappe.msgprint("Membership submitted.")

    # def before_cancel(self):
    #     frappe.msgprint("Membership cancel requested.")

    # def on_cancel(self):
    #     frappe.msgprint("Membership canceled.")

    # def before_delete(self):
    #     frappe.msgprint("Deleting membership...")

    # def after_delete(self):
    #     frappe.msgprint("Membership deleted.")




