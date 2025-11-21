/** Chunk was on web.js **/
/** chunk id: 637374, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => Q
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk568836 = require("./568836.jsx"),
  Chunk730749 = require("./730749.jsx"),
  Chunk112724 = require("./112724.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk835473 = require("./835473.js"),
  Chunk884697 = require("./884697.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk479446 = require("./479446.js"),
  Chunk930114 = require("./930114.jsx"),
  Chunk981632 = require("./981632.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk164670 = require("./164670.js"),
  Chunk436585 = require("./436585.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk82142 = require("./82142.js"),
  Chunk283595 = require("./283595.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55563 = require("./55563.js"),
  Chunk199480 = require("./199480.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk669079 = require("./669079.js"),
  Chunk74538 = require("./74538.js"),
  Chunk296848 = require("./296848.js"),
  Chunk51144 = require("./51144.js"),
  Chunk626799 = require("./626799.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk494452 = require("./494452.js");

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      V(e, t, n[t])
    })
  }
  return e
}

function Y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function K(e) {
  let {
    onClick: t,
    libraryApplication: n
  } = e;
  return (0, r.jsxs)(d.P3F, {
    className: F.libraryLink,
    onClick: t,
    children: [(0, r.jsx)(d.vqy, {
      size: "md",
      color: "currentColor",
      className: F.libraryIcon
    }), (0, r.jsx)("div", {
      children: n.isHidden() ? Z.intl.string(Z.t.Wi99Ro) : Z.intl.string(Z.t["+tXad7"])
    })]
  })
}
class z extends Chunk473749.PureComponent {
  get isHorizontal() {
    let {
      width: e
    } = this.props;
    return module >= Chunk568836.aL
  }
  handleViewInventory() {
    (0, Chunk518596.openUserSettings)(Chunk313789.n.GIFT_PANEL, {
      section: Chunk981631.oAB.INVENTORY
    })
  }
  render() {
    return (0, Chunk54381.jsx)(Chunk568836.$G, {
      isHorizontal: this.isHorizontal,
      renderTitle: this.renderTitle,
      renderTagline: this.renderTagline,
      renderMedia: this.renderMedia,
      renderActions: this.renderActions
    })
  }
  constructor(...e) {
    super(...e), V(this, "renderMedia", () => (0, r.jsx)("div", {
      className: o()(F.invalidPoop, {
        [F.invalidPoopHorizontal]: this.isHorizontal
      })
    })), V(this, "renderTitle", () => this.props.isSelfGift ? Z.intl.string(Z.t.mT9B49) : Z.intl.string(Z.t.Vo5yHw)), V(this, "renderActions", () => this.props.isSelfGift ? (0, r.jsx)(d.Button, {
      variant: "primary",
      size: "sm",
      text: Z.intl.string(Z.t["jcSP+g"]),
      onClick: this.handleViewInventory
    }) : (0, r.jsx)(d.Button, {
      variant: "primary",
      size: "sm",
      text: Z.intl.string(Z.t.bUvv1f),
      disabled: true
    })), V(this, "renderTagline", () => this.props.isSelfGift ? Z.intl.string(Z.t.eEM3dq) : Z.intl.string(Z.t.tB8S6u))
  }
}
class q extends Chunk473749.Component {
  get analyticsLocation() {
    let {
      analyticsContext: {
        location: e
      }
    } = this.props;
    return W(H({}, module), {
      section: Chunk981631.jXE.GIFT_CODE_EMBED
    })
  }
  renderActions(e) {
    let {
      libraryApplication: t
    } = this.props;
    return (0, r.jsxs)(E.Z, {
      justify: E.Z.Justify.BETWEEN,
      children: [(0, r.jsxs)(E.Z, {
        children: [this.renderButton(e), null == t || e.isSubscription ? null : (0, r.jsx)(K, {
          onClick: this.handleViewLibrary,
          libraryApplication: t
        })]
      }), (0, r.jsxs)(E.Z, {
        align: E.Z.Align.END,
        justify: E.Z.Justify.END,
        className: F.metadata,
        direction: E.Z.Direction.VERTICAL,
        children: [e.hasMultipleCopies ? (0, r.jsx)("div", {
          children: this.renderGiftCodeCopiesLeft(e)
        }) : null, e.redeemed || e.isClaimed || null != t || null == e.expiresAt ? null : (0, r.jsx)("div", {
          children: Z.intl.format(Z.t.nZBvUR, {
            hours: e.expiresAt.diff(l()(), "h")
          })
        })]
      })]
    })
  }
  renderGiftCodeCopiesLeft(e) {
    let t = e.isSubscription ? Z.t["4iHwKT"] : Z.t.YeLq88;
    return Z.intl.format(t, {
      remaining: e.remainingUses,
      total: e.maxUses
    })
  }
  renderButton(e) {
    let {
      libraryApplication: t,
      currentUser: n,
      isSelfGift: i
    } = this.props, a = {
      onClick: this.handleAccept,
      color: u.zx.Colors.BRAND
    }, o = !e.isSubscription && null != t || !e.isSelfRedeemable && i || e.isExistingPremiumSubscriptionDisallowed && (0, M.I5)(n);
    return (e.redeemed || o || e.isClaimed || !n.verified) && (a.color = u.zx.Colors.BRAND, a.disabled = true), (0, r.jsx)(u.zx, W(H({}, a), {
      className: (0, g.mO)(e) ? F.collectiblesAcceptButton : null,
      size: u.zx.Sizes.SMALL,
      children: e.redeemed ? Z.intl.string(Z.t.BTihou) : null != e.giftStyle ? Z.intl.string(Z.t.TiZFqX) : Z.intl.string(Z.t.bUvv1f)
    }))
  }
  isCustomGiftMessage() {
    let {
      type: e
    } = this.props;
    return module === Chunk981631.uaV.CUSTOM_GIFT
  }
  renderTitle(e) {
    let {
      currentUser: t,
      isSelfGift: n,
      sku: r
    } = this.props;
    return this.isCustomGiftMessage() && !n ? Z.intl.formatToPlainString(Z.t.t1SOId, {
      recipientDisplayName: k.ZP.getName(t)
    }) : null == r ? null : e.isSubscription ? n ? Z.intl.string(Z.t["2PJ1NP"]) : Z.intl.string(Z.t.hrnGng) : n ? Z.intl.string(Z.t.QLEMld) : Z.intl.string(Z.t.W4DBcy)
  }
  renderBody(e) {
    let {
      libraryApplication: t,
      isSelfGift: n,
      sku: r,
      gifter: i,
      subscriptionPlan: a,
      currentUser: o
    } = this.props;
    if (null == r) return Z.intl.string(Z.t.ZTNur7);
    if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
    let s = r.isPreorder() ? Z.intl.formatToPlainString(Z.t.evinTd, {
      name: r.name
    }) : r.name;
    if (e.redeemed) return e.isSubscription || (0, g.mO)(e) || (0, I.K$)(r) ? Z.intl.string(Z.t.mVC3Cv) : Z.intl.format(Z.t["ss/L+/"], {
      skuName: s,
      onViewInLibrary: this.handleViewLibrary
    });
    if (!e.isSubscription && null != t) return Z.intl.format(Z.t.UdXO8P, {
      skuName: s,
      onViewInLibrary: this.handleViewLibrary
    });
    if (e.isClaimed) return Z.intl.string(Z.t.ARWFQX);
    if (!o.verified) return Z.intl.format(Z.t.GQxl7v, {
      onClick: this.handleVerificationClick
    });
    if (n) return e.isSelfRedeemable ? Z.intl.string(Z.t["lQI+cB"]) : Z.intl.formatToPlainString(Z.t["A+etHx"], {
      skuName: s
    });
    if (e.isExistingPremiumSubscriptionDisallowed) return Z.intl.string(Z.t.UCIU9y);
    if (e.hasMultipleCopies) return null != i ? e.isSubscription ? Z.intl.format(Z.t.l3VxgG, {
      username: k.ZP.getUserTag(i),
      maxUses: e.maxUses,
      skuName: s
    }) : Z.intl.format(Z.t["9cYrw5"], {
      username: k.ZP.getUserTag(i),
      totalCopies: e.maxUses,
      skuName: s
    }) : e.isSubscription ? Z.intl.formatToPlainString(Z.t.svrO3W, {
      maxUses: e.maxUses,
      skuName: s
    }) : Z.intl.formatToPlainString(Z.t["3AgAn3"], {
      totalCopies: e.maxUses,
      skuName: s
    });
    if (e.isSubscription) {
      if (null == a) return Z.intl.string(Z.t.ZTNur7);
      if (null != i) {
        let e = a.interval === B.rV.MONTH ? Z.t["/RDIEA"] : Z.t["3CX6Ev"];
        return Z.intl.format(e, {
          username: k.ZP.getUserTag(i),
          skuName: s,
          intervalCount: a.intervalCount
        })
      }
      let e = a.interval === B.rV.MONTH ? Z.t["2O4lo5"] : Z.t["+XjmsR"];
      return Z.intl.format(e, {
        skuName: s,
        intervalCount: a.intervalCount
      })
    }
    return null != i ? Z.intl.format(Z.t["3HsdQ/"], {
      username: k.ZP.getUserTag(i)
    }) : Z.intl.string(Z.t.Jdnjjj)
  }
  renderPromotionActions() {
    return (0, Chunk54381.jsx)(Chunk481060.Button, {
      variant: "primary",
      size: "sm",
      text: Chunk388032.intl.string(Chunk388032.t["71nuwc"]),
      onClick: this.handleClaimPromotion
    })
  }
  renderEmbed() {
    let {
      giftCode: e,
      width: t,
      sku: n
    } = this.props;
    if (null == module) return null;
    let i = null != module.giftStyle && !(0, Chunk164670.K$)(require);
    return (0, Chunk54381.jsx)(Chunk626799.$, {
      skuId: module.skuId,
      onEmbedClick: this.handleEmbedClick,
      analyticsSection: Chunk981631.jXE.GIFT_CODE_EMBED,
      renderCustomActions: () => this.renderActions(module),
      renderCustomTitle: () => this.renderTitle(module),
      renderCustomTagline: () => this.renderBody(module),
      renderCustomMedia: Chunk473749 ? () => this.renderCustomGiftBox(module) : true,
      width: exports
    })
  }
  render() {
    let {
      giftCode: e,
      resolved: t,
      width: n,
      isSelfGift: i
    } = this.props;
    if (null != module && null != module.promotion) return (0, Chunk54381.jsx)(Chunk626799.$, {
      skuId: module.skuId,
      onEmbedClick: this.handleClaimPromotion,
      analyticsSection: Chunk981631.jXE.GIFT_CODE_EMBED,
      renderCustomActions: () => this.renderPromotionActions(),
      renderCustomTitle: () => Chunk388032.intl.string(Chunk388032.t.X4p5uH),
      renderCustomTagline: () => Chunk388032.intl.string(Chunk388032.t.VIuwD7),
      width: require
    });
    if (null == module || module.revoked)
      if (exports) return (0, Chunk54381.jsx)(z, {
        isSelfGift: Chunk473749,
        width: require
      });
      else return (0, Chunk54381.jsx)(Chunk568836.OR, {
        isHorizontal: require >= Chunk568836.aL
      });
    return (0, Chunk884697.mO)(module) ? (0, Chunk54381.jsx)("div", {
      className: Chunk494452.collectiblesEmbedWrapper,
      children: this.renderEmbed()
    }) : this.renderEmbed()
  }
  constructor(...e) {
    super(...e), V(this, "handleViewLibrary", e => {
      let {
        libraryApplication: t
      } = this.props;
      e.preventDefault(), null != t && t.isHidden() ? (0, v.uL)(G.Z5c.APPLICATION_LIBRARY_SETTINGS) : (0, v.uL)(G.Z5c.APPLICATION_LIBRARY, {
        state: {
          applicationId: null != t ? t.id : true
        }
      })
    }), V(this, "handleVerificationClick", e => {
      e.stopPropagation(), e.preventDefault(), (0, A.openUserSettings)(S.n.ACCOUNT_PANEL, {
        section: G.oAB.ACCOUNT
      })
    }), V(this, "handleAccept", e => {
      let {
        channelId: t,
        code: n,
        content: r,
        type: i,
        giftInfo: a
      } = this.props;
      e.preventDefault(), e.stopPropagation(), L.default.track(G.rMx.OPEN_MODAL, {
        type: "gift_accept",
        location: W(H({}, this.analyticsLocation), {
          object: G.qAy.BUTTON_CTA
        })
      });
      let o = i !== G.uaV.CUSTOM_GIFT ? true : r;
      (0, y.V)({
        processedCode: n,
        channelContext: t,
        customGiftMessage: o,
        giftInfo: a
      })
    }), V(this, "handleEmbedClick", e => {
      let {
        giftCode: t,
        sku: n,
        skuApplication: r
      } = this.props;
      null != n && (0, I.K$)(n) && null != r && null != r.guildId ? (e.preventDefault(), (0, T.g)({
        skuId: n.id,
        applicationId: r.id,
        guildId: r.guildId,
        isStorefront: false,
        analyticsLocations: [h.Z.GIFT_CODE_EMBED]
      })) : null != t && t.isSubscription && (e.preventDefault(), (0, A.openUserSettings)(S.n.NITRO_PANEL, {
        section: G.oAB.PREMIUM
      }))
    }), V(this, "handleClaimPromotion", e => {
      var t;
      e.stopPropagation(), e.preventDefault();
      let n = null == (t = this.props.giftCode) ? true : t.code;
      null != n && window.open(G.Z5c.BILLING_PROMOTION_REDEMPTION(n))
    }), V(this, "renderCustomGiftBox", e => {
      let {
        width: t
      } = this.props;
      if (null == e || null == e.giftStyle) return null;
      let n = B.jy.includes(e.giftStyle),
        i = o()(F.customGiftEmbedWrapper, {
          [F.legacySeasonalGiftEmbedWrapper]: n,
          [F.giftEmbedWrapperHorizontal]: t >= f.aL
        }),
        a = o()({
          [F.legacySeasonalGiftEmbedBox]: n,
          [F.legacySeasonalGiftEmbedBoxHorizontal]: n && t >= f.aL,
          [F.customGiftEmbedBox]: !n,
          [F.customGiftEmbedBoxHorizontal]: !n && t >= f.aL
        });
      return (0, r.jsxs)("div", {
        className: i,
        children: [n && (0, r.jsx)(w.Z, {
          className: F.headerIcon
        }), null != e.giftStyle && (0, r.jsx)(O.Z, {
          defaultAnimationState: e.redeemed ? b.SR.LOOP : b.SR.IDLE,
          giftStyle: e.giftStyle,
          className: a
        })]
      })
    })
  }
}
let X = (0, Chunk112724.Z)((0, Chunk730749.Z)(q)),
  Q = function(e) {
    let {
      code: t,
      author: n
    } = e, {
      giftCode: i,
      resolved: a
    } = (0, c.cj)([N.Z], () => ({
      giftCode: N.Z.get(t),
      resolved: N.Z.getIsResolved(t)
    })), o = (0, c.e7)([P.default], () => null != i && null != i.userId ? P.default.getUser(i.userId) : null), s = (0, c.e7)([D.Z], () => null != i ? D.Z.get(i.skuId) : null), l = (0, c.e7)([R.Z], () => null != s && (null == i ? true : i.entitlementBranches) != null ? x.z2(i.entitlementBranches, s, R.Z) : null), u = (0, m.q)(null == s ? true : s.applicationId), d = (0, j.IV)(null == i ? true : i.subscriptionPlanId), f = (0, c.e7)([C.default], () => null != i ? C.default.getId() === i.userId : C.default.getId() === n.id);
    return (0, r.jsx)(X, W(H({}, e), {
      skuApplication: u,
      giftCode: i,
      resolved: a,
      gifter: o,
      libraryApplication: l,
      subscriptionPlan: d,
      sku: s,
      isSelfGift: f
    }))
  }