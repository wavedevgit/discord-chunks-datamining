/** Chunk was on web.js **/
/** chunk id: 997954, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk975807 = require("./975807.js"),
  Chunk235393 = require("./235393.js"),
  Chunk332173 = require("./332173.jsx"),
  Chunk202803 = require("./202803.js"),
  Chunk365526 = require("./365526.js"),
  Chunk652215 = require("./652215.js"),
  Chunk446440 = require("./446440.js"),
  Chunk800344 = require("./800344.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b(e) {
  return {
    react(t, i, m) {
      let E = m.noStyleAndInteraction ? true : async n => {
        let r = await (0, d.AN)(t.attachmentUrl);
        e.shouldStopPropagation && (null == n || n.stopPropagation()), c.A.trackLinkClicked(r), e.shouldCloseDefaultModals && (0, o.s7G)(), (0, l.A)(r)
      }, b = m.noStyleAndInteraction ? p.tEg : e => {
        (0, s.L3)(e, async () => {
          let {
            default: e
          } = await n.e("62529").then(n.bind(n, 740024));
          return n => (0, r.jsx)(e, y(g({}, n), {
            attachmentUrl: t.attachmentUrl,
            attachmentName: t.attachmentName
          }))
        })
      };
      return (0, r.jsxs)(u.A, {
        role: "link",
        href: t.attachmentUrl,
        onClick: E,
        onContextMenu: b,
        className: "attachmentLink",
        children: [(0, r.jsx)(o.PtA, {
          size: "xs",
          className: a()(h.Kk, _.K),
          color: "currentColor"
        }), (0, f.t)(t, i, m)]
      }, m.key)
    }
  }
}