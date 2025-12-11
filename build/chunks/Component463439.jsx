/** Chunk was on 5749 **/
/** chunk id: 463439, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk442837 = require("./442837.js"),
  Chunk194359 = require("./194359.js"),
  Chunk782568 = require("./782568.js"),
  Chunk726521 = require("./726521.js"),
  Chunk485664 = require("./485664.js"),
  Chunk681678 = require("./681678.js"),
  Chunk699516 = require("./699516.js"),
  Chunk473092 = require("./473092.js"),
  Chunk991981 = require("./991981.js"),
  Chunk850165 = require("./850165.jsx"),
  Chunk134612 = require("./134612.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk72595 = require("./72595.js");

function O(t) {
  let {
    senderId: e,
    channelId: n,
    hasReported: O,
    onReport: j,
    trackAnalyticsEvent: v
  } = t, _ = (0, s.e7)([f.Z], () => f.Z.isBlocked(e)), [T, E] = r.useState(_), S = (0, d.o)(), N = (0, d.Q)(), [y, A] = r.useState(false), C = (0, x.q)(n), M = r.useMemo(() => S ? 0 : N ? 2 : 1, [S, N]), R = async () => {
    null != C && (A(true), await (0, l.J7)(C, () => {
      u.Z.showReportSuccessToast(e, n), j()
    }, () => {
      u.Z.showFailedToast()
    }), A(false), v(p.NM.USER_TAKEOVER_MODAL_REPORT))
  }, Z = r.useMemo(() => {
    switch (M) {
      case 0:
        return g.intl.string(g.t.sZf6cz);
      case 2:
        return g.intl.string(g.t.HQ2nKl);
      default:
        return g.intl.string(g.t["65XQar"])
    }
  }, [M]);
  return (0, i.jsx)(h.Z, {
    header: g.intl.string(g.t["mWO+ys"]),
    description: g.intl.string(g.t.S0XtKF),
    children: (0, i.jsxs)("div", {
      className: m.buttonContainer,
      children: [(0, i.jsx)(a.Button, {
        text: T ? g.intl.string(g.t.XyHpKH) : g.intl.string(g.t.l4Emac),
        variant: "primary",
        fullWidth: true,
        icon: a.k$p,
        onClick: () => {
          T ? (E(false), o.Z.unblockUser(e, {
            location: b.DL
          }), v(p.NM.USER_TAKEOVER_MODAL_UNBLOCK), u.Z.showUnblockSuccessToast(e, n)) : (E(true), v(p.NM.USER_TAKEOVER_MODAL_BLOCK), o.Z.blockUser(e, {
            location: b.DL
          }).then(() => {
            u.Z.showBlockSuccessToast(e, n)
          }))
        }
      }), (0, i.jsx)(a.Button, {
        text: O ? g.intl.string(g.t.QvwOJ6) : g.intl.string(g.t["7fHyE6"]),
        variant: "secondary",
        fullWidth: true,
        icon: a.U65,
        onClick: R,
        loading: y,
        disabled: O
      }), (0, i.jsx)(a.Button, {
        text: Z,
        variant: "secondary",
        fullWidth: true,
        icon: a.kBi,
        onClick: () => {
          0 === M ? ((0, c.Z)(b.EI), v(p.NM.USER_TAKEOVER_MODAL_CTL)) : 2 === M ? ((0, c.Z)(b.$l), v(p.NM.USER_TAKEOVER_MODAL_THROUGHLINE)) : ((0, c.Z)(b.n4), v(p.NM.USER_TAKEOVER_MODAL_NO_FILTR))
        }
      })]
    })
  })
}