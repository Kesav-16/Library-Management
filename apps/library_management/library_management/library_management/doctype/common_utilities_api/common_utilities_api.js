// Copyright (c) 2025, Kesav and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Common Utilities API", {
// 	refresh(frm) {

// 	},
// });


frappe.ui.form.on("Common Utilities API", {
    refresh(frm) {
       
        
        // ▶ 6. frappe.format - Format Age field (just to demo format)
        if (frm.doc.salary) {
            let formatted_salary = frappe.format(frm.doc.salary, { fieldtype: 'Currency' });
            frappe.msgprint(` Formatted Salary (as currency): ${formatted_salary}`);
            
        }

        // ▶ 7. frappe.provide - Create a namespace function and use it
        frappe.ui.form.on('Common Utilities API', {
    refresh: function (frm) {

        // Define the namespace and add() function
        frappe.provide('myapp.utils.calc');
        myapp.utils.calc.add = (a, b) => a + b;

        // Add custom button to accept dynamic inputs
        frm.add_custom_button('Add Two Numbers', () => {
            frappe.prompt([
                {
                    fieldname: 'num1',
                    label: 'Enter First Number',        
                    fieldtype: 'Float',
                    reqd: true
                },
                {
                    fieldname: 'num2',
                    label: 'Enter Second Number',
                    fieldtype: 'Float',
                    reqd: true
                }
            ],
            (values) => {
                const result = myapp.utils.calc.add(values.num1, values.num2);
                frappe.msgprint(` Result: ${values.num1} + ${values.num2} = ${result}`);
            },
            'Add Two Numbers',
            'Calculate');
        });

    }
});


        // ▶ 8. frappe.require - Load css
frappe.ui.form.on('Common Utilities API', {
    refresh(frm) {
        frm.add_custom_button('🎨 Load Stylish CSS with Animation', () => {
            // ▶ Load Animate.css for animation effects
            const animateCSS = document.createElement('link');
            animateCSS.rel = 'stylesheet';
            animateCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
            document.head.appendChild(animateCSS);

            // ▶ Add custom CSS styles with different colors
            const style = document.createElement('style');
            style.innerHTML = `
                .form-section {
                    background-color: #fff3e0; /* Light Amber */
                    border-left: 6px solid #ff9800; /* Deep Orange */
                    padding: 14px;
                    border-radius: 6px;
                }

                .page-title {
                    color: #00796b; /* Teal */
                    font-size: 20px;
                    font-weight: 600;
                    text-shadow: 1px 1px #e0f2f1;
                    animation: fadeInDown 1s ease-in-out;
                }

                .frappe-control input {
                    border: 2px solid #ffcc80; /* Soft Orange Border */
                    border-radius: 8px;
                    padding: 6px 10px;
                    font-family: 'Segoe UI', sans-serif;
                }

                .btn {
                    background-color: #ff7043 !important; /* Vibrant Orange */
                    border: none;
                    color: white;
                    font-weight: 600;
                    animation: bounceIn 1s;
                }

                .btn:hover {
                    background-color: #f4511e !important;
                }
            `;
            document.head.appendChild(style);

            // ▶ Show animated message
            const $msg = $('<div class="msgprint animate__animated animate__bounceIn">🎉 Stylish theme with animation loaded!</div>');
            frappe.msgprint({
                message: $msg.html(),
                title: __('Vibrant UI Enabled'),
                indicator: 'orange'
            });
        });
    }
});
// frappe.provide('frappe.ui.form');

// // has the same effect as
// window.frappe = {}
// console.log(window.frappe = {})
// window.frappe.ui = {}
// console.log(window.frappe.ui = {})
// window.frappe.ui.form = {}
// console.log(window.frappe.ui.form = {})


    }
});
