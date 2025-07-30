// // -------------------------------- List View Customization -------------------------------
 
// frappe.listview_settings['Library Member'] = {
//     add_fields: ['membership_status'],

//     get_indicator: function (doc) {
//         if (doc.membership_status === "Active") {
//             return [__("Active"), "green", "membership_status,=,Active"];
//         } else if (doc.membership_status === "InActive") {
//             return [__("InActive"), "red", "membership_status,=,InActive"];
//         }
//     },

//     onload: function (listview) {
//         // Inject global CSS styles for the list view
//         const style = document.createElement('style');
//         style.innerHTML = `
//             /* Entire row font and spacing */
//             .list-row-container {
//                 font-family: 'Arial', sans-serif !important;
//                 font-size: 15px !important;
//             }

//             /* Membership Status pill styling */
//             .list-row-container [data-fieldname="membership_status"] .badge {
//                 font-weight: 700;
//                 font-family: 'Courier New', monospace;
//                 padding: 4px 8px;
//                 border-radius: 6px;
//             }

//             /* ID Column (name field) styling */
//             .list-row .list-row-col.ellipsis a {
//                 font-family: 'Georgia', serif;
//                 font-size: 16px;
//                 font-weight: bold;
//             }

//             /* Default colors (you can override in JS below) */
//             .list-id.active-id {
//                 color: #027A48 !important;
//             }

//             .list-id.inactive-id {
//                 color: #B42318 !important;
//             }
//         `;
//         document.head.appendChild(style);

//         // Apply conditional coloring to ID column based on status
//         const updateIdColors = () => {
//             document.querySelectorAll('div[data-name]').forEach(row => {
//                 const statusWrapper = row.querySelector('[data-fieldname="membership_status"]');
//                 const idElem = row.querySelector('.list-id');

//                 if (!statusWrapper || !idElem) return;

//                 const badge = statusWrapper.querySelector('.badge');
//                 if (!badge) return;

//                 const text = badge.textContent.trim();

//                 idElem.classList.remove('active-id', 'inactive-id');
//                 if (text === "Active") {
//                     idElem.classList.add('active-id');
//                 } else if (text === "InActive") {
//                     idElem.classList.add('inactive-id');
//                 }
//             });
//         };

//         // Call function after render
//         setTimeout(updateIdColors, 300);
//         setTimeout(updateIdColors, 800);
//         frappe.realtime.on('list_refresh', updateIdColors);

//         // Optional: Custom button
//         listview.page.add_inner_button(__('Click Me'), () => {
//             frappe.msgprint(__("Welcome to Library Member List View 🎉"));
//         });
//     }
// };



// List View ID Coloring (Desk Formatting for Name field)````````````````````

frappe.listview_settings['Library Member'] = {
    add_fields: ['membership_status'],
    get_indicator(doc) {
        if (doc.membership_status === "Active") {
            return [__("Active"), "green", "membership_status,=,Active"];
        } else {
            return [__("InActive"), "red", "membership_status,=,InActive"];
        }
    },
    onload(listview) {
        const style = document.createElement('style');
        style.innerHTML = `
            .list-id.active-id { color: green !important; font-weight: bold; }
            .list-id.inactive-id { color: red !important; font-weight: bold; }
            .list-row-col.ellipsis a {
                font-size: 16px;
                font-family: 'Georgia';
                font-weight: bold;
            }

            .indicator-pill {
                font-family: 'Courier New';
                font-weight: bold;
            }
        `;
        document.head.appendChild(style);

        const updateColor = () => {
            document.querySelectorAll('div[data-name]').forEach(row => {
                const status = row.querySelector('[data-fieldname="membership_status"] .badge')?.textContent.trim();
                const idElem = row.querySelector('.list-id');
                if (!status || !idElem) return;

                idElem.classList.remove('active-id', 'inactive-id');
                if (status === 'Active') idElem.classList.add('active-id');
                if (status === 'InActive') idElem.classList.add('inactive-id');
            });
        };

        setTimeout(updateColor, 300);
    }
};



