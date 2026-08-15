/**
 * Everyone listed on /board-of-directors, /advisors and /team.
 *
 * To add a person: drop their photo in src/assets/images (name it
 * `person-first-last.jpg`) and add an entry to the right list below.
 */
export interface Person {
  name: string;
  /** Role or affiliation, shown under the name. */
  title?: string;
  /** Filename inside src/assets/images */
  photo: string;
  /** Long biography — board members only. */
  bio?: string;
  /** External "Read Bio" link — advisors only. */
  bioUrl?: string;
}

export const board: Person[] = [
  {
    name: 'Sanath Kumar Ramesh',
    title: 'Founder & CEO of OpenTreatments Foundation',
    photo: 'person-sanath-kumar-ramesh.png',
    bio: "Sanath is a bold and visionary software leader, open source pioneer and a rare disease drug developer. In his career, he has built and launched several successful open source software products. He is now using open source software to enable treatments for 400 million patients worldwide affected with rare genetic diseases through his non-profit organization, OpenTreatments Foundation. He is building the world's first software platform to decentralize drug development and empower anyone in the world to create a treatment for a genetic disease. He is also the father of a 2 year old boy who is one of 9 kids worldwide with an ultra-rare genetic disease called SSMD (curegpx4.org)",
  },
  {
    name: 'Plavi Mittal',
    photo: 'person-plavi-mittal.png',
    bio: 'Dr. Mittal is the Founder, and the former President and CEO of the Jain Foundation, for 13 years from (2005 -2017) focused on a cure for an orphan disease, called Dysferlinopathy. Under her leadership, the Jain Foundation funded ~$50M towards diagnostics, research and clinical trials of this disease. The Jain Foundation’s operating model is emulated by many other rare disease foundations. She earned a Ph.D. in Biology from Brandeis University and performed postdoctoral work in molecular oncology at Harvard Medical School.',
  },
  {
    name: 'Ethan O. Perlstein',
    photo: 'person-ethan-perlstein.png',
    bio: 'Ethan is a biotech entrepreneur and genetic disease cure sherpa. In 2014, Ethan founded Perlara PBC, the first biotech public benefit corporation that is co-developing new treatments of genetic disease in joint venture partnership with highly motivated families. In addition to being CEO of Perlara, Ethan is the CEO of the recently formed joint venture spun out of Perlara called Maggie’s Pearl, which is developing epalrestat as a platform therapy for congenital disorders of glycosylation (CDG), starting with PMM2-CDG.',
  },
  {
    name: 'Julia Vitarello',
    photo: 'person-julia-vitarello.png',
    bio: 'In December 2016, Julia founded Mila\'s Miracle Foundation (MMF) upon learning that her seemingly healthy six-year-old daughter Mila had Batten disease, a devastating genetic condition. In an unprecedented collaboration led by Julia and Dr. Timothy Yu from Boston Children’s Hospital, Mila became the first person in the world to receive a drug tailored to just one person - affectionately named milasen. Driven by a sense of hope and obligation, Julia is on a mission to ensure that truly personal medicines become accessible to children across hundreds of rare diseases who otherwise would have no chance. Through MMF, Julia has also initiated the work toward a novel gene therapy targeting the MFSD8/Batten CLN7 gene, hosts scientific meetings, funds basic science projects in the US and Europe, and speaks at scientific meetings and conferences across the country.',
  },
];

export const advisors: Person[] = [
  {
    name: 'Dr. Jude Samulski',
    title: 'President, CSO & Co-Founder of AskBio',
    photo: 'person-jude-samulski.jpg',
    bioUrl: 'https://www.askbio.com/person/richard-jude-samulski-phd/',
  },
  {
    name: 'Dr. Matt Might',
    title:
      'Director of the Hugh Kaul Precision Medicine Institute at the University of Alabama at Birmingham',
    photo: 'person-matt-might.jpeg',
    bioUrl: 'http://matt.might.net/bio/',
  },
  {
    name: 'Ian Estepan',
    title: 'Executive Vice President, Chief Financial Officer at Sarepta Therapeutics',
    photo: 'person-ian-estepan.jpg',
    bioUrl: 'https://www.linkedin.com/in/ian-estepan-a9b1921/',
  },
  {
    name: 'Swami Sivasubramanian',
    title: 'VP, Amazon AI',
    photo: 'person-swami-sivasubramanian.jpg',
    bioUrl: 'https://www.linkedin.com/in/swaminathansivasubramanian/',
  },
];

/** The team page groups people under headings. Add a group or a member here. */
export const teamGroups: { heading: string; members: Person[] }[] = [
  {
    heading: 'Software Team',
    members: [
      { name: 'Brett Andrews', title: 'Director of Engineering', photo: 'person-brett-andrews.jpeg' },
      { name: 'Vysakh Sreenivasan', title: 'Software Engineer', photo: 'person-vysakh-sreenivasan.jpeg' },
      { name: 'Uday Pydi', title: 'Software Engineer', photo: 'person-uday-pydi.png' },
      { name: 'Ramya Ramaswamy', title: 'Product Designer', photo: 'person-ramya-ramaswamy.jpeg' },
    ],
  },
  {
    heading: 'Science Team',
    members: [
      { name: 'Dr. Ashley Winslow', title: 'Gene Therapy Expert', photo: 'person-ashley-winslow.jpg' },
      { name: 'Dr. David Fischer', title: 'Gene Therapy Expert', photo: 'person-david-fischer.jpeg' },
      { name: 'Dr. Natalia Morsci', title: 'Gene Therapy Expert', photo: 'person-natalia-morsci.jpg' },
      { name: 'Dr. Rodney Samaco', title: 'Drug Development Expert', photo: 'person-rodney-samaco.jpeg' },
    ],
  },
  {
    heading: 'Content Team',
    members: [
      { name: 'Pam Todd', title: 'Science Writer', photo: 'person-pam-todd.jpeg' },
      { name: 'Dr. Surabi Veeraragavan', title: 'Science Writer', photo: 'person-surabi-veeraragavan.jpeg' },
      { name: 'Parvathy Raman', title: 'Science Writer', photo: 'person-parvathy-raman.jpeg' },
      { name: 'Robert Tomaino', title: 'Science Writer', photo: 'person-robert-tomaino.jpeg' },
      { name: 'Jordan Barrish', title: 'Communications Manager', photo: 'person-jordan-barrish.jpeg' },
      { name: 'Shaine Greenwood', title: 'UX Writer', photo: 'person-shaine-greenwood.jpg' },
    ],
  },
];
