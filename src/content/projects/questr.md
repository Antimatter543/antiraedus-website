---
title: "Questr - RPG Task Management"
description: "A web application that gamifies productivity by transforming daily tasks into an RPG adventure with XP, levels, streaks, and friend leaderboards. Built with a microservices architecture on AWS, React, FastAPI and PostgreSQL. "
image: "/images/projects/questr.png"
imageAlt: "Questr web application interface showing task management with RPG elements"
technologies: ["React", "Python", "FastAPI", "PostgreSQL", "AWS", "Docker", "Terraform", "AWS Cognito"]
hasWriteup: false
externalUrl: "https://github.com/CSSE6400/2025_P2_Questr"
liveUrl: "https://questr.g11.csse6400.xyz"
githubUrl: "https://github.com/CSSE6400/2025_P2_Questr"
featured: true
status: "completed"
startDate: "2025-04-01"
endDate: "2025-05-01"
category: "Full-Stack Scalable Web Application"
---

Questr transforms mundane daily tasks into an engaging RPG adventure, motivating users to be productive and consistent. Built with a microservices architecture on AWS, the application features a React frontend communicating with a Python FastAPI backend, PostgreSQL database, and AWS Cognito authentication, all orchestrated through containerized ECS services with auto-scaling capabilities.

## Architecture Components

- **Frontend Layer**: React SPA with responsive UI and real-time state management
- **API Gateway**: FastAPI backend providing RESTful endpoints and business logic
- **Database Layer**: PostgreSQL with optimized queries for user data and leaderboards  
- **Authentication Service**: AWS Cognito handling secure user registration and JWT tokens
- **Container Orchestration**: Docker containers deployed via AWS ECS with auto-scaling groups
- **Load Balancing**: Application Load Balancer distributing traffic across multiple instances
- **Infrastructure as Code**: Complete Terraform configuration for reproducible deployments

## Key Features

- **User Authentication**: Secure login and registration system using AWS Cognito
- **Task Management**: Create and manage tasks with difficulty selection affecting XP rewards
- **RPG Progression**: Earn XP and level up by completing tasks consistently
- **Streak Tracking**: Monitor consecutive days of task completion
- **Social Features**: Send friend requests, compete on leaderboards, and stay motivated together
- **Scalable Deployment**: Auto-scaling infrastructure handling variable user loads

## Development Practices

- **Testing Strategy**: Unit tests with pytest, E2E testing with Cypress, load testing with K6
- **CI/CD Pipeline**: Automated deployment scripts with infrastructure provisioning
- **Monitoring**: CloudWatch integration for application and infrastructure metrics
- **Security**: JWT-based authentication, encrypted data transmission, and VPC isolation