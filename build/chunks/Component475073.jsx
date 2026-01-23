/** Chunk was on web.js **/
/** chunk id: 475073, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => Q
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  l = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk863574 = require("./863574.jsx"),
  Chunk707606 = require("./707606.jsx"),
  Chunk456412 = require("./456412.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk429913 = require("./429913.js"),
  Chunk993408 = require("./993408.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk242874 = require("./242874.js"),
  Chunk499454 = require("./499454.jsx"),
  Chunk75825 = require("./75825.jsx"),
  Chunk976860 = require("./976860.js"),
  Chunk871123 = require("./871123.js"),
  Chunk317560 = require("./317560.jsx"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk30793 = require("./30793.js"),
  Chunk189081 = require("./189081.js"),
  Chunk287809 = require("./287809.js"),
  Chunk67480 = require("./67480.js"),
  Chunk56739 = require("./56739.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk45938 = require("./45938.js"),
  Chunk927578 = require("./927578.js"),
  Chunk615396 = require("./615396.js"),
  Chunk427262 = require("./427262.js"),
  Chunk295843 = require("./295843.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk300937 = require("./300937.js");

function H(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      H(e, t, n[t])
    })
  }
  return e
}

function W(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function K(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : W(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function z(e) {
  let {
    onClick: t,
    libraryApplication: n
  } = e;
  return (0, r.jsxs)(d.DUT, {
    className: B.kP,
    onClick: t,
    children: [(0, r.jsx)(d._z, {
      size: "md",
      color: "currentColor",
      className: B.dy
    }), (0, r.jsx)("div", {
      children: n.isHidden() ? F.intl.string(F.t.Wi99Ro) : F.intl.string(F.t["+tXad7"])
    })]
  })
}
class q extends Chunk64700.PureComponent {
  get isHorizontal() {
    let {
      width: e
    } = this.props;
    return e >= f.Tm
  }
  handleViewInventory() {
    (0, T.openUserSettings)(S.X.GIFT_PANEL, {
      section: G.nc_.INVENTORY
    })
  }
  render() {
    return (0, r.jsx)(f.ug, {
      isHorizontal: this.isHorizontal,
      renderTitle: this.renderTitle,
      renderTagline: this.renderTagline,
      renderMedia: this.renderMedia,
      renderActions: this.renderActions
    })
  }
  constructor(...e) {
    super(...e), H(this, "renderMedia", () => (0, r.jsx)("div", {
      className: s()(B.oK, {
        [B.ok]: this.isHorizontal
      })
    })), H(this, "renderTitle", () => this.props.isSelfGift ? F.intl.string(F.t.mT9B49) : F.intl.string(F.t.Vo5yHw)), H(this, "renderActions", () => this.props.isSelfGift ? (0, r.jsx)(d.Button, {
      variant: "primary",
      size: "sm",
      text: F.intl.string(F.t["jcSP+g"]),
      onClick: this.handleViewInventory
    }) : (0, r.jsx)(d.Button, {
      variant: "primary",
      size: "sm",
      text: F.intl.string(F.t.bUvv1f),
      disabled: true
    })), H(this, "renderTagline", () => this.props.isSelfGift ? F.intl.string(F.t.eEM3dq) : F.intl.string(F.t.tB8S6u))
  }
}
class X extends Chunk64700.Component {
  get analyticsLocation() {
    let {
      analyticsContext: {
        location: e
      }
    } = this.props;
    return K(Y({}, e), {
      section: G.JJy.GIFT_CODE_EMBED
    })
  }
  renderActions(e) {
    let {
      libraryApplication: t
    } = this.props;
    return (0, r.jsxs)(E.A, {
      justify: E.A.Justify.BETWEEN,
      children: [(0, r.jsxs)(E.A, {
        children: [this.renderButton(e), null == t || e.isSubscription ? null : (0, r.jsx)(z, {
          onClick: this.handleViewLibrary,
          libraryApplication: t
        })]
      }), (0, r.jsxs)(E.A, {
        align: E.A.Align.END,
        justify: E.A.Justify.END,
        className: B.yu,
        direction: E.A.Direction.VERTICAL,
        children: [e.hasMultipleCopies ? (0, r.jsx)("div", {
          children: this.renderGiftCodeCopiesLeft(e)
        }) : null, e.redeemed || e.isClaimed || null != t || null == e.expiresAt ? null : (0, r.jsx)("div", {
          children: F.intl.format(F.t.nZBvUR, {
            hours: e.expiresAt.diff(l()(), "h")
          })
        })]
      })]
    })
  }
  renderGiftCodeCopiesLeft(e) {
    let t = e.isSubscription ? F.t["4iHwKT"] : F.t.YeLq88;
    return F.intl.format(t, {
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
      color: u.$n.Colors.BRAND
    }, s = !e.isSubscription && null != t || !e.isSelfRedeemable && i || e.isExistingPremiumSubscriptionDisallowed && (0, j.TW)(n);
    return (e.redeemed || s || e.isClaimed || !n.verified) && (a.color = u.$n.Colors.BRAND, a.disabled = true), (0, r.jsx)(u.$n, K(Y({}, a), {
      className: (0, g.hU)(e) ? B.UQ : null,
      size: u.$n.Sizes.SMALL,
      children: e.redeemed ? F.intl.string(F.t.BTihou) : null != e.giftStyle ? F.intl.string(F.t.TiZFqX) : F.intl.string(F.t.bUvv1f)
    }))
  }
  isCustomGiftMessage() {
    let {
      type: e
    } = this.props;
    return e === G.lAJ.CUSTOM_GIFT
  }
  renderTitle(e) {
    let {
      currentUser: t,
      isSelfGift: n,
      sku: r
    } = this.props;
    return this.isCustomGiftMessage() && !n ? F.intl.formatToPlainString(F.t.t1SOId, {
      recipientDisplayName: k.Ay.getName(t)
    }) : null == r ? null : e.isSubscription ? n ? F.intl.string(F.t["2PJ1NP"]) : F.intl.string(F.t.hrnGng) : n ? F.intl.string(F.t.QLEMld) : F.intl.string(F.t.W4DBcy)
  }
  renderBody(e) {
    let {
      libraryApplication: t,
      isSelfGift: n,
      sku: r,
      gifter: i,
      subscriptionPlan: a,
      currentUser: s
    } = this.props;
    if (null == r) return F.intl.string(F.t.ZTNur7);
    if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
    let o = r.isPreorder() ? F.intl.formatToPlainString(F.t.evinTd, {
      name: r.name
    }) : r.name;
    if (e.redeemed) return e.isSubscription || (0, g.hU)(e) || (0, A.bF)(r) ? F.intl.string(F.t.mVC3Cv) : F.intl.format(F.t["ss/L+/"], {
      skuName: o,
      onViewInLibrary: this.handleViewLibrary
    });
    if (!e.isSubscription && null != t) return F.intl.format(F.t.UdXO8P, {
      skuName: o,
      onViewInLibrary: this.handleViewLibrary
    });
    if (e.isClaimed) return F.intl.string(F.t.ARWFQX);
    if (!s.verified) return F.intl.format(F.t.GQxl7v, {
      onClick: this.handleVerificationClick
    });
    if (n) return e.isSelfRedeemable ? F.intl.string(F.t["lQI+cB"]) : F.intl.formatToPlainString(F.t["A+etHx"], {
      skuName: o
    });
    if (e.isExistingPremiumSubscriptionDisallowed) return F.intl.string(F.t.UCIU9y);
    if (e.hasMultipleCopies) return null != i ? e.isSubscription ? F.intl.format(F.t.l3VxgG, {
      username: k.Ay.getUserTag(i),
      maxUses: e.maxUses,
      skuName: o
    }) : F.intl.format(F.t["9cYrw5"], {
      username: k.Ay.getUserTag(i),
      totalCopies: e.maxUses,
      skuName: o
    }) : e.isSubscription ? F.intl.formatToPlainString(F.t.svrO3W, {
      maxUses: e.maxUses,
      skuName: o
    }) : F.intl.formatToPlainString(F.t["3AgAn3"], {
      totalCopies: e.maxUses,
      skuName: o
    });
    if (e.isSubscription) {
      if (null == a) return F.intl.string(F.t.ZTNur7);
      if (null != i) {
        let e = a.interval === V.WT.MONTH ? F.t["/RDIEA"] : F.t["3CX6Ev"];
        return F.intl.format(e, {
          username: k.Ay.getUserTag(i),
          skuName: o,
          intervalCount: a.intervalCount
        })
      }
      let e = a.interval === V.WT.MONTH ? F.t["2O4lo5"] : F.t["+XjmsR"];
      return F.intl.format(e, {
        skuName: o,
        intervalCount: a.intervalCount
      })
    }
    return null != i ? F.intl.format(F.t["3HsdQ/"], {
      username: k.Ay.getUserTag(i)
    }) : F.intl.string(F.t.Jdnjjj)
  }
  renderPromotionActions() {
    return (0, r.jsx)(d.Button, {
      variant: "primary",
      size: "sm",
      text: F.intl.string(F.t["71nuwc"]),
      onClick: this.handleClaimPromotion
    })
  }
  renderEmbed() {
    let {
      giftCode: e,
      width: t,
      sku: n
    } = this.props;
    if (null == e) return null;
    let i = null != e.giftStyle && !(0, A.bF)(n);
    return (0, r.jsx)(U.k, {
      skuId: e.skuId,
      onEmbedClick: this.handleEmbedClick,
      analyticsSection: G.JJy.GIFT_CODE_EMBED,
      renderCustomActions: () => this.renderActions(e),
      renderCustomTitle: () => this.renderTitle(e),
      renderCustomTagline: () => this.renderBody(e),
      renderCustomMedia: i ? () => this.renderCustomGiftBox(e) : true,
      width: t
    })
  }
  render() {
    let {
      giftCode: e,
      resolved: t,
      width: n,
      isSelfGift: i
    } = this.props;
    if (null != e && null != e.promotion) return (0, r.jsx)(U.k, {
      skuId: e.skuId,
      onEmbedClick: this.handleClaimPromotion,
      analyticsSection: G.JJy.GIFT_CODE_EMBED,
      renderCustomActions: () => this.renderPromotionActions(),
      renderCustomTitle: () => F.intl.string(F.t.X4p5uH),
      renderCustomTagline: () => F.intl.string(F.t.VIuwD7),
      width: n
    });
    if (null == e || e.revoked)
      if (t) return (0, r.jsx)(q, {
        isSelfGift: i,
        width: n
      });
      else return (0, r.jsx)(f.Wb, {
        isHorizontal: n >= f.Tm
      });
    return (0, g.hU)(e) ? (0, r.jsx)("div", {
      className: B.mp,
      children: this.renderEmbed()
    }) : this.renderEmbed()
  }
  constructor(...e) {
    super(...e), H(this, "handleViewLibrary", e => {
      let {
        libraryApplication: t
      } = this.props;
      e.preventDefault(), null != t && t.isHidden() ? (0, v.pX)(G.BVt.APPLICATION_LIBRARY_SETTINGS) : (0, v.pX)(G.BVt.APPLICATION_LIBRARY, {
        state: {
          applicationId: null != t ? t.id : true
        }
      })
    }), H(this, "handleVerificationClick", e => {
      e.stopPropagation(), e.preventDefault(), (0, T.openUserSettings)(S.X.ACCOUNT_PANEL, {
        section: G.nc_.ACCOUNT
      })
    }), H(this, "handleAccept", e => {
      let {
        channelId: t,
        code: n,
        content: r,
        type: i,
        giftInfo: a
      } = this.props;
      e.preventDefault(), e.stopPropagation(), x.default.track(G.HAw.OPEN_MODAL, {
        type: "gift_accept",
        location: K(Y({}, this.analyticsLocation), {
          object: G.ZSU.BUTTON_CTA
        })
      });
      let s = i !== G.lAJ.CUSTOM_GIFT ? true : r;
      (0, b.h)({
        processedCode: n,
        channelContext: t,
        customGiftMessage: s,
        giftInfo: a
      })
    }), H(this, "handleEmbedClick", e => {
      let {
        giftCode: t,
        sku: n,
        skuApplication: r
      } = this.props;
      null != n && (0, A.bF)(n) && null != r && null != r.guildId ? (e.preventDefault(), (0, I.R)({
        skuId: n.id,
        applicationId: r.id,
        guildId: r.guildId,
        isStorefront: false,
        analyticsLocations: [h.A.GIFT_CODE_EMBED]
      })) : null != t && t.isSubscription && (e.preventDefault(), (0, T.openUserSettings)(S.X.NITRO_PANEL, {
        section: G.nc_.PREMIUM
      }))
    }), H(this, "handleClaimPromotion", e => {
      var t;
      e.stopPropagation(), e.preventDefault();
      let n = null == (t = this.props.giftCode) ? true : t.code;
      null != n && window.open(G.BVt.BILLING_PROMOTION_REDEMPTION(n))
    }), H(this, "renderCustomGiftBox", e => {
      let {
        width: t
      } = this.props;
      if (null == e || null == e.giftStyle) return null;
      let n = V.Wx.includes(e.giftStyle),
        i = s()(B.gB, {
          [B.El]: n,
          [B.by]: t >= f.Tm
        }),
        a = s()({
          [B.gc]: n,
          [B.Ei]: n && t >= f.Tm,
          [B.ww]: !n,
          [B.wy]: !n && t >= f.Tm
        });
      return (0, r.jsxs)("div", {
        className: i,
        children: [n && (0, r.jsx)(D.A, {
          className: B.nr
        }), null != e.giftStyle && (0, r.jsx)(O.A, {
          defaultAnimationState: e.redeemed ? y.oA.LOOP : y.oA.IDLE,
          giftStyle: e.giftStyle,
          className: a
        })]
      })
    })
  }
}
let Z = (0, Chunk456412.A)((0, Chunk707606.A)(X)),
  Q = function(e) {
    let {
      code: t,
      author: n
    } = e, {
      giftCode: i,
      resolved: a
    } = (0, c.cf)([N.A], () => ({
      giftCode: N.A.get(t),
      resolved: N.A.getIsResolved(t)
    })), s = (0, c.bG)([w.default], () => null != i && null != i.userId ? w.default.getUser(i.userId) : null), o = (0, c.bG)([P.A], () => null != i ? P.A.get(i.skuId) : null), l = (0, c.bG)([R.A], () => null != o && (null == i ? true : i.entitlementBranches) != null ? L.YI(i.entitlementBranches, o, R.A) : null), u = (0, m.h)(null == o ? true : o.applicationId), d = (0, M.zz)(null == i ? true : i.subscriptionPlanId), f = (0, c.bG)([C.default], () => null != i ? C.default.getId() === i.userId : C.default.getId() === n.id);
    return (0, r.jsx)(Z, K(Y({}, e), {
      skuApplication: u,
      giftCode: i,
      resolved: a,
      gifter: s,
      libraryApplication: l,
      subscriptionPlan: d,
      sku: o,
      isSelfGift: f
    }))
  }