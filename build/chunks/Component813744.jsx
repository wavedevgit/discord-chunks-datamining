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
  Chunk956266 = require("./956266.js");

function f() {
  var e;
  let t = (0, i.e7)([s.default], () => s.default.isIdleStatusIndicatorEnabled),
    n = (0, i.e7)([c.default], () => {
      var e, t;
      return null != (t = null == (e = c.default.getCurrentUser()) ? true : e.isStaff()) && t
    }),
    [f, p] = (0, i.Wu)([l.Z], () => [l.Z.isIdle(), l.Z.isAFK()]),
    _ = [];
  return f || p || _.push("ACTIVE"), f && _.push("IDLE"), p && _.push("AFK"), n && t ? (0, r.jsx)(o.ZP, {
    children: (0, r.jsxs)("div", {
      className: d.container,
      children: [(0, r.jsxs)("div", {
        className: d.status,
        children: [(0, r.jsx)(a.qbd, {
          status: _.includes("ACTIVE") ? u.Sk.ONLINE : u.Sk.IDLE,
          className: d.statusIndicator
        }), (0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          children: "IDLE STATUS:"
        }), (0, r.jsx)("div", {
          className: d.statusText,
          children: (0, r.jsx)(a.Text, {
            variant: "text-md/bold",
            children: _.join(" + ")
          })
        })]
      }), f && (0, r.jsxs)(a.Text, {
        variant: "text-md/normal",
        children: ["Idle since:", " ", new Date(null != (e = l.Z.getIdleSince()) ? e : 0).toLocaleDateString(true, {
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