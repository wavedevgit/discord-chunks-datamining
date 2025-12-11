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
  Chunk55160 = require("./55160.js"),
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
  } = (0, Chunk565384.Xo)(e => ({
    debugTrackedData: e.debugTrackedData,
    impressions: e.impressions
  }), Chunk55160.X), n = (0, Chunk442837.e7)([Chunk857192.default], () => Chunk857192.default.isAnalyticsDebuggerEnabled), a = (0, Chunk442837.e7)([Chunk906467.Z], () => Chunk906467.Z.isDeveloper), [E, b] = Chunk473749.useState(false), y = null != module ? module : {}, {
    name: O
  } = y, v = g(y, ["name"]), S = null != O;
  return Chunk120356 && require ? (0, Chunk54381.jsx)(Chunk314910.ZP, {
    children: (0, Chunk54381.jsxs)("div", {
      className: o()(Chunk654414.container, {
        [Chunk654414.containerMinimized]: E,
        [Chunk654414.notTracked]: !S
      }),
      children: [(0, Chunk54381.jsx)(Chunk481060.P3F, {
        className: Chunk654414.minimizeButton,
        onClick: () => {
          b(!E)
        },
        children: E ? (0, Chunk54381.jsx)(Chunk835225.Z, {}) : (0, Chunk54381.jsx)(Chunk117795.Z, {})
      }), (0, Chunk54381.jsxs)("div", {
        className: o()(Chunk654414.content, {
          [Chunk654414.contentMinimized]: E
        }),
        children: [(0, Chunk54381.jsxs)(Chunk481060.Text, {
          className: o()(Chunk654414.label, {
            [Chunk654414.notTracked]: !S
          }),
          variant: "text-xxs/normal",
          children: [S ? (0, Chunk54381.jsx)(Chunk481060.owK, {
            size: "md",
            color: "currentColor",
            className: Chunk654414.iconTracked
          }) : (0, Chunk54381.jsx)(Chunk481060.k$p, {
            size: "md",
            color: "currentColor",
            className: Chunk654414.iconNotTracked
          }), null != O ? O : "(untracked)"]
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk654414.current,
          children: JSON.stringify(v, true, 2)
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          className: o()(Chunk654414.label, {
            [Chunk654414.notTracked]: !S
          }),
          variant: "text-xxs/normal",
          children: "impressions stack"
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk654414.stack,
          children: JSON.stringify(exports, true, 2)
        })]
      })]
    })
  }) : null
}