# I-02 — Instructor Sign In (Mobile OTP)

**Role:** Instructor  
**Category:** Auth  
**Trigger:** Existing instructor signs in with mobile OTP  
**API:** `POST /auth/otp/sign-in/mobile/create` → `POST /auth/otp/sign-in/mobile/verify`

---

## Step-by-Step Flow

**FRONTEND:**
- Step 1 — Login screen: enter registered mobile number
- Step 2 — `POST /auth/otp/sign-in/mobile/create { mobile, countryCode }`

**BACKEND:**
- Step 3 — `[API]` auth.controller.js → `sendSignInOtp()`
- Step 4 — `[DB]` Find User by mobile (multi-format: E.164, string, number)
- Step 5 — `[SVC]` Generate OTP; save to `User_Temp_Otp`
- Step 6 — `[Q]` OTP fast-queue → WhatsApp delivery

**FRONTEND:**
- Step 7 — Enter OTP → `POST /auth/otp/sign-in/mobile/verify { mobile, otp }`

**BACKEND:**
- Step 8 — `[API]` auth.controller.js → `verifySignInOtp()`
- Step 9 — `[DB]` Validate OTP + expiry; find User + SystemUser
- Step 10 — `[DB]` Update `UserSession { user_id, device_type, last_active }`
- Step 11 — `[SVC]` Generate JWT

**RETURN TO FRONTEND:**
- Step 12 — `200 { token, user, onboarding_status }`
- Step 13 — Store token → redirect to instructor dashboard

---

## Mermaid Diagram

```mermaid
sequenceDiagram
    participant FE as Frontend
    participant API as API/Controller
    participant SVC as Service Layer
    participant DB as MongoDB
    participant Q as Queue (Agenda)
    participant EXT as WhatsApp

    FE->>API: POST /auth/otp/sign-in/mobile/create {mobile, countryCode}
    API->>SVC: sendSignInOtp()
    SVC->>DB: Find User by mobile (E.164, string, number formats)
    DB-->>SVC: User found
    SVC->>DB: Save OTP to User_Temp_Otp
    DB-->>SVC: saved
    SVC->>Q: Push to OTP fast-queue
    Q->>EXT: Send OTP via WhatsApp
    EXT-->>FE: OTP delivered

    Note over FE: User enters OTP

    FE->>API: POST /auth/otp/sign-in/mobile/verify {mobile, otp}
    API->>SVC: verifySignInOtp()
    SVC->>DB: Validate OTP + expiry
    SVC->>DB: Find User + SystemUser
    DB-->>SVC: records found
    SVC->>DB: Update UserSession {device_type, last_active}
    DB-->>SVC: session updated
    SVC->>SVC: Generate JWT
    API-->>FE: 200 {token, user, onboarding_status}
    FE->>FE: Store token, redirect to dashboard
```
