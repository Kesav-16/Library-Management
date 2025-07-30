// Copyright (c) 2025, Kesav and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Dialog API", {
// 	refresh(frm) {

// 	},
// });
const d = new frappe.ui.Dialog({
    title: 'Add New Student',
    fields: [
        {
            label: 'Student Name',
            fieldname: 'student_name',
            fieldtype: 'Data',
            reqd: 1
        },
        {
            label: 'Email',
            fieldname: 'email',
            fieldtype: 'Data'
        },
        {
            label: 'Grade',
            fieldname: 'grade',
            fieldtype: 'Select',
            options: ['Grade 1', 'Grade 2', 'Grade 3']
        },
        {
            label: 'Date of Birth',
            fieldname: 'date_of_birth',
            fieldtype: 'Date'
        },
        {
            label: 'Is Enrolled',
            fieldname: 'is_enrolled',
            fieldtype: 'Check'
        }
    ],
    primary_action_label: 'Save',
    primary_action(values) {
        console.log('Form Values:', values); // debug line
        frappe.call({
            method: 'frappe.client.insert',
            args: {
                doc: {
                    doctype: 'Dialog API',
                    student_name: values.student_name,
                    email: values.email,
                    grade: values.grade,
                    date_of_birth: values.date_of_birth,
                    is_enrolled: values.is_enrolled ? 1 : 0
                }
            },
            callback: function(r) {
                if (!r.exc) {
                    frappe.msgprint('✅ Student record created successfully!');
                    d.hide();
                }
            }
        });
    }
});

d.show();

