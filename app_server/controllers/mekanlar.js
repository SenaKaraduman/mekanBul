const anaSayfa=function(req,res) {
	res.render('mekanlar-liste',{
		'baslik':'Anasayfa',
		'sayfaBaslik':{
			'siteAd':'MekanBul',
			'aciklama':'Yakınınızdaki Mekanları Keşfedin!'
		},
		'mekanlar':[
			{
				'ad':'Starbucks',
				'adres':'Centrum Garden',
				'puan':3,
				'imkanlar':['Kahve','Pasta','Kek','Wifi'],
				'mesafe':'10km'
			},
			{
				'ad':'Gloria Jeans',
				'adres':'Iyaş',
				'puan':4,
				'imkanlar':['Kahve','Pasta','Kek','Wifi'],
				'mesafe':'5km'
			}




		]




	});

}

const mekanBilgisi=function(req,res) {
	res.render('mekan-detay',{
		'title':'Mekan Bilgisi',
		'sayfaBaslik':'Starbucks',
		'mekanBilgisi':{
			'ad':'Starbucks',
			'adres':'Centrum Garden',
			'puan':3,
			'imkanlar':['Kahve','Pasta','Çay'],
			'koordinatlar':{
				'enlem':37.781885,
				'boylam':30.566034
			},
			'saatler':[
				{
					'gunler':'Pazartesi-Cuma',
					'acilis':'7:00',
					'kapanis':'23:30',
					'kapali':false
				},
				{
					'gunler':'Cumartesi',
					'acilis':'7:00',
					'kapanis':'23:30',
					'kapali':false

				},
				{
					'gunler':'Pazar',
					'kapali':true
				}




			],
			'yorumlar':[
				{
					'yorumYapan':'Sena',
					'puan':3,
					'tarih':'18 Ekim 2017',
					'yorumMetni':'Perfect'
				}


			]
		}






	});
}

const yorumEkle=function(req,res) {
	res.render('yorum-ekle',{
		'baslik':'Yorum Ekle'
		





	});
}



module.exports= {
	anaSayfa,
	mekanBilgisi,
	yorumEkle
};