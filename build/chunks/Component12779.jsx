/** Chunk was on 81985 **/
/** chunk id: 12779, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk194082 = require("./194082.jsx"),
  Chunk14338 = require("./14338.jsx"),
  Chunk995148 = require("./995148.js");
let d = Chunk473749.memo(function(e) {
  let {
    label: t,
    participantCount: n,
    onClick: i,
    className: l,
    collapsed: d,
    speakers: p,
    channel: f,
    isStreamLive: h
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
      color: "text-strong",
      variant: "text-md/semibold",
      className: u.text,
      children: [t, " — ", n]
    }), d && null != f && null != p && p.length > 0 && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.Z, {
        channel: f,
        speakers: p
      }), h && (0, r.jsx)(s.ZP, {})]
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