/**
 * Global site settings. Editing anything here changes it everywhere on the site.
 */
export const site = {
  name: 'Open Treatments Foundation',
  url: 'https://www.opentreatments.org',
  email: 'sanath@opentreatments.org',
  github: 'https://github.com/RareCamp/RareCamp',
  legal:
    'OpenTreatments Foundation is a registered non-profit organization in the state of Washington',
  legalSecondary: 'Pending IRS 501 (c) (3) status',
};

/** Main navigation. Add a page here to make it appear in the header. */
export const mainNav = [
  {
    label: 'About Us',
    children: [
      { label: 'What we stand for', href: '/what-we-stand-for' },
      { label: 'Board of Directors', href: '/board-of-directors' },
      { label: 'Advisors', href: '/advisors' },
      { label: 'Team', href: '/team' },
    ],
  },
  { label: 'Connect Wiki', href: 'https://opentreatments-connect.super.site' },
  { label: 'Platform', href: '/platform' },
  { label: 'Press', href: '/press' },
];

/** The small link row in the footer. */
export const footerNav = [
  { label: 'About', href: '/what-we-stand-for' },
  { label: 'Our Team', href: '/team' },
  { label: 'Platform', href: '/platform' },
  { label: 'Contact', href: '/contact-us' },
];
