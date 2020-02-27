
export const menu = [
	{
		name: "Dashboard",
		iconClass: 'zmdi zmdi-view-dashboard',
		hasChildren: false,
		link: '/dashboard/main',
		children: []
	},
	{
		name: "Customer Servicing",
		iconClass: 'zmdi zmdi-account',
		hasChildren: true,
		expanded: true,
		children: [
			{
				name: "Proposals",
				iconClass: 'zmdi zmdi-book',
				hasChildren: false,
				link: '/proposaltracking/proposals',
				children: []
			},
			{
				name: "Policies",
				iconClass: 'zmdi zmdi-assignment',
				hasChildren: false,
				link: '/policytracking/policies',
				children: []
			},
			{
				name: "Policy Renewals",
				icon: 'zmdi zmdi-refresh-alt',
				hasChildren: false,
				link: '/policyrenewal/policies',
				children: []
			},
			{
				name: "Claims",
				iconClass: 'zmdi zmdi-file-plus',
				hasChildren: true,
				expanded: false,
				afterIconShow: "zmdi zmdi-plus-square",
				afterIconHide: "zmdi zmdi-minus-square",
				children: [
					{
						name: "File a claim",
						// icon: 'zmdi zmdi-refresh-alt',
						hasChildren: false,
						link: '/claims/claimtable',
						children: []
					},

					{
						name: "Claims MIS",
						// icon: 'zmdi zmdi-refresh-alt',
						hasChildren: false,
						link: '/claims/claims-mis',
						children: []
					}
				]
			},
			{
				name: "Send Healthjinn Link",
				iconClass: 'zmdi zmdi-file-text',
				hasChildren: false,
				link: '/send-healthjinn-link',
				children: []
			},

			{
				name: "Endorsements",
				iconClass: 'zmdi zmdi-file-text',
				hasChildren: false,
				link: '/endorsement/my-request',
				children: []
			}

		]
	},
	{
		name: "Agent Servicing",
		iconClass: 'zmdi zmdi-account-o',
		hasChildren: true,
		expanded: false,
		children: [
			{
				name: "My Profile",
				iconClass: 'zmdi zmdi-account-circle',
				hasChildren: false,
				link: '/profile',
				children: []
			},
			{
				name: "Rewards",
				iconClass: 'zmdi zmdi-card-giftcard',
				hasChildren: false,
				link: '/rewards-and-recognition/view-contests',
				children: []
			},
			{
				name: "Service Requests",
				iconClass: 'zmdi zmdi-wrench',
				hasChildren: false,
				link: '/service-request/my-request',
				children: []
			},
			{
				name: "Commission",
				iconClass: 'zmdi zmdi-chart',
				hasChildren: false,
				link: '/commissions',
				children: []
			},
			{
				name: "Knowledge Bank",
				iconClass: 'zmdi zmdi-collection-pdf',
				hasChildren: false,
				link: '/knowledgebank/product',
				children: []
			},
			{
				name: "Network Hospital",
				iconClass: 'zmdi-hospital-alt',
				hasChildren: false,
				link: '/network-hospital/list',
				children: []
			},
		]
	},
	{
		name: "Contact us",
		iconClass: 'zmdi zmdi-comments',
		hasChildren: false,
		link: '/feedback',
		children: []
	},
	{
		name: "Medical Center",
		iconClass: 'zmdi zmdi-hospital',
		hasChildren: false
	}

]