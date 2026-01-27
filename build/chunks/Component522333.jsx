/** Chunk was on 1636 **/
/** chunk id: 522333, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function g(e) {
  let {
    messageId: t,
    itemId: n,
    type: g,
    imageSrc: p
  } = e, f = c.Q_.useSetting(), {
    tidaWebformEnabled: y
  } = o.A.useExperiment({
    location: "useMessageDetailsItem"
  }, {
    autoTrackExposure: false
  }), b = i.useCallback(() => {
    (0, s.C)(t)
  }, [t]), A = i.useCallback(() => {
    null != n && (0, s.C)(n)
  }, [n]), m = i.useCallback(() => {
    null != p && (0, s.C)(p)
  }, [p]), O = i.useCallback(() => {
    null != p && (0, a.A)(p)
  }, [p]), v = "sticker" === g;
  if (!f || !s.p5 || !y || "emoji" !== g && !v || null == n) return null;
  let h = v ? u.intl.string(u.t.SJ3249) : u.intl.string(u.t.Ap2oVy);
  return (0, r.jsxs)(l.Drp, {
    id: "message-details",
    label: u.intl.string(u.t.IqqJNI),
    children: [(0, r.jsx)(l.Drp, {
      id: "copy-message-id",
      label: u.intl.string(u.t.zBoHlf),
      action: b,
      leadingAccessory: {
        type: "icon",
        icon: l.L9S
      },
      icon: l.L9S
    }), (0, r.jsx)(l.Drp, {
      id: "copy-item-id",
      label: h,
      action: A,
      leadingAccessory: {
        type: "icon",
        icon: l.L9S
      },
      icon: l.L9S
    }), null != p && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.Drp, {
        id: "copy-image-link",
        label: u.intl.string(u.t["8xHmxo"]),
        action: m,
        leadingAccessory: {
          type: "icon",
          icon: l.qYV
        },
        icon: l.qYV
      }), d.isPlatformEmbedded && (0, r.jsx)(l.Drp, {
        id: "open-image-link",
        label: u.intl.string(u.t.w8ldGK),
        action: O,
        leadingAccessory: {
          type: "icon",
          icon: l.qYV
        },
        icon: l.qYV
      })]
    })]
  })
}