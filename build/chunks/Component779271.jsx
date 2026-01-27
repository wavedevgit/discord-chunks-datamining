/** Chunk was on 77870 **/
/** chunk id: 779271, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk402216 = require("./402216.jsx"),
  Chunk667992 = require("./667992.jsx"),
  Chunk920660 = require("./920660.js");
let d = Chunk64700.memo(function(e) {
  let {
    label: t,
    participantCount: n,
    onClick: l,
    className: i,
    collapsed: d,
    speakers: p,
    channel: h,
    isStreamLive: f
  } = e;
  return (0, r.jsxs)(a.DUT, {
    onClick: l,
    className: s()(u.kL, i),
    children: [null == p ? (0, r.jsx)(a.nFg, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: u.Vo
    }) : (0, r.jsx)(a.cNw, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: u.Vo
    }), (0, r.jsxs)(a.Text, {
      color: "text-strong",
      variant: "text-md/semibold",
      className: u.Qq,
      children: [t, " — ", n]
    }), d && null != h && null != p && p.length > 0 && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.A, {
        channel: h,
        speakers: p
      }), f && (0, r.jsx)(o.Ay, {})]
    }), (0, r.jsx)(a.abt, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20,
      className: s()(u.mw, {
        [u.VU]: d
      })
    })]
  })
})