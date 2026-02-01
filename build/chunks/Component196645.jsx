/** Chunk was on 18108 **/
/** chunk id: 196645, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => m
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

function m(t) {
  let {
    senderId: e,
    channelId: n,
    hasReported: m,
    onReport: p,
    trackAnalyticsEvent: S
  } = t, f = (0, a.bG)([E.A], () => E.A.isBlocked(e)), [b, O] = i.useState(f), j = (0, d.N)(), N = (0, d.z)(), [C, v] = i.useState(false), R = (0, h.W)(n), I = i.useMemo(() => j ? 0 : N ? 2 : 1, [j, N]), y = async () => {
    null != R && (v(true), await (0, c.LF)(R, () => {
      u.A.showReportSuccessToast(e, n), p()
    }, () => {
      u.A.showFailedToast()
    }), v(false), S(_.Wm.USER_TAKEOVER_MODAL_REPORT))
  }, w = i.useMemo(() => {
    switch (I) {
      case 0:
        return g.intl.string(g.t.sZf6cz);
      case 2:
        return g.intl.string(g.t.HQ2nKl);
      default:
        return g.intl.string(g.t["65XQar"])
    }
  }, [I]);
  return (0, r.jsx)(A.A, {
    header: g.intl.string(g.t["mWO+ys"]),
    description: g.intl.string(g.t.S0XtKF),
    children: (0, r.jsxs)("div", {
      className: T.UD,
      children: [(0, r.jsx)(s.Button, {
        text: b ? g.intl.string(g.t.XyHpKH) : g.intl.string(g.t.l4Emac),
        variant: "primary",
        fullWidth: true,
        icon: s.aXh,
        onClick: () => {
          b ? (O(false), l.A.unblockUser(e, {
            location: x.Ht
          }), S(_.Wm.USER_TAKEOVER_MODAL_UNBLOCK), u.A.showUnblockSuccessToast(e, n)) : (O(true), S(_.Wm.USER_TAKEOVER_MODAL_BLOCK), l.A.blockUser(e, {
            location: x.Ht
          }).then(() => {
            u.A.showBlockSuccessToast(e, n)
          }))
        }
      }), (0, r.jsx)(s.Button, {
        text: m ? g.intl.string(g.t.QvwOJ6) : g.intl.string(g.t["7fHyE6"]),
        variant: "secondary",
        fullWidth: true,
        icon: s.iFK,
        onClick: y,
        loading: C,
        disabled: m
      }), (0, r.jsx)(s.Button, {
        text: w,
        variant: "secondary",
        fullWidth: true,
        icon: s.oyn,
        onClick: () => {
          0 === I ? ((0, o.A)(x.x7), S(_.Wm.USER_TAKEOVER_MODAL_CTL)) : 2 === I ? ((0, o.A)(x.CL), S(_.Wm.USER_TAKEOVER_MODAL_THROUGHLINE)) : ((0, o.A)(x.jR), S(_.Wm.USER_TAKEOVER_MODAL_NO_FILTR))
        }
      })]
    })
  })
}