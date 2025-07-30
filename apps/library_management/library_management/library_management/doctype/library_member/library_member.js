// Copyright (c) 2025, Kesav and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Library Member", {
// 	refresh(frm) {

// 	},
// });

// Client Script ``````````````````````````````````

frappe.ui.form.on('Library Member', {
 refresh: function(frm) {
 frm.add_custom_button('Create Membership', () => {
 frappe.new_doc('Library Membership', {
 library_member: frm.doc.name
 })
 })
 frm.add_custom_button('Create Transaction', () => {
 frappe.new_doc('Library Transaction', {
 library_member: frm.doc.name
 })
 })
 }
});


// Form Events`````````````````````````````````````

// frappe.ui.form.on('Library Member', {

    // setup(frm) {
    //     frappe.msgprint("🚀 setup: form created once");
    // },

   
    // onload(frm) {
    //    frappe.msgprint(" onload: form loaded, before render");
    // },

    //  before_load(frm) {
    //    frappe.msgprint(" before_load: form is about to load");
    // },


    // refresh(frm) {
    //     frappe.msgprint("🔄 refresh: form rendered");

    //     frm.add_custom_button("Say Hello", () => {
    //         frappe.msgprint("Hello from refresh event!");
    //     });
    // },

    // onload_post_render(frm) {
    //     frappe.msgprint("🎨 onload_post_render: after render");
    // },

    // validate(frm) {
    //     frappe.msgprint("✅ validate triggered");

    //     if (!frm.doc.phone) {
    //         frappe.msgprint("Phone number is missing!");
    //     }
    // },

    // before_save(frm) {
    //     frappe.msgprint("💾 before_save triggered");
    // },

    // after_save(frm) {
    //     frappe.msgprint("✅ after_save triggered");
    // },

    // before_submit(frm) {
    //     frappe.msgprint("🔒 before_submit triggered");
    // },

    // on_submit(frm) {
    //     frappe.msgprint("✅ on_submit triggered");
    // },

    // before_cancel(frm) {
    //     frappe.msgprint("⚠️ before_cancel triggered");
    // },

    // after_cancel(frm) {
    //     frappe.msgprint("🚫 after_cancel triggered");
    // },

    // before_discard(frm) {
    //     frappe.msgprint("⚠️ before_discard triggered");
    // },

    // after_discard(frm) {
    //     frappe.msgprint("🗑️ after_discard triggered");
    // },

    // timeline_refresh(frm) {
    //     frappe.msgprint("⏱️ timeline_refresh triggered");
    // },

    // // Example: Field-specific event
    // first_name(frm) {
    //     frappe.msgprint(" first_name changed:", frm.doc.first_name);
    //     frappe.show_alert(`First name changed to: ${frm.doc.first_name}`);
    // }

    
// });

// END of Form Events`````````````````````````````````````


// frappe.ui.form.on('Library Member', {
//     refresh: function(frm) {
//         // Check if the document is already saved (not new)
//         if (!frm.is_new()) {
//             frm.add_custom_button('Click Me', () => {
//                 // Your action here
//                 frappe.msgprint(__('Custom button clicked!'));
//                 console.log('Clicked custom button');
//             });
//         }
//     }
// });

// frappe.ui.form.on('Library Member',{
//     refresh:function(frm){
//     if (!frm.doc.last_name) {
//             frm.set_intro('please enter the Last Name', 'green')
//         }
//     }
// })


// frappe.ui.form.on('Library Member',{
//     refresh:function(frm){
//         if(!frm.doc.email_address){
//             frm.set_intro('Please enter Email','green')
//             }
//         }

//     })



// frappe.ui.form.on('Library Member', {
//     refresh: function(frm) {
//         // Make 'First Name' mandatory
//         frm.set_df_property('first_name', 'reqd', 1);

//         // Make 'Last Name' mandatory
//         frm.set_df_property('last_name', 'reqd', 0);

//         // Make 'Full Name' read-only (calculated field maybe?)
//         frm.set_df_property('full_name', 'read_only', 0);

//         // Change 'Email Address' to type 'Data' if needed
//         frm.set_df_property('email_address', 'fieldtype', 'Data');

//         // Make 'Phone' required
//         frm.set_df_property('phone', 'reqd', 0);

//         // Optional: Message for confirmation
//         frappe.msgprint("Field properties updated for Library Member!");
//     }
// });


// Standard Script form`````````````````````````````````````````````````````````````````

// frappe.ui.form.on('Library Member', {
//     onload: function(frm) {
//         frappe.msgprint('Welcome to the Library Member form!');
//     },

//     first_name: function(frm) {
//         update_full_name(frm);
//     },

//     last_name: function(frm) {
//         update_full_name(frm);
//     },

//     validate: function(frm) {
//         if (!frm.doc.email_address) {
//             frappe.throw('Email address is required.');
//         }
//     }
// });

// function update_full_name(frm) {
//     if (frm.doc.first_name && frm.doc.last_name) {
//         frm.set_value('full_name', `${frm.doc.first_name} ${frm.doc.last_name}`);
//     }
// }


// Desk Formatting List view
// frappe.listview_settings['Library Member'] = {
//     add_fields: ['membership_status'],

//     get_indicator(doc) {
//         if (doc.membership_status === "Active") {
//             return [__("Active"), "green", "membership_status,=,Active"];
//         } else {
//             return [__("InActive"), "red", "membership_status,=,InActive"];
//         }
//     },
    
//     onload(listview) {
//         const style = document.createElement('style');
//         style.innerHTML = `
//             .list-row-col.ellipsis a {
//                 font-size: 16px;
//                 font-family: 'Georgia';
//                 font-weight: bold;
//             }

//             .indicator-pill {
//                 font-family: 'Courier New';
//                 font-weight: bold;
//             }
//         `;
//         document.head.appendChild(style);
//     }
// };

// fETCHING DETAILS LIKE MEMBERSHIP IS ACTIVE OR INACIVE `````````````````````````````````````

// frappe.ui.form.on('Library Member', {
//     refresh: function(frm) {
//         if (!frm.doc.name) return;

//         frappe.call({
//             method: 'frappe.client.get_list',
//             args: {
//                 doctype: 'Library Membership',
//                 filters: [
//                     ['library_member', '=', frm.doc.name],
//                     ['docstatus', '=', 1],
//                     ['from_date', '<=', frappe.datetime.get_today()],
//                     ['to_date', '>=', frappe.datetime.get_today()]
//                 ],
//                 limit_page_length: 1
//             },
//             callback: function(r) {
//                 if (r.message && r.message.length > 0) {
//                     frm.set_value('membership_status', 'Active');
//                 } else {
//                     frm.set_value('membership_status', 'InActive');
//                 }
//             }
//         });
//     }
// });

