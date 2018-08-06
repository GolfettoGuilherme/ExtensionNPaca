(function ($) {

    var self = $.nLuPaca = new function () { };

    $.extend(self, {

        nLuPacaBackgrounds: [
            'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/22196067_1548166425247919_3985155340724351383_n.jpg?_nc_cat=0&oh=fa29eba1b9706adcfa793cbc4c2d51a4&oe=5C106F60'
        ],

        nLuPacaImgs: [
			'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/31841946_1763102693754290_4402394967922704384_n.jpg?_nc_cat=0&oh=c60a7e20433b1a080d375720b686921c&oe=5C0B3352',
			'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/25396136_1618491291548765_7396447932974578974_n.jpg?_nc_cat=0&oh=763f0a7bdf30fc0b75e5ef43764f2f91&oe=5BFE42FC',
			'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/22154172_1548166465247915_1845576829888201125_n.jpg?_nc_cat=0&oh=e3fb512f67cd514861c280e8c1018598&oe=5C0FDA14',
			'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/22196067_1548166425247919_3985155340724351383_n.jpg?_nc_cat=0&oh=fa29eba1b9706adcfa793cbc4c2d51a4&oe=5C106F60',
			'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/10513301_757281167669786_661416994073272355_n.jpg?_nc_cat=0&oh=582ee52e15b9ab16107a0a6827087243&oe=5C023843',
			'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/10407399_695300390534531_2791195573805664449_n.jpg?_nc_cat=0&oh=bbe5150780fe1270c972ed3cf3ccbe44&oe=5BC97BC2',
			'https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/398578_274271839304057_368895361_n.jpg?_nc_cat=0&oh=9a4538a304d5da279191905dd4fea7db&oe=5BD50542'
        ],

        handleImages: function (lstImgs, time) {
            $.each($('img'), function (i, item) {
                //Pula caso a imagem já tenha sido trocada
                if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                    var h = $(item).height();
                    var w = $(item).width();

                    //if a imagem estiver carregada
                    if (h > 0 && w > 0) {
                        //Replace
                        $(item).css('width', w + 'px').css('height', h + 'px');
                        $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                    }
                    else {
                        //Replace quando carregado
                        $(item).load(function () {
                            //impedir loop infinito
                            if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                                var h = $(item).height();
                                var w = $(item).width();
                                $(item).css('width', w + 'px').css('height', h + 'px');
                                $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                            }
                        });
                    }
                }
            });

            //Continua substituindo
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo: function (bgImgs, time) {
            $backgroundImages = $(
                '[class*=logo], [class*=header], [id*=header], [id*=logo],' +
                '[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
                '[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,' +
                '[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a'
            )
                .filter(function () {
                    backgroundImg = $(this).css('background-image');
                    return backgroundImg && backgroundImg != 'none';
                }
                );

            $backgroundImages.each(function (i, item) {
                $(item).css('background-image', 'url(' + bgImgs[Math.floor(Math.random() * bgImgs.length)] + ')');
                $(item).css('background-position', '0 0');
                $(item).css('background-repeat', 'no-repeat');
                $(item).css('background-size', 'contain');
            });
        }
    });

    //Executar
    $(function () {
        self.handleImages(self.nLuPacaImgs, 3000);
        self.handleLogo(self.nLuPacaBackgrounds, 3000);
    });
})(jQuery);