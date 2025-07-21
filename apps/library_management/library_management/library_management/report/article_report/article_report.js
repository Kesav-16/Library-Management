// Copyright (c) 2025, Kesav and contributors
// For license information, please see license.txt

frappe.query_reports["Article Report"] = {
    "filters": [
        {
            fieldname: "author",
            label: __("Author"),
            fieldtype: "Data",
        },
        {
            fieldname: "status",
            label: __("Status"),
            fieldtype: "Select",
            options: ["", "Available", "Issued"],
            
        }
    ]
};
