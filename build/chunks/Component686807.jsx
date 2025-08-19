/** Chunk was on 31930 **/
/** chunk id: 686807, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk201895 = require("./201895.js"),
  Chunk471445 = require("./471445.js"),
  Chunk823379 = require("./823379.js"),
  Chunk303737 = require("./303737.js"),
  Chunk293810 = require("./293810.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk24132 = require("./24132.js");

function h(e) {
  let {
    channelId: t
  } = e, n = (0, a.m7)(t);
  if (null == n) return "[".concat(u.intl.string(u.t.bz1PZW), "]");
  let o = n.isMediaChannel() ? r.XBm : (0, l.Th)(n.type);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(r.nn4, {
      children: (0, s.ZP)({
        channel: n
      })
    }), (0, i.jsxs)("div", {
      "aria-hidden": true,
      children: [null != o && (0, i.jsx)(o, {
        className: d.icon,
        "aria-hidden": true
      }), n.name]
    })]
  })
}

function p(e) {
  switch (e.ref_type) {
    case c.Qs.CHANNEL:
      return (0, i.jsx)(h, {
        channelId: e.ref_id
      });
    case c.Qs.INTANGIBLE:
      return e.name;
    default:
      (0, o.vE)(e)
  }
}