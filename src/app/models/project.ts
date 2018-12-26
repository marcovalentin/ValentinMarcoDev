export interface Project {
    title: string;
    description?: string;
    duration?: string;
    technologies?: string;
    principalPhoto: string;
    photos?: string[];
    links?: Links;
}

export interface Links {
    ios?: string;
    android?: string;
    web?: string;
}
