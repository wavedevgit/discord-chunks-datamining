/** Chunk was on web.js **/
/** chunk id: 383838, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  To: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk49800 = require("./49800.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk534542 = require("./534542.jsx"),
  Chunk512983 = require("./512983.jsx"),
  Chunk636094 = require("./636094.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = p(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
Chunk49800.Z.Types;
let h = "right";

function m(e) {
  let t, n, {
      type: i = o.Z.Types.DANGER,
      imageData: d,
      button: p,
      className: m,
      iconClassName: g,
      title: E,
      body: b,
      style: y,
      align: O = s.Z.Align.START
    } = e,
    v = s.Z.Direction.HORIZONTAL;
  if (null != d) {
    let {
      position: e
    } = d, n = _(d, ["position"]);
    t = (0, r.jsx)(s.Z.Child, {
      grow: 0,
      shrink: 0,
      children: (0, r.jsx)("img", f({
        alt: "",
        className: a()(u.icon, g)
      }, n))
    }), e === h && (v = s.Z.Direction.HORIZONTAL_REVERSE)
  } else null != p && (n = p);
  let I = true;
  return i === o.Z.Types.PRIMARY && (I = false), (0, r.jsx)(o.Z, {
    className: a()(u.formNotice, m),
    type: i,
    style: y,
    children: (0, r.jsxs)(s.Z, {
      direction: v,
      align: O,
      children: [t, (0, r.jsxs)(s.Z.Child, {
        children: [null != E && "" !== E ? (0, r.jsx)(c.v, {
          className: a()(u.formNoticeTitle, {
            [u.whiteText]: I
          }),
          children: E
        }) : null, (0, r.jsx)(l.R, {
          className: a()(u.formNoticeBody, {
            [u.whiteText]: I
          }),
          children: b
        }), n]
      })]
    })
  })
}
m.Types = Chunk49800.Z.Types