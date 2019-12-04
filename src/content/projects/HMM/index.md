---
date: '2019-11'
title: 'baseline and Viterbi tagger for NER using HMM'
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
1. function to compute emission probability e(x|y)
2. baseline tagger implemented as y* = argmax e(x|y)
3. functions to generate trigrams and their corresponding log probability
4. using maximum likelihood estimates for transitions and emissions, implement the viterbi algorithm that computes argmax p(x1, ..., xn, y1, ..., yn)

_In Progress!_
