from fastapi import APIRouter, HTTPException
from models.user_model import ResetPasswordRequest
from fastapi import FastAPI, Query, HTTPException
from fastapi.responses import RedirectResponse
import httpx
from services.auth_service import send_password_reset_email
import os
from utils.supabase_client import supabase


router = APIRouter()

# @router.post("/auth/reset-password")
# def reset_password(request: ResetPasswordRequest):
#     try:
#         send_password_reset_email(request.email)
#         return {"message": "Password reset email sent"}
#     except ValueError as e:
#         raise HTTPException(status_code=400, detail=str(e))

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_SERVICE_ROLE_KEY = os.getenv("SUPABASE_SERVICE_ROLE_KEY")

@router.get("/api/auth/confirm")
async def auth_confirm(
    token_hash: str = Query(...),
    type: str = Query(...),
    email: str = Query(...),
    redirectUrl: str = Query(...)
):
    if type != "email":
        raise HTTPException(status_code=400, detail="Invalid token type")

    resp = supabase.auth.verify_otp({
    "token_hash":token_hash,
    "type": "email"
})

    print(resp)  # Debugging line

    access_token = resp.session.access_token
    refresh_token = resp.session.refresh_token

    if not access_token:
        raise HTTPException(status_code=400, detail="Token verification failed")
        

    final_redirect = f"{redirectUrl}#access_token={access_token}&refresh_token={refresh_token}&type=recovery"

    return RedirectResponse(url=final_redirect)
