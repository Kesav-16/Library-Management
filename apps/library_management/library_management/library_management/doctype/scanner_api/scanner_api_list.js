frappe.listview_settings['Scanner API'] = {
    onload(listview) {
        listview.page.add_inner_button('📷 Scan Hotspot', () => {
            const scanner = new frappe.ui.Scanner({
                dialog: true,
                multiple: false,
                async on_scan(data) {
                    try {
                        const text = data.decodedText;
                        console.log("Scanned text:", text);

                        if (text.startsWith("WIFI:")) {
                            // More tolerant matching for S: and P:
                            const ssidMatch = text.match(/S:([^;]*)/i);
                            const passMatch = text.match(/P:([^;]*)/i);

                            const username = ssidMatch ? ssidMatch[1].trim() : null;
                            const password = passMatch ? passMatch[1].trim() : null;

                            console.log("Parsed username (SSID):", username);
                            console.log("Parsed password:", password);

                            if (!username || !password) {
                                frappe.msgprint("❌ Couldn't parse WiFi QR code.");
                                return;
                            }

                            // Show both in popup
                            frappe.msgprint({
                                title: "✅ Hotspot Scanned",
                                message: `Username (SSID): <b>${username}</b><br>Password: <b>${password}</b>`,
                                indicator: "green"
                            });

                            // Save to your Doctype
                            frappe.call({
                                method: "frappe.client.insert",
                                args: {
                                    doc: {
                                        doctype: "Scanner API",
                                        username: username,
                                        password: password
                                    }
                                },
                                callback: function (r) {
                                    console.log("Record saved:", r.message);
                                    frappe.set_route("List", "Scanner API");
                                }
                            });

                        } else {
                            frappe.msgprint("❌ Invalid QR format. Expected: WIFI:T:WPA;S:SSID;P:Password;;");
                        }
                    } catch (e) {
                        console.error("Scanner Error:", e);
                        frappe.msgprint("❌ Error processing scanned QR.");
                    }
                }
            });
        });
    }
};
