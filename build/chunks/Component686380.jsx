/** Chunk was on web.js **/
/** chunk id: 686380, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => B
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk740594 = require("./740594.jsx"),
  Chunk786397 = require("./786397.js"),
  Chunk474936 = require("./474936.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk681782 = require("./681782.js"),
  Chunk754761 = require("./754761.js"),
  Chunk295234 = require("./295234.js");

function M(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      M(e, t, n[t])
    })
  }
  return e
}
let k = "???",
  U = e => {
    let {
      analyticsLocations: t
    } = e;
    y.default.track(P.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
      location_stack: t
    }), (0, f.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("83667"), n.e("67825")]).then(n.bind(n, 656139));
      return t => (0, r.jsx)(e, j({}, t))
    })
  };
class G extends Chunk73800.Component {
  getTitleText() {
    let e = Chunk594174.default.getUser(this.trialOffer.user_id),
      t = null != module ? module.username : k,
      n = Chunk594174.default.getUser(this.trialOffer.referrer_id),
      r = null != require ? require.username : k;
    return this.recipientHasNitro && true === this.trialOffer.redeemed_at ? Chunk388032.intl.formatToPlainString(Chunk388032.t.Mptau7, {
      username: exports
    }) : this.offerExpired ? this.isSender ? Chunk388032.intl.string(Chunk388032.t["9SNdf3"]) : Chunk388032.intl.formatToPlainString(Chunk388032.t["H0+MxM"], {
      userName: Chunk255367
    }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.IiWKws, {
      senderUserName: Chunk255367,
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
    return (0, Chunk255367.jsxs)("div", {
      className: Chunk681782.buttonContainer,
      children: [(0, Chunk255367.jsx)("div", {
        children: (0, Chunk255367.jsx)(Chunk755721.zx, {
          "data-migration-pending": true,
          disabled: module,
          color: Chunk755721.zx.Colors.BRAND,
          size: Chunk755721.zx.Sizes.SMALL,
          onClick: () => {
            (0, Chunk963249.Z)({
              initialPlanId: null,
              subscriptionTier: Chunk474936.Si.TIER_2,
              analyticsLocations: this.analyticsLocations,
              trialId: this.trialOffer.trial_id,
              referralTrialOfferId: this.trialOffer.id
            })
          },
          children: Chunk388032.intl.string(Chunk388032.t.O0etsL)
        })
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk681782.metadata,
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
    return (0, Chunk255367.jsx)("div", {
      className: Chunk681782.referral
    })
  }
  renderRefreshedDMEmbed(e) {
    let {
      emphasis: t
    } = e, n = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(N.Z, {
        subscriptionTier: R.Si.TIER_2,
        buttonTextOverride: w.intl.string(w.t.O0etsL),
        size: "md",
        variantOverride: "expressive"
      }), (0, r.jsx)(f.Text, {
        variant: "text-md/medium",
        color: "text-secondary",
        children: this.renderExpirationDate()
      })]
    }), i = (0, r.jsx)(d.zx, {
      disabled: false,
      color: d.zx.Colors.BRAND,
      size: d.zx.Sizes.MEDIUM,
      onClick: () => U({
        analyticsLocations: []
      }),
      children: w.intl.string(w.t.Lm2nFR)
    }), o = this.isSender ? i : n, a = "SOCIAL" === t ? (0, r.jsx)(f.Eep, {
      src: x.Z,
      height: 84,
      width: 144,
      className: D.imgDMEmbedXP
    }) : (0, r.jsx)(f.Eep, {
      src: L.Z,
      height: 137,
      width: 144,
      className: D.imgDMEmbedXP
    });
    return (0, r.jsxs)(m.Z, {
      compact: false,
      contentClassName: D.containerDMEmbedXP,
      children: [a, (0, r.jsxs)("div", {
        className: D.contentDMEmbedXP,
        children: [(0, r.jsxs)("div", {
          className: D.contentTextDMEmbedXP,
          children: [(0, r.jsx)(f.X6q, {
            variant: "heading-md/semibold",
            color: "header-primary",
            children: this.getTitleText()
          }), (0, r.jsx)(f.Text, {
            variant: "text-md/medium",
            color: "text-secondary",
            children: this.getBodyText()
          })]
        }), (0, r.jsx)("div", {
          className: D.buttonContainerDMEmbedXP,
          children: o
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
        return (0, Chunk255367.jsxs)("div", {
          className: a()(Chunk681782.tile, Chunk681782.container),
          children: [(0, Chunk255367.jsx)("div", {
            className: Chunk681782.media,
            children: this.renderMedia()
          }), (0, Chunk255367.jsxs)("div", {
            className: Chunk681782.description,
            children: [(0, Chunk255367.jsx)(Chunk481060.H, {
              className: Chunk681782.title,
              children: this.getTitleText()
            }), (0, Chunk255367.jsx)("div", {
              className: Chunk681782.tagline,
              children: this.getBodyText()
            }), (0, Chunk255367.jsx)("div", {
              className: Chunk681782.actions,
              children: this.renderActions()
            })]
          })]
        })
    }
  }
  constructor(e) {
    super(e), M(this, "trialOffer", true), M(this, "currentUser", true), M(this, "recipientHasNitro", true), M(this, "trialEndsAt", true), M(this, "analyticsLocations", true), M(this, "offerExpired", true), M(this, "isSender", true), M(this, "dmRefreshXPCohort", true), this.trialOffer = e.trialOffer, this.currentUser = e.currentUser, this.recipientHasNitro = e.recipientHasNitro, this.trialEndsAt = e.trialEndsAt, this.analyticsLocations = e.analyticsLocations, this.dmRefreshXPCohort = e.dmRefreshXPCohort, this.offerExpired = (0, C.B)(this.trialOffer), this.isSender = this.currentUser.id === this.trialOffer.referrer_id
  }
}

function B(e) {
  let {
    userTrialOfferId: t,
    canRenderReferralEmbed: n
  } = e, {
    trialOffer: i,
    isResolving: o
  } = (0, u.cj)([T.Z], () => ({
    trialOffer: n ? T.Z.getRelevantUserTrialOffer(t) : null,
    isResolving: !!n && T.Z.isResolving(t)
  }), [n, t]), a = E.default.getCurrentUser(), s = (0, u.e7)([E.default], () => null != i && (0, I.I5)(true !== a && i.user_id === a.id ? a : E.default.getUser(i.user_id))), l = (0, u.e7)([b.Z], () => {
    var e;
    return s ? null == (e = b.Z.getPremiumTypeSubscription()) ? true : e.trialEndsAt : null
  }), {
    analyticsLocations: d
  } = (0, h.ZP)(p.Z.SHARE_NITRO_EMBED), f = S.ZP.useExperiment({
    location: "ConnectedReferralTrialEmbed"
  });
  return o ? (0, r.jsx)(_.OR, {
    isHorizontal: !c.tq
  }) : n && null != i && true !== a ? (0, r.jsx)(G, {
    trialOffer: i,
    currentUser: a,
    recipientHasNitro: s,
    trialEndsAt: l,
    analyticsLocations: d,
    dmRefreshXPCohort: f.cohort
  }) : (0, r.jsx)("div", {
    className: D.invalidWrapper,
    children: (0, r.jsx)("div", {
      className: D.invalid
    })
  })
}