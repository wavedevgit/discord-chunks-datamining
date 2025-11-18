/** Chunk was on web.js **/
/** chunk id: 386733, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => L
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk55282 = require("./55282.js"),
  Chunk691766 = require("./691766.js");

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

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let R = e => {
    let {
      userRecord: t,
      placement: n
    } = e, {
      avatarSrc: i,
      eventHandlers: a
    } = (0, f.Z)({
      userId: null == t ? true : t.id,
      size: c.EFr.SIZE_32,
      animateOnHover: true
    }), o = null != t, s = o ? (0, r.jsx)(c.qEK, A({
      src: i,
      "aria-label": t.username,
      size: c.EFr.SIZE_32
    }, a)) : (0, r.jsx)(c.Heading, {
      variant: "heading-md/semibold",
      className: I.userAvatarProgressBarUnitNum,
      children: n
    });
    return (0, r.jsx)(c.aML, {
      text: v.intl.string(v.t.UnKHdo),
      shouldShow: !o,
      tooltipContentClassName: I.unsentTooltipContent,
      children: e => (0, r.jsx)("div", N(A({
        className: I.userAvatarProgressBarUnit
      }, e), {
        children: s
      }))
    })
  },
  P = e => {
    let {
      numSentReferrals: t,
      placement: n
    } = e;
    return (0, r.jsxs)("div", {
      className: I.avatarProgressBarUnitConnectorContainer,
      children: [(0, r.jsx)("div", {
        className: I.avatarProgressBarUnitConnectorBase
      }), (0, r.jsx)("div", {
        className: o()({
          [I.fullHighlight]: t > n,
          [I.halfHighlight]: t === n
        })
      })]
    })
  },
  D = e => {
    let {
      userRecords: t
    } = e, n = t.length, i = n < 1 ? null : t[0], a = n < 2 ? null : t[1], o = n < 3 ? null : t[2];
    return (0, r.jsxs)("div", {
      className: I.userAvatarProgressBarContainer,
      children: [(0, r.jsx)(R, {
        userRecord: i,
        placement: 1
      }), (0, r.jsx)(P, {
        numSentReferrals: n,
        placement: 1
      }), (0, r.jsx)(R, {
        userRecord: a,
        placement: 2
      }), (0, r.jsx)(P, {
        numSentReferrals: n,
        placement: 2
      }), (0, r.jsx)(R, {
        userRecord: o,
        placement: 3
      })]
    })
  },
  w = e => {
    let {
      analyticsLocations: t
    } = e;
    p.default.track(O.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
      location_stack: t
    }), (0, c.ZDy)(async () => {
      let {
        default: e
      } = await n.e("47435").then(n.bind(n, 204387));
      return n => (0, r.jsx)(e, N(A({}, n), {
        sourceAnalyticsLocations: t
      }))
    })
  },
  L = e => {
    let {
      isInSettings: t = false
    } = e, n = (0, s.e7)([g.Z], () => g.Z.getRecipientStatus()), {
      referralSentUsers: a
    } = (0, E.G)(), f = i.useMemo(() => a.map(e => new _.Z(e)), [a]), p = {
      redeemed: 0,
      converted: 0,
      sent: n.size
    };
    n.forEach(e => {
      e === m.Fe.REDEEMED && p.redeemed++, e === m.Fe.CONVERTED && (p.redeemed++, p.converted++)
    });
    let S = p.sent === E.Q,
      A = h.Z.getArticleURL(O.BhN.REFERRAL_PROGRAM),
      {
        analyticsLocations: C
      } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
      N = i.useRef(null),
      R = p.sent / E.Q * 100,
      P = (0, r.jsxs)("div", {
        className: I.referralInfoContent,
        children: [(0, r.jsx)(b.ZP, {
          percentage: R,
          progressCircleVariation: b.Qo.NITRO_LOGO,
          iconClassName: o()({
            [I.referralProgressBarIcon]: !t,
            [I.referralProgressBarIconSettings]: t
          })
        }), (0, r.jsxs)("div", {
          className: I.expandedProgressBarContent,
          children: [(0, r.jsx)(c.Heading, {
            variant: t ? "heading-xl/extrabold" : "heading-xxl/extrabold",
            className: I.expandedProgressBarHeader,
            children: (0, y.$s)({
              hasSentAll: S
            })
          }), (0, r.jsx)(D, {
            userRecords: f
          }), (0, r.jsx)(c.Text, {
            variant: t ? "text-sm/normal" : "text-lg/medium",
            children: (0, y.Hg)({
              helpdeskArticle: A,
              referralsStatuses: p
            })
          }), (0, r.jsx)("div", {
            className: o()(I.expandedProgressBarButtonContainer, {
              [I.expandedProgressBarButtonContainerLayout]: !t
            }),
            children: (0, r.jsx)(c.gtL, {
              "data-migration-pending": true,
              className: I.expandedProgressBarSelectFriendsCTA,
              color: l.Tt.CUSTOM,
              onClick: () => w({
                analyticsLocations: C
              }),
              onlyShineOnHover: true,
              children: (0, r.jsxs)("div", {
                className: I.expandedProgressBarSelectFriendsCTAInner,
                children: [(0, r.jsx)("img", {
                  src: T,
                  alt: "",
                  className: I.expandedProgressBarSelectFriendsIcon
                }), S ? v.intl.string(v.t.SY9tyI) : v.intl.string(v.t.Lm2nFc)]
              })
            })
          })]
        })]
      }),
      L = p.redeemed === E.Q;
    return (0, r.jsx)(d.Gt, {
      value: C,
      children: (0, r.jsx)("div", {
        className: o()({
          [I.containerWithGlowWithoutBanner]: L,
          [I.containerWithoutGlow]: !L,
          [I.containerWithMargins]: !t,
          [I.containerWithGlowOnSettingsPage]: L && t
        }),
        children: (0, r.jsx)("div", {
          ref: N,
          className: o()({
            [I.expandedProgressBarContainer]: !t,
            [I.expandedProgressBarContainerSettingsPage]: t,
            [I.allReferralsSentBorder]: L
          }),
          children: P
        })
      })
    })
  }