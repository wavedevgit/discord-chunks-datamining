/** Chunk was on web.js **/
/** chunk id: 754495, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => f,
  s: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk20805 = require("./20805.js"),
  Chunk287809 = require("./287809.js"),
  Chunk301736 = require("./301736.js"),
  Chunk985018 = require("./985018.jsx");

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

function f(e) {
  return (0, s.zD)(e) ? c.intl.string(c.t["4f8iut"]) : (0, s.Lf)(e) ? c.intl.string(c.t.yX2hNy) : (0, s.fe)(e) ? c.intl.string(c.t.oSs8eg) : c.intl.string(c.t.bK9GT1)
}

function p(e) {
  let {
    user: t,
    entry: c,
    display: u,
    onAction: p
  } = e, _ = (0, l.A)(), h = (0, i.bG)([o.default], () => o.default.getCurrentUser());
  if (t.id !== (null == h ? true : h.id) || "recent" !== u || !(0, s.$R)(c)) return null;
  let m = () => {
    (0, a.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("10117"), n.e("36946")]).then(n.bind(n, 839785));
      return n => (0, r.jsx)(e, d({
        entry: c,
        user: t,
        onAction: p,
        onOpenGameSettings: _
      }, n))
    })
  };
  return (0, r.jsx)(a.Drp, {
    id: "delete-entry-history",
    label: f(c),
    action: () => {
      null == p || p({
        action: "PRESS_DELETE_HISTORY_MENU_ITEM"
      }), m()
    },
    color: "danger"
  })
}