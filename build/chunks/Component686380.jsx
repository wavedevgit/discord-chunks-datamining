/** Chunk was on 66866 **/
/** chunk id: 686380, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
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
  Chunk269143 = require("./269143.js"),
  Chunk754761 = require("./754761.js"),
  Chunk295234 = require("./295234.js");

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class D extends Chunk73800.Component {
  getTitleText() {
    let e = Chunk594174.default.getUser(this.trialOffer.user_id),
      t = null != module ? module.username : "???",
      n = Chunk594174.default.getUser(this.trialOffer.referrer_id),
      r = null != require ? require.username : "???";
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
      className: Chunk269143.buttonContainer,
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
      date: (0, Chunk55935.vc)(s()(exports), "LL")
    });
    if (this.recipientHasNitro || true === module.expires_at) return null;
    let n = s()(module.expires_at);
    return this.offerExpired ? Chunk388032.intl.formatToPlainString(Chunk388032.t.PuSHfX, {
      date: (0, Chunk55935.vc)(s()(require), "LL")
    }) : (0, Chunk93237.F6)(require.valueOf())
  }
  renderMedia() {
    return (0, Chunk255367.jsx)("div", {
      className: Chunk269143.referral
    })
  }
  renderRefreshedDMEmbed(e) {
    let {
      emphasis: t
    } = e, i = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(S.Z, {
        subscriptionTier: P.Si.TIER_2,
        buttonTextOverride: A.intl.string(A.t.O0etsL),
        size: "md",
        variantOverride: "expressive"
      }), (0, r.jsx)(p.Text, {
        variant: "text-md/medium",
        color: "text-secondary",
        children: this.renderExpirationDate()
      })]
    }), l = (0, r.jsx)(d.zx, {
      disabled: false,
      color: d.zx.Colors.BRAND,
      size: d.zx.Sizes.MEDIUM,
      onClick: () => (e => {
        let {
          analyticsLocations: t
        } = e;
        C.default.track(N.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
          location_stack: t
        }), (0, p.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("83667"), n.e("84533"), n.e("83773")]).then(n.bind(n, 656139));
          return t => (0, r.jsx)(e, function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                L(e, t, n[t])
              })
            }
            return e
          }({}, t))
        })
      })({
        analyticsLocations: []
      }),
      children: A.intl.string(A.t.Lm2nFR)
    }), a = this.isSender ? l : i, o = "SOCIAL" === t ? (0, r.jsx)(p.Eep, {
      src: R.Z,
      height: 84,
      width: 144,
      className: w.imgDMEmbedXP
    }) : (0, r.jsx)(p.Eep, {
      src: Z.Z,
      height: 137,
      width: 144,
      className: w.imgDMEmbedXP
    });
    return (0, r.jsxs)(g.Z, {
      compact: false,
      contentClassName: w.containerDMEmbedXP,
      children: [o, (0, r.jsxs)("div", {
        className: w.contentDMEmbedXP,
        children: [(0, r.jsxs)("div", {
          className: w.contentTextDMEmbedXP,
          children: [(0, r.jsx)(p.X6q, {
            variant: "heading-md/semibold",
            color: "header-primary",
            children: this.getTitleText()
          }), (0, r.jsx)(p.Text, {
            variant: "text-md/medium",
            color: "text-secondary",
            children: this.getBodyText()
          })]
        }), (0, r.jsx)("div", {
          className: w.buttonContainerDMEmbedXP,
          children: a
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
          className: a()(Chunk269143.tile, Chunk269143.container),
          children: [(0, Chunk255367.jsx)("div", {
            className: Chunk269143.media,
            children: this.renderMedia()
          }), (0, Chunk255367.jsxs)("div", {
            className: Chunk269143.description,
            children: [(0, Chunk255367.jsx)(Chunk481060.H, {
              className: Chunk269143.title,
              children: this.getTitleText()
            }), (0, Chunk255367.jsx)("div", {
              className: Chunk269143.tagline,
              children: this.getBodyText()
            }), (0, Chunk255367.jsx)("div", {
              className: Chunk269143.actions,
              children: this.renderActions()
            })]
          })]
        })
    }
  }
  constructor(e) {
    super(e), L(this, "trialOffer", true), L(this, "currentUser", true), L(this, "recipientHasNitro", true), L(this, "trialEndsAt", true), L(this, "analyticsLocations", true), L(this, "offerExpired", true), L(this, "isSender", true), L(this, "dmRefreshXPCohort", true), this.trialOffer = e.trialOffer, this.currentUser = e.currentUser, this.recipientHasNitro = e.recipientHasNitro, this.trialEndsAt = e.trialEndsAt, this.analyticsLocations = e.analyticsLocations, this.dmRefreshXPCohort = e.dmRefreshXPCohort, this.offerExpired = (0, T.B)(this.trialOffer), this.isSender = this.currentUser.id === this.trialOffer.referrer_id
  }
}

function M(e) {
  let {
    userTrialOfferId: t,
    canRenderReferralEmbed: n
  } = e, {
    trialOffer: i,
    isResolving: l
  } = (0, u.cj)([x.Z], () => ({
    trialOffer: n ? x.Z.getRelevantUserTrialOffer(t) : null,
    isResolving: !!n && x.Z.isResolving(t)
  }), [n, t]), a = b.default.getCurrentUser(), o = (0, u.e7)([b.default], () => null != i && (0, y.I5)(true !== a && i.user_id === a.id ? a : b.default.getUser(i.user_id))), s = (0, u.e7)([E.Z], () => {
    var e;
    return o ? null == (e = E.Z.getPremiumTypeSubscription()) ? true : e.trialEndsAt : null
  }), {
    analyticsLocations: d
  } = (0, _.ZP)(f.Z.SHARE_NITRO_EMBED), p = j.ZP.useExperiment({
    location: "ConnectedReferralTrialEmbed"
  });
  return l ? (0, r.jsx)(m.OR, {
    isHorizontal: !c.tq
  }) : n && null != i && true !== a ? (0, r.jsx)(D, {
    trialOffer: i,
    currentUser: a,
    recipientHasNitro: o,
    trialEndsAt: s,
    analyticsLocations: d,
    dmRefreshXPCohort: p.cohort
  }) : (0, r.jsx)("div", {
    className: w.invalidWrapper,
    children: (0, r.jsx)("div", {
      className: w.invalid
    })
  })
}