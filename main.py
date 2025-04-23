from fastapi import FastAPI
from pydantic import BaseModel
from ml import SummarizeThisPlease

app = FastAPI()
class RequestData(BaseModel):
  userInput: str

@app.post("/summarizethisplease")
def summarize(request: RequestData):
  summary = SummarizeThisPlease(request.userInput)
  return {"response": summary}