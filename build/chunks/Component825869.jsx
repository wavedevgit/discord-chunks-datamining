/** Chunk was on 21738 **/
/** chunk id: 825869, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk378570 = require("./378570.js"),
  Chunk138298 = require("./138298.js"),
  Chunk761640 = require("./761640.js"),
  Chunk336590 = require("./336590.js"),
  Chunk471271 = require("./471271.js"),
  Chunk629199 = require("./629199.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk173801 = require("./173801.js");

function g(e) {
  let {
    active: t,
    user: n,
    channel: g
  } = e, f = (0, c.k)(), m = i.useCallback(() => {
    (0, l.showToast)((0, l.createToast)(p.intl.string(p.t["EDYbS+"]), l.ToastType.FAILURE))
  }, []), A = i.useCallback(() => {
    s.A.closeChannelSidebar(o.fe)
  }, []), _ = i.useCallback(() => {
    s.A.closeChannelSidebar(o.fe), f && (0, a.iN)(g.id)
  }, [g.id, f]), {
    acceptMessageRequest: b,
    rejectMessageRequest: E,
    isAcceptLoading: O,
    isRejectLoading: y,
    isUserProfileLoading: I,
    isOptimisticAccepted: v,
    isOptimisticRejected: S
  } = (0, u.t)({
    user: n,
    onAcceptSuccess: _,
    onRejectSuccess: A,
    onError: m
  }), C = O || y || I || v || S;
  return (0, r.jsxs)("div", {
    className: h.kL,
    children: [(0, r.jsx)(d.A, {
      channel: g,
      otherUser: n,
      active: t
    }), (0, r.jsxs)("div", {
      className: h.o1,
      children: [(0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: h.x6,
        children: (0, r.jsx)(l.Button, {
          variant: "secondary",
          size: "sm",
          text: p.intl.string(p.t.B2nygW),
          onClick: e => {
            e.stopPropagation(), E(g.id)
          },
          disabled: C,
          loading: y || S
        })
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: h.x6,
        children: (0, r.jsx)(l.Button, {
          variant: "primary",
          size: "sm",
          text: p.intl.string(p.t.Kz8Pwr),
          onClick: e => {
            e.stopPropagation(), b(g.id)
          },
          disabled: C,
          loading: O || I || v
        })
      })]
    })]
  })
}