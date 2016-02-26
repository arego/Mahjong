(function () {
	'use strict';
	var mahjongs = [
		new Mahjong({ MahjongID: 1, Cell: '094485425', Phone: '010-115-844', Fax: '033', Email: 'araab3@gmail.com', Website: 'armdeveloper.tk', Adress: 'Lepsius 25/45', Age: '19', Password: 'A123456', LocalDateTime: '1996-06-03T00:00:00.0', Date: '1996-06-03', DateTime: new Date(96, 6, 3).toDateString(), Time: '01:20', Month: '1996-06', Week: '1996-W13', CountryID: '0', }),
		new Mahjong({ MahjongID: 2, Cell: '096685585', Phone: '010-485-425', Fax: '034', Email: 'araab4@gmail.com', Website: 'armdeveloper.am', Adress: 'Lepsius 25/45', Age: '20', Password: 'A123456', LocalDateTime: '1995-05-05T00:00:00.0', Date: '1995-05-05', DateTime: new Date(95, 7, 5).toDateString(), Time: '03:40', Month: '1997-07', Week: '1995-W14', CountryID: '6', }),
		new Mahjong({ MahjongID: 3, Cell: '098888888', Phone: '010-685-585', Fax: '035', Email: 'araab5@gmail.com', Website: 'armdeveloper.ru', Adress: 'Lepsius 25/45', Age: '21', Password: 'A123456', LocalDateTime: '1994-08-07T00:00:00.0', Date: '1994-08-07', DateTime: new Date(94, 8, 7).toDateString(), Time: '08:08', Month: '1998-08', Week: '1994-W15', CountryID: '3', }),
	];
	$(function () {
		const PANEL_COUNT = 4, WHITE_SPACE = ' ';
		function changeSize(height, display) {
			var content = $('.content')
					.css('height', height),
				panels = content.find('panel');
			for (i = 0; i < panels.length; i++) {
				panels[i].css('display', display);
			}
		}
		function slide() {
			elements[0][1].attr('src', '../content/images/_img' + num + '.jpg');
			num = (num + 1) % 24;
		}
		var body = document.body,
			num = 1,
			marquee = $('<section>', {
				id: 'marquee', 'class': 'marquee', text: 'Mahjong'
			}),
			sliderSpeed = $('<input>', {
				type: 'range', id: 'sliderSpeed', tooltip: 'Slider', min: '-1000', max: '-200',
				css: { cursor: 'url(../content/images/cursor2.png) 1 1, auto' }
			})
					.on('change', function () {
						clearInterval(slideTimer);
						slideTimer = setInterval(slide, -sliderSpeed.val());
					}),
			divParent = $('<div>', { 'class': 'content' }
						),
			header = $('<header>', {
				'class': 'header',
				append: [$('<img>', {
					'class': 'logo',
					src: '../content/images/mahjong_logo.png', title: 'Logo'
				}),
					marquee,
					$('<div>', {
						'class': 'options',
						append: [$('<figure>', {
							id: 'close', 'class': 'close', title: 'Close',
							text: 'X'
						})
						.$click(function () {
							popup.css('display', 'none');
							$('table').css('display', 'block');
						}),
							$('<figure>', {
								id: 'open', 'class': 'maximize', title: 'Restore Down',
								text: '□'
							})
						.$click(function () {
							changeSize('400px', 'inline-block');
						}),
						$('<figure>', {
							id: 'minimize', 'class': 'minimize', title: 'Minimize',
							text: '_'
						})
						.$click(function () {
							changeSize(0, 'none');
						})
						]
					})
				]
			}),
			form = $('<form>', {
				'class': 'form',
				append: [
						$('<input>', { type: 'hidden', name: 'MahjongID', id: 'MahjongID', value: 0 }),
						divParent
				]
			}),
			section = $('<section>', { 'class': 'section' }),
			footer = $('<footer>'),
			elements = [
				[
					sliderSpeed,
					$('<img>', {
						id: 'imgSlide', 'class': 'imgSlide', title: 'Mahjong cards', src: '../content/images/_img0.jpg'
					}),
					$('<input>', {
						type: 'number', id: 'Cell', title: 'Cell', placeholder: 'Write cell'
					}),
					$('<input>', {
						type: 'tel', id: 'Phone', title: 'Phone', placeholder: 'Write phone'
					}),
					$('<input>', {
						type: 'text', id: 'Fax', title: 'Fax', placeholder: 'Write fax'
					}),
					$('<input>', {
						type: 'email', id: 'Email', title: 'Email', placeholder: 'Write email'
					})
					.on('change', function () {
						this.attr({ title: this.val() });
					}),
				], [
					$('<video>', {
						controls: 'controls', 'class': 'video',
						append: $('<source>', {
							src: '../content/videos/mahjong.mp4', vmode: 'transparent',
							css: { height: '180px' }
						})
					}),
					$('<input>', {
						type: 'url', id: 'Website', 'class': 'website', title: 'Website', placeholder: 'E.g.http://www.imahjong.com/'
					}),
				], [
					$('<input>', {
						type: 'text', id: 'Adress', title: 'Adress', placeholder: 'Write adress'
					}),
					$('<input>', {
						type: 'number', id: 'Age', title: 'Age', placeholder: 'Write age'
					}),
					$('<input>', {
						type: 'password', id: 'Password', name: 'password', title: 'Password', placeholder: 'Write password'
					}),//.on('change', verifyPassword),
					$('<input>', {
						type: 'password', id: 'ConfPassword', title: 'Confirm password', placeholder: 'Confirm password'
					}),//.on('change', verifyPassword),
					$('<input>', {
						type: 'search', id: 'Search', title: 'Search', placeholder: 'Search'
					}),
				], [
					$('<input>', {
						type: 'datetime-local', id: 'LocalDateTime', title: 'Datetime-local', value: '2013-1-8'
					}),
					$('<input>', {
						type: 'date', id: 'Date', title: 'Date', value: '2014-12-29'
					}),
					$('<input>', {
						type: 'datetime', id: 'DateTime', title: 'Datetime', placeholder: 'Write date time'
					}),
					$('<input>', {
						type: 'time', id: 'Time', title: 'Time'
					}),
					$('<input>', {
						type: 'month', id: 'Month', title: 'Month'
					}),
					$('<input>', {
						type: 'week', id: 'Week', title: 'Week'
					}),
					$('<select>', {
						title: 'Country', id: 'CountryID', name: 'CountryID',
						append: [$('<option>', { value: '0', html: 'Armenia'}),
								$('<option>', { value: '1', html: 'Germany' }),
								$('<option>', { value: '2', html: 'France' }),
								$('<option>', { value: '3', html: 'Kanada' }),
								$('<option>', { value: '4', html: 'Spain' }),
								$('<option>', { value: '5', html: 'Sweden' }),
								$('<option>', { value: '6', html: 'Russia' })
						]
					}),
				],
			],
			labels = [
				[
					$('<label>', { id: 'track', text: 'Slider Speed' }),
					$('<label>', { 'class': 'slide', text: WHITE_SPACE }),
					$('<label>', { text: 'Cell' }),
					$('<label>', { text: 'Phone' }),
					$('<label>', { text: 'Fax' }),
					$('<label>', { text: 'Email' }),
				], [
					$('<label>', { text: 'Video' }),
					$('<label>', { text: 'Website' }),
				], [
					$('<label>', { text: 'Address' }),
					$('<label>', { text: 'Age' }),
					$('<label>', { text: 'Password' }),
					$('<label>', { text: 'Confirm Password' }),
					$('<label>', { text: 'Search' }),
				], [
					$('<label>', { text: 'Datetime-Local' }),
					$('<label>', { text: 'Date' }),
					$('<label>', { text: 'Datetime' }),
					$('<label>', { text: 'Time' }),
					$('<label>', { text: 'Month' }),
					$('<label>', { text: 'Week' }),
					$('<label>', { text: 'Country' }),
				]
			],
			sectionElements = [
				$('<label>', {
					'for': 'male', title: 'Gender', 'class': 'gender',
					text: 'Gender'
				}),
				$('<ruby>', {
					append: [$('<input>', {
						id: 'male', 'class': 'male', title: 'Male', type: 'radio', name: 'gender', checked: 'checked'
					}), $('<rt>', {
						append: $('<label>', {
							'for': 'male', title: 'Male', 'class': 'male_letter',
							text: 'M'
						})
					})]
				}),
				$('<ruby>', {
					append: [$('<input>', {
						id: 'female', 'class': 'female', title: 'Female', type: 'radio', name: 'gender',
					}), $('<rt>', {
						append: $('<label>', {
							'for': 'female', title: 'Female', 'class': 'female_letter',
							text: 'F'
						})
					})
					]
				}),
				$('<label>', {
					'for': 'single', title: 'Status', 'class': 'status',
					text: 'Status'
				}),
				$('<ruby>', {
					append: [$('<input>', {
						id: 'single', 'class': 'single', title: 'Single', type: 'radio', name: 'status', checked: 'checked'
					}), $('<rt>', {
						append: $('<label>', {
							'for': 'single', title: 'Single', 'class': 'single_text',
							text: 'Single'
						})
					})]
				}),
				$('<ruby>', {
					append: [$('<input>', {
						id: 'married', 'class': 'married', title: 'Married', type: 'radio', name: 'status'
					}),
						$('<rt>', {
							append: $('<label>', {
								'for': 'married', title: 'Married', 'class': 'married_text',
								text: 'Married'
							})
						})
					]
				}),
				$('<ruby>', {
					append: [$('<input>', {
						id: 'divorced', 'class': 'divorced', title: 'Divorced', type: 'radio', name: 'status'
					}), $('<rt>', {
						append: $('<label>', {
							'for': 'divorced', title: 'Divorced', 'class': 'divorced_text',
							text: 'Divorced'
						})
					})]
				}),
				$('<nav>', {
					css: { float: 'right', width: '380px' },
					append: [($('<button>', { type: 'reset', title: 'Cancel', text: 'CANCEL' })),
							$('<button>', { type: 'submit', title: 'Save', text: 'SAVE' })
					]
				}),
			],
			backDiv = $('<div>', {
				'class': 'transparent-div'
			}),
			grid = new GridView({
				caption: 'Mahjong',
				header: {
					names: [
							{
								caption: 'ID',
								field: 'MahjongID',
								click: function () {
									var id = this.text()-1;
									popup.show();
									$('table').css('display', 'none');
									changeSize('400px', 'inline-block');
									for(let elementName in mahjongs[id]) {
										var element = $('#' + elementName);
										if(element instanceof NodeList) {
										} else if(elementName === 'CountryID') {
											element.prop('selectedIndex', mahjongs[id][elementName]);
										} else {
											if (elementName == 'Date') {
												element.val(mahjongs[id][elementName]);
											}
											element.val(mahjongs[id][elementName]);
										} 
									}
								},
								template: {
									tagName: '<button>', attr: {
										'class': 'button_id',
										title: 'Go to form',
										//click: function () {
										//	alert(this);
										//}
									}
								}
							},
							{ caption: 'Cell', field: 'Cell' },
							{ caption: 'Phone', field: 'Phone' },
							{ caption: 'Fax', field: 'Fax' },
							{ caption: 'Email', field: 'Email' },
							{ caption: 'Website', field: 'Website' },
							{ caption: 'Adress', field: 'Adress' },
							{ caption: 'Age', field: 'Age' },
							{ caption: 'Date', field: 'Date' },
							{ caption: 'Time', field: 'Time' },
							{ caption: 'Month', field: 'Month' },
							{ caption: 'Week', field: 'Week' },
							{ caption: 'Country', field: 'CountryID' },
					]
				},
				data: mahjongs
			}),
			popup = new Popup({ id: 'popupMahjong', titlebar: header, content: form.append(grid), buttonbar: footer, dimLayer: backDiv });
		body.append(popup, grid);

		for (var i = 0; i < PANEL_COUNT; i++) {
			var panel = $('<panel>');
			for (var j = 0; j < elements[i].length; j++) {
				panel.append(labels[i][j], elements[i][j]);
			}
			divParent.append(panel);
		}

		var inps = $('input:not([type=password])');
		for (i = 0; i < inps.length; i++) {
			inps[i].on('change', function () {
				this.attr({ title: this.val() });
			})
		}

		for (var i = 0; i < sectionElements.length; i++) {
			form.append(section.append(sectionElements[i]));
		}

		var slideTimer = setInterval(slide, -sliderSpeed.val());

		var message = 'Mahjong',
			index = 0;
		setInterval(function () {
			var chunck = (message + WHITE_SPACE + message).substr(index, 8);
			index = (index + 1) % message.length;
			marquee.text(chunck);
		}, 400);

		//function verifyPassword() {
		//	var password = $('#Password'),
		//		confirm = $('#ConfPassword');
		//
		//	if (password.value !== confirm.value) {
		//		$('[type="submit"]').attr('disabled', 'disabled');
		//	}
		//	else {
		//		$('[type="submit"]').remove('disabled', 'disabled');
		//	}
		//};

	});
})();