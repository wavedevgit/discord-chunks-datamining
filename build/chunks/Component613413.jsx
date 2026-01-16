/** Chunk was on web.js **/
/** chunk id: 613413, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./49124.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk782425 = require("./782425.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk906467 = require("./906467.js"),
  Chunk857192 = require("./857192.js"),
  Chunk835225 = require("./835225.jsx"),
  Chunk117795 = require("./117795.jsx"),
  Chunk565384 = require("./565384.js"),
  Chunk654414 = require("./654414.js");

function g(e, t) {
  if (null == e) return {};
  var n, r, i = E(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function b() {
  let {
    debugTrackedData: e,
    impressions: t
  } = (0, h.Xo)(e => ({
    debugTrackedData: e.debugTrackedData,
    impressions: e.impressions
  }), s.X), n = (0, l.e7)([f.default], () => f.default.isAnalyticsDebuggerEnabled), a = (0, l.e7)([d.Z], () => d.Z.isDeveloper), [E, b] = i.useState(false), y = null != e ? e : {}, {
    name: O
  } = y, v = g(y, ["name"]), S = null != O;
  return a && n ? (0, r.jsx)(u.ZP, {
    children: (0, r.jsxs)("div", {
      className: o()(m.container, {
        [m.containerMinimized]: E,
        [m.notTracked]: !S
      }),
      children: [(0, r.jsx)(c.P3F, {
        className: m.minimizeButton,
        onClick: () => {
          b(!E)
        },
        children: E ? (0, r.jsx)(p.Z, {}) : (0, r.jsx)(_.Z, {})
      }), (0, r.jsxs)("div", {
        className: o()(m.content, {
          [m.contentMinimized]: E
        }),
        children: [(0, r.jsxs)(c.Text, {
          className: o()(m.label, {
            [m.notTracked]: !S
          }),
          variant: "text-xxs/normal",
          children: [S ? (0, r.jsx)(c.owK, {
            size: "md",
            color: "currentColor",
            className: m.iconTracked
          }) : (0, r.jsx)(c.k$p, {
            size: "md",
            color: "currentColor",
            className: m.iconNotTracked
          }), null != O ? O : "(untracked)"]
        }), (0, r.jsx)("div", {
          className: m.current,
          children: JSON.stringify(v, true, 2)
        }), (0, r.jsx)(c.Text, {
          className: o()(m.label, {
            [m.notTracked]: !S
          }),
          variant: "text-xxs/normal",
          children: "impressions stack"
        }), (0, r.jsx)("div", {
          className: m.stack,
          children: JSON.stringify(t, true, 2)
        })]
      })]
    })
  }) : null
}