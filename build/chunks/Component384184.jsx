/** Chunk was on 21738 **/
/** chunk id: 384184, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
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

function A(e) {
  let {
    active: t,
    user: n,
    channel: A
  } = e, _ = (0, d.r)(), b = i.useCallback(() => {
    (0, a.showToast)((0, a.createToast)(f.intl.string(f.t.pIQ3h4), a.ToastType.FAILURE)), s.A.increment({
      name: l.K.SPAM_MESSAGE_REQUEST_ERROR_VIEW
    })
  }, []), E = i.useCallback(() => {
    c.A.closeChannelSidebar(u.fe)
  }, []), O = i.useCallback(() => {
    c.A.closeChannelSidebar(u.fe), _ && (0, o.iN)(A.id)
  }, [A.id, _]), {
    acceptMessageRequest: y,
    isAcceptLoading: I,
    isUserProfileLoading: v,
    isOptimisticAccepted: S
  } = (0, p.t)({
    user: n,
    onAcceptSuccess: O,
    onRejectSuccess: E,
    onError: b
  }), C = I || v, N = C || S;
  return (0, r.jsxs)("div", {
    className: m.kL,
    children: [(0, r.jsx)(h.A, {
      otherUser: n,
      channel: A,
      active: t
    }), (0, r.jsxs)("div", {
      className: m.o1,
      children: [(0, r.jsx)(a.Button, {
        variant: "secondary",
        size: "sm",
        text: f.intl.string(f.t.vicfl6),
        onClick: e => {
          y(A.id), e.stopPropagation()
        },
        disabled: N,
        loading: C
      }), (0, r.jsx)(g.A, {
        channel: A
      })]
    })]
  })
}