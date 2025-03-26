/** Chunk was on 52272 **/
n.d(t, {
  Z: () => P
}), n(266796), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  l = n(913527),
  s = n.n(l),
  c = n(873546),
  u = n(442837),
  d = n(481060),
  p = n(568836),
  m = n(100527),
  f = n(906732),
  h = n(963249),
  g = n(594174),
  _ = n(78839),
  b = n(55935),
  v = n(63063),
  x = n(74538),
  y = n(276444),
  E = n(786397),
  O = n(474936),
  N = n(981631),
  j = n(388032),
  C = n(370321);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}
class T extends i.Component {
  renderTitle(e, t, n) {
    let {
      trialOffer: r
    } = this.props, i = g.default.getUser(r.user_id), o = null != i ? i.username : "???", a = g.default.getUser(r.referrer_id), l = null != a ? a.username : "???";
    return e && void 0 === r.redeemed_at ? j.NW.formatToPlainString(j.t.Mptau7, {
      username: o
    }) : t ? n ? j.NW.string(j.t["9SNdf3"]) : j.NW.formatToPlainString(j.t["H0+MxM"], {
      userName: l
    }) : j.NW.formatToPlainString(j.t.IiWKws, {
      senderUserName: l,
      recipientUserName: o
    })
  }
  renderBody(e, t, n) {
    let {
      trialOffer: r
    } = this.props;
    return e && !n && void 0 === r.redeemed_at ? j.NW.format(j.t.LwCwT0, {
      helpdeskArticle: v.Z.getArticleURL(N.BhN.REFERRAL_PROGRAM)
    }) : t ? null : j.NW.string(j.t.lQLlOT)
  }
  renderActions(e, t, n) {
    var i, o;
    let {
      trialOffer: a,
      currentUser: l,
      analyticsLocations: s
    } = this.props, c = {
      onClick: () => {
        this.handleStartTrial(a, s)
      },
      color: d.zxk.Colors.BRAND
    }, u = l.id !== a.user_id || (0, x.I5)(l) || !l.verified || (0, E.B)(a), p = this.renderExpirationDate(e, t, n);
    return c.disabled = u, (0, r.jsxs)("div", {
      className: C.buttonContainer,
      children: [(0, r.jsx)("div", {
        children: (0, r.jsx)(d.zxk, (i = S({}, c), o = o = {
          size: d.zxk.Sizes.SMALL,
          onClick: () => {
            (0, h.Z)({
              initialPlanId: null,
              subscriptionTier: O.Si.TIER_2,
              analyticsLocations: s,
              trialId: a.trial_id,
              referralTrialOfferId: a.id
            })
          },
          children: j.NW.string(j.t.O0etsL)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
        }), i))
      }), (0, r.jsx)("div", {
        className: C.metadata,
        children: p
      })]
    })
  }
  renderExpirationDate(e, t, n) {
    let {
      trialOffer: r,
      trialEndsAt: i
    } = this.props;
    if (void 0 !== r.redeemed_at && !n && null !== i) return j.NW.formatToPlainString(j.t.nP0ivb, {
      date: (0, b.vc)(s()(i), "LL")
    });
    if (e || void 0 === r.expires_at) return null;
    let o = s()(r.expires_at);
    if (t) return j.NW.formatToPlainString(j.t.PuSHfX, {
      date: (0, b.vc)(s()(o), "LL")
    });
    let a = o.diff(s()(), "h");
    if (a > 48) {
      let e = o.diff(s()(), "d");
      return j.NW.formatToPlainString(j.t["g9s+dH"], {
        numDays: e
      })
    }
    if (a > 1) return j.NW.formatToPlainString(j.t.k9v339, {
      numHours: a
    });
    let l = o.diff(s()(), "minutes");
    return j.NW.formatToPlainString(j.t["/d0GmZ"], {
      numMinutes: l
    })
  }
  renderMedia() {
    return (0, r.jsx)("div", {
      className: C.referral
    })
  }
  render() {
    let {
      trialOffer: e,
      currentUser: t,
      recipientHasNitro: n
    } = this.props, i = (0, E.B)(e), o = t.id === e.referrer_id;
    return (0, r.jsxs)("div", {
      className: a()(C.tile, C.container),
      children: [(0, r.jsx)("div", {
        className: C.media,
        children: this.renderMedia()
      }), (0, r.jsxs)("div", {
        className: C.description,
        children: [(0, r.jsx)(d.H, {
          className: C.title,
          children: this.renderTitle(n, i, o)
        }), (0, r.jsx)("div", {
          className: C.tagline,
          children: this.renderBody(n, i, o)
        }), (0, r.jsx)("div", {
          className: C.actions,
          children: this.renderActions(n, i, o)
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), I(this, "handleStartTrial", (e, t) => {
      (0, h.Z)({
        initialPlanId: null,
        subscriptionTier: O.Si.TIER_2,
        analyticsLocations: t,
        trialId: e.trial_id
      })
    })
  }
}

function P(e) {
  let {
    userTrialOfferId: t,
    canRenderReferralEmbed: n
  } = e, {
    trialOffer: i,
    isResolving: o
  } = (0, u.cj)([y.Z], () => ({
    trialOffer: n ? y.Z.getRelevantUserTrialOffer(t) : null,
    isResolving: !!n && y.Z.isResolving(t)
  }), [n, t]), a = g.default.getCurrentUser(), l = (0, u.e7)([g.default], () => null != i && (0, x.I5)(void 0 !== a && i.user_id === a.id ? a : g.default.getUser(i.user_id))), s = (0, u.e7)([_.ZP], () => {
    var e;
    return l ? null === (e = _.ZP.getPremiumTypeSubscription()) || void 0 === e ? void 0 : e.trialEndsAt : null
  }), {
    analyticsLocations: d
  } = (0, f.ZP)(m.Z.SHARE_NITRO_EMBED);
  return o ? (0, r.jsx)(p.OR, {
    isHorizontal: !c.tq
  }) : n && null != i && void 0 !== a ? (0, r.jsx)(T, S({
    trialOffer: i,
    currentUser: a,
    recipientHasNitro: l,
    trialEndsAt: s,
    analyticsLocations: d
  }, e)) : (0, r.jsx)("div", {
    className: C.invalidWrapper,
    children: (0, r.jsx)("div", {
      className: C.invalid
    })
  })
}