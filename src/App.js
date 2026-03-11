import React, { useState } from 'react';
import { Coffee, UtensilsCrossed, Sparkles, ChevronRight, Flame, Snowflake, MapPin, Phone, Mail, Instagram, Music } from 'lucide-react';

// UI Translations
const translations = {
  tr: {
    discover: "Lezzetleri Keşfet",
    sloganTop: "Buz ve konforun buluştuğu yerde,",
    sloganBottom: "lezzet dolu bir yolculuğa hazır olun",
    premium: "Premium Ice Lounge",
    digitalMenu: "Dijital Menü",
    menuTab: "Menü",
    entertainmentTab: "Canlı Müzik & Eğlence",
    food: "Yiyecekler",
    drinks: "İçecekler",
    enjoy: "Afiyet olsun!",
    ingredients: "İçerik:",
    location: "Konum",
    contact: "İletişim",
    categories: {
      "Aparatif ve Eğlence": "Aparatif ve Eğlence",
      "Canlı Müzik": "Canlı Müzik",
      "Kampanyalar": "Kampanyalar",
      "Tostlar": "Tostlar",
      "Burgerler": "Burgerler",
      "Atıştırmalıklar": "Atıştırmalıklar",
      "Ana Yemekler": "Ana Yemekler",
      "Sıcak İçecekler": "Sıcak İçecekler",
      "Soğuk İçecekler": "Soğuk İçecekler",
      "Tatlılar": "Tatlılar",
    }
  },
  en: {
    discover: "Discover Flavors",
    sloganTop: "Where ice meets comfort,",
    sloganBottom: "get ready for a journey full of flavor",
    premium: "Premium Ice Lounge",
    digitalMenu: "Digital Menu",
    menuTab: "Menu",
    entertainmentTab: "Live Music & Fun",
    food: "Food",
    drinks: "Drinks",
    enjoy: "Enjoy your meal!",
    ingredients: "Ingredients:",
    location: "Location",
    contact: "Contact",
    categories: {
      "Aparatif ve Eğlence": "Snacks & Fun",
      "Canlı Müzik": "Live Music",
      "Kampanyalar": "Campaigns",
      "Tostlar": "Toasts",
      "Burgerler": "Burgers",
      "Atıştırmalıklar": "Snacks",
      "Ana Yemekler": "Main Courses",
      "Sıcak İçecekler": "Hot Beverages",
      "Soğuk İçecekler": "Cold Beverages",
      "Tatlılar": "Desserts",
    }
  }
};

// Menu Data
const menuData = {
  food: [
    {
      category: "Aparatif ve Eğlence",
      items: [
        {
          name: { tr: "Marshmallow", en: "Marshmallow" },
          price: "100 TL",
          description: { tr: "Çubukta 3 adet marshmallow, ateş başında keyifli bir atıştırmalık.", en: "3 marshmallows on a stick, a delightful snack by the fire." },
          ingredients: { tr: "Marshmallow (3 adet)", en: "Marshmallow (3 pieces)" },
          image: "/images/drinks/marshmallow.png"
        }
      ]
    },
    {
      category: "Kampanyalar",
      items: [
        {
          name: { tr: "Cookie + Kahve Kampanyası", en: "Cookie + Coffee Campaign" },
          price: "300 TL",
          description: { tr: "Çikolatalı cookie ile istediğiniz herhangi bir kahve kombinasyonu. Tatlı ve kahvenin mükemmel uyumu!", en: "Chocolate cookie with any coffee of your choice. The perfect harmony of sweet and coffee!" },
          ingredients: { tr: "Çikolatalı cookie, seçtiğiniz kahve", en: "Chocolate cookie, coffee of your choice" },
          image: "/images/food/cookie_kahve.png"
        },
        {
          name: { tr: "Sandviç + Çay Kampanyası", en: "Sandwich + Tea Campaign" },
          price: "250 TL",
          description: { tr: "İstediğiniz herhangi bir sandviç çeşidi ile sıcacık çay ikramı. Doyurucu ve lezzetli bir kombinasyon!", en: "Any sandwich of your choice with hot tea. A satisfying and delicious combination!" },
          ingredients: { tr: "Seçtiğiniz sandviç, çay", en: "Sandwich of your choice, tea" },
          image: "/images/food/sandvic_cay.png"
        },
        {
          name: { tr: "Sooho Sepeti + İçecek Kampanyası", en: "Sooho Basket + Drink Campaign" },
          price: "100 TL/kutu",
          description: { tr: "Sooho Sepeti yanına içilen her kutu içecek sadece 100 TL! Premium sepetinizin tadını en sevdiğiniz içecekle çıkarın.", en: "Every canned drink with Sooho Basket only 100 TL! Enjoy your premium basket with your favorite beverage." },
          ingredients: { tr: "Sooho Sepeti + kutu içecek (Kola/Fanta/Sprite/Fuse Tea)", en: "Sooho Basket + canned drink (Coke/Fanta/Sprite/Fuse Tea)" },
          image: "/images/food/sooho_sepeti.png"
        }
      ]
    },
    {
      category: "Tostlar",
      items: [
        {
          name: { tr: "Kar Tostu", en: "Snow Toast" },
          price: "270 TL",
          description: { tr: "Kar kaşar peyniri ile servis edilen, hafif ve lezzetli klasik tost deneyimi.", en: "Classic toast experience served with 'Kar' kashar cheese, light and delicious." },
          ingredients: { tr: "Taze ekmek, kaşar peyniri, tereyağı", en: "Fresh bread, kashar cheese, butter" },
          image: "/images/food/kar_tostu.png"
        },
        {
          name: { tr: "Akdeniz Tostu", en: "Mediterranean Toast" },
          price: "270 TL",
          description: { tr: "Beyaz peynir ve domatesin enfes lezzeti bir arada, Akdeniz esintisiyle.", en: "The exquisite flavor of feta cheese and tomatoes together, with a Mediterranean breeze." },
          ingredients: { tr: "Taze ekmek, beyaz peynir, domates, zeytinyağı", en: "Fresh bread, feta cheese, tomato, olive oil" },
          image: "/images/food/akdeniz_tostu.png"
        },
        {
          name: { tr: "Dağ Tostu", en: "Mountain Toast" },
          price: "320 TL",
          description: { tr: "Sucuk ve kaşarın nefis birlikteliği ile doyurucu ve lezzetli bir seçim.", en: "A satisfying and delicious choice with the wonderful combination of Turkish sausage and kashar." },
          ingredients: { tr: "Taze ekmek, sucuk, kaşar peyniri, tereyağı", en: "Fresh bread, Turkish sausage, kashar cheese, butter" },
          image: "/images/food/dag_tostu.png"
        }
      ]
    },
    {
      category: "Burgerler",
      items: [
        {
          name: { tr: "Hamburger", en: "Hamburger" },
          price: "400 TL",
          description: { tr: "180 gr dana köfte, marul, turşu, domates ve özel sosumuzla hazırlanan klasik lezzet.", en: "180 gr beef patty, lettuce, pickles, tomatoes and our special sauce." },
          ingredients: { tr: "Dana köfte, hamburger ekmeği, marul, turşu, domates, özel sos", en: "Beef patty, burger bun, lettuce, pickles, tomato, special sauce" },
          image: "/images/food/hamburger.png"
        },
        {
          name: { tr: "Cheese Burger", en: "Cheese Burger" },
          price: "420 TL",
          description: { tr: "180 gr dana köfte, cheddar peyniri, marul, turşu, domates ve özel sosla zenginleştirilmiş.", en: "180 gr beef patty, cheddar cheese, lettuce, pickles, tomatoes and enriched with special sauce." },
          ingredients: { tr: "Dana köfte, cheddar peyniri, hamburger ekmeği, marul, turşu, domates", en: "Beef patty, cheddar cheese, burger bun, lettuce, pickles, tomato" },
          image: "/images/food/cheese_burger.png"
        },
        {
          name: { tr: "Dağ Burger", en: "Mountain Burger" },
          price: "450 TL",
          description: { tr: "180 gr dana köfte, cheddar peyniri, közlenmiş biber ve özel sosumuzla dağ lezzetleri.", en: "180 gr beef patty, cheddar cheese, roasted peppers and our special sauce." },
          ingredients: { tr: "Dana köfte, cheddar peyniri, közlenmiş biber, özel sos", en: "Beef patty, cheddar cheese, roasted pepper, special sauce" },
          image: "/images/food/dag_burger.png"
        },
        {
          name: { tr: "SOO HO Burger", en: "SOO HO Burger" },
          price: "450 TL",
          description: { tr: "180 gr dana köfte, cheddar peyniri, halloumi peyniri, karamelize soğan ve özel sosumuzla premium deneyim.", en: "180 gr beef patty, cheddar cheese, halloumi cheese, caramelized onions and our special sauce." },
          ingredients: { tr: "Dana köfte, cheddar, halloumi, karamelize soğan, özel sos", en: "Beef patty, cheddar, halloumi, caramelized onion, special sauce" },
          image: "/images/food/sooho_burger.png"
        },
        {
          name: { tr: "Sucuk Ekmek", en: "Turkish Sausage Sandwich" },
          price: "390 TL",
          description: { tr: "Sucuk ve ekmek, isteğe göre domates, marul, turşu eklenebilir.", en: "Sausage and bread; tomato, lettuce, pickles can be added upon request." },
          ingredients: { tr: "Sucuk, taze ekmek, opsiyonel: domates, marul, turşu", en: "Turkish sausage, fresh bread, optional: tomato, lettuce, pickles" },
          image: "/images/food/sucuk_ekmek.png"
        },
        {
          name: { tr: "Köfte Ekmek", en: "Meatball Sandwich" },
          price: "390 TL",
          description: { tr: "Köfte ve ekmek, isteğe göre domates, marul, turşu eklenebilir.", en: "Meatballs and bread; tomato, lettuce, pickles can be added upon request." },
          ingredients: { tr: "Köfte, taze ekmek, opsiyonel: domates, marul, turşu", en: "Meatballs, fresh bread, optional: tomato, lettuce, pickles" },
          image: "/images/food/kofte_ekmek.png"
        }
      ]
    },
    {
      category: "Atıştırmalıklar",
      items: [
        {
          name: { tr: "Patates Sepeti", en: "French Fries Basket" },
          price: "200 TL",
          description: { tr: "Altın sarısı kızarmış, çıtır çıtır patates dilimleri.", en: "Golden fried, crispy potato slices." },
          ingredients: { tr: "Taze patates, tuz, baharatlar", en: "Fresh potatoes, salt, spices" },
          image: "/images/food/patates_sepeti.png"
        },
        {
          name: { tr: "Sandviç", en: "Sandwich" },
          price: "200 TL",
          description: { tr: "Taze malzemelerle hazırlanan lezzetli sandviç. İsteğe göre özel hazırlanır.", en: "Delicious sandwich prepared with fresh ingredients. Customized upon request." },
          ingredients: { tr: "Taze ekmek, peynir, domates, marul, salatalık", en: "Fresh bread, cheese, tomato, lettuce, cucumber" },
          image: "/images/food/sandvic.png"
        },
        {
          name: { tr: "Sosis Sepeti", en: "Sausage Basket" },
          price: "280 TL",
          description: { tr: "Kızarmış sosis ve patates cipsleri bir arada, keyifli bir atıştırmalık.", en: "Fried sausages and potato chips together, a delightful snack." },
          ingredients: { tr: "Sosis, patates, özel baharatlar", en: "Sausage, potatoes, special spices" },
          image: "/images/food/sosis_sepeti.png"
        },
        {
          name: { tr: "SOO HO Sepeti", en: "SOO HO Basket" },
          price: "400 TL",
          description: { tr: "Cips, nugget, soğan halkası, sosis ve mozzarella stickleriyle dolu premium sepet.", en: "Premium basket full of chips, nuggets, onion rings, sausages and mozzarella sticks." },
          ingredients: { tr: "Patates cipsi, nugget, soğan halkası, sosis, mozzarella stick", en: "Potato chips, nuggets, onion rings, sausage, mozzarella stick" },
          image: "/images/food/sooho_sepeti.png"
        }
      ]
    },
    {
      category: "Ana Yemekler",
      items: [
        {
          name: { tr: "Körili Tavuk", en: "Curry Chicken" },
          price: "400 TL",
          description: { tr: "Körili tavuk, kremalı makarna ve çips eşliğinde sunulan egzotik lezzet.", en: "Curry chicken, an exotic flavor served with creamy pasta and chips." },
          ingredients: { tr: "Tavuk göğsü, köri sosu, krema, makarna, patates cipsi", en: "Chicken breast, curry sauce, cream, pasta, potato chips" },
          image: "/images/food/korili_tavuk.png"
        },
        {
          name: { tr: "Kekikli Tavuk", en: "Thyme Chicken" },
          price: "400 TL",
          description: { tr: "Kekik ile harmanlanan tavuk, kremalı makarna ve çips eşliğinde.", en: "Chicken blended with thyme, served with creamy pasta and chips." },
          ingredients: { tr: "Tavuk göğsü, kekik, krema, makarna, patates cipsi", en: "Chicken breast, thyme, cream, pasta, potato chips" },
          image: "/images/food/kekikli_tavuk.png"
        },
        {
          name: { tr: "Barbekü Tavuk", en: "BBQ Chicken" },
          price: "400 TL",
          description: { tr: "Barbekü sosla marine edilmiş tavuk, kremalı makarna ve çips eşliğinde.", en: "Chicken marinated with BBQ sauce, served with creamy pasta and chips." },
          ingredients: { tr: "Tavuk göğsü, barbekü sos, krema, makarna, patates cipsi", en: "Chicken breast, BBQ sauce, cream, pasta, potato chips" },
          image: "/images/food/barbeku_tavuk.png"
        },
        {
          name: { tr: "Penne Carbonara", en: "Penne Carbonara" },
          price: "350 TL",
          description: { tr: "Penne makarna, mantar, salam ve krema ile servis edilir.", en: "Penne pasta, served with mushrooms, salami and cream." },
          ingredients: { tr: "Penne makarna, mantar, salam, krema", en: "Penne pasta, mushroom, salami, cream" },
          image: "/images/food/penne_carbonara.png"
        },
        {
          name: { tr: "Spagetti Bolonez", en: "Spaghetti Bolognese" },
          price: "350 TL",
          description: { tr: "Spagetti makarna, kıyma ve domates sosu ile servis edilir.", en: "Spaghetti pasta, served with ground beef and tomato sauce." },
          ingredients: { tr: "Spagetti, kıyma, domates sosu", en: "Spaghetti, ground beef, tomato sauce" },
          image: "/images/food/spagetti_bolonez.png"
        },
        {
          name: { tr: "Porsiyon Köfte", en: "Meatball Plate" },
          price: "500 TL",
          description: { tr: "Köfte, közlenmiş biber, domates ve çips eşliğinde servis edilir.", en: "Meatballs, served with roasted peppers, tomatoes and chips." },
          ingredients: { tr: "Dana köfte, közlenmiş biber, domates, patates cipsi", en: "Beef meatballs, roasted pepper, tomato, potato chips" },
          image: "/images/food/porsiyon_kofte.png"
        }
      ]
    },
    {
      category: "Tatlılar",
      items: [
        {
          name: { tr: "Cookie", en: "Cookie" },
          price: "150 TL",
          description: { tr: "Taze pişmiş, çikolata parçacıklı cookie. Kahvenizin yanında mükemmel bir tatlı.", en: "Freshly baked chocolate chip cookie. Perfect sweet treat with your coffee." },
          ingredients: { tr: "Un, çikolata parçacıkları, tereyağı, şeker", en: "Flour, chocolate chips, butter, sugar" },
          image: "/images/food/cookie.png"
        },
        {
          name: { tr: "Tatlı Çeşitleri", en: "Dessert Varieties" },
          price: "280 TL",
          description: { tr: "Günlük taze tatlı çeşitlerimiz. Lütfen garsonunuza sorunuz.", en: "Our daily fresh dessert varieties. Please ask your waiter." },
          ingredients: { tr: "Günlük tatlılar", en: "Daily desserts" },
          image: "/images/food/tatli_cesitleri.png"
        }
      ]
    }
  ],
  drinks: [
    {
      category: "Sıcak İçecekler",
      icon: "hot",
      items: [
        {
          name: { tr: "Çay", en: "Tea" },
          price: "100 TL",
          description: { tr: "Geleneksel demleme Türk çayı, sıcacık ve ferahlatıcı.", en: "Traditional brewed Turkish tea, warm and refreshing." },
          ingredients: { tr: "Siyah çay yaprakları", en: "Black tea leaves" },
          image: "/images/drinks/cay.png"
        },
        {
          name: { tr: "Bitki Çayı", en: "Herbal Tea" },
          price: "200 TL",
          description: { tr: "Doğal bitki karışımından hazırlanan rahatlatıcı çay.", en: "Relaxing tea prepared from natural herbal mixture." },
          ingredients: { tr: "Çeşitli bitki karışımı", en: "Various herbal mixtures" },
          image: "/images/drinks/bitki_cayi.png"
        },
        {
          name: { tr: "Espresso", en: "Espresso" },
          price: "180 TL",
          description: { tr: "Yoğun ve aromatik, tek shot espresso deneyimi.", en: "Intense and aromatic, single shot espresso experience." },
          ingredients: { tr: "Premium espresso çekirdeği", en: "Premium espresso beans" },
          image: "/images/drinks/espresso.png"
        },
        {
          name: { tr: "Americano", en: "Americano" },
          price: "200 TL",
          description: { tr: "Espresso ve sıcak su ile hazırlanan yumuşak kahve.", en: "Smooth coffee prepared with espresso and hot water." },
          ingredients: { tr: "Espresso, sıcak su", en: "Espresso, hot water" },
          image: "/images/drinks/americano.png"
        },
        {
          name: { tr: "Mocha", en: "Mocha" },
          price: "250 TL",
          description: { tr: "Espresso, çikolata ve süt köpüğünün tatlı buluşması.", en: "The sweet meeting of espresso, chocolate and milk foam." },
          ingredients: { tr: "Espresso, çikolata sosu, süt, süt köpüğü", en: "Espresso, chocolate sauce, milk, milk foam" },
          image: "/images/drinks/mocha.png"
        },
        {
          name: { tr: "Latte", en: "Latte" },
          price: "200 TL",
          description: { tr: "Kadifemsi süt köpüğüyle yumuşatılmış yoğun espresso deneyimi.", en: "Intense espresso experience softened with velvety milk foam." },
          ingredients: { tr: "Espresso, buharda ısıtılmış süt, süt köpüğü", en: "Espresso, steamed milk, milk foam" },
          image: "/images/drinks/latte.png"
        },
        {
          name: { tr: "Karamel Latte", en: "Caramel Latte" },
          price: "250 TL",
          description: { tr: "Karamel şurubuyla tatlandırılmış, kremsi latte keyfi.", en: "Creamy latte enjoyment flavored with caramel syrup." },
          ingredients: { tr: "Espresso, süt, karamel şurubu, süt köpüğü", en: "Espresso, milk, caramel syrup, milk foam" },
          image: "/images/drinks/latte.png"
        },
        {
          name: { tr: "Cappuccino", en: "Cappuccino" },
          price: "200 TL",
          description: { tr: "Espresso, süt ve yoğun süt köpüğünün mükemmel dengesi.", en: "The perfect balance of espresso, milk and dense milk foam." },
          ingredients: { tr: "Espresso, süt, yoğun süt köpüğü", en: "Espresso, milk, dense milk foam" },
          image: "/images/drinks/cappuccino.png"
        },
        {
          name: { tr: "Macchiato", en: "Macchiato" },
          price: "200 TL",
          description: { tr: "Espresso üzerine bir damla süt köpüğü ile lekelenmiş İtalyan klasiği.", en: "An Italian classic stained with a drop of milk foam on espresso." },
          ingredients: { tr: "Espresso, süt köpüğü", en: "Espresso, milk foam" },
          image: "/images/drinks/espresso.png"
        },
        {
          name: { tr: "Flat White", en: "Flat White" },
          price: "200 TL",
          description: { tr: "Mikro köpüklü süt ve espressonun kadifemsi uyumu.", en: "Velvety harmony of microfoam milk and espresso." },
          ingredients: { tr: "Espresso, mikro köpüklü süt", en: "Espresso, microfoam milk" },
          image: "/images/drinks/latte.png"
        },
        {
          name: { tr: "Cortado", en: "Cortado" },
          price: "200 TL",
          description: { tr: "Espresso ve eşit miktarda ılık sütle dengelenmiş İspanyol kahvesi.", en: "Spanish coffee balanced with espresso and equal amounts of warm milk." },
          ingredients: { tr: "Espresso, ılık süt", en: "Espresso, warm milk" },
          image: "/images/drinks/espresso.png"
        },
        {
          name: { tr: "Türk Kahvesi", en: "Turkish Coffee" },
          price: "180 TL",
          description: { tr: "Geleneksel yöntemle pişirilmiş, köpüklü Türk kahvesi.", en: "Traditional brewed, frothy Turkish coffee." },
          ingredients: { tr: "Türk kahvesi", en: "Turkish coffee" },
          image: "/images/drinks/turk_kahvesi.png"
        },
        {
          name: { tr: "Double Türk Kahvesi", en: "Double Turkish Coffee" },
          price: "250 TL",
          description: { tr: "Duble fincanda servis edilen, ekstra keyifli Türk kahvesi.", en: "Extra enjoyable Turkish coffee served in a double cup." },
          ingredients: { tr: "Çift doz Türk kahvesi", en: "Double dose Turkish coffee" },
          image: "/images/drinks/turk_kahvesi.png"
        },
        {
          name: { tr: "Dibek Kahvesi", en: "Dibek Coffee" },
          price: "200 TL",
          description: { tr: "Taş dibekte öğütülmüş, aromatik ve geleneksel kahve deneyimi.", en: "Aromatic and traditional coffee experience, ground in a stone mortar." },
          ingredients: { tr: "Dibek kahvesi", en: "Dibek coffee" },
          image: "/images/drinks/turk_kahvesi.png"
        },
        {
          name: { tr: "Menengiç Kahvesi", en: "Menengiç Coffee" },
          price: "200 TL",
          description: { tr: "Kafeinsiz, doğal ve sağlıklı Antep fıstığı ağacı meyvesinden kahve.", en: "Caffeine-free, natural and healthy coffee made from terebinth fruit." },
          ingredients: { tr: "Menengiç çekirdeği", en: "Menengiç beans" },
          image: "/images/drinks/turk_kahvesi.png"
        },
        {
          name: { tr: "Filtre Kahve", en: "Filter Coffee" },
          price: "200 TL",
          description: { tr: "Özenle demlenen, aromatik filtre kahve.", en: "Carefully brewed, aromatic filter coffee." },
          ingredients: { tr: "Filtre kahve çekirdeği", en: "Filter coffee beans" },
          image: "/images/drinks/americano.png"
        },
        {
          name: { tr: "Damla Sakızlı T.Kahvesi", en: "Mastic Turkish Coffee" },
          price: "200 TL",
          description: { tr: "Damla sakızının eşsiz aromasıyla zenginleştirilmiş Türk kahvesi.", en: "Turkish coffee enriched with the unique aroma of mastic." },
          ingredients: { tr: "Türk kahvesi, damla sakızı", en: "Turkish coffee, mastic" },
          image: "/images/drinks/turk_kahvesi.png"
        },
        {
          name: { tr: "Sahlep", en: "Sahlep" },
          price: "220 TL",
          description: { tr: "Tarçın serpilmiş, sıcacık ve kremsi geleneksel kış içeceği.", en: "Warm and creamy traditional winter drink sprinkled with cinnamon." },
          ingredients: { tr: "Sahlep tozu, süt, şeker, tarçın", en: "Sahlep powder, milk, sugar, cinnamon" },
          image: "/images/drinks/sahlep.png"
        },
        {
          name: { tr: "Sıcak Çikolata", en: "Hot Chocolate" },
          price: "220 TL",
          description: { tr: "Yoğun çikolata lezzetiyle ısıtan, kremsi sıcak içecek.", en: "Creamy hot drink that warms you up with intense chocolate flavor." },
          ingredients: { tr: "Bitter çikolata, süt, şeker", en: "Dark chocolate, milk, sugar" },
          image: "/images/drinks/sicak_cikolata.png"
        },
        {
          name: { tr: "Beyaz Sıcak Çikolata", en: "White Hot Chocolate" },
          price: "220 TL",
          description: { tr: "Beyaz çikolatanın tatlı ve kremsi sıcaklığı.", en: "The sweet and creamy warmth of white chocolate." },
          ingredients: { tr: "Beyaz çikolata, süt, şeker", en: "White chocolate, milk, sugar" },
          image: "/images/drinks/beyaz_sicak_cikolata.png"
        },
        {
          name: { tr: "Fincan Çay", en: "Cup of Tea" },
          price: "125 TL",
          description: { tr: "Fincan servisinde özel demleme çay.", en: "Specially brewed tea served in a cup." },
          ingredients: { tr: "Siyah çay yaprakları", en: "Black tea leaves" },
          image: "/images/drinks/cay.png"
        }
      ]
    },
    {
      category: "Soğuk İçecekler",
      icon: "cold",
      items: [
        {
          name: { tr: "Kola/Fanta/Sprite/Fuse Tea", en: "Coke/Fanta/Sprite/Fuse Tea" },
          price: "200 TL",
          description: { tr: "Serinleten klasik kutu gazlı içecekler ve soğuk çay.", en: "Refreshing classic canned soft drinks and ice tea." },
          ingredients: { tr: "Kutu gazlı içecek veya soğuk çay", en: "Canned soft drink or ice tea" },
          image: "/images/drinks/canned_drinks.png"
        },
        {
          name: { tr: "Maden Suyu", en: "Mineral Water" },
          price: "100 TL",
          description: { tr: "Ferahlatıcı doğal maden suyu, bardakta servis edilir.", en: "Refreshing natural mineral water, served in a glass." },
          ingredients: { tr: "Maden suyu", en: "Mineral water" },
          image: "/images/drinks/maden_suyu.png"
        },
        {
          name: { tr: "Meyveli Soda", en: "Fruit Soda" },
          price: "120 TL",
          description: { tr: "Çeşitli meyve aromalı serinletici soda, bardakta servis edilir.", en: "Refreshing soda with various fruit flavors, served in a glass." },
          ingredients: { tr: "Soda, meyve aroması", en: "Soda, fruit flavor" },
          image: "/images/drinks/meyveli_soda.png"
        },
        {
          name: { tr: "Churchill", en: "Churchill" },
          price: "150 TL",
          description: { tr: "Premium gazlı içecek deneyimi, bardakta servis edilir.", en: "Premium soft drink experience, served in a glass." },
          ingredients: { tr: "Churchill gazlı içecek", en: "Churchill soft drink" },
          image: "/images/drinks/churchill.png"
        },
        {
          name: { tr: "Redbull", en: "Redbull" },
          price: "250 TL",
          description: { tr: "Enerji veren klasik enerji içeceği.", en: "Classic energy drink." },
          ingredients: { tr: "Redbull enerji içeceği", en: "Redbull energy drink" },
          image: "/images/drinks/redbull.png"
        },
        {
          name: { tr: "Aromalı Redbull", en: "Flavored Redbull" },
          price: "350 TL",
          description: { tr: "Çeşitli aromalarda enerji dolu serinlik.", en: "Energy-filled coolness in various flavors." },
          ingredients: { tr: "Aromalı Redbull", en: "Flavored Redbull" },
          image: "/images/drinks/redbull.png"
        },
        {
          name: { tr: "Su", en: "Water" },
          price: "60 TL",
          description: { tr: "Saf ve ferahlatıcı içme suyu.", en: "Pure and refreshing drinking water." },
          ingredients: { tr: "İçme suyu", en: "Drinking water" },
          image: "/images/drinks/maden_suyu.png"
        },
        {
          name: { tr: "Ayran", en: "Ayran" },
          price: "100 TL",
          description: { tr: "Eklemesiz, saf Türk yoğurt içeceği. Serinletici ve sağlıklı.", en: "Additive-free, pure Turkish yogurt drink. Refreshing and healthy." },
          ingredients: { tr: "Yoğurt, su, tuz", en: "Yogurt, water, salt" },
          image: "/images/drinks/ayran_new.png"
        },
        {
          name: { tr: "Meyve Suları", en: "Fruit Juices" },
          price: "200 TL",
          description: { tr: "Taze sıkılmış meyve suyu çeşitleri: Elma, Şeftali, Karışık, Vişne. Bardakta servis edilir.", en: "Freshly squeezed fruit juice varieties: Apple, Peach, Mixed, Cherry. Served in a glass." },
          ingredients: { tr: "Seçtiğiniz meyve suyu", en: "Fruit juice of your choice" },
          image: "/images/drinks/seftali_suyu.png"
        }
      ]
    }
  ],
  entertainment: [
    {
      category: "Canlı Müzik",
      items: [
        {
          name: { tr: "Canlı Müzik Katılım", en: "Live Music Entrance" },
          price: "200 TL",
          description: { tr: "Canlı müzik etkinliğimize katılım bedeli.", en: "Entrance fee for our live music event." },
          ingredients: { tr: "Eğlence ve Müzik", en: "Entertainment and Music" },
          image: ""
        }
      ]
    }
  ]
};

// ── Live Event Schedule ── (her etkinliği buraya ekle)
const liveEvents = [
  {
    day: { tr: "Cuma", en: "Friday" },
    date: "14 Mart",
    artist: "Sanatçı Adı",
    genre: { tr: "Akustik", en: "Acoustic" },
    time: "21:00",
    note: { tr: "Rezervasyon önerilir", en: "Reservation recommended" }
  },
  {
    day: { tr: "Cumartesi", en: "Saturday" },
    date: "15 Mart",
    artist: "Sanatçı Adı",
    genre: { tr: "Caz", en: "Jazz" },
    time: "22:00",
    note: { tr: "Sınırlı kapasite", en: "Limited capacity" }
  },
];

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('menu');
  const [menuSubTab, setMenuSubTab] = useState('food');
  const [lang, setLang] = useState('tr');
  const [eventIndex, setEventIndex] = useState(0);

  // Auto-rotate events
  React.useEffect(() => {
    if (liveEvents.length <= 1) return;
    const timer = setInterval(() => {
      setEventIndex(prev => (prev + 1) % liveEvents.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);


  const t = translations[lang];

  // Language Switcher Component
  const LanguageSwitcher = ({ isDark = false }) => (
    <div className={`flex gap-2 p-1 rounded-full border ${isDark ? 'border-cream/20 bg-forest-green/20' : 'border-forest-green/10 bg-white/50 backdrop-blur-sm shadow-sm'}`}>
      <button
        onClick={() => setLang('tr')}
        className={`px-3 py-1 rounded-full text-sm font-bold transition-all ${lang === 'tr'
          ? (isDark ? 'bg-gold text-forest-green' : 'bg-forest-green text-cream')
          : (isDark ? 'text-cream/60 hover:text-cream' : 'text-forest-green/60 hover:text-forest-green')
          }`}
      >
        TR
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-3 py-1 rounded-full text-sm font-bold transition-all ${lang === 'en'
          ? (isDark ? 'bg-gold text-forest-green' : 'bg-forest-green text-cream')
          : (isDark ? 'text-cream/60 hover:text-cream' : 'text-forest-green/60 hover:text-forest-green')
          }`}
      >
        EN
      </button>
    </div>
  );

  // Splash Screen Component
  const SplashScreen = () => (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Language Switcher in Splash */}
      <div className="absolute top-6 right-6 z-20">
        <LanguageSwitcher />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-forest-green/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-forest-green/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        {/* Logo/Brand Area */}
        <div className="mb-12 relative">
          <div className="w-48 h-48 mx-auto mb-8 bg-white rounded-full flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-gold/30">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-4 border-4 border-gold rounded-full"></div>
              <Snowflake className="w-20 h-20 text-gold animate-float" strokeWidth={2} />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight">
            <span className="text-[#A8D5E2]">SOO </span>
            <span className="text-gold">HO</span>
            <span className="block text-4xl md:text-5xl mt-2 text-[#A8D5E2] font-normal tracking-wider">
              ICE LOUNGE
            </span>
          </h1>

          <div className="flex items-center justify-center gap-2 text-gold/80 mb-6">
            <Sparkles className="w-5 h-5" />
            <p className="text-lg font-medium tracking-wide">{t.premium}</p>
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        {/* Description */}
        <div className="text-xl md:text-2xl text-forest-green/80 mb-12 font-light leading-relaxed">
          <p>{t.sloganTop}</p>
          <span className="block mt-2 font-medium text-forest-green">
            {t.sloganBottom}
          </span>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => setShowMenu(true)}
          className="group relative inline-flex items-center gap-3 bg-forest-green hover:bg-forest-green/90 text-cream px-10 py-5 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          <span>{t.discover}</span>
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />

          {/* Button glow effect */}
          <div className="absolute inset-0 rounded-full bg-gold/20 blur-xl group-hover:bg-gold/30 transition-all duration-300"></div>
        </button>

        {/* Decorative elements */}
        <div className="mt-16 flex items-center justify-center gap-8 text-forest-green/30">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-forest-green/30"></div>
          <Snowflake className="w-6 h-6 animate-spin-slow" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-forest-green/30"></div>
        </div>
      </div>
    </div>
  );

  // Menu Item Card Component
  const MenuItem = ({ item }) => (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
      <div className="flex gap-4 p-5">
        {/* Food Image */}
        <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden group-hover:shadow-lg transition-all duration-300">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name[lang]}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div className="w-full h-full flex items-center justify-center" style={{ display: item.image ? 'none' : 'flex' }}>
            <UtensilsCrossed className="w-10 h-10 text-gray-400 group-hover:text-forest-green transition-colors" strokeWidth={1.5} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-lg font-semibold text-forest-green group-hover:text-forest-green/90 transition-colors">
              {item.name[lang]}
            </h3>
            <span className="flex-shrink-0 bg-forest-green text-cream px-3 py-1 rounded-full text-sm font-medium shadow-sm">
              {item.price}
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {item.description[lang]}
          </p>

          <p className="text-xs text-gray-500 italic line-clamp-1">
            <span className="font-semibold not-italic mr-1">{t.ingredients}</span>
            {item.ingredients[lang]}
          </p>
        </div>
      </div>
    </div>
  );

  // Category Section Component — used in Menu > Yiyecekler
  const CategorySection = ({ category, items }) => (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
        <div className="w-1 h-7 bg-gradient-to-b from-[#1A4D3E] to-gold rounded-full"></div>
        {t.categories[category] || category}
      </h2>
      <div className="grid gap-3">
        {items.map((item, idx) => (
          <MenuItem key={idx} item={item} />
        ))}
      </div>
    </div>
  );

  // Main Menu Component
  const Menu = () => (
    <div className="min-h-screen bg-[#f8f6f2]">

      {/* ═══ HEADER ═══ */}
      <div className="sticky top-0 z-50 bg-slate-navy">
        <div className="max-w-5xl mx-auto px-5 pt-4 pb-0">

          {/* Brand row */}
          <div className="flex items-center justify-between pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold/15 border border-gold/25 rounded-full flex items-center justify-center">
                <Snowflake className="w-5 h-5 text-gold" strokeWidth={2} />
              </div>
              <div>
                <h1 className="text-2xl font-bold leading-none">
                  <span className="text-[#93c5fd]">SOO </span>
                  <span className="text-gold">HO</span>
                </h1>
                <p className="text-white/35 text-[10px] tracking-widest uppercase mt-0.5">{t.digitalMenu}</p>
              </div>
            </div>
            <LanguageSwitcher isDark={true} />
          </div>

          {/* ── Main 2-tab strip ── */}
          <div className="flex border-t border-white/10">
            <button
              onClick={() => setActiveTab('menu')}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold transition-all duration-200 border-b-2 ${activeTab === 'menu'
                ? 'border-gold text-gold'
                : 'border-transparent text-white/45 hover:text-white/75'
                }`}
            >
              <UtensilsCrossed className="w-4 h-4" />
              {t.menuTab}
            </button>
            <button
              onClick={() => setActiveTab('entertainment')}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-semibold transition-all duration-200 border-b-2 ${activeTab === 'entertainment'
                ? 'border-fuchsia-400 text-fuchsia-300'
                : 'border-transparent text-white/45 hover:text-white/75'
                }`}
            >
              <Music className="w-4 h-4" />
              {t.entertainmentTab}
            </button>
          </div>

          {/* ── Sub-tabs (only for Menu) ── */}
          {activeTab === 'menu' && (
            <div className="flex gap-2 py-3 border-t border-white/[0.06]">
              <button
                onClick={() => setMenuSubTab('food')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${menuSubTab === 'food' ? 'bg-gold text-slate-navy' : 'bg-white/10 text-white/55 hover:bg-white/15'
                  }`}
              >
                <UtensilsCrossed className="w-3 h-3" />
                {t.food}
              </button>
              <button
                onClick={() => setMenuSubTab('drinks')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 ${menuSubTab === 'drinks' ? 'bg-gold text-slate-navy' : 'bg-white/10 text-white/55 hover:bg-white/15'
                  }`}
              >
                <Coffee className="w-3 h-3" />
                {t.drinks}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ═══ MENU TAB ═══ */}
      {activeTab === 'menu' && (
        <div className="max-w-4xl mx-auto px-5 py-8">
          {menuSubTab === 'food' && (
            <div>
              {menuData.food.map((section, idx) => (
                <CategorySection key={idx} category={section.category} items={section.items} />
              ))}
            </div>
          )}
          {menuSubTab === 'drinks' && (
            <div>
              {menuData.drinks.map((section, idx) => (
                <div key={idx} className="mb-10">
                  <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                    <div className="w-1 h-7 bg-gradient-to-b from-[#1A4D3E] to-gold rounded-full"></div>
                    {section.icon === 'hot'
                      ? <Flame className="w-5 h-5 text-orange-500" />
                      : <Snowflake className="w-5 h-5 text-blue-400" />}
                    {t.categories[section.category] || section.category}
                  </h2>
                  <div className="grid gap-3">
                    {section.items.map((item, ii) => <MenuItem key={ii} item={item} />)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ═══ ENTERTAINMENT TAB ═══ */}
      {activeTab === 'entertainment' && (
        <div className="relative min-h-[calc(100vh-130px)] flex flex-col overflow-hidden bg-[#0c0d11]">
          {/* Ambient soft bg */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[55%] bg-gradient-to-b from-slate-700/15 via-indigo-900/8 to-transparent blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none"></div>
          <div className="absolute top-1/3 -left-24 w-64 h-64 bg-indigo-800/8 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-1/3 -right-24 w-64 h-64 bg-slate-700/8 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '48px 48px' }}
          ></div>

          <div className="relative z-10 flex flex-col items-center px-5 py-10 md:py-16 w-full">

            {/* Stage lights — soft ice blue/white */}
            <div className="flex items-end justify-center gap-5 md:gap-10 mb-10">
              {[...Array(5)].map((_, i) => {
                const c = ['#cbd5e1', '#94a3b8', '#e2e8f0', '#94a3b8', '#cbd5e1'];
                const g = ['rgba(203,213,225,.3)', 'rgba(148,163,184,.3)', 'rgba(226,232,240,.35)', 'rgba(148,163,184,.3)', 'rgba(203,213,225,.3)'];
                const h = [80, 120, 160, 120, 80];
                return (
                  <div key={i} className={`flex flex-col items-center gap-1 ${i === 2 ? 'scale-110' : 'opacity-50'}`}>
                    <div className="w-1 h-5 bg-slate-700 rounded-t-full"></div>
                    <div className="w-3.5 h-3.5 rounded-full blur-[2px] animate-pulse-slow"
                      style={{ background: c[i], animationDelay: `${i * .3}s`, boxShadow: `0 0 10px 4px ${g[i]}` }}></div>
                    <div className="w-px opacity-15"
                      style={{ height: `${h[i]}px`, background: `linear-gradient(to bottom,${c[i]},transparent)` }}></div>
                  </div>
                );
              })}
            </div>

            {/* Icon */}
            <div className="relative mb-5">
              <div className="absolute inset-0 rounded-full bg-slate-500/10 blur-2xl scale-150"></div>
              <div className="relative inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full border border-slate-500/20 bg-gradient-to-br from-slate-700/20 to-indigo-800/20 shadow-[0_0_40px_rgba(100,116,139,.2)]">
                <Music className="w-10 h-10 md:w-12 md:h-12 text-slate-300" />
              </div>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-black text-white mb-3 text-center tracking-tight">
              {t.entertainmentTab}
            </h2>

            {/* Divider */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-slate-500/40"></div>
              <Sparkles className="w-3 h-3 text-slate-500/50" />
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-slate-500/40"></div>
            </div>

            <p className="text-slate-400/70 text-sm font-light max-w-xs text-center leading-relaxed mb-10">
              {lang === 'tr' ? 'Müziğin ritmine kapılın, ateş başında unutulmaz bir akşam yaşayın.' : 'Get lost in the rhythm of music & enjoy the night by the fire.'}
            </p>


            {/* Ticket card */}

            {menuData.entertainment.filter(s => s.category === 'Canlı Müzik').map((section, si) =>
              section.items.map((item, ii) => (
                <div key={`${si}-${ii}`} className="relative w-full max-w-sm group mb-4">
                  <div className="relative bg-[#12141a] border border-slate-700/50 rounded-2xl overflow-hidden group-hover:border-slate-500/50 transition-colors duration-300">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-500/50 to-transparent"></div>
                    <div className="px-8 py-6 flex flex-col items-center text-center gap-2">
                      <span className="text-[10px] uppercase tracking-[.3em] text-slate-500 font-semibold">🎫 {lang === 'tr' ? 'Bilet' : 'Ticket'}</span>
                      <h3 className="text-2xl font-bold text-white tracking-wide">{item.name[lang]}</h3>
                      <div className="text-3xl font-black text-white">{item.price}</div>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.description[lang]}</p>
                    </div>
                    <div className="flex items-center px-4">
                      <div className="w-4 h-4 rounded-full bg-[#0c0d11] -ml-6 flex-shrink-0"></div>
                      <div className="flex-1 border-t border-dashed border-slate-700/50 mx-2"></div>
                      <div className="w-4 h-4 rounded-full bg-[#0c0d11] -mr-6 flex-shrink-0"></div>
                    </div>
                    <div className="px-8 py-3.5 flex items-center justify-center gap-2">
                      <Music className="w-3 h-3 text-slate-700" />
                      <span className="text-slate-700 text-[10px] tracking-widest uppercase">SOO HO Ice Lounge</span>
                      <Music className="w-3 h-3 text-slate-700" />
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* EQ bars — soft */}
            <div className="mt-12 flex items-end justify-center gap-1">
              {[12, 20, 32, 18, 28, 36, 22, 30, 16, 26, 20, 14].map((h, i) => (
                <div key={i} className="w-1.5 rounded-full animate-pulse-slow"
                  style={{ height: `${h}px`, background: 'linear-gradient(to top,#475569,#94a3b8)', animationDelay: `${i * .12}s`, opacity: .35 }}></div>
              ))}
            </div>
          </div>
        </div>
      )}


      {/* ═══ FOOTER ═══ */}
      <div className="bg-slate-navy text-cream py-10">
        <div className="max-w-4xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-3 bg-white/5 p-5 rounded-xl border border-white/10">
              <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gold mb-1">{t.location}</h3>
                <p className="text-sm text-cream/65 leading-relaxed">Dedeman Ski Lodge<br />Üst Bahçesi/25080</p>
              </div>
            </div>
            <div className="space-y-2.5">
              <h3 className="font-semibold text-gold mb-3">{t.contact}</h3>
              {[['https://wa.me/905012507646', '_blank', Phone, '+90 501 250 76 46'],
              ['mailto:sooholcelounge@gmail.com', undefined, Mail, 'sooholcelounge@gmail.com'],
              ['https://instagram.com/soohoicelounge', '_blank', Instagram, '@soohoicelounge']
              ].map(([href, target, Icon, label], i) => (
                <a key={i} href={href} target={target} rel={target ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10 hover:border-gold/35 hover:bg-white/10 transition-all duration-200 group">
                  <Icon className="w-4 h-4 text-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-cream/70">{label}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="text-center pt-6 border-t border-white/10">
            <p className="text-gold/65 mb-2">{t.enjoy}</p>
            <p className="text-xs text-cream/35">© 2025 SOO HO Ice Lounge</p>
          </div>
        </div>
      </div>
    </div >
  );

  return (
    <div className="font-sans antialiased">
      {!showMenu ? <SplashScreen /> : <Menu />}
    </div>
  );
}

export default App;
