export default {
  path: '/pilatesteachersmanual',
  props: {
    descriptionHtml: 'Your guide to becoming a great Pilates teacher!',
    links: [
      {
        avatar: 'assets/ptm.jpg',
        href: 'https://pilatesteachersmanual.buzzsprout.com',
        external: true,
        title: 'Listen to Pilates Teachers’ Manual podcast 🎧',
      },
      {
        avatar: 'assets/youtube.png',
        href:
          'https://www.youtube.com/channel/UCOLgATdG1_PDxMiFOuv_gwg/search?query=Pilates+Teachers%27+Manual',
        external: true,
        title: "Find Pilates Teachers' Manual on YouTube",
      },
      {
        avatar: 'assets/instagram.png',
        href: 'https://www.instagram.com/pilatesteachersmanual/',
        external: true,
        title: 'Follow @PilatesTeachersManual',
      },
      {
        avatar: 'assets/facebook.png',
        href: 'https://facebook.com/pilatesteachersmanual/',
        external: true,
        title: "Like Pilates Teachers' Manual page",
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
    ],
  },
  meta: {
    description: 'Your guide to becoming a great Pilates teacher! 💪',
    imagePath: 'https://links.oliviabioni.com/assets/og_ptm.png',
  },
}
