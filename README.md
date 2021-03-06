jQuery Form Link
===============

jQuery plugin for binding form attributes to links

## Usage

1. Include jquery.formlink.js in your page
2. Use the `data-formlink` attribute to bind links to input fields
3. Use the `data-formlink-replacements` if you would like to replace som 
part of the input field in links target url.

As an alternative to step 2 and 3, you can use the following javascript
	
```JavaScript
$(target).formlink(replacements);
```

Target should be a jQuery selector for input elements and the optional
replacements parameter should be an dictionary used to replace parts
of the input name used when link is clicked.

### Example 1

The following code can be used if you want to auto-fill the username
field in a password recovery form when user clicks "Forgotten your password?".

```RHTML
<input id="LoginForm_username" name="LoginForm[username]" />
<a href="passwordRecovery.php" data-formlink="#LoginForm_username" data-replacements='{"LoginForm": "PasswordRecoveryForm"}'>Forgotten your password?</a>
```

When link is clicked, the following url is opened `passwordRecovery.php?PasswordRecoveryForm[username]=VALUE_FROM_USERNAME_FIELD`.

