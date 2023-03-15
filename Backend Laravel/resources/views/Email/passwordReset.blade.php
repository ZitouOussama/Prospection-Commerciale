@component('mail::message')
# Change Password Request

Click the Button bellow to change password

@component('mail::button', ['url' => "http://localhost:4200/response-password?token=".$token->token])
Reset Password
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
