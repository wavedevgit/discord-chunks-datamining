/** Chunk was on 8546 **/
/** chunk id: 299921, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => T
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk340833 = require("./340833.jsx"),
  Chunk913642 = require("./913642.jsx"),
  Chunk544231 = require("./544231.js"),
  Chunk349435 = require("./349435.js"),
  Chunk665909 = require("./665909.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk82457 = require("./82457.js"),
  Chunk910200 = require("./910200.js");

function g() {
  return (0, s.jsxs)("div", {
    className: l()(p.oR, m.oR),
    children: [(0, s.jsx)(c.lmn, {
      color: c.LU0.colors.TEXT_BRAND
    }), (0, s.jsx)(c.Text, {
      className: p.__invalid_content,
      color: "text-strong",
      variant: "text-md/normal",
      children: x.intl.string(x.t["gd/Yqs"])
    })]
  })
}

function T(t) {
  let {
    channelId: e,
    warningId: n,
    senderId: i,
    safetyWarning: p
  } = t, T = a.useMemo(() => (null == p ? true : p.feedback_type) === u.fy.UPVOTE, [p]), h = a.useMemo(() => (null == p ? true : p.feedback_type) === u.fy.DOWNVOTE, [p]), v = a.useCallback((t, a) => {
    (null == p ? true : p.feedback_type) !== t && ((0, d.v2)(e, n, t), (0, c.showToast)((0, c.createToast)(x.intl.string(x.t["gd/Yqs"]), c.ToastType.CUSTOM, {
      component: (0, s.jsx)(g, {})
    })), (0, _._$)({
      channelId: e,
      warningId: n,
      senderId: i,
      warningType: null == p ? true : p.type,
      cta: a
    }))
  }, [p, e, n, i]);
  return (0, s.jsxs)("div", {
    className: m.mp,
    children: [(0, s.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: x.intl.string(x.t.L84yVm)
    }), (0, s.jsxs)("div", {
      className: m.NC,
      children: [(0, s.jsx)(c.DUT, {
        className: l()([m.eH, T ? m.QT : m.LM, {
          [m.r9]: T
        }]),
        onClick: () => v(u.fy.UPVOTE, _.Wm.FEEDBACK_UPVOTE),
        "aria-label": x.intl.string(x.t["2GrOCN"]),
        children: (0, s.jsx)(o.A, {
          className: m.__invalid_buttonIcon,
          color: "interactive-text-default"
        })
      }), (0, s.jsx)(c.DUT, {
        className: l()([m.eH, h ? m.QT : m.LM, {
          [m.r9]: h
        }]),
        onClick: () => v(u.fy.DOWNVOTE, _.Wm.FEEDBACK_DOWNVOTE),
        "aria-label": x.intl.string(x.t.COp9BO),
        children: (0, s.jsx)(r.A, {
          className: m.__invalid_buttonIcon,
          color: "interactive-text-default"
        })
      })]
    })]
  })
}