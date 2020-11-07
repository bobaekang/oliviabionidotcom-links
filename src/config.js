export default {
  home: {
    path: '/',
    props: {
      isHome: true,
      links: [
        {
          avatar: 'assets/ptm.jpg',
          href: '/pilatesteachersmanual',
          newtab: false,
          title: 'Pilates Teachers’ Manual podcast 🎧',
        },
        {
          avatar: 'assets/psm.jpg',
          href: '/pilatesstudentsmanual',
          newtab: false,
          title: 'Pilates Students’ Manual podcast 🎧',
        },
        {
          avatar: 'assets/education.svg',
          href: '/continuingeducation',
          newtab: false,
          title: 'Earn your Continuing Education Credits 📔',
        },
        {
          avatar: 'assets/discount.svg',
          href: '/affiliates',
          newtab: false,
          title: 'Save on products I love ❤️',
        },
        {
          avatar: 'assets/youtube.png',
          href: 'https://www.youtube.com/channel/UCOLgATdG1_PDxMiFOuv_gwg',
          newtab: true,
          title: 'Subscribe to my YouTube channel',
        },
        {
          avatar: 'assets/instagram.png',
          href: 'https://www.instagram.com/oliviabioniwellness/',
          newtab: true,
          title: 'Follow me @OliviaBioniWellness',
        },
        {
          avatar: 'favicon.ico',
          href: 'https://wellness.oliviabioni.com',
          newtab: true,
          title: 'Check out my website ✨',
        },
      ],
    },
    meta: {
      description: "Links to Olivia's podcasts, social, website, and more! 😍",
      imagePath: 'https://links.oliviabioni.com/assets/og_image.jpg',
    },
  },
  affiliates: {
    path: '/affiliates',
    props: {
      descriptionHtml:
        'Here are some products I use and love. ❤️<br />Click any button below and get a discount on your first order! 🤩',
      links: [
        {
          avatar: 'assets/fabletics.svg',
          href:
            'https://www.fabletics.com/index.cfm?action=home.main&code=82773736',
          newtab: true,
          title: 'Fabletics activewear',
          detail: 'Get your first two pairs of leggings for $24!',
        },
        {
          avatar: 'assets/ritual.svg',
          href: 'https://share.ritual.com/x/FktD8j',
          newtab: true,
          title: 'Ritual multivitamin',
          detail:
            '$15 off your first month of minty vitamins! First 10 sign ups only.',
        },
        {
          avatar: 'assets/kenko.svg',
          href: 'https://www.kencko.com/?referrer_id=2840563122236',
          newtab: true,
          title: 'Kenko smoothie',
          detail:
            '$10 off your first purchase of this delicious, portable smoothie subscription!',
        },
        {
          avatar: 'assets/winc.png',
          href: 'http://www.winc.com/hi/obioni',
          newtab: true,
          title: 'Winc wine subscription',
          detail: '$22 off your first order of wine!',
        },
        {
          avatar: 'assets/misfits.svg',
          href: 'https://www.misfitsmarket.com/',
          newtab: true,
          title: 'Misfits Market organic produce',
          detail:
            '25% off of your first order! Use discount code: COOKWME-QO3TQM',
        },
        {
          avatar: 'assets/packagefree.png',
          href: 'http://rwrd.io/iamkmza',
          newtab: true,
          title: 'Package Free zero waste shopping',
          detail: '$10 off your first order and go green!',
        },
        {
          avatar: 'assets/boka.svg',
          href: 'https://go.referralcandy.com/share/3H4X728',
          newtab: true,
          title: 'Boka toothpaste',
          detail: '15% off of your first order!',
        },
      ],
    },
    meta: {
      description:
        'Enjoy discounts on products I use and love with my affiliate links! 😍',
      imagePath: 'https://links.oliviabioni.com/assets/og_image.jpg',
    },
  },
  continuingEducation: {
    path: '/continuingeducation',
    props: {
      descriptionHtml:
        'My favorite programs for earning Continuing Education Credits. 👍<br /> I might get commissions from the following links.',
      links: [
        {
          avatar: 'assets/chelseacorley.png',
          href: 'https://links.oliviabioni.com/chelseacorley',
          newtab: true,
          title: 'Integrated Teaching System by Chelsea Corley',
          detail:
            '"Become the Pilates Instructor Clients Can\'t Live Without!"',
        },
      ],
    },
    meta: {
      description:
        'Try these awesome programs for your Continuing Education Credit! 🤓',
      imagePath: 'https://links.oliviabioni.com/assets/og_image.jpg',
    },
  },
  pilatesStudentsManual: {
    path: '/pilatesstudentsmanual',
    props: {
      descriptionHtml:
        'Helping you to get the most out of your next Pilates class!',
      links: [
        {
          avatar: 'assets/psm.jpg',
          href: 'https://pilatesstudentsmanual.oliviabioni.com',
          newtab: true,
          title: 'Listen to Pilates Students’ Manual podcast 🎧',
        },
        {
          avatar: 'assets/youtube.png',
          href:
            'https://www.youtube.com/channel/UCOLgATdG1_PDxMiFOuv_gwg/search?query=Pilates+Students%27+Manual',
          newtab: true,
          title: "Find Pilates Students' Manual on YouTube",
        },
        {
          avatar: 'assets/instagram.png',
          href: 'https://www.instagram.com/pilatesstudentsmanual/',
          newtab: true,
          title: 'Follow @PilatesStudentsManual',
        },
        {
          avatar: 'assets/facebook.png',
          href: 'https://facebook.com/pilatesstudentsmanual/',
          newtab: true,
          title: "Like Pilates Students' Manual page",
        },
        {
          avatar: 'assets/discount.svg',
          href: '/affiliates',
          newtab: false,
          title: 'Save on products I love ❤️',
        },
      ],
    },
    meta: {
      description:
        'Helping you to get the most out of your next Pilates class! 😎',
      imagePath: 'https://links.oliviabioni.com/assets/og_psm.png',
    },
  },
  pilatesTeachersManual: {
    path: '/pilatesteachersmanual',
    props: {
      descriptionHtml: 'Your guide to becoming a great Pilates teacher!',
      links: [
        {
          avatar: 'assets/ptm.jpg',
          href: 'https://pilatesteachersmanual.oliviabioni.com',
          newtab: true,
          title: 'Listen to Pilates Teachers’ Manual podcast 🎧',
        },
        {
          avatar: 'assets/youtube.png',
          href:
            'https://www.youtube.com/channel/UCOLgATdG1_PDxMiFOuv_gwg/search?query=Pilates+Teachers%27+Manual',
          newtab: true,
          title: "Find Pilates Teachers' Manual on YouTube",
        },
        {
          avatar: 'assets/instagram.png',
          href: 'https://www.instagram.com/pilatesteachersmanual/',
          newtab: true,
          title: 'Follow @PilatesTeachersManual',
        },
        {
          avatar: 'assets/facebook.png',
          href: 'https://facebook.com/pilatesteachersmanual/',
          newtab: true,
          title: "Like Pilates Teachers' Manual page",
        },
        {
          avatar: 'assets/education.svg',
          href: '/continuingeducation',
          newtab: false,
          title: 'Earn your Continuing Education Credits 📔',
        },
        {
          avatar: 'assets/discount.svg',
          href: '/affiliates',
          newtab: false,
          title: 'Save on products I love ❤️',
        },
      ],
    },
    meta: {
      description: 'Your guide to becoming a great Pilates teacher! 💪',
      imagePath: 'https://links.oliviabioni.com/assets/og_ptm.png',
    },
  },
}
