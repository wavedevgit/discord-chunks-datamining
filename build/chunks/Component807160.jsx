/** Chunk was on 30202 **/
/** chunk id: 807160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => eo
}), require("./953529.js"), require("./388685.js"), require("./539854.js"), require("./997841.js");
var i, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  c = require.n(Chunk913527),
  Chunk91192 = require("./91192.jsx"),
  Chunk314877 = require("./314877.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk782568 = require("./782568.js"),
  Chunk812206 = require("./812206.js"),
  Chunk593061 = require("./593061.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk925329 = require("./925329.jsx"),
  Chunk267101 = require("./267101.js"),
  Chunk240864 = require("./240864.js"),
  Chunk942833 = require("./942833.js"),
  Chunk400916 = require("./400916.jsx"),
  Chunk916001 = require("./916001.jsx"),
  Chunk539290 = require("./539290.jsx"),
  Chunk336197 = require("./336197.js"),
  Chunk690221 = require("./690221.jsx"),
  Chunk307643 = require("./307643.js"),
  Chunk378233 = require("./378233.js"),
  Chunk419922 = require("./419922.jsx"),
  Chunk46141 = require("./46141.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk853872 = require("./853872.js"),
  Chunk509545 = require("./509545.js"),
  Chunk230307 = require("./230307.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk572004 = require("./572004.js"),
  Chunk55935 = require("./55935.js"),
  Chunk630388 = require("./630388.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk244526 = require("./244526.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk982710 = require("./982710.js");

function q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      q(e, t, n[t])
    })
  }
  return e
}

function J(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let Q = e => "https://".concat(H.xr4, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000118612"),
  $ = [Chunk981631.epS.DURABLE_PRIMARY, Chunk981631.epS.DURABLE, Chunk981631.epS.CONSUMABLE],
  ee = [Chunk981631.PyE.FAILED, Chunk981631.PyE.REVERSED, Chunk981631.PyE.CANCELED],
  et = [Chunk231338.gg.APPLE],
  en = e => {
    let {
      description: t,
      cost: n
    } = e;
    return (0, r.jsx)("li", {
      className: K.paymentDetail,
      children: (0, r.jsxs)(x.Z, {
        justify: x.Z.Justify.BETWEEN,
        children: [(0, r.jsx)("div", {
          children: t
        }), (0, r.jsx)("div", {
          children: n
        })]
      })
    })
  };

function ei(e) {
  let {
    value: t,
    copyText: n,
    copyFeedbackText: i
  } = e, [a, l] = s.useState(false), [o, c] = s.useState(false), d = () => {
    (0, B.JG)(t, () => {
      c(true), l(true)
    })
  };
  return (0, r.jsx)(p.ua7, {
    forceOpen: o,
    text: a ? i : n,
    children: e => {
      var {
        onMouseEnter: n,
        onMouseLeave: i
      } = e, s = function(e, t) {
        if (null == e) return {};
        var n, i, r = function(e, t) {
          if (null == e) return {};
          var n, i, r = {},
            s = Object.keys(e);
          for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
          return r
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
        }
        return r
      }(e, ["onMouseEnter", "onMouseLeave"]);
      return (0, r.jsx)(p.P3F, J(X({}, s), {
        onMouseEnter: () => {
          a && l(false), "function" == typeof n && n()
        },
        onMouseLeave: () => {
          c(false), "function" == typeof i && i()
        },
        onClick: d,
        children: (0, r.jsx)("div", {
          className: K.copiableContainer,
          children: t
        })
      }))
    }
  })
}
let er = e => {
  let {
    description: t,
    detail: n
  } = e;
  return (0, r.jsx)("li", {
    className: K.guildProductDetail,
    children: (0, r.jsxs)(x.Z, {
      justify: x.Z.Justify.BETWEEN,
      children: [(0, r.jsx)("div", {
        children: t
      }), (0, r.jsx)("div", {
        children: n
      })]
    })
  })
};

function es(e) {
  let {
    guildId: t,
    guildProductListingId: n
  } = e, i = (0, j.hO)(t, n, {
    requireCurrentGuild: false
  }), a = (0, C.C)(i), l = (0, m.e7)([D.Z], () => D.Z.getGuild(t)), o = (null == i ? true : i.role_id) != null && (null == i ? true : i.attachments_count) === 0 ? Y.intl.string(Y.t.H11qcX) : a, c = s.useCallback(async () => {
    (null == l ? true : l.features.has(H.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) ? await (0, T.Z)(H.Z5c.GUILD_PRODUCT(t, n)) : await (0, T.Z)(H.Z5c.CHANNEL(t)), (0, g.xf)()
  }, [l, t, n]);
  return (0, r.jsxs)(r.Fragment, {
    children: [null != o && (0, r.jsx)(er, {
      description: Y.intl.string(Y.t.lXPbJS),
      detail: o
    }), null != l && (0, r.jsx)(er, {
      description: Y.intl.string(Y.t.Wpn8z8),
      detail: (0, r.jsx)(N.Z, {
        onClick: c,
        children: l.name
      })
    })]
  })
}

function ea(e) {
  var t, n;
  let {
    guildId: i,
    guildProductListingId: s
  } = e, a = (0, j.hO)(i, s, {
    requireCurrentGuild: false
  }), l = (0, m.e7)([E.Z], () => E.Z.getGuildProductFetchState(s) === E.M.FETCHING), o = null == a ? true : a.role_id, c = (0, m.e7)([R.Z], () => null != o ? R.Z.getRole(i, o) : true, [i, o]), d = (null != (n = null == a || null == (t = a.attachments) ? true : t.length) ? n : 0) > 0, u = null != c;
  return l ? (0, r.jsx)("div", {
    className: K.guildProductBenefits,
    children: (0, r.jsx)(p.$jN, {})
  }) : null != a && (d || u) ? (0, r.jsxs)("div", {
    className: K.guildProductBenefits,
    children: [d && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(p.Text, {
        variant: "text-xs/semibold",
        color: "header-secondary",
        className: K.guildProductBenefitLabel,
        children: Y.intl.string(Y.t.hxawo6)
      }), (0, r.jsx)(O.Z, {
        guildId: i,
        productId: a.id
      })]
    }), u && (0, r.jsxs)(r.Fragment, {
      children: [d && (0, r.jsx)("div", {
        className: K.divider
      }), (0, r.jsx)(p.Text, {
        variant: "text-xs/semibold",
        color: "header-secondary",
        className: K.guildProductBenefitLabel,
        children: Y.intl.string(Y.t.gWBNen)
      }), (0, r.jsx)(v.Z, {
        role: c
      })]
    })]
  }) : null
}
class el extends(i = Chunk647438.PureComponent) {
  get daysSincePurchase() {
    let {
      payment: e
    } = this.props, t = null != module.sku ? module.sku.releaseDate : null, n = null != exports && exports.isAfter(module.createdAt) ? exports : module.createdAt;
    return c()().diff(require, "days")
  }
  get isPremium() {
    let {
      payment: e
    } = this.props;
    return module.isPremiumSubscription || module.isPremiumGuildSubscription || module.isPremiumGift
  }
  validateRefundRules() {
    return this.refundRules.filter(e => {
      let {
        canRefund: t
      } = e;
      return !t()
    }).map(e => {
      let {
        rule: t
      } = e;
      return t
    })
  }
  renderStatus() {
    let {
      payment: e
    } = this.props;
    switch (module.status) {
      case Chunk981631.PyE.PENDING:
        return (0, Chunk951288.jsx)("span", {
          className: Chunk982710.statusTagGrey,
          children: Chunk388032.intl.string(Chunk388032.t.y7F0RU)
        });
      case Chunk981631.PyE.FAILED:
        return (0, Chunk951288.jsx)("span", {
          className: Chunk982710.statusTagRed,
          children: Chunk388032.intl.string(Chunk388032.t.Yo4ru7)
        });
      case Chunk981631.PyE.REFUNDED:
        if (module.amountRefunded !== module.amount) return (0, Chunk951288.jsx)("span", {
          className: Chunk982710.statusTagGreen,
          children: Chunk388032.intl.string(Chunk388032.t.lYbZz8)
        });
        return (0, Chunk951288.jsx)("span", {
          className: Chunk982710.statusTagGreen,
          children: Chunk388032.intl.string(Chunk388032.t.ZBb6ND)
        });
      case Chunk981631.PyE.REVERSED:
        return (0, Chunk951288.jsx)("span", {
          className: Chunk982710.statusTagRed,
          children: Chunk388032.intl.string(Chunk388032.t.YQv9Li)
        });
      case Chunk981631.PyE.CANCELED:
        return (0, Chunk951288.jsx)("span", {
          className: Chunk982710.statusTagRed,
          children: Chunk388032.intl.string(Chunk388032.t.ttkBh4)
        });
      default:
        return null
    }
  }
  renderPrice() {
    let {
      payment: e
    } = this.props, t = module.amount - module.amountRefunded;
    return (0, Chunk951288.jsx)("span", {
      className: Chunk982710.price,
      children: (0, Chunk937615.T4)(exports, module.currency)
    })
  }
  renderPaymentIdField() {
    let {
      payment: e
    } = this.props;
    return (0, Chunk951288.jsx)("li", {
      className: Chunk982710.paymentDetail,
      children: (0, Chunk951288.jsxs)("div", {
        className: Chunk982710.paymentInfo,
        children: [(0, Chunk951288.jsx)("div", {
          children: Chunk388032.intl.string(Chunk388032.t["UQim+v"])
        }), (0, Chunk951288.jsx)(ei, {
          value: module.id,
          copyText: Chunk388032.intl.string(Chunk388032.t["Mdk9+P"]),
          copyFeedbackText: Chunk388032.intl.string(Chunk388032.t["7eIrAw"])
        })]
      })
    })
  }
  renderPaymentBreakdown() {
    let {
      payment: e,
      locale: t,
      application: n
    } = this.props, {
      taxInclusive: i,
      tax: a,
      amount: o,
      amountRefunded: c,
      currency: d
    } = module, u = null == require ? true : require.guildId;
    return (0, Chunk951288.jsxs)("div", {
      className: l()(Chunk982710.paymentText, Chunk982710.paymentBreakdown),
      children: [null != module.paymentSource ? (0, Chunk951288.jsx)(Chunk244526.Z, {
        paymentSource: module.paymentSource,
        locale: exports,
        descriptionClassName: Chunk982710.paymentText,
        showLabels: true,
        showPaymentSourceIcon: true
      }) : module.paymentGateway === Chunk231338.gg.APPLE_PARTNER ? (0, Chunk951288.jsx)(Chunk244526.Z, {
        paymentSource: new Chunk46141.$z({}),
        locale: exports,
        descriptionClassName: Chunk982710.paymentText,
        showLabels: true,
        showPaymentSourceIcon: true
      }) : null, (0, Chunk951288.jsxs)("ul", {
        children: [this.renderPaymentIdField(), !i && Chunk120356 > 0 ? (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
          children: [(0, Chunk951288.jsx)(en, {
            description: module.description,
            cost: (0, Chunk937615.T4)(Chunk913527 - Chunk120356, Chunk91192)
          }), (0, Chunk951288.jsx)(en, {
            description: Chunk388032.intl.string(Chunk388032.t.QgWXho),
            cost: (0, Chunk937615.T4)(Chunk120356, Chunk91192)
          })]
        }) : null, (0, Chunk951288.jsx)(en, {
          description: Chunk388032.intl.string(Chunk388032.t.txajQE),
          cost: (0, Chunk937615.T4)(Chunk913527, Chunk91192)
        }), module.isGuildProductPurchase && null != Chunk314877 && null != module.sku && (0, Chunk951288.jsx)(es, {
          guildId: Chunk314877,
          guildProductListingId: module.sku.id
        }), c > 0 && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [(0, Chunk951288.jsx)(en, {
            description: Chunk388032.intl.string(Chunk388032.t["A+I0AA"]),
            cost: (0, Chunk937615.T4)(c, Chunk91192)
          }), (0, Chunk951288.jsx)(en, {
            description: Chunk388032.intl.string(Chunk388032.t.xER6Wl),
            cost: (0, Chunk937615.T4)(Chunk913527 - c, Chunk91192)
          })]
        })]
      })]
    })
  }
  renderInvoiceDownload() {
    let {
      payment: e
    } = this.props;
    return (0, Chunk951288.jsx)(Chunk593061.Z, {
      payment: module
    })
  }
  renderRefundDetails() {
    let e, {
        locale: t,
        payment: n
      } = this.props,
      i = this.validateRefundRules();
    if (i.includes("PAYMENT_GATEWAY") || i.includes("PAYMENT_STATUS") || i.includes("ALREADY_REFUNDED") || i.includes("SKU_STICKER_PACK") || i.includes("SUBSCRIPTION_TYPE") || i.includes("GUILD_PRODUCT")) return null;
    let a = 0 === i.length,
      l = Q(exports),
      o = this.isPremium ? 5 : 14;
    return e = i.includes("SKU_TYPE") ? Chunk388032.intl.format(Chunk388032.t["5lvoVV"], {
      supportURL: l
    }) : Chunk120356 ? require.isPremiumSubscription || require.isPremiumGuildSubscription ? Chunk388032.intl.format(Chunk388032.t.EPYteX, {
      dateLimit: Chunk913527,
      supportURL: l
    }) : require.isGift ? Chunk388032.intl.format(Chunk388032.t["16eP/P"], {
      dateLimit: Chunk913527,
      supportURL: l
    }) : Chunk388032.intl.format(Chunk388032.t["1LDI4O"], {
      dateLimit: Chunk913527,
      playtimeLimit: 2,
      supportURL: l
    }) : require.isCollectible ? Chunk388032.intl.string(Chunk388032.t.s9TZMz) : require.isGift ? Chunk388032.intl.formatToPlainString(Chunk388032.t.owlOWV, {
      dateLimit: Chunk913527
    }) : require.isPremiumSubscription || require.isPremiumGuildSubscription ? Chunk388032.intl.formatToPlainString(Chunk388032.t.dk7vyM, {
      dateLimit: Chunk913527
    }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.s4Kk0N, {
      dateLimit: Chunk913527,
      playtimeLimit: 2
    }), (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.H, {
        className: Chunk982710.paymentHeader,
        children: Chunk388032.intl.string(Chunk388032.t["n/27pq"])
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk982710.paymentText,
        children: [(0, Chunk951288.jsx)("div", {
          children: module
        }), this.renderRefundActions(i)]
      })]
    })
  }
  renderRefundCriteria(e, t, n, i) {
    return (0, r.jsxs)("div", {
      className: K.refundCriteria,
      children: [(0, r.jsx)(p.H, {
        className: K.refundSubHeader,
        children: e
      }), (0, r.jsxs)("div", {
        className: K.refundIconContainer,
        children: [(0, r.jsx)(t, {
          className: K.refundCriteriaIcon,
          color: "currentColor"
        }), null != n && (0, r.jsx)("div", {
          children: n
        })]
      })]
    }, i)
  }
  renderRefundActions(e) {
    let {
      locale: t,
      payment: n
    } = this.props;
    if (e.includes("SKU_TYPE")) return null;
    let i = e.includes("PURCHASE_DATE") ? p.Dio : p.dz2;
    return (0, r.jsxs)("div", {
      className: K.refundActions,
      children: [(0, r.jsx)("div", {
        className: K.refundRules,
        children: !n.isCollectible && this.renderRefundCriteria(Y.intl.string(Y.t.H0RNz8), i, Y.intl.formatToPlainString(Y.t["7dtXa2"], {
          daysSincePurchase: this.daysSincePurchase
        }))
      }), (0, r.jsx)(p.eee, {
        href: Q(t),
        children: Y.intl.string(Y.t.re5nOD)
      })]
    })
  }
  renderDescription() {
    let e, t, {
        compactMode: n,
        payment: i,
        application: a,
        guild: l,
        stickerPack: o,
        plan: d
      } = this.props,
      {
        expanded: u
      } = this.state,
      m = i.sku,
      g = i.subscription,
      h = null != i.paymentSource && Chunk981631.Uk1.has(i.paymentSource.type);
    if (null != Chunk37234 && 0 !== Chunk37234.items.length) {
      let n = [],
        s = null;
      if (Chunk37234.type === Chunk981631.NYc.PREMIUM) Chunk37234.items.forEach(e => {
        let {
          planId: t,
          quantity: i
        } = e;
        (0, V.uZ)(t) ? (n.push(V.ZP.getDisplayName(t, false, h)), s = (0, V.Wz)(z.GP[t].skuId)) : (n.push("".concat(i > 1 ? "".concat(i, "x ") : "").concat(V.ZP.getDisplayName(t, false, h))), null == s && (s = (0, V.Wz)(z.GP[t].skuId)))
      });
      else if (Chunk37234.type === Chunk981631.NYc.GUILD) {
        if (null != Chunk91192) {
          let e = Chunk91192.interval === Chunk474936.rV.YEAR ? Chunk388032.t.V6UFQE : Chunk388032.t["6oq129"];
          require.push(Chunk388032.intl.format(module, {
            planName: Chunk91192.name
          })), s = Chunk91192.skuId
        }
      } else Chunk37234.type === Chunk981631.NYc.APPLICATION && (null != Chunk91192 && (s = Chunk91192.skuId), null != Chunk120356 ? require.push(Chunk388032.intl.formatToPlainString(Chunk388032.t["0wL/VF"], {
        tier: null == Chunk442837 ? true : Chunk442837.name
      })) : require.push(Chunk388032.intl.string(Chunk388032.t["9czSYm"])));
      t = 0 !== require.length ? require.join(", ") : i.description, e = (0, Chunk951288.jsx)(Chunk925329.Z, {
        className: Chunk982710.descriptionIcon,
        guildClassName: Chunk982710.guildDescriptionIcon,
        game: Chunk120356,
        guild: l,
        size: Chunk925329.Z.Sizes.XSMALL,
        skuId: null != Chunk647438 ? Chunk647438 : null == Chunk442837 ? true : Chunk442837.id
      })
    } else if (null != Chunk442837) {
      var f;
      if (t = i.isGuildProductPurchase && i.isSoftDeletedProduct ? Chunk388032.intl.string(Chunk388032.t.O7uLm5) : Chunk442837.name, null != Chunk913527) {
        let t = (0, Chunk378233.Zt)(Chunk913527);
        e = (0, Chunk951288.jsx)(Chunk419922.Z, {
          disableAnimation: !Chunk314877,
          isInteracting: Chunk314877,
          sticker: exports,
          className: Chunk982710.descriptionIcon,
          size: 24
        })
      } else e = (null == (f = i.sku) ? true : Chunk812206.productLine) === Chunk981631.POd.COLLECTIBLES ? (0, Chunk951288.jsx)(Chunk481060.EOn, {
        size: "custom",
        width: 23,
        height: 23,
        color: "currentColor",
        className: Chunk982710.shopIcon
      }) : (0, Chunk951288.jsx)(Chunk925329.Z, {
        className: Chunk982710.descriptionIcon,
        guildClassName: Chunk982710.guildDescriptionIcon,
        game: Chunk120356,
        guild: l,
        size: Chunk925329.Z.Sizes.XSMALL,
        skuId: Chunk442837.id
      })
    } else e = (0, Chunk951288.jsx)(Chunk481060.SrA, {
      size: "md",
      color: "currentColor",
      className: Chunk982710.descriptionIcon
    }), t = i.description;
    let b = (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        className: Chunk982710.date,
        children: (0, Chunk55935.vc)(c()(i.createdAt), "MM/DD/YYYY")
      }),
      x = i.isGift ? (0, Chunk951288.jsx)(Chunk481060.ua7, {
        text: Chunk388032.intl.string(Chunk388032.t.QddTpq),
        children: e => (0, r.jsx)(p.OgN, X({
          size: "md",
          color: "currentColor",
          className: K.giftIcon
        }, e))
      }) : null;
    return require ? (0, Chunk951288.jsxs)("div", {
      className: Chunk982710.description,
      children: [module, (0, Chunk951288.jsxs)("div", {
        children: [exports, Chunk593061]
      }), Chunk600164]
    }) : (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
      children: [Chunk593061, (0, Chunk951288.jsxs)("div", {
        className: Chunk982710.description,
        children: [module, (0, Chunk951288.jsx)("div", {
          children: exports
        }), Chunk600164]
      })]
    })
  }
  renderGuildProductBenefits() {
    let {
      payment: e,
      application: t,
      locale: n
    } = this.props, i = null == exports ? true : exports.guildId;
    return module.isGuildProductPurchase ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk982710.sectionDivider
      }), module.isSoftDeletedProduct ? (0, Chunk951288.jsx)(Chunk539290.Z, {
        className: Chunk982710.warningBlock,
        buttonPosition: Chunk539290.E.RIGHT,
        notice: Chunk388032.intl.string(Chunk388032.t["3AvulJ"]),
        ctaLabel: Chunk388032.intl.string(Chunk388032.t.zoztQE),
        onClick: () => (0, Chunk782568.Z)(Q(require))
      }) : null != i && null != module.sku && (0, Chunk951288.jsx)(ea, {
        guildId: i,
        guildProductListingId: module.sku.id
      })]
    }) : null
  }
  renderExpandedSection() {
    return (0, Chunk951288.jsx)(Chunk481060.P3F, {
      onClick: e => e.stopPropagation(),
      children: (0, Chunk951288.jsxs)("div", {
        className: Chunk982710.expandedInfo,
        children: [(0, Chunk951288.jsx)(Chunk481060.H, {
          className: Chunk982710.paymentHeader,
          children: Chunk388032.intl.string(Chunk388032.t.nyzoFR)
        }), this.renderPaymentBreakdown(), this.renderGuildProductBenefits(), this.renderInvoiceDownload(), this.renderRefundDetails()]
      })
    })
  }
  render() {
    let {
      payment: e,
      className: t,
      compactMode: n
    } = this.props, {
      expanded: i
    } = this.state;
    return (0, Chunk951288.jsx)(Chunk91192.mh, {
      id: module.id,
      children: e => (0, r.jsxs)(p.P3F, J(X({
        onClick: this.handleExpandInfo,
        "data-expanded": i,
        className: l()(K.payment, t, {
          [K.compact]: n
        }),
        focusProps: {
          offset: 4
        }
      }, e), {
        children: [(0, r.jsxs)(x.Z, {
          className: K.summaryInfo,
          align: x.Z.Align.CENTER,
          "data-expanded": i,
          children: [this.renderDescription(), (0, r.jsxs)("div", {
            className: K.amount,
            children: [this.renderStatus(), this.renderPrice()]
          }), (0, r.jsx)(L.Z, {
            className: K.expand,
            direction: i ? L.Z.Directions.UP : L.Z.Directions.DOWN
          })]
        }), i ? this.renderExpandedSection() : null]
      }))
    })
  }
  constructor(...e) {
    super(...e), q(this, "state", {
      expanded: false
    }), q(this, "refundRules", [{
      rule: "PURCHASE_DATE",
      canRefund: () => {
        let {
          payment: e
        } = this.props, t = e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift ? 5 : 14;
        return this.daysSincePurchase <= t
      }
    }, {
      rule: "SKU_TYPE",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.sku || e.sku.type !== H.epS.CONSUMABLE
      }
    }, {
      rule: "ALREADY_REFUNDED",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return e.amountRefunded < e.amount
      }
    }, {
      rule: "PAYMENT_STATUS",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return !ee.includes(e.status)
      }
    }, {
      rule: "PAYMENT_GATEWAY",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.paymentGateway || !et.includes(e.paymentGateway)
      }
    }, {
      rule: "SKU_STICKER_PACK",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.sku || !(0, U.yE)(e.sku.flags, H.l4R.STICKER)
      }
    }, {
      rule: "SUBSCRIPTION_TYPE",
      canRefund: () => {
        var e, t;
        let {
          payment: n
        } = this.props;
        return (null == (e = n.subscription) ? true : e.type) !== H.NYc.GUILD && (null == (t = n.subscription) ? true : t.type) !== H.NYc.APPLICATION
      }
    }, {
      rule: "GUILD_PRODUCT",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.sku || !(0, U.yE)(e.sku.flags, u.l.GUILD_PRODUCT)
      }
    }, {
      rule: "COLLECTIBLE",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return !e.isCollectible
      }
    }]), q(this, "handleExpandInfo", () => {
      this.setState({
        expanded: !this.state.expanded
      })
    })
  }
}

function eo(e) {
  var t, n;
  let {
    payment: i,
    locale: a,
    compactMode: l,
    className: o
  } = e, c = null != i.sku && $.includes(i.sku.type), d = null != i.sku && c ? i.sku.applicationId : null, u = null == (t = i.sku) ? true : t.applicationId, p = (null == (n = i.subscription) ? true : n.type) === H.NYc.APPLICATION, {
    applicationStatistics: g,
    gameApplication: h,
    paymentSources: b
  } = (0, m.cj)([Z.Z, k.Z, f.Z], () => {
    var e, t;
    return {
      applicationStatistics: null != d ? k.Z.getCurrentUserStatisticsForApplication(d) : null,
      gameApplication: null != (t = f.Z.getApplication(null != d ? d : "")) ? t : null == (e = i.sku) ? true : e.application,
      paymentSources: Z.Z.paymentSources
    }
  }), x = (0, m.e7)([f.Z], () => null != u ? f.Z.getApplication(u) : null);
  s.useEffect(() => {
    p && null != u && (0, I.UM)(u)
  }, [u, p]);
  let _ = (0, m.e7)([D.Z], () => D.Z.getGuild(null == h ? true : h.guildId)),
    j = c ? h : true,
    E = i.subscription,
    C = (0, m.e7)([w.Z], () => null != E && E.type !== H.NYc.PREMIUM ? w.Z.get(E.items[0].planId) : null);
  return (0, r.jsx)(el, {
    applicationStatistics: g,
    application: p ? x : j,
    guild: _,
    stickerPack: null,
    paymentSources: b,
    locale: a,
    compactMode: l,
    className: o,
    payment: i,
    plan: C
  })
}
q(el, "defaultProps", {
  compactMode: false
})