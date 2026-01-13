/** Chunk was on 37220 **/
/** chunk id: 557935, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk796762 = require("./796762.js"),
  Chunk695346 = require("./695346.js"),
  Chunk572004 = require("./572004.js"),
  Chunk358085 = require("./358085.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  let {
    messageId: t,
    emojiId: n,
    type: f,
    imageSrc: g
  } = e, b = s.Sb.useSetting(), {
    tidaWebformEnabled: p
  } = a.Z.useExperiment({
    location: "useMessageDetailsItem"
  }, {
    autoTrackExposure: false
  }), m = i.useCallback(() => {
    (0, c.JG)(t)
  }, [t]), O = i.useCallback(() => {
    null != n && (0, c.JG)(n)
  }, [n]), y = i.useCallback(() => {
    null != g && (0, c.JG)(g)
  }, [g]), h = i.useCallback(() => {
    null != g && (0, o.Z)(g)
  }, [g]);
  return b && c.wS && p && "emoji" === f && null != n ? (0, r.jsxs)(l.sNh, {
    id: "message-details",
    label: d.intl.string(d.t.IqqJNI),
    children: [(0, r.jsx)(l.sNh, {
      id: "copy-message-id",
      label: d.intl.string(d.t.zBoHlf),
      action: m,
      icon: l.VuL
    }), (0, r.jsx)(l.sNh, {
      id: "copy-emoji-id",
      label: d.intl.string(d.t.Ap2oVy),
      action: O,
      icon: l.VuL
    }), null != g && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.sNh, {
        id: "copy-image-link",
        label: d.intl.string(d.t["8xHmxo"]),
        action: y,
        icon: l.xPt
      }), u.isPlatformEmbedded && (0, r.jsx)(l.sNh, {
        id: "open-image-link",
        label: d.intl.string(d.t.w8ldGK),
        action: h,
        icon: l.xPt
      })]
    })]
  }) : null
}