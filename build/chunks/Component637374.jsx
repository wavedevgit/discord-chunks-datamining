/** Chunk was on 66866 **/
/** chunk id: 637374, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
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

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function B(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      F(e, t, n[t])
    })
  }
  return e
}

function G(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function H(e) {
  let {
    onClick: t,
    libraryApplication: n
  } = e;
  return (0, r.jsxs)(d.P3F, {
    className: U.libraryLink,
    onClick: t,
    children: [(0, r.jsx)(d.vqy, {
      size: "md",
      color: "currentColor",
      className: U.libraryIcon
    }), (0, r.jsx)("div", {
      children: n.isHidden() ? k.intl.string(k.t.Wi99Rk) : k.intl.string(k.t["+tXad3"])
    })]
  })
}
class V extends Chunk647438.PureComponent {
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
    super(...e), F(this, "renderMedia", () => (0, r.jsx)("div", {
      className: a()(U.invalidPoop, {
        [U.invalidPoopHorizontal]: this.isHorizontal
      })
    })), F(this, "renderTitle", () => this.props.isSelfGift ? k.intl.string(k.t["mT9B4+"]) : k.intl.string(k.t.Vo5yHx)), F(this, "renderActions", () => this.props.isSelfGift ? (0, r.jsx)(d.zxk, {
      variant: "primary",
      size: "sm",
      text: k.intl.string(k.t["jcSP+v"]),
      onClick: this.handleViewInventory
    }) : (0, r.jsx)(d.zxk, {
      variant: "primary",
      size: "sm",
      text: k.intl.string(k.t.bUvv1d),
      disabled: true
    })), F(this, "renderTagline", () => this.props.isSelfGift ? k.intl.string(k.t.aUqE6e) : k.intl.string(k.t["2mWvHB"]))
  }
}
class z extends Chunk647438.Component {
  get analyticsLocation() {
    let {
      analyticsContext: {
        location: e
      }
    } = this.props;
    return G(B({}, module), {
      section: Chunk981631.jXE.GIFT_CODE_EMBED
    })
  }
  renderActions(e) {
    let {
      libraryApplication: t
    } = this.props;
    return (0, r.jsxs)(b.Z, {
      justify: b.Z.Justify.BETWEEN,
      children: [(0, r.jsxs)(b.Z, {
        children: [this.renderButton(e), null == t || e.isSubscription ? null : (0, r.jsx)(H, {
          onClick: this.handleViewLibrary,
          libraryApplication: t
        })]
      }), (0, r.jsxs)(b.Z, {
        align: b.Z.Align.END,
        justify: b.Z.Justify.END,
        className: U.metadata,
        direction: b.Z.Direction.VERTICAL,
        children: [e.hasMultipleCopies ? (0, r.jsx)("div", {
          children: this.renderGiftCodeCopiesLeft(e)
        }) : null, e.redeemed || e.isClaimed || null != t || null == e.expiresAt ? null : (0, r.jsx)("div", {
          children: k.intl.format(k.t.nZBvUV, {
            hours: e.expiresAt.diff(s()(), "h")
          })
        })]
      })]
    })
  }
  renderGiftCodeCopiesLeft(e) {
    let t = e.isSubscription ? k.t["4iHwKS"] : k.t["YeLq8/"];
    return k.intl.format(t, {
      remaining: e.remainingUses,
      total: e.maxUses
    })
  }
  renderButton(e) {
    let {
      libraryApplication: t,
      currentUser: n,
      isSelfGift: i
    } = this.props, l = {
      onClick: this.handleAccept,
      color: u.zx.Colors.BRAND
    }, a = !e.isSubscription && null != t || !e.isSelfRedeemable && i || e.isExistingPremiumSubscriptionDisallowed && (0, w.I5)(n);
    return (e.redeemed || a || e.isClaimed || !n.verified) && (l.color = u.zx.Colors.BRAND, l.disabled = true), (0, r.jsx)(u.zx, G(B({}, l), {
      className: (0, h.mO)(e) ? U.collectiblesAcceptButton : null,
      size: u.zx.Sizes.SMALL,
      children: e.redeemed ? k.intl.string(k.t.BTihoq) : null != e.giftStyle ? k.intl.string(k.t.TiZFqa) : k.intl.string(k.t.bUvv1d)
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
    return this.isCustomGiftMessage() && !n ? k.intl.formatToPlainString(k.t.t1SOIS, {
      recipientDisplayName: R.ZP.getName(t)
    }) : null == r ? null : e.isSubscription ? n ? k.intl.string(k.t["2PJ1ND"]) : k.intl.string(k.t.hrnGnp) : n ? k.intl.string(k.t.QLEMlZ) : k.intl.string(k.t.W4DBc3)
  }
  renderBody(e) {
    let {
      libraryApplication: t,
      isSelfGift: n,
      sku: r,
      gifter: i,
      subscriptionPlan: l,
      currentUser: a
    } = this.props;
    if (null == r) return k.intl.string(k.t.ZTNur6);
    if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
    let o = r.isPreorder() ? k.intl.formatToPlainString(k.t.evinTU, {
      name: r.name
    }) : r.name;
    if (e.redeemed) return e.isSubscription || (0, h.mO)(e) || (0, A.HL)({
      productLine: null == r ? true : r.productLine
    }) ? k.intl.string(k.t.mVC3Cg) : k.intl.format(k.t["ss/L+/"], {
      skuName: o,
      onViewInLibrary: this.handleViewLibrary
    });
    if (!e.isSubscription && null != t) return k.intl.format(k.t.UdXO8P, {
      skuName: o,
      onViewInLibrary: this.handleViewLibrary
    });
    if (e.isClaimed) return k.intl.string(k.t.ARWFQU);
    if (!a.verified) return k.intl.format(k.t.GQxl7u, {
      onClick: this.handleVerificationClick
    });
    if (n) return e.isSelfRedeemable ? k.intl.string(k.t["lQI+cH"]) : k.intl.formatToPlainString(k.t["A+etHx"], {
      skuName: o
    });
    if (e.isExistingPremiumSubscriptionDisallowed) return k.intl.string(k.t["UCIU9/"]);
    if (e.hasMultipleCopies) return null != i ? e.isSubscription ? k.intl.format(k.t.l3VxgI, {
      username: R.ZP.getUserTag(i),
      maxUses: e.maxUses,
      skuName: o
    }) : k.intl.format(k.t["9cYrw8"], {
      username: R.ZP.getUserTag(i),
      totalCopies: e.maxUses,
      skuName: o
    }) : e.isSubscription ? k.intl.formatToPlainString(k.t.svrO3d, {
      maxUses: e.maxUses,
      skuName: o
    }) : k.intl.formatToPlainString(k.t["3AgAn5"], {
      totalCopies: e.maxUses,
      skuName: o
    });
    if (e.isSubscription) {
      if (null == l) return k.intl.string(k.t.ZTNur6);
      if (null != i) {
        let e = l.interval === M.rV.MONTH ? k.t["/RDIEB"] : k.t["3CX6Eh"];
        return k.intl.format(e, {
          username: R.ZP.getUserTag(i),
          skuName: o,
          intervalCount: l.intervalCount
        })
      }
      let e = l.interval === M.rV.MONTH ? k.t["2O4lo6"] : k.t["+Xjmsb"];
      return k.intl.format(e, {
        skuName: o,
        intervalCount: l.intervalCount
      })
    }
    return null != i ? k.intl.format(k.t["3HsdQ0"], {
      username: R.ZP.getUserTag(i)
    }) : k.intl.string(k.t.Jdnjjo)
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
      if (exports) return (0, Chunk951288.jsx)(V, {
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
    super(...e), F(this, "handleViewLibrary", e => {
      let {
        libraryApplication: t
      } = this.props;
      e.preventDefault(), null != t && t.isHidden() ? (0, O.uL)(D.Z5c.APPLICATION_LIBRARY_SETTINGS) : (0, O.uL)(D.Z5c.APPLICATION_LIBRARY, {
        state: {
          applicationId: null != t ? t.id : true
        }
      })
    }), F(this, "handleVerificationClick", e => {
      e.stopPropagation(), e.preventDefault(), p.Z.open(D.oAB.ACCOUNT)
    }), F(this, "handleAccept", e => {
      let {
        channelId: t,
        code: n,
        content: r,
        type: i,
        giftInfo: l
      } = this.props;
      e.preventDefault(), e.stopPropagation(), N.default.track(D.rMx.OPEN_MODAL, {
        type: "gift_accept",
        location: G(B({}, this.analyticsLocation), {
          object: D.qAy.BUTTON_CTA
        })
      });
      let a = i !== D.uaV.CUSTOM_GIFT ? true : r;
      (0, C.V)({
        processedCode: n,
        channelContext: t,
        customGiftMessage: a,
        giftInfo: l
      })
    }), F(this, "handleEmbedClick", e => {
      let {
        giftCode: t
      } = this.props;
      null != t && t.isSubscription && (e.preventDefault(), p.Z.open(D.oAB.PREMIUM))
    }), F(this, "handleClaimPromotion", e => {
      var t;
      e.stopPropagation(), e.preventDefault();
      let n = null == (t = this.props.giftCode) ? true : t.code;
      null != n && window.open(D.Z5c.BILLING_PROMOTION_REDEMPTION(n))
    }), F(this, "renderCustomGiftBox", e => {
      let {
        width: t
      } = this.props;
      if (null == e || null == e.giftStyle) return null;
      let n = M.jy.includes(e.giftStyle),
        i = a()(U.customGiftEmbedWrapper, {
          [U.legacySeasonalGiftEmbedWrapper]: n,
          [U.giftEmbedWrapperHorizontal]: t >= m.aL
        }),
        l = a()({
          [U.legacySeasonalGiftEmbedBox]: n,
          [U.legacySeasonalGiftEmbedBoxHorizontal]: n && t >= m.aL,
          [U.customGiftEmbedBox]: !n,
          [U.customGiftEmbedBoxHorizontal]: !n && t >= m.aL
        });
      return (0, r.jsxs)("div", {
        className: i,
        children: [n && (0, r.jsx)(P.Z, {
          className: U.headerIcon
        }), null != e.giftStyle && (0, r.jsx)(v.Z, {
          defaultAnimationState: e.redeemed ? E.SR.LOOP : E.SR.IDLE,
          giftStyle: e.giftStyle,
          className: l
        })]
      })
    })
  }
}
let W = (0, Chunk112724.Z)((0, Chunk730749.Z)(z)),
  Y = Chunk442837.ZP.connectStores([Chunk82142.Z, Chunk55563.Z, Chunk594174.default, Chunk283595.Z, Chunk509545.Z, Chunk314897.default, Chunk607070.Z], e => {
    let {
      code: t,
      author: n,
      currentUser: r
    } = e, i = x.Z.get(t), l = null != i ? T.Z.get(i.skuId) : null, a = null != i && null != i.userId ? I.default.getUser(i.userId) : null;
    return {
      sku: l,
      giftCode: i,
      gifter: a,
      currentUser: r,
      subscriptionPlan: null != i && null != i.subscriptionPlanId ? (0, Z.oE)(i.subscriptionPlanId) : null,
      isSelfGift: null != i ? y.default.getId() === i.userId : y.default.getId() === n.id,
      resolved: x.Z.getIsResolved(t),
      libraryApplication: null != l && (null == i ? true : i.entitlementBranches) != null ? A.z2(i.entitlementBranches, l, j.Z) : null
    }
  })(W)