---
title: Your GApps Script Keeps Giving You a CORS Error
date: 2020-09-06T15:51:45-06:00
author: Austin Fay
ytID:
description: Have you ever tried to build a simple Google Apps Script endpoint to trigger some action from a landing page, only to find out that it fails because of a CORS error? Read this to find out how to fix it.
series: []
draft: false
---

# The Problem

You're a web developer trying to implement the [Jamstack](https://jamstack.org/) in your new site. Inevitably though, you need at least one little piece of backend functionality in your site. Does that mean you change your whole website architecture? Does that mean you start paying for some cloud service for one measly little contact form? No!

Instead, you turn to something small, simple, and free: [Google Apps Script](https://developers.google.com/apps-script). With Google Apps Script, you write a simple POST endpoint for the contact form on your website that takes the user's contact info, saves it to a spreadsheet, and notifies you via email. You load up some dummy data in [Postman](https://www.postman.com/) to test your endpoint, and voila! It works just as you would expect it to.

In your excitement, you immediately turn back to the code of your website and hook up the endpoint to your beautifully written contact form. You enter in some more dummy information into the fields on your form and hit submit. It makes an AJAX request to your endpoint, and then... nothing. In confusion, you open up the inspector, only to find this error in the console:

![Screenshot of CORS error](/media/apps-script-gives-cors-error/cors-screenshot.png)

What seemed to be a quick and simple task has now turned into hours of debugging and banging your head against your keyboard.

It turns out, there's a simple solution to this problem. Read on and I'll tell you what it is.

# The Solution

Let's start with an example. The [official docs](https://developers.google.com/apps-script/guides/web) give this example:

```Javascript
function doGet(e) {
  var params = JSON.stringify(e);
  return HtmlService.createHtmlOutput(params);
}
```

We can deploy this function as an API endpoint by going to  `Publish > Deploy as web app...` **Make sure you configure who has access to the app to "Anyone, even anonymous".** If you don't, you'll continue getting the CORS error after the fix. Google gives us a URL for our new API endpoint which looks something like this:

```plaintext
https://script.google.com/macros/s/SOME_FUNCTION_ID/exec
```

We can copy and paste this URL into our browser. Doing so gives us this result:

```JSON
{"parameters":{},"contentLength":-1,"queryString":"","parameter":{},"contextPath":""}
```

This is good. This result means that the script successfully received our request and gave us some output.

Now let's try making an AJAX request with some javascript:

```Javascript
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      console.log(xhttp.responseText);
  }
};
xhttp.open("GET", "https://script.google.com/macros/s/SOME_FUNCTION_ID/exec", true);
xhttp.send();
```

Unsurprisingly, the console prints:

```plaintext
Access to XMLHttpRequest at 'https://script.google.com/macros/s/SOME_FUNCTION_ID/exec' from origin 'http://localhost:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

To fix this, replace the return statement in our Google Apps Script function:

```Javascript
function doGet(e) {
  var params = JSON.stringify(e);
  return ContentService.createTextOutput(params)
        .setMimeType(ContentService.MimeType.JSON);
}
```

Now it should work. It should no longer give you a CORS error.