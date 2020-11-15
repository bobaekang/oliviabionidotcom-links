export default {
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
}
