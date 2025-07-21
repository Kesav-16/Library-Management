frappe.ui.form.on('Library Member', {
    first_name: function(frm) {
        update_full_name(frm);
    },
    last_name: function(frm) {
        update_full_name(frm);
    }
});

function update_full_name(frm) {
    const first = frm.doc.first_name || '';
    const last = frm.doc.last_name || '';
    frm.set_value('full_name', `${first} ${last}`.trim());
}