export interface ProjectDocument {
  name: string;
  type: string;
  size: string;
}

export interface ProjectMedia {
  video: string;
  images: string[];
  documents: ProjectDocument[];
}

export interface ProjectData {
  id: number;
  title: string;
  subtitle: string;
  duration: string;
  status: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  skills: string[];
  media: ProjectMedia;
  tags: string[];
  color: string;
}