frappe.listview_settings['Common Utilities API'] = {
    onload: function (listview) {

        // ▶ 1. frappe.get_route - Show current route
        listview.page.add_inner_button('Show Route', () => {
            const route = frappe.get_route();
            frappe.msgprint(`📍 Current route: ${route.join(" / ")}`);
            console.log("Current route:", route);
        });

        // ▶ 2. frappe.set_route - Go to Article List
        listview.page.add_inner_button('Go to Article List', () => {
            frappe.set_route('List', 'Article', { article_name: 'The One' });
        });

        // ▶ 2. frappe.set_route - Create New Article
        listview.page.add_inner_button('Create New ', () => {
            frappe.new_doc('Common Utilities API');
        });

        // ▶ 2. frappe.set_route - Open specific Article form
        listview.page.add_inner_button('Open Utilities API: UF-001', () => {
            frappe.set_route('Form', 'Common Utilities API', 'UF-001');
        });

        // ▶ 2. frappe.set_route - Open Calendar View for Common Utilities API
        listview.page.add_inner_button('Open  Calendar View', () => {
            frappe.model.with_doctype('Common Utilities API', () => {
                const meta = frappe.get_meta('Common Utilities API');
                const has_start_field = meta.fields.find(df =>
                    df.fieldname === 'start' || df.fieldtype === 'Date' || df.fieldtype === 'Datetime'
                );

                if (has_start_field) {
                    frappe.set_route('List', 'Common Utilities API', 'Calendar');
                } else {
                    frappe.msgprint("⚠️ No valid Date/Datetime field (like 'start') found for Common Utilities API Doctype.");
                }
            });
        });

    }
};  
