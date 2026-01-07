/** Chunk was on 1272 **/
/** chunk id: 749405, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk359110 = require("./359110.js"),
  Chunk6025 = require("./6025.js"),
  Chunk433355 = require("./433355.js"),
  Chunk26373 = require("./26373.js"),
  Chunk486622 = require("./486622.js"),
  Chunk376191 = require("./376191.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk13929 = require("./13929.js");

function g(e) {
  let {
    active: t,
    user: n,
    channel: g
  } = e, m = (0, c.K)(), h = i.useCallback(() => {
    (0, l.showToast)((0, l.createToast)(p.intl.string(p.t["EDYbS+"]), l.ToastType.FAILURE))
  }, []), b = i.useCallback(() => {
    o.Z.closeChannelSidebar(s.uZ)
  }, []), _ = i.useCallback(() => {
    o.Z.closeChannelSidebar(s.uZ), m && (0, a.Kh)(g.id)
  }, [g.id, m]), {
    acceptMessageRequest: E,
    rejectMessageRequest: O,
    isAcceptLoading: v,
    isRejectLoading: y,
    isUserProfileLoading: I,
    isOptimisticAccepted: C,
    isOptimisticRejected: S
  } = (0, u.m)({
    user: n,
    onAcceptSuccess: _,
    onRejectSuccess: b,
    onError: h
  }), T = v || y || I || C || S;
  return (0, r.jsxs)("div", {
    className: f.container,
    children: [(0, r.jsx)(d.Z, {
      channel: g,
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
            e.stopPropagation(), O(g.id)
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
            e.stopPropagation(), E(g.id)
          },
          disabled: T,
          loading: v || I || C
        })
      })]
    })]
  })
}