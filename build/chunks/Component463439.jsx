/** Chunk was on 5749 **/
/** chunk id: 463439, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
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
  Chunk394968 = require("./394968.js");

function b(t) {
  let {
    senderId: e,
    channelId: n,
    hasReported: b,
    onReport: O,
    trackAnalyticsEvent: j
  } = t, v = (0, a.e7)([p.Z], () => p.Z.isBlocked(e)), [T, E] = r.useState(v), S = (0, d.o)(), N = (0, d.Q)(), [y, A] = r.useState(false), C = (0, h.q)(n), M = r.useMemo(() => S ? 0 : N ? 2 : 1, [S, N]), R = async () => {
    null != C && (A(true), await (0, l.J7)(C, () => {
      u.Z.showReportSuccessToast(e, n), O()
    }, () => {
      u.Z.showFailedToast()
    }), A(false), j(x.NM.USER_TAKEOVER_MODAL_REPORT))
  }, Z = r.useMemo(() => {
    switch (M) {
      case 0:
        return m.intl.string(m.t.sZf6cz);
      case 2:
        return m.intl.string(m.t.HQ2nKl);
      default:
        return m.intl.string(m.t["65XQar"])
    }
  }, [M]);
  return (0, i.jsx)(_.Z, {
    header: m.intl.string(m.t["mWO+ys"]),
    description: m.intl.string(m.t.S0XtKF),
    children: (0, i.jsxs)("div", {
      className: f.buttonContainer,
      children: [(0, i.jsx)(s.Button, {
        text: T ? m.intl.string(m.t.XyHpKH) : m.intl.string(m.t.l4Emac),
        variant: "primary",
        fullWidth: true,
        icon: s.k$p,
        onClick: () => {
          T ? (E(false), o.Z.unblockUser(e, {
            location: g.DL
          }), j(x.NM.USER_TAKEOVER_MODAL_UNBLOCK), u.Z.showUnblockSuccessToast(e, n)) : (E(true), j(x.NM.USER_TAKEOVER_MODAL_BLOCK), o.Z.blockUser(e, {
            location: g.DL
          }).then(() => {
            u.Z.showBlockSuccessToast(e, n)
          }))
        }
      }), (0, i.jsx)(s.Button, {
        text: b ? m.intl.string(m.t.QvwOJ6) : m.intl.string(m.t["7fHyE6"]),
        variant: "secondary",
        fullWidth: true,
        icon: s.U65,
        onClick: R,
        loading: y,
        disabled: b
      }), (0, i.jsx)(s.Button, {
        text: Z,
        variant: "secondary",
        fullWidth: true,
        icon: s.kBi,
        onClick: () => {
          0 === M ? ((0, c.Z)(g.EI), j(x.NM.USER_TAKEOVER_MODAL_CTL)) : 2 === M ? ((0, c.Z)(g.$l), j(x.NM.USER_TAKEOVER_MODAL_THROUGHLINE)) : ((0, c.Z)(g.n4), j(x.NM.USER_TAKEOVER_MODAL_NO_FILTR))
        }
      })]
    })
  })
}