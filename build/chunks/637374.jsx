/** Chunk was on web.js **/
/** chunk id: 637374, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => q
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk568836 = require("./568836.jsx"),
  Chunk730749 = require("./730749.js"),
  Chunk112724 = require("./112724.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk884697 = require("./884697.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk479446 = require("./479446.js"),
  Chunk930114 = require("./930114.js"),
  Chunk981632 = require("./981632.js"),
  Chunk108989 = require("./108989.jsx"),
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
  Chunk955964 = require("./955964.js");

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
  return <d.P3F className={B.libraryLink} onClick={t}>{<d.vqy size={"md"} color={"currentColor"} className={B.libraryIcon} />}{<div>{n.isHidden() ? G.intl.string(G.t.Wi99Rk) : G.intl.string(G.t["+tXad3"])}</div>}</d.P3F>
}
class W extends Chunk73800.PureComponent {
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
    return <Chunk568836.$G isHorizontal={this.isHorizontal} renderTitle={this.renderTitle} renderTagline={this.renderTagline} renderMedia={this.renderMedia} renderActions={this.renderActions} />
  }
  constructor(...e) {
    super(...e), Z(this, "renderMedia", () => <div className={a()(B.invalidPoop, {
        [B.invalidPoopHorizontal]: this.isHorizontal
      })} />), Z(this, "renderTitle", () => this.props.isSelfGift ? G.intl.string(G.t["mT9B4+"]) : G.intl.string(G.t.Vo5yHx)), Z(this, "renderActions", () => this.props.isSelfGift ? <d.zxk variant={"primary"} size={"sm"} text={G.intl.string(G.t["jcSP+v"])} onClick={this.handleViewInventory} /> : <d.zxk variant={"primary"} size={"sm"} text={G.intl.string(G.t.bUvv1d)} disabled={true} />), Z(this, "renderTagline", () => this.props.isSelfGift ? G.intl.string(G.t.aUqE6e) : G.intl.string(G.t["2mWvHB"]))
  }
}
class K extends Chunk73800.Component {
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
    return <E.Z justify={E.Z.Justify.BETWEEN}>{<E.Z>{this.renderButton(e)}{null == t || e.isSubscription ? null : <Y onClick={this.handleViewLibrary} libraryApplication={t} />}</E.Z>}{<E.Z align={E.Z.Align.END} justify={E.Z.Justify.END} className={B.metadata} direction={E.Z.Direction.VERTICAL}>{e.hasMultipleCopies ? <div>{this.renderGiftCodeCopiesLeft(e)}</div> : null}{e.redeemed || e.isClaimed || null != t || null == e.expiresAt ? null : <div>{G.intl.format(G.t.nZBvUV, {
            hours: e.expiresAt.diff(l()(), "h")
          })}</div>}</E.Z>}</E.Z>
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
    } = this.props, o = {
      onClick: this.handleAccept,
      color: u.zx.Colors.BRAND
    }, a = !e.isSubscription && null != t || !e.isSelfRedeemable && i || e.isExistingPremiumSubscriptionDisallowed && (0, L.I5)(n);
    return (e.redeemed || a || e.isClaimed || !n.verified) && (o.color = u.zx.Colors.BRAND, o.disabled = true), <u.zx{...H(F({}, o), {
      className: (0, g.mO)(e) ? B.collectiblesAcceptButton : null,
      size: u.zx.Sizes.SMALL,
      children: e.redeemed ? G.intl.string(G.t.BTihoq) : null != e.giftStyle ? G.intl.string(G.t.TiZFqa) : G.intl.string(G.t.bUvv1d)
    })} />
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
      subscriptionPlan: o,
      currentUser: a
    } = this.props;
    if (null == r) return G.intl.string(G.t.ZTNur6);
    if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
    let s = r.isPreorder() ? G.intl.formatToPlainString(G.t.evinTU, {
      name: r.name
    }) : r.name;
    if (e.redeemed) return e.isSubscription || (0, g.mO)(e) ? G.intl.string(G.t.mVC3Cg) : G.intl.format(G.t["ss/L+/"], {
      skuName: s,
      onViewInLibrary: this.handleViewLibrary
    });
    if (!e.isSubscription && null != t) return G.intl.format(G.t.UdXO8P, {
      skuName: s,
      onViewInLibrary: this.handleViewLibrary
    });
    if (e.isClaimed) return G.intl.string(G.t.ARWFQU);
    if (!a.verified) return G.intl.format(G.t.GQxl7u, {
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
      if (null == o) return G.intl.string(G.t.ZTNur6);
      if (null != i) {
        let e = o.interval === U.rV.MONTH ? G.t["/RDIEB"] : G.t["3CX6Eh"];
        return G.intl.format(e, {
          username: M.ZP.getUserTag(i),
          skuName: s,
          intervalCount: o.intervalCount
        })
      }
      let e = o.interval === U.rV.MONTH ? G.t["2O4lo6"] : G.t["+Xjmsb"];
      return G.intl.format(e, {
        skuName: s,
        intervalCount: o.intervalCount
      })
    }
    return null != i ? G.intl.format(G.t["3HsdQ0"], {
      username: M.ZP.getUserTag(i)
    }) : G.intl.string(G.t.Jdnjjo)
  }
  renderPromotionActions() {
    return <Chunk481060.zxk variant={"primary"} size={"sm"} text={Chunk388032.intl.string(Chunk388032.t["71nuwc"])} onClick={this.handleClaimPromotion} />
  }
  renderEmbed() {
    let {
      giftCode: e,
      width: t
    } = this.props;
    return null == module ? null : <Chunk626799.$ skuId={module.skuId} onEmbedClick={this.handleEmbedClick} analyticsSection={Chunk981631.jXE.GIFT_CODE_EMBED} renderCustomActions={() => this.renderActions(module)} renderCustomTitle={() => this.renderTitle(module)} renderCustomTagline={() => this.renderBody(module)} renderCustomMedia={null == module.giftStyle ? true : () => this.renderCustomGiftBox(module)} width={exports} />
  }
  render() {
    let {
      giftCode: e,
      resolved: t,
      width: n,
      isSelfGift: i
    } = this.props;
    if (null != module && null != module.promotion) return <Chunk626799.$ skuId={module.skuId} onEmbedClick={this.handleClaimPromotion} analyticsSection={Chunk981631.jXE.GIFT_CODE_EMBED} renderCustomActions={() => this.renderPromotionActions()} renderCustomTitle={() => Chunk388032.intl.string(Chunk388032.t.X4p5uL)} renderCustomTagline={() => Chunk388032.intl.string(Chunk388032.t.VIuwDw)} width={require} />;
    if (null == module || module.revoked)
      if (exports) return <W isSelfGift={Chunk73800} width={require} />;
      else return <Chunk568836.OR isHorizontal={require >= Chunk568836.aL} />;
    return (0, Chunk884697.mO)(module) ? <div className={Chunk955964.collectiblesEmbedWrapper}>{this.renderEmbed()}</div> : this.renderEmbed()
  }
  constructor(...e) {
    super(...e), Z(this, "handleViewLibrary", e => {
      let {
        libraryApplication: t
      } = this.props;
      e.preventDefault(), null != t && t.isHidden() ? (0, I.uL)(j.Z5c.APPLICATION_LIBRARY_SETTINGS) : (0, I.uL)(j.Z5c.APPLICATION_LIBRARY, {
        state: {
          applicationId: null != t ? t.id : true
        }
      })
    }), Z(this, "handleVerificationClick", e => {
      e.stopPropagation(), e.preventDefault(), f.Z.open(j.oAB.ACCOUNT)
    }), Z(this, "handleAccept", e => {
      let {
        channelId: t,
        code: n,
        content: r,
        type: i,
        giftInfo: o
      } = this.props;
      e.preventDefault(), e.stopPropagation(), w.default.track(j.rMx.OPEN_MODAL, {
        type: "gift_accept",
        location: H(F({}, this.analyticsLocation), {
          object: j.qAy.BUTTON_CTA
        })
      });
      let a = i !== j.uaV.CUSTOM_GIFT ? true : r;
      (0, y.V)({
        processedCode: n,
        channelContext: t,
        customGiftMessage: a,
        giftInfo: o
      })
    }), Z(this, "handleEmbedClick", e => {
      let {
        giftCode: t
      } = this.props;
      null != t && t.isSubscription && (e.preventDefault(), f.Z.open(j.oAB.PREMIUM))
    }), Z(this, "handleClaimPromotion", e => {
      var t;
      e.stopPropagation(), e.preventDefault();
      let n = null == (t = this.props.giftCode) ? true : t.code;
      null != n && window.open(j.Z5c.BILLING_PROMOTION_REDEMPTION(n))
    }), Z(this, "renderCustomGiftBox", e => {
      let {
        useReducedMotion: t,
        width: n
      } = this.props;
      if (null == e || null == e.giftStyle) return null;
      let i = U.jy.includes(e.giftStyle),
        o = a()(B.customGiftEmbedWrapper, {
          [B.legacySeasonalGiftEmbedWrapper]: i,
          [B.giftEmbedWrapperHorizontal]: n >= _.aL
        }),
        s = a()({
          [B.legacySeasonalGiftEmbedBox]: i,
          [B.legacySeasonalGiftEmbedBoxHorizontal]: i && n >= _.aL,
          [B.customGiftEmbedBox]: !i,
          [B.customGiftEmbedBoxHorizontal]: !i && n >= _.aL
        });
      return <div className={o}>{!t && U.eZ.includes(e.giftStyle) && <v.Z className={B.snow} wind={5} />}{i && <P.Z className={B.headerIcon} />}{null != e.giftStyle && <O.Z defaultAnimationState={e.redeemed ? b.SR.LOOP : b.SR.IDLE} giftStyle={e.giftStyle} className={s} />}</div>
    })
  }
}
let z = (0, Chunk112724.Z)((0, Chunk730749.Z)(K)),
  q = Chunk442837.ZP.connectStores([Chunk82142.Z, Chunk55563.Z, Chunk594174.default, Chunk283595.Z, Chunk509545.Z, Chunk314897.default, Chunk607070.Z], e => {
    let {
      code: t,
      author: n,
      currentUser: r
    } = e, i = S.Z.get(t), o = null != i ? R.Z.get(i.skuId) : null, a = null != i && null != i.userId ? N.default.getUser(i.userId) : null, s = m.Z.useReducedMotion;
    return {
      sku: o,
      giftCode: i,
      gifter: a,
      currentUser: r,
      subscriptionPlan: null != i && null != i.subscriptionPlanId ? (0, x.oE)(i.subscriptionPlanId) : null,
      isSelfGift: null != i ? T.default.getId() === i.userId : T.default.getId() === n.id,
      resolved: S.Z.getIsResolved(t),
      libraryApplication: null != o && (null == i ? true : i.entitlementBranches) != null ? D.z2(i.entitlementBranches, o, A.Z) : null,
      useReducedMotion: s
    }
  })(z)