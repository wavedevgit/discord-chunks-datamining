/** Chunk was on 1272 **/
/** chunk id: 749405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk359110 = require("./359110.js"),
  Chunk6025 = require("./6025.js"),
  Chunk433355 = require("./433355.js"),
  Chunk26373 = require("./26373.js"),
  Chunk486622 = require("./486622.js"),
  Chunk376191 = require("./376191.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk336549 = require("./336549.js");

function m(e) {
  let {
    active: t,
    user: n,
    channel: m
  } = e, h = (0, c.K)(), g = i.useCallback(() => {
    (0, l.showToast)((0, l.createToast)(p.intl.string(p.t["EDYbS+"]), l.ToastType.FAILURE))
  }, []), _ = i.useCallback(() => {
    s.Z.closeChannelSidebar(o.uZ)
  }, []), b = i.useCallback(() => {
    s.Z.closeChannelSidebar(o.uZ), h && (0, a.Kh)(m.id)
  }, [m.id, h]), {
    acceptMessageRequest: E,
    rejectMessageRequest: O,
    isAcceptLoading: I,
    isRejectLoading: y,
    isUserProfileLoading: v,
    isOptimisticAccepted: C,
    isOptimisticRejected: S
  } = (0, u.m)({
    user: n,
    onAcceptSuccess: b,
    onRejectSuccess: _,
    onError: g
  }), T = I || y || v || C || S;
  return (0, r.jsxs)("div", {
    className: f.container,
    children: [(0, r.jsx)(d.Z, {
      channel: m,
      otherUser: n,
      active: t
    }), (0, r.jsxs)("div", {
      className: f.actions,
      children: [(0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: f.button,
        children: (0, r.jsx)(l.Button, {
          variant: "secondary",
          size: "sm",
          text: p.intl.string(p.t.B2nygW),
          onClick: e => {
            e.stopPropagation(), O(m.id)
          },
          disabled: T,
          loading: y || S
        })
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: f.button,
        children: (0, r.jsx)(l.Button, {
          variant: "primary",
          size: "sm",
          text: p.intl.string(p.t.Kz8Pwr),
          onClick: e => {
            e.stopPropagation(), E(m.id)
          },
          disabled: T,
          loading: I || v || C
        })
      })]
    })]
  })
}