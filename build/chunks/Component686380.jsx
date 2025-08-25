/** Chunk was on web.js **/
/** chunk id: 686380, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => V
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
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
  Chunk623879 = require("./623879.js"),
  Chunk93237 = require("./93237.js"),
  Chunk796634 = require("./796634.js"),
  Chunk656139 = require("./656139.jsx"),
  Chunk740594 = require("./740594.jsx"),
  Chunk786397 = require("./786397.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk269143 = require("./269143.js"),
  Chunk754761 = require("./754761.js"),
  Chunk295234 = require("./295234.js");

function k(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function M(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      k(e, t, n[t])
    })
  }
  return e
}

function U(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function G(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : U(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let B = "???",
  Z = e => {
    let {
      analyticsLocations: t,
      startingScreen: i
    } = e;
    b.default.track(w.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
      location_stack: t
    }), (0, d.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(n.bind(n, 656139));
      return t => (0, r.jsx)(e, G(M({}, t), {
        startingScreen: i
      }))
    })
  };
class F extends Chunk647438.Component {
  getSystemMessageHeader() {
    let e = Chunk594174.default.getUser(this.trialOffer.user_id);
    if (this.isSender) return Chunk388032.intl.format(Chunk388032.t["4/EMxs"], {
      receiver: null == module ? true : module.username
    });
    let t = Chunk594174.default.getUser(this.trialOffer.referrer_id),
      n = (null == exports ? true : exports.username) !== true ? exports.username : "";
    return Chunk388032.intl.format(Chunk388032.t.yisueH, {
      sender: require,
      helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.REFERRAL_PROGRAM)
    })
  }
  getTitleText() {
    let e = Chunk594174.default.getUser(this.trialOffer.user_id),
      t = null != module ? module.username : B,
      n = Chunk594174.default.getUser(this.trialOffer.referrer_id),
      r = null != require ? require.username : B;
    return this.recipientHasNitro && true === this.trialOffer.redeemed_at ? Chunk388032.intl.formatToPlainString(Chunk388032.t.Mptau7, {
      username: exports
    }) : this.offerExpired ? this.isSender ? Chunk388032.intl.string(Chunk388032.t["9SNdf3"]) : Chunk388032.intl.formatToPlainString(Chunk388032.t["H0+MxM"], {
      userName: Chunk951288
    }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.IiWKws, {
      senderUserName: Chunk951288,
      recipientUserName: exports
    })
  }
  getBodyText() {
    return this.recipientHasNitro && !this.isSender && true === this.trialOffer.redeemed_at ? Chunk388032.intl.format(Chunk388032.t.LwCwT0, {
      helpdeskArticle: Chunk63063.Z.getArticleURL(Chunk981631.BhN.REFERRAL_PROGRAM)
    }) : this.offerExpired ? null : Chunk388032.intl.string(Chunk388032.t.lQLlOT)
  }
  renderActions() {
    let e = this.currentUser.id !== this.trialOffer.user_id || (0, Chunk74538.I5)(this.currentUser) || !this.currentUser.verified || (0, Chunk786397.B)(this.trialOffer),
      t = this.renderExpirationDate();
    return (0, Chunk951288.jsxs)("div", {
      className: Chunk269143.buttonContainer,
      children: [(0, Chunk951288.jsx)("div", {
        children: (0, Chunk951288.jsx)(Chunk481060.zxk, {
          variant: "primary",
          disabled: module,
          size: "sm",
          text: Chunk388032.intl.string(Chunk388032.t.O0etsL),
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
        className: Chunk269143.metadata,
        children: exports
      })]
    })
  }
  renderExpirationDate() {
    let {
      trialOffer: e,
      trialEndsAt: t
    } = this.props;
    if (true !== module.redeemed_at && !this.isSender && null !== exports) return Chunk388032.intl.formatToPlainString(Chunk388032.t.nP0ivb, {
      date: (0, Chunk55935.vc)(l()(exports), "LL")
    });
    if (this.recipientHasNitro || true === module.expires_at) return null;
    let n = l()(module.expires_at);
    return this.offerExpired ? Chunk388032.intl.formatToPlainString(Chunk388032.t.PuSHfX, {
      date: (0, Chunk55935.vc)(l()(require), "LL")
    }) : (0, Chunk93237.F6)(require.valueOf())
  }
  renderMedia() {
    return (0, Chunk951288.jsx)("div", {
      className: Chunk269143.referral
    })
  }
  renderRefreshedDMEmbed(e) {
    let {
      emphasis: t
    } = e, n = () => {
      let e = g.default.getUser(this.trialOffer.user_id),
        n = null != e ? e.username : B,
        r = g.default.getUser(this.trialOffer.referrer_id),
        i = null != r ? r.username : B;
      if (this.isSender)
        if (this.recipientHasNitro && true === this.trialOffer.redeemed_at) return {
          headerText: D.intl.formatToPlainString(D.t.qABVhI, {
            recipient: n
          }),
          bodyText: D.intl.formatToPlainString(D.t.u7hyDw, {
            helpdeskArticle: O.Z.getArticleURL(w.BhN.REFERRAL_PROGRAM)
          })
        };
        else return {
          headerText: D.intl.string(D.t.LAGZfn),
          bodyText: D.intl.formatToPlainString(D.t["0gnFLC"], {
            recipient: n
          })
        };
      return this.offerExpired ? {
        headerText: D.intl.string(D.t.nYvpUl),
        bodyText: D.intl.formatToPlainString(D.t.wJdBER, {
          sender: i
        })
      } : "SOCIAL" === t ? {
        headerText: D.intl.string(D.t.HtTvXF),
        bodyText: D.intl.formatToPlainString(D.t.wOQByM, {
          sender: i
        })
      } : {
        headerText: D.intl.string(D.t.VkcLSk),
        bodyText: D.intl.string(D.t.JXMz5O)
      }
    }, i = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(N.Z, {
        subscriptionTier: P.Si.TIER_2,
        buttonTextOverride: D.intl.string(D.t.O0etsL),
        size: "md",
        variantOverride: "expressive"
      }), (0, r.jsx)(d.Text, {
        variant: "text-md/medium",
        color: "text-secondary",
        children: this.renderExpirationDate()
      })]
    }), o = (0, r.jsx)(d.zxk, {
      variant: "primary",
      disabled: false,
      size: "md",
      onClick: () => Z({
        analyticsLocations: [],
        startingScreen: this.referralsSent.size === A.Q ? C.K.REMINDER : C.K.SELECT_FRIENDS
      }),
      text: D.intl.string(D.t.Lm2nFR)
    }), a = this.isSender ? o : i, s = "SOCIAL" === t ? (0, r.jsx)(d.Eep, {
      src: j.Z,
      height: 84,
      width: 144,
      className: x.imgDMEmbedXP
    }) : (0, r.jsx)(d.Eep, {
      src: L.Z,
      height: 137,
      width: 144,
      className: x.imgDMEmbedXP
    }), {
      headerText: l,
      bodyText: c
    } = n();
    return (0, r.jsxs)(h.Z, {
      className: x.systemMessageContainerDMEmbedXP,
      iconNode: (0, r.jsx)(d.SrA, {
        size: "md",
        color: "currentColor"
      }),
      iconContainerClassName: x.systemMessageContainerIcon,
      compact: this.compact,
      children: [(0, r.jsx)(d.Text, {
        variant: "text-md/medium",
        color: "text-primary",
        children: this.getSystemMessageHeader()
      }), (0, r.jsxs)("div", {
        className: x.containerDMEmbedXP,
        children: [s, (0, r.jsxs)("div", {
          className: x.contentDMEmbedXP,
          children: [(0, r.jsxs)("div", {
            className: x.contentTextDMEmbedXP,
            children: [(0, r.jsx)(d.X6q, {
              variant: "heading-md/semibold",
              color: "header-primary",
              children: l
            }), (0, r.jsx)(d.Text, {
              variant: "text-md/medium",
              color: "text-secondary",
              children: c
            })]
          }), (0, r.jsx)("div", {
            className: x.buttonContainerDMEmbedXP,
            children: a
          })]
        })]
      })]
    })
  }
  render() {
    switch (this.dmRefreshXPCohort) {
      case Chunk623879.FZ.Social:
        return this.renderRefreshedDMEmbed({
          emphasis: "SOCIAL"
        });
      case Chunk623879.FZ.Perks:
        return this.renderRefreshedDMEmbed({
          emphasis: "PERKS"
        });
      default:
        return (0, Chunk951288.jsxs)("div", {
          className: a()(Chunk269143.tile, Chunk269143.container),
          children: [(0, Chunk951288.jsx)("div", {
            className: Chunk269143.media,
            children: this.renderMedia()
          }), (0, Chunk951288.jsxs)("div", {
            className: Chunk269143.description,
            children: [(0, Chunk951288.jsx)(Chunk481060.H, {
              className: Chunk269143.title,
              children: this.getTitleText()
            }), (0, Chunk951288.jsx)("div", {
              className: Chunk269143.tagline,
              children: this.getBodyText()
            }), (0, Chunk951288.jsx)("div", {
              className: Chunk269143.actions,
              children: this.renderActions()
            })]
          })]
        })
    }
  }
  constructor(e) {
    super(e), k(this, "trialOffer", true), k(this, "referralsSent", true), k(this, "currentUser", true), k(this, "recipientHasNitro", true), k(this, "trialEndsAt", true), k(this, "analyticsLocations", true), k(this, "offerExpired", true), k(this, "isSender", true), k(this, "dmRefreshXPCohort", true), k(this, "compact", true), this.trialOffer = e.trialOffer, this.referralsSent = e.referralsSent, this.currentUser = e.currentUser, this.recipientHasNitro = e.recipientHasNitro, this.trialEndsAt = e.trialEndsAt, this.analyticsLocations = e.analyticsLocations, this.dmRefreshXPCohort = e.dmRefreshXPCohort, this.compact = true === e.compact, this.offerExpired = (0, R.B)(this.trialOffer), this.isSender = this.currentUser.id === this.trialOffer.referrer_id
  }
}

function V(e) {
  let {
    userTrialOfferId: t,
    canRenderReferralEmbed: n,
    compact: i
  } = e, {
    trialOffer: o,
    isResolving: a,
    referralsSent: s
  } = (0, u.cj)([I.Z], () => ({
    trialOffer: n ? I.Z.getRelevantUserTrialOffer(t) : null,
    isResolving: !!n && I.Z.isResolving(t),
    referralsSent: I.Z.getRecipientStatus()
  }), [n, t]), l = g.default.getCurrentUser(), d = (0, u.e7)([g.default], () => null != o && (0, v.I5)(true !== l && o.user_id === l.id ? l : g.default.getUser(o.user_id))), h = (0, u.e7)([E.Z], () => {
    var e;
    return d ? null == (e = E.Z.getPremiumTypeSubscription()) ? true : e.trialEndsAt : null
  }), {
    analyticsLocations: m
  } = (0, p.ZP)(_.Z.SHARE_NITRO_EMBED), b = T.ZP.useExperiment({
    location: "ConnectedReferralTrialEmbed"
  });
  return a ? (0, r.jsx)(f.OR, {
    isHorizontal: !c.tq
  }) : n && null != o && true !== l ? (0, r.jsx)(F, {
    trialOffer: o,
    referralsSent: s,
    currentUser: l,
    recipientHasNitro: d,
    trialEndsAt: h,
    analyticsLocations: m,
    dmRefreshXPCohort: b.cohort,
    compact: i
  }) : (0, r.jsx)("div", {
    className: x.invalidWrapper,
    children: (0, r.jsx)("div", {
      className: x.invalid
    })
  })
}