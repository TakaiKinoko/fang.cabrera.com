---
date: '2'
title: 'Quantifying the Relationship Between Occupancy and Performance On CUDA'
cover: './data.png'
github: 'https://github.com/TakaiKinoko/Quantifying-the-Relationship-Between-Occupancy-and-Performance-On-CUDA/blob/master/Report.pdf'
external: 'https://github.com/TakaiKinoko/Quantifying-the-Relationship-Between-Occupancy-and-Performance-On-CUDA/blob/master/Report.pdf'
tech:
  - CUDA
  - Nsight Compute
show: 'true'
---

Occupancy is an important metric on Streaming Multiprocessor utilization in CUDA. Low occupancy oftentimes results in poor performance, but it remains unclear if occupancy always correlates with performance positively.
This paper tries to quantify the relationship between occupancy and performance on a set of benchmark applications, utilizing NVIDIA’s Nsight Compute profiling tools. It’s the author’s hope that this analysis will lead to better kernel optimization.
