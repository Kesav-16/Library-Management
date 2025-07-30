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

frappe.query_reports["Article Report"] = {
    formatter: function(value, row, column, data, default_formatter) {
        // First, apply the default formatter
        value = default_formatter(value, row, column, data);

        // Show image as thumbnail
        if (column.fieldname === "image" && value) {
            return `<img src="${value}" style="width: 50px; height: auto; border-radius: 4px;">`;
        }

        // Style status field
        if (column.fieldname === "status") {
            if (value === "Available") {
                return `<span style="color:green; font-weight:bold;">${value}</span>`;
            } else {
                return `<span style="color:red;">${value}</span>`;
            }
        }

        // Default return
        return value;
    }
};



