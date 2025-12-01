/** Chunk was on web.js **/
/** chunk id: 382271, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk518950 = require("./518950.js"),
  Chunk342386 = require("./342386.js"),
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

function I(e) {
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
let T = (e, t) => {
    (0, p.default)(), d.Z.openPrivateChannel({
      recipientIds: e
    }), t()
  },
  A = e => {
    let {
      recipient: t,
      status: n,
      onClose: i
    } = e, {
      avatarSrc: a,
      eventHandlers: s
    } = (0, f.Z)({
      userId: null == t ? true : t.id,
      size: u.EFr.SIZE_56
    }), l = h.ZP.getName(t), c = n === g.Fz.FAIL;
    return (0, r.jsxs)("div", {
      className: O.trialRecipientRow,
      children: [(0, r.jsx)(u.qEK, I({
        imageClassName: o()({
          [O.erroredAvatar]: c
        }),
        src: a,
        "aria-label": l,
        size: u.EFr.SIZE_32
      }, s)), c ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.Text, {
          className: O.errorDisplayName,
          variant: "text-md/medium",
          color: "text-primary",
          children: l
        }), (0, r.jsx)(u.Text, {
          variant: "text-md/medium",
          className: O.userName,
          color: "text-primary",
          children: y.intl.format(y.t.RO3T4B, {
            userName: l
          })
        })]
      }) : (0, r.jsx)(u.Text, {
        variant: "text-md/medium",
        className: O.trialRecipientRowDisplayName,
        color: "text-primary",
        children: l
      }), (0, r.jsx)(u.Button, {
        variant: "secondary",
        size: "sm",
        text: y.intl.string(y.t["g33r/P"]),
        icon: u.kBi,
        onClick: () => T(t.id, i)
      })]
    })
  },
  C = e => {
    let {
      results: t,
      onClose: n,
      isReminderConfirmation: a
    } = e, o = (0, l.e7)([E.Z], () => E.Z.getReferralsRemaining());
    _.default.track(b.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
    let {
      reducedMotion: d
    } = i.useContext(c.Sf);
    if (null === o) return (0, r.jsx)(u.$jN, {});
    let f = () => d.enabled ? {
        src: v.Z,
        type: "image"
      } : {
        rive: u.p8m,
        type: "rive"
      },
      p = () => 0 === t.filter(e => e.status === g.Fz.SUCCESS).length ? y.intl.string(y.t["7VBEue"]) : true === a ? y.intl.string(y.t.GP5lbq) : y.intl.string(y.t.tKCltd),
      h = () => true === a ? y.intl.format(y.t["4gJJfD"], {
        helpdeskArticle: m.Z.getArticleURL(b.BhN.REFERRAL_PROGRAM)
      }) : y.intl.format(y.t.AwGSWl, {
        helpdeskArticle: m.Z.getArticleURL(b.BhN.REFERRAL_PROGRAM)
      }),
      S = () => (0, r.jsx)("div", {
        className: O.trialRecipientContainer,
        children: t.map(e => (0, r.jsx)(A, {
          recipient: e.recipient,
          status: e.status,
          onClose: n
        }, e.recipient.id))
      });
    return (0, r.jsx)(s.ExpressiveModal, {
      graphic: f(),
      gradientColor: "nitro-pink",
      title: p(),
      subtitle: h(),
      onClose: n,
      transitionState: s.Dvm.ENTERED,
      children: S()
    })
  }