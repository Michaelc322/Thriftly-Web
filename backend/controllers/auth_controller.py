from fastapi import APIRouter, HTTPException
from models.user_model import ResetPasswordRequest
from services.auth_service import send_password_reset_email

router = APIRouter()

# @router.post("/auth/reset-password")
# def reset_password(request: ResetPasswordRequest):
#     try:
#         send_password_reset_email(request.email)
#         return {"message": "Password reset email sent"}
#     except ValueError as e:
#         raise HTTPException(status_code=400, detail=str(e))
