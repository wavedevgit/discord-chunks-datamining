/** Chunk was on 59650 **/
/** chunk id: 463439, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function m(t) {
  let {
    senderId: e,
    channelId: n,
    hasReported: m,
    onReport: T,
    trackAnalyticsEvent: b
  } = t, A = (0, a.e7)([E.Z], () => E.Z.isBlocked(e)), [C, O] = i.useState(A), v = (0, d.o)(), I = (0, d.Q)(), [S, j] = i.useState(false), y = (0, h.q)(n), M = i.useMemo(() => v ? 0 : I ? 2 : 1, [v, I]), R = async () => {
    null != y && (j(true), await (0, l.J7)(y, () => {
      u.Z.showReportSuccessToast(e, n), T()
    }, () => {
      u.Z.showFailedToast()
    }), j(false), b(_.NM.USER_TAKEOVER_MODAL_REPORT))
  }, w = i.useMemo(() => {
    switch (M) {
      case 0:
        return x.intl.string(x.t.sZf6c3);
      case 2:
        return x.intl.string(x.t.HQ2nKi);
      default:
        return x.intl.string(x.t["65XQam"])
    }
  }, [M]);
  return (0, r.jsx)(p.Z, {
    heroImageSrc: N,
    heroImageAlt: x.intl.string(x.t.RVyYCA),
    header: x.intl.string(x.t["mWO+ys"]),
    description: x.intl.string(x.t.S0XtKC),
    children: (0, r.jsxs)("div", {
      className: f.buttonContainer,
      children: [(0, r.jsx)(s.zxk, {
        text: C ? x.intl.string(x.t.XyHpKC) : x.intl.string(x.t.l4EmaW),
        variant: "primary",
        fullWidth: true,
        icon: s.k$p,
        onClick: () => {
          C ? (O(false), o.Z.unblockUser(e, {
            location: g.DL
          }), b(_.NM.USER_TAKEOVER_MODAL_UNBLOCK), u.Z.showUnblockSuccessToast(e, n)) : (O(true), b(_.NM.USER_TAKEOVER_MODAL_BLOCK), o.Z.blockUser(e, {
            location: g.DL
          }).then(() => {
            u.Z.showBlockSuccessToast(e, n)
          }))
        }
      }), (0, r.jsx)(s.zxk, {
        text: m ? x.intl.string(x.t.QvwOJy) : x.intl.string(x.t["7fHyEx"]),
        variant: "secondary",
        fullWidth: true,
        icon: s.U65,
        onClick: R,
        loading: S,
        disabled: m
      }), (0, r.jsx)(s.zxk, {
        text: w,
        variant: "secondary",
        fullWidth: true,
        icon: s.kBi,
        onClick: () => {
          0 === M ? ((0, c.Z)(g.EI), b(_.NM.USER_TAKEOVER_MODAL_CTL)) : 2 === M ? ((0, c.Z)(g.$l), b(_.NM.USER_TAKEOVER_MODAL_THROUGHLINE)) : ((0, c.Z)(g.n4), b(_.NM.USER_TAKEOVER_MODAL_NO_FILTR))
        }
      })]
    })
  })
}