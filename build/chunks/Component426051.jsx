/** Chunk was on 1272 **/
/** chunk id: 426051, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk709179 = require("./709179.js");

function _(e) {
  let {
    active: t,
    user: n,
    channel: _
  } = e, b = (0, d.V)(), E = i.useCallback(() => {
    (0, a.showToast)((0, a.createToast)(h.intl.string(h.t.pIQ3h4), a.ToastType.FAILURE)), s.Z.increment({
      name: l.V.SPAM_MESSAGE_REQUEST_ERROR_VIEW
    })
  }, []), O = i.useCallback(() => {
    c.Z.closeChannelSidebar(u.uZ)
  }, []), I = i.useCallback(() => {
    c.Z.closeChannelSidebar(u.uZ), b && (0, o.Kh)(_.id)
  }, [_.id, b]), {
    acceptMessageRequest: y,
    isAcceptLoading: v,
    isUserProfileLoading: C,
    isOptimisticAccepted: S
  } = (0, p.m)({
    user: n,
    onAcceptSuccess: I,
    onRejectSuccess: O,
    onError: E
  }), T = v || C, N = T || S;
  return (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsx)(f.Z, {
      otherUser: n,
      channel: _,
      active: t
    }), (0, r.jsxs)("div", {
      className: g.actions,
      children: [(0, r.jsx)(a.Button, {
        variant: "secondary",
        size: "sm",
        text: h.intl.string(h.t.vicfl6),
        onClick: e => {
          y(_.id), e.stopPropagation()
        },
        disabled: N,
        loading: T
      }), (0, r.jsx)(m.Z, {
        channel: _
      })]
    })]
  })
}