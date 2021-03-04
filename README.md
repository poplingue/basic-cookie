# Basic-cookie

Tiny package to create, check and erase cookie in the browser. :cookie:

# Installation

```
yarn add @franca/basic-cookie
```

# Available methods

## getCookie
```
getCookie(name:String): <String || null>
```
  
## setCookie
```
eraseCookie(name:String)
```
  
## eraseCookie
```
setCookie(name: String, value: String, maxAge: number)
```

:warning: If cookie already exists, it is erased before creation

# Usage

```
import basicCookie from '@franca/basic-cookie';

basicCookie.setCookie('myCookie', 'isYummy', 2000);
```

# Publish

```
$ yarn build
$ yarn lint
$ yarn format

$ yarn login
$ yarn publish
```