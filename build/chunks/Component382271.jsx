/** Chunk was on 84533 **/
/** chunk id: 382271, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  m: () => Z
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  n = require.n(Chunk120356),
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
let C = e => {
    let {
      recipient: t,
      status: a,
      onClose: i
    } = e, {
      avatarSrc: s,
      eventHandlers: l
    } = (0, p.Z)({
      userId: null == t ? true : t.id,
      size: u.EFr.SIZE_56
    }), o = g.ZP.getName(t), c = a === v.Fz.FAIL;
    return (0, r.jsxs)("div", {
      className: S.trialRecipientRow,
      children: [(0, r.jsx)(u.qEK, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(a);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
            return Object.getOwnPropertyDescriptor(a, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = a[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        imageClassName: n()({
          [S.erroredAvatar]: c
        }),
        src: s,
        "aria-label": o,
        size: u.EFr.SIZE_32
      }, l)), c ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.Text, {
          className: S.errorDisplayName,
          variant: "text-md/medium",
          color: "text-primary",
          children: o
        }), (0, r.jsx)(u.Text, {
          variant: "text-md/medium",
          className: S.userName,
          color: "text-primary",
          children: y.intl.format(y.t.RO3T4O, {
            userName: o
          })
        })]
      }) : (0, r.jsx)(u.Text, {
        variant: "text-md/medium",
        className: S.trialRecipientRowDisplayName,
        color: "text-primary",
        children: o
      }), (0, r.jsx)(u.zxk, {
        variant: "secondary",
        size: "sm",
        text: y.intl.string(y.t["E+yYpq"]),
        icon: u.kBi,
        onClick: () => {
          var e;
          return e = t.id, void(f.Z.hasLayers() && (0, x.xf)(), m.Z.openPrivateChannel({
            recipientIds: e
          }), i())
        }
      })]
    })
  },
  Z = e => {
    let {
      results: t,
      onClose: a
    } = e, s = (0, l.e7)([b.Z], () => b.Z.getReferralsRemaining());
    h.default.track(R.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
    let {
      reducedMotion: n
    } = i.useContext(d.Sf);
    return null === s ? (0, r.jsx)(u.$jN, {}) : (0, r.jsx)(c.I, {
      graphic: n.enabled ? {
        src: N.Z,
        type: "image"
      } : {
        rive: u.p8m,
        type: "rive"
      },
      gradientColor: "nitro-pink",
      title: (() => {
        let e = y.intl.string(y.t.Pcb7KC),
          a = t.filter(e => e.status === v.Fz.SUCCESS).length;
        return s > 0 && (e = y.intl.formatToPlainString(y.t.iWtOfH, {
          numReferrals: a
        })), 0 === a && (e = y.intl.string(y.t["7VBEub"])), e
      })(),
      subtitle: y.intl.format(y.t.CZaMHh, {
        days: E.p,
        helpdeskArticle: j.Z.getArticleURL(R.BhN.REFERRAL_PROGRAM)
      }),
      onClose: a,
      transitionState: o.D.ENTERED,
      children: (0, r.jsx)("div", {
        className: S.trialRecipientContainer,
        children: t.map(e => (0, r.jsx)(C, {
          recipient: e.recipient,
          status: e.status,
          onClose: a
        }, e.recipient.id))
      })
    })
  }