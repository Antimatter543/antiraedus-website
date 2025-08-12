---
title: "Alzheimer’s Detection with Vision Transformer"
description: "Classifies ADNI brain MRI images into Alzheimer’s vs. healthy using a custom Vision Transformer (ViT) pipeline with augmentation and analytics."
image: "/images/projects/comp3710_2.gif"
imageAlt: "Vision Transformer diagram and brain MRI grid"
technologies: ["Python", "PyTorch", "NumPy", "Pandas", "scikit-learn", "ViT"]
hasWriteup: false
externalUrl: "https://github.com/shakes76/PatternAnalysis-2024/tree/topic-recognition/recognition/AlzheimerTransformer_s4753820"
githubUrl: "https://github.com/shakes76/PatternAnalysis-2024/tree/topic-recognition/recognition/AlzheimerTransformer_s4753820"
featured: true
status: "completed"
startDate: "2024-10-21"
category: "Computer Vision"
---

A Vision Transformer (ViT) pipeline for **Alzheimer’s disease detection** on ADNI MRI scans.  
Includes dataset loaders, aggressive augmentation, training/eval scripts, and plots.

## Highlights
- 🔬 **ViT from scratch**: patch embeddings, positional encodings, multi-head self-attention
- 🧪 **Reproducible experiments**: versioned runs, logs, and saved best models
- 🧭 **Augmentation & normalization** tuned for small-medical-image regimes
- 📊 **Reporting**: classification report, confusion matrix, and batch visualizations
- ✅ Best run reached ~**67.9%** test accuracy (v14)
