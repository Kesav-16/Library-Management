import frappe
from frappe.utils import today, getdate

def execute(filters=None):
    columns = get_columns()
    data = get_data(filters or {})
    return columns, data

def get_columns():
    return [
        {"label": "Library Member ID", "fieldname": "name", "fieldtype": "Link", "options": "Library Member", "width": 150},
        {"label": "First Name", "fieldname": "first_name", "fieldtype": "Data", "width": 150},
        {"label": "Last Name", "fieldname": "last_name", "fieldtype": "Data", "width": 150},
        {"label": "Email", "fieldname": "email_address", "fieldtype": "Data", "width": 200},
        {"label": "Phone", "fieldname": "phone", "fieldtype": "Data", "width": 150},
        {"label": "Membership Status", "fieldname": "membership_status", "fieldtype": "Data", "width": 150},
        {"label": "From Date", "fieldname": "from_date", "fieldtype": "Date", "width": 120},
        {"label": "To Date", "fieldname": "to_date", "fieldtype": "Date", "width": 120},
    ]

def get_data(filters):
    members = frappe.db.sql("""
        SELECT 
            LM.name,
            LM.first_name,
            LM.last_name,
            LM.email_address,
            LM.phone,
            M.from_date,
            M.to_date
        FROM `tabLibrary Member` LM
        LEFT JOIN `tabLibrary Membership` M ON LM.name = M.library_member
        ORDER BY LM.modified DESC
    """, as_dict=True)

    today_date = getdate(today())

    for member in members:
        from_date = getdate(member.get("from_date")) if member.get("from_date") else None
        to_date = getdate(member.get("to_date")) if member.get("to_date") else None

        if from_date and to_date:
            if from_date <= today_date <= to_date:
                member["membership_status"] = "Active"
            else:
                member["membership_status"] = "Expired"
        else:
            member["membership_status"] = "Inactive"

    return members
