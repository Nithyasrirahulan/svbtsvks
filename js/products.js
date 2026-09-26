const PRODUCTS = [
  {
    "id": "a1",
    "code": "A1",
    "name": "2 3/4\" Bird Crackers",
    "pack": "1 Pkt",
    "category": "One/Two Sound Crackers",
    "brand": "Multi Brand",
    "offerPrice": 8.0,
    "currency": "INR",
    "image": "images/products/a101.jpg"
  },
  {
    "id": "a2",
    "code": "A2",
    "name": "3 1/2\" Lakshmi Crackers",
    "pack": "1 Pkt",
    "category": "One/Two Sound Crackers",
    "brand": "Multi Brand",
    "offerPrice": 15.0,
    "currency": "INR"
  },
  {
    "id": "a3",
    "code": "A3",
    "name": "4\" Lakshmi Crackers",
    "pack": "1 Pkt",
    "category": "One/Two Sound Crackers",
    "brand": "Multi Brand",
    "offerPrice": 20.0,
    "currency": "INR"
  },
  {
    "id": "a4",
    "code": "A4",
    "name": "4\" Gold Lakshmi Crackers",
    "pack": "1 Pkt",
    "category": "One/Two Sound Crackers",
    "brand": "Multi Brand",
    "offerPrice": 40.0,
    "currency": "INR",
    "image": "images/products/a101.jpg"
  },
  {
    "id": "a5",
    "code": "A5",
    "name": "Jalli Kattu Crackers",
    "pack": "1 Pkt",
    "category": "One/Two Sound Crackers",
    "brand": "Multi Brand",
    "offerPrice": 60.0,
    "currency": "INR"
  },
  {
    "id": "a6",
    "code": "A6",
    "name": "Lion King Crackers",
    "pack": "1 Pkt",
    "category": "One/Two Sound Crackers",
    "brand": "Multi Brand",
    "offerPrice": 80.0,
    "currency": "INR"
  },
  {
    "id": "a7",
    "code": "A7",
    "name": "2 Sound Crackers",
    "pack": "1 Pkt",
    "category": "One/Two Sound Crackers",
    "brand": "Multi Brand",
    "offerPrice": 45.0,
    "currency": "INR"
  },
  {
    "id": "a8",
    "code": "A8",
    "name": "0.25 Crackers",
    "pack": "1 Pc",
    "category": "One/Two Sound Crackers",
    "brand": "Multi Brand",
    "offerPrice": 50.0,
    "currency": "INR"
  },
  {
    "id": "a9",
    "code": "A9",
    "name": "0.5 Crackers",
    "pack": "1 Pc",
    "category": "One/Two Sound Crackers",
    "brand": "Multi Brand",
    "offerPrice": 100.0,
    "currency": "INR"
  },
  {
    "id": "a10",
    "code": "A10",
    "name": "1.0 Crackers",
    "pack": "1 Pc",
    "category": "One/Two Sound Crackers",
    "brand": "Multi Brand",
    "offerPrice": 200.0,
    "currency": "INR"
  },
  {
    "id": "a11",
    "code": "A11",
    "name": "Bijili",
    "pack": "100 Pcs",
    "category": "One/Two Sound Crackers",
    "brand": "Multi Brand",
    "offerPrice": 50.0,
    "currency": "INR"
  },
  {
    "id": "a12",
    "code": "A12",
    "name": "Stripped Bijili",
    "pack": "100 Pcs",
    "category": "One/Two Sound Crackers",
    "brand": "Multi Brand",
    "offerPrice": 60.0,
    "currency": "INR"
  },
  {
    "id": "a13",
    "code": "A13",
    "name": "24 Dlx Magic Wala",
    "pack": "1 Pkt",
    "category": "Multi Sound Magic Crackers",
    "brand": "Multi Brand",
    "offerPrice": 70.0,
    "currency": "INR"
  },
  {
    "id": "a14",
    "code": "A14",
    "name": "50 Dlx Magic Wala",
    "pack": "1 Pkt",
    "category": "Multi Sound Magic Crackers",
    "brand": "Multi Brand",
    "offerPrice": 150.0,
    "currency": "INR"
  },
  {
    "id": "a201",
    "code": "A201",
    "name": "100 Magic Wala",
    "pack": "1 Pkt",
    "category": "Multi Sound Magic Crackers",
    "brand": "Multi Brand",
    "offerPrice": 40.0,
    "currency": "INR"
  },
  {
    "id": "a202",
    "code": "A202",
    "name": "200 Magic Wala",
    "pack": "1 Pkt",
    "category": "Multi Sound Magic Crackers",
    "brand": "Multi Brand",
    "offerPrice": 80.0,
    "currency": "INR"
  },
  {
    "id": "a15",
    "code": "A15",
    "name": "1000 Magic Wala",
    "pack": "1 Pkt",
    "category": "Multi Sound Magic Crackers",
    "brand": "Multi Brand",
    "offerPrice": 200.0,
    "currency": "INR"
  },
  {
    "id": "a16",
    "code": "A16",
    "name": "2000 Magic Wala",
    "pack": "1 Pkt",
    "category": "Multi Sound Magic Crackers",
    "brand": "Multi Brand",
    "offerPrice": 400.0,
    "currency": "INR"
  },
  {
    "id": "a17",
    "code": "A17",
    "name": "5000 Magic Wala",
    "pack": "1 Pkt",
    "category": "Multi Sound Magic Crackers",
    "brand": "Multi Brand",
    "offerPrice": 1000.0,
    "currency": "INR"
  },
  {
    "id": "a18",
    "code": "A18",
    "name": "10000 Magic Wala",
    "pack": "1 Pkt",
    "category": "Multi Sound Magic Crackers",
    "brand": "Multi Brand",
    "offerPrice": 2000.0,
    "currency": "INR"
  },
  {
    "id": "a19",
    "code": "A19",
    "name": "Hydro Bomb Green",
    "pack": "10 Pcs",
    "category": "Bomb",
    "brand": "Multi Brand",
    "offerPrice": 75.0,
    "currency": "INR"
  },
  {
    "id": "a20",
    "code": "A20",
    "name": "King Of King Green",
    "pack": "10 Pcs",
    "category": "Bomb",
    "brand": "Multi Brand",
    "offerPrice": 100.0,
    "currency": "INR"
  },
  {
    "id": "a21",
    "code": "A21",
    "name": "Classic Bomb",
    "pack": "10 Pcs",
    "category": "Bomb",
    "brand": "Multi Brand",
    "offerPrice": 130.0,
    "currency": "INR"
  },
  {
    "id": "a22",
    "code": "A22",
    "name": "RDX / Digital Bomb",
    "pack": "10 Pcs",
    "category": "Bomb",
    "brand": "Multi Brand",
    "offerPrice": 225.0,
    "currency": "INR"
  },
  {
    "id": "a23",
    "code": "A23",
    "name": "Lion King Bomb",
    "pack": "10 Pcs",
    "category": "Bomb",
    "brand": "Multi Brand",
    "offerPrice": 300.0,
    "currency": "INR"
  },
  {
    "id": "a24",
    "code": "A24",
    "name": "Ground Chakkar Med",
    "pack": "25 Pcs",
    "category": "Ground Ckakkar",
    "brand": "Multi Brand",
    "offerPrice": 32.0,
    "currency": "INR"
  },
  {
    "id": "a25",
    "code": "A25",
    "name": "Ground Chakkar Big",
    "pack": "10 Pcs",
    "category": "Ground Ckakkar",
    "brand": "Multi Brand",
    "offerPrice": 40.0,
    "currency": "INR"
  },
  {
    "id": "a26",
    "code": "A26",
    "name": "Ground Chakkar Big",
    "pack": "25 Pcs",
    "category": "Ground Ckakkar",
    "brand": "Multi Brand",
    "offerPrice": 95.0,
    "currency": "INR"
  },
  {
    "id": "a27",
    "code": "A27",
    "name": "Ground Chakkar Asoka",
    "pack": "10 Pcs",
    "category": "Ground Ckakkar",
    "brand": "Multi Brand",
    "offerPrice": 60.0,
    "currency": "INR"
  },
  {
    "id": "a28",
    "code": "A28",
    "name": "Ground Chakkar Special",
    "pack": "10 Pcs",
    "category": "Ground Ckakkar",
    "brand": "Multi Brand",
    "offerPrice": 80.0,
    "currency": "INR"
  },
  {
    "id": "a29",
    "code": "A29",
    "name": "Ground Chakkar Deluxe",
    "pack": "10 Pcs",
    "category": "Ground Ckakkar",
    "brand": "Multi Brand",
    "offerPrice": 130.0,
    "currency": "INR"
  },
  {
    "id": "a30",
    "code": "A30",
    "name": "Smiley Spinner",
    "pack": "10 Pcs",
    "category": "Ground Ckakkar",
    "brand": "Multi Brand",
    "offerPrice": 95.0,
    "currency": "INR"
  },
  {
    "id": "a31",
    "code": "A31",
    "name": "Flower Pot Big",
    "pack": "10 Pcs",
    "category": "Flower Pots",
    "brand": "Multi Brand",
    "offerPrice": 85.0,
    "currency": "INR"
  },
  {
    "id": "a32",
    "code": "A32",
    "name": "Flower Pot Special",
    "pack": "10 Pcs",
    "category": "Flower Pots",
    "brand": "Multi Brand",
    "offerPrice": 105.0,
    "currency": "INR"
  },
  {
    "id": "a33",
    "code": "A33",
    "name": "Flower Pot Colour Koti",
    "pack": "10 Pcs",
    "category": "Flower Pots",
    "brand": "Multi Brand",
    "offerPrice": 270.0,
    "currency": "INR"
  },
  {
    "id": "a34",
    "code": "A34",
    "name": "Flower Pot Colour Koti Dlx",
    "pack": "10 Pcs",
    "category": "Flower Pots",
    "brand": "Multi Brand",
    "offerPrice": 525.0,
    "currency": "INR"
  },
  {
    "id": "a35",
    "code": "A35",
    "name": "Flower Pot Tri Colour Fountain",
    "pack": "5 Pcs",
    "category": "Flower Pots",
    "brand": "Multi Brand",
    "offerPrice": 260.0,
    "currency": "INR"
  },
  {
    "id": "a36",
    "code": "A36",
    "name": "Amazing Bada 5 In One",
    "pack": "5 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 220.0,
    "currency": "INR"
  },
  {
    "id": "a37",
    "code": "A37",
    "name": "Kit Kat / Mad Max",
    "pack": "10 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 70.0,
    "currency": "INR"
  },
  {
    "id": "a38",
    "code": "A38",
    "name": "Sound Marriage",
    "pack": "3 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 240.0,
    "currency": "INR"
  },
  {
    "id": "a39",
    "code": "A39",
    "name": "Pistol 5G",
    "pack": "2 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 330.0,
    "currency": "INR"
  },
  {
    "id": "a40",
    "code": "A40",
    "name": "Top Gun",
    "pack": "5 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 350.0,
    "currency": "INR"
  },
  {
    "id": "a41",
    "code": "A41",
    "name": "Shin Chan",
    "pack": "5 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 150.0,
    "currency": "INR"
  },
  {
    "id": "a42",
    "code": "A42",
    "name": "Motu Patlu",
    "pack": "2 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 410.0,
    "currency": "INR"
  },
  {
    "id": "a43",
    "code": "A43",
    "name": "Lollipop",
    "pack": "5 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 350.0,
    "currency": "INR"
  },
  {
    "id": "a44",
    "code": "A44",
    "name": "White / Yellow Pop Corn",
    "pack": "2 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 230.0,
    "currency": "INR"
  },
  {
    "id": "a45",
    "code": "A45",
    "name": "4.5 Tin",
    "pack": "2 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 215.0,
    "currency": "INR"
  },
  {
    "id": "a46",
    "code": "A46",
    "name": "Water Queen",
    "pack": "1 Pc",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 300.0,
    "currency": "INR"
  },
  {
    "id": "a47",
    "code": "A47",
    "name": "I Cone",
    "pack": "2 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 320.0,
    "currency": "INR"
  },
  {
    "id": "a48",
    "code": "A48",
    "name": "Peacock Dlx 4 Variants",
    "pack": "1 Pc",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 265.0,
    "currency": "INR"
  },
  {
    "id": "a49",
    "code": "A49",
    "name": "Bada Peacock 5 Wings",
    "pack": "1 Pc",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 480.0,
    "currency": "INR"
  },
  {
    "id": "a50",
    "code": "A50",
    "name": "Mega Peacock 5 Wings",
    "pack": "1 Pc",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 550.0,
    "currency": "INR"
  },
  {
    "id": "a51",
    "code": "A51",
    "name": "Peacock Feathers Gold",
    "pack": "5 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 95.0,
    "currency": "INR"
  },
  {
    "id": "a52",
    "code": "A52",
    "name": "Mini Siran",
    "pack": "5 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 160.0,
    "currency": "INR"
  },
  {
    "id": "a53",
    "code": "A53",
    "name": "Bada Siran",
    "pack": "5 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 225.0,
    "currency": "INR"
  },
  {
    "id": "a54",
    "code": "A54",
    "name": "Dancing Butterfly",
    "pack": "10 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 140.0,
    "currency": "INR"
  },
  {
    "id": "a55",
    "code": "A55",
    "name": "4 X 4 / 900cc Wheel",
    "pack": "5 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 255.0,
    "currency": "INR"
  },
  {
    "id": "a56",
    "code": "A56",
    "name": "Money Bank",
    "pack": "3 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 265.0,
    "currency": "INR"
  },
  {
    "id": "a57",
    "code": "A57",
    "name": "Black Money",
    "pack": "5 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 350.0,
    "currency": "INR"
  },
  {
    "id": "a58",
    "code": "A58",
    "name": "Old Is Gold",
    "pack": "25 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 285.0,
    "currency": "INR"
  },
  {
    "id": "a59",
    "code": "A59",
    "name": "Dora Singer",
    "pack": "5 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 215.0,
    "currency": "INR"
  },
  {
    "id": "a60",
    "code": "A60",
    "name": "Whizz Chakkar",
    "pack": "5 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 165.0,
    "currency": "INR"
  },
  {
    "id": "a61",
    "code": "A61",
    "name": "Rainbow 3 In 1 Fog",
    "pack": "3 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 335.0,
    "currency": "INR"
  },
  {
    "id": "a62",
    "code": "A62",
    "name": "Helicopter",
    "pack": "5 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 110.0,
    "currency": "INR"
  },
  {
    "id": "a63",
    "code": "A63",
    "name": "Spinner",
    "pack": "10 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 145.0,
    "currency": "INR"
  },
  {
    "id": "a64",
    "code": "A64",
    "name": "Drone",
    "pack": "5 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 155.0,
    "currency": "INR"
  },
  {
    "id": "a65",
    "code": "A65",
    "name": "Photo Flash",
    "pack": "5 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 85.0,
    "currency": "INR"
  },
  {
    "id": "a66",
    "code": "A66",
    "name": "Traffic Lights",
    "pack": "5 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 85.0,
    "currency": "INR"
  },
  {
    "id": "a67",
    "code": "A67",
    "name": "Tiny Pots",
    "pack": "3 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 120.0,
    "currency": "INR"
  },
  {
    "id": "a68",
    "code": "A68",
    "name": "Ice Fountain",
    "pack": "3 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 120.0,
    "currency": "INR"
  },
  {
    "id": "a69",
    "code": "A69",
    "name": "Pop Show",
    "pack": "3 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 270.0,
    "currency": "INR"
  },
  {
    "id": "a70",
    "code": "A70",
    "name": "Violet Wallet",
    "pack": "3 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 270.0,
    "currency": "INR"
  },
  {
    "id": "a71",
    "code": "A71",
    "name": "Emu Egg",
    "pack": "2 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Multi Brand",
    "offerPrice": 270.0,
    "currency": "INR"
  },
  {
    "id": "a72",
    "code": "A72",
    "name": "Rocket Bomb",
    "pack": "10 Pcs",
    "category": "Rockets",
    "brand": "Multi Brand",
    "offerPrice": 195.0,
    "currency": "INR"
  },
  {
    "id": "a73",
    "code": "A73",
    "name": "Musical Rocket",
    "pack": "5 Pcs",
    "category": "Rockets",
    "brand": "Multi Brand",
    "offerPrice": 185.0,
    "currency": "INR"
  },
  {
    "id": "a74",
    "code": "A74",
    "name": "1 1/2' Twinkling Star",
    "pack": "10 Pcs",
    "category": "Twinkling / Pencil",
    "brand": "Multi Brand",
    "offerPrice": 25.0,
    "currency": "INR"
  },
  {
    "id": "a75",
    "code": "A75",
    "name": "4' Twinkling Star",
    "pack": "10 Pcs",
    "category": "Twinkling / Pencil",
    "brand": "Multi Brand",
    "offerPrice": 70.0,
    "currency": "INR"
  },
  {
    "id": "a76",
    "code": "A76",
    "name": "Water Falls / Popcorn Pencil",
    "pack": "5 Pcs",
    "category": "Twinkling / Pencil",
    "brand": "Multi Brand",
    "offerPrice": 310.0,
    "currency": "INR"
  },
  {
    "id": "a77",
    "code": "A77",
    "name": "7 Shot",
    "pack": "1 Pc",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Multi Brand",
    "offerPrice": 140.0,
    "currency": "INR"
  },
  {
    "id": "a78",
    "code": "A78",
    "name": "10 Shot Singing Dolls",
    "pack": "1 Pc",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Multi Brand",
    "offerPrice": 235.0,
    "currency": "INR"
  },
  {
    "id": "a79",
    "code": "A79",
    "name": "12 Shot Square",
    "pack": "1 Pc",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Multi Brand",
    "offerPrice": 200.0,
    "currency": "INR"
  },
  {
    "id": "a80",
    "code": "A80",
    "name": "12 Shot Deluxe",
    "pack": "1 Pc",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Multi Brand",
    "offerPrice": 250.0,
    "currency": "INR"
  },
  {
    "id": "a81",
    "code": "A81",
    "name": "12 Akash Chakkar",
    "pack": "1 Pc",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Multi Brand",
    "offerPrice": 290.0,
    "currency": "INR"
  },
  {
    "id": "a82",
    "code": "A82",
    "name": "15 Shot Deluxe",
    "pack": "1 Pc",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Multi Brand",
    "offerPrice": 410.0,
    "currency": "INR"
  },
  {
    "id": "a83",
    "code": "A83",
    "name": "30 Shot",
    "pack": "1 Pc",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Multi Brand",
    "offerPrice": 450.0,
    "currency": "INR"
  },
  {
    "id": "a84",
    "code": "A84",
    "name": "30 Shot Deluxe",
    "pack": "1 Pc",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Multi Brand",
    "offerPrice": 550.0,
    "currency": "INR"
  },
  {
    "id": "a85",
    "code": "A85",
    "name": "50 Shot Wedding Singer",
    "pack": "1 Pc",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Multi Brand",
    "offerPrice": 1350.0,
    "currency": "INR"
  },
  {
    "id": "a86",
    "code": "A86",
    "name": "60 Shot",
    "pack": "1 Pc",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Multi Brand",
    "offerPrice": 900.0,
    "currency": "INR"
  },
  {
    "id": "a87",
    "code": "A87",
    "name": "60 Shot Deluxe",
    "pack": "1 Pc",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Multi Brand",
    "offerPrice": 1100.0,
    "currency": "INR"
  },
  {
    "id": "a88",
    "code": "A88",
    "name": "120 Shot",
    "pack": "1 Pc",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Multi Brand",
    "offerPrice": 1800.0,
    "currency": "INR"
  },
  {
    "id": "a89",
    "code": "A89",
    "name": "120 Shot Deluxe",
    "pack": "1 Pc",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Multi Brand",
    "offerPrice": 2200.0,
    "currency": "INR"
  },
  {
    "id": "a90",
    "code": "A90",
    "name": "240 Shot",
    "pack": "1 Pc",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Multi Brand",
    "offerPrice": 3600.0,
    "currency": "INR"
  },
  {
    "id": "a91",
    "code": "A91",
    "name": "240 Shot Deluxe",
    "pack": "1 Pc",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Multi Brand",
    "offerPrice": 4400.0,
    "currency": "INR"
  },
  {
    "id": "a92",
    "code": "A92",
    "name": "Pandav 5 In One",
    "pack": "5 Pcs",
    "category": "Fancy Sky Shot",
    "brand": "Multi Brand",
    "offerPrice": 175.0,
    "currency": "INR"
  },
  {
    "id": "a93",
    "code": "A93",
    "name": "Chotta Fancy 5 In One",
    "pack": "5 Pcs",
    "category": "Fancy Sky Shot",
    "brand": "Multi Brand",
    "offerPrice": 350.0,
    "currency": "INR"
  },
  {
    "id": "a94",
    "code": "A94",
    "name": "2\" Sky Shot",
    "pack": "1 Pc",
    "category": "Fancy Sky Shot",
    "brand": "Multi Brand",
    "offerPrice": 125.0,
    "currency": "INR"
  },
  {
    "id": "a95",
    "code": "A95",
    "name": "2\" Sky Shot Dlx",
    "pack": "1 Pc",
    "category": "Fancy Sky Shot",
    "brand": "Multi Brand",
    "offerPrice": 150.0,
    "currency": "INR"
  },
  {
    "id": "a96",
    "code": "A96",
    "name": "2\" Sky Shot 3 In One",
    "pack": "3 Pcs",
    "category": "Fancy Sky Shot",
    "brand": "Multi Brand",
    "offerPrice": 240.0,
    "currency": "INR"
  },
  {
    "id": "a97",
    "code": "A97",
    "name": "2\" Sky Shot 3 In One Dlx",
    "pack": "3 Pcs",
    "category": "Fancy Sky Shot",
    "brand": "Multi Brand",
    "offerPrice": 315.0,
    "currency": "INR"
  },
  {
    "id": "a98",
    "code": "A98",
    "name": "2 1/2\" Sky Shot",
    "pack": "1 Pc",
    "category": "Fancy Sky Shot",
    "brand": "Multi Brand",
    "offerPrice": 215.0,
    "currency": "INR"
  },
  {
    "id": "a99",
    "code": "A99",
    "name": "3\" Sky Shot",
    "pack": "1 Pc",
    "category": "Fancy Sky Shot",
    "brand": "Multi Brand",
    "offerPrice": 280.0,
    "currency": "INR"
  },
  {
    "id": "a100",
    "code": "A100",
    "name": "3 1/2\" Sky Shot",
    "pack": "1 Pc",
    "category": "Fancy Sky Shot",
    "brand": "Multi Brand",
    "offerPrice": 340.0,
    "currency": "INR"
  },
  {
    "id": "a101",
    "code": "A101",
    "name": "3 1/2\" Sky Shot Nayagara",
    "pack": "1 Pc",
    "category": "Fancy Sky Shot",
    "brand": "Multi Brand",
    "offerPrice": 400.0,
    "currency": "INR"
  },
  {
    "id": "a102",
    "code": "A102",
    "name": "3 1/2\" Double Ball",
    "pack": "1 Pc",
    "category": "Fancy Sky Shot",
    "brand": "Multi Brand",
    "offerPrice": 550.0,
    "currency": "INR"
  },
  {
    "id": "a103",
    "code": "A103",
    "name": "3 1/2\" Sky Shot 2Pcs",
    "pack": "1 Pc",
    "category": "Fancy Sky Shot",
    "brand": "Multi Brand",
    "offerPrice": 950.0,
    "currency": "INR"
  },
  {
    "id": "a104",
    "code": "A104",
    "name": "4\" Sky Shot",
    "pack": "1 Pc",
    "category": "Fancy Sky Shot",
    "brand": "Multi Brand",
    "offerPrice": 600.0,
    "currency": "INR"
  },
  {
    "id": "a105",
    "code": "A105",
    "name": "4 1/2\" Sky Shot 2Pcs",
    "pack": "2Pcs",
    "category": "Fancy Sky Shot",
    "brand": "Multi Brand",
    "offerPrice": 1150.0,
    "currency": "INR"
  },
  {
    "id": "a106",
    "code": "A106",
    "name": "5\" Sky Shot",
    "pack": "1 Pc",
    "category": "Fancy Sky Shot",
    "brand": "Multi Brand",
    "offerPrice": 1050.0,
    "currency": "INR"
  },
  {
    "id": "a107",
    "code": "A107",
    "name": "10 X 10 Skyshot Setout",
    "pack": "1 Pc",
    "category": "Fancy Sky Shot",
    "brand": "Multi Brand",
    "offerPrice": 3650.0,
    "currency": "INR"
  },
  {
    "id": "a108",
    "code": "A108",
    "name": "7cm Electric Sparklers",
    "pack": "10 Pcs",
    "category": "Sparklers",
    "brand": "Multi Brand",
    "offerPrice": 9.0,
    "currency": "INR"
  },
  {
    "id": "a109",
    "code": "A109",
    "name": "10cm Electric Sparklers",
    "pack": "10 Pcs",
    "category": "Sparklers",
    "brand": "Multi Brand",
    "offerPrice": 19.0,
    "currency": "INR"
  },
  {
    "id": "a110",
    "code": "A110",
    "name": "10cm Glitering Sparklers",
    "pack": "10 Pcs",
    "category": "Sparklers",
    "brand": "Multi Brand",
    "offerPrice": 21.0,
    "currency": "INR"
  },
  {
    "id": "a111",
    "code": "A111",
    "name": "10cm Green Sparklers",
    "pack": "10 Pcs",
    "category": "Sparklers",
    "brand": "Multi Brand",
    "offerPrice": 23.0,
    "currency": "INR"
  },
  {
    "id": "a112",
    "code": "A112",
    "name": "10cm Red Sparklers",
    "pack": "10 Pcs",
    "category": "Sparklers",
    "brand": "Multi Brand",
    "offerPrice": 25.0,
    "currency": "INR"
  },
  {
    "id": "a113",
    "code": "A113",
    "name": "15cm Electric Sparklers",
    "pack": "10 Pcs",
    "category": "Sparklers",
    "brand": "Multi Brand",
    "offerPrice": 39.0,
    "currency": "INR"
  },
  {
    "id": "a114",
    "code": "A114",
    "name": "15cm Glitering Sparklers",
    "pack": "10 Pcs",
    "category": "Sparklers",
    "brand": "Multi Brand",
    "offerPrice": 42.0,
    "currency": "INR"
  },
  {
    "id": "a115",
    "code": "A115",
    "name": "15cm Green Sparklers",
    "pack": "10 Pcs",
    "category": "Sparklers",
    "brand": "Multi Brand",
    "offerPrice": 45.0,
    "currency": "INR"
  },
  {
    "id": "a116",
    "code": "A116",
    "name": "15cm Red Sparklers",
    "pack": "10 Pcs",
    "category": "Sparklers",
    "brand": "Multi Brand",
    "offerPrice": 49.0,
    "currency": "INR"
  },
  {
    "id": "a117",
    "code": "A117",
    "name": "30cm Electric Sparklers",
    "pack": "5 Pcs",
    "category": "Sparklers",
    "brand": "Multi Brand",
    "offerPrice": 39.0,
    "currency": "INR"
  },
  {
    "id": "a118",
    "code": "A118",
    "name": "30cm Glitering Sparklers",
    "pack": "5 Pcs",
    "category": "Sparklers",
    "brand": "Multi Brand",
    "offerPrice": 42.0,
    "currency": "INR"
  },
  {
    "id": "a119",
    "code": "A119",
    "name": "30cm Green Sparklers",
    "pack": "5 Pcs",
    "category": "Sparklers",
    "brand": "Multi Brand",
    "offerPrice": 45.0,
    "currency": "INR"
  },
  {
    "id": "a120",
    "code": "A120",
    "name": "30cm Red Sparklers",
    "pack": "5 Pcs",
    "category": "Sparklers",
    "brand": "Multi Brand",
    "offerPrice": 49.0,
    "currency": "INR"
  },
  {
    "id": "a121",
    "code": "A121",
    "name": "50cm Electric Sparklers",
    "pack": "5 Pcs",
    "category": "Sparklers",
    "brand": "Multi Brand",
    "offerPrice": 150.0,
    "currency": "INR"
  },
  {
    "id": "a122",
    "code": "A122",
    "name": "50cm Glitering Sparklers",
    "pack": "5 Pcs",
    "category": "Sparklers",
    "brand": "Multi Brand",
    "offerPrice": 200.0,
    "currency": "INR"
  },
  {
    "id": "a123",
    "code": "A123",
    "name": "50cm 3 In One Sparklers",
    "pack": "5 Pcs",
    "category": "Sparklers",
    "brand": "Multi Brand",
    "offerPrice": 250.0,
    "currency": "INR"
  },
  {
    "id": "a124",
    "code": "A124",
    "name": "Magic Mix 4 In One 12cm",
    "pack": "40 Pcs",
    "category": "Sparklers",
    "brand": "Multi Brand",
    "offerPrice": 160.0,
    "currency": "INR"
  },
  {
    "id": "a125",
    "code": "A125",
    "name": "Fusion Flame 4 In One 15cm",
    "pack": "40 Pcs",
    "category": "Sparklers",
    "brand": "Multi Brand",
    "offerPrice": 230.0,
    "currency": "INR"
  },
  {
    "id": "a126",
    "code": "A126",
    "name": "Vibes 5 In One 30cm",
    "pack": "30 Pcs",
    "category": "Sparklers",
    "brand": "Multi Brand",
    "offerPrice": 275.0,
    "currency": "INR"
  },
  {
    "id": "a127",
    "code": "A127",
    "name": "Rainbow Dancing Umbrella",
    "pack": "1 Pc",
    "category": "Sparklers",
    "brand": "Multi Brand",
    "offerPrice": 230.0,
    "currency": "INR"
  },
  {
    "id": "a128",
    "code": "A128",
    "name": "10 In One Laptop Colour",
    "pack": "1 Box",
    "category": "Colour Matches",
    "brand": "Multi Brand",
    "offerPrice": 350.0,
    "currency": "INR"
  },
  {
    "id": "a129",
    "code": "A129",
    "name": "Ring Cap",
    "pack": "1 Pkt",
    "category": "Ring Cap / Gun",
    "brand": "Multi Brand",
    "offerPrice": 12.0,
    "currency": "INR"
  },
  {
    "id": "a130",
    "code": "A130",
    "name": "Men In Black",
    "pack": "1 Box",
    "category": "Ring Cap / Gun",
    "brand": "Multi Brand",
    "offerPrice": 130.0,
    "currency": "INR"
  },
  {
    "id": "a131",
    "code": "A131",
    "name": "22 Item Gift Box",
    "pack": "1 Box",
    "category": "Gift Box Nett Rate",
    "brand": "Multi Brand",
    "offerPrice": 250.0,
    "currency": "INR"
  },
  {
    "id": "a132",
    "code": "A132",
    "name": "25 Item Spl Gift Box",
    "pack": "1 Box",
    "category": "Gift Box Nett Rate",
    "brand": "Multi Brand",
    "offerPrice": 450.0,
    "currency": "INR"
  },
  {
    "id": "a133",
    "code": "A133",
    "name": "30 Item Spl Gift Box",
    "pack": "1 Box",
    "category": "Gift Box Nett Rate",
    "brand": "Multi Brand",
    "offerPrice": 540.0,
    "currency": "INR"
  },
  {
    "id": "a134",
    "code": "A134",
    "name": "32 Item Gift Box",
    "pack": "1 Box",
    "category": "Gift Box Nett Rate",
    "brand": "Multi Brand",
    "offerPrice": 360.0,
    "currency": "INR"
  },
  {
    "id": "a135",
    "code": "A135",
    "name": "40 Item Gift Box",
    "pack": "1 Box",
    "category": "Gift Box Nett Rate",
    "brand": "Multi Brand",
    "offerPrice": 520.0,
    "currency": "INR"
  },
  {
    "id": "a136",
    "code": "A136",
    "name": "40 Item Spl Gift Box",
    "pack": "1 Box",
    "category": "Gift Box Nett Rate",
    "brand": "Multi Brand",
    "offerPrice": 770.0,
    "currency": "INR"
  },
  {
    "id": "a137",
    "code": "A137",
    "name": "45 Item Gift Box",
    "pack": "1 Box",
    "category": "Gift Box Nett Rate",
    "brand": "Multi Brand",
    "offerPrice": 620.0,
    "currency": "INR"
  },
  {
    "id": "a138",
    "code": "A138",
    "name": "50 Item Spl Gift Box",
    "pack": "1 Box",
    "category": "Gift Box Nett Rate",
    "brand": "Multi Brand",
    "offerPrice": 1030.0,
    "currency": "INR"
  },
  {
    "id": "a139",
    "code": "A139",
    "name": "51 Item Gift Box",
    "pack": "1 Box",
    "category": "Gift Box Nett Rate",
    "brand": "Multi Brand",
    "offerPrice": 720.0,
    "currency": "INR"
  },
  {
    "id": "a140",
    "code": "A140",
    "name": "60 Item Gift Box",
    "pack": "1 Box",
    "category": "Gift Box Nett Rate",
    "brand": "Multi Brand",
    "offerPrice": 870.0,
    "currency": "INR"
  },
  {
    "id": "a141",
    "code": "A141",
    "name": "60 Item Spl Gift Box",
    "pack": "1 Box",
    "category": "Gift Box Nett Rate",
    "brand": "Multi Brand",
    "offerPrice": 1300.0,
    "currency": "INR"
  },
  {
    "id": "a142",
    "code": "A142",
    "name": "70 Item Spl Gift Box",
    "pack": "1 Box",
    "category": "Gift Box Nett Rate",
    "brand": "Multi Brand",
    "offerPrice": 1650.0,
    "currency": "INR"
  },
  {
    "id": "s1",
    "code": "S1",
    "name": "Bobby Gold Sparklers - 7 CM",
    "pack": "10 Pcs",
    "category": "Sparklers",
    "brand": "Standard Fireworks",
    "offerPrice": 25.0,
    "currency": "INR"
  },
  {
    "id": "s2",
    "code": "S2",
    "name": "Jimmy Gold Sparklers - 12 CM",
    "pack": "10 Pcs",
    "category": "Sparklers",
    "brand": "Standard Fireworks",
    "offerPrice": 65.0,
    "currency": "INR"
  },
  {
    "id": "s3",
    "code": "S3",
    "name": "Export Gold Sparklers - 20 CM",
    "pack": "10 Pcs",
    "category": "Sparklers",
    "brand": "Standard Fireworks",
    "offerPrice": 85.0,
    "currency": "INR"
  },
  {
    "id": "s4",
    "code": "S4",
    "name": "Export Crackling Sparklers - 20 CM",
    "pack": "10 Pcs",
    "category": "Sparklers",
    "brand": "Standard Fireworks",
    "offerPrice": 110.0,
    "currency": "INR"
  },
  {
    "id": "s5",
    "code": "S5",
    "name": "Gold Sparklers - 30 CM",
    "pack": "5 Pcs",
    "category": "Sparklers",
    "brand": "Standard Fireworks",
    "offerPrice": 100.0,
    "currency": "INR"
  },
  {
    "id": "s6",
    "code": "S6",
    "name": "Crackling Sparklers - 30 CM",
    "pack": "5 Pcs",
    "category": "Sparklers",
    "brand": "Standard Fireworks",
    "offerPrice": 115.0,
    "currency": "INR"
  },
  {
    "id": "s7",
    "code": "S7",
    "name": "Tri Color Sparklers",
    "pack": "30 Pcs",
    "category": "Sparklers",
    "brand": "Standard Fireworks",
    "offerPrice": 300.0,
    "currency": "INR"
  },
  {
    "id": "s8",
    "code": "S8",
    "name": "Four Color Sparklers",
    "pack": "10 Pcs",
    "category": "Sparklers",
    "brand": "Standard Fireworks",
    "offerPrice": 60.0,
    "currency": "INR"
  },
  {
    "id": "s9",
    "code": "S9",
    "name": "10 Cm Hitler/ Krishna",
    "pack": "5 Pcs",
    "category": "One Sound Crackers",
    "brand": "Standard Fireworks",
    "offerPrice": 50.0,
    "currency": "INR"
  },
  {
    "id": "s10",
    "code": "S10",
    "name": "10 Cm Hercules Deluxe",
    "pack": "5 Pcs",
    "category": "One Sound Crackers",
    "brand": "Standard Fireworks",
    "offerPrice": 65.0,
    "currency": "INR"
  },
  {
    "id": "s11",
    "code": "S11",
    "name": "Bijili Crackers Red",
    "pack": "50 Pcs",
    "category": "One Sound Crackers",
    "brand": "Standard Fireworks",
    "offerPrice": 45.0,
    "currency": "INR"
  },
  {
    "id": "s12",
    "code": "S12",
    "name": "Cowboy Bijili Crackers",
    "pack": "1 Pkt",
    "category": "One Sound Crackers",
    "brand": "Standard Fireworks",
    "offerPrice": 65.0,
    "currency": "INR"
  },
  {
    "id": "s13",
    "code": "S13",
    "name": "Thunder Bomb Green",
    "pack": "10 Pcs",
    "category": "Bomb",
    "brand": "Standard Fireworks",
    "offerPrice": 190.0,
    "currency": "INR"
  },
  {
    "id": "s14",
    "code": "S14",
    "name": "Flower Pots Big",
    "pack": "10 Pcs",
    "category": "Flower Pots",
    "brand": "Standard Fireworks",
    "offerPrice": 190.0,
    "currency": "INR"
  },
  {
    "id": "s15",
    "code": "S15",
    "name": "Flower Pots Special",
    "pack": "10 Pcs",
    "category": "Flower Pots",
    "brand": "Standard Fireworks",
    "offerPrice": 250.0,
    "currency": "INR"
  },
  {
    "id": "s16",
    "code": "S16",
    "name": "Flower Pots Giant",
    "pack": "10 Pcs",
    "category": "Flower Pots",
    "brand": "Standard Fireworks",
    "offerPrice": 530.0,
    "currency": "INR"
  },
  {
    "id": "s17",
    "code": "S17",
    "name": "Flower Pots Deluxe",
    "pack": "5 Pcs",
    "category": "Flower Pots",
    "brand": "Standard Fireworks",
    "offerPrice": 350.0,
    "currency": "INR"
  },
  {
    "id": "s18",
    "code": "S18",
    "name": "Tri Color Fountains(Millennium)",
    "pack": "5 Pcs",
    "category": "Flower Pots",
    "brand": "Standard Fireworks",
    "offerPrice": 630.0,
    "currency": "INR"
  },
  {
    "id": "s19",
    "code": "S19",
    "name": "Colour world",
    "pack": "10 Pcs",
    "category": "Flower Pots",
    "brand": "Standard Fireworks",
    "offerPrice": 640.0,
    "currency": "INR"
  },
  {
    "id": "s20",
    "code": "S20",
    "name": "Lavender Fountain",
    "pack": "3 Pcs",
    "category": "Flower Pots",
    "brand": "Standard Fireworks",
    "offerPrice": 50.0,
    "currency": "INR"
  },
  {
    "id": "s21",
    "code": "S21",
    "name": "Jet Fountain",
    "pack": "5 Pcs",
    "category": "Flower Pots",
    "brand": "Standard Fireworks",
    "offerPrice": 125.0,
    "currency": "INR"
  },
  {
    "id": "s22",
    "code": "S22",
    "name": "Wire Chakkars Asoka",
    "pack": "10 Pcs",
    "category": "Ground Ckakkar",
    "brand": "Standard Fireworks",
    "offerPrice": 165.0,
    "currency": "INR"
  },
  {
    "id": "s23",
    "code": "S23",
    "name": "Zamin Chakkar Big (10 Pcs)",
    "pack": "10 Pcs",
    "category": "Ground Ckakkar",
    "brand": "Standard Fireworks",
    "offerPrice": 75.0,
    "currency": "INR"
  },
  {
    "id": "s24",
    "code": "S24",
    "name": "Zamin Chakkar Asoka",
    "pack": "10 Pcs",
    "category": "Ground Ckakkar",
    "brand": "Standard Fireworks",
    "offerPrice": 125.0,
    "currency": "INR"
  },
  {
    "id": "s25",
    "code": "S25",
    "name": "Zamin Chakkar Special (New)",
    "pack": "10 Pcs",
    "category": "Ground Ckakkar",
    "brand": "Standard Fireworks",
    "offerPrice": 215.0,
    "currency": "INR"
  },
  {
    "id": "s26",
    "code": "S26",
    "name": "Zamin Chakkar Deluxe",
    "pack": "10 Pcs",
    "category": "Ground Ckakkar",
    "brand": "Standard Fireworks",
    "offerPrice": 280.0,
    "currency": "INR"
  },
  {
    "id": "s27",
    "code": "S27",
    "name": "Zamin Chakkar Super Deluxe",
    "pack": "10 Pcs",
    "category": "Ground Ckakkar",
    "brand": "Standard Fireworks",
    "offerPrice": 310.0,
    "currency": "INR"
  },
  {
    "id": "s28",
    "code": "S28",
    "name": "Red & White Chakkar",
    "pack": "10 Pcs",
    "category": "Ground Ckakkar",
    "brand": "Standard Fireworks",
    "offerPrice": 85.0,
    "currency": "INR"
  },
  {
    "id": "s29",
    "code": "S29",
    "name": "Silver Twinklings - 45 CM",
    "pack": "10 Pcs",
    "category": "Twinkling / Pencil",
    "brand": "Standard Fireworks",
    "offerPrice": 70.0,
    "currency": "INR"
  },
  {
    "id": "s30",
    "code": "S30",
    "name": "Silver Twinklings Deluxe - 120 CM",
    "pack": "10 Pcs",
    "category": "Twinkling / Pencil",
    "brand": "Standard Fireworks",
    "offerPrice": 220.0,
    "currency": "INR"
  },
  {
    "id": "s31",
    "code": "S31",
    "name": "4 Colour Torches",
    "pack": "10 Pcs",
    "category": "Twinkling / Pencil",
    "brand": "Standard Fireworks",
    "offerPrice": 285.0,
    "currency": "INR"
  },
  {
    "id": "s32",
    "code": "S32",
    "name": "Rainbow Rockets",
    "pack": "10 Pcs",
    "category": "Rockets",
    "brand": "Standard Fireworks",
    "offerPrice": 190.0,
    "currency": "INR"
  },
  {
    "id": "s33",
    "code": "S33",
    "name": "Bomb Rockets",
    "pack": "10 Pcs",
    "category": "Rockets",
    "brand": "Standard Fireworks",
    "offerPrice": 205.0,
    "currency": "INR"
  },
  {
    "id": "s34",
    "code": "S34",
    "name": "Rohini Rockets",
    "pack": "10 Pcs",
    "category": "Rockets",
    "brand": "Standard Fireworks",
    "offerPrice": 330.0,
    "currency": "INR"
  },
  {
    "id": "s35",
    "code": "S35",
    "name": "Parachute Rocket",
    "pack": "5 Pcs",
    "category": "Rockets",
    "brand": "Standard Fireworks",
    "offerPrice": 825.0,
    "currency": "INR"
  },
  {
    "id": "s36",
    "code": "S36",
    "name": "Magic Crackers - 1000",
    "pack": "1 Box",
    "category": "Multi Sound Magic Crackers",
    "brand": "Standard Fireworks",
    "offerPrice": 650.0,
    "currency": "INR"
  },
  {
    "id": "s37",
    "code": "S37",
    "name": "Magic Crackers - 2000",
    "pack": "1 Box",
    "category": "Multi Sound Magic Crackers",
    "brand": "Standard Fireworks",
    "offerPrice": 1300.0,
    "currency": "INR"
  },
  {
    "id": "s38",
    "code": "S38",
    "name": "Magic Crackers - 5000",
    "pack": "1 Box",
    "category": "Multi Sound Magic Crackers",
    "brand": "Standard Fireworks",
    "offerPrice": 3050.0,
    "currency": "INR"
  },
  {
    "id": "s39",
    "code": "S39",
    "name": "Magic Crackers - 10000",
    "pack": "1 Box",
    "category": "Multi Sound Magic Crackers",
    "brand": "Standard Fireworks",
    "offerPrice": 6100.0,
    "currency": "INR"
  },
  {
    "id": "s40",
    "code": "S40",
    "name": "Colour Changing Butterﬂy",
    "pack": "5 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Standard Fireworks",
    "offerPrice": 101.0,
    "currency": "INR"
  },
  {
    "id": "s41",
    "code": "S41",
    "name": "Colour Changing Butterﬂy",
    "pack": "10 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Standard Fireworks",
    "offerPrice": 201.0,
    "currency": "INR"
  },
  {
    "id": "s42",
    "code": "S42",
    "name": "Golden Whistle - Small",
    "pack": "5 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Standard Fireworks",
    "offerPrice": 251.0,
    "currency": "INR"
  },
  {
    "id": "s43",
    "code": "S43",
    "name": "Gold Rush",
    "pack": "5 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Standard Fireworks",
    "offerPrice": 444.0,
    "currency": "INR"
  },
  {
    "id": "s44",
    "code": "S44",
    "name": "Assorted Cartoons",
    "pack": "10 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Standard Fireworks",
    "offerPrice": 120.0,
    "currency": "INR"
  },
  {
    "id": "s45",
    "code": "S45",
    "name": "Dollar Wheel (New)",
    "pack": "5 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Standard Fireworks",
    "offerPrice": 418.0,
    "currency": "INR"
  },
  {
    "id": "s46",
    "code": "S46",
    "name": "Poker Wheel (New)",
    "pack": "5 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Standard Fireworks",
    "offerPrice": 418.0,
    "currency": "INR"
  },
  {
    "id": "s47",
    "code": "S47",
    "name": "Magical Wand (New)",
    "pack": "2 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Standard Fireworks",
    "offerPrice": 418.0,
    "currency": "INR"
  },
  {
    "id": "s48",
    "code": "S48",
    "name": "Little Dragon (New)",
    "pack": "5 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Standard Fireworks",
    "offerPrice": 388.0,
    "currency": "INR"
  },
  {
    "id": "s49",
    "code": "S49",
    "name": "Money Penny (New)",
    "pack": "5 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Standard Fireworks",
    "offerPrice": 410.0,
    "currency": "INR"
  },
  {
    "id": "s50",
    "code": "S50",
    "name": "Rainbow Fog",
    "pack": "5 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Standard Fireworks",
    "offerPrice": 673.0,
    "currency": "INR"
  },
  {
    "id": "s51",
    "code": "S51",
    "name": "Colour Fog Fountain",
    "pack": "5 Pcs",
    "category": "Fancy Fireworks",
    "brand": "Standard Fireworks",
    "offerPrice": 118.0,
    "currency": "INR"
  },
  {
    "id": "s52",
    "code": "S52",
    "name": "1\" Pandav",
    "pack": "5 Pcs",
    "category": "Fancy Sky Shot",
    "brand": "Standard Fireworks",
    "offerPrice": 175.0,
    "currency": "INR"
  },
  {
    "id": "s53",
    "code": "S53",
    "name": "1\" Super Star Double Shots",
    "pack": "1 Pc",
    "category": "Fancy Sky Shot",
    "brand": "Standard Fireworks",
    "offerPrice": 75.0,
    "currency": "INR"
  },
  {
    "id": "s54",
    "code": "S54",
    "name": "1 1/4\" Starﬁre Comets (10 Pcs)",
    "pack": "10 Pcs",
    "category": "Fancy Sky Shot",
    "brand": "Standard Fireworks",
    "offerPrice": 1100.0,
    "currency": "INR"
  },
  {
    "id": "s55",
    "code": "S55",
    "name": "1 1/4\" Avengers Special",
    "pack": "1 Pc",
    "category": "Fancy Sky Shot",
    "brand": "Standard Fireworks",
    "offerPrice": 150.0,
    "currency": "INR"
  },
  {
    "id": "s56",
    "code": "S56",
    "name": "1 1/4\" Peony",
    "pack": "1 Pc",
    "category": "Fancy Sky Shot",
    "brand": "Standard Fireworks",
    "offerPrice": 150.0,
    "currency": "INR"
  },
  {
    "id": "s57",
    "code": "S57",
    "name": "1 1/2\" Friendly Fire (12 Variants)",
    "pack": "1 Pc",
    "category": "Fancy Sky Shot",
    "brand": "Standard Fireworks",
    "offerPrice": 160.0,
    "currency": "INR"
  },
  {
    "id": "s58",
    "code": "S58",
    "name": "1 3/4\" Team Captain (12 Variants)",
    "pack": "1 Pc",
    "category": "Fancy Sky Shot",
    "brand": "Standard Fireworks",
    "offerPrice": 200.0,
    "currency": "INR"
  },
  {
    "id": "s59",
    "code": "S59",
    "name": "2\" Sky Shot (11 Variants)",
    "pack": "1 Pc",
    "category": "Fancy Sky Shot",
    "brand": "Standard Fireworks",
    "offerPrice": 250.0,
    "currency": "INR"
  },
  {
    "id": "s60",
    "code": "S60",
    "name": "2.5\" Peanut ( Double Shot )",
    "pack": "1 Pc",
    "category": "Fancy Sky Shot",
    "brand": "Standard Fireworks",
    "offerPrice": 475.0,
    "currency": "INR"
  },
  {
    "id": "s61",
    "code": "S61",
    "name": "3\" Sky Shot (26 Variants)",
    "pack": "1 Pc",
    "category": "Fancy Sky Shot",
    "brand": "Standard Fireworks",
    "offerPrice": 475.0,
    "currency": "INR"
  },
  {
    "id": "s62",
    "code": "S62",
    "name": "3\" Sky Shot (9 Variants)",
    "pack": "2 Pcs",
    "category": "Fancy Sky Shot",
    "brand": "Standard Fireworks",
    "offerPrice": 950.0,
    "currency": "INR"
  },
  {
    "id": "s63",
    "code": "S63",
    "name": "Seven Shots (New)",
    "pack": "5 Pcs",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Standard Fireworks",
    "offerPrice": 250.0,
    "currency": "INR"
  },
  {
    "id": "s64",
    "code": "S64",
    "name": "Seven Shots - Violet",
    "pack": "5 Pcs",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Standard Fireworks",
    "offerPrice": 350.0,
    "currency": "INR"
  },
  {
    "id": "s65",
    "code": "S65",
    "name": "Fly All (5 Variants) - 12 Shots",
    "pack": "1 Box",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Standard Fireworks",
    "offerPrice": 225.0,
    "currency": "INR"
  },
  {
    "id": "s66",
    "code": "S66",
    "name": "Music Party - 12 Shots",
    "pack": "1 Box",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Standard Fireworks",
    "offerPrice": 380.0,
    "currency": "INR"
  },
  {
    "id": "s67",
    "code": "S67",
    "name": "T20 Champ -20 Shots",
    "pack": "1 Box",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Standard Fireworks",
    "offerPrice": 800.0,
    "currency": "INR"
  },
  {
    "id": "s68",
    "code": "S68",
    "name": "Touch Sky (3 Variants) - 25 Shots",
    "pack": "1 Box",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Standard Fireworks",
    "offerPrice": 850.0,
    "currency": "INR"
  },
  {
    "id": "s69",
    "code": "S69",
    "name": "Orange Sky -30 Shots",
    "pack": "1 Box",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Standard Fireworks",
    "offerPrice": 900.0,
    "currency": "INR"
  },
  {
    "id": "s70",
    "code": "S70",
    "name": "Grand Finale (5 Variants) - 40 shots",
    "pack": "1 Box",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Standard Fireworks",
    "offerPrice": 1200.0,
    "currency": "INR"
  },
  {
    "id": "s71",
    "code": "S71",
    "name": "Fly Boss (4 Variants) - 60 Shots",
    "pack": "1 Box",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Standard Fireworks",
    "offerPrice": 1500.0,
    "currency": "INR"
  },
  {
    "id": "s72",
    "code": "S72",
    "name": "Moon Light (4 Variants) - 100 Shots",
    "pack": "1 Box",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Standard Fireworks",
    "offerPrice": 2300.0,
    "currency": "INR"
  },
  {
    "id": "s73",
    "code": "S73",
    "name": "Singing Birds - 100 Shots",
    "pack": "1 Box",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Standard Fireworks",
    "offerPrice": 6500.0,
    "currency": "INR"
  },
  {
    "id": "s74",
    "code": "S74",
    "name": "Blue ﬂy (4 Variants) - 120 Shots",
    "pack": "1 Box",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Standard Fireworks",
    "offerPrice": 2700.0,
    "currency": "INR"
  },
  {
    "id": "s75",
    "code": "S75",
    "name": "Rainbow Dance - 240 shots",
    "pack": "1 Box",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Standard Fireworks",
    "offerPrice": 6300.0,
    "currency": "INR"
  },
  {
    "id": "s76",
    "code": "S76",
    "name": "Kaliedoscope -100 Shots",
    "pack": "1 Box",
    "category": "Multi ( Colour / Musical ) Sky Shots",
    "brand": "Standard Fireworks",
    "offerPrice": 7250.0,
    "currency": "INR"
  },
  {
    "id": "s77",
    "code": "S77",
    "name": "Titan",
    "pack": "55 Items",
    "category": "Gift Box",
    "brand": "Standard Fireworks",
    "offerPrice": 2300.0,
    "currency": "INR"
  },
  {
    "id": "v1",
    "code": "V1",
    "name": "Spinner Mix",
    "pack": "8 Pcs",
    "category": "Vanitha Fire Works",
    "brand": "Vanitha",
    "offerPrice": 190.0,
    "currency": "INR"
  },
  {
    "id": "v2",
    "code": "V2",
    "name": "Bubble Funtain",
    "pack": "2 Pcs",
    "category": "Vanitha Fire Works",
    "brand": "Vanitha",
    "offerPrice": 310.0,
    "currency": "INR"
  },
  {
    "id": "v3",
    "code": "V3",
    "name": "Golden Lion",
    "pack": "1 Pc",
    "category": "Vanitha Fire Works",
    "brand": "Vanitha",
    "offerPrice": 1160.0,
    "currency": "INR"
  },
  {
    "id": "v4",
    "code": "V4",
    "name": "Golden Duck",
    "pack": "1 Pc",
    "category": "Vanitha Fire Works",
    "brand": "Vanitha",
    "offerPrice": 1010.0,
    "currency": "INR"
  },
  {
    "id": "v5",
    "code": "V5",
    "name": "Fall In Love",
    "pack": "1 Pc",
    "category": "Vanitha Fire Works",
    "brand": "Vanitha",
    "offerPrice": 1275.0,
    "currency": "INR"
  },
  {
    "id": "v6",
    "code": "V6",
    "name": "City Vibes -3 X 12 Shots",
    "pack": "1 Pc",
    "category": "Vanitha Fire Works",
    "brand": "Vanitha",
    "offerPrice": 8150.0,
    "currency": "INR"
  },
  {
    "id": "v7",
    "code": "V7",
    "name": "Lazer -5 X 10 Shots",
    "pack": "1 Pc",
    "category": "Vanitha Fire Works",
    "brand": "Vanitha",
    "offerPrice": 10750.0,
    "currency": "INR"
  },
  {
    "id": "v8",
    "code": "V8",
    "name": "Chip Mix",
    "pack": "2 Pcs",
    "category": "Vanitha Fire Works",
    "brand": "Vanitha",
    "offerPrice": 150.0,
    "currency": "INR"
  },
  {
    "id": "v9",
    "code": "V9",
    "name": "Trixx",
    "pack": "4 Pcs",
    "category": "Vanitha Fire Works",
    "brand": "Vanitha",
    "offerPrice": 215.0,
    "currency": "INR"
  },
  {
    "id": "v10",
    "code": "V10",
    "name": "Miracle",
    "pack": "4 Pcs",
    "category": "Vanitha Fire Works",
    "brand": "Vanitha",
    "offerPrice": 320.0,
    "currency": "INR"
  },
  {
    "id": "v11",
    "code": "V11",
    "name": "Fly Machine",
    "pack": "10 Pcs",
    "category": "Vanitha Fire Works",
    "brand": "Vanitha",
    "offerPrice": 630.0,
    "currency": "INR"
  },
  {
    "id": "v12",
    "code": "V12",
    "name": "Gods & Kings",
    "pack": "2 Pcs",
    "category": "Vanitha Fire Works",
    "brand": "Vanitha",
    "offerPrice": 310.0,
    "currency": "INR"
  },
  {
    "id": "v13",
    "code": "V13",
    "name": "SKY",
    "pack": "1 Pc",
    "category": "Vanitha Fire Works",
    "brand": "Vanitha",
    "offerPrice": 430.0,
    "currency": "INR"
  },
  {
    "id": "v14",
    "code": "V14",
    "name": "Dragon",
    "pack": "1 Pc",
    "category": "Vanitha Fire Works",
    "brand": "Vanitha",
    "offerPrice": 875.0,
    "currency": "INR"
  },
  {
    "id": "v15",
    "code": "V15",
    "name": "Purple Rain",
    "pack": "1 Pc",
    "category": "Vanitha Fire Works",
    "brand": "Vanitha",
    "offerPrice": 2222.0,
    "currency": "INR"
  },
  {
    "id": "v16",
    "code": "V16",
    "name": "Ocean Blue",
    "pack": "1 Pc",
    "category": "Vanitha Fire Works",
    "brand": "Vanitha",
    "offerPrice": 3325.0,
    "currency": "INR"
  },
  {
    "id": "v17",
    "code": "V17",
    "name": "Jungle Party",
    "pack": "1 Pc",
    "category": "Vanitha Fire Works",
    "brand": "Vanitha",
    "offerPrice": 2250.0,
    "currency": "INR"
  },
  {
    "id": "ss1",
    "code": "SS1",
    "name": "3 1/2\" 7 Step",
    "pack": "1 Pc",
    "category": "Sunshine Fire Works",
    "brand": "Sunshine",
    "offerPrice": 560.0,
    "currency": "INR"
  },
  {
    "id": "ss2",
    "code": "SS2",
    "name": "3 1/2\" Double Ball",
    "pack": "1 Pc",
    "category": "Sunshine Fire Works",
    "brand": "Sunshine",
    "offerPrice": 640.0,
    "currency": "INR"
  },
  {
    "id": "ss3",
    "code": "SS3",
    "name": "3 1/2\" Sky Shot 2Pcs",
    "pack": "2 Pcs",
    "category": "Sunshine Fire Works",
    "brand": "Sunshine",
    "offerPrice": 860.0,
    "currency": "INR"
  },
  {
    "id": "ss4",
    "code": "SS4",
    "name": "4\" Sky Shot",
    "pack": "1 Pc",
    "category": "Sunshine Fire Works",
    "brand": "Sunshine",
    "offerPrice": 675.0,
    "currency": "INR"
  },
  {
    "id": "ss5",
    "code": "SS5",
    "name": "4\" Sky Shot Phantom",
    "pack": "1 Pc",
    "category": "Sunshine Fire Works",
    "brand": "Sunshine",
    "offerPrice": 880.0,
    "currency": "INR"
  }
];
