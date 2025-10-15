/** Chunk was on web.js **/
/** chunk id: 858042, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk272304 = require("./272304.js"),
  Chunk388032 = require("./388032.jsx");

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

function d(e) {
  let {
    applicationId: t,
    viewId: s,
    showOutdatedInfoOption: c = true
  } = e, d = (0, a.P6)("GameProfileModal");
  if (null == t) return null;
  let f = () => (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("46923").then(n.bind(n, 55396));
      return n => (0, r.jsx)(e, l({
        showOutdatedInfoOption: c,
        applicationId: t,
        viewId: s
      }, n))
    }),
    _ = () => (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("82077").then(n.bind(n, 953848));
      return n => (0, r.jsx)(e, u(l({}, n), {
        detectedActivity: {
          application_id: t,
          name: ""
        }
      }))
    });
  return (0, r.jsx)(i.sNh, {
    id: "game-profile-something-wrong",
    label: o.intl.string(o.t.qP2cXd),
    action: d ? _ : f
  })
}