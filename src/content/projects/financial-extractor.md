---
title: "Financial Statement Analysis Pipeline"
description: "Automated financial statement extraction and analysis using GenAI. Processes financial PDFs, extracts key data, and generates structured reports with AI-powered insights."
image: "/images/projects/financial-extractor-diagram.svg"
imageAlt: "Financial extraction pipeline workflow diagram showing PDF processing through GenAI to structured outputs"
technologies: ["Python", "GenAI", "Gemini API", "PDF Processing", "Data Analysis", "Automation"]
githubUrl: "https://github.com/Antimatter543/Financial_Extractor"
featured: true
status: "completed"
startDate: "2024-01-01"
endDate: "2024-03-01"
category: "Data Analysis"
---

# Financial Document Analysis with GenAI

## 1. Introduction

Financial data extraction is a critical task in banking and finance, where accurate and structured information is needed for decision-making. This project focuses on automating the extraction of financial metrics from PDF documents using GenAI, allowing for structured tabular outputs and high-level financial summaries.

## 2. Objective

The goal of this project is to:

- Extract key financial metrics (Revenue, Expenses, Net Income, etc.) from structured PDF financial reports
- Process and store the extracted information in structured CSV formats (under `/data`)
- Generate an AI-powered financial summary report that provides insights into the company's financial health

## 3. Methodology & Thought Process

Given the context of the problem, I placed these ideals as important:

- We REALLY want to keep the right figures, so potentially trying lower end models for this, while it can be accurate a fair amount of the time, likely does not counteract the risk of it eventually hallucinating
- Not all LLMs are equal

### 3.1 Extracting Text & Preprocessing Data

**Thought Process:**
I had initially done some basic research into whether this task had been solved before, and whether OCR tools, a PDF text extractor, or an LLM would be the best solution at hand (considering the accuracy points etc.).

After some reading I came across various OCR tools (AWS textract, marker) for extracting financial data from PDFs, and the open source gmft library had good reviews. However, whilst GMFT has great metrics, with this PDF type it performed very poorly.

**Final Approach:**
- **PDF Parsing**: Extract raw text using pdfplumber. Whilst noticeably slower than pypdf2, it had fewer missing characters, making it a better tradeoff when accuracy is important
- **Cleaning**: Removed headers, footers, and page numbers to ensure clean data (and less tokens for LLMs to consume)
- **Segmentation**: Used regex-based splitting to break down the document into individual financial statements
- **Validation**: Validate all CSVs are using floats (numbers, not random 'O's instead of zeros), and manually checking between CSV and PDF for any issues/inaccuracies

### 3.2 Financial Data Extraction Using GenAI

**Thought Process:**
Manual Parsing vs. AI-Based Extraction: I initially experimented with writing custom regex and heuristics to extract structured data from tables. However, the variation in formatting made this approach unsatisfactory.

**Selecting The Correct GenAI Model:**
- **Local Models**: Initially tried DeepSeek-R1 (1.5B) running on ollama serve, but it performed poorly with repeated values and hallucinations
- **Online APIs**: Switched to Gemini 2.0 Flash API because of:
  - Free-tier availability
  - Large context window (1M tokens)
  - Better complexity threshold with minimal hallucinations

**Final Approach:**
- Sent each segmented table to Gemini with a structured prompt
- Extracted structured JSON with table_name and csv_data
- Saved CSV files for downstream processing

### 3.3 Generating the Summary Report

**Final Approach:**
- Read extracted CSVs from previous step
- Sent them to Gemini 2.0 to generate a markdown-based financial summary
- Converted the markdown summary into a well-structured PDF report using markdownpdf

### 3.4 Considering Scale

**For scaling preprocessing:** Currently use a mix of manual table names with regex patterns, but in more varied datasets we may need NLP-based methods (like spacy).

**Retrieval-Augmented Generation (RAG):** To improve reliability and efficiency at scale, implementing a RAG-based system offers:
- Pre-processed Database: Storing extracted financial data eliminates repeated PDF processing
- Contextual Retrieval: Enables accurate responses by retrieving relevant document segments
- Efficient Processing: Handles large document collections

**Cloud Infrastructure Considerations:**
- AWS Lambda Functions: Automating PDF processing on upload
- Database Integration: Storing processed financial data for quick retrieval
- Scalable Processing Pipeline: Handling multiple documents concurrently

## 4. Challenges & Solutions

### 4.1 Extracting Tabular Data from PDFs
**Challenge:** Financial statements often contain complex tabular structures with multi-line headers.
**Solution:** Used regex-based pattern matching and structured parsing methods.

### 4.2 Handling Variations in Financial Statements
**Challenge:** Different companies use different formats for their financial reports.
**Solution:** Implemented flexible regex patterns and prompt engineering for structured AI extraction.

### 4.3 Ensuring Accuracy in AI-Extracted Data
**Challenge:** GenAI may hallucinate or misinterpret figures, particularly negative values.
**Solution:** Applied post-processing validation with explicit instructions to preserve negative signs and format numbers correctly.

## 5. Results

- **Extracted Financial Tables**: CSV files containing structured financial metrics
- **AI-Generated Summary**: PDF report summarizing revenue, expenses, and financial trends
- **Scalability Considerations**: Pipeline designed for future expansion into RAG-based system

## 6. Future Improvements

- **Enhance data validation** by integrating rule-based financial integrity checks
- **Explore Local AI Models**: Larger models (70B+) would be preferable for accuracy while maintaining privacy
- **Optimize Preprocessing**: NLP-based classification could improve robustness across varied datasets
- **Leverage Large database data science tools** (DuckDB, Tableau, etc.)

## 7. Conclusion

This project successfully demonstrates how AI can be leveraged for financial data extraction and analysis. By automating the pipeline, we improve efficiency and accuracy in handling large-scale financial documents. Considerations for future scalability, including cloud-based deployment and retrieval-augmented generation (RAG), offer opportunities to make financial data extraction even more robust and dynamic.