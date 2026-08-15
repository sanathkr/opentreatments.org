/**
 * Logo strips. To add one, drop the image in src/assets/images and add a row.
 */
export interface Logo {
  name: string;
  /** Filename inside src/assets/images */
  image: string;
  href?: string;
}

/** Shown under "Our Collaborators" on the home page. */
export const collaborators: Logo[] = [
  { name: 'Baylor College of Medicine', image: 'logo-baylor.png' },
  { name: 'Castle IRB', image: 'logo-castle-irb.png' },
  { name: 'Charles River', image: 'logo-charles-river.png' },
  { name: "Columbus Children's Foundation", image: 'logo-columbus-childrens.png' },
  { name: 'Global Genes', image: 'logo-global-genes.png' },
  { name: 'Odylia Therapeutics', image: 'logo-odylia.png' },
  { name: 'RARE-X', image: 'logo-rare-x.png' },
  { name: 'Turing', image: 'logo-turing.png' },
];

/** The patient-led organisations piloting the platform. */
export const pilots: Logo[] = [
  { name: 'CureGPX4', image: 'logo-curegpx4.png' },
  { name: 'IDefine', image: 'logo-idefine.png' },
  { name: 'CureCMD', image: 'logo-curecmd.png' },
  { name: 'INADcure', image: 'logo-inadcure.png' },
];
