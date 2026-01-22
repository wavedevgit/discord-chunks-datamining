/** Chunk was on web.js **/
/** chunk id: 636184, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  h: () => C
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk854627 = require("./854627.js"),
  Chunk12901 = require("./12901.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk427262 = require("./427262.js"),
  Chunk326084 = require("./326084.js"),
  Chunk851746 = require("./851746.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk185914 = require("./185914.js"),
  Chunk299148 = require("./299148.js");

function v(e, t, n) {
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
      v(e, t, n[t])
    })
  }
  return e
}
let I = (e, t) => {
    (0, p.default)(), d.A.openPrivateChannel({
      recipientIds: e
    }), t()
  },
  T = e => {
    let {
      recipient: t,
      status: n,
      onClose: i
    } = e, {
      avatarSrc: a,
      eventHandlers: o
    } = (0, f.A)({
      userId: null == t ? true : t.id,
      size: u._3J.SIZE_56
    }), l = m.Ay.getName(t), c = n === g.o.FAIL;
    return (0, r.jsxs)("div", {
      className: O.w4,
      children: [(0, r.jsx)(u.euF, S({
        imageClassName: s()({
          [O.jN]: c
        }),
        src: a,
        "aria-label": l,
        size: u._3J.SIZE_32
      }, o)), c ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.Text, {
          className: O.E0,
          variant: "text-md/medium",
          color: "text-strong",
          children: l
        }), (0, r.jsx)(u.Text, {
          variant: "text-md/medium",
          className: O.nT,
          color: "text-strong",
          children: y.intl.format(y.t.RO3T4B, {
            userName: l
          })
        })]
      }) : (0, r.jsx)(u.Text, {
        variant: "text-md/medium",
        className: O.Pm,
        color: "text-strong",
        children: l
      }), (0, r.jsx)(u.Button, {
        variant: "secondary",
        size: "sm",
        text: y.intl.string(y.t["g33r/P"]),
        icon: u.oyn,
        onClick: () => I(t.id, i)
      })]
    })
  },
  C = e => {
    let {
      results: t,
      onClose: n,
      isReminderConfirmation: a
    } = e, s = (0, l.bG)([E.A], () => E.A.getReferralsRemaining());
    _.default.track(b.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
    let {
      reducedMotion: d
    } = i.useContext(c.CZ);
    if (null === s) return (0, r.jsx)(u.y$y, {});
    let f = () => d.enabled ? {
        src: A.A,
        type: "image"
      } : {
        rive: u.lBW,
        type: "rive"
      },
      p = () => 0 === t.filter(e => e.status === g.o.SUCCESS).length ? y.intl.string(y.t["7VBEue"]) : true === a ? y.intl.string(y.t.GP5lbq) : y.intl.string(y.t.tKCltd),
      m = () => true === a ? y.intl.format(y.t["4gJJfD"], {
        helpdeskArticle: h.A.getArticleURL(b.MVz.REFERRAL_PROGRAM)
      }) : y.intl.format(y.t.AwGSWl, {
        helpdeskArticle: h.A.getArticleURL(b.MVz.REFERRAL_PROGRAM)
      }),
      v = () => (0, r.jsx)("div", {
        className: O.Hz,
        children: t.map(e => (0, r.jsx)(T, {
          recipient: e.recipient,
          status: e.status,
          onClose: n
        }, e.recipient.id))
      });
    return (0, r.jsx)(o.ExpressiveModal, {
      graphic: f(),
      gradientColor: "nitro-pink",
      title: p(),
      subtitle: m(),
      onClose: n,
      transitionState: o.ip4.ENTERED,
      children: v()
    })
  }