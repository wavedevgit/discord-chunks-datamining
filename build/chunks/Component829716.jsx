/** Chunk was on web.js **/
/** chunk id: 829716, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let d = "display-name-styles-modal",
  f = e => {
    let {
      analyticsLocations: t,
      guildId: s
    } = e;
    (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("47495").then(n.bind(n, 766950));
      return n => (0, r.jsx)(e, u(l({}, n), {
        guildId: s,
        analyticsLocations: t
      }))
    }, {
      modalKey: d,
      onCloseRequest: () => {
        a.default.track(o.rMx.DISPLAY_NAME_STYLES_CLOSED), (0, i.Mr3)(d)
      }
    })
  }