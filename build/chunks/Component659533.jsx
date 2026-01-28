/** Chunk was on 5606 **/
/** chunk id: 659533, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk854627 = require("./854627.js"),
  Chunk427157 = require("./427157.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk326084 = require("./326084.js"),
  Chunk851746 = require("./851746.js"),
  Chunk664654 = require("./664654.js"),
  Chunk344904 = require("./344904.jsx"),
  Chunk221688 = require("./221688.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk509117 = require("./509117.js"),
  Chunk6336 = require("./6336.js");

function T(e) {
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
let v = e => {
    let {
      userRecord: t,
      placement: n
    } = e, {
      avatarSrc: i,
      eventHandlers: l
    } = (0, _.A)({
      userId: null == t ? true : t.id,
      size: d._3J.SIZE_32,
      animateOnHover: true
    }), s = null != t, a = s ? (0, r.jsx)(d.euF, T({
      src: i,
      "aria-label": t.username,
      size: d._3J.SIZE_32
    }, l)) : (0, r.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      className: y.n5,
      children: n
    });
    return (0, r.jsx)(o.m_, {
      text: C.intl.string(C.t.UnKHdo),
      shouldShow: !s,
      children: (0, r.jsx)("div", {
        className: y.Lg,
        children: a
      })
    })
  },
  S = e => {
    let {
      numSentReferrals: t,
      placement: n
    } = e;
    return (0, r.jsxs)("div", {
      className: y.Ip,
      children: [(0, r.jsx)("div", {
        className: y.Ej
      }), (0, r.jsx)("div", {
        className: s()({
          [y.ch]: t > n,
          [y.q_]: t === n
        })
      })]
    })
  },
  I = e => {
    let {
      userRecords: t
    } = e, n = t.length, i = n < 1 ? null : t[0], l = n < 2 ? null : t[1], s = n < 3 ? null : t[2];
    return (0, r.jsxs)("div", {
      className: y.ZM,
      children: [(0, r.jsx)(v, {
        userRecord: i,
        placement: 1
      }), (0, r.jsx)(S, {
        numSentReferrals: n,
        placement: 1
      }), (0, r.jsx)(v, {
        userRecord: l,
        placement: 2
      }), (0, r.jsx)(S, {
        numSentReferrals: n,
        placement: 2
      }), (0, r.jsx)(v, {
        userRecord: s,
        placement: 3
      })]
    })
  },
  N = e => {
    let {
      isInSettings: t = false
    } = e, l = (0, a.bG)([h.A], () => h.A.getRecipientStatus()), {
      referralSentUsers: o
    } = (0, A.J)(), _ = i.useMemo(() => o.map(e => new m.A(e)), [o]), v = {
      redeemed: 0,
      converted: 0,
      sent: l.size
    };
    l.forEach(e => {
      e === b.aK.REDEEMED && v.redeemed++, e === b.aK.CONVERTED && (v.redeemed++, v.converted++)
    });
    let S = v.sent === A.Z,
      N = f.A.getArticleURL(O.MVz.REFERRAL_PROGRAM),
      {
        analyticsLocations: P
      } = (0, p.Ay)(u.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
      R = i.useRef(null),
      D = v.sent / A.Z * 100,
      w = (0, r.jsxs)("div", {
        className: y.hE,
        children: [(0, r.jsx)(E.Ay, {
          percentage: D,
          progressCircleVariation: E.BN.NITRO_LOGO,
          iconClassName: s()({
            [y.VC]: !t,
            [y.ER]: t
          })
        }), (0, r.jsxs)("div", {
          className: y.Ns,
          children: [(0, r.jsx)(d.Heading, {
            variant: t ? "heading-xl/extrabold" : "heading-xxl/extrabold",
            className: y.R0,
            children: (0, x.X8)({
              hasSentAll: S
            })
          }), (0, r.jsx)(I, {
            userRecords: _
          }), (0, r.jsx)(d.Text, {
            variant: t ? "text-sm/normal" : "text-lg/medium",
            children: (0, x.dB)({
              helpdeskArticle: N,
              referralsStatuses: v
            })
          }), (0, r.jsx)("div", {
            className: s()(y.Fb, {
              [y.jv]: !t
            }),
            children: (0, r.jsx)(d.wLn, {
              "data-migration-pending": true,
              className: y.r$,
              color: c.XD.CUSTOM,
              onClick: () => (e => {
                let {
                  analyticsLocations: t
                } = e;
                g.default.track(O.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                  location_stack: t
                }), (0, d.mMO)(async () => {
                  let {
                    default: e
                  } = await n.e("26489").then(n.bind(n, 477088));
                  return n => {
                    var i, l;
                    return (0, r.jsx)(e, (i = T({}, n), l = l = {
                      sourceAnalyticsLocations: t
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
                analyticsLocations: P
              }),
              onlyShineOnHover: true,
              children: (0, r.jsxs)("div", {
                className: y.Zn,
                children: [(0, r.jsx)("img", {
                  src: j,
                  alt: "",
                  className: y.QH
                }), S ? C.intl.string(C.t.SY9tyI) : C.intl.string(C.t.Lm2nFc)]
              })
            })
          })]
        })]
      }),
      L = v.redeemed === A.Z;
    return (0, r.jsx)(p.f5, {
      value: P,
      children: (0, r.jsx)("div", {
        className: s()({
          [y.f5]: L,
          [y.JY]: !L,
          [y.VX]: !t,
          [y.m$]: L && t
        }),
        children: (0, r.jsx)("div", {
          ref: R,
          className: s()({
            [y.dn]: !t,
            [y.d_]: t,
            [y.kS]: L
          }),
          children: w
        })
      })
    })
  }