/** Chunk was on 18108 **/
/** chunk id: 196645, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => j
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

function j(t) {
  let {
    senderId: e,
    channelId: n,
    hasReported: j,
    onReport: _,
    trackAnalyticsEvent: p
  } = t, v = (0, s.bG)([x.A], () => x.A.isBlocked(e)), [b, E] = i.useState(v), T = (0, d.N)(), S = (0, d.z)(), [y, N] = i.useState(false), R = (0, A.W)(n), k = i.useMemo(() => T ? 0 : S ? 2 : 1, [T, S]), w = async () => {
    null != R && (N(true), await (0, o.LF)(R, () => {
      u.A.showReportSuccessToast(e, n), _()
    }, () => {
      u.A.showFailedToast()
    }), N(false), p(m.Wm.USER_TAKEOVER_MODAL_REPORT))
  }, C = i.useMemo(() => {
    switch (k) {
      case 0:
        return g.intl.string(g.t.sZf6cz);
      case 2:
        return g.intl.string(g.t.HQ2nKl);
      default:
        return g.intl.string(g.t["65XQar"])
    }
  }, [k]);
  return (0, r.jsx)(f.A, {
    header: g.intl.string(g.t["mWO+ys"]),
    description: g.intl.string(g.t.S0XtKF),
    children: (0, r.jsxs)("div", {
      className: O.UD,
      children: [(0, r.jsx)(a.Button, {
        text: b ? g.intl.string(g.t.XyHpKH) : g.intl.string(g.t.l4Emac),
        variant: "primary",
        fullWidth: true,
        icon: a.aXh,
        onClick: () => {
          b ? (E(false), l.A.unblockUser(e, {
            location: h.Ht
          }), p(m.Wm.USER_TAKEOVER_MODAL_UNBLOCK), u.A.showUnblockSuccessToast(e, n)) : (E(true), p(m.Wm.USER_TAKEOVER_MODAL_BLOCK), l.A.blockUser(e, {
            location: h.Ht
          }).then(() => {
            u.A.showBlockSuccessToast(e, n)
          }))
        }
      }), (0, r.jsx)(a.Button, {
        text: j ? g.intl.string(g.t.QvwOJ6) : g.intl.string(g.t["7fHyE6"]),
        variant: "secondary",
        fullWidth: true,
        icon: a.iFK,
        onClick: w,
        loading: y,
        disabled: j
      }), (0, r.jsx)(a.Button, {
        text: C,
        variant: "secondary",
        fullWidth: true,
        icon: a.oyn,
        onClick: () => {
          0 === k ? ((0, c.A)(h.x7), p(m.Wm.USER_TAKEOVER_MODAL_CTL)) : 2 === k ? ((0, c.A)(h.CL), p(m.Wm.USER_TAKEOVER_MODAL_THROUGHLINE)) : ((0, c.A)(h.jR), p(m.Wm.USER_TAKEOVER_MODAL_NO_FILTR))
        }
      })]
    })
  })
}