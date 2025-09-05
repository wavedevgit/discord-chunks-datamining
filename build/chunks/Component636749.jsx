/** Chunk was on 59385 **/
/** chunk id: 636749, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => v
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
  Chunk962129 = require("./962129.js"),
  Chunk74866 = require("./74866.js");

function p() {
  return (0, Chunk951288.jsxs)("div", {
    className: i()(Chunk74866.toast, Chunk962129.toast),
    children: [(0, Chunk951288.jsx)(Chunk481060.b7C, {
      color: Chunk481060.TVs.colors.TEXT_BRAND
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      className: Chunk74866.__invalid_content,
      color: "header-primary",
      variant: "text-md/normal",
      children: Chunk388032.intl.string(Chunk388032.t["gd/Yqq"])
    })]
  })
}

function v(t) {
  let {
    channelId: n,
    warningId: e,
    senderId: c,
    safetyWarning: f
  } = t, v = s.useMemo(() => (null == f ? true : f.feedback_type) === u.ny.UPVOTE, [f]), x = s.useMemo(() => (null == f ? true : f.feedback_type) === u.ny.DOWNVOTE, [f]), h = s.useCallback((t, s) => {
    (null == f ? true : f.feedback_type) !== t && ((0, d.Ms)(n, e, t), (0, o.showToast)((0, o.createToast)(_.intl.string(_.t["gd/Yqq"]), o.ToastType.CUSTOM, {
      component: (0, a.jsx)(p, {})
    })), (0, b.qc)({
      channelId: n,
      warningId: e,
      senderId: c,
      warningType: null == f ? true : f.type,
      cta: s
    }))
  }, [f, n, e, c]);
  return (0, a.jsxs)("div", {
    className: g.feedback,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: _.intl.string(_.t.L84yVl)
    }), (0, a.jsxs)("div", {
      className: g.buttonsContainer,
      children: [(0, a.jsx)(o.P3F, {
        className: i()([g.buttonsBackground, v ? g.buttonsBackgroundActive : g.buttonsBackgroundInactive, {
          [g.disabled]: v
        }]),
        onClick: () => h(u.ny.UPVOTE, b.NM.FEEDBACK_UPVOTE),
        "aria-label": _.intl.string(_.t["2GrOCA"]),
        children: (0, a.jsx)(l.Z, {
          className: g.__invalid_buttonIcon,
          color: "interactive-normal"
        })
      }), (0, a.jsx)(o.P3F, {
        className: i()([g.buttonsBackground, x ? g.buttonsBackgroundActive : g.buttonsBackgroundInactive, {
          [g.disabled]: x
        }]),
        onClick: () => h(u.ny.DOWNVOTE, b.NM.FEEDBACK_DOWNVOTE),
        "aria-label": _.intl.string(_.t.COp9BA),
        children: (0, a.jsx)(r.Z, {
          className: g.__invalid_buttonIcon,
          color: "interactive-normal"
        })
      })]
    })]
  })
}