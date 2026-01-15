/** Chunk was on web.js **/
/** chunk id: 686380, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk568836 = require("./568836.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk963249 = require("./963249.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk78839 = require("./78839.js"),
  Chunk626135 = require("./626135.js"),
  Chunk55935 = require("./55935.js"),
  Chunk63063 = require("./63063.js"),
  Chunk74538 = require("./74538.js"),
  Chunk276444 = require("./276444.js"),
  Chunk93237 = require("./93237.js"),
  Chunk796634 = require("./796634.js"),
  Chunk656139 = require("./656139.jsx"),
  Chunk740594 = require("./740594.jsx"),
  Chunk786397 = require("./786397.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk218977 = require("./218977.js"),
  Chunk746838 = require("./746838.js");

function D(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      D(e, t, n[t])
    })
  }
  return e
}

function L(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let M = "???",
  k = e => {
    let {
      analyticsLocations: t,
      startingScreen: i
    } = e;
    g.default.track(N.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
      location_stack: t
    }), (0, c.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 656139));
      return t => (0, r.jsx)(e, j(x({}, t), {
        startingScreen: i
      }))
    })
  };
class U extends Chunk473749.Component {
  getSystemMessageHeader() {
    let e = h.default.getUser(this.trialOffer.user_id);
    if (this.isSender) return P.intl.format(P.t["4/EMxl"], {
      receiver: null == e ? true : e.username
    });
    let t = h.default.getUser(this.trialOffer.referrer_id),
      n = (null == t ? true : t.username) !== true ? t.username : "";
    return P.intl.format(P.t.yisueA, {
      sender: n,
      helpdeskArticle: b.Z.getArticleURL(N.BhN.REFERRAL_PROGRAM)
    })
  }
  getTitleText() {
    let e = h.default.getUser(this.trialOffer.user_id),
      t = null != e ? e.username : M,
      n = h.default.getUser(this.trialOffer.referrer_id),
      r = null != n ? n.username : M;
    return this.recipientHasNitro && true === this.trialOffer.redeemed_at ? P.intl.formatToPlainString(P.t["Mptau/"], {
      username: t
    }) : this.offerExpired ? this.isSender ? P.intl.string(P.t["9SNdf4"]) : P.intl.formatToPlainString(P.t["H0+MxK"], {
      userName: r
    }) : P.intl.formatToPlainString(P.t.IiWKwg, {
      senderUserName: r,
      recipientUserName: t
    })
  }
  getBodyText() {
    return this.recipientHasNitro && !this.isSender && true === this.trialOffer.redeemed_at ? P.intl.format(P.t.LwCwT9, {
      helpdeskArticle: b.Z.getArticleURL(N.BhN.REFERRAL_PROGRAM)
    }) : this.offerExpired ? null : P.intl.string(P.t.lQLlOb)
  }
  renderActions() {
    let e = this.currentUser.id !== this.trialOffer.user_id || (0, y.I5)(this.currentUser) || !this.currentUser.verified || (0, C.B)(this.trialOffer),
      t = this.renderExpirationDate();
    return (0, r.jsxs)("div", {
      className: w.buttonContainer,
      children: [(0, r.jsx)("div", {
        children: (0, r.jsx)(c.Button, {
          variant: "primary",
          disabled: e,
          size: "sm",
          text: P.intl.string(P.t.O0etsF),
          onClick: () => {
            (0, _.Z)({
              initialPlanId: null,
              subscriptionTier: A.Si.TIER_2,
              analyticsLocations: this.analyticsLocations,
              trialId: this.trialOffer.trial_id,
              referralTrialOfferId: this.trialOffer.id
            })
          }
        })
      }), (0, r.jsx)("div", {
        className: w.metadata,
        children: t
      })]
    })
  }
  renderExpirationDate() {
    let {
      trialOffer: e,
      trialEndsAt: t
    } = this.props;
    if (true !== e.redeemed_at && !this.isSender && null !== t) return P.intl.formatToPlainString(P.t.nP0ivR, {
      date: (0, E.vc)(o()(t), "LL")
    });
    if (this.recipientHasNitro || true === e.expires_at) return null;
    let n = o()(e.expires_at);
    return this.offerExpired ? P.intl.formatToPlainString(P.t.PuSHfU, {
      date: (0, E.vc)(o()(n), "LL")
    }) : (0, v.F6)(n.valueOf())
  }
  renderMedia() {
    return (0, r.jsx)("div", {
      className: w.referral
    })
  }
  render() {
    let e = () => {
        let e = h.default.getUser(this.trialOffer.user_id),
          t = null != e ? e.username : M,
          n = h.default.getUser(this.trialOffer.referrer_id),
          r = null != n ? n.username : M;
        if (this.isSender)
          if (this.recipientHasNitro && true === this.trialOffer.redeemed_at) return {
            headerText: P.intl.formatToPlainString(P.t.qABVhL, {
              recipient: t
            }),
            bodyText: P.intl.formatToPlainString(P.t.u7hyDx, {
              helpdeskArticle: b.Z.getArticleURL(N.BhN.REFERRAL_PROGRAM)
            })
          };
          else return {
            headerText: P.intl.string(P.t.LAGZfq),
            bodyText: P.intl.formatToPlainString(P.t["0gnFLC"], {
              recipient: t
            })
          };
        return this.offerExpired ? {
          headerText: P.intl.string(P.t.nYvpUl),
          bodyText: P.intl.formatToPlainString(P.t.wJdBEZ, {
            sender: r
          })
        } : {
          headerText: P.intl.string(P.t.HtTvXA),
          bodyText: P.intl.formatToPlainString(P.t.wOQByA, {
            sender: r
          })
        }
      },
      t = (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(T.Z, {
          subscriptionTier: A.Si.TIER_2,
          buttonTextOverride: P.intl.string(P.t.O0etsF),
          size: "md",
          variantOverride: "expressive"
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: this.renderExpirationDate()
        })]
      }),
      n = (0, r.jsx)(c.Button, {
        variant: "primary",
        disabled: false,
        size: "md",
        onClick: () => k({
          analyticsLocations: [],
          startingScreen: this.referralsSent.size === S.Q ? I.SelectFriendsModalScreens.REMINDER : I.SelectFriendsModalScreens.SELECT_FRIENDS
        }),
        text: P.intl.string(P.t.Lm2nFc)
      }),
      i = this.isSender ? n : t,
      a = (0, r.jsx)(c.Eep, {
        src: R.Z,
        height: 84,
        width: 144,
        className: w.imgDMEmbedXP
      }),
      {
        headerText: o,
        bodyText: s
      } = e();
    return (0, r.jsxs)(p.Z, {
      className: w.systemMessageContainerDMEmbedXP,
      iconNode: (0, r.jsx)(c.SrA, {
        size: "md",
        color: "currentColor"
      }),
      iconContainerClassName: w.systemMessageContainerIcon,
      compact: this.compact,
      children: [(0, r.jsx)(c.Text, {
        variant: "text-md/medium",
        color: "text-strong",
        children: this.getSystemMessageHeader()
      }), (0, r.jsxs)("div", {
        className: w.containerDMEmbedXP,
        children: [a, (0, r.jsxs)("div", {
          className: w.contentDMEmbedXP,
          children: [(0, r.jsxs)("div", {
            className: w.contentTextDMEmbedXP,
            children: [(0, r.jsx)(c.Heading, {
              variant: "heading-md/semibold",
              color: "text-strong",
              children: o
            }), (0, r.jsx)(c.Text, {
              variant: "text-md/medium",
              color: "text-subtle",
              children: s
            })]
          }), (0, r.jsx)("div", {
            className: w.buttonContainerDMEmbedXP,
            children: i
          })]
        })]
      })]
    })
  }
  constructor(e) {
    super(e), D(this, "trialOffer", true), D(this, "referralsSent", true), D(this, "currentUser", true), D(this, "recipientHasNitro", true), D(this, "trialEndsAt", true), D(this, "analyticsLocations", true), D(this, "offerExpired", true), D(this, "isSender", true), D(this, "compact", true), this.trialOffer = e.trialOffer, this.referralsSent = e.referralsSent, this.currentUser = e.currentUser, this.recipientHasNitro = e.recipientHasNitro, this.trialEndsAt = e.trialEndsAt, this.analyticsLocations = e.analyticsLocations, this.compact = true === e.compact, this.offerExpired = (0, C.B)(this.trialOffer), this.isSender = this.currentUser.id === this.trialOffer.referrer_id
  }
}

function G(e) {
  let {
    userTrialOfferId: t,
    canRenderReferralEmbed: n,
    compact: i
  } = e, {
    trialOffer: a,
    isResolving: o,
    referralsSent: c
  } = (0, l.cj)([O.Z], () => ({
    trialOffer: n ? O.Z.getRelevantUserTrialOffer(t) : null,
    isResolving: !!n && O.Z.isResolving(t),
    referralsSent: O.Z.getRecipientStatus()
  }), [n, t]), p = h.default.getCurrentUser(), _ = (0, l.e7)([h.default], () => null != a && (0, y.I5)(true !== p && a.user_id === p.id ? p : h.default.getUser(a.user_id))), g = (0, l.e7)([m.Z], () => {
    var e;
    return _ ? null == (e = m.Z.getPremiumTypeSubscription()) ? true : e.trialEndsAt : null
  }), {
    analyticsLocations: E
  } = (0, f.ZP)(d.Z.SHARE_NITRO_EMBED);
  return o ? (0, r.jsx)(u.OR, {
    isHorizontal: !s.tq
  }) : n && null != a && true !== p ? (0, r.jsx)(U, {
    trialOffer: a,
    referralsSent: c,
    currentUser: p,
    recipientHasNitro: _,
    trialEndsAt: g,
    analyticsLocations: E,
    compact: i
  }) : (0, r.jsx)("div", {
    className: w.invalidWrapper,
    children: (0, r.jsx)("div", {
      className: w.invalid
    })
  })
}