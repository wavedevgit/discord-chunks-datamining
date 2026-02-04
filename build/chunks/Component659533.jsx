/** Chunk was on 9207 **/
/** chunk id: 659533, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
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

function I(e) {
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
let N = e => {
    let {
      userRecord: t,
      placement: n
    } = e, {
      avatarSrc: i,
      eventHandlers: l
    } = (0, p.A)({
      userId: null == t ? true : t.id,
      size: d._3J.SIZE_32,
      animateOnHover: true
    }), s = null != t, a = s ? (0, r.jsx)(d.euF, I({
      src: i,
      "aria-label": t.username,
      size: d._3J.SIZE_32
    }, l)) : (0, r.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      className: S.n5,
      children: n
    });
    return (0, r.jsx)(o.m_, {
      text: C.intl.string(C.t.UnKHdo),
      shouldShow: !s,
      children: (0, r.jsx)("div", {
        className: S.Lg,
        children: a
      })
    })
  },
  y = e => {
    let {
      numSentReferrals: t,
      placement: n
    } = e;
    return (0, r.jsxs)("div", {
      className: S.Ip,
      children: [(0, r.jsx)("div", {
        className: S.Ej
      }), (0, r.jsx)("div", {
        className: s()({
          [S.ch]: t > n,
          [S.q_]: t === n
        })
      })]
    })
  },
  v = e => {
    let {
      userRecords: t
    } = e, n = t.length, i = n < 1 ? null : t[0], l = n < 2 ? null : t[1], s = n < 3 ? null : t[2];
    return (0, r.jsxs)("div", {
      className: S.ZM,
      children: [(0, r.jsx)(N, {
        userRecord: i,
        placement: 1
      }), (0, r.jsx)(y, {
        numSentReferrals: n,
        placement: 1
      }), (0, r.jsx)(N, {
        userRecord: l,
        placement: 2
      }), (0, r.jsx)(y, {
        numSentReferrals: n,
        placement: 2
      }), (0, r.jsx)(N, {
        userRecord: s,
        placement: 3
      })]
    })
  },
  j = e => {
    let {
      isInSettings: t = false
    } = e, l = (0, a.bG)([b.A], () => b.A.getRecipientStatus()), {
      referralSentUsers: o
    } = (0, h.J)(), p = i.useMemo(() => o.map(e => new m.A(e)), [o]), N = {
      redeemed: 0,
      converted: 0,
      sent: l.size
    };
    l.forEach(e => {
      e === f.aK.REDEEMED && N.redeemed++, e === f.aK.CONVERTED && (N.redeemed++, N.converted++)
    });
    let y = N.sent === h.Z,
      j = A.A.getArticleURL(x.MVz.REFERRAL_PROGRAM),
      {
        analyticsLocations: P
      } = (0, _.Ay)(u.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
      R = i.useRef(null),
      D = N.sent / h.Z * 100,
      L = (0, r.jsxs)("div", {
        className: S.hE,
        children: [(0, r.jsx)(E.Ay, {
          percentage: D,
          progressCircleVariation: E.BN.NITRO_LOGO,
          iconClassName: s()({
            [S.VC]: !t,
            [S.ER]: t
          })
        }), (0, r.jsxs)("div", {
          className: S.Ns,
          children: [(0, r.jsx)(d.Heading, {
            variant: t ? "heading-xl/extrabold" : "heading-xxl/extrabold",
            className: S.R0,
            children: (0, O.X8)({
              hasSentAll: y
            })
          }), (0, r.jsx)(v, {
            userRecords: p
          }), (0, r.jsx)(d.Text, {
            variant: t ? "text-sm/normal" : "text-lg/medium",
            children: (0, O.dB)({
              helpdeskArticle: j,
              referralsStatuses: N
            })
          }), (0, r.jsx)("div", {
            className: s()(S.Fb, {
              [S.jv]: !t
            }),
            children: (0, r.jsx)(d.wLn, {
              "data-migration-pending": true,
              className: S.r$,
              color: c.XD.CUSTOM,
              onClick: () => (e => {
                let {
                  analyticsLocations: t
                } = e;
                g.default.track(x.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                  location_stack: t
                }), (0, d.mMO)(async () => {
                  let {
                    default: e
                  } = await n.e("26489").then(n.bind(n, 477088));
                  return n => {
                    var i, l;
                    return (0, r.jsx)(e, (i = I({}, n), l = l = {
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
                className: S.Zn,
                children: [(0, r.jsx)("img", {
                  src: T,
                  alt: "",
                  className: S.QH
                }), y ? C.intl.string(C.t.SY9tyI) : C.intl.string(C.t.Lm2nFc)]
              })
            })
          })]
        })]
      }),
      w = N.redeemed === h.Z;
    return (0, r.jsx)(_.f5, {
      value: P,
      children: (0, r.jsx)("div", {
        className: s()({
          [S.f5]: w,
          [S.JY]: !w,
          [S.VX]: !t,
          [S.m$]: w && t
        }),
        children: (0, r.jsx)("div", {
          ref: R,
          className: s()({
            [S.dn]: !t,
            [S.d_]: t,
            [S.kS]: w
          }),
          children: L
        })
      })
    })
  }