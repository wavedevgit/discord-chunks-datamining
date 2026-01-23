/** Chunk was on 18108 **/
/** chunk id: 196645, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk311907 = require("./311907.js"),
  Chunk49229 = require("./49229.js"),
  Chunk975807 = require("./975807.js"),
  Chunk928658 = require("./928658.js"),
  Chunk426190 = require("./426190.js"),
  Chunk662502 = require("./662502.js"),
  Chunk994500 = require("./994500.js"),
  Chunk665909 = require("./665909.js"),
  Chunk192311 = require("./192311.js"),
  Chunk12105 = require("./12105.jsx"),
  Chunk327337 = require("./327337.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk286965 = require("./286965.js");

function p(t) {
  let {
    senderId: e,
    channelId: n,
    hasReported: p,
    onReport: j,
    trackAnalyticsEvent: b
  } = t, v = (0, a.bG)([_.A], () => _.A.isBlocked(e)), [E, T] = i.useState(v), f = (0, d.N)(), S = (0, d.z)(), [y, N] = i.useState(false), R = (0, m.W)(n), C = i.useMemo(() => f ? 0 : S ? 2 : 1, [f, S]), k = async () => {
    null != R && (N(true), await (0, o.LF)(R, () => {
      u.A.showReportSuccessToast(e, n), j()
    }, () => {
      u.A.showFailedToast()
    }), N(false), b(x.Wm.USER_TAKEOVER_MODAL_REPORT))
  }, w = i.useMemo(() => {
    switch (C) {
      case 0:
        return g.intl.string(g.t.sZf6cz);
      case 2:
        return g.intl.string(g.t.HQ2nKl);
      default:
        return g.intl.string(g.t["65XQar"])
    }
  }, [C]);
  return (0, r.jsx)(h.A, {
    header: g.intl.string(g.t["mWO+ys"]),
    description: g.intl.string(g.t.S0XtKF),
    children: (0, r.jsxs)("div", {
      className: O.UD,
      children: [(0, r.jsx)(s.Button, {
        text: E ? g.intl.string(g.t.XyHpKH) : g.intl.string(g.t.l4Emac),
        variant: "primary",
        fullWidth: true,
        icon: s.aXh,
        onClick: () => {
          E ? (T(false), l.A.unblockUser(e, {
            location: A.Ht
          }), b(x.Wm.USER_TAKEOVER_MODAL_UNBLOCK), u.A.showUnblockSuccessToast(e, n)) : (T(true), b(x.Wm.USER_TAKEOVER_MODAL_BLOCK), l.A.blockUser(e, {
            location: A.Ht
          }).then(() => {
            u.A.showBlockSuccessToast(e, n)
          }))
        }
      }), (0, r.jsx)(s.Button, {
        text: p ? g.intl.string(g.t.QvwOJ6) : g.intl.string(g.t["7fHyE6"]),
        variant: "secondary",
        fullWidth: true,
        icon: s.iFK,
        onClick: k,
        loading: y,
        disabled: p
      }), (0, r.jsx)(s.Button, {
        text: w,
        variant: "secondary",
        fullWidth: true,
        icon: s.oyn,
        onClick: () => {
          0 === C ? ((0, c.A)(A.x7), b(x.Wm.USER_TAKEOVER_MODAL_CTL)) : 2 === C ? ((0, c.A)(A.CL), b(x.Wm.USER_TAKEOVER_MODAL_THROUGHLINE)) : ((0, c.A)(A.jR), b(x.Wm.USER_TAKEOVER_MODAL_NO_FILTR))
        }
      })]
    })
  })
}