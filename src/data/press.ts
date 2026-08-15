/**
 * Everything listed on /press, grouped into the three sections that page uses.
 *
 * To add coverage: drop the outlet logo in src/assets/images and add an entry
 * to the right array. `href` may be an external URL or a local path.
 */
export interface PressItem {
  title: string;
  href: string;
  /** Outlet logo filename inside src/assets/images */
  image: string;
}

export const pressReleases: PressItem[] = [
  {
    title:
      'OpenTreatments Foundation Launches Software to Decentralize and Accelerate Drug Development for Rare Genetic Diseases',
    href: '/press-release',
    image: 'logo-open-treatments-square.png',
  },
  {
    title:
      'The Linux Foundation Hosts Project to Decentralize and Accelerate Drug Development for Rare Genetic Diseases',
    href: 'https://www.linuxfoundation.org/en/press-release/the-linux-foundation-hosts-project-to-decentralize-and-accelerate-drug-development-for-rare-genetic-diseases/',
    image: 'logo-linux-foundation.png',
  },
];

export const news: PressItem[] = [
  {
    title: 'Software engineer bets on technology to help speed rare disease treatments',
    href: 'https://www.sciencemag.org/news/2021/03/software-engineer-bets-technology-help-speed-rare-disease-treatments',
    image: 'logo-science.png',
  },
  {
    title: 'Linux Foundation and OpenTreatments Foundation team up to fight rare genetic diseases',
    href: 'https://www.zdnet.com/article/linux-foundation-and-opentreatments-foundation-team-up-to-fight-rare-genetic-diseases/',
    image: 'logo-zdnet.png',
  },
  {
    title: 'A new collaboration demonstrates how tech can help understand rare diseases',
    href: 'https://www.techrepublic.com/article/a-new-collaboration-demonstrates-how-tech-can-help-understand-rare-diseases/',
    image: 'logo-techrepublic.png',
  },
  {
    title:
      'Tech-savvy dad launches open-source platform to save children with rare diseases – including his son',
    href: 'https://www.geekwire.com/2021/tech-savvy-dad-launches-open-source-platform-save-children-rare-diseases-including-son/',
    image: 'logo-geekwire.png',
  },
  {
    title: 'Linux Foundation hosts RareCamp open-source platform to democratize gene therapy',
    href: 'https://siliconangle.com/2021/03/31/linux-foundation-agrees-host-rarecamp-open-source-platform-aims-democratize-gene-therapy/',
    image: 'logo-siliconangle.png',
  },
];

export const interviews: PressItem[] = [
  {
    title: 'OpenTreatments Foundation: Democratizing and Decentralizing Drug Development',
    href: 'https://www.linux.com/audience/developers/opentreatments-foundation-democratizing-and-decentralizing-drug-development/',
    image: 'logo-linux-com.png',
  },
  {
    title:
      'How this tech engineer is using his son’s rare disease as inspiration to disrupt drug development',
    href: 'https://www.geekwire.com/2021/tech-engineer-using-sons-rare-disease-inspiration-disrupt-drug-development/',
    image: 'logo-geekwire.png',
  },
  {
    title:
      'A Software Platform to Give Patients the Tools to Build Treatments for Rare Genetic Diseases',
    href: 'https://globalgenes.org/rare-cast/327/',
    image: 'logo-rarecast.png',
  },
];
