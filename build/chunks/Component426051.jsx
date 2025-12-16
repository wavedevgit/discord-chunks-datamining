/** Chunk was on 1272 **/
/** chunk id: 426051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk282850 = require("./282850.js");

function b(e) {
  let {
    active: t,
    user: n,
    channel: b
  } = e, E = (0, d.V)(), _ = i.useCallback(() => {
    (0, a.showToast)((0, a.createToast)(h.intl.string(h.t.pIQ3h4), a.ToastType.FAILURE)), s.Z.increment({
      name: l.V.SPAM_MESSAGE_REQUEST_ERROR_VIEW
    })
  }, []), O = i.useCallback(() => {
    c.Z.closeChannelSidebar(u.uZ)
  }, []), v = i.useCallback(() => {
    c.Z.closeChannelSidebar(u.uZ), E && (0, o.Kh)(b.id)
  }, [b.id, E]), {
    acceptMessageRequest: y,
    isAcceptLoading: I,
    isUserProfileLoading: C,
    isOptimisticAccepted: S
  } = (0, p.m)({
    user: n,
    onAcceptSuccess: v,
    onRejectSuccess: O,
    onError: _
  }), T = I || C, N = T || S;
  return (0, r.jsxs)("div", {
    className: m.container,
    children: [(0, r.jsx)(f.Z, {
      otherUser: n,
      channel: b,
      active: t
    }), (0, r.jsxs)("div", {
      className: m.actions,
      children: [(0, r.jsx)(a.Button, {
        variant: "secondary",
        size: "sm",
        text: h.intl.string(h.t.vicfl6),
        onClick: e => {
          y(b.id), e.stopPropagation()
        },
        disabled: N,
        loading: T
      }), (0, r.jsx)(g.Z, {
        channel: b
      })]
    })]
  })
}