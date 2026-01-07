/** Chunk was on 59385 **/
/** chunk id: 636749, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => k
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
  Chunk665283 = require("./665283.js"),
  Chunk141291 = require("./141291.js");

function v() {
  return (0, a.jsxs)("div", {
    className: c()(_.toast, x.toast),
    children: [(0, a.jsx)(o.b7C, {
      color: o.TVs.colors.TEXT_BRAND
    }), (0, a.jsx)(o.Text, {
      className: _.__invalid_content,
      color: "text-strong",
      variant: "text-md/normal",
      children: g.intl.string(g.t["gd/Yqs"])
    })]
  })
}

function k(t) {
  let {
    channelId: n,
    warningId: e,
    senderId: i,
    safetyWarning: _
  } = t, k = s.useMemo(() => (null == _ ? true : _.feedback_type) === u.ny.UPVOTE, [_]), p = s.useMemo(() => (null == _ ? true : _.feedback_type) === u.ny.DOWNVOTE, [_]), h = s.useCallback((t, s) => {
    (null == _ ? true : _.feedback_type) !== t && ((0, d.Ms)(n, e, t), (0, o.showToast)((0, o.createToast)(g.intl.string(g.t["gd/Yqs"]), o.ToastType.CUSTOM, {
      component: (0, a.jsx)(v, {})
    })), (0, b.qc)({
      channelId: n,
      warningId: e,
      senderId: i,
      warningType: null == _ ? true : _.type,
      cta: s
    }))
  }, [_, n, e, i]);
  return (0, a.jsxs)("div", {
    className: x.feedback,
    children: [(0, a.jsx)(o.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: g.intl.string(g.t.L84yVm)
    }), (0, a.jsxs)("div", {
      className: x.buttonsContainer,
      children: [(0, a.jsx)(o.P3F, {
        className: c()([x.buttonsBackground, k ? x.buttonsBackgroundActive : x.buttonsBackgroundInactive, {
          [x.disabled]: k
        }]),
        onClick: () => h(u.ny.UPVOTE, b.NM.FEEDBACK_UPVOTE),
        "aria-label": g.intl.string(g.t["2GrOCN"]),
        children: (0, a.jsx)(r.Z, {
          className: x.__invalid_buttonIcon,
          color: "interactive-text-default"
        })
      }), (0, a.jsx)(o.P3F, {
        className: c()([x.buttonsBackground, p ? x.buttonsBackgroundActive : x.buttonsBackgroundInactive, {
          [x.disabled]: p
        }]),
        onClick: () => h(u.ny.DOWNVOTE, b.NM.FEEDBACK_DOWNVOTE),
        "aria-label": g.intl.string(g.t.COp9BO),
        children: (0, a.jsx)(l.Z, {
          className: x.__invalid_buttonIcon,
          color: "interactive-text-default"
        })
      })]
    })]
  })
}