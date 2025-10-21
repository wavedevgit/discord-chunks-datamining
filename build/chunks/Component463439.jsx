/** Chunk was on 5749 **/
/** chunk id: 463439, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
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
  Chunk581697 = require("./581697.js"),
  Chunk149355 = require("./149355.js");

function O(t) {
  let {
    senderId: e,
    channelId: n,
    hasReported: O,
    onReport: v,
    trackAnalyticsEvent: j
  } = t, T = (0, a.e7)([p.Z], () => p.Z.isBlocked(e)), [E, y] = r.useState(T), S = (0, d.o)(), A = (0, d.Q)(), [N, C] = r.useState(false), I = (0, g.q)(n), M = r.useMemo(() => S ? 0 : A ? 2 : 1, [S, A]), R = async () => {
    null != I && (C(true), await (0, l.J7)(I, () => {
      u.Z.showReportSuccessToast(e, n), v()
    }, () => {
      u.Z.showFailedToast()
    }), C(false), j(x.NM.USER_TAKEOVER_MODAL_REPORT))
  }, Z = r.useMemo(() => {
    switch (M) {
      case 0:
        return _.intl.string(_.t.sZf6c3);
      case 2:
        return _.intl.string(_.t.HQ2nKi);
      default:
        return _.intl.string(_.t["65XQam"])
    }
  }, [M]);
  return (0, i.jsx)(h.Z, {
    heroImageSrc: b,
    heroImageAlt: _.intl.string(_.t.RVyYCA),
    header: _.intl.string(_.t["mWO+ys"]),
    description: _.intl.string(_.t.S0XtKC),
    children: (0, i.jsxs)("div", {
      className: f.buttonContainer,
      children: [(0, i.jsx)(s.Button, {
        text: E ? _.intl.string(_.t.XyHpKC) : _.intl.string(_.t.l4EmaW),
        variant: "primary",
        fullWidth: true,
        icon: s.k$p,
        onClick: () => {
          E ? (y(false), o.Z.unblockUser(e, {
            location: m.DL
          }), j(x.NM.USER_TAKEOVER_MODAL_UNBLOCK), u.Z.showUnblockSuccessToast(e, n)) : (y(true), j(x.NM.USER_TAKEOVER_MODAL_BLOCK), o.Z.blockUser(e, {
            location: m.DL
          }).then(() => {
            u.Z.showBlockSuccessToast(e, n)
          }))
        }
      }), (0, i.jsx)(s.Button, {
        text: O ? _.intl.string(_.t.QvwOJy) : _.intl.string(_.t["7fHyEx"]),
        variant: "secondary",
        fullWidth: true,
        icon: s.U65,
        onClick: R,
        loading: N,
        disabled: O
      }), (0, i.jsx)(s.Button, {
        text: Z,
        variant: "secondary",
        fullWidth: true,
        icon: s.kBi,
        onClick: () => {
          0 === M ? ((0, c.Z)(m.EI), j(x.NM.USER_TAKEOVER_MODAL_CTL)) : 2 === M ? ((0, c.Z)(m.$l), j(x.NM.USER_TAKEOVER_MODAL_THROUGHLINE)) : ((0, c.Z)(m.n4), j(x.NM.USER_TAKEOVER_MODAL_NO_FILTR))
        }
      })]
    })
  })
}