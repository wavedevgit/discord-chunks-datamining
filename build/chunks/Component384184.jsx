/** Chunk was on 21738 **/
/** chunk id: 384184, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk731738 = require("./731738.js"),
  Chunk397927 = require("./397927.js"),
  Chunk831062 = require("./831062.js"),
  Chunk378570 = require("./378570.js"),
  Chunk138298 = require("./138298.js"),
  Chunk761640 = require("./761640.js"),
  Chunk336590 = require("./336590.js"),
  Chunk471271 = require("./471271.js"),
  Chunk629199 = require("./629199.jsx"),
  Chunk772659 = require("./772659.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk360830 = require("./360830.js");

function m(e) {
  let {
    active: t,
    user: n,
    channel: m
  } = e, b = (0, d.r)(), _ = i.useCallback(() => {
    (0, a.showToast)((0, a.createToast)(A.intl.string(A.t.pIQ3h4), a.ToastType.FAILURE)), s.A.increment({
      name: l.K.SPAM_MESSAGE_REQUEST_ERROR_VIEW
    })
  }, []), E = i.useCallback(() => {
    c.A.closeChannelSidebar(u.fe)
  }, []), O = i.useCallback(() => {
    c.A.closeChannelSidebar(u.fe), b && (0, o.iN)(m.id)
  }, [m.id, b]), {
    acceptMessageRequest: y,
    isAcceptLoading: I,
    isUserProfileLoading: v,
    isOptimisticAccepted: S
  } = (0, p.t)({
    user: n,
    onAcceptSuccess: O,
    onRejectSuccess: E,
    onError: _
  }), C = I || v, N = C || S;
  return (0, r.jsxs)("div", {
    className: g.kL,
    children: [(0, r.jsx)(f.A, {
      otherUser: n,
      channel: m,
      active: t
    }), (0, r.jsxs)("div", {
      className: g.o1,
      children: [(0, r.jsx)(a.Button, {
        variant: "secondary",
        size: "sm",
        text: A.intl.string(A.t.vicfl6),
        onClick: e => {
          y(m.id), e.stopPropagation()
        },
        disabled: N,
        loading: C
      }), (0, r.jsx)(h.A, {
        channel: m
      })]
    })]
  })
}