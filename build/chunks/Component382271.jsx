/** Chunk was on web.js **/
/** chunk id: 382271, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => N
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
  Chunk726667 = require("./726667.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}
let A = (e, t) => {
    (0, p.Z)(), f.Z.openPrivateChannel({
      recipientIds: e
    }), t()
  },
  C = e => {
    let {
      recipient: t,
      status: n,
      onClose: i
    } = e, {
      avatarSrc: a,
      eventHandlers: s
    } = (0, _.Z)({
      userId: null == t ? true : t.id,
      size: d.EFr.SIZE_56
    }), l = g.ZP.getName(t), c = n === E.Fz.FAIL;
    return (0, r.jsxs)("div", {
      className: v.trialRecipientRow,
      children: [(0, r.jsx)(d.qEK, S({
        imageClassName: o()({
          [v.erroredAvatar]: c
        }),
        src: a,
        "aria-label": l,
        size: d.EFr.SIZE_32
      }, s)), c ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.Text, {
          className: v.errorDisplayName,
          variant: "text-md/medium",
          color: "text-primary",
          children: l
        }), (0, r.jsx)(d.Text, {
          variant: "text-md/medium",
          className: v.userName,
          color: "text-primary",
          children: O.intl.format(O.t.RO3T4O, {
            userName: l
          })
        })]
      }) : (0, r.jsx)(d.Text, {
        variant: "text-md/medium",
        className: v.trialRecipientRowDisplayName,
        color: "text-primary",
        children: l
      }), (0, r.jsx)(d.zxk, {
        variant: "secondary",
        size: "sm",
        text: O.intl.string(O.t["g33r/P"]),
        icon: d.kBi,
        onClick: () => A(t.id, i)
      })]
    })
  },
  N = e => {
    let {
      results: t,
      onClose: n,
      isReminderConfirmation: a
    } = e, o = (0, s.e7)([b.Z], () => b.Z.getReferralsRemaining());
    h.default.track(y.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
    let {
      reducedMotion: f
    } = i.useContext(u.Sf);
    if (null === o) return (0, r.jsx)(d.$jN, {});
    let _ = () => f.enabled ? {
        src: I.Z,
        type: "image"
      } : {
        rive: d.p8m,
        type: "rive"
      },
      p = () => 0 === t.filter(e => e.status === E.Fz.SUCCESS).length ? O.intl.string(O.t["7VBEub"]) : true === a ? O.intl.string(O.t.GP5lbm) : O.intl.string(O.t.tKCltb),
      g = () => true === a ? O.intl.format(O.t["4gJJfH"], {
        helpdeskArticle: m.Z.getArticleURL(y.BhN.REFERRAL_PROGRAM)
      }) : O.intl.format(O.t.AwGSWl, {
        helpdeskArticle: m.Z.getArticleURL(y.BhN.REFERRAL_PROGRAM)
      }),
      T = () => (0, r.jsx)("div", {
        className: v.trialRecipientContainer,
        children: t.map(e => (0, r.jsx)(C, {
          recipient: e.recipient,
          status: e.status,
          onClose: n
        }, e.recipient.id))
      });
    return (0, r.jsx)(c.I, {
      graphic: _(),
      gradientColor: "nitro-pink",
      title: p(),
      subtitle: g(),
      onClose: n,
      transitionState: l.D.ENTERED,
      children: T()
    })
  }