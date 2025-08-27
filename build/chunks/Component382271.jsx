/** Chunk was on web.js **/
/** chunk id: 382271, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => R
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk734501 = require("./734501.js"),
  Chunk690813 = require("./690813.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}
let C = (e, t) => {
    h.Z.hasLayers() && (0, _.xf)(), f.Z.openPrivateChannel({
      recipientIds: e
    }), t()
  },
  N = e => {
    let {
      recipient: t,
      status: n,
      onClose: i
    } = e, {
      avatarSrc: a,
      eventHandlers: s
    } = (0, p.Z)({
      userId: null == t ? true : t.id,
      size: d.EFr.SIZE_56
    }), l = E.ZP.getName(t), c = n === b.Fz.FAIL;
    return (0, r.jsxs)("div", {
      className: I.trialRecipientRow,
      children: [(0, r.jsx)(d.qEK, A({
        imageClassName: o()({
          [I.erroredAvatar]: c
        }),
        src: a,
        "aria-label": l,
        size: d.EFr.SIZE_32
      }, s)), c ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.Text, {
          className: I.errorDisplayName,
          variant: "text-md/medium",
          color: "text-primary",
          children: l
        }), (0, r.jsx)(d.Text, {
          variant: "text-md/medium",
          className: I.userName,
          color: "text-primary",
          children: v.intl.format(v.t.RO3T4O, {
            userName: l
          })
        })]
      }) : (0, r.jsx)(d.Text, {
        variant: "text-md/medium",
        className: I.trialRecipientRowDisplayName,
        color: "text-primary",
        children: l
      }), (0, r.jsx)(d.zxk, {
        variant: "secondary",
        size: "sm",
        text: v.intl.string(v.t["E+yYpq"]),
        icon: d.kBi,
        onClick: () => C(t.id, i)
      })]
    })
  },
  R = e => {
    let {
      results: t,
      onClose: n,
      isReminderConfirmation: a
    } = e, o = (0, s.e7)([y.Z], () => y.Z.getReferralsRemaining());
    m.default.track(O.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
    let {
      reducedMotion: f
    } = i.useContext(u.Sf);
    if (null === o) return (0, r.jsx)(d.$jN, {});
    let _ = () => f.enabled ? {
        src: T.Z,
        type: "image"
      } : {
        rive: d.p8m,
        type: "rive"
      },
      p = () => 0 === t.filter(e => e.status === b.Fz.SUCCESS).length ? v.intl.string(v.t["7VBEub"]) : true === a ? v.intl.string(v.t.GP5lbm) : v.intl.string(v.t.tKCltb),
      h = () => true === a ? v.intl.format(v.t["4gJJfH"], {
        helpdeskArticle: g.Z.getArticleURL(O.BhN.REFERRAL_PROGRAM)
      }) : v.intl.format(v.t.AwGSWl, {
        helpdeskArticle: g.Z.getArticleURL(O.BhN.REFERRAL_PROGRAM)
      }),
      E = () => (0, r.jsx)("div", {
        className: I.trialRecipientContainer,
        children: t.map(e => (0, r.jsx)(N, {
          recipient: e.recipient,
          status: e.status,
          onClose: n
        }, e.recipient.id))
      });
    return (0, r.jsx)(c.I, {
      graphic: _(),
      gradientColor: "nitro-pink",
      title: p(),
      subtitle: h(),
      onClose: n,
      transitionState: l.D.ENTERED,
      children: E()
    })
  }