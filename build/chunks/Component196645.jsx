/** Chunk was on 18108 **/
/** chunk id: 196645, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => T
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

function T(t) {
  let {
    senderId: e,
    channelId: n,
    hasReported: T,
    onReport: m,
    trackAnalyticsEvent: f
  } = t, S = (0, a.bG)([E.A], () => E.A.isBlocked(e)), [b, O] = i.useState(S), j = (0, d.N)(), N = (0, d.z)(), [C, v] = i.useState(false), R = (0, A.W)(n), I = i.useMemo(() => j ? 0 : N ? 2 : 1, [j, N]), y = async () => {
    null != R && (v(true), await (0, c.LF)(R, () => {
      u.A.showReportSuccessToast(e, n), m()
    }, () => {
      u.A.showFailedToast()
    }), v(false), f(_.Wm.USER_TAKEOVER_MODAL_REPORT))
  }, w = i.useMemo(() => {
    switch (I) {
      case 0:
        return x.intl.string(x.t.sZf6cz);
      case 2:
        return x.intl.string(x.t.HQ2nKl);
      default:
        return x.intl.string(x.t["65XQar"])
    }
  }, [I]);
  return (0, r.jsx)(h.A, {
    header: x.intl.string(x.t["mWO+ys"]),
    description: x.intl.string(x.t.S0XtKF),
    children: (0, r.jsxs)("div", {
      className: p.UD,
      children: [(0, r.jsx)(s.Button, {
        text: b ? x.intl.string(x.t.XyHpKH) : x.intl.string(x.t.l4Emac),
        variant: "primary",
        fullWidth: true,
        icon: s.aXh,
        onClick: () => {
          b ? (O(false), l.A.unblockUser(e, {
            location: g.Ht
          }), f(_.Wm.USER_TAKEOVER_MODAL_UNBLOCK), u.A.showUnblockSuccessToast(e, n)) : (O(true), f(_.Wm.USER_TAKEOVER_MODAL_BLOCK), l.A.blockUser(e, {
            location: g.Ht
          }).then(() => {
            u.A.showBlockSuccessToast(e, n)
          }))
        }
      }), (0, r.jsx)(s.Button, {
        text: T ? x.intl.string(x.t.QvwOJ6) : x.intl.string(x.t["7fHyE6"]),
        variant: "secondary",
        fullWidth: true,
        icon: s.iFK,
        onClick: y,
        loading: C,
        disabled: T
      }), (0, r.jsx)(s.Button, {
        text: w,
        variant: "secondary",
        fullWidth: true,
        icon: s.oyn,
        onClick: () => {
          0 === I ? ((0, o.A)(g.x7), f(_.Wm.USER_TAKEOVER_MODAL_CTL)) : 2 === I ? ((0, o.A)(g.CL), f(_.Wm.USER_TAKEOVER_MODAL_THROUGHLINE)) : ((0, o.A)(g.jR), f(_.Wm.USER_TAKEOVER_MODAL_NO_FILTR))
        }
      })]
    })
  })
}