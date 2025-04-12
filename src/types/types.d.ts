type Author = {
  name: string;
  url?: string;
  institution?: string;
  notes?: string[];
}

type Link = {
  url: string;
  name: string;
  icon?: string;
}

type Note = {
  symbol: string;
  text: string;
}

type Course = {
  name: string;
  url: string;
}

export { Author, Link, Note, Course };