console.log("✅ JS Loaded: Library Member Report");

frappe.query_reports["Library Member Report"] = {
    formatter: function (value, row, column, data, default_formatter) {
        value = default_formatter(value, row, column, data);

        if (column.fieldname === "membership_status") {
            let color = "gray"; // Default color

            if (value === "Active") {
                color = "green";
            } else if (value === "Expired" || value === "Inactive") {
                color = "red";
            }

            return `<span style="color:${color}; font-weight:bold;">${value}</span>`;
        }

        return value;
    }
};
