/** Chunk was on web.js **/
/** chunk id: 637374, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk568836 = require("./568836.jsx"),
  Chunk730749 = require("./730749.jsx"),
  Chunk112724 = require("./112724.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk884697 = require("./884697.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk479446 = require("./479446.js"),
  Chunk930114 = require("./930114.jsx"),
  Chunk981632 = require("./981632.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk82142 = require("./82142.js"),
  Chunk283595 = require("./283595.js"),
  Chunk594174 = require("./594174.js"),
  Chunk509545 = require("./509545.js"),
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

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      B(e, t, n[t])
    })
  }
  return e
}

function F(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function V(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function H(e) {
  let {
    onClick: t,
    libraryApplication: n
  } = e;
  return (0, r.jsxs)(d.P3F, {
    className: G.libraryLink,
    onClick: t,
    children: [(0, r.jsx)(d.vqy, {
      size: "md",
      color: "currentColor",
      className: G.libraryIcon
    }), (0, r.jsx)("div", {
      children: n.isHidden() ? U.intl.string(U.t.Wi99Rk) : U.intl.string(U.t["+tXad3"])
    })]
  })
}
class Y extends Chunk647438.PureComponent {
  get isHorizontal() {
    let {
      width: e
    } = this.props;
    return module >= Chunk568836.aL
  }
  handleViewInventory() {
    Chunk230711.Z.open(Chunk981631.oAB.INVENTORY)
  }
  render() {
    return (0, Chunk951288.jsx)(Chunk568836.$G, {
      isHorizontal: this.isHorizontal,
      renderTitle: this.renderTitle,
      renderTagline: this.renderTagline,
      renderMedia: this.renderMedia,
      renderActions: this.renderActions
    })
  }
  constructor(...e) {
    super(...e), B(this, "renderMedia", () => (0, r.jsx)("div", {
      className: o()(G.invalidPoop, {
        [G.invalidPoopHorizontal]: this.isHorizontal
      })
    })), B(this, "renderTitle", () => this.props.isSelfGift ? U.intl.string(U.t["mT9B4+"]) : U.intl.string(U.t.Vo5yHx)), B(this, "renderActions", () => this.props.isSelfGift ? (0, r.jsx)(d.zxk, {
      variant: "primary",
      size: "sm",
      text: U.intl.string(U.t["jcSP+v"]),
      onClick: this.handleViewInventory
    }) : (0, r.jsx)(d.zxk, {
      variant: "primary",
      size: "sm",
      text: U.intl.string(U.t.bUvv1d),
      disabled: true
    })), B(this, "renderTagline", () => this.props.isSelfGift ? U.intl.string(U.t.aUqE6e) : U.intl.string(U.t["2mWvHB"]))
  }
}
class W extends Chunk647438.Component {
  get analyticsLocation() {
    let {
      analyticsContext: {
        location: e
      }
    } = this.props;
    return V(Z({}, module), {
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
        children: [this.renderButton(e), null == t || e.isSubscription ? null : (0, r.jsx)(H, {
          onClick: this.handleViewLibrary,
          libraryApplication: t
        })]
      }), (0, r.jsxs)(E.Z, {
        align: E.Z.Align.END,
        justify: E.Z.Justify.END,
        className: G.metadata,
        direction: E.Z.Direction.VERTICAL,
        children: [e.hasMultipleCopies ? (0, r.jsx)("div", {
          children: this.renderGiftCodeCopiesLeft(e)
        }) : null, e.redeemed || e.isClaimed || null != t || null == e.expiresAt ? null : (0, r.jsx)("div", {
          children: U.intl.format(U.t.nZBvUV, {
            hours: e.expiresAt.diff(l()(), "h")
          })
        })]
      })]
    })
  }
  renderGiftCodeCopiesLeft(e) {
    let t = e.isSubscription ? U.t["4iHwKS"] : U.t["YeLq8/"];
    return U.intl.format(t, {
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
    }, o = !e.isSubscription && null != t || !e.isSelfRedeemable && i || e.isExistingPremiumSubscriptionDisallowed && (0, D.I5)(n);
    return (e.redeemed || o || e.isClaimed || !n.verified) && (a.color = u.zx.Colors.BRAND, a.disabled = true), (0, r.jsx)(u.zx, V(Z({}, a), {
      className: (0, g.mO)(e) ? G.collectiblesAcceptButton : null,
      size: u.zx.Sizes.SMALL,
      children: e.redeemed ? U.intl.string(U.t.BTihoq) : null != e.giftStyle ? U.intl.string(U.t.TiZFqa) : U.intl.string(U.t.bUvv1d)
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
    return this.isCustomGiftMessage() && !n ? U.intl.formatToPlainString(U.t.t1SOIS, {
      recipientDisplayName: L.ZP.getName(t)
    }) : null == r ? null : e.isSubscription ? n ? U.intl.string(U.t["2PJ1ND"]) : U.intl.string(U.t.hrnGnp) : n ? U.intl.string(U.t.QLEMlZ) : U.intl.string(U.t.W4DBc3)
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
    if (null == r) return U.intl.string(U.t.ZTNur6);
    if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
    let s = r.isPreorder() ? U.intl.formatToPlainString(U.t.evinTU, {
      name: r.name
    }) : r.name;
    if (e.redeemed) return e.isSubscription || (0, g.mO)(e) || (0, w.HL)({
      productLine: null == r ? true : r.productLine
    }) ? U.intl.string(U.t.mVC3Cg) : U.intl.format(U.t["ss/L+/"], {
      skuName: s,
      onViewInLibrary: this.handleViewLibrary
    });
    if (!e.isSubscription && null != t) return U.intl.format(U.t.UdXO8P, {
      skuName: s,
      onViewInLibrary: this.handleViewLibrary
    });
    if (e.isClaimed) return U.intl.string(U.t.ARWFQU);
    if (!o.verified) return U.intl.format(U.t.GQxl7u, {
      onClick: this.handleVerificationClick
    });
    if (n) return e.isSelfRedeemable ? U.intl.string(U.t["lQI+cH"]) : U.intl.formatToPlainString(U.t["A+etHx"], {
      skuName: s
    });
    if (e.isExistingPremiumSubscriptionDisallowed) return U.intl.string(U.t["UCIU9/"]);
    if (e.hasMultipleCopies) return null != i ? e.isSubscription ? U.intl.format(U.t.l3VxgI, {
      username: L.ZP.getUserTag(i),
      maxUses: e.maxUses,
      skuName: s
    }) : U.intl.format(U.t["9cYrw8"], {
      username: L.ZP.getUserTag(i),
      totalCopies: e.maxUses,
      skuName: s
    }) : e.isSubscription ? U.intl.formatToPlainString(U.t.svrO3d, {
      maxUses: e.maxUses,
      skuName: s
    }) : U.intl.formatToPlainString(U.t["3AgAn5"], {
      totalCopies: e.maxUses,
      skuName: s
    });
    if (e.isSubscription) {
      if (null == a) return U.intl.string(U.t.ZTNur6);
      if (null != i) {
        let e = a.interval === M.rV.MONTH ? U.t["/RDIEB"] : U.t["3CX6Eh"];
        return U.intl.format(e, {
          username: L.ZP.getUserTag(i),
          skuName: s,
          intervalCount: a.intervalCount
        })
      }
      let e = a.interval === M.rV.MONTH ? U.t["2O4lo6"] : U.t["+Xjmsb"];
      return U.intl.format(e, {
        skuName: s,
        intervalCount: a.intervalCount
      })
    }
    return null != i ? U.intl.format(U.t["3HsdQ0"], {
      username: L.ZP.getUserTag(i)
    }) : U.intl.string(U.t.Jdnjjo)
  }
  renderPromotionActions() {
    return (0, Chunk951288.jsx)(Chunk481060.zxk, {
      variant: "primary",
      size: "sm",
      text: Chunk388032.intl.string(Chunk388032.t["71nuwc"]),
      onClick: this.handleClaimPromotion
    })
  }
  renderEmbed() {
    let {
      giftCode: e,
      width: t
    } = this.props;
    return null == module ? null : (0, Chunk951288.jsx)(Chunk626799.$, {
      skuId: module.skuId,
      onEmbedClick: this.handleEmbedClick,
      analyticsSection: Chunk981631.jXE.GIFT_CODE_EMBED,
      renderCustomActions: () => this.renderActions(module),
      renderCustomTitle: () => this.renderTitle(module),
      renderCustomTagline: () => this.renderBody(module),
      renderCustomMedia: null == module.giftStyle ? true : () => this.renderCustomGiftBox(module),
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
    if (null != module && null != module.promotion) return (0, Chunk951288.jsx)(Chunk626799.$, {
      skuId: module.skuId,
      onEmbedClick: this.handleClaimPromotion,
      analyticsSection: Chunk981631.jXE.GIFT_CODE_EMBED,
      renderCustomActions: () => this.renderPromotionActions(),
      renderCustomTitle: () => Chunk388032.intl.string(Chunk388032.t.X4p5uL),
      renderCustomTagline: () => Chunk388032.intl.string(Chunk388032.t.VIuwDw),
      width: require
    });
    if (null == module || module.revoked)
      if (exports) return (0, Chunk951288.jsx)(Y, {
        isSelfGift: Chunk647438,
        width: require
      });
      else return (0, Chunk951288.jsx)(Chunk568836.OR, {
        isHorizontal: require >= Chunk568836.aL
      });
    return (0, Chunk884697.mO)(module) ? (0, Chunk951288.jsx)("div", {
      className: Chunk494452.collectiblesEmbedWrapper,
      children: this.renderEmbed()
    }) : this.renderEmbed()
  }
  constructor(...e) {
    super(...e), B(this, "handleViewLibrary", e => {
      let {
        libraryApplication: t
      } = this.props;
      e.preventDefault(), null != t && t.isHidden() ? (0, v.uL)(k.Z5c.APPLICATION_LIBRARY_SETTINGS) : (0, v.uL)(k.Z5c.APPLICATION_LIBRARY, {
        state: {
          applicationId: null != t ? t.id : true
        }
      })
    }), B(this, "handleVerificationClick", e => {
      e.stopPropagation(), e.preventDefault(), f.Z.open(k.oAB.ACCOUNT)
    }), B(this, "handleAccept", e => {
      let {
        channelId: t,
        code: n,
        content: r,
        type: i,
        giftInfo: a
      } = this.props;
      e.preventDefault(), e.stopPropagation(), P.default.track(k.rMx.OPEN_MODAL, {
        type: "gift_accept",
        location: V(Z({}, this.analyticsLocation), {
          object: k.qAy.BUTTON_CTA
        })
      });
      let o = i !== k.uaV.CUSTOM_GIFT ? true : r;
      (0, y.V)({
        processedCode: n,
        channelContext: t,
        customGiftMessage: o,
        giftInfo: a
      })
    }), B(this, "handleEmbedClick", e => {
      let {
        giftCode: t
      } = this.props;
      null != t && t.isSubscription && (e.preventDefault(), f.Z.open(k.oAB.PREMIUM))
    }), B(this, "handleClaimPromotion", e => {
      var t;
      e.stopPropagation(), e.preventDefault();
      let n = null == (t = this.props.giftCode) ? true : t.code;
      null != n && window.open(k.Z5c.BILLING_PROMOTION_REDEMPTION(n))
    }), B(this, "renderCustomGiftBox", e => {
      let {
        width: t
      } = this.props;
      if (null == e || null == e.giftStyle) return null;
      let n = M.jy.includes(e.giftStyle),
        i = o()(G.customGiftEmbedWrapper, {
          [G.legacySeasonalGiftEmbedWrapper]: n,
          [G.giftEmbedWrapperHorizontal]: t >= _.aL
        }),
        a = o()({
          [G.legacySeasonalGiftEmbedBox]: n,
          [G.legacySeasonalGiftEmbedBoxHorizontal]: n && t >= _.aL,
          [G.customGiftEmbedBox]: !n,
          [G.customGiftEmbedBoxHorizontal]: !n && t >= _.aL
        });
      return (0, r.jsxs)("div", {
        className: i,
        children: [n && (0, r.jsx)(R.Z, {
          className: G.headerIcon
        }), null != e.giftStyle && (0, r.jsx)(O.Z, {
          defaultAnimationState: e.redeemed ? b.SR.LOOP : b.SR.IDLE,
          giftStyle: e.giftStyle,
          className: a
        })]
      })
    })
  }
}
let K = (0, Chunk112724.Z)((0, Chunk730749.Z)(W)),
  z = Chunk442837.ZP.connectStores([Chunk82142.Z, Chunk55563.Z, Chunk594174.default, Chunk283595.Z, Chunk509545.Z, Chunk314897.default, Chunk607070.Z], e => {
    let {
      code: t,
      author: n,
      currentUser: r
    } = e, i = T.Z.get(t), a = null != i ? N.Z.get(i.skuId) : null, o = null != i && null != i.userId ? A.default.getUser(i.userId) : null;
    return {
      sku: a,
      giftCode: i,
      gifter: o,
      currentUser: r,
      subscriptionPlan: null != i && null != i.subscriptionPlanId ? (0, x.oE)(i.subscriptionPlanId) : null,
      isSelfGift: null != i ? I.default.getId() === i.userId : I.default.getId() === n.id,
      resolved: T.Z.getIsResolved(t),
      libraryApplication: null != a && (null == i ? true : i.entitlementBranches) != null ? w.z2(i.entitlementBranches, a, S.Z) : null
    }
  })(K)