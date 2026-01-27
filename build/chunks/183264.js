/** Chunk was on web.js **/
/** chunk id: 183264, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  q: () => l
});
var Chunk488430 = require("./488430.js");

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function a(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      i(e, t, n[t])
    })
  }
  return e
}

function o(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function s(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class l {
  static fromServer(e) {
    return new l(s(a({}, e), {
      assetDark: e.asset_dark,
      assetLight: e.asset_light,
      refTargetBackground: e.ref_target_background,
      badgeIcon: e.badge_icon,
      badgeText: e.badge_text
    }))
  }
  constructor(e) {
    i(this, "title", true), i(this, "body", true), i(this, "assetDark", true), i(this, "assetLight", true), i(this, "version", true), i(this, "refTargetBackground", true), i(this, "badgeIcon", true), i(this, "badgeText", true), this.type = r.G.COACHMARK, this.title = e.title, this.body = e.body, this.assetDark = e.assetDark, this.assetLight = e.assetLight, this.version = e.version, this.refTargetBackground = e.refTargetBackground, this.badgeIcon = e.badgeIcon, this.badgeText = e.badgeText
  }
}