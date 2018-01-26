K.define("UserModel", {
	extend: "Model",
	fields: [{
		"name": "email",
		"type": "string",
		"nullable": false
	},
	{
		"name": "photo",
		"type": "string",
		"nullable": true
	},
	{
		"name": "password",
		"type" : "string"
	},
	{
		"name": "token",
		"type": "string",
		"nullable": false
	}],
	associations: [{
		"name": "rol",
		"class": "RoleModel",
		"type": "hasMany",		
	},
	{
		"name": "company",
		"class": "CompanyModel",
		"type": "hasMany",		
	},
	{
		"name": "userGroups",
		"class": "UserGroupModel",
		"type": "hasMany",		
	},
	{
		"name": "defaultCompany",
		"class": "CompanyModel",
		"type": "hasOne",
		'builder': 'CompanyBuilder'
	},
	{
		"name": "person",
		"class": "PersonModel",
		"type": "hasOne",
		"nullable": false,
		'builder': 'PersonBuilder'
	},
	{
		"name": "currentCompany",
		"class": "CompanyModel",
		"type": "hasOne",
		'builder': 'CompanyBuilder'
	}]
})