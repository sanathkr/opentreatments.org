---
title: "Roadmap"
description: "The direction Connect is headed, its current objective and milestones."
icon: "🗺️"
order: 2
---
Roadmap defines the direction OpenTreatments Connect is headed towards. Objective defines a target we want to reach in a reasonable timeframe. Strategy defines how we plan to get there in plain language. Milestones and Tasks break down the Strategy into activities executed by an individual.

We refrain from using concrete dates as much as possible to facilitate the asynchronous style of working. Instead, we focus making clear and tangible forward progress every week.

## Objective

**📅 Target**: Q4 2022

Display the counts of diagnosed patients in a publicly accessible website by consuming data from three data sources in a privacy-preserving fashion.

## Strategy

- *Refine iteratively*: Start with small number of data sources that provide incomplete data and then refine iteratively to improve the numbers
- *Consistency outperforms speed*: Given the small team and small budget, the best way to deliver results is to consistently perform week-over-week instead of fast sprints towards a finish line.

## Milestones

### Milestones 1: First Data Export

*Data Provider 1* has agreed to share data with us. We will provide them with a software tool to anonymize and share data with us. We will use a simple Bloom filter solution (minimal privacy guarantees but maximizing utility) to implement the anonymization.

### Milestones 2: Analysis and Report of exported data

*Data Provider 1* will share anonymized data with OpenTreatments. We will use simple clustering techniques to deduplicate and generate counts. Process of executing the clustering should be fully automated.

### Milestones 3: Display processed statistics on a publicly accessible website

Display the calculated counts in a publicly accessible website, either under OpenTreatments domain or on Github directly. Process of generating the website must be fully automated.
