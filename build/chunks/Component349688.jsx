/** Chunk was on web.js **/
/** chunk id: 349688, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S,
  L: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk837381 = require("./837381.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk608299 = require("./608299.js"),
  Chunk101555 = require("./101555.jsx"),
  Chunk203982 = require("./203982.js"),
  Chunk844992 = require("./844992.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk735314 = require("./735314.js");

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

function b(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = O(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
var v = function(e) {
  return e[e.SMALL = 0] = "SMALL", e[e.MEDIUM = 1] = "MEDIUM", e[e.CLIP = 2] = "CLIP", e[e.XXSMALL = 3] = "XXSMALL", e[e.XSMALL = 4] = "XSMALL", e
}({});

function A(e) {
  e.stopPropagation()
}

function I(e, t) {
  let {
    id: n,
    channelId: i,
    className: a,
    children: m,
    actions: E,
    handleEditModal: O,
    keyboardModeEnabled: v,
    onKeyDown: I,
    draftType: S,
    size: T = 1
  } = e, C = (0, o.rm)(n), {
    onFocus: N
  } = C, w = b(C, ["onFocus"]), {
    handleFocus: R,
    handleBlur: P
  } = (0, f.G)(N), D = 0 === T, x = null != E, L = e => {
    if (v) {
      switch (e.which) {
        case p.Ks6.D:
          e.preventDefault(), c.A.remove(i, n, S);
          return;
        case p.Ks6.E:
          null != O && (e.preventDefault(), O(e));
          return;
        case p.Ks6.BACKSPACE:
          e.ctrlKey ? (e.preventDefault(), c.A.clearAll(i, S)) : (e.preventDefault(), c.A.remove(i, n, S));
          return;
        case p.Ks6.ARROW_UP:
          let t = e.shiftKey || e.altKey || e.ctrlKey || e.metaKey;
          if (t) return;
          e.preventDefault(), d._.dispatchToLastSubscribed(p.jej.FOCUS_MESSAGES, {
            atEnd: true
          })
      }
      null == I || I(e)
    }
  };
  return (0, r.jsx)(l.vN3, {
    children: (0, r.jsx)("li", y(g({}, w), {
      onFocus: R,
      onBlur: P,
      onKeyDown: L,
      className: s()(h.Se, a, {
        [h.oi]: 2 === T
      }),
      ref: t,
      children: (0, r.jsxs)("div", {
        className: h.PO,
        children: [m, x ? (0, r.jsx)("div", {
          className: h.TC,
          children: (0, r.jsx)("div", {
            className: s()(h.KY, {
              [h.BN]: D
            }),
            onContextMenu: A,
            "aria-label": _.intl.string(_.t["8Lu3Du"]),
            children: (0, r.jsx)(u.Ay, {
              className: s()({
                [h.BX]: D
              }),
              children: E
            })
          })
        }) : null]
      })
    }))
  })
}
let S = Chunk64700.forwardRef(I)