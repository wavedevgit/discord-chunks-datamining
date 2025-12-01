/** Chunk was on web.js **/
/** chunk id: 813744, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk857192 = require("./857192.js"),
  Chunk517100 = require("./517100.js"),
  Chunk594174 = require("./594174.js"),
  Chunk231338 = require("./231338.js"),
  Chunk954479 = require("./954479.js");

function f() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk857192.default], () => Chunk857192.default.isIdleStatusIndicatorEnabled),
    n = (0, Chunk442837.e7)([Chunk594174.default], () => {
      var e, t;
      return null != (t = null == (e = Chunk594174.default.getCurrentUser()) ? true : module.isStaff()) && exports
    }),
    [f, p] = (0, Chunk442837.Wu)([Chunk517100.Z], () => [Chunk517100.Z.isIdle(), Chunk517100.Z.isAFK()]),
    _ = [];
  return f || p || _.push("ACTIVE"), f && _.push("IDLE"), p && _.push("AFK"), require && exports ? (0, Chunk54381.jsx)(Chunk314910.ZP, {
    children: (0, Chunk54381.jsxs)("div", {
      className: Chunk954479.container,
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk954479.status,
        children: [(0, Chunk54381.jsx)(Chunk481060.qbd, {
          status: _.includes("ACTIVE") ? Chunk231338.Sk.ONLINE : Chunk231338.Sk.IDLE,
          className: Chunk954479.statusIndicator
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/normal",
          children: "IDLE STATUS:"
        }), (0, Chunk54381.jsx)("div", {
          className: Chunk954479.statusText,
          children: (0, Chunk54381.jsx)(Chunk481060.Text, {
            variant: "text-md/bold",
            children: _.join(" + ")
          })
        })]
      }), f && (0, Chunk54381.jsxs)(Chunk481060.Text, {
        variant: "text-md/normal",
        children: ["Idle since:", " ", new Date(null != (e = Chunk517100.Z.getIdleSince()) ? module : 0).toLocaleDateString(true, {
          year: "numeric",
          day: "numeric",
          month: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        })]
      })]
    })
  }) : null
}