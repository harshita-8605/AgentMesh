from fastapi import FastAPI

app = FastAPI(
    title="AI Chief of Staff",
    description="Agentic AI system for autonomous task execution",
    version="1.0.0",
)


@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "service": "AI Chief of Staff"
    }


@app.get("/")
async def root():
    return {
        "message": "AI Chief of Staff API is running"
    }