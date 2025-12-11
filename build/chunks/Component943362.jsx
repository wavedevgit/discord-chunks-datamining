/** Chunk was on web.js **/
/** chunk id: 943362, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk782568 = require("./782568.js"),
  Chunk364640 = require("./364640.js"),
  Chunk124072 = require("./124072.jsx"),
  Chunk198620 = require("./198620.js"),
  Chunk746878 = require("./746878.js"),
  Chunk981631 = require("./981631.js"),
  Chunk115926 = require("./115926.js"),
  Chunk396831 = require("./396831.js");

function h(e, t, n) {
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
      h(e, t, n[t])
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

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  return {
    react(t, i, h) {
      let E = h.noStyleAndInteraction ? true : async n => {
        let r = await (0, d.B_)(t.attachmentUrl);
        e.shouldStopPropagation && (null == n || n.stopPropagation()), c.Z.trackLinkClicked(r), e.shouldCloseDefaultModals && (0, o.pTH)(), (0, l.Z)(r)
      }, y = h.noStyleAndInteraction ? p.dG4 : e => {
        (0, s.jW)(e, async () => {
          let {
            default: e
          } = await n.e("98466").then(n.bind(n, 151578));
          return n => (0, r.jsx)(e, b(g({}, n), {
            attachmentUrl: t.attachmentUrl,
            attachmentName: t.attachmentName
          }))
        })
      };
      return (0, r.jsxs)(u.Z, {
        role: "link",
        href: t.attachmentUrl,
        onClick: E,
        onContextMenu: y,
        className: "attachmentLink",
        children: [(0, r.jsx)(o.Ujz, {
          size: "xs",
          className: a()(m.icon, _.icon),
          color: "currentColor"
        }), (0, f.S)(t, i, h)]
      }, h.key)
    }
  }
}