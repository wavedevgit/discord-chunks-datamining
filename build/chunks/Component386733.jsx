/** Chunk was on 30202 **/
/** chunk id: 386733, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk518950 = require("./518950.js"),
  Chunk598077 = require("./598077.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk281494 = require("./281494.js"),
  Chunk276444 = require("./276444.js"),
  Chunk796634 = require("./796634.js"),
  Chunk119269 = require("./119269.jsx"),
  Chunk938736 = require("./938736.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk120472 = require("./120472.js"),
  Chunk691766 = require("./691766.js");

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let I = e => {
    let {
      userRecord: t,
      placement: n
    } = e, {
      avatarSrc: r,
      eventHandlers: s
    } = (0, m.Z)({
      userId: null == t ? true : t.id,
      size: c.EFr.SIZE_32,
      animateOnHover: true
    }), a = null != t, l = a ? (0, i.jsx)(c.qEK, S({
      src: r,
      "aria-label": t.username,
      size: c.EFr.SIZE_32
    }, s)) : (0, i.jsx)(c.X6q, {
      variant: "heading-md/semibold",
      className: O.userAvatarProgressBarUnitNum,
      children: n
    });
    return (0, i.jsx)(c.ua7, {
      text: C.intl.string(C.t.UnKHdn),
      shouldShow: !a,
      tooltipContentClassName: O.unsentTooltipContent,
      children: e => (0, i.jsx)("div", T(S({
        className: O.userAvatarProgressBarUnit
      }, e), {
        children: l
      }))
    })
  },
  N = e => {
    let {
      numSentReferrals: t,
      placement: n
    } = e;
    return (0, i.jsxs)("div", {
      className: O.avatarProgressBarUnitConnectorContainer,
      children: [(0, i.jsx)("div", {
        className: O.avatarProgressBarUnitConnectorBase
      }), (0, i.jsx)("div", {
        className: a()({
          [O.fullHighlight]: t > n,
          [O.halfHighlight]: t === n
        })
      })]
    })
  },
  y = e => {
    let {
      userRecords: t
    } = e, n = t.length, r = n < 1 ? null : t[0], s = n < 2 ? null : t[1], a = n < 3 ? null : t[2];
    return (0, i.jsxs)("div", {
      className: O.userAvatarProgressBarContainer,
      children: [(0, i.jsx)(I, {
        userRecord: r,
        placement: 1
      }), (0, i.jsx)(N, {
        numSentReferrals: n,
        placement: 1
      }), (0, i.jsx)(I, {
        userRecord: s,
        placement: 2
      }), (0, i.jsx)(N, {
        numSentReferrals: n,
        placement: 2
      }), (0, i.jsx)(I, {
        userRecord: a,
        placement: 3
      })]
    })
  },
  A = e => {
    let {
      isInSettings: t = false
    } = e, s = (0, l.e7)([b.Z], () => b.Z.getRecipientStatus()), {
      referralSentUsers: m
    } = (0, x.G)(), I = r.useMemo(() => m.map(e => new p.Z(e)), [m]), N = {
      redeemed: 0,
      converted: 0,
      sent: s.size
    };
    s.forEach(e => {
      e === f.Fe.REDEEMED && N.redeemed++, e === f.Fe.CONVERTED && (N.redeemed++, N.converted++)
    });
    let A = N.sent === x.Q,
      P = h.Z.getArticleURL(E.BhN.REFERRAL_PROGRAM),
      {
        analyticsLocations: R
      } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
      D = r.useRef(null),
      Z = N.sent / x.Q * 100,
      w = (0, i.jsxs)("div", {
        className: O.referralInfoContent,
        children: [(0, i.jsx)(_.ZP, {
          percentage: Z,
          progressCircleVariation: _.Qo.NITRO_LOGO,
          iconClassName: a()({
            [O.referralProgressBarIcon]: !t,
            [O.referralProgressBarIconSettings]: t
          })
        }), (0, i.jsxs)("div", {
          className: O.expandedProgressBarContent,
          children: [(0, i.jsx)(c.X6q, {
            variant: t ? "heading-xl/extrabold" : "heading-xxl/extrabold",
            className: O.expandedProgressBarHeader,
            children: (0, j.$s)({
              hasSentAll: A
            })
          }), (0, i.jsx)(y, {
            userRecords: I
          }), (0, i.jsx)(c.Text, {
            variant: t ? "text-sm/normal" : "text-lg/medium",
            children: (0, j.Hg)({
              helpdeskArticle: P,
              referralsStatuses: N
            })
          }), (0, i.jsx)("div", {
            className: a()(O.expandedProgressBarButtonContainer, {
              [O.expandedProgressBarButtonContainerLayout]: !t
            }),
            children: (0, i.jsx)(c.gtL, {
              "data-migration-pending": true,
              className: O.expandedProgressBarSelectFriendsCTA,
              color: o.Tt.CUSTOM,
              onClick: () => (e => {
                let {
                  analyticsLocations: t
                } = e;
                g.default.track(E.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                  location_stack: t
                }), (0, c.ZDy)(async () => {
                  let {
                    default: e
                  } = await Promise.all([n.e("83667"), n.e("81369")]).then(n.bind(n, 204387));
                  return n => (0, i.jsx)(e, T(S({}, n), {
                    sourceAnalyticsLocations: t
                  }))
                })
              })({
                analyticsLocations: R
              }),
              onlyShineOnHover: true,
              children: (0, i.jsxs)("div", {
                className: O.expandedProgressBarSelectFriendsCTAInner,
                children: [(0, i.jsx)("img", {
                  src: v,
                  alt: "",
                  className: O.expandedProgressBarSelectFriendsIcon
                }), A ? C.intl.string(C.t.SY9tyM) : C.intl.string(C.t.Lm2nFR)]
              })
            })
          })]
        })]
      }),
      k = N.redeemed === x.Q;
    return (0, i.jsx)(u.Gt, {
      value: R,
      children: (0, i.jsx)("div", {
        className: a()({
          [O.containerWithGlowWithoutBanner]: k,
          [O.containerWithoutGlow]: !k,
          [O.containerWithMargins]: !t,
          [O.containerWithGlowOnSettingsPage]: k && t
        }),
        children: (0, i.jsx)("div", {
          ref: D,
          className: a()({
            [O.expandedProgressBarContainer]: !t,
            [O.expandedProgressBarContainerSettingsPage]: t,
            [O.allReferralsSentBorder]: k
          }),
          children: w
        })
      })
    })
  }