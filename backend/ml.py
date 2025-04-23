from transformers import pipeline

summarizer = pipeline(task="summarization", model="facebook/bart-large-cnn")

def SummarizeThisPlease(article):
  result = summarizer(article, max_length=350, min_length=120, do_sample=False)
  return result[0]["summary_text"]