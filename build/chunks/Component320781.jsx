/** Chunk was on 86642 **/
/** chunk id: 320781, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk456269 = require("./456269.js"),
  Chunk660189 = require("./660189.js"),
  Chunk257511 = require("./257511.jsx"),
  Chunk967128 = require("./967128.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk551869 = require("./551869.js");

function f(e) {
  var t;
  let {
    channel: n
  } = e, f = (0, o.eV)(n), {
    firstMessage: h
  } = (0, r.cj)([s.Z], () => s.Z.getMessage(n.id)), m = new Set((0, o.kn)(n, f)), g = null != (t = (0, a.KS)(n)) ? t : l.kBi;
  return (0, i.jsxs)(u.ZP, {
    channelId: n.id,
    className: p.container,
    children: [(0, i.jsx)("div", {
      className: p.iconWrapper,
      children: (0, i.jsx)(g, {
        className: p.icon,
        strokeWidth: 1.75
      })
    }), (0, i.jsx)(u.Ot, {
      className: p.header,
      children: n.name
    }), null == h && (0, i.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: d.intl.string(d.t.mE3KJN)
    }), (0, i.jsx)(c.Z, {
      appliedTags: m,
      wrap: n.isModeratorReportChannel()
    })]
  })
}