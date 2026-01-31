/** Chunk was on 64935 **/
/** chunk id: 636184, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  h: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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
let x = e => {
    let {
      recipient: t,
      status: n,
      onClose: i
    } = e, {
      avatarSrc: l,
      eventHandlers: s
    } = (0, p.A)({
      userId: null == t ? true : t.id,
      size: u._3J.SIZE_56
    }), o = _.Ay.getName(t), c = n === h.o.FAIL;
    return (0, r.jsxs)("div", {
      className: v.w4,
      children: [(0, r.jsx)(u.euF, function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        imageClassName: a()({
          [v.jN]: c
        }),
        src: l,
        "aria-label": o,
        size: u._3J.SIZE_32
      }, s)), c ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.Text, {
          className: v.E0,
          variant: "text-md/medium",
          color: "text-strong",
          children: o
        }), (0, r.jsx)(u.Text, {
          variant: "text-md/medium",
          className: v.nT,
          color: "text-strong",
          children: A.intl.format(A.t.RO3T4B, {
            userName: o
          })
        })]
      }) : (0, r.jsx)(u.Text, {
        variant: "text-md/medium",
        className: v.Pm,
        color: "text-strong",
        children: o
      }), (0, r.jsx)(u.Button, {
        variant: "secondary",
        size: "sm",
        text: A.intl.string(A.t["g33r/P"]),
        icon: u.oyn,
        onClick: () => {
          var e;
          return e = t.id, void((0, m.default)(), d.A.openPrivateChannel({
            recipientIds: e
          }), i())
        }
      })]
    })
  },
  E = e => {
    let {
      results: t,
      onClose: n,
      isReminderConfirmation: l
    } = e, a = (0, o.bG)([b.A], () => b.A.getReferralsRemaining());
    f.default.track(y.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED);
    let {
      reducedMotion: d
    } = i.useContext(c.CZ);
    return null === a ? (0, r.jsx)(u.y$y, {}) : (0, r.jsx)(s.ExpressiveModal, {
      graphic: d.enabled ? {
        src: O.A,
        type: "image"
      } : {
        rive: u.lBW,
        type: "rive"
      },
      gradientColor: "nitro-pink",
      title: 0 === t.filter(e => e.status === h.o.SUCCESS).length ? A.intl.string(A.t["7VBEue"]) : true === l ? A.intl.string(A.t.GP5lbq) : A.intl.string(A.t.tKCltd),
      subtitle: true === l ? A.intl.format(A.t["4gJJfD"], {
        helpdeskArticle: g.A.getArticleURL(y.MVz.REFERRAL_PROGRAM)
      }) : A.intl.format(A.t.AwGSWl, {
        helpdeskArticle: g.A.getArticleURL(y.MVz.REFERRAL_PROGRAM)
      }),
      onClose: n,
      transitionState: s.ip4.ENTERED,
      children: (0, r.jsx)("div", {
        className: v.Hz,
        children: t.map(e => (0, r.jsx)(x, {
          recipient: e.recipient,
          status: e.status,
          onClose: n
        }, e.recipient.id))
      })
    })
  }