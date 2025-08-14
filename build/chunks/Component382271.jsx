/** Chunk was on 4048 **/
/** chunk id: 382271, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  m: () => S
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk257465 = require("./257465.jsx"),
  Chunk667202 = require("./667202.jsx"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk37234 = require("./37234.js"),
  Chunk518950 = require("./518950.js"),
  Chunk819640 = require("./819640.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk51144 = require("./51144.js"),
  Chunk281494 = require("./281494.js"),
  Chunk276444 = require("./276444.js"),
  Chunk263885 = require("./263885.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk734501 = require("./734501.js"),
  Chunk690813 = require("./690813.js");
let N = e => {
    let {
      recipient: t,
      status: r,
      onClose: i
    } = e, {
      avatarSrc: n,
      eventHandlers: l
    } = (0, p.Z)({
      userId: null == t ? true : t.id,
      size: u.EFr.SIZE_56
    }), o = _.ZP.getName(t), c = r === j.Fz.FAIL;
    return (0, a.jsxs)("div", {
      className: C.trialRecipientRow,
      children: [(0, a.jsx)(u.qEK, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), a.forEach(function(t) {
            var a;
            a = r[t], t in e ? Object.defineProperty(e, t, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = a
          })
        }
        return e
      }({
        imageClassName: s()({
          [C.erroredAvatar]: c
        }),
        src: n,
        "aria-label": o,
        size: u.EFr.SIZE_32
      }, l)), c ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.Text, {
          className: C.errorDisplayName,
          variant: "text-md/medium",
          color: "text-primary",
          children: o
        }), (0, a.jsx)(u.Text, {
          variant: "text-md/medium",
          className: C.userName,
          color: "text-primary",
          children: E.intl.format(E.t.RO3T4O, {
            userName: o
          })
        })]
      }) : (0, a.jsx)(u.Text, {
        variant: "text-md/medium",
        className: C.trialRecipientRowDisplayName,
        color: "text-primary",
        children: o
      }), (0, a.jsx)(u.zxk, {
        variant: "secondary",
        size: "sm",
        text: E.intl.string(E.t["E+yYpq"]),
        icon: u.kBi,
        onClick: () => {
          var e;
          return e = t.id, void(x.Z.hasLayers() && (0, f.xf)(), m.Z.openPrivateChannel({
            recipientIds: e
          }), i())
        }
      })]
    })
  },
  S = e => {
    let {
      results: t,
      onClose: r
    } = e, n = (0, l.e7)([g.Z], () => g.Z.getReferralsRemaining());
    b.default.track(v.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
    let {
      reducedMotion: s
    } = i.useContext(d.Sf);
    return null === n ? (0, a.jsx)(u.$jN, {}) : (0, a.jsx)(c.I, {
      graphic: s.enabled ? {
        src: y.Z,
        type: "image"
      } : {
        rive: u.p8m,
        type: "rive"
      },
      gradientColor: "nitro-pink",
      title: (() => {
        let e = E.intl.string(E.t.Pcb7KC),
          r = t.filter(e => e.status === j.Fz.SUCCESS).length;
        return n > 0 && (e = E.intl.formatToPlainString(E.t.iWtOfH, {
          numReferrals: r
        })), 0 === r && (e = E.intl.string(E.t["7VBEub"])), e
      })(),
      subtitle: E.intl.format(E.t.CZaMHh, {
        days: R.p,
        helpdeskArticle: h.Z.getArticleURL(v.BhN.REFERRAL_PROGRAM)
      }),
      onClose: r,
      transitionState: o.D.ENTERED,
      children: (0, a.jsx)("div", {
        className: C.trialRecipientContainer,
        children: t.map(e => (0, a.jsx)(N, {
          recipient: e.recipient,
          status: e.status,
          onClose: r
        }, e.recipient.id))
      })
    })
  }