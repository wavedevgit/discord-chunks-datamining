/** Chunk was on web.js **/
/** chunk id: 807160, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eT
}), require("./953529.js"), require("./388685.js"), require("./539854.js"), require("./997841.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  c = require.n(Chunk913527),
  Chunk91192 = require("./91192.jsx"),
  Chunk314877 = require("./314877.js"),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk524995 = require("./524995.js"),
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
  Chunk164670 = require("./164670.js"),
  Chunk517730 = require("./517730.jsx"),
  Chunk378233 = require("./378233.js"),
  Chunk419922 = require("./419922.jsx"),
  Chunk313789 = require("./313789.js"),
  Chunk342386 = require("./342386.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk46141 = require("./46141.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk853872 = require("./853872.js"),
  Chunk509545 = require("./509545.js"),
  Chunk230307 = require("./230307.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk572004 = require("./572004.js"),
  Chunk55935 = require("./55935.js"),
  Chunk74538 = require("./74538.js"),
  Chunk937615 = require("./937615.js"),
  Chunk51144 = require("./51144.js"),
  Chunk244526 = require("./244526.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk982710 = require("./982710.js");

function ea(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function eo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      ea(e, t, n[t])
    })
  }
  return e
}

function es(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function el(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : es(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function ec(e, t) {
  if (null == e) return {};
  var n, r, i = eu(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function eu(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let ed = 14,
  ef = 5,
  ep = 2,
  e_ = e => "https://".concat(ee.xr4, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000118612"),
  em = 24,
  eh = [Chunk981631.epS.DURABLE_PRIMARY, Chunk981631.epS.DURABLE, Chunk981631.epS.CONSUMABLE],
  eg = [Chunk981631.PyE.FAILED, Chunk981631.PyE.REVERSED, Chunk981631.PyE.CANCELED],
  eE = [Chunk231338.gg.APPLE],
  eb = e => {
    let {
      description: t,
      cost: n
    } = e;
    return (0, i.jsx)("li", {
      className: ei.paymentDetail,
      children: (0, i.jsxs)(v.Z, {
        justify: v.Z.Justify.BETWEEN,
        children: [(0, i.jsx)("div", {
          children: t
        }), (0, i.jsx)("div", {
          children: n
        })]
      })
    })
  };

function ey(e) {
  let {
    value: t,
    copyText: n,
    copyFeedbackText: r
  } = e, [o, s] = a.useState(false), [l, c] = a.useState(false), u = () => {
    (0, z.JG)(t, () => {
      c(true), s(true)
    })
  };
  return (0, i.jsx)(m.aML, {
    "data-migration-pending": true,
    forceOpen: l,
    text: o ? r : n,
    children: e => {
      var {
        onMouseEnter: n,
        onMouseLeave: r
      } = e, a = ec(e, ["onMouseEnter", "onMouseLeave"]);
      return (0, i.jsx)(m.P3F, el(eo({}, a), {
        onMouseEnter: () => {
          o && s(false), "function" == typeof n && n()
        },
        onMouseLeave: () => {
          c(false), "function" == typeof r && r()
        },
        onClick: u,
        children: (0, i.jsx)("div", {
          className: ei.copiableContainer,
          children: t
        })
      }))
    }
  })
}
let eO = e => {
  let {
    description: t,
    detail: n
  } = e;
  return (0, i.jsx)("li", {
    className: ei.guildProductDetail,
    children: (0, i.jsxs)(v.Z, {
      justify: v.Z.Justify.BETWEEN,
      children: [(0, i.jsx)("div", {
        children: t
      }), (0, i.jsx)("div", {
        children: n
      })]
    })
  })
};

function ev(e) {
  let {
    guildId: t,
    guildProductListingId: n
  } = e, r = (0, I.hO)(t, n, {
    requireCurrentGuild: false
  }), o = (0, A.C)(r), s = (0, p.e7)([B.Z], () => B.Z.getGuild(t)), l = (null == r ? true : r.role_id) != null && (null == r ? true : r.attachments_count) === 0 ? er.intl.string(er.t.H11qcT) : o, c = a.useCallback(async () => {
    (null == s ? true : s.features.has(ee.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) ? await (0, P.Z)(ee.Z5c.GUILD_PRODUCT(t, n)) : await (0, P.Z)(ee.Z5c.CHANNEL(t)), (0, k.default)()
  }, [s, t, n]);
  return (0, i.jsxs)(i.Fragment, {
    children: [null != l && (0, i.jsx)(eO, {
      description: er.intl.string(er.t.lXPbJb),
      detail: l
    }), null != s && (0, i.jsx)(eO, {
      description: er.intl.string(er.t.Wpn8z8),
      detail: (0, i.jsx)(R.Z, {
        onClick: c,
        children: s.name
      })
    })]
  })
}

function eS(e) {
  var t, n;
  let {
    guildId: r,
    guildProductListingId: a
  } = e, o = (0, I.hO)(r, a, {
    requireCurrentGuild: false
  }), s = (0, p.e7)([T.Z], () => T.Z.getGuildProductFetchState(a) === T.M.FETCHING), l = null == o ? true : o.role_id, c = (0, p.e7)([Z.Z], () => null != l ? Z.Z.getRole(r, l) : true, [r, l]), u = (0, N.Z)({
    guildId: r,
    productId: a
  }), d = (null != (n = null == o || null == (t = o.attachments) ? true : t.length) ? n : 0) > 0, f = null != c;
  return s ? (0, i.jsx)("div", {
    className: ei.guildProductBenefits,
    children: (0, i.jsx)(m.$jN, {})
  }) : null != o && (d || f) ? (0, i.jsxs)("div", {
    className: ei.guildProductBenefits,
    children: [d && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(m.Text, {
        variant: "text-xs/semibold",
        color: "text-default",
        className: ei.guildProductBenefitLabel,
        children: er.intl.string(er.t.hxawoy)
      }), (0, i.jsx)(_.zxk, eo({}, u))]
    }), f && (0, i.jsxs)(i.Fragment, {
      children: [d && (0, i.jsx)("div", {
        className: ei.divider
      }), (0, i.jsx)(m.Text, {
        variant: "text-xs/semibold",
        color: "text-default",
        className: ei.guildProductBenefitLabel,
        children: er.intl.string(er.t.gWBNet)
      }), (0, i.jsx)(C.Z, {
        role: c
      })]
    })]
  }) : null
}
class eI extends(r = Chunk473749.PureComponent) {
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
  renderDefaultStatus() {
    let {
      payment: e
    } = this.props;
    switch (module.status) {
      case Chunk981631.PyE.PENDING:
        return (0, Chunk54381.jsx)("span", {
          className: Chunk982710.statusTagGrey,
          children: Chunk388032.intl.string(Chunk388032.t.y7F0Re)
        });
      case Chunk981631.PyE.FAILED:
        return (0, Chunk54381.jsx)("span", {
          className: Chunk982710.statusTagRed,
          children: Chunk388032.intl.string(Chunk388032.t.Yo4ru6)
        });
      case Chunk981631.PyE.REFUNDED:
        if (module.amountRefunded !== module.amount) return (0, Chunk54381.jsx)("span", {
          className: Chunk982710.statusTagGreen,
          children: Chunk388032.intl.string(Chunk388032.t.lYbZzz)
        });
        return (0, Chunk54381.jsx)("span", {
          className: Chunk982710.statusTagGreen,
          children: Chunk388032.intl.string(Chunk388032.t.ZBb6NK)
        });
      case Chunk981631.PyE.REVERSED:
        return (0, Chunk54381.jsx)("span", {
          className: Chunk982710.statusTagRed,
          children: Chunk388032.intl.string(Chunk388032.t.YQv9Li)
        });
      case Chunk981631.PyE.CANCELED:
        return (0, Chunk54381.jsx)("span", {
          className: Chunk982710.statusTagRed,
          children: Chunk388032.intl.string(Chunk388032.t.ttkBhy)
        });
      default:
        return null
    }
  }
  renderTenantStatusOverride() {
    let {
      payment: e,
      hasLinkedToApplication: t
    } = this.props;
    return (0, Chunk164670.K$)(module.sku) && module.status === Chunk981631.PyE.COMPLETED ? null != module.entitlements && module.entitlements.some(e => e.isFulfilled()) ? (0, Chunk54381.jsx)("span", {
      className: Chunk982710.statusTagGreen,
      children: Chunk388032.intl.string(Chunk388032.t.Osji1u)
    }) : module.isGift ? null != module.entitlements && module.entitlements.some(e => null != e.gifterId) ? (0, Chunk54381.jsx)("span", {
      className: Chunk982710.statusTagGreen,
      children: Chunk388032.intl.string(Chunk388032.t.lIsIFo)
    }) : (0, Chunk54381.jsx)("span", {
      className: Chunk982710.statusTagYellow,
      children: Chunk388032.intl.string(Chunk388032.t["+tqSi3"])
    }) : exports ? (0, Chunk54381.jsx)("span", {
      className: Chunk982710.statusTagYellow,
      children: Chunk388032.intl.string(Chunk388032.t.y7F0Re)
    }) : (0, Chunk54381.jsx)("span", {
      className: Chunk982710.statusTagYellow,
      children: Chunk388032.intl.string(Chunk388032.t.HHC5Z4)
    }) : null
  }
  renderStatus() {
    var e;
    return null != (e = this.renderTenantStatusOverride()) ? module : this.renderDefaultStatus()
  }
  renderPrice() {
    let {
      payment: e
    } = this.props, t = module.amount - module.amountRefunded;
    return (0, Chunk54381.jsx)("span", {
      className: Chunk982710.price,
      children: (0, Chunk937615.T4)(exports, module.currency)
    })
  }
  renderPaymentIdField() {
    let {
      payment: e
    } = this.props;
    return (0, Chunk54381.jsx)("li", {
      className: Chunk982710.paymentDetail,
      children: (0, Chunk54381.jsxs)("div", {
        className: Chunk982710.paymentInfo,
        children: [(0, Chunk54381.jsx)("div", {
          children: Chunk388032.intl.string(Chunk388032.t["UQim+r"])
        }), (0, Chunk54381.jsx)(ey, {
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
    return (0, Chunk54381.jsxs)("div", {
      className: s()(Chunk982710.paymentText, Chunk982710.paymentBreakdown),
      children: [null != module.paymentSource ? (0, Chunk54381.jsx)(Chunk244526.Z, {
        paymentSource: module.paymentSource,
        locale: exports,
        descriptionClassName: Chunk982710.paymentText,
        showLabels: true,
        showPaymentSourceIcon: true
      }) : module.paymentGateway === Chunk231338.gg.APPLE_PARTNER ? (0, Chunk54381.jsx)(Chunk244526.Z, {
        paymentSource: new Chunk46141.$z({}),
        locale: exports,
        descriptionClassName: Chunk982710.paymentText,
        showLabels: true,
        showPaymentSourceIcon: true
      }) : null, (0, Chunk54381.jsxs)("ul", {
        children: [this.renderPaymentIdField(), !r && Chunk120356 > 0 ? (0, Chunk54381.jsxs)(Chunk473749.Fragment, {
          children: [(0, Chunk54381.jsx)(eb, {
            description: module.description,
            cost: (0, Chunk937615.T4)(Chunk913527 - Chunk120356, Chunk91192)
          }), (0, Chunk54381.jsx)(eb, {
            description: Chunk388032.intl.string(Chunk388032.t.QgWXht),
            cost: (0, Chunk937615.T4)(Chunk120356, Chunk91192)
          })]
        }) : null, (0, Chunk54381.jsx)(eb, {
          description: Chunk388032.intl.string(Chunk388032.t.txajQG),
          cost: (0, Chunk937615.T4)(Chunk913527, Chunk91192)
        }), module.isGuildProductPurchase && null != Chunk314877 && null != module.sku && (0, Chunk54381.jsx)(ev, {
          guildId: Chunk314877,
          guildProductListingId: module.sku.id
        }), c > 0 && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
          children: [(0, Chunk54381.jsx)(eb, {
            description: Chunk388032.intl.string(Chunk388032.t["A+I0AP"]),
            cost: (0, Chunk937615.T4)(c, Chunk91192)
          }), (0, Chunk54381.jsx)(eb, {
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
    return (0, Chunk54381.jsx)(Chunk593061.Z, {
      payment: module
    })
  }
  renderAdditionalGameItemDetails() {
    var e, t, n;
    let {
      claimedGiftUser: r,
      payment: o,
      hasLinkedToApplication: s,
      application: l,
      locale: c,
      analyticsLocations: u
    } = this.props, d = null == (e = Chunk120356.entitlements) ? true : module.some(e => e.isFulfilled());
    return Chunk120356.status === Chunk981631.PyE.REFUNDED ? (0, Chunk54381.jsxs)(Chunk473749.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk481060.H, {
        className: Chunk982710.paymentHeader,
        children: Chunk388032.intl.string(Chunk388032.t["gIGB/A"])
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk982710.paymentText,
        children: Chunk388032.intl.format(Chunk388032.t.IBtGwC, {
          applicationName: null == Chunk913527 ? true : Chunk913527.name
        })
      })]
    }) : Chunk120356.isGift ? (0, Chunk54381.jsxs)(Chunk473749.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk481060.H, {
        className: Chunk982710.paymentHeader,
        children: Chunk388032.intl.string(Chunk388032.t["gIGB/A"])
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk982710.paymentText,
        children: null != r ? Chunk388032.intl.format(Chunk388032.t.vfUW65, {
          username: Chunk51144.ZP.getName(r)
        }) : Chunk388032.intl.string(Chunk388032.t["18wIqp"])
      }), null == r && (0, Chunk54381.jsx)("div", {
        className: Chunk982710.additionalInformationButtonContainer,
        children: (0, Chunk54381.jsx)(Chunk159691.zxk, {
          variant: "primary",
          text: Chunk388032.intl.string(Chunk388032.t["jcSP+g"]),
          onClick: () => (0, Chunk518596.openUserSettings)(Chunk313789.n.GIFT_PANEL, {
            section: Chunk981631.oAB.INVENTORY
          })
        })
      })]
    }) : Chunk314877 ? null : (0, Chunk54381.jsxs)(Chunk473749.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk481060.H, {
        className: Chunk982710.paymentHeader,
        children: Chunk388032.intl.string(Chunk388032.t["gIGB/A"])
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk982710.paymentText,
        children: s ? Chunk388032.intl.format(Chunk388032.t.DQQCAw, {
          applicationName: null == Chunk913527 ? true : Chunk913527.name,
          skuName: null == (t = Chunk120356.sku) ? true : exports.name
        }) : Chunk388032.intl.format(Chunk388032.t.ED2BqF, {
          applicationName: null == Chunk913527 ? true : Chunk913527.name,
          skuName: null == (n = Chunk120356.sku) ? true : require.name
        })
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk982710.additionalInformationButtonContainer,
        children: s ? (0, Chunk54381.jsx)(Chunk159691.zxk, {
          variant: "primary",
          text: Chunk388032.intl.string(Chunk388032.t.zoztQA),
          onClick: () => (0, Chunk782568.Z)(e_(c))
        }) : (0, Chunk54381.jsx)(Chunk159691.zxk, {
          variant: "primary",
          text: Chunk388032.intl.string(Chunk388032.t["jCqvk/"]),
          onClick: () => {
            null != Chunk120356.sku && null != Chunk913527 && (Chunk626135.default.track(Chunk981631.rMx.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED, {
              sku_id: Chunk120356.sku.id,
              application_id: Chunk913527.id,
              location_stack: Chunk91192
            }), (0, Chunk517730.I)({
              sku: Chunk120356.sku,
              application: Chunk913527,
              analyticsLocations: Chunk91192
            }))
          }
        })
      })]
    })
  }
  renderAdditionalTenantInfo() {
    let {
      payment: e
    } = this.props;
    if ((0, Chunk164670.K$)(module.sku)) return this.renderAdditionalGameItemDetails()
  }
  renderRefundDetails() {
    let e, {
        locale: t,
        payment: n
      } = this.props,
      r = this.validateRefundRules();
    if (r.includes("PAYMENT_GATEWAY") || r.includes("PAYMENT_STATUS") || r.includes("ALREADY_REFUNDED") || r.includes("SKU_STICKER_PACK") || r.includes("SUBSCRIPTION_TYPE") || r.includes("GUILD_PRODUCT")) return null;
    let o = 0 === r.length,
      s = e_(exports),
      l = this.isPremium ? ef : ed;
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
      playtimeLimit: ep,
      supportURL: s
    }) : require.isCollectible ? Chunk388032.intl.string(Chunk388032.t.s9TZM1) : require.isGift ? Chunk388032.intl.formatToPlainString(Chunk388032.t.owlOWc, {
      dateLimit: Chunk913527
    }) : require.isPremiumSubscription || require.isPremiumGuildSubscription ? Chunk388032.intl.formatToPlainString(Chunk388032.t.dk7vyL, {
      dateLimit: Chunk913527
    }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.s4Kk0C, {
      dateLimit: Chunk913527,
      playtimeLimit: ep
    }), (0, Chunk54381.jsxs)(Chunk473749.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk481060.H, {
        className: Chunk982710.paymentHeader,
        children: Chunk388032.intl.string(Chunk388032.t["n/27pr"])
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk982710.paymentText,
        children: [(0, Chunk54381.jsx)("div", {
          children: module
        }), this.renderRefundActions(r)]
      })]
    })
  }
  renderRefundCriteria(e, t, n, r) {
    return (0, i.jsxs)("div", {
      className: ei.refundCriteria,
      children: [(0, i.jsx)(m.H, {
        className: ei.refundSubHeader,
        children: e
      }), (0, i.jsxs)("div", {
        className: ei.refundIconContainer,
        children: [(0, i.jsx)(t, {
          className: ei.refundCriteriaIcon,
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
    let r = e.includes("PURCHASE_DATE") ? m.Dio : m.dz2;
    return (0, i.jsxs)("div", {
      className: ei.refundActions,
      children: [(0, i.jsx)("div", {
        className: ei.refundRules,
        children: !n.isCollectible && this.renderRefundCriteria(er.intl.string(er.t.H0RNz4), r, er.intl.formatToPlainString(er.t["7dtXa/"], {
          daysSincePurchase: this.daysSincePurchase
        }))
      }), (0, i.jsx)(m.Anchor, {
        href: e_(t),
        children: er.intl.string(er.t.re5nOB)
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
      p = r.subscription,
      _ = null != r.paymentSource && Chunk981631.Uk1.has(r.paymentSource.type);
    if (null != Chunk442837 && 0 !== Chunk442837.items.length) {
      let n = [],
        a = null;
      if (Chunk442837.type === Chunk981631.NYc.PREMIUM) Chunk442837.items.forEach(e => {
        let {
          planId: t,
          quantity: r
        } = e;
        (0, Q.uZ)(t) ? (n.push(Q.ZP.getDisplayName(t, false, _)), a = (0, Q.Wz)(et.GP[t].skuId)) : (n.push("".concat(r > 1 ? "".concat(r, "x ") : "").concat(Q.ZP.getDisplayName(t, false, _))), null == a && (a = (0, Q.Wz)(et.GP[t].skuId)))
      });
      else if (Chunk442837.type === Chunk981631.NYc.GUILD) {
        if (null != Chunk91192) {
          let e = Chunk91192.interval === Chunk474936.rV.YEAR ? Chunk388032.t.V6UFQM : Chunk388032.t["6oq128"];
          require.push(Chunk388032.intl.format(module, {
            planName: Chunk91192.name
          })), a = Chunk91192.skuId
        }
      } else Chunk442837.type === Chunk981631.NYc.APPLICATION && (null != Chunk91192 && (a = Chunk91192.skuId), null != Chunk120356 ? require.push(Chunk388032.intl.formatToPlainString(Chunk388032.t["0wL/VI"], {
        tier: null == Chunk95015 ? true : Chunk95015.name
      })) : require.push(Chunk388032.intl.string(Chunk388032.t["9czSYu"])));
      t = 0 !== require.length ? require.join(", ") : r.description, e = (0, Chunk54381.jsx)(Chunk925329.Z, {
        className: Chunk982710.descriptionIcon,
        guildClassName: Chunk982710.guildDescriptionIcon,
        game: Chunk120356,
        guild: s,
        size: Chunk925329.A.XSMALL,
        skuId: null != Chunk473749 ? Chunk473749 : null == Chunk95015 ? true : Chunk95015.id
      })
    } else if (null != Chunk95015) {
      var h;
      if (t = r.isGuildProductPurchase && r.isSoftDeletedProduct ? Chunk388032.intl.string(Chunk388032.t.O7uLmw) : Chunk95015.name, null != Chunk913527) {
        let t = (0, Chunk378233.Zt)(Chunk913527);
        e = (0, Chunk54381.jsx)(Chunk419922.Z, {
          disableAnimation: !Chunk314877,
          isInteracting: Chunk314877,
          sticker: exports,
          className: Chunk982710.descriptionIcon,
          size: em
        })
      } else e = (null == (h = r.sku) ? true : Chunk782568.productLine) === Chunk981631.POd.COLLECTIBLES ? (0, Chunk54381.jsx)(Chunk481060.EOn, {
        size: "custom",
        width: 23,
        height: 23,
        color: "currentColor",
        className: Chunk982710.shopIcon
      }) : (0, Chunk54381.jsx)(Chunk925329.Z, {
        className: Chunk982710.descriptionIcon,
        guildClassName: Chunk982710.guildDescriptionIcon,
        game: Chunk120356,
        guild: s,
        size: Chunk925329.A.XSMALL,
        skuId: Chunk95015.id
      })
    } else e = (0, Chunk54381.jsx)(Chunk481060.SrA, {
      size: "md",
      color: "currentColor",
      className: Chunk982710.descriptionIcon
    }), t = r.description;
    let g = (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        className: Chunk982710.date,
        children: (0, Chunk55935.vc)(c()(r.createdAt), "MM/DD/YYYY")
      }),
      E = r.isGift ? (0, Chunk54381.jsx)(Chunk481060.aML, {
        "data-migration-pending": true,
        text: Chunk388032.intl.string(Chunk388032.t.QddTpm),
        children: e => (0, i.jsx)(m.OgN, eo({
          size: "md",
          color: "currentColor",
          className: ei.giftIcon
        }, e))
      }) : null;
    return require ? (0, Chunk54381.jsxs)("div", {
      className: Chunk982710.description,
      children: [module, (0, Chunk54381.jsxs)("div", {
        children: [exports, Chunk100527]
      }), Chunk906732]
    }) : (0, Chunk54381.jsxs)(Chunk473749.Fragment, {
      children: [Chunk100527, (0, Chunk54381.jsxs)("div", {
        className: Chunk982710.description,
        children: [module, (0, Chunk54381.jsx)("div", {
          children: exports
        }), Chunk906732]
      })]
    })
  }
  renderGuildProductBenefits() {
    let {
      payment: e,
      application: t,
      locale: n
    } = this.props, r = null == exports ? true : exports.guildId;
    return module.isGuildProductPurchase ? (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
      children: [(0, Chunk54381.jsx)("div", {
        className: Chunk982710.sectionDivider
      }), module.isSoftDeletedProduct ? (0, Chunk54381.jsx)(Chunk481060.Wn, {
        messageType: Chunk481060.QYI.WARNING,
        action: (0, Chunk54381.jsx)(Chunk159691.zxk, {
          variant: "overlay-secondary",
          text: Chunk388032.intl.string(Chunk388032.t.zoztQA),
          onClick: () => (0, Chunk782568.Z)(e_(require))
        }),
        children: Chunk388032.intl.string(Chunk388032.t["3AvulN"])
      }) : null != r && null != module.sku && (0, Chunk54381.jsx)(eS, {
        guildId: r,
        guildProductListingId: module.sku.id
      })]
    }) : null
  }
  renderExpandedSection() {
    return (0, Chunk54381.jsx)(Chunk481060.P3F, {
      onClick: e => e.stopPropagation(),
      children: (0, Chunk54381.jsxs)("div", {
        className: Chunk982710.expandedInfo,
        children: [(0, Chunk54381.jsx)(Chunk481060.H, {
          className: Chunk982710.paymentHeader,
          children: Chunk388032.intl.string(Chunk388032.t.nyzoFb)
        }), this.renderPaymentBreakdown(), this.renderGuildProductBenefits(), this.renderInvoiceDownload(), this.renderAdditionalTenantInfo(), this.renderRefundDetails()]
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
    return (0, Chunk54381.jsx)(Chunk91192.mh, {
      id: module.id,
      children: e => (0, i.jsxs)(m.P3F, el(eo({
        onClick: this.handleExpandInfo,
        "data-expanded": r,
        className: s()(ei.payment, t, {
          [ei.compact]: n
        }),
        focusProps: {
          offset: 4
        }
      }, e), {
        children: [(0, i.jsxs)(v.Z, {
          className: ei.summaryInfo,
          align: v.Z.Align.CENTER,
          "data-expanded": r,
          children: [this.renderDescription(), (0, i.jsxs)("div", {
            className: ei.amount,
            children: [this.renderStatus(), this.renderPrice()]
          }), (0, i.jsx)(W.Z, {
            className: ei.expand,
            direction: r ? W.Z.Directions.UP : W.Z.Directions.DOWN
          })]
        }), r ? this.renderExpandedSection() : null]
      }))
    })
  }
  constructor(...e) {
    super(...e), ea(this, "state", {
      expanded: false
    }), ea(this, "refundRules", [{
      rule: "PURCHASE_DATE",
      canRefund: () => {
        let {
          payment: e
        } = this.props, t = e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift ? ef : ed;
        return this.daysSincePurchase <= t
      }
    }, {
      rule: "SKU_TYPE",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.sku || e.sku.type !== ee.epS.CONSUMABLE
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
        return !eg.includes(e.status)
      }
    }, {
      rule: "PAYMENT_GATEWAY",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.paymentGateway || !eE.includes(e.paymentGateway)
      }
    }, {
      rule: "SKU_STICKER_PACK",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.sku || !(0, f.yE)(e.sku.flags, ee.l4R.STICKER)
      }
    }, {
      rule: "SUBSCRIPTION_TYPE",
      canRefund: () => {
        var e, t;
        let {
          payment: n
        } = this.props;
        return (null == (e = n.subscription) ? true : e.type) !== ee.NYc.GUILD && (null == (t = n.subscription) ? true : t.type) !== ee.NYc.APPLICATION
      }
    }, {
      rule: "GUILD_PRODUCT",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.sku || !(0, f.yE)(e.sku.flags, d.l.GUILD_PRODUCT)
      }
    }, {
      rule: "COLLECTIBLE",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return !e.isCollectible
      }
    }]), ea(this, "handleExpandInfo", () => {
      this.setState({
        expanded: !this.state.expanded
      })
    })
  }
}

function eT(e) {
  var t, n;
  let {
    payment: r,
    locale: o,
    compactMode: s,
    className: l
  } = e, c = null != r.sku && eh.includes(r.sku.type), u = null != r.sku && c ? r.sku.applicationId : null, d = null == (t = r.sku) ? true : t.applicationId, f = (null == (n = r.subscription) ? true : n.type) === ee.NYc.APPLICATION, {
    applicationStatistics: _,
    gameApplication: m,
    paymentSources: h
  } = (0, p.cj)([V.Z, Y.Z, y.Z], () => {
    var e, t;
    return {
      applicationStatistics: null != u ? Y.Z.getCurrentUserStatisticsForApplication(u) : null,
      gameApplication: null != (t = y.Z.getApplication(null != u ? u : "")) ? t : null == (e = r.sku) ? true : e.application,
      paymentSources: V.Z.paymentSources
    }
  }), {
    hasAlreadyLinked: O
  } = (0, b.F)((0, w.K$)(r.sku) ? m : true), v = (0, p.e7)([y.Z], () => null != d ? y.Z.getApplication(d) : null), S = null;
  a.useEffect(() => {
    f && null != d && (0, D.UM)(d)
  }, [d, f]);
  let I = (0, p.e7)([B.Z], () => B.Z.getGuild(null == m ? true : m.guildId)),
    T = c ? m : true,
    A = r.subscription,
    C = (0, p.e7)([H.Z], () => null != A && A.type !== ee.NYc.PREMIUM ? H.Z.get(A.items[0].planId) : null),
    N = (0, p.e7)([F.default], () => {
      var e, t, n, i;
      let a = r.isGift ? null == (e = r.entitlements) ? true : e.find(e => {
        var t;
        return (null == (t = e.user) ? true : t.id) != null && null != e.gifterId
      }) : null;
      return null == a ? null : null != (i = F.default.getUser(null != (n = null == (t = a.user) ? true : t.id) ? n : null)) ? i : null == a ? true : a.user
    }, [r]),
    {
      analyticsLocations: P
    } = (0, E.ZP)(g.Z.BILLING_SETTINGS_BILLING);
  return (0, i.jsx)(eI, {
    applicationStatistics: _,
    application: f ? v : T,
    analyticsLocations: P,
    guild: I,
    stickerPack: S,
    paymentSources: h,
    locale: o,
    compactMode: s,
    className: l,
    payment: r,
    plan: C,
    claimedGiftUser: N,
    hasLinkedToApplication: O
  })
}
ea(eI, "defaultProps", {
  compactMode: false
})