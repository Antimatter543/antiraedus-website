// Project utilities for handling projects using Astro content collections
import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

// Type alias for a project entry from the content collection
export type Project = CollectionEntry<'projects'>;

// Type for project status
export type ProjectStatus = 'completed' | 'in-progress' | 'planned';

/**
 * Get all projects from the content collection
 */
export async function getAllProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  
  // Sort by start date (newest first)
  return projects.sort((a: Project, b: Project) => 
    b.data.startDate.getTime() - a.data.startDate.getTime()
  );
}

/**
 * Get featured projects only
 */
export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getCollection('projects', ({ data }: { data: any }) => {
    return data.featured === true;
  });
  
  return projects.sort((a: Project, b: Project) => 
    b.data.startDate.getTime() - a.data.startDate.getTime()
  );
}

/**
 * Get a single project by slug
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    return await getEntry('projects', slug);
  } catch (error) {
    console.error(`Project not found: ${slug}`, error);
    return null;
  }
}

/**
 * Get projects by category
 */
export async function getProjectsByCategory(category: string): Promise<Project[]> {
  return await getCollection('projects', ({ data }: { data: any }) => {
    return data.category.toLowerCase() === category.toLowerCase();
  });
}

/**
 * Get all unique categories from projects
 */
export async function getProjectCategories(): Promise<string[]> {
  const projects = await getAllProjects();
  const categories = [...new Set(projects.map(project => project.data.category))];
  return categories.sort();
}

/**
 * Get all unique technologies from projects
 */
export async function getAllTechnologies(): Promise<string[]> {
  const projects = await getAllProjects();
  const technologies = [...new Set(projects.flatMap(project => project.data.technologies))];
  return technologies.sort();
}

/**
 * Format date for display
 */
export function formatProjectDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });
}

/**
 * Calculate project duration
 */
export function getProjectDuration(startDate: Date, endDate?: Date): string {
  const start = startDate;
  const end = endDate ? endDate : new Date();
  
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths = Math.ceil(diffDays / 30);
  
  if (diffMonths < 1) {
    return `${diffDays} days`;
  } else if (diffMonths === 1) {
    return '1 month';
  } else {
    return `${diffMonths} months`;
  }
}

/**
 * Get status badge class for styling
 */
export function getStatusBadgeClass(status: ProjectStatus): string {
  switch (status) {
    case 'completed':
      return 'status-completed';
    case 'in-progress':
      return 'status-in-progress';
    case 'planned':
      return 'status-planned';
    default:
      return 'status-default';
  }
}
