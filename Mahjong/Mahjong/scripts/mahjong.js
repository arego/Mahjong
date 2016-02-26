function Mahjong(jsonParams) {
	'use strict';
	this.MahjongID = jsonParams.MahjongID || 0;
	this.Cell = jsonParams.Cell || '0';
	this.Phone = jsonParams.Phone || '0';
	this.Fax = jsonParams.Fax || '0';
	this.Email = jsonParams.Email || '0';
	this.Website = jsonParams.Website || '0';
	this.Adress = jsonParams.Adress || '0';
	this.Age = jsonParams.Age || '0';
	this.Password = jsonParams.Password || '0';
	this.LocalDateTime = jsonParams.LocalDateTime|| '0';
	this.Date = jsonParams.Date || '0';
	this.DateTime = jsonParams.DateTime|| '0';
	this.Time = jsonParams.Time || '0';
	this.Month = jsonParams.Month || '0';
	this.Week = jsonParams.Week || '0';
	this.CountryID = jsonParams.CountryID || '0';
}