/** Chunk was on web.js **/
/** chunk id: 686807, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
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

function f(e) {
  let {
    channelId: t
  } = e, n = (0, l.m7)(t);
  if (null == n) return "[".concat(u.intl.string(u.t.bz1PZX), "]");
  let s = n.isMediaChannel() ? i.XBm : (0, o.Th)(n.type);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.nn4, {
      children: (0, a.ZP)({
        channel: n
      })
    }), (0, r.jsxs)("div", {
      "aria-hidden": true,
      children: [null != s && (0, r.jsx)(s, {
        className: d.icon,
        "aria-hidden": true
      }), n.name]
    })]
  })
}

function _(e) {
  switch (e.ref_type) {
    case c.Qs.CHANNEL:
      return (0, r.jsx)(f, {
        channelId: e.ref_id
      });
    case c.Qs.INTANGIBLE:
      return e.name;
    default:
      (0, s.vE)(e)
  }
}