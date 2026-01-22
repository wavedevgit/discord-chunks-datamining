/** Chunk was on web.js **/
/** chunk id: 596155, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js"), require("./457529.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk942381 = require("./942381.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk865116 = require("./865116.js"),
  Chunk750506 = require("./750506.jsx"),
  Chunk540999 = require("./540999.js"),
  Chunk797820 = require("./797820.jsx"),
  Chunk803102 = require("./803102.jsx"),
  Chunk686757 = require("./686757.js"),
  Chunk857235 = require("./857235.js");

function g(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = E(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function b() {
  let {
    debugTrackedData: e,
    impressions: t
  } = (0, h.SD)(e => ({
    debugTrackedData: e.debugTrackedData,
    impressions: e.impressions
  }), o.x), n = (0, l.bG)([u.Ay], () => u.Ay.get("analytics_debugger")), a = (0, l.bG)([f.A], () => f.A.isDeveloper), [E, b] = i.useState(false), y = null != e ? e : {}, {
    name: O
  } = y, A = g(y, ["name"]), v = null != O;
  return a && n ? (0, r.jsx)(d.Ay, {
    children: (0, r.jsxs)("div", {
      className: s()(m.kL, {
        [m.YV]: E,
        [m.cn]: !v
      }),
      children: [(0, r.jsx)(c.DUT, {
        className: m.VI,
        onClick: () => {
          b(!E)
        },
        children: E ? (0, r.jsx)(p.A, {}) : (0, r.jsx)(_.A, {})
      }), (0, r.jsxs)("div", {
        className: s()(m.Qs, {
          [m.Cx]: E
        }),
        children: [(0, r.jsxs)(c.Text, {
          className: s()(m.Pf, {
            [m.cn]: !v
          }),
          variant: "text-xxs/normal",
          children: [v ? (0, r.jsx)(c.yr3, {
            size: "md",
            color: "currentColor",
            className: m.sG
          }) : (0, r.jsx)(c.aXh, {
            size: "md",
            color: "currentColor",
            className: m.jZ
          }), null != O ? O : "(untracked)"]
        }), (0, r.jsx)("div", {
          className: m.ss,
          children: JSON.stringify(A, true, 2)
        }), (0, r.jsx)(c.Text, {
          className: s()(m.Pf, {
            [m.cn]: !v
          }),
          variant: "text-xxs/normal",
          children: "impressions stack"
        }), (0, r.jsx)("div", {
          className: m.t$,
          children: JSON.stringify(t, true, 2)
        })]
      })]
    })
  }) : null
}