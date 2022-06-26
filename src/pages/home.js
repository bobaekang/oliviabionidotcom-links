export default {
  path: '/',
  props: {
    featuredLink: {
      avatar: 'assets/breatheeducation.png',
      href: 'https://breathe-education.com/masterclasses/',
      external: true,
      title: 'Join my Masterclass at Breathe Education 💪',
    },
    links: [
      {
        avatar: 'assets/ptm.jpg',
        href: '/pilatesteachersmanual',
        external: false,
        title: 'Pilates Teachers’ Manual podcast 🎧',
      },
      {
        avatar: 'assets/psm.jpg',
        href: '/pilatesstudentsmanual',
        external: false,
        title: 'Pilates Students’ Manual podcast 🎧',
      },
      {
        avatar: 'assets/education.svg',
        href: '/continuingeducation',
        external: false,
        title: 'Earn your Continuing Education Credits 📔',
      },
      {
        avatar: 'assets/discount.svg',
        href: '/affiliates',
        external: false,
        title: 'Save on products I love ❤️',
      },
      {
        avatar: 'assets/youtube.png',
        href: 'https://www.youtube.com/channel/UCOLgATdG1_PDxMiFOuv_gwg',
        external: true,
        title: 'Subscribe to my YouTube channel',
      },
      {
        avatar: 'assets/instagram.png',
        href: 'https://www.instagram.com/oliviabioniwellness/',
        external: true,
        title: 'Follow me @OliviaBioniWellness',
      },
    ],
  },
  meta: {
    description: "Links to Olivia's podcasts, social, website, and more! 😍",
    imagePath: 'https://links.oliviabioni.com/assets/og_image.jpg',
  },
}
