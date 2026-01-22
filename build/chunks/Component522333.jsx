/** Chunk was on 1636 **/
/** chunk id: 522333, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975807 = require("./975807.js"),
  Chunk486503 = require("./486503.js"),
  Chunk253932 = require("./253932.js"),
  Chunk957565 = require("./957565.js"),
  Chunk723702 = require("./723702.js"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
  let {
    messageId: t,
    itemId: n,
    type: f,
    imageSrc: g
  } = e, p = c.Q_.useSetting(), {
    tidaWebformEnabled: b
  } = a.A.useExperiment({
    location: "useMessageDetailsItem"
  }, {
    autoTrackExposure: false
  }), m = l.useCallback(() => {
    (0, s.C)(t)
  }, [t]), y = l.useCallback(() => {
    null != n && (0, s.C)(n)
  }, [n]), O = l.useCallback(() => {
    null != g && (0, s.C)(g)
  }, [g]), A = l.useCallback(() => {
    null != g && (0, o.A)(g)
  }, [g]), v = "sticker" === f;
  if (!p || !s.p5 || !b || "emoji" !== f && !v || null == n) return null;
  let j = v ? u.intl.string(u.t.SJ3249) : u.intl.string(u.t.Ap2oVy);
  return (0, r.jsxs)(i.Drp, {
    id: "message-details",
    label: u.intl.string(u.t.IqqJNI),
    children: [(0, r.jsx)(i.Drp, {
      id: "copy-message-id",
      label: u.intl.string(u.t.zBoHlf),
      action: m,
      icon: i.L9S
    }), (0, r.jsx)(i.Drp, {
      id: "copy-item-id",
      label: j,
      action: y,
      icon: i.L9S
    }), null != g && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(i.Drp, {
        id: "copy-image-link",
        label: u.intl.string(u.t["8xHmxo"]),
        action: O,
        icon: i.qYV
      }), d.isPlatformEmbedded && (0, r.jsx)(i.Drp, {
        id: "open-image-link",
        label: u.intl.string(u.t.w8ldGK),
        action: A,
        icon: i.qYV
      })]
    })]
  })
}