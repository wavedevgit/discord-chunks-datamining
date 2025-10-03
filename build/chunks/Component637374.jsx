/** Chunk was on web.js **/
/** chunk id: 637374, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => q
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
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
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

function Z(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function F(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Z(e, t, n[t])
    })
  }
  return e
}

function V(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function H(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : V(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Y(e) {
  let {
    onClick: t,
    libraryApplication: n
  } = e;
  return (0, r.jsxs)(d.P3F, {
    className: B.libraryLink,
    onClick: t,
    children: [(0, r.jsx)(d.vqy, {
      size: "md",
      color: "currentColor",
      className: B.libraryIcon
    }), (0, r.jsx)("div", {
      children: n.isHidden() ? G.intl.string(G.t.Wi99Rk) : G.intl.string(G.t["+tXad3"])
    })]
  })
}
class W extends Chunk647438.PureComponent {
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
    return (0, Chunk951288.jsx)(Chunk568836.$G, {
      isHorizontal: this.isHorizontal,
      renderTitle: this.renderTitle,
      renderTagline: this.renderTagline,
      renderMedia: this.renderMedia,
      renderActions: this.renderActions
    })
  }
  constructor(...e) {
    super(...e), Z(this, "renderMedia", () => (0, r.jsx)("div", {
      className: o()(B.invalidPoop, {
        [B.invalidPoopHorizontal]: this.isHorizontal
      })
    })), Z(this, "renderTitle", () => this.props.isSelfGift ? G.intl.string(G.t["mT9B4+"]) : G.intl.string(G.t.Vo5yHx)), Z(this, "renderActions", () => this.props.isSelfGift ? (0, r.jsx)(d.zxk, {
      variant: "primary",
      size: "sm",
      text: G.intl.string(G.t["jcSP+v"]),
      onClick: this.handleViewInventory
    }) : (0, r.jsx)(d.zxk, {
      variant: "primary",
      size: "sm",
      text: G.intl.string(G.t.bUvv1d),
      disabled: true
    })), Z(this, "renderTagline", () => this.props.isSelfGift ? G.intl.string(G.t.aUqE6e) : G.intl.string(G.t["2mWvHB"]))
  }
}
class K extends Chunk647438.Component {
  get analyticsLocation() {
    let {
      analyticsContext: {
        location: e
      }
    } = this.props;
    return H(F({}, module), {
      section: Chunk981631.jXE.GIFT_CODE_EMBED
    })
  }
  renderActions(e) {
    let {
      libraryApplication: t
    } = this.props;
    return (0, r.jsxs)(g.Z, {
      justify: g.Z.Justify.BETWEEN,
      children: [(0, r.jsxs)(g.Z, {
        children: [this.renderButton(e), null == t || e.isSubscription ? null : (0, r.jsx)(Y, {
          onClick: this.handleViewLibrary,
          libraryApplication: t
        })]
      }), (0, r.jsxs)(g.Z, {
        align: g.Z.Align.END,
        justify: g.Z.Justify.END,
        className: B.metadata,
        direction: g.Z.Direction.VERTICAL,
        children: [e.hasMultipleCopies ? (0, r.jsx)("div", {
          children: this.renderGiftCodeCopiesLeft(e)
        }) : null, e.redeemed || e.isClaimed || null != t || null == e.expiresAt ? null : (0, r.jsx)("div", {
          children: G.intl.format(G.t.nZBvUV, {
            hours: e.expiresAt.diff(l()(), "h")
          })
        })]
      })]
    })
  }
  renderGiftCodeCopiesLeft(e) {
    let t = e.isSubscription ? G.t["4iHwKS"] : G.t["YeLq8/"];
    return G.intl.format(t, {
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
    }, o = !e.isSubscription && null != t || !e.isSelfRedeemable && i || e.isExistingPremiumSubscriptionDisallowed && (0, L.I5)(n);
    return (e.redeemed || o || e.isClaimed || !n.verified) && (a.color = u.zx.Colors.BRAND, a.disabled = true), (0, r.jsx)(u.zx, H(F({}, a), {
      className: (0, m.mO)(e) ? B.collectiblesAcceptButton : null,
      size: u.zx.Sizes.SMALL,
      children: e.redeemed ? G.intl.string(G.t.BTihoq) : null != e.giftStyle ? G.intl.string(G.t.TiZFqa) : G.intl.string(G.t.bUvv1d)
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
    return this.isCustomGiftMessage() && !n ? G.intl.formatToPlainString(G.t.t1SOIS, {
      recipientDisplayName: M.ZP.getName(t)
    }) : null == r ? null : e.isSubscription ? n ? G.intl.string(G.t["2PJ1ND"]) : G.intl.string(G.t.hrnGnp) : n ? G.intl.string(G.t.QLEMlZ) : G.intl.string(G.t.W4DBc3)
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
    if (null == r) return G.intl.string(G.t.ZTNur6);
    if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
    let s = r.isPreorder() ? G.intl.formatToPlainString(G.t.evinTU, {
      name: r.name
    }) : r.name;
    if (e.redeemed) return e.isSubscription || (0, m.mO)(e) || (0, D.HL)({
      productLine: null == r ? true : r.productLine
    }) ? G.intl.string(G.t.mVC3Cg) : G.intl.format(G.t["ss/L+/"], {
      skuName: s,
      onViewInLibrary: this.handleViewLibrary
    });
    if (!e.isSubscription && null != t) return G.intl.format(G.t.UdXO8P, {
      skuName: s,
      onViewInLibrary: this.handleViewLibrary
    });
    if (e.isClaimed) return G.intl.string(G.t.ARWFQU);
    if (!o.verified) return G.intl.format(G.t.GQxl7u, {
      onClick: this.handleVerificationClick
    });
    if (n) return e.isSelfRedeemable ? G.intl.string(G.t["lQI+cH"]) : G.intl.formatToPlainString(G.t["A+etHx"], {
      skuName: s
    });
    if (e.isExistingPremiumSubscriptionDisallowed) return G.intl.string(G.t["UCIU9/"]);
    if (e.hasMultipleCopies) return null != i ? e.isSubscription ? G.intl.format(G.t.l3VxgI, {
      username: M.ZP.getUserTag(i),
      maxUses: e.maxUses,
      skuName: s
    }) : G.intl.format(G.t["9cYrw8"], {
      username: M.ZP.getUserTag(i),
      totalCopies: e.maxUses,
      skuName: s
    }) : e.isSubscription ? G.intl.formatToPlainString(G.t.svrO3d, {
      maxUses: e.maxUses,
      skuName: s
    }) : G.intl.formatToPlainString(G.t["3AgAn5"], {
      totalCopies: e.maxUses,
      skuName: s
    });
    if (e.isSubscription) {
      if (null == a) return G.intl.string(G.t.ZTNur6);
      if (null != i) {
        let e = a.interval === U.rV.MONTH ? G.t["/RDIEB"] : G.t["3CX6Eh"];
        return G.intl.format(e, {
          username: M.ZP.getUserTag(i),
          skuName: s,
          intervalCount: a.intervalCount
        })
      }
      let e = a.interval === U.rV.MONTH ? G.t["2O4lo6"] : G.t["+Xjmsb"];
      return G.intl.format(e, {
        skuName: s,
        intervalCount: a.intervalCount
      })
    }
    return null != i ? G.intl.format(G.t["3HsdQ0"], {
      username: M.ZP.getUserTag(i)
    }) : G.intl.string(G.t.Jdnjjo)
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
      if (exports) return (0, Chunk951288.jsx)(W, {
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
    super(...e), Z(this, "handleViewLibrary", e => {
      let {
        libraryApplication: t
      } = this.props;
      e.preventDefault(), null != t && t.isHidden() ? (0, O.uL)(k.Z5c.APPLICATION_LIBRARY_SETTINGS) : (0, O.uL)(k.Z5c.APPLICATION_LIBRARY, {
        state: {
          applicationId: null != t ? t.id : true
        }
      })
    }), Z(this, "handleVerificationClick", e => {
      e.stopPropagation(), e.preventDefault(), (0, I.openUserSettings)(v.n.ACCOUNT_PANEL, {
        section: k.oAB.ACCOUNT
      })
    }), Z(this, "handleAccept", e => {
      let {
        channelId: t,
        code: n,
        content: r,
        type: i,
        giftInfo: a
      } = this.props;
      e.preventDefault(), e.stopPropagation(), w.default.track(k.rMx.OPEN_MODAL, {
        type: "gift_accept",
        location: H(F({}, this.analyticsLocation), {
          object: k.qAy.BUTTON_CTA
        })
      });
      let o = i !== k.uaV.CUSTOM_GIFT ? true : r;
      (0, b.V)({
        processedCode: n,
        channelContext: t,
        customGiftMessage: o,
        giftInfo: a
      })
    }), Z(this, "handleEmbedClick", e => {
      let {
        giftCode: t
      } = this.props;
      null != t && t.isSubscription && (e.preventDefault(), (0, I.openUserSettings)(v.n.NITRO_PANEL, {
        section: k.oAB.PREMIUM
      }))
    }), Z(this, "handleClaimPromotion", e => {
      var t;
      e.stopPropagation(), e.preventDefault();
      let n = null == (t = this.props.giftCode) ? true : t.code;
      null != n && window.open(k.Z5c.BILLING_PROMOTION_REDEMPTION(n))
    }), Z(this, "renderCustomGiftBox", e => {
      let {
        width: t
      } = this.props;
      if (null == e || null == e.giftStyle) return null;
      let n = U.jy.includes(e.giftStyle),
        i = o()(B.customGiftEmbedWrapper, {
          [B.legacySeasonalGiftEmbedWrapper]: n,
          [B.giftEmbedWrapperHorizontal]: t >= f.aL
        }),
        a = o()({
          [B.legacySeasonalGiftEmbedBox]: n,
          [B.legacySeasonalGiftEmbedBoxHorizontal]: n && t >= f.aL,
          [B.customGiftEmbedBox]: !n,
          [B.customGiftEmbedBoxHorizontal]: !n && t >= f.aL
        });
      return (0, r.jsxs)("div", {
        className: i,
        children: [n && (0, r.jsx)(P.Z, {
          className: B.headerIcon
        }), null != e.giftStyle && (0, r.jsx)(y.Z, {
          defaultAnimationState: e.redeemed ? E.SR.LOOP : E.SR.IDLE,
          giftStyle: e.giftStyle,
          className: a
        })]
      })
    })
  }
}
let z = (0, Chunk112724.Z)((0, Chunk730749.Z)(K)),
  q = Chunk442837.ZP.connectStores([Chunk82142.Z, Chunk55563.Z, Chunk594174.default, Chunk283595.Z, Chunk509545.Z, Chunk314897.default, Chunk607070.Z], e => {
    let {
      code: t,
      author: n,
      currentUser: r
    } = e, i = S.Z.get(t), a = null != i ? R.Z.get(i.skuId) : null, o = null != i && null != i.userId ? C.default.getUser(i.userId) : null;
    return {
      sku: a,
      giftCode: i,
      gifter: o,
      currentUser: r,
      subscriptionPlan: null != i && null != i.subscriptionPlanId ? (0, x.oE)(i.subscriptionPlanId) : null,
      isSelfGift: null != i ? T.default.getId() === i.userId : T.default.getId() === n.id,
      resolved: S.Z.getIsResolved(t),
      libraryApplication: null != a && (null == i ? true : i.entitlementBranches) != null ? D.z2(i.entitlementBranches, a, A.Z) : null
    }
  })(z)