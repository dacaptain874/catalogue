const products = [
  {id: "24", title: "delfin 3 in 1", price: 6100, quantity: 1, quantityBlok: 1, blok: 10, description: "delfin salfetka 3ta 15x15", img: "https://images.uzum.uz/cpt96dr6eisq2rkdhub0/original.jpg"},
  {id: "28", title: "salixan 3 in 1", price: 7200, quantity: 1, quantityBlok: 1, blok: 10, description: "salixan salfetka 3ta 15x15", img: "https://images.uzum.uz/cfqtc27hgiov1qicnh80/original.jpg"},
  {id: "29", title: "varita 3 in 1", price: 7650, quantity: 1, quantityBlok: 1, blok: 10, description: "verita salfetka 3ta 15x15", img: "https://images.uzum.uz/cu1odkc5j42bjc47rngg/original.jpg"},
  {id: "25", title: "niso magnum", price: 23200, quantity: 1, quantityBlok: 1, blok: 20, description: "niso magnum sochiq 50x60", img: "https://images.uzum.uz/cstf1i34nkdilc6batkg/original.jpg"},
  {id: "26", title: "niso mega", price: 29600, quantity: 1, quantityBlok: 1, blok: 20, description: "niso mega pollata 80x60", img: "https://cdn.b-catalog.ru/bcbucket/public/a/2469/2024/1/3/19a80aa3-6e6d-47ae-b632-bfa9b8a6edc5"},
  {id: "30", title: "pollata 70x140", price: 29600, quantity: 1, quantityBlok: 1, blok: 20, description: "pollata 70x140", img: "https://images.uzum.uz/cjdrg0svutv09e7769vg/original.jpg"},
  {id: "27", title: "niso colorpack", price: 23233, quantity: 1, quantityBlok: 1, blok: 20, description: "niso sochiq 4ta 35x35", img: "https://cdn.b-catalog.ru/bcbucket/public/a/2469/2024/1/3/939161eb-13a9-4456-a7e3-1f57f6eeb572"},
  {id: "1", title: "delfin lider", price: 7800, quantity: 1, quantityBlok: 1, blok: 20, description: "delfin latta lider 35x35", img: "https://images.uzum.uz/cen8jmgl08k0o9qh2lg0/original.jpg"},
  {id: "23", title: "delfin smart", price: 10500, quantity: 1, quantityBlok: 1, blok: 20, description: "delfin latta smart 35x35", img: "https://images.uzum.uz/cl3n9alennt861iojncg/original.jpg"},
  {id: "2", title: "niso", price: 8400, quantity: 1, quantityBlok: 1, blok: 20, description: "delfin latta niso 40x40", img: "https://images.uzum.uz/csdlsf5pq3ghb2qktn40/original.jpg"},
  {id: "3", title: "niso xxl", price: 13500, quantity: 1, quantityBlok: 1, blok: 15, description: "delfin latta niso 80x60", img: "https://images.uzum.uz/csstcd3vgbkpg1nmos4g/original.jpg"},
  {id: "4", title: "niso gigant size", price: 19500, quantity: 1, quantityBlok: 1, blok: 10, description: "delfin latta niso 80x100", img: "https://images.uzum.uz/cqsnj4ksslomdvnkk8k0/original.jpg"},
  {id: "5", title: "niso gold", price: 10500, quantity: 1, quantityBlok: 1, blok: 20, description: "delfin latta gold 40x40", img: "https://images.uzum.uz/cfl3dmp25kualhm8gfj0/original.jpg"},
  {id: "6", title: "niso gold gigant", price: 20500, quantity: 1, quantityBlok: 1, blok: 20, description: "delfin latta gold 80x100", img: "https://images.uzum.uz/cslpottpq3ghb2qn9580/original.jpg"},
  {id: "13", title: "strec 300 30m", price: 4999, quantity: 1, quantityBlok: 1, blok: 80, description: "300 model niso strec", img: "https://images.uzum.uz/cg1fe07hj8j9g69912a0/original.jpg"},
  {id: "14", title: "strec 500 40m", price: 6200, quantity: 1, quantityBlok: 1, blok: 80, description: "500 model niso strec", img: "https://images.uzum.uz/ci0c8dt6sfhndlbnp8ug/original.jpg"},
  {id: "15", title: "strec 800 50m", price: 6950, quantity: 1, quantityBlok: 1, blok: 80, description: "800 model niso strec", img: "https://images.uzum.uz/cir4u1l40v9pplt6670g/original.jpg"},
  {id: "16", title: "falga 10m", price: 9900, quantity: 1, quantityBlok: 1, blok: 80, description: "10 metr niso falga", img: "https://images.uzum.uz/chqovurltlh4bk4kjau0/original.jpg"},
  {id: "17", title: "falga 7.5m 45sm", price: 17500, quantity: 1, quantityBlok: 1, blok: 80, description: "7.5 metr niso falga", img: "https://images.uzum.uz/clc7lb5ennt861iq5oig/original.jpg"},
  {id: "18", title: "pergament 6m", price: 9600, quantity: 1, quantityBlok: 1, blok: 80, description: "6 metr niso pergament", img: "https://images.uzum.uz/cgtp5o7hj8j9g69deg40/original.jpg"},
  {id: "19", title: "pergament 4m", price: 8900, quantity: 1, quantityBlok: 1, blok: 80, description: "4 metr simba pergament", img: "https://images.uzum.uz/ciqhqmj6edfostij7g70/original.jpg"},
  {id: "20", title: "gazfalga", price: 4680, quantity: 1, quantityBlok: 1, blok: 80, description: "gazfalga 60x50", img: "https://images.uzum.uz/cfr1v3vhgiov1qicous0/original.jpg"},
  {id: "21", title: "strec 20m 15sm", price: 12000, quantity: 1, quantityBlok: 1, blok: 80, description: "nanjiwrap strech 15sm", img: "https://images.uzum.uz/cjbilk4vutv1p29l2ce0/original.jpg"},
  {id: "22", title: "strec 100m 45sm", price: 52300, quantity: 1, quantityBlok: 1, blok: 80, description: "nanjiwrap strech 45sm", img: "https://images.uzum.uz/cjdh8h4vutv8a2v9vj0g/original.jpg"},
  {id: "31", title: "krot", price: 2900, quantity: 1, quantityBlok: 1, blok: 80, description: "krot poroshok", img: "https://images.uzum.uz/cqie63cqvsse8leteuk0/original.jpg"},
  {id: "32", title: "chistiy kazan", price: 2900, quantity: 1, quantityBlok: 1, blok: 80, description: "chistiy kazan poroshok", img: "https://images.uzum.uz/cjicju4vutv1klhdq2a0/original.jpg"},
  {id: "33", title: "comet (Uzb)", price: 8500, quantity: 1, quantityBlok: 1, blok: 24, description: "comet chistol 450gr", img: "https://images.uzum.uz/cbrqm7cff5b7qe6p5iag/original.jpg"},
  {id: "34", title: "barf (Eron)", price: 8500, quantity: 1, quantityBlok: 1, blok: 24, description: "barf chistol 450gr", img: "https://images.uzum.uz/cq2rmcr5qt1gj8de084g/original.jpg"},
  {id: "35", title: "Cif (Eron)", price: 89000, quantity: 1, quantityBlok: 1, blok: 24, description: "Cif gel 2000ml", img: "https://dkstatics-public.digikala.com/digikala-products/1f3ffed117bbc2bee9e5902142517ea81c57bdc0_1651393106.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90"},
  {id: "36", title: "Ariel 3kg (Rossiya)", price: 69900, quantity: 1, quantityBlok: 1, blok: 24, description: "Ariel 3kg soda", img: "https://images.uzum.uz/cu16mdlht56ksubcse7g/original.jpg"},
  {id: "37", title: "Ariel 1.5kg (Rossiya)", price: 36940, quantity: 1, quantityBlok: 1, blok: 24, description: "Ariel 1.5kg soda", img: "https://images.uzum.uz/ctaqo7mi4n3ehka2v5sg/original.jpg"},
  {id: "38", title: "Ariel 450gr (Rossiya)", price: 16220, quantity: 1, quantityBlok: 1, blok: 24, description: "Ariel 450gr soda", img: "https://images.uzum.uz/ckvo507n7c6qm23h3rmg/original.jpg"},
  {id: "39", title: "Persil 3kg (Rossiya)", price: 69900, quantity: 1, quantityBlok: 1, blok: 24, description: "Persil 3kg soda", img: "https://images.uzum.uz/ctmfngcopsf31vcs79e0/original.jpg"},
  {id: "40", title: "Persil 1.5kg (Rossiya)", price: 44900, quantity: 1, quantityBlok: 1, blok: 24, description: "Persil 1.5kg soda", img: "https://images.uzum.uz/csqqjurvgbkpg1nm6bb0/original.jpg"},
  {id: "41", title: "Persil 1.5kg (Turk)", price: 44700, quantity: 1, quantityBlok: 1, blok: 24, description: "Persil 1.5kg soda", img: "https://images.uzum.uz/cl3p6h7n7c6qm23hs3ig/original.jpg"},
  {id: "44", title: "Tide 3kg (Rossiya)", price: 69900, quantity: 1, quantityBlok: 1, blok: 24, description: "Tide 3kg soda", img: "https://images.uzum.uz/cq75n1niraaj97sj5h4g/original.jpg"},
  {id: "45", title: "Tide 1.5kg (Rossiya)", price: 37300, quantity: 1, quantityBlok: 1, blok: 24, description: "Tide 1.5kg soda", img: "https://images.uzum.uz/cp5l9040u44tu6dqf6o0/original.jpg"},
  {id: "43", title: "Mif 2kg (Rossiya)", price: 41700, quantity: 1, quantityBlok: 1, blok: 24, description: "Mif 2kg soda avtomat", img: "https://images.uzum.uz/ctknlttht56qpot89ok0/original.jpg"},
  {id: "44", title: "Mif 400gr (Rossiya)", price: 9999, quantity: 1, quantityBlok: 1, blok: 11, description: "Mif 400gr soda avtomat", img: "https://images.uzum.uz/cbr4jkkff5b7qe6p57o0/original.jpg"},
  {id: "42", title: "Abc 1.5kg (Turk)", price: 42200, quantity: 1, quantityBlok: 1, blok: 24, description: "Abc 1.5kg soda original", img: "https://images.uzum.uz/cc6sqjeha88ep89kkv0g/original.jpg"},
  {id: "85", title: "sovun camay", price: 11700, quantity: 1, quantityBlok: 1, blok: 4, description: "camay sovun 166gr", img: "https://images.uzum.uz/crp8ibqjot51rkb2oam0/original.jpg"},
  {id: "86", title: "sovun palmolive eron", price: 11700, quantity: 1, quantityBlok: 1, blok: 6, description: "palmolive sovun 170gr", img: "https://images.uzum.uz/ciqjkbl6sfhndlbqieug/original.jpg"},
  {id: "89", title: "clear shampun eron", price: 21000, quantity: 1, quantityBlok: 1, blok: 6, description: "clear shampun 200ml", img: "https://images.uzum.uz/cpunrk0sarnfdo99kipg/original.jpg"},
  {id: "90", title: "dove shampun", price: 69900, quantity: 1, quantityBlok: 1, blok: 6, description: "dove shampun 680ml", img: "https://images.uzum.uz/cs11ve40u44g6joqo0g0/original.jpg"},
  {id: "91", title: "haci sakir shampun", price: 21800, quantity: 1, quantityBlok: 1, blok: 6, description: "haci sakir shampun 500ml", img: "https://images.uzum.uz/cs11ve40u44g6joqo0g0/original.jpg"},
  {id: "92", title: "head & shoulders", price: 36700, quantity: 1, quantityBlok: 1, blok: 6, description: "h&shoulders shampun 330ml", img: "https://images.uzum.uz/cnbnotp25kub33f4rlvg/original.jpg"},
  {id: "99", title: "azelit (rossiya)", price: 22700, quantity: 1, quantityBlok: 1, blok: 8, description: "azelit qazan, komfortka 600ml", img: "https://images.uzum.uz/cslvigrvgbkipf22qteg/original.jpg"},
  {id: "100", title: "cif (turk)", price: 21400, quantity: 1, quantityBlok: 1, blok: 10, description: "gif tozalovchi gel 665ml", img: "https://images.uzum.uz/cjd451cjvf2mtfam47p0/original.jpg"},
  {id: "101", title: "calgon", price: 43400, quantity: 1, quantityBlok: 1, blok: 10, description: "calgon tabletka 15ta", img: "https://images.uzum.uz/cm36so5aqb253442cd8g/original.jpg"},
  {id: "102", title: "colgate fresh (dubai)", price: 16400, quantity: 1, quantityBlok: 1, blok: 12, description: "colgate max fresh 100ml", img: "https://images.uzum.uz/cmb6smjifoubkc6munqg/original.jpg"},
  {id: "103", title: "colgate white (dubai)", price: 17300, quantity: 1, quantityBlok: 1, blok: 12, description: "colgate optic white 75ml", img: "https://images.uzum.uz/cio15e75d7kom1tjqrhg/original.jpg"},
  {id: "104", title: "colgate total (dubai)", price: 26400, quantity: 1, quantityBlok: 1, blok: 12, description: "colgate total 100ml", img: "https://images.uzum.uz/cccmvemha8813vtohiqg/original.jpg"},
  {id: "105", title: "domestos (rossiya)", price: 19600, quantity: 1, quantityBlok: 1, blok: 12, description: "domestos 500ml", img: "https://images.uzum.uz/cggnj8nhj8j9g69b4nvg/original.jpg"},
  {id: "106", title: "fairy", price: 19600, quantity: 1, quantityBlok: 1, blok: 12, description: "fairy gel 900ml", img: "https://images.uzum.uz/clhm68vn7c6qm23ki100/original.jpg"},
  {id: "107", title: "lenor granula", price: 68800, quantity: 1, quantityBlok: 1, blok: 12, description: "lenor 210gr kapsula analogi", img: "https://images.uzum.uz/cpe8buscrcfqljg1k7dg/original.jpg"},
  {id: "108", title: "lenor konditsioner", price: 59900, quantity: 1, quantityBlok: 1, blok: 12, description: "lenor 858ml konditsioner", img: "https://images.uzum.uz/cqlqn4nfrr8a72r6n52g/original.jpg"},
  {id: "109", title: "old spice", price: 31700, quantity: 1, quantityBlok: 1, blok: 12, description: "old spice 50gr", img: "https://images.uzum.uz/cdh3ioj5a95unf13egg0/original.jpg"},
  {id: "110", title: "persil gel (turk)", price: 48600, quantity: 1, quantityBlok: 1, blok: 12, description: "persil gel 1040ml", img: "https://images.uzum.uz/cm5qp4p25ku1lubqf5s0/original.jpg"},
  {id: "111", title: "persil gel (turk)", price: 79200, quantity: 1, quantityBlok: 1, blok: 12, description: "persil gel 1690ml", img: "https://images.uzum.uz/cpene0ccrcfqljg1m6vg/original.jpg"},
  {id: "112", title: "persil gel (eron)", price: 79000, quantity: 1, quantityBlok: 1, blok: 12, description: "persil gel 2700ml", img: "https://images.uzum.uz/cqn11mvfrr8a72r6u99g/original.jpg"},
  {id: "113", title: "ver nel", price: 31200, quantity: 1, quantityBlok: 1, blok: 12, description: "ver nel 910ml", img: "https://images.uzum.uz/cd3q9kn0tgqvlm5815tg/original.jpg"},
  {id: "114", title: "yumos konditsioner", price: 52400, quantity: 1, quantityBlok: 1, blok: 9, description: "yumos konditsioner 1440ml", img: "https://images.uzum.uz/ct9gu35pb7f7ago7gnq0/original.jpg"},
  {id: "115", title: "yumos konditsioner", price: 86300, quantity: 1, quantityBlok: 1, blok: 9, description: "yumos konditsioner 2520ml", img: "https://images.uzum.uz/ch4j7k357mg830i28su0/original.jpg"},
  {id: "116", title: "utyonok gel", price: 37600, quantity: 1, quantityBlok: 1, blok: 9, description: "utyonok gel 900ml", img: "https://images.uzum.uz/co0mq1upom4ma10qs8g0/original.jpg"},
  {id: "117", title: "utyonok stiker", price: 16500, quantity: 1, quantityBlok: 1, blok: 9, description: "utyonok stiker 3ta", img: "https://images.uzum.uz/ckle0okjvf2tgsrp8t0g/original.jpg"},
  {id: "118", title: "eco salfetka 75talik", price: 71000, quantity: 1, quantityBlok: 1, blok: 1, description: "salfetka 21x21 40ta", img: "../images/eco 75talik bez logo.jpeg"},
  {id: "119", title: "eco salfetka 75talik", price: 75000, quantity: 1, quantityBlok: 1, blok: 1, description: "salfetka 21x21 40ta", img: "../images/eco 75talik.jpeg"},
  {id: "120", title: "eco salfetka 100talik", price: 103500, quantity: 1, quantityBlok: 1, blok: 1, description: "salfetka 21x21 40ta", img: "../images/eco 100talik.jpeg"},
  {id: "93", title: "shar", price: 14900, quantity: 1, quantityBlok: 1, blok: 1, description: "shar kichik 100ta", img: "https://images.uzum.uz/cjc566jk9fq5pecv7e9g/original.jpg"},
  {id: "94", title: "shar romashka", price: 22400, quantity: 1, quantityBlok: 1, blok: 6, description: "shar romashka 100ta", img: "https://images.uzum.uz/civm01d40v9pplt6lae0/original.jpg"},
  {id: "95", title: "shar katta", price: 57400, quantity: 1, quantityBlok: 1, blok: 6, description: "shar katta 50ta", img: "https://i.ebayimg.com/images/g/Ri4AAOSwqBBjw21Z/s-l1600.jpg"},
  {id: "96", title: "shar tilla", price: 59500, quantity: 1, quantityBlok: 1, blok: 6, description: "shar tilla 100ta", img: "https://image.made-in-china.com/202f0j00QWHkpjubhZrK/Wholesale-Factory-Price-Round-Latex-Gold-Sequin-Balloons-Birthday-Parties-Wedding-Celebrations-Decorated-Confetti-Latex-Balloons.webp"},
  {id: "87", title: "Bic metal", price: 22500, quantity: 1, quantityBlok: 1, blok: 10, description: "britva bic metal 5talik", img: "https://images.uzum.uz/cjf3rbsjvf2pi6u78gv0/original.jpg"},
  {id: "88", title: "Gilette guard", price: 17500, quantity: 1, quantityBlok: 1, blok: 1, description: "gilette guard 10ta (22si)", img: "https://images.uzum.uz/clnk11lenntcj8aae36g/original.jpg"},
  {id: "97", title: "Patinka shotka katta", price: 5500, quantity: 1, quantityBlok: 1, blok: 1, description: "patinka shotka katta", img: "https://images.uzum.uz/clip00nn7c6ncm71ctg0/original.jpg"},
  {id: "98", title: "Patinka shotka kichik", price: 4500, quantity: 1, quantityBlok: 1, blok: 1, description: "patinka shotka kichik", img: "https://images.uzum.uz/cjpev0sjvf2hdh3ecb7g/original.jpg"},
  {id: "46", title: "soni katta", price: 61500, quantity: 1, quantityBlok: 1, blok: 1, description: "soni batareyka original 60ta", img: "https://images.uzum.uz/cg1116vhj8j9g699010g/original.jpg"},
  {id: "47", title: "soni kichik", price: 48500, quantity: 1, quantityBlok: 1, blok: 1, description: "soni batareyka original 60ta", img: "https://images.uzum.uz/cg1116vhj8j9g699010g/original.jpg"},
  {id: "48", title: "perchatki mex", price: 12200, quantity: 1, quantityBlok: 1, blok: 10, description: "perchatki mexli", img: "https://images.uzum.uz/cqlto34sslomdvnj58d0/original.jpg"},
  {id: "49", title: "aurora katta", price: 46300, quantity: 1, quantityBlok: 1, blok: 1, description: "poyafzal krem qora 10ta", img: "https://images.uzum.uz/cn0hmhrifoubkc6qolp0/original.jpg"},
  {id: "50", title: "aurora kichik", price: 33000, quantity: 1, quantityBlok: 1, blok: 1, description: "poyafzal krem qora 20ta", img: "https://images.uzum.uz/cn2bdqh25kub33f2su4g/original.jpg"},
  {id: "51", title: "dexe black shampoo", price: 35000, quantity: 1, quantityBlok: 1, blok: 1, description: "soch uchun kraska 10ta", img: "https://images.uzum.uz/cspj5idpq3ggq63crer0/original.jpg"},
  {id: "52", title: "mosquital suyuqlik", price: 5850, quantity: 1, quantityBlok: 1, blok: 1, description: "chivinlarga qarshi 60kunlik", img: "https://images.uzum.uz/cqd617ffrr885gh2n4ug/original.jpg"},
  {id: "53", title: "raptor apparat katta", price: 5880, quantity: 1, quantityBlok: 1, blok: 1, description: "raptor universal", img: "https://images.uzum.uz/cp4s41ffrr80f2gls8i0/original.jpg"},
  {id: "53", title: "raptor apparat kichik", price: 5000, quantity: 1, quantityBlok: 1, blok: 1, description: "raptor faqat tabletka", img: "https://images.uzum.uz/cq367ob6eisq2rkekdb0/original.jpg"},
  {id: "54", title: "chivin kley", price: 22000, quantity: 1, quantityBlok: 1, blok: 1, description: "chivinga qarshi kley 50ta ", img: "https://images.uzum.uz/creknes2gps3jqbfl6u0/original.jpg"},
  {id: "55", title: "sichqon kley", price: 2800, quantity: 1, quantityBlok: 1, blok: 1, description: "sichqonga qarshi kley ", img: "https://images.uzum.uz/chlkqol6sfhndlbmmh0g/original.jpg"},
  {id: "56", title: "zamsh sprey", price: 8100, quantity: 1, quantityBlok: 1, blok: 1, description: "zamsh uchun qora sprey ", img: "https://images.uzum.uz/cnecnu3ifoubkc6tlf4g/original.jpg"},
  {id: "57", title: "super kley katta", price: 1550, quantity: 1, quantityBlok: 1, blok: 1, description: "super kley 25gr 10ta ", img: "https://images.uzum.uz/cqdb9v7frr885gh2on8g/original.jpg"},
  {id: "58", title: "super kley kichik", price: 850, quantity: 1, quantityBlok: 1, blok: 1, description: "super kley 15gr 10ta ", img: "https://images.uzum.uz/ckhba0svutv73ots4m4g/original.jpg"},
  {id: "7", title: "veral 5W", price: 7177, quantity: 1, quantityBlok: 1, blok: 10, description: "5 watt led", img: "https://images.uzum.uz/crqgrnkhug2lhicohrb0/original.jpg"},
  {id: "8", title: "veral 7W", price: 8482, quantity: 1, quantityBlok: 1, blok: 10, description: "7 watt led", img: "https://images.uzum.uz/crqgrnkhug2lhicohrb0/original.jpg"},
  {id: "9", title: "veral 10W", price: 9135, quantity: 1, quantityBlok: 1, blok: 10, description: "10 watt led", img: "https://images.uzum.uz/crqgrnkhug2lhicohrb0/original.jpg"},
  {id: "10", title: "veral 12W", price: 10440, quantity: 1, quantityBlok: 1, blok: 10, description: "12 watt led", img: "https://images.uzum.uz/crqgrnkhug2lhicohrb0/original.jpg"},
  {id: "11", title: "veral 15W", price: 12400, quantity: 1, quantityBlok: 1, blok: 10, description: "15 watt led", img: "https://images.uzum.uz/crqgrnkhug2lhicohrb0/original.jpg"},
  {id: "12", title: "veral 18W", price: 14355, quantity: 1, quantityBlok: 1, blok: 10, description: "18 watt led", img: "https://images.uzum.uz/crqgrnkhug2lhicohrb0/original.jpg"},
  {id: "59", title: "skotch 10x10", price: 8500, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 12ta 1sm 10m", img: "https://images.uzum.uz/cmgkg5p25ku1lubs0q90/original.jpg"},
  {id: "60", title: "skotch 10x20", price: 9500, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 12ta 1sm 20m", img: "https://images.uzum.uz/cmgkg5p25ku1lubs0q90/original.jpg"},
  {id: "61", title: "skotch 10x30", price: 12000, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 12ta 1sm 30m", img: "https://images.uzum.uz/cmgkg5p25ku1lubs0q90/original.jpg"},
  {id: "62", title: "skotch 15x20", price: 11000, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 8ta 1.5sm 20m", img: "https://images.uzum.uz/cqk4ldffrr8a72r69is0/original.jpg"},
  {id: "63", title: "skotch 15x30", price: 12000, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 8ta 1.5sm 30m", img: "https://images.uzum.uz/cqk4ldffrr8a72r69is0/original.jpg"},
  {id: "64", title: "skotch 20x20", price: 12000, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 6ta 2sm 20m", img: "https://images.uzum.uz/cqk4ldffrr8a72r69isg/original.jpg"},
  {id: "65", title: "skotch 36x20 uzb", price: 12000, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 5ta 3.6sm 20m", img: "https://images.uzum.uz/ciqm7hb6edfostij8cb0/original.jpg"},
  {id: "66", title: "skotch 36x35 uzb", price: 14000, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 5ta 3.6sm 35m", img: "https://images.uzum.uz/ciqm7hb6edfostij8cb0/original.jpg"},
  {id: "67", title: "skotch 36x50", price: 19400, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 6ta 3.6sm 50m", img: "https://images.uzum.uz/cihcjaf5d7kom1tj4o6g/original.jpg"},
  {id: "68", title: "skotch 36x75", price: 40000, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 6ta 3.6sm 75m", img: "https://images.uzum.uz/cihcjaf5d7kom1tj4o6g/original.jpg"},
  {id: "69", title: "skotch 36x250", price: 96000, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 6ta 3.6sm 250m", img: "https://images.uzum.uz/cj9o0okvutv1p29ko59g/original.jpg"},
  {id: "70", title: "skotch 36x300", price: 124000, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 6ta 3.6sm 300m", img: "https://images.uzum.uz/cj9o0ojk9fq5pecuqa80/original.jpg"},
  {id: "71", title: "skotch 45x20 uzb", price: 12300, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 4ta 4.2sm 20m", img: "https://images.uzum.uz/cmn3dc125ku8ad8iaj60/original.jpg"},
  {id: "72", title: "skotch 45x35 uzb", price: 16800, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 4ta 4.2sm 35m", img: "https://images.uzum.uz/cmn3dc125ku8ad8iaj60/original.jpg"},
  {id: "73", title: "skotch 45x50 uzb", price: 20400, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 4ta 4.2sm 50m", img: "https://images.uzum.uz/cohpuvsvm15dvu4jhma0/original.jpg"},
  {id: "74", title: "skotch 45x75 uzb", price: 38000, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 4ta 4.2sm 75m", img: "https://images.uzum.uz/cohpuvq1om4pepe0p0gg/original.jpg"},
  {id: "75", title: "skotch 45x200", price: 91000, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 5ta 4.2sm 200m", img: "https://images.uzum.uz/cr4dnmniraat934qnp20/original.jpg"},
  {id: "76", title: "skotch 45x250 uzb", price: 102000, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 4ta 4.2sm 250m", img: "https://images.uzum.uz/cj9o0okvutv1p29ko59g/original.jpg"},
  {id: "77", title: "skotch 45x300", price: 135000, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 5ta 4.2sm 300m", img: "https://images.uzum.uz/ck6qdqjk9fqd6b9u2d8g/original.jpg"},
  {id: "78", title: "skotch 60x20 uzb", price: 12000, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 3ta 6sm 20m", img: "https://images.uzum.uz/cmhod5p25ku1lubs6540/original.jpg"},
  {id: "79", title: "skotch 60x35 uzb", price: 16400, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 3ta 6sm 35m", img: "https://images.uzum.uz/clvd4s1m4v40qhefp200/original.jpg"},
  {id: "80", title: "skotch 60x50 uzb", price: 27400, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 3ta 6sm 50m", img: "https://images.uzum.uz/cihcjjv5d7kom1tj4o80/original.jpg"},
  {id: "81", title: "skotch 60x75 uzb", price: 31400, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 3ta 6sm 75m", img: "https://images.uzum.uz/cohpuvq1om4pepe0p0gg/original.jpg"},
  {id: "82", title: "skotch 60x100 uzb", price: 44800, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 3ta 6sm 100m", img: "https://images.uzum.uz/cmgkcch25ku1lubs0p20/original.jpg"},
  {id: "83", title: "skotch 60x150 uzb", price: 64000, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 3ta 6sm 150m", img: "https://images.uzum.uz/cihcjln5d7kom1tj4o8g/original.jpg"},
  {id: "84", title: "skotch 60x200 uzb", price: 78000, quantity: 1, quantityBlok: 1, blok: 1, description: "skotch 3ta 6sm 200m", img: "https://images.uzum.uz/crunq7c0u44g6joq6ulg/original.jpg"},
  
]

export default products