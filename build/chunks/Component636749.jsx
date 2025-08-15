/** Chunk was on 59385 **/
/** chunk id: 636749, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk446183 = require("./446183.jsx"),
  Chunk677281 = require("./677281.jsx"),
  Chunk378298 = require("./378298.js"),
  Chunk359119 = require("./359119.js"),
  Chunk473092 = require("./473092.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk332287 = require("./332287.js"),
  Chunk583140 = require("./583140.js");

function v() {
  return (0, Chunk951288.jsxs)("div", {
    className: i()(Chunk583140.toast, Chunk332287.toast),
    children: [(0, Chunk951288.jsx)(Chunk481060.b7C, {
      color: Chunk481060.TVs.colors.TEXT_BRAND
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      className: Chunk583140.__invalid_content,
      color: "header-primary",
      variant: "text-md/normal",
      children: Chunk388032.intl.string(Chunk388032.t["gd/Yqq"])
    })]
  })
}

function g(e) {
  let {
    channelId: n,
    warningId: t,
    senderId: s,
    safetyWarning: b
  } = e, g = o.useMemo(() => (null == b ? true : b.feedback_type) === u.ny.UPVOTE, [b]), h = o.useMemo(() => (null == b ? true : b.feedback_type) === u.ny.DOWNVOTE, [b]), N = o.useCallback((e, o) => {
    (null == b ? true : b.feedback_type) !== e && ((0, d.Ms)(n, t, e), (0, c.showToast)((0, c.createToast)(m.intl.string(m.t["gd/Yqq"]), c.ToastType.CUSTOM, {
      component: (0, a.jsx)(v, {})
    })), (0, _.qc)({
      channelId: n,
      warningId: t,
      senderId: s,
      warningType: null == b ? true : b.type,
      cta: o
    }))
  }, [b, n, t, s]);
  return (0, a.jsxs)("div", {
    className: x.feedback,
    children: [(0, a.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: m.intl.string(m.t.L84yVl)
    }), (0, a.jsxs)("div", {
      className: x.buttonsContainer,
      children: [(0, a.jsx)(c.P3F, {
        className: i()([x.buttonsBackground, g ? x.buttonsBackgroundActive : x.buttonsBackgroundInactive, {
          [x.disabled]: g
        }]),
        onClick: () => N(u.ny.UPVOTE, _.NM.FEEDBACK_UPVOTE),
        "aria-label": m.intl.string(m.t["2GrOCA"]),
        children: (0, a.jsx)(r.Z, {
          className: x.__invalid_buttonIcon,
          color: "interactive-normal"
        })
      }), (0, a.jsx)(c.P3F, {
        className: i()([x.buttonsBackground, h ? x.buttonsBackgroundActive : x.buttonsBackgroundInactive, {
          [x.disabled]: h
        }]),
        onClick: () => N(u.ny.DOWNVOTE, _.NM.FEEDBACK_DOWNVOTE),
        "aria-label": m.intl.string(m.t.COp9BA),
        children: (0, a.jsx)(l.Z, {
          className: x.__invalid_buttonIcon,
          color: "interactive-normal"
        })
      })]
    })]
  })
}