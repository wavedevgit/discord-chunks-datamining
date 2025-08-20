/** Chunk was on web.js **/
/** chunk id: 899457, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => o,
  a: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  a = function(e) {
    return e[e.UNENROLLED = 0] = "UNENROLLED", e[e.ENROLLED = 1] = "ENROLLED", e[e.COMPLETED_25 = 2] = "COMPLETED_25", e[e.COMPLETED_50 = 3] = "COMPLETED_50", e[e.COMPLETED_75 = 4] = "COMPLETED_75", e[e.COMPLETED_100 = 5] = "COMPLETED_100", e[e.CLAIMED = 6] = "CLAIMED", e
  }({});
let o = function(e) {
  let {
    onChange: t,
    value: n
  } = e;
  return (0, r.jsxs)(i.xJW, {
    children: [(0, r.jsx)(i.vwX, {
      tag: i.RB0.H5,
      children: "User State"
    }), (0, r.jsx)(i.R94, {
      children: (0, r.jsx)(i.PhF, {
        "aria-label": "User State",
        options: [{
          label: "Unenrolled",
          value: 0
        }, {
          label: "Enrolled",
          value: 1
        }, {
          label: "25% Complete",
          value: 2
        }, {
          label: "50% Complete",
          value: 3
        }, {
          label: "75% Complete",
          value: 4
        }, {
          label: "100% Complete",
          value: 5
        }, {
          label: "Claimed",
          value: 6
        }],
        isSelected: e => e === n,
        select: t,
        serialize: String
      })
    })]
  })
}