frappe.listview_settings['Chart API'] = {
    onload: function (listview) {
        listview.page.add_inner_button('📊 View Live Chart', () => {
            const dialog = new frappe.ui.Dialog({
                title: '📊 Students per Grade (Live)',
                size: 'large',
                fields: [
                    {
                        fieldname: 'chart_html',
                        fieldtype: 'HTML'
                    }
                ],
                primary_action_label: 'Close',
                primary_action() {
                    dialog.hide();
                }
            });

            dialog.show();

            const data = {
                labels: [],
                datasets: [{
                    name: "Students",
                    values: []
                }]
            };

            const chart = new frappe.ui.RealtimeChart(
                dialog.fields_dict.chart_html.wrapper,
                'chart_api_event',
                20,
                {
                    title: "Students per Grade",
                    data: data,
                    type: "line",
                    height: 300,
                    colors: ['#eb87f8ff']
                }
            );

            chart.start_updating();
        });
    }
};