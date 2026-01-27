/** Chunk was on web.js **/
/** chunk id: 67518, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
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

function l(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function c(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function u(e) {
  if (null == e) return null;
  let t = () => (0, i.mMO)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("27495"), n.e("79692")]).then(n.bind(n, 651930));
    return n => (0, r.jsx)(t, c(s({}, n), {
      detectedActivity: {
        application_id: e,
        name: ""
      }
    }))
  });
  return (0, r.jsx)(i.Drp, {
    id: "game-profile-something-wrong",
    label: a.intl.string(a.t.qP2cXd),
    action: t
  })
}