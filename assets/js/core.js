$(document).ready(function(){ 
	$('body').fadeIn(1000);	
	
	$(".aboutUsClick").click(function() {
    $('html,body').animate({
        scrollTop: $(".divisionTwo").offset().top+10},
        'slow');
});
$(window).scroll( function() { 
 var scrolled_val = $(document).scrollTop().valueOf();
 if(scrolled_val > 602) {
 $(".divisionTwoContentMenu").css("display", "block");
}
else
{
$(".divisionTwoContentMenu").css("display", "none");
}
});
$(".homeClick").click(function() {
    $('html,body').animate({
        scrollTop: $(".divisionOne").offset().top},
        'slow');
});

$(".contactusClick").click(function() {
    $('html,body').animate({
        scrollTop: $(".divisionEight").offset().top},
        'slow');
});

$(".scrollerImageGif").click(function() {
    $('html,body').animate({
        scrollTop: $(".divisionTwo").offset().top+10},
        'slow');
});

$(".generalService").hover(
    function(e){ $(".generalServiceHr").css("display", "block");}, // over
    function(e){ $(".generalServiceHr").css("display", "none");}  // out
);

$(".minorRepair").hover(
    function(e){ $(".minorRepairHr").css("display", "block");}, // over
    function(e){ $(".minorRepairHr").css("display", "none");}  // out
);

$(".majorRepair").hover(
    function(e){ $(".majorRepairHr ").css("display", "block");}, // over
    function(e){ $(".majorRepairHr ").css("display", "none");}  // out
);
});

$(function() {

	$('.loginLink').click(function() {
	$('.profileLoggedIn').slideToggle('fast');
	return false;
	});
	});

	

$(document).ready(function(){ 
	var regexMinThree = /^[A-Za-z0-9_ ]{3,30}$/;
	var regexMinEight = /^[A-Za-z0-9_]{8,30}$/;
	var regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i 
	var regexPassword =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
	var regexMinTen = /^[0-9+]{10,14}$/;
	var regexMin = /^[A-Za-z0-9_. ,\:\;\(\)\[\]\{\}\"\'\-\+\*\/\=\&\%\$\#\@\!\~]{1,500}$/;

	$('.signUpForm input[name="firstNameSignUp"]').blur(function()
	{
	var firstNameSignUpValid=$(this).val();
	if (!regexMinThree.test(firstNameSignUpValid)) 
	{
		$(this).next().fadeIn().html("First name should contain minimum of 3 characters");
	}
	else
	{
		$(this).next().fadeOut();	
	}
	});
	
	$('.signUpForm input[name="lastNameSignUp"]').blur(function()
	{
	var lastNameSignUpValid=$(this).val();
	if (!regexMinThree.test(lastNameSignUpValid)) 
	{
		$(this).next().fadeIn().html("Last name should contain minimum of 3 characters");
	}
	else
	{
		$(this).next().fadeOut();	
	}
	});
	
	$('.signUpForm input[name="emailAdressSignUp"]').blur(function()
	{
	var emailAdressSignUpValid=$(this).val();
	if (!regexEmail.test(emailAdressSignUpValid)) 
	{
		$(this).next().fadeIn().html("Invalid Email Address");
	}
	else
	{
		$(this).next().fadeOut();	
	}
	});
	
	$('.signUpForm input[name="mobileSignUp"]').blur(function()
	{
	var mobileSignUpValid=$(this).val();
	if (!regexMinTen.test(mobileSignUpValid)) 
	{
		$(this).next().fadeIn().html("Invalid Mobile Number");
	}
	else
	{
		$(this).next().fadeOut();	
	}
	});
	
	$('.signUpForm input[name="passwordSignUp"]').blur(function()
	{
	var passwordSignUpValid=$(this).val();
	if (!regexMinEight.test(passwordSignUpValid)) 
	{
		$(this).next().fadeIn().html("Password Should contain minimum of 8 characters");
	}
	else
	{
		$(this).next().fadeOut();	
	}
	});
	
	$('.signUpForm input[name="repeatPasswordSignUp"]').blur(function()
	{
	var passwordSignUpValid = $.trim($('.passwordSignUp').val());
	var repeatPasswordSignUpValid=$(this).val();
	if (passwordSignUpValid != repeatPasswordSignUpValid) 
	{
		$(this).next().fadeIn().html("Passwords do not match");
	}
	else
	{
		$(this).next().fadeOut();	
	}
	});
	
	$('.secondStepFormform input[name="passwordStepTwo"]').blur(function()
	{
	var passwordStepTwoValid=$(this).val();
	if (!regexMinEight.test(passwordStepTwoValid)) 
	{
		$(this).next().fadeIn().html("Password Should contain minimum of 8 characters");
	}
	else
	{
		$(this).next().fadeOut();	
	}
	});
	
	$('.secondStepFormform input[name="repeatPasswordStepTwo"]').blur(function()
	{
	var passwordStepTwoValid = $.trim($('.passwordStepTwo').val());
	var repeatPasswordStepTwoValid=$(this).val();
	if (passwordStepTwoValid != repeatPasswordStepTwoValid) 
	{
		$(this).next().fadeIn().html("Passwords do not match");
	}
	else
	{
		$(this).next().fadeOut();	
	}
	});
	
	$('.secondStepFormform input[name="mobileStepTwo"]').blur(function()
	{
	var mobileStepTwoValid=$(this).val();
	if (!regexMinTen.test(mobileStepTwoValid)) 
	{
		$(this).next().fadeIn().html("Invalid Mobile Number");
	}
	else
	{
		$(this).next().fadeOut();	
	}
	});
	
	$('.passwordResetForm input[name="passwordResetPassword"]').blur(function()
	{
	var passwordResetPasswordValid=$(this).val();
	if (!regexMinEight.test(passwordResetPasswordValid)) 
	{
		$(this).next().fadeIn().html("Password Should contain minimum of 8 characters");
	}
	else
	{
		$(this).next().fadeOut();	
	}
	});
	
	$('.passwordResetForm input[name="repeatResetPassword"]').blur(function()
	{
	var passwordResetPasswordValid = $.trim($('.passwordResetPassword').val());
	var repeatResetPasswordValid=$(this).val();
	if (passwordResetPasswordValid != repeatResetPasswordValid) 
	{
		$(this).next().fadeIn().html("Passwords do not match");
	}
	else
	{
		$(this).next().fadeOut();	
	}
	});
	
	$('.userChangePasswordForm input[name="changePasswordNew"]').blur(function()
	{
	var passwordResetPasswordValid=$(this).val();
	if (!regexMinEight.test(passwordResetPasswordValid)) 
	{
		$(this).next().fadeIn().html("Password Should contain minimum of 8 characters");
	}
	else
	{
		$(this).next().fadeOut();	
	}
	});
	
	$('.userChangePasswordForm input[name="changePasswordNewRepeat"]').blur(function()
	{
	var changePasswordNewValid = $.trim($('.changePasswordNew').val());
	var changePasswordNewRepeatValid=$(this).val();
	if (changePasswordNewValid != changePasswordNewRepeatValid) 
	{
		$(this).next().fadeIn().html("Passwords do not match");
	}
	else
	{
		$(this).next().fadeOut();	
	}
	});
});

(function (jQuery) {
    jQuery.oauthpopup = function (options) {
        options.windowName = options.windowName || 'ConnectWithOAuth';
        options.windowOptions = options.windowOptions || 'location=0,status=0,width='+options.width+',height='+options.height+',scrollbars=1';
        options.callback = options.callback || function () {
            window.location.reload();
        };
        var that = this;
        that._oauthWindow = window.open(options.path, options.windowName, options.windowOptions);
        that._oauthInterval = window.setInterval(function () {
            if (that._oauthWindow.closed) {
                window.clearInterval(that._oauthInterval);
                options.callback();
            }
        }, 1000);
    };
})(jQuery);   

function userRegister() {
	$('.ehMainAjaxResult').slideUp('fast');
	var regexMinThree = /^[A-Za-z0-9_ ]{3,30}$/;
	var regexMinEight = /^[A-Za-z0-9_]{8,30}$/;
	var regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i 
	var regexPassword =  /^[A-Za-z0-9!@#$%^&*()_]{8,20}$/;
	var regexMinTen = /^[0-9+]{10,14}$/;
	var regexMin = /^[A-Za-z0-9_. ,\:\;\(\)\[\]\{\}\"\'\-\+\*\/\=\&\%\$\#\@\!\~]{1,500}$/;
	var firstNameSignUp = $.trim($('.firstNameSignUp').val());
	var lastNameSignUp = $.trim($('.lastNameSignUp').val());
	var emailAdressSignUp = $.trim($('.emailAdressSignUp').val());
	var mobileSignUp = $.trim($('.mobileSignUp').val());
	var passwordSignUp = $.trim($('.passwordSignUp').val());
	var repeatPasswordSignUp = $.trim($('.repeatPasswordSignUp').val());

	if(regexMinThree.test(firstNameSignUp) && regexMinThree.test(lastNameSignUp) && regexEmail.test(emailAdressSignUp) && regexMinEight.test(passwordSignUp) && regexMinTen.test(mobileSignUp) && passwordSignUp == repeatPasswordSignUp)
	{
	$.ajax({
		type: "POST",
		url: mivo_zone()+"?mivoOne=userRegistration",
		data: "firstNameSignUp="+firstNameSignUp+"&lastNameSignUp="+lastNameSignUp+"&emailAdressSignUp="+emailAdressSignUp+"&passwordSignUp="+passwordSignUp+"&mobileSignUp="+mobileSignUp, 
		cache: false,
		beforeSend: function() {
			$('.mivoAjaxResult').slideUp('fast').attr('style', 'display: none !important');
			$('.mivoAjaxLoading').fadeIn('fast');
			},
		success: function(html) {
				$('.mivoAjaxLoading').fadeOut('fast');
				$('.mivoAjaxResult').html(html).fadeIn('fast').attr('style', 'display: inline-table !important');
				$('.mivoAjaxResult').delay(5000).fadeOut('fast').queue(function(next) { $(this).attr('style', 'display: none !important'); next(); });
		}
	});
	}
	else
	{
		$('.mivoAjaxLoading').fadeOut('fast');
		$('.mivoAjaxResult').html('Please fill all the details properly').fadeIn('fast').attr('style', 'display: inline-table !important');
		$('.mivoAjaxResult').delay(5000).fadeOut('fast').queue(function(next) { $(this).attr('style', 'display: none !important'); next(); });
	}
}

function userLogout() {
	$.ajax({
		type: "POST",
		url: mivo_zone()+"?mivoOne=userLogout",
		cache: false,
		beforeSend: function() {
			$('.mivoAjaxLoading').fadeIn('fast');
			},
		success: function(html) {
				$('.mivoAjaxLoading').fadeOut('fast');
				$('.mivoAjaxResult').html(html).fadeIn('fast').attr('style', 'display: inline-table !important');
				$('.mivoAjaxResult').delay(5000).fadeOut('fast').queue(function(next) { $(this).attr('style', 'display: none !important'); next(); });
		}
	});
}

function userRegisterEmailCheck() {
	$('.mivoAjaxResult').fadeOut('fast').attr('style', 'display: none !important');
	var emailAdressSignUp = $.trim($('.emailAdressSignUp').val());
	var regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	if(regexEmail.test(emailAdressSignUp))
	{
	$.ajax({
		type: "POST",
		url: mivo_zone()+"?mivoOne=userRegistrationEmailCheck",
		data: "emailAdressSignUp="+emailAdressSignUp, 
		cache: false,
		beforeSend: function() {
			$('.mivoAjaxLoading').fadeIn('fast');
			},
		success: function(html) {
				$('.mivoAjaxLoading').fadeOut('fast');
				$('.mivoAjaxResult').html(html).fadeIn('fast').attr('style', 'display: inline-table !important');
				$('.mivoAjaxResult').delay(5000).fadeOut('fast').queue(function(next) { $(this).attr('style', 'display: none !important'); next(); });
		}
	});
	}
}

function userRegisterMobileCheck() {
	$('.mivoAjaxResult').fadeOut('fast').attr('style', 'display: none !important');
	var mobileSignUp = $.trim($('.mobileSignUp').val());
	var regexMinTen = /^[0-9+]{10,14}$/;
	if(regexMinTen.test(mobileSignUp))
	{
	$.ajax({
		type: "POST",
		url: mivo_zone()+"?mivoOne=userRegistrationMobileCheck",
		data: "mobileSignUp="+mobileSignUp, 
		cache: false,
		beforeSend: function() {
			$('.mivoAjaxLoading').fadeIn('fast');
			},
		success: function(html) {
				$('.mivoAjaxLoading').fadeOut('fast');
				$('.mivoAjaxResult').html(html).fadeIn('fast').attr('style', 'display: inline-table !important');
				$('.mivoAjaxResult').delay(5000).fadeOut('fast').queue(function(next) { $(this).attr('style', 'display: none !important'); next(); });
		}
	});
	}
}

function userRegisterMobileCheckSecondStep() {
	$('.mivoAjaxResult').fadeOut('fast').attr('style', 'display: none !important');
	var mobileStepTwo = $.trim($('.mobileStepTwo').val());
	var regexMinTen = /^[0-9+]{10,14}$/;
	if(regexMinTen.test(mobileStepTwo))
	{
	$.ajax({
		type: "POST",
		url: mivo_zone()+"?mivoOne=userRegistrationMobileCheck",
		data: "mobileSignUp="+mobileStepTwo, 
		cache: false,
		beforeSend: function() {
			$('.mivoAjaxLoading').fadeIn('fast');
			},
		success: function(html) {
				$('.mivoAjaxLoading').fadeOut('fast');
				$('.mivoAjaxResult').html(html).fadeIn('fast').attr('style', 'display: inline-table !important');
				$('.mivoAjaxResult').delay(5000).fadeOut('fast').queue(function(next) { $(this).attr('style', 'display: none !important'); next(); });
		}
	});
	}
}

function userRegisterSecondStep() {
	$('.mivoAjaxResult').fadeOut('fast').attr('style', 'display: none !important');
	var regexPassword =  /^[A-Za-z0-9!@#$%^&*()_]{8,20}$/;
	var regexMinTen = /^[0-9+]{10,14}$/;
	var passwordStepTwo = $.trim($('.passwordStepTwo').val());
	var repeatPasswordStepTwo = $.trim($('.repeatPasswordStepTwo').val());
	var mobileStepTwo = $.trim($('.mobileStepTwo').val());

	if(regexMinTen.test(mobileStepTwo) && regexPassword.test(passwordStepTwo) && passwordStepTwo == repeatPasswordStepTwo)
	{
	$.ajax({
		type: "POST",
		url: mivo_zone()+"?mivoOne=userRegistrationSecondStep",
		data: "passwordStepTwo="+passwordStepTwo+"&mobileStepTwo="+mobileStepTwo, 
		cache: false,
		beforeSend: function() {
			$('.mivoAjaxResult').fadeOut('fast').attr('style', 'display: none !important');
			$('.mivoAjaxLoading').fadeIn('fast');
			},
		success: function(html) {
				$('.mivoAjaxLoading').fadeOut('fast');
				$('.mivoAjaxResult').html(html).fadeIn('fast').attr('style', 'display: inline-table !important');
				$('.mivoAjaxResult').delay(5000).fadeOut('fast').queue(function(next) { $(this).attr('style', 'display: none !important'); next(); });
		}
	});
	}
	else
	{
		$('.mivoAjaxLoading').fadeOut('fast');
		$('.mivoAjaxResult').html('Please fill all the details correctly').fadeIn('fast').attr('style', 'display: inline-table !important');
		$('.mivoAjaxResult').delay(5000).fadeOut('fast').queue(function(next) { $(this).attr('style', 'display: none !important'); next(); });
	}
}

function userMobileVerificationCodeResend(userMobile) {
	$('.mivoAjaxResult').fadeOut('fast').attr('style', 'display: none !important');
	$.ajax({
		type: "POST",
		url: mivo_zone()+"?mivoOne=userMobileVerificationCodeResend",
		data: "userMobile="+userMobile, 
		cache: false,
		beforeSend: function() {
			$('.mivoAjaxResult').fadeOut('fast').attr('style', 'display: none !important');
			$('.mivoAjaxLoading').fadeIn('fast');
			},
		success: function(html) {
				$('.mivoAjaxLoading').fadeOut('fast');
				$('.mivoAjaxResult').html(html).fadeIn('fast').attr('style', 'display: inline-table !important');
				$('.mivoAjaxResult').delay(5000).fadeOut('fast').queue(function(next) { $(this).attr('style', 'display: none !important'); next(); });
		}
	});
}

function userMobileVerificationCodeSubmit(userMobile) {
	$('.mivoAjaxResult').fadeOut('fast').attr('style', 'display: none !important');
	var userMobileVerificationCode = $.trim($('.mobileVerificationCode').val());
	if (userMobileVerificationCode == "")
	{
		$('.mivoAjaxLoading').fadeOut('fast');
		$('.mivoAjaxResult').html('Please enter verification code').fadeIn('fast').attr('style', 'display: inline-table !important');
		$('.mivoAjaxResult').delay(5000).fadeOut('fast').queue(function(next) { $(this).attr('style', 'display: none !important'); next(); });
	}
	else
	{
	$.ajax({
		type: "POST",
		url: mivo_zone()+"?mivoOne=userMobileVerificationCodeSubmit",
		data: "userMobile="+userMobile+"&userMobileVerificationCode="+userMobileVerificationCode, 
		cache: false,
		beforeSend: function() {
			$('.mivoAjaxResult').fadeOut('fast').attr('style', 'display: none !important');
			$('.mivoAjaxLoading').fadeIn('fast');
			},
		success: function(html) {
				$('.mivoAjaxLoading').fadeOut('fast');
				$('.mivoAjaxResult').html(html).fadeIn('fast').attr('style', 'display: inline-table !important');
				$('.mivoAjaxResult').delay(5000).fadeOut('fast').queue(function(next) { $(this).attr('style', 'display: none !important'); next(); 
				});
		}
	});
	}
}

function userLogin() {
	$('.mivoAjaxResult').fadeOut('fast').attr('style', 'display: none !important');
	var regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i 
	var regexPassword =  /^[A-Za-z0-9!@#$%^&*()_]{8,20}$/;
	var userEmailLogin = $.trim($('.emailAdressLogin').val());
	var userPasswordLogin = $.trim($('.passwordLogin').val());

	if(regexEmail.test(userEmailLogin) && regexPassword.test(userPasswordLogin))
	{
	$.ajax({
		type: "POST",
		url: mivo_zone()+"?mivoOne=userLogin",
		data: "userEmailLogin="+userEmailLogin+"&userPasswordLogin="+userPasswordLogin, 
		cache: false,
		beforeSend: function() {
			$('.mivoAjaxResult').fadeOut('fast').attr('style', 'display: none !important');
			$('.mivoAjaxLoading').fadeIn('fast');
			},
		success: function(html) {
				$('.mivoAjaxLoading').fadeOut('fast');
				$('.mivoAjaxResult').html(html).fadeIn('fast').attr('style', 'display: inline-table !important');
				$('.mivoAjaxResult').delay(5000).fadeOut('fast').queue(function(next) { $(this).attr('style', 'display: none !important'); next(); 
		});
		}
	});
	}
	else
	{
		$('.mivoAjaxLoading').fadeOut('fast');
		$('.mivoAjaxResult').html('Please fill all the details correctly').fadeIn('fast').attr('style', 'display: inline-table !important');
		$('.mivoAjaxResult').delay(5000).fadeOut('fast').queue(function(next) { $(this).attr('style', 'display: none !important'); next(); 
	});
    }
}

function userForgotPassword() {
	$('.mivoAjaxResult').fadeOut('fast').attr('style', 'display: none !important');
	var regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i 
	var userEmailLoginForgot = $.trim($('.forgotPasswordEmail').val());

	if(regexEmail.test(userEmailLoginForgot))
	{
	$.ajax({
		type: "POST",
		url: mivo_zone()+"?mivoOne=userForgotPassword",
		data: "userEmailLoginForgot="+userEmailLoginForgot, 
		cache: false,
		beforeSend: function() {
			$('.mivoAjaxResult').fadeOut('fast').attr('style', 'display: none !important');
			$('.mivoAjaxLoading').fadeIn('fast');
			},
		success: function(html) {
				$('.mivoAjaxLoading').fadeOut('fast');
				$('.mivoAjaxResult').html(html).fadeIn('fast').attr('style', 'display: inline-table !important');
				$('.mivoAjaxResult').delay(5000).fadeOut('fast').queue(function(next) { $(this).attr('style', 'display: none !important'); next(); 
		});
		}
	});
	}
	else
	{
		$('.mivoAjaxLoading').fadeOut('fast');
		$('.mivoAjaxResult').html('Invalid Email Address').fadeIn('fast').attr('style', 'display: inline-table !important');
		$('.mivoAjaxResult').delay(5000).fadeOut('fast').queue(function(next) { $(this).attr('style', 'display: none !important'); next(); 
	});
	}
}

function resetForgotPassword() {
	$('.mivoAjaxResult').fadeOut('fast').attr('style', 'display: none !important');
	var regexPassword =  /^[A-Za-z0-9!@#$%^&*()_]{8,20}$/;
	var userPasswordReset = $.trim($('.passwordResetPassword').val());
	var userPasswordResetRepeat = $.trim($('.repeatResetPassword').val());
	var userForgotPasswordValidationCode = $.trim($('.codeResetPassword').val());

	if(regexPassword.test(userPasswordReset) && userForgotPasswordValidationCode != "" && userPasswordReset == userPasswordResetRepeat)
	{
	$.ajax({
		type: "POST",
		url: mivo_zone()+"?mivoOne=resetForgotPassword",
		data: "userPasswordReset="+userPasswordReset+"&userForgotPasswordValidationCode="+userForgotPasswordValidationCode, 
		cache: false,
		beforeSend: function() {
			$('.mivoAjaxResult').fadeOut('fast').attr('style', 'display: none !important');
			$('.mivoAjaxLoading').fadeIn('fast');
			},
		success: function(html) {
				$('.mivoAjaxLoading').fadeOut('fast');
				$('.mivoAjaxResult').html(html).fadeIn('fast').attr('style', 'display: inline-table !important');
				$('.mivoAjaxResult').delay(5000).fadeOut('fast').queue(function(next) { $(this).attr('style', 'display: none !important'); next(); 
		});
		}
	});
	}
	else
	{
		$('.mivoAjaxLoading').fadeOut('fast');
		$('.mivoAjaxResult').html('Please enter your new password (Minimum 8 characters) or Validation Code properly.').fadeIn('fast').attr('style', 'display: inline-table !important');
		$('.mivoAjaxResult').delay(5000).fadeOut('fast').queue(function(next) { $(this).attr('style', 'display: none !important'); next(); 
	});
	}
}

function userChangePasswordUpdate() {
	var newPassword = $.trim($('.changePasswordNew').val());
	var newPasswordRepeat = $.trim($('.changePasswordNewRepeat').val());
	var oldPassword = $.trim($('.changePasswordOld').val());
	var regexMinEight = /^[A-Za-z0-9_]{8,20}$/;
	if(regexMinEight.test(newPassword))
	{
	if (newPassword == newPasswordRepeat)
	{
	$.ajax({
		type: "POST",
		url: mivo_zone()+"?mivoOne=userChangePasswordUpdate",
		data: "newPassword="+newPassword+"&oldPassword="+oldPassword, 
		cache: false,
		beforeSend: function() {
			$('.mivoAjaxResult').fadeOut('fast').attr('style', 'display: none !important');
			$('.mivoAjaxLoading').fadeIn('fast');
			},
		success: function(html) {
				$('.mivoAjaxLoading').fadeOut('fast');
				$('.mivoAjaxResult').html(html).fadeIn('fast').attr('style', 'display: inline-table !important');
				$('.mivoAjaxResult').delay(5000).fadeOut('fast').queue(function(next) { $(this).attr('style', 'display: none !important'); next(); 
		});
		}
	});	
	}
	else
	{	
		$('.mivoAjaxLoading').fadeOut('fast');
		$('.mivoAjaxResult').html('new password and repeated new password does not match').fadeIn('fast').attr('style', 'display: inline-table !important');
		$('.mivoAjaxResult').delay(5000).fadeOut('fast').queue(function(next) { $(this).attr('style', 'display: none !important'); next(); 
	});
	}
	}
	else
	{	
		$('.mivoAjaxLoading').fadeOut('fast');
		$('.mivoAjaxResult').html('all the password fields must contain minimum of 8 characters').fadeIn('fast').attr('style', 'display: inline-table !important');
		$('.mivoAjaxResult').delay(5000).fadeOut('fast').queue(function(next) { $(this).attr('style', 'display: none !important'); next(); 
	});
	}
}

function userProfileUpdate() {
	$('.mivoAjaxResult').fadeOut('fast').attr('style', 'display: none !important');
	var firstName = $.trim($('.bikeProfileUpdateFirstName').val());
	var lastName = $.trim($('.bikeProfileUpdateLastName').val());
	var address = $.trim($('.bikeProfileUpdateAddress').val());
	var pincode = $.trim($('.bikeProfileUpdatePincode').val());

	$.ajax({
		type: "POST",
		url: mivo_zone()+"?mivoOne=userProfileUpdate",
		data: "firstName="+firstName+"&lastName="+lastName+"&address="+address+"&pincode="+pincode, 
		cache: false,
		beforeSend: function() {
			$('.mivoAjaxResult').fadeOut('fast').attr('style', 'display: none !important');
			$('.mivoAjaxLoading').fadeIn('fast');
			},
		success: function(html) {
				$('.mivoAjaxLoading').fadeOut('fast');
				$('.mivoAjaxResult').html(html).fadeIn('fast').attr('style', 'display: inline-table !important');
				$('.mivoAjaxResult').delay(5000).fadeOut('fast').queue(function(next) { $(this).attr('style', 'display: none !important'); next(); 
	});
		}
	});
	
}

function userResendEmailVerification() {
	
	$.ajax({
		type: "POST",
		url: mivo_zone()+"?mivoOne=userResendEmailVerification",
		data: "hello=1", 
		cache: false,
		beforeSend: function() {
			$('.mivoAjaxResult').fadeOut('fast').attr('style', 'display: none !important');
			$('.mivoAjaxLoading').fadeIn('fast');
			},
		success: function(html) {
				$('.mivoAjaxLoading').fadeOut('fast');
				$('.mivoAjaxResult').html(html).fadeIn('fast').attr('style', 'display: inline-table !important');
				$('.mivoAjaxResult').delay(5000).fadeOut('fast').queue(function(next) { $(this).attr('style', 'display: none !important'); next(); 
	});
		}
	});	
}

function userServiceBooking() {
	$('.mivoAjaxResult').fadeOut('fast').attr('style', 'display: none !important');
	
	var regexMinThree = /^[A-Za-z0-9_ ]{3,30}$/;
	var regexMinEight = /^[A-Za-z0-9_]{8,30}$/;
	var regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i 
	var regexPassword =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
	var regexMinTen = /^[0-9+]{10,14}$/;
	var regexMin = /^[A-Za-z0-9_. ,\:\;\(\)\[\]\{\}\"\'\-\+\*\/\=\&\%\$\#\@\!\~]{1,500}$/;
	
	var selectBrand = $.trim($('.selectBrand').val());
	var selectBikeYear = $.trim($('.selectBikeYear').val());
	var bikeEngineNumber = $.trim($('.bikeEngineNumber').val());
	var bikeServiceId = $.trim($('.bikeServiceId').val());
	var serviceNeeded = $('input:radio[name=serviceNeeded]:checked').val();
	var bikeServicesRepairs = $.trim($('.bikeServicesRepairs').val());
	var describeTheProblem = $.trim($('.describeTheProblem').val());
	var bikeScheduleDate = $.trim($('.bikeScheduleDate').val());
	var bikeScheduleTime = $.trim($('.bikeScheduleTime').val());
	var bikeBookingName = $.trim($('.bikeBookingName').val());
	var bikeBookingAddress = $.trim($('.bikeBookingAddress').val());
	var bikeBookingPincode = $.trim($('.bikeBookingPincode').val());
	var bikeBookingMobile = $.trim($('.bikeBookingMobile').val());
	var bikeBookingEmail = $.trim($('.bikeBookingEmail').val());
	
	if(selectBrand == "")
	{
		$('#selectBrand').next().fadeIn().html("needed");
	}
	else
	{
		$('#selectBrand').next().fadeOut();	
	}
	
	if(selectBikeYear == "")
	{
		$('#selectBikeYear').next().fadeIn().html("needed");
	}
	else
	{
		$('#selectBikeYear').next().fadeOut();	
	}
	
	if(bikeScheduleDate == "")
	{
		$('#bikeScheduleDate').next().fadeIn().html("needed");
	}
	else
	{
		$('#bikeScheduleDate').next().fadeOut();	
	}
	
	if(bikeScheduleTime == "")
	{
		$('#bikeScheduleTime').next().fadeIn().html("needed");
	}
	else
	{
		$('#bikeScheduleTime').next().fadeOut();	
	}
	
	if(!regexMin.test(bikeBookingName))
	{
		$('#bikeBookingName').next().fadeIn().html("needed");
	}
	else
	{
		$('#bikeBookingName').next().fadeOut();	
	}
	
	if(!regexMin.test(bikeBookingAddress))
	{
		$('#bikeBookingAddress').next().fadeIn().html("needed");
	}
	else
	{
		$('#bikeBookingAddress').next().fadeOut();	
	}
	
	if(!regexMinTen.test(bikeBookingMobile))
	{
		$('#bikeBookingMobile').next().fadeIn().html("Invalid Mobile");
	}
	else
	{
		$('#bikeBookingMobile').next().fadeOut();	
	}
	
	if(!regexMin.test(bikeBookingPincode))
	{
		$('#bikeBookingPincode').next().fadeIn().html("needed");
	}
	else
	{
		$('#bikeBookingPincode').next().fadeOut();	
	}
	
	if(!regexEmail.test(bikeBookingEmail))
	{
		$('#bikeBookingEmail').next().fadeIn().html("Invalid Email");
	}
	else
	{
		$('#bikeBookingEmail').next().fadeOut();	
	}
    
	if(selectBrand != "" && selectBikeYear != "" && bikeScheduleDate != "" && bikeScheduleTime != "" && regexMin.test(bikeBookingName) && regexMin.test(bikeBookingAddress) && regexMinTen.test(bikeBookingMobile) && regexMin.test(bikeBookingPincode) && regexEmail.test(bikeBookingEmail))
	{
	$.ajax({
		type: "POST",
		url: mivo_zone()+"?mivoOne=userServiceBooking",
		data: "selectBrand="+selectBrand+"&selectBikeYear="+selectBikeYear+"&bikeEngineNumber="+bikeEngineNumber+"&bikeServiceId="+bikeServiceId+"&serviceNeeded="+serviceNeeded+"&bikeServicesRepairs="+bikeServicesRepairs+"&describeTheProblem="+describeTheProblem+"&bikeScheduleDate="+bikeScheduleDate+"&bikeScheduleTime="+bikeScheduleTime+"&bikeBookingName="+bikeBookingName+"&bikeBookingAddress="+bikeBookingAddress+"&bikeBookingPincode="+bikeBookingPincode+"&bikeBookingMobile="+bikeBookingMobile+"&bikeBookingEmail="+bikeBookingEmail, 
		cache: false,
		beforeSend: function() {
			$('.mivoAjaxResult').fadeOut('fast').attr('style', 'display: none !important');
			$('.mivoAjaxLoading').fadeIn('fast');
			},
		success: function(html) {
				$('.mivoAjaxLoading').fadeOut('fast');
				$('.mivoAjaxResult').html(html).fadeIn('fast').attr('style', 'display: inline-table !important');
				$('.mivoAjaxResult').delay(5000).fadeOut('fast').queue(function(next) { $(this).attr('style', 'display: none !important'); next(); 
	});
		}
	});
	}
	else
	{
		$('.mivoAjaxLoading').fadeOut('fast');
		$('.mivoAjaxResult').html('Please fill required details correctly').fadeIn('fast').attr('style', 'display: inline-table !important');
		$('.mivoAjaxResult').delay(5000).fadeOut('fast').queue(function(next) { $(this).attr('style', 'display: none !important'); next(); });
	}
	
}
