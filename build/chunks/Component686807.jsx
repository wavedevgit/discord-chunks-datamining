/** Chunk was on 2686 **/
/** chunk id: 686807, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk201895 = require("./201895.js"),
  Chunk471445 = require("./471445.js"),
  Chunk823379 = require("./823379.js"),
  Chunk303737 = require("./303737.js"),
  Chunk293810 = require("./293810.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk310045 = require("./310045.js");

function f(e) {
  let {
    channelId: t
  } = e, n = (0, a.m7)(t);
  if (null == n) return "[".concat(s.intl.string(s.t.bz1PZW), "]");
  let u = n.isMediaChannel() ? i.XBm : (0, o.Th)(n.type);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.nn4, {
      children: (0, l.ZP)({
        channel: n
      })
    }), (0, r.jsxs)("div", {
      "aria-hidden": true,
      children: [null != u && (0, r.jsx)(u, {
        className: d.icon,
        "aria-hidden": true
      }), n.name]
    })]
  })
}

function m(e) {
  switch (e.ref_type) {
    case c.Qs.CHANNEL:
      return (0, r.jsx)(f, {
        channelId: e.ref_id
      });
    case c.Qs.INTANGIBLE:
      return e.name;
    default:
      (0, u.vE)(e)
  }
}