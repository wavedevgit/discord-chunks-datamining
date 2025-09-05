/** Chunk was on 70127 **/
/** chunk id: 12779, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk194082 = require("./194082.jsx"),
  Chunk14338 = require("./14338.jsx"),
  Chunk977932 = require("./977932.js");
let d = Chunk647438.memo(function(e) {
  let {
    label: t,
    participantCount: n,
    onClick: i,
    className: l,
    collapsed: d,
    speakers: p,
    channel: h,
    isStreamLive: f
  } = e;
  return (0, r.jsxs)(o.P3F, {
    onClick: i,
    className: a()(u.container, l),
    children: [null == p ? (0, r.jsx)(o.BFJ, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: u.micIcon
    }) : (0, r.jsx)(o.S6n, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: u.micIcon
    }), (0, r.jsxs)(o.Text, {
      color: "header-primary",
      variant: "text-md/semibold",
      className: u.text,
      children: [t, " — ", n]
    }), d && null != h && null != p && p.length > 0 && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.Z, {
        channel: h,
        speakers: p
      }), f && (0, r.jsx)(s.ZP, {})]
    }), (0, r.jsx)(o.CJ0, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: a()(u.downIcon, {
        [u.upIcon]: d
      })
    })]
  })
})