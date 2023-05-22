const names = [
  'Adam',
  'Adam-James',
  'Addison',
  'Addisson',
  'Adegbola',
  'Adegbolahan',
  'Aden',
  'Adenn',
  'Aiden',
  'Aiden-Jack',
  'Aiden-Vee',
  'Aidian',
  'Aidy',
  'Ailin',
  'Aiman',
  'Ainsley',
  'Ainslie',
  'Airen',
  'Haider',
  'Hamad',
  'Hamid',
  'Hamish',
  'Hamza',
  'Hamzah',
  'Han',
  'Hansen',
  'Hao',
  'Howie',
  'Hristomir',
  'Hubert',
  'Hugh',
  'Hugo',
  'Humza',
  'Hunter',
  'Husnain',
  'Hussain',
  'Hussan',
  'Ikemsinachukwu',
  'Ilyaas',
  'Ilyas',
  'Iman',
  'Immanuel',
  'Inan',
  'Indy',
  'Ines',
  'Innes',
  'Ioannis',
  'Ireayomide',
  'Ireoluwa',
  'Kade',
  'Kaden',
  'Kadin',
  'Kadyn',
  'Kaeden',
  'Kael',
  'Kaelan',
  'Kaelin',
  'Kaelum',
  'Kai',
  'Kaid',
  'Kaidan',
  'Kaiden',
  'Kaylum',
  'Kayne',
  'Kaywan',
  'Kealan',
  'Kealon',
  'Kean',
  'Keane',
  'Kearney',
  'Keatin',
  'Keaton',
  'Keavan',
  'Keayn',
  'Kieren',
  'Kierin',
  'Kiern',
  'Kieron',
  'Kieryn',
  'Kile',
  'Killian',
  'Lucien',
  'Lucus',
  'Luic',
  'Luis',
  'Luk',
  'Luka',
  'Lukas',
  'Lukasz',
  'Luke',
  'Maisum',
  'Maitlind',
  'Majid',
  'Makensie',
  'Makenzie',
  'Makin',
  'Maksim',
  'Maksymilian',
  'Marwan',
  'Maryk',
  'Marzuq',
  'Mashhood',
  'Mason',
  'Mason-Jay',
  'Masood',
  'Masson',
  'Matas',
  'Neco',
  'Neil',
  'Nelson',
  'Neo',
  'Neshawn',
  'Nevan',
  'Nevin',
  'Ngonidzashe',
  'Nial',
  'Niall',
  'Nicholas',
  'Ohran',
  'Oilibhear',
  'Oisin',
  'Ojima-Ojo',
  'Okeoghene',
  'Olaf',
  'Osesenagha',
  'Oskar',
  'Ossian',
  'Oswald',
  'Otto',
  'Owain',
  'Owais',
  'Owen',
  'Owyn',
  'Oz',
  'Pasquale',
  'Patrick',
  'Patrick-John',
  'Patrikas',
  'Patryk',
  'Paul',
  'Pavit',
  'Pawel',
  'Pawlo',
  'Prentice',
  'Presley',
  'Preston',
  'Preston-Jay',
  'Prinay',
  'Prince',
  'Prithvi',
  'Promise',
  'Shaun-Paul',
  'Shaun-Thomas',
  'Shayan',
  'Shaye',
  'Shayne',
  'Shazil',
  'Shea',
  'Sheafan',
  'Sheigh',
  'Shenuk',
  'Spencer',
  'Spondon',
  'Stanislaw',
  'Stanley',
  'Stefan',
  'Stefano',
  'Stefin',
  'Stephen',
  'Stephenjunior',
  'Steve',
  'Taegen',
  'Tai',
  'Tait',
  'Taiwo',
  'Talha',
  'Taliesin',
  'Talon',
  'Talorcan',
  'Tamar',
  'Tamiem',
  'Zarran',
  'Zayd',
  'Zayn',
  'Zayne',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  ];
  
  const assignments = [
    'Chess',
    'Excercise',
    'Play the Drums',
    'Poker',
    'Clash of Clans',
    'Snaker',
    'video review',
    'github',
    'Instagram',
    'Flowchart',
    'Messages',
    'Email',
    'Mozilla',
    'Chrome',
    'Fantasy Draft App',
    'Design App',
    'blackjack',
    'Fullstack coding',
  ];
  

  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  

  const getRandomName = () =>
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
  

  const getRandomAssignments = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        assignmentName: getRandomArrItem(assignments),
        score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
      });
    }
    return results;
  };
  
  module.exports = { getRandomName, getRandomAssignments };
  