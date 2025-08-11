/** Chunk was on 5749 **/
/** chunk id: 463439, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk948582 = require("./948582.js"),
  Chunk149355 = require("./149355.js");

function O(t) {
  let {
    senderId: e,
    channelId: n,
    hasReported: O,
    onReport: v,
    trackAnalyticsEvent: j
  } = t, T = (0, a.e7)([x.Z], () => x.Z.isBlocked(e)), [E, y] = r.useState(T), S = (0, d.o)(), A = (0, d.Q)(), [N, C] = r.useState(false), k = (0, h.q)(n), I = r.useMemo(() => S ? 0 : A ? 2 : 1, [S, A]), M = () => {
    y(true), j(p.NM.USER_TAKEOVER_MODAL_BLOCK), o.Z.blockUser(e, {
      location: m.DL
    }).then(() => {
      u.Z.showBlockSuccessToast(e, n)
    })
  }, R = () => {
    y(false), o.Z.unblockUser(e, {
      location: m.DL
    }), j(p.NM.USER_TAKEOVER_MODAL_UNBLOCK), u.Z.showUnblockSuccessToast(e, n)
  }, Z = async () => {
    null != k && (C(true), await (0, l.J7)(k, () => {
      u.Z.showReportSuccessToast(e, n), v()
    }, () => {
      u.Z.showFailedToast()
    }), C(false), j(p.NM.USER_TAKEOVER_MODAL_REPORT))
  }, w = t => {
    0 === t ? ((0, c.Z)(m.EI), j(p.NM.USER_TAKEOVER_MODAL_CTL)) : 2 === t ? ((0, c.Z)(m.$l), j(p.NM.USER_TAKEOVER_MODAL_THROUGHLINE)) : ((0, c.Z)(m.n4), j(p.NM.USER_TAKEOVER_MODAL_NO_FILTR))
  }, L = r.useMemo(() => {
    switch (I) {
      case 0:
        return f.intl.string(f.t.sZf6c3);
      case 2:
        return f.intl.string(f.t.HQ2nKi);
      default:
        return f.intl.string(f.t["65XQam"])
    }
  }, [I]);
  return (0, i.jsx)(g.Z, {
    heroImageSrc: b,
    heroImageAlt: f.intl.string(f.t.RVyYCA),
    header: f.intl.string(f.t["mWO+ys"]),
    description: f.intl.string(f.t.S0XtKC),
    children: (0, i.jsxs)("div", {
      className: _.buttonContainer,
      children: [(0, i.jsx)(s.zxk, {
        text: E ? f.intl.string(f.t.XyHpKC) : f.intl.string(f.t.l4EmaW),
        variant: "primary",
        fullWidth: true,
        icon: s.k$p,
        onClick: () => {
          E ? R() : M()
        }
      }), (0, i.jsx)(s.zxk, {
        text: O ? f.intl.string(f.t.QvwOJy) : f.intl.string(f.t["7fHyEx"]),
        variant: "secondary",
        fullWidth: true,
        icon: s.U65,
        onClick: Z,
        loading: N,
        disabled: O
      }), (0, i.jsx)(s.zxk, {
        text: L,
        variant: "secondary",
        fullWidth: true,
        icon: s.kBi,
        onClick: () => w(I)
      })]
    })
  })
}