/** Chunk was on web.js **/
/** chunk id: 465430, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Nz: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk359778 = require("./359778.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk244367 = require("./244367.jsx"),
  Chunk742158 = require("./742158.jsx"),
  Chunk512240 = require("./512240.js");

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

function p(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = _(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
Chunk359778.Z.Types;
let h = "right";

function m(e) {
  let t, n, {
      type: i = o.Z.Types.DANGER,
      imageData: d,
      button: _,
      className: m,
      iconClassName: g,
      title: E,
      body: y,
      style: b,
      align: O = s.A.Align.START
    } = e,
    v = s.A.Direction.HORIZONTAL;
  if (null != d) {
    let {
      position: e
    } = d, n = p(d, ["position"]);
    t = (0, r.jsx)(s.A.Child, {
      grow: 0,
      shrink: 0,
      children: (0, r.jsx)("img", f({
        alt: "",
        className: a()(u.Kk, g)
      }, n))
    }), e === h && (v = s.A.Direction.HORIZONTAL_REVERSE)
  } else null != _ && (n = _);
  let A = true;
  return i === o.Z.Types.PRIMARY && (A = false), (0, r.jsx)(o.Z, {
    className: a()(u.RJ, m),
    type: i,
    style: b,
    children: (0, r.jsxs)(s.A, {
      direction: v,
      align: O,
      children: [t, (0, r.jsxs)(s.A.Child, {
        children: [null != E && "" !== E ? (0, r.jsx)(c.z, {
          "data-migration-pending": true,
          className: a()(u.$G, {
            [u.vV]: A
          }),
          children: E
        }) : null, (0, r.jsx)(l.a, {
          "data-migration-pending": true,
          className: a()(u.Vz, {
            [u.vV]: A
          }),
          children: y
        }), n]
      })]
    })
  })
}
m.Types = Chunk359778.Z.Types