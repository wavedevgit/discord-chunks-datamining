/** Chunk was on web.js **/
/** chunk id: 320781, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk456269 = require("./456269.js"),
  Chunk660189 = require("./660189.js"),
  Chunk257511 = require("./257511.jsx"),
  Chunk967128 = require("./967128.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk25949 = require("./25949.js");

function _(e) {
  var t;
  let {
    channel: n
  } = e, _ = (0, s.eV)(n), {
    firstMessage: p
  } = (0, i.cj)([l.Z], () => l.Z.getMessage(n.id)), h = new Set((0, s.kn)(n, _)), m = null != (t = (0, a.KS)(n)) ? t : o.kBi;
  return (0, r.jsxs)(u.ZP, {
    channelId: n.id,
    className: f.container,
    children: [(0, r.jsx)("div", {
      className: f.iconWrapper,
      children: (0, r.jsx)(m, {
        className: f.icon,
        strokeWidth: 1.75
      })
    }), (0, r.jsx)(u.Ot, {
      className: f.header,
      children: n.name
    }), null == p && (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      children: d.intl.string(d.t.mE3KJC)
    }), (0, r.jsx)(c.Z, {
      appliedTags: h,
      wrap: n.isModeratorReportChannel()
    })]
  })
}