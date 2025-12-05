/** Chunk was on 89522 **/
/** chunk id: 12779, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk194082 = require("./194082.jsx"),
  Chunk14338 = require("./14338.jsx"),
  Chunk982115 = require("./982115.js");
let u = Chunk473749.memo(function(e) {
  let {
    label: t,
    participantCount: n,
    onClick: i,
    className: l,
    collapsed: u,
    speakers: p,
    channel: h,
    isStreamLive: f
  } = e;
  return (0, r.jsxs)(s.P3F, {
    onClick: i,
    className: a()(d.container, l),
    children: [null == p ? (0, r.jsx)(s.BFJ, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: d.micIcon
    }) : (0, r.jsx)(s.S6n, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: d.micIcon
    }), (0, r.jsxs)(s.Text, {
      color: "header-primary",
      variant: "text-md/semibold",
      className: d.text,
      children: [t, " — ", n]
    }), u && null != h && null != p && p.length > 0 && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.Z, {
        channel: h,
        speakers: p
      }), f && (0, r.jsx)(o.ZP, {})]
    }), (0, r.jsx)(s.CJ0, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: a()(d.downIcon, {
        [d.upIcon]: u
      })
    })]
  })
})