frappe.pages['class'].on_page_load = function (wrapper) {
	const page = frappe.ui.make_app_page({
		parent: wrapper,
		title: ' Class Dashboard',
		single_column: true
	});

	page.set_title_sub("Manage your classroom data efficiently");
	page.set_indicator("Live", "green");

	page.set_primary_action('➕ Add Class', () => {
		frappe.prompt([
			{ label: 'Class Name', fieldname: 'class_name', fieldtype: 'Data', reqd: 1 },
			{ label: 'Class Code', fieldname: 'class_code', fieldtype: 'Data', reqd: 1 }
		], (values) => {
			frappe.msgprint(`✅ Added Class: <b>${values.class_name}</b> (${values.class_code})`);
		}, 'Enter Class Details');
	}, 'octicon octicon-plus');

	const grade_field = page.add_field({
		label: 'Filter by Grade',
		fieldtype: 'Select',
		fieldname: 'grade',
		options: ['All', 'Grade 1', 'Grade 2', 'Grade 3'],
		default: 'All',
		change() {
			frappe.msgprint(`🎓 Showing results for: ${grade_field.get_value()}`);
		}
	});

	page.add_inner_button('📈 View Analytics', () => {
		const analytics_html = `
			<div style="padding: 10px;">
				<h4>📊 Class Analytics</h4>
				<ul style="list-style: none; padding-left: 0;">
					<li><b>Average Students per Class:</b> 28</li>
					<li><b>Highest Enrolled Class:</b> Grade 3 - A</li>
					<li><b>Recent Performance Score:</b> 82%</li>
					<li><b>Attendance Rate:</b> 94%</li>
					<li><b>Exam Pass Percentage:</b> 88%</li>
				</ul>
			</div>
		`;
		frappe.msgprint({
			title: 'Class Analytics',
			message: analytics_html,
			indicator: 'blue'
		});
	}, 'Actions');

	page.add_inner_button('🔄 Refresh Data', () => {
		location.reload();
	}, 'Actions');

	$(page.body).append(`
		<style>
			.custom-header, .custom-footer {
				background: #f9fafb;
				padding: 1.2rem 2rem;
				border-radius: 8px;
				text-align: center;
			}
			.custom-footer {
				margin-top: 3rem;
				font-size: 0.9rem;
				color: #777;
			}
			.dashboard-grid {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
				gap: 1.5rem;
				margin-top: 2rem;
			}
			.card {
				background: linear-gradient(to right, #e3f2fd, #e0f7fa);
				padding: 1.5rem;
				border-radius: 12px;
				box-shadow: 0 4px 12px rgba(0,0,0,0.08);
				transition: transform 0.3s ease;
			}
			.card:hover {
				transform: translateY(-6px);
			}
			.card h4 {
				margin-bottom: 0.6rem;
				font-size: 1.2rem;
				color: #222;
			}
			.card p {
				font-size: 0.95rem;
				color: #555;
			}
		</style>

		<!-- Header -->
		<div class="custom-header">
			<h2>🎓 Welcome to Divine Public School</h2>
			<p>Track, manage, and analyze your class data in one place.</p>
		</div>

		<!-- Banner Image -->
		<div class="class-image" style="text-align: center; margin: 30px 0;">
			<img src="https://divineschoolziradei.in/Admin/Slider/10.jpg" 
				 alt="Class Banner"
				 style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
		</div>

		<!-- Info Section -->
		<div style="margin-top: 3rem; text-align: center;">
			<h3>📘 Class Management Overview</h3>
			<p style="color: #555; max-width: 640px; margin: auto;">
				This dashboard gives a quick overview of academic resources. Add new classes, monitor student data, and prepare for exams — all in one view.
			</p>
		</div>

		<!-- Stats Cards -->
		<div class="dashboard-grid">
			<div class="card">
				<h4>Total Classes</h4>
				<p>15</p>
			</div>
			<div class="card">
				<h4>Total Students</h4>
				<p>430</p>
			</div>
			<div class="card">
				<h4>Active Teachers</h4>
				<p>22</p>
			</div>
			<div class="card">
				<h4>Upcoming Exams</h4>
				<p>3 next week</p>
			</div>
		</div>

		<!-- Footer -->
		<div class="custom-footer">
			&copy; ${new Date().getFullYear()} EduSmart Systems. All rights reserved.
		</div>
	`);
};
