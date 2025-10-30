/** Chunk was on web.js **/
/** chunk id: 807160, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eh
}), require("./953529.js"), require("./388685.js"), require("./539854.js"), require("./997841.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  c = require.n(Chunk913527),
  Chunk91192 = require("./91192.jsx"),
  Chunk314877 = require("./314877.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk812206 = require("./812206.js"),
  Chunk593061 = require("./593061.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk925329 = require("./925329.jsx"),
  Chunk267101 = require("./267101.js"),
  Chunk240864 = require("./240864.js"),
  Chunk942833 = require("./942833.js"),
  Chunk916001 = require("./916001.jsx"),
  Chunk298243 = require("./298243.js"),
  Chunk336197 = require("./336197.js"),
  Chunk690221 = require("./690221.jsx"),
  Chunk307643 = require("./307643.js"),
  Chunk378233 = require("./378233.js"),
  Chunk419922 = require("./419922.jsx"),
  Chunk342386 = require("./342386.js"),
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
  Chunk708016 = require("./708016.js");

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
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      q(e, t, n[t])
    })
  }
  return e
}

function Q(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function J(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Q(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function $(e, t) {
  if (null == e) return {};
  var n, r, i = ee(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function ee(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let et = 14,
  en = 5,
  er = 2,
  ei = e => "https://".concat(H.xr4, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000118612"),
  ea = 24,
  eo = [Chunk981631.epS.DURABLE_PRIMARY, Chunk981631.epS.DURABLE, Chunk981631.epS.CONSUMABLE],
  es = [Chunk981631.PyE.FAILED, Chunk981631.PyE.REVERSED, Chunk981631.PyE.CANCELED],
  el = [Chunk231338.gg.APPLE],
  ec = e => {
    let {
      description: t,
      cost: n
    } = e;
    return (0, i.jsx)("li", {
      className: z.paymentDetail,
      children: (0, i.jsxs)(E.Z, {
        justify: E.Z.Justify.BETWEEN,
        children: [(0, i.jsx)("div", {
          children: t
        }), (0, i.jsx)("div", {
          children: n
        })]
      })
    })
  };

function eu(e) {
  let {
    value: t,
    copyText: n,
    copyFeedbackText: r
  } = e, [o, s] = a.useState(false), [l, c] = a.useState(false), u = () => {
    (0, U.JG)(t, () => {
      c(true), s(true)
    })
  };
  return (0, i.jsx)(p.aML, {
    "data-migration-pending": true,
    forceOpen: l,
    text: o ? r : n,
    children: e => {
      var {
        onMouseEnter: n,
        onMouseLeave: r
      } = e, a = $(e, ["onMouseEnter", "onMouseLeave"]);
      return (0, i.jsx)(p.P3F, J(X({}, a), {
        onMouseEnter: () => {
          o && s(false), "function" == typeof n && n()
        },
        onMouseLeave: () => {
          c(false), "function" == typeof r && r()
        },
        onClick: u,
        children: (0, i.jsx)("div", {
          className: z.copiableContainer,
          children: t
        })
      }))
    }
  })
}
let ed = e => {
  let {
    description: t,
    detail: n
  } = e;
  return (0, i.jsx)("li", {
    className: z.guildProductDetail,
    children: (0, i.jsxs)(E.Z, {
      justify: E.Z.Justify.BETWEEN,
      children: [(0, i.jsx)("div", {
        children: t
      }), (0, i.jsx)("div", {
        children: n
      })]
    })
  })
};

function ef(e) {
  let {
    guildId: t,
    guildProductListingId: n
  } = e, r = (0, y.hO)(t, n, {
    requireCurrentGuild: false
  }), o = (0, v.C)(r), s = (0, f.e7)([x.Z], () => x.Z.getGuild(t)), l = (null == r ? true : r.role_id) != null && (null == r ? true : r.attachments_count) === 0 ? K.intl.string(K.t.H11qcT) : o, c = a.useCallback(async () => {
    (null == s ? true : s.features.has(H.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) ? await (0, S.Z)(H.Z5c.GUILD_PRODUCT(t, n)) : await (0, S.Z)(H.Z5c.CHANNEL(t)), (0, P.default)()
  }, [s, t, n]);
  return (0, i.jsxs)(i.Fragment, {
    children: [null != l && (0, i.jsx)(ed, {
      description: K.intl.string(K.t.lXPbJb),
      detail: l
    }), null != s && (0, i.jsx)(ed, {
      description: K.intl.string(K.t.Wpn8z8),
      detail: (0, i.jsx)(A.Z, {
        onClick: c,
        children: s.name
      })
    })]
  })
}

function e_(e) {
  var t, n;
  let {
    guildId: r,
    guildProductListingId: a
  } = e, o = (0, y.hO)(r, a, {
    requireCurrentGuild: false
  }), s = (0, f.e7)([O.Z], () => O.Z.getGuildProductFetchState(a) === O.M.FETCHING), l = null == o ? true : o.role_id, c = (0, f.e7)([D.Z], () => null != l ? D.Z.getRole(r, l) : true, [r, l]), u = (0, T.Z)({
    guildId: r,
    productId: a
  }), d = (null != (n = null == o || null == (t = o.attachments) ? true : t.length) ? n : 0) > 0, h = null != c;
  return s ? (0, i.jsx)("div", {
    className: z.guildProductBenefits,
    children: (0, i.jsx)(p.$jN, {})
  }) : null != o && (d || h) ? (0, i.jsxs)("div", {
    className: z.guildProductBenefits,
    children: [d && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(p.Text, {
        variant: "text-xs/semibold",
        color: "header-secondary",
        className: z.guildProductBenefitLabel,
        children: K.intl.string(K.t.hxawoy)
      }), (0, i.jsx)(_.zxk, X({}, u))]
    }), h && (0, i.jsxs)(i.Fragment, {
      children: [d && (0, i.jsx)("div", {
        className: z.divider
      }), (0, i.jsx)(p.Text, {
        variant: "text-xs/semibold",
        color: "header-secondary",
        className: z.guildProductBenefitLabel,
        children: K.intl.string(K.t.gWBNet)
      }), (0, i.jsx)(I.Z, {
        role: c
      })]
    })]
  }) : null
}
class ep extends(r = Chunk647438.PureComponent) {
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
          className: Chunk708016.statusTagGrey,
          children: Chunk388032.intl.string(Chunk388032.t.y7F0Re)
        });
      case Chunk981631.PyE.FAILED:
        return (0, Chunk951288.jsx)("span", {
          className: Chunk708016.statusTagRed,
          children: Chunk388032.intl.string(Chunk388032.t.Yo4ru6)
        });
      case Chunk981631.PyE.REFUNDED:
        if (module.amountRefunded !== module.amount) return (0, Chunk951288.jsx)("span", {
          className: Chunk708016.statusTagGreen,
          children: Chunk388032.intl.string(Chunk388032.t.lYbZzz)
        });
        return (0, Chunk951288.jsx)("span", {
          className: Chunk708016.statusTagGreen,
          children: Chunk388032.intl.string(Chunk388032.t.ZBb6NK)
        });
      case Chunk981631.PyE.REVERSED:
        return (0, Chunk951288.jsx)("span", {
          className: Chunk708016.statusTagRed,
          children: Chunk388032.intl.string(Chunk388032.t.YQv9Li)
        });
      case Chunk981631.PyE.CANCELED:
        return (0, Chunk951288.jsx)("span", {
          className: Chunk708016.statusTagRed,
          children: Chunk388032.intl.string(Chunk388032.t.ttkBhy)
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
      className: Chunk708016.price,
      children: (0, Chunk937615.T4)(exports, module.currency)
    })
  }
  renderPaymentIdField() {
    let {
      payment: e
    } = this.props;
    return (0, Chunk951288.jsx)("li", {
      className: Chunk708016.paymentDetail,
      children: (0, Chunk951288.jsxs)("div", {
        className: Chunk708016.paymentInfo,
        children: [(0, Chunk951288.jsx)("div", {
          children: Chunk388032.intl.string(Chunk388032.t["UQim+r"])
        }), (0, Chunk951288.jsx)(eu, {
          value: module.id,
          copyText: Chunk388032.intl.string(Chunk388032.t["Mdk9+A"]),
          copyFeedbackText: Chunk388032.intl.string(Chunk388032.t["7eIrA2"])
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
      taxInclusive: r,
      tax: o,
      amount: l,
      amountRefunded: c,
      currency: u
    } = module, d = null == require ? true : require.guildId;
    return (0, Chunk951288.jsxs)("div", {
      className: s()(Chunk708016.paymentText, Chunk708016.paymentBreakdown),
      children: [null != module.paymentSource ? (0, Chunk951288.jsx)(Chunk244526.Z, {
        paymentSource: module.paymentSource,
        locale: exports,
        descriptionClassName: Chunk708016.paymentText,
        showLabels: true,
        showPaymentSourceIcon: true
      }) : module.paymentGateway === Chunk231338.gg.APPLE_PARTNER ? (0, Chunk951288.jsx)(Chunk244526.Z, {
        paymentSource: new Chunk46141.$z({}),
        locale: exports,
        descriptionClassName: Chunk708016.paymentText,
        showLabels: true,
        showPaymentSourceIcon: true
      }) : null, (0, Chunk951288.jsxs)("ul", {
        children: [this.renderPaymentIdField(), !r && Chunk120356 > 0 ? (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
          children: [(0, Chunk951288.jsx)(ec, {
            description: module.description,
            cost: (0, Chunk937615.T4)(Chunk913527 - Chunk120356, Chunk91192)
          }), (0, Chunk951288.jsx)(ec, {
            description: Chunk388032.intl.string(Chunk388032.t.QgWXht),
            cost: (0, Chunk937615.T4)(Chunk120356, Chunk91192)
          })]
        }) : null, (0, Chunk951288.jsx)(ec, {
          description: Chunk388032.intl.string(Chunk388032.t.txajQG),
          cost: (0, Chunk937615.T4)(Chunk913527, Chunk91192)
        }), module.isGuildProductPurchase && null != Chunk314877 && null != module.sku && (0, Chunk951288.jsx)(ef, {
          guildId: Chunk314877,
          guildProductListingId: module.sku.id
        }), c > 0 && (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
          children: [(0, Chunk951288.jsx)(ec, {
            description: Chunk388032.intl.string(Chunk388032.t["A+I0AP"]),
            cost: (0, Chunk937615.T4)(c, Chunk91192)
          }), (0, Chunk951288.jsx)(ec, {
            description: Chunk388032.intl.string(Chunk388032.t.xER6Wi),
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
      r = this.validateRefundRules();
    if (r.includes("PAYMENT_GATEWAY") || r.includes("PAYMENT_STATUS") || r.includes("ALREADY_REFUNDED") || r.includes("SKU_STICKER_PACK") || r.includes("SUBSCRIPTION_TYPE") || r.includes("GUILD_PRODUCT")) return null;
    let o = 0 === r.length,
      s = ei(exports),
      l = this.isPremium ? en : et;
    return e = r.includes("SKU_TYPE") ? Chunk388032.intl.format(Chunk388032.t["5lvoVS"], {
      supportURL: s
    }) : Chunk120356 ? require.isPremiumSubscription || require.isPremiumGuildSubscription ? Chunk388032.intl.format(Chunk388032.t.EPYteX, {
      dateLimit: Chunk913527,
      supportURL: s
    }) : require.isGift ? Chunk388032.intl.format(Chunk388032.t["16eP/L"], {
      dateLimit: Chunk913527,
      supportURL: s
    }) : Chunk388032.intl.format(Chunk388032.t["1LDI4J"], {
      dateLimit: Chunk913527,
      playtimeLimit: er,
      supportURL: s
    }) : require.isCollectible ? Chunk388032.intl.string(Chunk388032.t.s9TZM1) : require.isGift ? Chunk388032.intl.formatToPlainString(Chunk388032.t.owlOWc, {
      dateLimit: Chunk913527
    }) : require.isPremiumSubscription || require.isPremiumGuildSubscription ? Chunk388032.intl.formatToPlainString(Chunk388032.t.dk7vyL, {
      dateLimit: Chunk913527
    }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.s4Kk0C, {
      dateLimit: Chunk913527,
      playtimeLimit: er
    }), (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
      children: [(0, Chunk951288.jsx)(Chunk481060.H, {
        className: Chunk708016.paymentHeader,
        children: Chunk388032.intl.string(Chunk388032.t["n/27pr"])
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk708016.paymentText,
        children: [(0, Chunk951288.jsx)("div", {
          children: module
        }), this.renderRefundActions(r)]
      })]
    })
  }
  renderRefundCriteria(e, t, n, r) {
    return (0, i.jsxs)("div", {
      className: z.refundCriteria,
      children: [(0, i.jsx)(p.H, {
        className: z.refundSubHeader,
        children: e
      }), (0, i.jsxs)("div", {
        className: z.refundIconContainer,
        children: [(0, i.jsx)(t, {
          className: z.refundCriteriaIcon,
          color: "currentColor"
        }), null != n && (0, i.jsx)("div", {
          children: n
        })]
      })]
    }, r)
  }
  renderRefundActions(e) {
    let {
      locale: t,
      payment: n
    } = this.props;
    if (e.includes("SKU_TYPE")) return null;
    let r = e.includes("PURCHASE_DATE") ? p.Dio : p.dz2;
    return (0, i.jsxs)("div", {
      className: z.refundActions,
      children: [(0, i.jsx)("div", {
        className: z.refundRules,
        children: !n.isCollectible && this.renderRefundCriteria(K.intl.string(K.t.H0RNz4), r, K.intl.formatToPlainString(K.t["7dtXa/"], {
          daysSincePurchase: this.daysSincePurchase
        }))
      }), (0, i.jsx)(p.Anchor, {
        href: ei(t),
        children: K.intl.string(K.t.re5nOB)
      })]
    })
  }
  renderDescription() {
    let e, t, {
        compactMode: n,
        payment: r,
        application: o,
        guild: s,
        stickerPack: l,
        plan: u
      } = this.props,
      {
        expanded: d
      } = this.state,
      f = r.sku,
      _ = r.subscription,
      h = null != r.paymentSource && Chunk981631.Uk1.has(r.paymentSource.type);
    if (null != Chunk159691 && 0 !== Chunk159691.items.length) {
      let n = [],
        a = null;
      if (Chunk159691.type === Chunk981631.NYc.PREMIUM) Chunk159691.items.forEach(e => {
        let {
          planId: t,
          quantity: r
        } = e;
        (0, Z.uZ)(t) ? (n.push(Z.ZP.getDisplayName(t, false, h)), a = (0, Z.Wz)(Y.GP[t].skuId)) : (n.push("".concat(r > 1 ? "".concat(r, "x ") : "").concat(Z.ZP.getDisplayName(t, false, h))), null == a && (a = (0, Z.Wz)(Y.GP[t].skuId)))
      });
      else if (Chunk159691.type === Chunk981631.NYc.GUILD) {
        if (null != Chunk91192) {
          let e = Chunk91192.interval === Chunk474936.rV.YEAR ? Chunk388032.t.V6UFQM : Chunk388032.t["6oq128"];
          require.push(Chunk388032.intl.format(module, {
            planName: Chunk91192.name
          })), a = Chunk91192.skuId
        }
      } else Chunk159691.type === Chunk981631.NYc.APPLICATION && (null != Chunk91192 && (a = Chunk91192.skuId), null != Chunk120356 ? require.push(Chunk388032.intl.formatToPlainString(Chunk388032.t["0wL/VI"], {
        tier: null == Chunk442837 ? true : Chunk442837.name
      })) : require.push(Chunk388032.intl.string(Chunk388032.t["9czSYu"])));
      t = 0 !== require.length ? require.join(", ") : r.description, e = (0, Chunk951288.jsx)(Chunk925329.Z, {
        className: Chunk708016.descriptionIcon,
        guildClassName: Chunk708016.guildDescriptionIcon,
        game: Chunk120356,
        guild: s,
        size: Chunk925329.A.XSMALL,
        skuId: null != Chunk647438 ? Chunk647438 : null == Chunk442837 ? true : Chunk442837.id
      })
    } else if (null != Chunk442837) {
      var m;
      if (t = r.isGuildProductPurchase && r.isSoftDeletedProduct ? Chunk388032.intl.string(Chunk388032.t.O7uLmw) : Chunk442837.name, null != Chunk913527) {
        let t = (0, Chunk378233.Zt)(Chunk913527);
        e = (0, Chunk951288.jsx)(Chunk419922.Z, {
          disableAnimation: !Chunk314877,
          isInteracting: Chunk314877,
          sticker: exports,
          className: Chunk708016.descriptionIcon,
          size: ea
        })
      } else e = (null == (m = r.sku) ? true : Chunk812206.productLine) === Chunk981631.POd.COLLECTIBLES ? (0, Chunk951288.jsx)(Chunk481060.EOn, {
        size: "custom",
        width: 23,
        height: 23,
        color: "currentColor",
        className: Chunk708016.shopIcon
      }) : (0, Chunk951288.jsx)(Chunk925329.Z, {
        className: Chunk708016.descriptionIcon,
        guildClassName: Chunk708016.guildDescriptionIcon,
        game: Chunk120356,
        guild: s,
        size: Chunk925329.A.XSMALL,
        skuId: Chunk442837.id
      })
    } else e = (0, Chunk951288.jsx)(Chunk481060.SrA, {
      size: "md",
      color: "currentColor",
      className: Chunk708016.descriptionIcon
    }), t = r.description;
    let g = (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        className: Chunk708016.date,
        children: (0, Chunk55935.vc)(c()(r.createdAt), "MM/DD/YYYY")
      }),
      E = r.isGift ? (0, Chunk951288.jsx)(Chunk481060.aML, {
        "data-migration-pending": true,
        text: Chunk388032.intl.string(Chunk388032.t.QddTpm),
        children: e => (0, i.jsx)(p.OgN, X({
          size: "md",
          color: "currentColor",
          className: z.giftIcon
        }, e))
      }) : null;
    return require ? (0, Chunk951288.jsxs)("div", {
      className: Chunk708016.description,
      children: [module, (0, Chunk951288.jsxs)("div", {
        children: [exports, Chunk593061]
      }), Chunk600164]
    }) : (0, Chunk951288.jsxs)(Chunk647438.Fragment, {
      children: [Chunk593061, (0, Chunk951288.jsxs)("div", {
        className: Chunk708016.description,
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
    } = this.props, r = null == exports ? true : exports.guildId;
    return module.isGuildProductPurchase ? (0, Chunk951288.jsxs)(Chunk951288.Fragment, {
      children: [(0, Chunk951288.jsx)("div", {
        className: Chunk708016.sectionDivider
      }), module.isSoftDeletedProduct ? (0, Chunk951288.jsx)(Chunk481060.Wn, {
        messageType: Chunk481060.QYI.WARNING,
        action: (0, Chunk951288.jsx)(Chunk159691.zxk, {
          variant: "overlay-secondary",
          text: Chunk388032.intl.string(Chunk388032.t.zoztQA),
          onClick: () => (0, Chunk782568.Z)(ei(require))
        }),
        children: Chunk388032.intl.string(Chunk388032.t["3AvulN"])
      }) : null != r && null != module.sku && (0, Chunk951288.jsx)(e_, {
        guildId: r,
        guildProductListingId: module.sku.id
      })]
    }) : null
  }
  renderExpandedSection() {
    return (0, Chunk951288.jsx)(Chunk481060.P3F, {
      onClick: e => e.stopPropagation(),
      children: (0, Chunk951288.jsxs)("div", {
        className: Chunk708016.expandedInfo,
        children: [(0, Chunk951288.jsx)(Chunk481060.H, {
          className: Chunk708016.paymentHeader,
          children: Chunk388032.intl.string(Chunk388032.t.nyzoFb)
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
      expanded: r
    } = this.state;
    return (0, Chunk951288.jsx)(Chunk91192.mh, {
      id: module.id,
      children: e => (0, i.jsxs)(p.P3F, J(X({
        onClick: this.handleExpandInfo,
        "data-expanded": r,
        className: s()(z.payment, t, {
          [z.compact]: n
        }),
        focusProps: {
          offset: 4
        }
      }, e), {
        children: [(0, i.jsxs)(E.Z, {
          className: z.summaryInfo,
          align: E.Z.Align.CENTER,
          "data-expanded": r,
          children: [this.renderDescription(), (0, i.jsxs)("div", {
            className: z.amount,
            children: [this.renderStatus(), this.renderPrice()]
          }), (0, i.jsx)(j.Z, {
            className: z.expand,
            direction: r ? j.Z.Directions.UP : j.Z.Directions.DOWN
          })]
        }), r ? this.renderExpandedSection() : null]
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
        } = this.props, t = e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift ? en : et;
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
        return !es.includes(e.status)
      }
    }, {
      rule: "PAYMENT_GATEWAY",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.paymentGateway || !el.includes(e.paymentGateway)
      }
    }, {
      rule: "SKU_STICKER_PACK",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.sku || !(0, B.yE)(e.sku.flags, H.l4R.STICKER)
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
        return null == e.sku || !(0, B.yE)(e.sku.flags, d.l.GUILD_PRODUCT)
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

function eh(e) {
  var t, n;
  let {
    payment: r,
    locale: o,
    compactMode: s,
    className: l
  } = e, c = null != r.sku && eo.includes(r.sku.type), u = null != r.sku && c ? r.sku.applicationId : null, d = null == (t = r.sku) ? true : t.applicationId, _ = (null == (n = r.subscription) ? true : n.type) === H.NYc.APPLICATION, {
    applicationStatistics: p,
    gameApplication: h,
    paymentSources: g
  } = (0, f.cj)([L.Z, k.Z, m.Z], () => {
    var e, t;
    return {
      applicationStatistics: null != u ? k.Z.getCurrentUserStatisticsForApplication(u) : null,
      gameApplication: null != (t = m.Z.getApplication(null != u ? u : "")) ? t : null == (e = r.sku) ? true : e.application,
      paymentSources: L.Z.paymentSources
    }
  }), E = (0, f.e7)([m.Z], () => null != d ? m.Z.getApplication(d) : null), b = null;
  a.useEffect(() => {
    _ && null != d && (0, C.UM)(d)
  }, [d, _]);
  let y = (0, f.e7)([x.Z], () => x.Z.getGuild(null == h ? true : h.guildId)),
    O = c ? h : true,
    v = r.subscription,
    I = (0, f.e7)([M.Z], () => null != v && v.type !== H.NYc.PREMIUM ? M.Z.get(v.items[0].planId) : null);
  return (0, i.jsx)(ep, {
    applicationStatistics: p,
    application: _ ? E : O,
    guild: y,
    stickerPack: b,
    paymentSources: g,
    locale: o,
    compactMode: s,
    className: l,
    payment: r,
    plan: I
  })
}
q(ep, "defaultProps", {
  compactMode: false
})