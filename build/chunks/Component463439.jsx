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
  Chunk394968 = require("./394968.js"),
  Chunk149355 = require("./149355.js");

function O(t) {
  let {
    senderId: e,
    channelId: n,
    hasReported: O,
    onReport: v,
    trackAnalyticsEvent: j
  } = t, T = (0, a.e7)([p.Z], () => p.Z.isBlocked(e)), [E, S] = r.useState(T), y = (0, d.o)(), A = (0, d.Q)(), [N, C] = r.useState(false), I = (0, g.q)(n), R = r.useMemo(() => y ? 0 : A ? 2 : 1, [y, A]), M = async () => {
    null != I && (C(true), await (0, l.J7)(I, () => {
      u.Z.showReportSuccessToast(e, n), v()
    }, () => {
      u.Z.showFailedToast()
    }), C(false), j(x.NM.USER_TAKEOVER_MODAL_REPORT))
  }, Z = r.useMemo(() => {
    switch (R) {
      case 0:
        return f.intl.string(f.t.sZf6cz);
      case 2:
        return f.intl.string(f.t.HQ2nKl);
      default:
        return f.intl.string(f.t["65XQar"])
    }
  }, [R]);
  return (0, i.jsx)(h.Z, {
    heroImageSrc: b,
    heroImageAlt: f.intl.string(f.t.RVyYCK),
    header: f.intl.string(f.t["mWO+ys"]),
    description: f.intl.string(f.t.S0XtKF),
    children: (0, i.jsxs)("div", {
      className: _.buttonContainer,
      children: [(0, i.jsx)(s.Button, {
        text: E ? f.intl.string(f.t.XyHpKH) : f.intl.string(f.t.l4Emac),
        variant: "primary",
        fullWidth: true,
        icon: s.k$p,
        onClick: () => {
          E ? (S(false), o.Z.unblockUser(e, {
            location: m.DL
          }), j(x.NM.USER_TAKEOVER_MODAL_UNBLOCK), u.Z.showUnblockSuccessToast(e, n)) : (S(true), j(x.NM.USER_TAKEOVER_MODAL_BLOCK), o.Z.blockUser(e, {
            location: m.DL
          }).then(() => {
            u.Z.showBlockSuccessToast(e, n)
          }))
        }
      }), (0, i.jsx)(s.Button, {
        text: O ? f.intl.string(f.t.QvwOJ6) : f.intl.string(f.t["7fHyE6"]),
        variant: "secondary",
        fullWidth: true,
        icon: s.U65,
        onClick: M,
        loading: N,
        disabled: O
      }), (0, i.jsx)(s.Button, {
        text: Z,
        variant: "secondary",
        fullWidth: true,
        icon: s.kBi,
        onClick: () => {
          0 === R ? ((0, c.Z)(m.EI), j(x.NM.USER_TAKEOVER_MODAL_CTL)) : 2 === R ? ((0, c.Z)(m.$l), j(x.NM.USER_TAKEOVER_MODAL_THROUGHLINE)) : ((0, c.Z)(m.n4), j(x.NM.USER_TAKEOVER_MODAL_NO_FILTR))
        }
      })]
    })
  })
}