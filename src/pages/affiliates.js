export default {
  path: '/affiliates',
  props: {
    descriptionHtml:
      'Here are some products I use and love. ❤️<br />Click any button below and get a discount on your first order! 🤩',
    links: [
      {
        avatar: 'assets/fabletics.svg',
        href:
          'https://www.fabletics.com/index.cfm?action=home.main&code=82773736',
        external: true,
        title: 'Fabletics activewear',
        detail: 'Get your first two pairs of leggings for $24!',
      },
      {
        avatar: 'assets/kenko.svg',
        href: 'https://www.kencko.com/?referrer_id=2840563122236',
        external: true,
        title: 'Kenko smoothie',
        detail:
          '$10 off your first purchase of this delicious, portable smoothie subscription!',
      },
      {
        avatar: 'assets/packagefree.png',
        href: 'http://rwrd.io/iamkmza',
        external: true,
        title: 'Package Free zero waste shopping',
        detail: '$10 off your first order and go green!',
      },
      {
        avatar: 'assets/girlfriendcollective.webp',
        href:
          'https://www.girlfriend.com/?sref_id=qccf4x7&utm_campaign=referral_program&utm_source=loyalty',
        external: true,
        title: 'Girlfriend Collective activewear',
        detail: '$10 off your first purchase of ethically made activewear!',
      },
    ],
  },
  meta: {
    description:
      'Enjoy discounts on products I use and love with my affiliate links! 😍',
    imagePath: 'https://links.oliviabioni.com/assets/og_image.jpg',
  },
}
