/** Chunk was on 59385 **/
/** chunk id: 636749, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
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
  return (0, Chunk54381.jsxs)("div", {
    className: c()(Chunk583140.toast, Chunk332287.toast),
    children: [(0, Chunk54381.jsx)(Chunk481060.b7C, {
      color: Chunk481060.TVs.colors.TEXT_BRAND
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      className: Chunk583140.__invalid_content,
      color: "header-primary",
      variant: "text-md/normal",
      children: Chunk388032.intl.string(Chunk388032.t["gd/Yqs"])
    })]
  })
}

function h(n) {
  let {
    channelId: t,
    warningId: e,
    senderId: i,
    safetyWarning: x
  } = n, h = s.useMemo(() => (null == x ? true : x.feedback_type) === u.ny.UPVOTE, [x]), k = s.useMemo(() => (null == x ? true : x.feedback_type) === u.ny.DOWNVOTE, [x]), p = s.useCallback((n, s) => {
    (null == x ? true : x.feedback_type) !== n && ((0, d.Ms)(t, e, n), (0, o.showToast)((0, o.createToast)(b.intl.string(b.t["gd/Yqs"]), o.ToastType.CUSTOM, {
      component: (0, a.jsx)(v, {})
    })), (0, _.qc)({
      channelId: t,
      warningId: e,
      senderId: i,
      warningType: null == x ? true : x.type,
      cta: s
    }))
  }, [x, t, e, i]);
  return (0, a.jsxs)("div", {
    className: g.feedback,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: b.intl.string(b.t.L84yVm)
    }), (0, a.jsxs)("div", {
      className: g.buttonsContainer,
      children: [(0, a.jsx)(o.P3F, {
        className: c()([g.buttonsBackground, h ? g.buttonsBackgroundActive : g.buttonsBackgroundInactive, {
          [g.disabled]: h
        }]),
        onClick: () => p(u.ny.UPVOTE, _.NM.FEEDBACK_UPVOTE),
        "aria-label": b.intl.string(b.t["2GrOCN"]),
        children: (0, a.jsx)(l.Z, {
          className: g.__invalid_buttonIcon,
          color: "interactive-normal"
        })
      }), (0, a.jsx)(o.P3F, {
        className: c()([g.buttonsBackground, k ? g.buttonsBackgroundActive : g.buttonsBackgroundInactive, {
          [g.disabled]: k
        }]),
        onClick: () => p(u.ny.DOWNVOTE, _.NM.FEEDBACK_DOWNVOTE),
        "aria-label": b.intl.string(b.t.COp9BO),
        children: (0, a.jsx)(r.Z, {
          className: g.__invalid_buttonIcon,
          color: "interactive-normal"
        })
      })]
    })]
  })
}