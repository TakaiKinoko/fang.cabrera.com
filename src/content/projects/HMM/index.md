---
date: '2019-11'
title: 'NER Tagger Based On HMM Implemented With Viterbi Algorithm'
image: ''
github: 'https://github.com/TakaiKinoko/Hidden-Markov-Model'
external: 'https://github.com/TakaiKinoko/Hidden-Markov-Model'
tech:
  - Python
  - HMM
  - NLP
show: 'true'
---

In this project, I explored the application of Hidden Markov Model on the task of name entity recognition. The project is structured into four parts:

1. (1) Function to compute emission probability e(x|y) 

1. (2) Baseline tagger implemented as y* = argmax e(x|y)

1. (3) Functions to generate trigrams and their corresponding log probability

1. (4) Using maximum likelihood estimates for transitions and emissions, implement the viterbi algorithm that computes argmax p(x1, ..., xn, y1, ..., yn)

_In Progress!_
