function Country(params) {
	'use strict';
	this.CountryId = params.CountryId || 0;
	this.CountryName = params.CountryName || null;
}

var CountryCollection = [
	new Country({ CountryId: 1, CountryName: 'Armenia' }),
	new Country({ CountryId: 2, CountryName: 'Germany' }),
	new Country({ CountryId: 3, CountryName: 'France' }),
	new Country({ CountryId: 4, CountryName: 'Kanada' }),
	new Country({ CountryId: 5, CountryName: 'Spain' }),
	new Country({ CountryId: 6, CountryName: 'Sweden' }),
	new Country({ CountryId: 7, CountryName: 'Russia' })
];
/*
Country inherits from Node
CountryCollection inherit from NodeList
*/