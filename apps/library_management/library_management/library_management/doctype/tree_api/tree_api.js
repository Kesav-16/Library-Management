frappe.ui.form.on('Tree API', {
    refresh(frm) {
        frm.add_custom_button('Add Family Member', () => {
            let d = new frappe.ui.Dialog({
                title: 'Add Family Member',
                fields: [
                    {
                        label: 'Parent',
                        fieldname: 'parent',
                        fieldtype: 'Link',
                        options: 'Tree API',
                        reqd: 0
                    },
                    {
                        label: 'Member Name',
                        fieldname: 'member_name',
                        fieldtype: 'Data',
                        reqd: 1
                    },
                    {
                        label: 'Age',
                        fieldname: 'age',
                        fieldtype: 'Int'
                    },
                    {
                        label: 'Gender',
                        fieldname: 'gender',
                        fieldtype: 'Select',
                        options: ['Male', 'Female', 'Other']
                    },
                    {
                        label: 'Relation',
                        fieldname: 'relation',
                        fieldtype: 'Data'
                    },
                    {
                        label: 'Is Group (Has Children)',
                        fieldname: 'is_group',
                        fieldtype: 'Check'
                    }
                ],
                primary_action_label: 'Save',
                primary_action(values) {
                    frappe.call({
                        method: 'library_management.library_management.doctype.tree_api.tree_api.add_node',
                        args: values,
                        callback: function(r) {
                            if (!r.exc) {
                                frappe.msgprint(__('Family Member Added'));
                                d.hide();
                                frm.reload_doc();
                            }
                        }
                    });
                }
            });

            d.show();
        });
    }
});
