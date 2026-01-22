/** Chunk was on 97492 **/
/** chunk id: 393194, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk713654 = require("./713654.js"),
  Chunk435470 = require("./435470.js"),
  Chunk969043 = require("./969043.js"),
  Chunk576967 = require("./576967.jsx"),
  Chunk314307 = require("./314307.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk867384 = require("./867384.js");

function p(e) {
  var t;
  let {
    channel: n
  } = e, p = (0, s.kt)(n), {
    firstMessage: h
  } = (0, l.cf)([o.A], () => o.A.getMessage(n.id)), b = new Set((0, s.zt)(n, p)), g = null != (t = (0, a.gU)(n)) ? t : i.oyn;
  return (0, r.jsxs)(u.Ay, {
    channelId: n.id,
    className: f.kL,
    children: [(0, r.jsx)("div", {
      className: f.P0,
      children: (0, r.jsx)(g, {
        className: f.Kk,
        strokeWidth: 1.75
      })
    }), (0, r.jsx)(u.cr, {
      className: f.wx,
      children: n.name
    }), null == h && (0, r.jsx)(i.Text, {
      variant: "text-md/normal",
      color: "text-default",
      children: d.intl.string(d.t.mE3KJN)
    }), (0, r.jsx)(c.A, {
      appliedTags: b,
      wrap: n.isModeratorReportChannel()
    })]
  })
}