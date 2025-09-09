/** Chunk was on web.js **/
/** chunk id: 518596, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => p,
  Z: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk37234 = require("./37234.js"),
  Chunk313789 = require("./313789.js"),
  Chunk526665 = require("./526665.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function _(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = "USER_SETTINGS_MODAL_MODAL_KEY";

function h() {
  var e;
  let t = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk313789.n.ACCOUNT_PANEL,
    u = arguments.length > 1 ? arguments[1] : true;
  Chunk570140.Z.dispatch({
    type: "USER_SETTINGS_MODAL_OPEN",
    section: null != (e = null == u ? true : u.section) ? module : null,
    subsection: null == u ? true : u.subsection,
    openWithoutBackstack: false
  }), (0, Chunk526665.yP)("openUserSettings") ? (0, Chunk481060.ZDy)(async () => {
    let {
      default: e
    } = await require.e("47129").then(require.bind(require, 245286));
    return n => (0, r.jsx)(e, _(d({}, n), {
      target: t
    }))
  }, {
    modalKey: p,
    stackingBehavior: "replaceAll",
    stackNextByDefault: true
  }) : (0, Chunk37234.jN)(Chunk981631.S9g.USER_SETTINGS)
}