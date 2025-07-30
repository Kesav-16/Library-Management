# Copyright (c) 2025, Kesav and contributors
# For license information, please see license.txt

from frappe.model.document import Document
from frappe import _
from frappe.utils import today
import frappe

class ServerScriptDemo(Document):
    # def before_validate(self):    ````````````working
    #     if self.title:
    #         self.title = self.title.upper()

    def before_save(self):
        if not self.description:
            self.description = f" '{self.title}' is a newly added book."

    # def after_save(self):           ````````````working
    #     frappe.msgprint(f"Book '{self.title}' saved successfully.")

    # def before_submit(self):          ````````````working
    #     if not self.title:
    #         frappe.throw(_("Cannot submit without a book title."))

    # def after_submit(self):         Not ``````````````````
    #     self.archived = 1  # Ensure this field exists in your DocType
    #     self.save()

    # def after_delete(self):        before delete not working``````````````````````````
    #     if self.title == "Library Rules":
    #         frappe.throw(_("This book is protected and cannot be deleted."))

    # def after_insert(self):         ````````````working
    #     frappe.logger().info(f"New book added: {self.title}")
    #     frappe.msgprint(_(f"'{self.title}' has been successfully added to the system."))

    # def before_print(doc,method):  ````````````working
    #     doc.description = f"Printed on {today()}"
