from utils.supabase_client import supabase

def send_password_reset_email(email: str) -> None:
    redirect_url = "https://yourwebsite.com/update-password"
    response = supabase.auth.reset_password_for_email(email, {
        "redirect_to": redirect_url
    })
    
    if hasattr(response, "error") and response.error:
        raise ValueError(response.error.message)