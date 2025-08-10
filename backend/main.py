from fastapi import FastAPI
from controllers import auth_controller

app = FastAPI()

# Register routes
app.include_router(auth_controller.router)

@app.get("/")
def health_check():
    return {"status": "ok"}
