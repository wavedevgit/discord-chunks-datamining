/** Chunk was on web.js **/
/** chunk id: 293260, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => m,
  CB: () => p,
  c0: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk317525 = require("./317525.js"),
  Chunk370480 = require("./370480.js"),
  Chunk985018 = require("./985018.jsx");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}

function d(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function f(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let p = "guild-connection-roles";

function _() {
  return {
    modalKey: p,
    contextKey: a.SYi,
    onCloseRequest: () => {
      (0, a.OoC)(p, a.SYi)
    }
  }
}

function h(e) {
  (0, a.mMO)(async () => {
    let {
      default: t
    } = await n.e("92837").then(n.bind(n, 480900));
    return n => (0, r.jsx)(t, f(u({}, n), {
      guildId: e
    }))
  }, _())
}

function m(e) {
  return (0, i.bG)([o.A], () => (0, s.N8)(o.A.getSortedRoles(e.id)), [e]) ? (0, r.jsx)(a.Drp, {
    id: "guild-connection-roles",
    label: l.intl.string(l.t.ghtnss),
    icon: a.qYV,
    leadingAccessory: {
      type: "icon",
      icon: a.qYV
    },
    action: () => h(e.id)
  }) : null
}