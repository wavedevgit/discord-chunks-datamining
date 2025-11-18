/** Chunk was on web.js **/
/** chunk id: 637374, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => X
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
  Chunk584645 = require("./584645.js");

function F(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function V(e) {
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

function H(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function Y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : H(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function W(e) {
  let {
    onClick: t,
    libraryApplication: n
  } = e;
  return (0, r.jsxs)(d.P3F, {
    className: Z.libraryLink,
    onClick: t,
    children: [(0, r.jsx)(d.vqy, {
      size: "md",
      color: "currentColor",
      className: Z.libraryIcon
    }), (0, r.jsx)("div", {
      children: n.isHidden() ? B.intl.string(B.t.Wi99Ro) : B.intl.string(B.t["+tXad7"])
    })]
  })
}
class K extends Chunk473749.PureComponent {
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
    super(...e), F(this, "renderMedia", () => (0, r.jsx)("div", {
      className: o()(Z.invalidPoop, {
        [Z.invalidPoopHorizontal]: this.isHorizontal
      })
    })), F(this, "renderTitle", () => this.props.isSelfGift ? B.intl.string(B.t.mT9B49) : B.intl.string(B.t.Vo5yHw)), F(this, "renderActions", () => this.props.isSelfGift ? (0, r.jsx)(d.Button, {
      variant: "primary",
      size: "sm",
      text: B.intl.string(B.t["jcSP+g"]),
      onClick: this.handleViewInventory
    }) : (0, r.jsx)(d.Button, {
      variant: "primary",
      size: "sm",
      text: B.intl.string(B.t.bUvv1f),
      disabled: true
    })), F(this, "renderTagline", () => this.props.isSelfGift ? B.intl.string(B.t.eEM3dq) : B.intl.string(B.t.tB8S6u))
  }
}
class z extends Chunk473749.Component {
  get analyticsLocation() {
    let {
      analyticsContext: {
        location: e
      }
    } = this.props;
    return Y(V({}, module), {
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
        children: [this.renderButton(e), null == t || e.isSubscription ? null : (0, r.jsx)(W, {
          onClick: this.handleViewLibrary,
          libraryApplication: t
        })]
      }), (0, r.jsxs)(g.Z, {
        align: g.Z.Align.END,
        justify: g.Z.Justify.END,
        className: Z.metadata,
        direction: g.Z.Direction.VERTICAL,
        children: [e.hasMultipleCopies ? (0, r.jsx)("div", {
          children: this.renderGiftCodeCopiesLeft(e)
        }) : null, e.redeemed || e.isClaimed || null != t || null == e.expiresAt ? null : (0, r.jsx)("div", {
          children: B.intl.format(B.t.nZBvUR, {
            hours: e.expiresAt.diff(l()(), "h")
          })
        })]
      })]
    })
  }
  renderGiftCodeCopiesLeft(e) {
    let t = e.isSubscription ? B.t["4iHwKT"] : B.t.YeLq88;
    return B.intl.format(t, {
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
    }, o = !e.isSubscription && null != t || !e.isSelfRedeemable && i || e.isExistingPremiumSubscriptionDisallowed && (0, x.I5)(n);
    return (e.redeemed || o || e.isClaimed || !n.verified) && (a.color = u.zx.Colors.BRAND, a.disabled = true), (0, r.jsx)(u.zx, Y(V({}, a), {
      className: (0, m.mO)(e) ? Z.collectiblesAcceptButton : null,
      size: u.zx.Sizes.SMALL,
      children: e.redeemed ? B.intl.string(B.t.BTihou) : null != e.giftStyle ? B.intl.string(B.t.TiZFqX) : B.intl.string(B.t.bUvv1f)
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
    return this.isCustomGiftMessage() && !n ? B.intl.formatToPlainString(B.t.t1SOId, {
      recipientDisplayName: j.ZP.getName(t)
    }) : null == r ? null : e.isSubscription ? n ? B.intl.string(B.t["2PJ1NP"]) : B.intl.string(B.t.hrnGng) : n ? B.intl.string(B.t.QLEMld) : B.intl.string(B.t.W4DBcy)
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
    if (null == r) return B.intl.string(B.t.ZTNur7);
    if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
    let s = r.isPreorder() ? B.intl.formatToPlainString(B.t.evinTd, {
      name: r.name
    }) : r.name;
    if (e.redeemed) return e.isSubscription || (0, m.mO)(e) || (0, v.K$)(r) ? B.intl.string(B.t.mVC3Cv) : B.intl.format(B.t["ss/L+/"], {
      skuName: s,
      onViewInLibrary: this.handleViewLibrary
    });
    if (!e.isSubscription && null != t) return B.intl.format(B.t.UdXO8P, {
      skuName: s,
      onViewInLibrary: this.handleViewLibrary
    });
    if (e.isClaimed) return B.intl.string(B.t.ARWFQX);
    if (!o.verified) return B.intl.format(B.t.GQxl7v, {
      onClick: this.handleVerificationClick
    });
    if (n) return e.isSelfRedeemable ? B.intl.string(B.t["lQI+cB"]) : B.intl.formatToPlainString(B.t["A+etHx"], {
      skuName: s
    });
    if (e.isExistingPremiumSubscriptionDisallowed) return B.intl.string(B.t.UCIU9y);
    if (e.hasMultipleCopies) return null != i ? e.isSubscription ? B.intl.format(B.t.l3VxgG, {
      username: j.ZP.getUserTag(i),
      maxUses: e.maxUses,
      skuName: s
    }) : B.intl.format(B.t["9cYrw5"], {
      username: j.ZP.getUserTag(i),
      totalCopies: e.maxUses,
      skuName: s
    }) : e.isSubscription ? B.intl.formatToPlainString(B.t.svrO3W, {
      maxUses: e.maxUses,
      skuName: s
    }) : B.intl.formatToPlainString(B.t["3AgAn3"], {
      totalCopies: e.maxUses,
      skuName: s
    });
    if (e.isSubscription) {
      if (null == a) return B.intl.string(B.t.ZTNur7);
      if (null != i) {
        let e = a.interval === G.rV.MONTH ? B.t["/RDIEA"] : B.t["3CX6Ev"];
        return B.intl.format(e, {
          username: j.ZP.getUserTag(i),
          skuName: s,
          intervalCount: a.intervalCount
        })
      }
      let e = a.interval === G.rV.MONTH ? B.t["2O4lo5"] : B.t["+XjmsR"];
      return B.intl.format(e, {
        skuName: s,
        intervalCount: a.intervalCount
      })
    }
    return null != i ? B.intl.format(B.t["3HsdQ/"], {
      username: j.ZP.getUserTag(i)
    }) : B.intl.string(B.t.Jdnjjj)
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
      width: t
    } = this.props;
    return null == module ? null : (0, Chunk54381.jsx)(Chunk626799.$, {
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
      if (exports) return (0, Chunk54381.jsx)(K, {
        isSelfGift: Chunk473749,
        width: require
      });
      else return (0, Chunk54381.jsx)(Chunk568836.OR, {
        isHorizontal: require >= Chunk568836.aL
      });
    return (0, Chunk884697.mO)(module) ? (0, Chunk54381.jsx)("div", {
      className: Chunk584645.collectiblesEmbedWrapper,
      children: this.renderEmbed()
    }) : this.renderEmbed()
  }
  constructor(...e) {
    super(...e), F(this, "handleViewLibrary", e => {
      let {
        libraryApplication: t
      } = this.props;
      e.preventDefault(), null != t && t.isHidden() ? (0, O.uL)(U.Z5c.APPLICATION_LIBRARY_SETTINGS) : (0, O.uL)(U.Z5c.APPLICATION_LIBRARY, {
        state: {
          applicationId: null != t ? t.id : true
        }
      })
    }), F(this, "handleVerificationClick", e => {
      e.stopPropagation(), e.preventDefault(), (0, S.openUserSettings)(T.n.ACCOUNT_PANEL, {
        section: U.oAB.ACCOUNT
      })
    }), F(this, "handleAccept", e => {
      let {
        channelId: t,
        code: n,
        content: r,
        type: i,
        giftInfo: a
      } = this.props;
      e.preventDefault(), e.stopPropagation(), w.default.track(U.rMx.OPEN_MODAL, {
        type: "gift_accept",
        location: Y(V({}, this.analyticsLocation), {
          object: U.qAy.BUTTON_CTA
        })
      });
      let o = i !== U.uaV.CUSTOM_GIFT ? true : r;
      (0, b.V)({
        processedCode: n,
        channelContext: t,
        customGiftMessage: o,
        giftInfo: a
      })
    }), F(this, "handleEmbedClick", e => {
      let {
        giftCode: t,
        sku: n,
        skuApplication: r
      } = this.props;
      null != n && (0, v.K$)(n) && null != r && null != r.guildId ? (e.preventDefault(), (0, I.g)({
        skuId: n.id,
        applicationId: r.id,
        guildId: r.guildId,
        isStorefront: false
      })) : null != t && t.isSubscription && (e.preventDefault(), (0, S.openUserSettings)(T.n.NITRO_PANEL, {
        section: U.oAB.PREMIUM
      }))
    }), F(this, "handleClaimPromotion", e => {
      var t;
      e.stopPropagation(), e.preventDefault();
      let n = null == (t = this.props.giftCode) ? true : t.code;
      null != n && window.open(U.Z5c.BILLING_PROMOTION_REDEMPTION(n))
    }), F(this, "renderCustomGiftBox", e => {
      let {
        width: t
      } = this.props;
      if (null == e || null == e.giftStyle) return null;
      let n = G.jy.includes(e.giftStyle),
        i = o()(Z.customGiftEmbedWrapper, {
          [Z.legacySeasonalGiftEmbedWrapper]: n,
          [Z.giftEmbedWrapperHorizontal]: t >= f.aL
        }),
        a = o()({
          [Z.legacySeasonalGiftEmbedBox]: n,
          [Z.legacySeasonalGiftEmbedBoxHorizontal]: n && t >= f.aL,
          [Z.customGiftEmbedBox]: !n,
          [Z.customGiftEmbedBoxHorizontal]: !n && t >= f.aL
        });
      return (0, r.jsxs)("div", {
        className: i,
        children: [n && (0, r.jsx)(D.Z, {
          className: Z.headerIcon
        }), null != e.giftStyle && (0, r.jsx)(y.Z, {
          defaultAnimationState: e.redeemed ? E.SR.LOOP : E.SR.IDLE,
          giftStyle: e.giftStyle,
          className: a
        })]
      })
    })
  }
}
let q = (0, Chunk112724.Z)((0, Chunk730749.Z)(z)),
  X = function(e) {
    let {
      code: t,
      author: n
    } = e, {
      giftCode: i,
      resolved: a
    } = (0, c.cj)([C.Z], () => ({
      giftCode: C.Z.get(t),
      resolved: C.Z.getIsResolved(t)
    })), o = (0, c.e7)([R.default], () => null != i && null != i.userId ? R.default.getUser(i.userId) : null), s = (0, c.e7)([P.Z], () => null != i ? P.Z.get(i.skuId) : null), l = (0, c.e7)([N.Z], () => null != s && (null == i ? true : i.entitlementBranches) != null ? L.z2(i.entitlementBranches, s, N.Z) : null), u = (0, h.q)(null == s ? true : s.applicationId), d = (0, M.IV)(null == i ? true : i.subscriptionPlanId), f = (0, c.e7)([A.default], () => null != i ? A.default.getId() === i.userId : A.default.getId() === n.id);
    return (0, r.jsx)(q, Y(V({}, e), {
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