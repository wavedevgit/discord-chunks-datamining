/** Chunk was on 1272 **/
/** chunk id: 426051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk286379 = require("./286379.js"),
  Chunk481060 = require("./481060.js"),
  Chunk797614 = require("./797614.js"),
  Chunk359110 = require("./359110.js"),
  Chunk6025 = require("./6025.js"),
  Chunk433355 = require("./433355.js"),
  Chunk26373 = require("./26373.js"),
  Chunk486622 = require("./486622.js"),
  Chunk376191 = require("./376191.jsx"),
  Chunk86203 = require("./86203.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk561071 = require("./561071.js");

function b(e) {
  let {
    active: t,
    user: n,
    channel: b
  } = e, _ = (0, d.V)(), O = i.useCallback(() => {
    (0, a.showToast)((0, a.createToast)(g.intl.string(g.t.pIQ3h4), a.ToastType.FAILURE)), o.Z.increment({
      name: l.V.SPAM_MESSAGE_REQUEST_ERROR_VIEW
    })
  }, []), E = i.useCallback(() => {
    c.Z.closeChannelSidebar(u.uZ)
  }, []), y = i.useCallback(() => {
    c.Z.closeChannelSidebar(u.uZ), _ && (0, s.Kh)(b.id)
  }, [b.id, _]), {
    acceptMessageRequest: v,
    isAcceptLoading: I,
    isUserProfileLoading: C,
    isOptimisticAccepted: S
  } = (0, p.m)({
    user: n,
    onAcceptSuccess: y,
    onRejectSuccess: E,
    onError: O
  }), N = I || C, T = N || S;
  return (0, r.jsxs)("div", {
    className: m.container,
    children: [(0, r.jsx)(h.Z, {
      otherUser: n,
      channel: b,
      active: t
    }), (0, r.jsxs)("div", {
      className: m.actions,
      children: [(0, r.jsx)(a.zxk, {
        variant: "secondary",
        size: "sm",
        text: g.intl.string(g.t.vicfl5),
        onClick: e => {
          v(b.id), e.stopPropagation()
        },
        disabled: T,
        loading: N
      }), (0, r.jsx)(f.Z, {
        channel: b
      })]
    })]
  })
}