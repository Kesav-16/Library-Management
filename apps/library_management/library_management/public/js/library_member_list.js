frappe.listview_settings['Library Member'] = {
    onload(listview) {
        listview.page.add_inner_button('Add Member', function () {
            frappe.call({
                method: 'library_management.library_management.doctype.library_member.library_member.add_static_member',
                callback: function (r) {
                    if (!r.exc) {
                        frappe.msgprint(__('Library Member added!'));
                        listview.refresh();
                    } else {
                        frappe.msgprint(__('Error occurred'));
                    }
                }
            });
        });
    }
};
