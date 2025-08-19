/** Chunk was on 84533 **/
/** chunk id: 382271, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  m: () => w
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
let Z = e => {
    let {
      recipient: t,
      status: r,
      onClose: s
    } = e, {
      avatarSrc: n,
      eventHandlers: l
    } = (0, f.Z)({
      userId: null == t ? true : t.id,
      size: u.EFr.SIZE_56
    }), c = j.ZP.getName(t), d = r === v.Fz.FAIL;
    return (0, a.jsxs)("div", {
      className: S.trialRecipientRow,
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
        imageClassName: i()({
          [S.erroredAvatar]: d
        }),
        src: n,
        "aria-label": c,
        size: u.EFr.SIZE_32
      }, l)), d ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.Text, {
          className: S.errorDisplayName,
          variant: "text-md/medium",
          color: "text-primary",
          children: c
        }), (0, a.jsx)(u.Text, {
          variant: "text-md/medium",
          className: S.userName,
          color: "text-primary",
          children: E.intl.format(E.t.RO3T4O, {
            userName: c
          })
        })]
      }) : (0, a.jsx)(u.Text, {
        variant: "text-md/medium",
        className: S.trialRecipientRowDisplayName,
        color: "text-primary",
        children: c
      }), (0, a.jsx)(u.zxk, {
        variant: "secondary",
        size: "sm",
        text: E.intl.string(E.t["E+yYpq"]),
        icon: u.kBi,
        onClick: () => {
          var e;
          return e = t.id, void(x.Z.hasLayers() && (0, h.xf)(), m.Z.openPrivateChannel({
            recipientIds: e
          }), s())
        }
      })]
    })
  },
  w = e => {
    let {
      results: t,
      onClose: r,
      isReminderConfirmation: n
    } = e, i = (0, l.e7)([N.Z], () => N.Z.getReferralsRemaining());
    g.default.track(b.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
    let {
      reducedMotion: m
    } = s.useContext(o.Sf);
    return null === i ? (0, a.jsx)(u.$jN, {}) : (0, a.jsx)(d.I, {
      graphic: m.enabled ? {
        src: y.Z,
        type: "image"
      } : {
        rive: u.p8m,
        type: "rive"
      },
      gradientColor: "nitro-pink",
      title: (() => {
        let e = t.filter(e => e.status === v.Fz.SUCCESS).length;
        return 0 === e ? E.intl.string(E.t["7VBEub"]) : true === n ? E.intl.string(E.t.GP5lbm) : i > 0 ? E.intl.formatToPlainString(E.t.iWtOfH, {
          numReferrals: e
        }) : E.intl.string(E.t.Pcb7KC)
      })(),
      subtitle: true === n ? E.intl.format(E.t["4gJJfH"], {
        helpdeskArticle: p.Z.getArticleURL(b.BhN.REFERRAL_PROGRAM)
      }) : E.intl.format(E.t.CZaMHh, {
        days: R.p,
        helpdeskArticle: p.Z.getArticleURL(b.BhN.REFERRAL_PROGRAM)
      }),
      onClose: r,
      transitionState: c.D.ENTERED,
      children: (0, a.jsx)("div", {
        className: S.trialRecipientContainer,
        children: t.map(e => (0, a.jsx)(Z, {
          recipient: e.recipient,
          status: e.status,
          onClose: r
        }, e.recipient.id))
      })
    })
  }