/** Chunk was on 59385 **/
/** chunk id: 636749, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk446183 = require("./446183.jsx"),
  Chunk677281 = require("./677281.jsx"),
  Chunk378298 = require("./378298.js"),
  Chunk359119 = require("./359119.js"),
  Chunk473092 = require("./473092.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk989256 = require("./989256.js"),
  Chunk986449 = require("./986449.js");

function g() {
  return (0, Chunk255367.jsxs)("div", {
    className: c()(Chunk986449.toast, Chunk989256.toast),
    children: [(0, Chunk255367.jsx)(Chunk481060.b7C, {
      color: Chunk481060.TVs.colors.TEXT_BRAND
    }), (0, Chunk255367.jsx)(Chunk481060.Text, {
      className: Chunk986449.__invalid_content,
      color: "header-primary",
      variant: "text-md/normal",
      children: Chunk388032.intl.string(Chunk388032.t["gd/Yqq"])
    })]
  })
}

function v(e) {
  let {
    channelId: n,
    warningId: t,
    senderId: o,
    safetyWarning: b
  } = e, v = s.useMemo(() => (null == b ? true : b.feedback_type) === u.ny.UPVOTE, [b]), h = s.useMemo(() => (null == b ? true : b.feedback_type) === u.ny.DOWNVOTE, [b]), N = s.useCallback((e, s) => {
    (null == b ? true : b.feedback_type) !== e && ((0, d.Ms)(n, t, e), (0, i.showToast)((0, i.createToast)(x.intl.string(x.t["gd/Yqq"]), i.ToastType.CUSTOM, {
      component: (0, a.jsx)(g, {})
    })), (0, _.qc)({
      channelId: n,
      warningId: t,
      senderId: o,
      warningType: null == b ? true : b.type,
      cta: s
    }))
  }, [b, n, t, o]);
  return (0, a.jsxs)("div", {
    className: m.feedback,
    children: [(0, a.jsx)(i.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: x.intl.string(x.t.L84yVl)
    }), (0, a.jsxs)("div", {
      className: m.buttonsContainer,
      children: [(0, a.jsx)(i.P3F, {
        className: c()([m.buttonsBackground, v ? m.buttonsBackgroundActive : m.buttonsBackgroundInactive, {
          [m.disabled]: v
        }]),
        onClick: () => N(u.ny.UPVOTE, _.NM.FEEDBACK_UPVOTE),
        "aria-label": x.intl.string(x.t["2GrOCA"]),
        children: (0, a.jsx)(r.Z, {
          className: m.__invalid_buttonIcon,
          color: "interactive-normal"
        })
      }), (0, a.jsx)(i.P3F, {
        className: c()([m.buttonsBackground, h ? m.buttonsBackgroundActive : m.buttonsBackgroundInactive, {
          [m.disabled]: h
        }]),
        onClick: () => N(u.ny.DOWNVOTE, _.NM.FEEDBACK_DOWNVOTE),
        "aria-label": x.intl.string(x.t.COp9BA),
        children: (0, a.jsx)(l.Z, {
          className: m.__invalid_buttonIcon,
          color: "interactive-normal"
        })
      })]
    })]
  })
}