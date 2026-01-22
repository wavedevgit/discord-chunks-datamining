/** Chunk was on 8546 **/
/** chunk id: 299921, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk340833 = require("./340833.jsx"),
  Chunk913642 = require("./913642.jsx"),
  Chunk544231 = require("./544231.js"),
  Chunk349435 = require("./349435.js"),
  Chunk665909 = require("./665909.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk82457 = require("./82457.js"),
  Chunk910200 = require("./910200.js");

function p() {
  return (0, a.jsxs)("div", {
    className: i()(m.oR, _.oR),
    children: [(0, a.jsx)(c.lmn, {
      color: c.LU0.colors.TEXT_BRAND
    }), (0, a.jsx)(c.Text, {
      className: m.__invalid_content,
      color: "text-strong",
      variant: "text-md/normal",
      children: x.intl.string(x.t["gd/Yqs"])
    })]
  })
}

function T(e) {
  let {
    channelId: t,
    warningId: n,
    senderId: s,
    safetyWarning: m
  } = e, T = l.useMemo(() => (null == m ? true : m.feedback_type) === f.fy.UPVOTE, [m]), h = l.useMemo(() => (null == m ? true : m.feedback_type) === f.fy.DOWNVOTE, [m]), g = l.useCallback((e, l) => {
    (null == m ? true : m.feedback_type) !== e && ((0, o.v2)(t, n, e), (0, c.showToast)((0, c.createToast)(x.intl.string(x.t["gd/Yqs"]), c.ToastType.CUSTOM, {
      component: (0, a.jsx)(p, {})
    })), (0, u._$)({
      channelId: t,
      warningId: n,
      senderId: s,
      warningType: null == m ? true : m.type,
      cta: l
    }))
  }, [m, t, n, s]);
  return (0, a.jsxs)("div", {
    className: _.mp,
    children: [(0, a.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: x.intl.string(x.t.L84yVm)
    }), (0, a.jsxs)("div", {
      className: _.NC,
      children: [(0, a.jsx)(c.DUT, {
        className: i()([_.eH, T ? _.QT : _.LM, {
          [_.r9]: T
        }]),
        onClick: () => g(f.fy.UPVOTE, u.Wm.FEEDBACK_UPVOTE),
        "aria-label": x.intl.string(x.t["2GrOCN"]),
        children: (0, a.jsx)(d.A, {
          className: _.__invalid_buttonIcon,
          color: "interactive-text-default"
        })
      }), (0, a.jsx)(c.DUT, {
        className: i()([_.eH, h ? _.QT : _.LM, {
          [_.r9]: h
        }]),
        onClick: () => g(f.fy.DOWNVOTE, u.Wm.FEEDBACK_DOWNVOTE),
        "aria-label": x.intl.string(x.t.COp9BO),
        children: (0, a.jsx)(r.A, {
          className: _.__invalid_buttonIcon,
          color: "interactive-text-default"
        })
      })]
    })]
  })
}