/** Chunk was on web.js **/
/** chunk id: 686380, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk524994 = require("./524994.js"),
  Chunk295234 = require("./295234.js");

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

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : L(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let j = "???",
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
      return t => (0, r.jsx)(e, M(x({}, t), {
        startingScreen: i
      }))
    })
  };
class U extends Chunk647438.Component {
  getSystemMessageHeader() {
    let e = Chunk594174.default.getUser(this.trialOffer.user_id);
    if (this.isSender) return Chunk388032.intl.format(Chunk388032.t["4/EMxl"], {
      receiver: null == module ? true : module.username
    });
    let t = Chunk594174.default.getUser(this.trialOffer.referrer_id),
      n = (null == exports ? true : exports.username) !== true ? exports.username : "";
    return Chunk388032.intl.format(Chunk388032.t.yisueA, {
      sender: require,
      helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.REFERRAL_PROGRAM)
    })
  }
  getTitleText() {
    let e = Chunk594174.default.getUser(this.trialOffer.user_id),
      t = null != module ? module.username : j,
      n = Chunk594174.default.getUser(this.trialOffer.referrer_id),
      r = null != require ? require.username : j;
    return this.recipientHasNitro && true === this.trialOffer.redeemed_at ? Chunk388032.intl.formatToPlainString(Chunk388032.t["Mptau/"], {
      username: exports
    }) : this.offerExpired ? this.isSender ? Chunk388032.intl.string(Chunk388032.t["9SNdf4"]) : Chunk388032.intl.formatToPlainString(Chunk388032.t["H0+MxK"], {
      userName: Chunk951288
    }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.IiWKwg, {
      senderUserName: Chunk951288,
      recipientUserName: exports
    })
  }
  getBodyText() {
    return this.recipientHasNitro && !this.isSender && true === this.trialOffer.redeemed_at ? Chunk388032.intl.format(Chunk388032.t.LwCwT9, {
      helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.REFERRAL_PROGRAM)
    }) : this.offerExpired ? null : Chunk388032.intl.string(Chunk388032.t.lQLlOb)
  }
  renderActions() {
    let e = this.currentUser.id !== this.trialOffer.user_id || (0, Chunk74538.I5)(this.currentUser) || !this.currentUser.verified || (0, Chunk786397.B)(this.trialOffer),
      t = this.renderExpirationDate();
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk524994.buttonContainer,
      children: [(0, Chunk951288.jsx)("div", {
        children: (0, Chunk951288.jsx)(Chunk481060.Button, {
          variant: "primary",
          disabled: module,
          size: "sm",
          text: Chunk388032.intl.string(Chunk388032.t.O0etsF),
          onClick: () => {
            (0, Chunk963249.Z)({
              initialPlanId: null,
              subscriptionTier: Chunk474936.Si.TIER_2,
              analyticsLocations: this.analyticsLocations,
              trialId: this.trialOffer.trial_id,
              referralTrialOfferId: this.trialOffer.id
            })
          }
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk524994.metadata,
        children: exports
      })]
    })
  }
  renderExpirationDate() {
    let {
      trialOffer: e,
      trialEndsAt: t
    } = this.props;
    if (true !== module.redeemed_at && !this.isSender && null !== exports) return Chunk388032.intl.formatToPlainString(Chunk388032.t.nP0ivR, {
      date: (0, Chunk55935.vc)(o()(exports), "LL")
    });
    if (this.recipientHasNitro || true === module.expires_at) return null;
    let n = o()(module.expires_at);
    return this.offerExpired ? Chunk388032.intl.formatToPlainString(Chunk388032.t.PuSHfU, {
      date: (0, Chunk55935.vc)(o()(require), "LL")
    }) : (0, Chunk93237.F6)(require.valueOf())
  }
  renderMedia() {
    return (0, Chunk951288.jsx)("div", {
      className: Chunk524994.referral
    })
  }
  render() {
    let e = () => {
        let e = Chunk594174.default.getUser(this.trialOffer.user_id),
          t = null != module ? module.username : j,
          n = Chunk594174.default.getUser(this.trialOffer.referrer_id),
          r = null != require ? require.username : j;
        if (this.isSender)
          if (this.recipientHasNitro && true === this.trialOffer.redeemed_at) return {
            headerText: Chunk388032.intl.formatToPlainString(Chunk388032.t.qABVhL, {
              recipient: exports
            }),
            bodyText: Chunk388032.intl.formatToPlainString(Chunk388032.t.u7hyDx, {
              helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.REFERRAL_PROGRAM)
            })
          };
          else return {
            headerText: Chunk388032.intl.string(Chunk388032.t.LAGZfq),
            bodyText: Chunk388032.intl.formatToPlainString(Chunk388032.t["0gnFLC"], {
              recipient: exports
            })
          };
        return this.offerExpired ? {
          headerText: Chunk388032.intl.string(Chunk388032.t.nYvpUl),
          bodyText: Chunk388032.intl.formatToPlainString(Chunk388032.t.wJdBEZ, {
            sender: Chunk951288
          })
        } : {
          headerText: Chunk388032.intl.string(Chunk388032.t.HtTvXA),
          bodyText: Chunk388032.intl.formatToPlainString(Chunk388032.t.wOQByA, {
            sender: Chunk951288
          })
        }
      },
      t = (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
        children: [(0, Chunk951288.jsx)(Chunk740594.Z, {
          subscriptionTier: Chunk474936.Si.TIER_2,
          buttonTextOverride: Chunk388032.intl.string(Chunk388032.t.O0etsF),
          size: "md",
          variantOverride: "expressive"
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          variant: "text-md/medium",
          color: "text-secondary",
          children: this.renderExpirationDate()
        })]
      }),
      n = (0, Chunk951288.jsx)(Chunk481060.Button, {
        variant: "primary",
        disabled: false,
        size: "md",
        onClick: () => k({
          analyticsLocations: [],
          startingScreen: this.referralsSent.size === Chunk796634.Q ? Chunk656139.SelectFriendsModalScreens.REMINDER : Chunk656139.SelectFriendsModalScreens.SELECT_FRIENDS
        }),
        text: Chunk388032.intl.string(Chunk388032.t.Lm2nFc)
      }),
      i = this.isSender ? require : exports,
      a = (0, Chunk951288.jsx)(Chunk481060.Eep, {
        src: Chunk295234.Z,
        height: 84,
        width: 144,
        className: Chunk524994.imgDMEmbedXP
      }),
      {
        headerText: o,
        bodyText: s
      } = module();
    return (0, Chunk951288.jsxs)(Chunk834129.Z, {
      className: Chunk524994.systemMessageContainerDMEmbedXP,
      iconNode: (0, Chunk951288.jsx)(Chunk481060.SrA, {
        size: "md",
        color: "currentColor"
      }),
      iconContainerClassName: Chunk524994.systemMessageContainerIcon,
      compact: this.compact,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        color: "text-primary",
        children: this.getSystemMessageHeader()
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk524994.containerDMEmbedXP,
        children: [Chunk913527, (0, Chunk951288.jsxs)("div", {
          className: Chunk524994.contentDMEmbedXP,
          children: [(0, Chunk951288.jsxs)("div", {
            className: Chunk524994.contentTextDMEmbedXP,
            children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
              variant: "heading-md/semibold",
              color: "header-primary",
              children: o
            }), (0, Chunk951288.jsx)(Chunk481060.Text, {
              variant: "text-md/medium",
              color: "text-secondary",
              children: Chunk873546
            })]
          }), (0, Chunk951288.jsx)("div", {
            className: Chunk524994.buttonContainerDMEmbedXP,
            children: Chunk647438
          })]
        })]
      })]
    })
  }
  constructor(e) {
    super(e), D(this, "trialOffer", true), D(this, "referralsSent", true), D(this, "currentUser", true), D(this, "recipientHasNitro", true), D(this, "trialEndsAt", true), D(this, "analyticsLocations", true), D(this, "offerExpired", true), D(this, "isSender", true), D(this, "compact", true), this.trialOffer = e.trialOffer, this.referralsSent = e.referralsSent, this.currentUser = e.currentUser, this.recipientHasNitro = e.recipientHasNitro, this.trialEndsAt = e.trialEndsAt, this.analyticsLocations = e.analyticsLocations, this.compact = true === e.compact, this.offerExpired = (0, A.B)(this.trialOffer), this.isSender = this.currentUser.id === this.trialOffer.referrer_id
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
  }), [n, t]), _ = h.default.getCurrentUser(), p = (0, l.e7)([h.default], () => null != a && (0, y.I5)(true !== _ && a.user_id === _.id ? _ : h.default.getUser(a.user_id))), g = (0, l.e7)([m.Z], () => {
    var e;
    return p ? null == (e = m.Z.getPremiumTypeSubscription()) ? true : e.trialEndsAt : null
  }), {
    analyticsLocations: E
  } = (0, f.ZP)(d.Z.SHARE_NITRO_EMBED);
  return o ? (0, r.jsx)(u.OR, {
    isHorizontal: !s.tq
  }) : n && null != a && true !== _ ? (0, r.jsx)(U, {
    trialOffer: a,
    referralsSent: c,
    currentUser: _,
    recipientHasNitro: p,
    trialEndsAt: g,
    analyticsLocations: E,
    compact: i
  }) : (0, r.jsx)("div", {
    className: P.invalidWrapper,
    children: (0, r.jsx)("div", {
      className: P.invalid
    })
  })
}