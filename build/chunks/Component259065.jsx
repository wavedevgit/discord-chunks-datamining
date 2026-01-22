/** Chunk was on web.js **/
/** chunk id: 259065, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function o(e, t, n) {
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
      o(e, t, n[t])
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
      guildId: o
    } = e;
    (0, i.mMO)(async () => {
      let {
        default: e
      } = await n.e("15682").then(n.bind(n, 619481));
      return n => (0, r.jsx)(e, u(l({}, n), {
        guildId: o,
        analyticsLocations: t
      }))
    }, {
      modalKey: d,
      onCloseRequest: () => {
        a.default.track(s.HAw.DISPLAY_NAME_STYLES_CLOSED), (0, i.OoC)(d)
      }
    })
  }