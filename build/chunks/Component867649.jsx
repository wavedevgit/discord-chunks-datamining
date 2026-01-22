/** Chunk was on web.js **/
/** chunk id: 867649, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk865116 = require("./865116.js"),
  Chunk750506 = require("./750506.jsx"),
  Chunk885576 = require("./885576.js"),
  Chunk287809 = require("./287809.js"),
  Chunk818348 = require("./818348.js"),
  Chunk987101 = require("./987101.js");

function f() {
  var e;
  let t = (0, i.bG)([s.Ay], () => s.Ay.get("idle_status_indicator")),
    n = (0, i.bG)([c.default], () => {
      var e, t;
      return null != (e = null == (t = c.default.getCurrentUser()) ? true : t.isStaff()) && e
    }),
    [f, p] = (0, i.yK)([l.A], () => [l.A.isIdle(), l.A.isAFK()]),
    _ = [];
  return f || p || _.push("ACTIVE"), f && _.push("IDLE"), p && _.push("AFK"), n && t ? (0, r.jsx)(o.Ay, {
    children: (0, r.jsxs)("div", {
      className: d.kL,
      children: [(0, r.jsxs)("div", {
        className: d.h5,
        children: [(0, r.jsx)(a.nW6, {
          status: _.includes("ACTIVE") ? u.cl.ONLINE : u.cl.IDLE,
          className: d.UX
        }), (0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          children: "IDLE STATUS:"
        }), (0, r.jsx)("div", {
          className: d.qS,
          children: (0, r.jsx)(a.Text, {
            variant: "text-md/bold",
            children: _.join(" + ")
          })
        })]
      }), f && (0, r.jsxs)(a.Text, {
        variant: "text-md/normal",
        children: ["Idle since:", " ", new Date(null != (e = l.A.getIdleSince()) ? e : 0).toLocaleDateString(true, {
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