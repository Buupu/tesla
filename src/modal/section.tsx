export interface SectionModal {
  heading: string;
  subheading: { text: string; link: { text: string; to?: string } };
  primaryButton: { text: string; to?: string };
  secondaryButton: { text: string; to?: string };
  subLink: { text: string; to?: string };
  bgImage: string;
}
