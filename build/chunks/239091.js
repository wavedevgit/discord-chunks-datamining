/** Chunk was on web.js **/
/** chunk id: 239091, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Zy: () => d,
  jW: () => p,
  vq: () => f
}), require("./457542.js");
var Chunk570140 = require("./570140.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk358085 = require("./358085.js"),
  Chunk601993 = require("./601993.js"),
  Chunk981631 = require("./981631.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e) {
  r.Z.dispatch({
    type: "CONTEXT_MENU_OPEN",
    contextMenu: e
  })
}

function d(e) {
  {
    let {
      flushSync: t
    } = n(24156);
    t(() => {
      r.Z.wait(() => {
        r.Z.dispatch({
          type: "CONTEXT_MENU_CLOSE"
        }).finally(e)
      })
    })
  }
}

function f(e, t, n, r) {
  var l, d, f;
  if (e.stopPropagation(), null != e.currentTarget.contains && !e.currentTarget.contains(e.target)) return;
  let p = 0,
    _ = 0;
  if ("pageX" in e && (p = e.pageX, _ = e.pageY), 0 === p && 0 === _) {
    let t = null == (l = e.target) ? true : l.getBoundingClientRect(),
      {
        left: n = 0,
        top: r = 0,
        width: i = 0,
        height: a = 0
      } = null != t ? t : {};
    p = n + i / 2, _ = r + a / 2
  }
  let h = {
    render: t,
    renderLazy: r,
    target: null != (d = e.target) ? d : e.currentTarget,
    rect: new DOMRect(p, _, 0, 0),
    config: c({
      context: __OVERLAY__ ? s.IlC.OVERLAY : null != (f = (0, i.GB)()) ? f : s.IlC.APP
    }, n)
  };
  if ((null == n ? true : n.enableSpellCheck) && (0, a.isDesktop)()) {
    let e = () => {
        t(), u(h)
      },
      t = (0, o.RD)(e)
  } else e.preventDefault(), u(h)
}

function p(e, t, n) {
  f(e, true, n, t)
}