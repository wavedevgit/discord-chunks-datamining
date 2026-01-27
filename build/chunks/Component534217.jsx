/** Chunk was on 60667 **/
/** chunk id: 534217, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => T
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk854627 = require("./854627.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk427262 = require("./427262.js"),
  Chunk326084 = require("./326084.js"),
  Chunk851746 = require("./851746.js"),
  Chunk664654 = require("./664654.js"),
  Chunk303682 = require("./303682.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk146449 = require("./146449.js"),
  Chunk544879 = require("./544879.js");

function E(e) {
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
}
let x = e => {
    let {
      user: t
    } = e, {
      avatarSrc: n,
      eventHandlers: i
    } = (0, o.A)({
      userId: t.id,
      size: a._3J.SIZE_24
    });
    return (0, r.jsx)(a.euF, E({
      className: h.bj,
      src: n,
      "aria-label": (0, u.mG)(t),
      size: a._3J.SIZE_24
    }, i), t.id)
  },
  O = e => {
    let {
      slotIndex: t
    } = e;
    return (0, r.jsx)("div", {
      className: h.p,
      children: t
    })
  },
  C = e => {
    let {
      referralSentUsers: t
    } = e;
    return (0, r.jsx)("div", {
      className: h.L$,
      children: (() => {
        let e = [];
        for (let n = 0; n < m.Z; n++)
          if ((null == t ? true : t[n]) !== true) {
            let i = (0, r.jsx)(x, {
              user: t[n]
            }, t[n].id);
            e.push(i)
          } else {
            let t = (0, r.jsx)(O, {
              slotIndex: n + 1
            }, n);
            e.push(t)
          } return e
      })()
    })
  },
  I = e => {
    let {
      nReferralsSent: t
    } = e;
    return (0, r.jsx)(a.a3E, {
      percent: 33.3 * t,
      colorOverride: "#53ac66",
      background: h.cq,
      strokeSize: .8,
      ringColorOverrideClassName: h.e0,
      overlayClassName: t === m.Z ? h.ys : true,
      children: (0, r.jsx)(a._V3, {
        src: b.A,
        height: 93,
        width: 93,
        zoomable: false
      })
    })
  },
  T = e => {
    let {
      className: t
    } = e, {
      referralSentUsers: i
    } = (0, m.J)(), o = (0, s.bG)([p.A], () => p.A.getRecipientStatus()), u = (0, s.bG)([p.A], () => p.A.getHasEligibleFriends()), b = o.size === m.Z && [...o.values()].every(e => e === _.aK.REDEEMED), x = o.size === m.Z;
    return (0, r.jsxs)("div", {
      className: l()(h.kL, t),
      children: [(0, r.jsx)("div", {
        className: h.G3,
        children: (0, r.jsx)(I, {
          nReferralsSent: o.size
        })
      }), (0, r.jsxs)("div", {
        className: h.IH,
        children: [(0, r.jsx)(C, {
          referralSentUsers: i
        }), (0, r.jsxs)("div", {
          className: h.n4,
          children: [(0, r.jsx)(a.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: f.intl.string(f.t.USo4s7)
          }), (0, r.jsx)(a.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: false === u ? f.intl.format(f.t["zWhX/Q"], {
              helpdeskArticle: d.A.getArticleURL(A.MVz.REFERRAL_PROGRAM)
            }) : i.length === m.Z ? true === b ? f.intl.format(f.t["1aEjsH"], {
              helpdeskArticle: d.A.getArticleURL(A.MVz.REFERRAL_PROGRAM)
            }) : f.intl.format(f.t["+u3AOO"], {
              helpdeskArticle: d.A.getArticleURL(A.MVz.REFERRAL_PROGRAM)
            }) : f.intl.format(f.t["omMr+V"], {
              helpdeskArticle: d.A.getArticleURL(A.MVz.REFERRAL_PROGRAM)
            })
          })]
        }), (0, r.jsx)(a.Button, {
          variant: "primary",
          disabled: false === u || true === x,
          text: f.intl.string(f.t.Lm2nFc),
          onClick: () => (e => {
            let {
              startingScreen: t,
              analyticsLocations: i
            } = e;
            c.default.track(A.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
              location_stack: i
            }), (0, a.mMO)(async () => {
              let {
                default: e
              } = await Promise.resolve().then(n.bind(n, 303682));
              return n => {
                var i, l;
                return (0, r.jsx)(e, (i = E({}, n), l = l = {
                  startingScreen: t
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                  }
                  return n
                })(Object(l)).forEach(function(e) {
                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
                }), i))
              }
            })
          })({
            startingScreen: g.SelectFriendsModalScreens.SELECT_FRIENDS,
            analyticsLocations: []
          })
        })]
      })]
    })
  }