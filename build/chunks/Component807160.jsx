/** Chunk was on web.js **/
/** chunk id: 807160, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => eI
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
  Chunk681715 = require("./681715.js"),
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
  Chunk354351 = require("./354351.js");

function eo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function es(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      eo(e, t, n[t])
    })
  }
  return e
}

function el(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function ec(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : el(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let eu = 14,
  ed = 5,
  ef = 2,
  ep = e => "https://".concat(et.xr4, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000118612"),
  e_ = 24,
  em = [Chunk981631.epS.DURABLE_PRIMARY, Chunk981631.epS.DURABLE, Chunk981631.epS.CONSUMABLE],
  eh = [Chunk981631.PyE.FAILED, Chunk981631.PyE.REVERSED, Chunk981631.PyE.CANCELED],
  eg = [Chunk231338.gg.APPLE],
  eE = e => {
    let {
      description: t,
      cost: n
    } = e;
    return (0, i.jsx)("li", {
      className: ea.paymentDetail,
      children: (0, i.jsxs)(S.Z, {
        justify: S.Z.Justify.BETWEEN,
        children: [(0, i.jsx)("div", {
          children: t
        }), (0, i.jsx)("div", {
          children: n
        })]
      })
    })
  };

function eb(e) {
  let {
    value: t,
    copyText: n,
    copyFeedbackText: r
  } = e, [o, s] = a.useState(false), [l, c] = a.useState(false), u = () => {
    (0, q.JG)(t, () => {
      c(true), s(true)
    })
  };
  return (0, i.jsx)(_.u, {
    forceOpen: l,
    text: o ? r : n,
    children: (0, i.jsx)(h.P3F, {
      onMouseEnter: () => {
        o && s(false)
      },
      onMouseLeave: () => {
        c(false)
      },
      onClick: u,
      children: (0, i.jsx)("div", {
        className: ea.copiableContainer,
        children: t
      })
    })
  })
}
let ey = e => {
  let {
    description: t,
    detail: n
  } = e;
  return (0, i.jsx)("li", {
    className: ea.guildProductDetail,
    children: (0, i.jsxs)(S.Z, {
      justify: S.Z.Justify.BETWEEN,
      children: [(0, i.jsx)("div", {
        children: t
      }), (0, i.jsx)("div", {
        children: n
      })]
    })
  })
};

function eO(e) {
  let {
    guildId: t,
    guildProductListingId: n
  } = e, r = (0, T.hO)(t, n, {
    requireCurrentGuild: false
  }), o = (0, A.C)(r), s = (0, p.e7)([B.Z], () => B.Z.getGuild(t)), l = (null == r ? true : r.role_id) != null && (null == r ? true : r.attachments_count) === 0 ? ei.intl.string(ei.t.H11qcT) : o, c = a.useCallback(async () => {
    (null == s ? true : s.features.has(et.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) ? await (0, R.Z)(et.Z5c.GUILD_PRODUCT(t, n)) : await (0, R.Z)(et.Z5c.CHANNEL(t)), (0, U.default)()
  }, [s, t, n]);
  return (0, i.jsxs)(i.Fragment, {
    children: [null != l && (0, i.jsx)(ey, {
      description: ei.intl.string(ei.t.lXPbJb),
      detail: l
    }), null != s && (0, i.jsx)(ey, {
      description: ei.intl.string(ei.t.Wpn8z8),
      detail: (0, i.jsx)(w.Z, {
        onClick: c,
        children: s.name
      })
    })]
  })
}

function ev(e) {
  var t, n;
  let {
    guildId: r,
    guildProductListingId: a
  } = e, o = (0, T.hO)(r, a, {
    requireCurrentGuild: false
  }), s = (0, p.e7)([C.Z], () => C.Z.getGuildProductFetchState(a) === C.M.FETCHING), l = null == o ? true : o.role_id, c = (0, p.e7)([F.Z], () => null != l ? F.Z.getRole(r, l) : true, [r, l]), u = (0, P.Z)({
    guildId: r,
    productId: a
  }), d = (null != (n = null == o || null == (t = o.attachments) ? true : t.length) ? n : 0) > 0, f = null != c;
  return s ? (0, i.jsx)("div", {
    className: ea.guildProductBenefits,
    children: (0, i.jsx)(h.$jN, {})
  }) : null != o && (d || f) ? (0, i.jsxs)("div", {
    className: ea.guildProductBenefits,
    children: [d && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(h.Text, {
        variant: "text-xs/semibold",
        color: "text-default",
        className: ea.guildProductBenefitLabel,
        children: ei.intl.string(ei.t.hxawoy)
      }), (0, i.jsx)(m.zxk, es({}, u))]
    }), f && (0, i.jsxs)(i.Fragment, {
      children: [d && (0, i.jsx)("div", {
        className: ea.divider
      }), (0, i.jsx)(h.Text, {
        variant: "text-xs/semibold",
        color: "text-default",
        className: ea.guildProductBenefitLabel,
        children: ei.intl.string(ei.t.gWBNet)
      }), (0, i.jsx)(N.Z, {
        role: c
      })]
    })]
  }) : null
}
class eS extends(r = Chunk473749.PureComponent) {
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
          className: Chunk354351.statusTagGrey,
          children: Chunk388032.intl.string(Chunk388032.t.y7F0Re)
        });
      case Chunk981631.PyE.FAILED:
        return (0, Chunk54381.jsx)("span", {
          className: Chunk354351.statusTagRed,
          children: Chunk388032.intl.string(Chunk388032.t.Yo4ru6)
        });
      case Chunk981631.PyE.REFUNDED:
        if (module.amountRefunded !== module.amount) return (0, Chunk54381.jsx)("span", {
          className: Chunk354351.statusTagGreen,
          children: Chunk388032.intl.string(Chunk388032.t.lYbZzz)
        });
        return (0, Chunk54381.jsx)("span", {
          className: Chunk354351.statusTagGreen,
          children: Chunk388032.intl.string(Chunk388032.t.ZBb6NK)
        });
      case Chunk981631.PyE.REVERSED:
        return (0, Chunk54381.jsx)("span", {
          className: Chunk354351.statusTagRed,
          children: Chunk388032.intl.string(Chunk388032.t.YQv9Li)
        });
      case Chunk981631.PyE.CANCELED:
        return (0, Chunk54381.jsx)("span", {
          className: Chunk354351.statusTagRed,
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
      className: Chunk354351.statusTagGreen,
      children: Chunk388032.intl.string(Chunk388032.t.Osji1u)
    }) : module.isGift ? null != module.entitlements && module.entitlements.some(e => null != e.gifterId) ? (0, Chunk54381.jsx)("span", {
      className: Chunk354351.statusTagGreen,
      children: Chunk388032.intl.string(Chunk388032.t.lIsIFo)
    }) : (0, Chunk54381.jsx)("span", {
      className: Chunk354351.statusTagYellow,
      children: Chunk388032.intl.string(Chunk388032.t["+tqSi3"])
    }) : exports ? (0, Chunk54381.jsx)("span", {
      className: Chunk354351.statusTagYellow,
      children: Chunk388032.intl.string(Chunk388032.t.y7F0Re)
    }) : (0, Chunk54381.jsx)("span", {
      className: Chunk354351.statusTagYellow,
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
      className: Chunk354351.price,
      children: (0, Chunk937615.T4)(exports, module.currency)
    })
  }
  renderPaymentIdField() {
    let {
      payment: e
    } = this.props;
    return (0, Chunk54381.jsx)("li", {
      className: Chunk354351.paymentDetail,
      children: (0, Chunk54381.jsxs)("div", {
        className: Chunk354351.paymentInfo,
        children: [(0, Chunk54381.jsx)("div", {
          children: Chunk388032.intl.string(Chunk388032.t["UQim+r"])
        }), (0, Chunk54381.jsx)(eb, {
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
      className: s()(Chunk354351.paymentText, Chunk354351.paymentBreakdown),
      children: [null != module.paymentSource ? (0, Chunk54381.jsx)(Chunk244526.Z, {
        paymentSource: module.paymentSource,
        locale: exports,
        descriptionClassName: Chunk354351.paymentText,
        showLabels: true,
        showPaymentSourceIcon: true
      }) : module.paymentGateway === Chunk231338.gg.APPLE_PARTNER ? (0, Chunk54381.jsx)(Chunk244526.Z, {
        paymentSource: new Chunk46141.$z({}),
        locale: exports,
        descriptionClassName: Chunk354351.paymentText,
        showLabels: true,
        showPaymentSourceIcon: true
      }) : null, (0, Chunk54381.jsxs)("ul", {
        children: [this.renderPaymentIdField(), !r && Chunk120356 > 0 ? (0, Chunk54381.jsxs)(Chunk473749.Fragment, {
          children: [(0, Chunk54381.jsx)(eE, {
            description: module.description,
            cost: (0, Chunk937615.T4)(Chunk913527 - Chunk120356, Chunk91192)
          }), (0, Chunk54381.jsx)(eE, {
            description: Chunk388032.intl.string(Chunk388032.t.QgWXht),
            cost: (0, Chunk937615.T4)(Chunk120356, Chunk91192)
          })]
        }) : null, (0, Chunk54381.jsx)(eE, {
          description: Chunk388032.intl.string(Chunk388032.t.txajQG),
          cost: (0, Chunk937615.T4)(Chunk913527, Chunk91192)
        }), module.isGuildProductPurchase && null != Chunk314877 && null != module.sku && (0, Chunk54381.jsx)(eO, {
          guildId: Chunk314877,
          guildProductListingId: module.sku.id
        }), c > 0 && (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
          children: [(0, Chunk54381.jsx)(eE, {
            description: Chunk388032.intl.string(Chunk388032.t["A+I0AP"]),
            cost: (0, Chunk937615.T4)(c, Chunk91192)
          }), (0, Chunk54381.jsx)(eE, {
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
        className: Chunk354351.paymentHeader,
        children: Chunk388032.intl.string(Chunk388032.t["gIGB/A"])
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk354351.paymentText,
        children: Chunk388032.intl.format(Chunk388032.t.IBtGwC, {
          applicationName: null == Chunk913527 ? true : Chunk913527.name
        })
      })]
    }) : Chunk120356.isGift ? (0, Chunk54381.jsxs)(Chunk473749.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk481060.H, {
        className: Chunk354351.paymentHeader,
        children: Chunk388032.intl.string(Chunk388032.t["gIGB/A"])
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk354351.paymentText,
        children: null != r ? Chunk388032.intl.format(Chunk388032.t.vfUW65, {
          username: Chunk51144.ZP.getName(r)
        }) : Chunk388032.intl.string(Chunk388032.t["18wIqp"])
      }), null == r && (0, Chunk54381.jsx)("div", {
        className: Chunk354351.additionalInformationButtonContainer,
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
        className: Chunk354351.paymentHeader,
        children: Chunk388032.intl.string(Chunk388032.t["gIGB/A"])
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk354351.paymentText,
        children: s ? Chunk388032.intl.format(Chunk388032.t.DQQCAw, {
          applicationName: null == Chunk913527 ? true : Chunk913527.name,
          skuName: null == (t = Chunk120356.sku) ? true : exports.name
        }) : Chunk388032.intl.format(Chunk388032.t.ED2BqF, {
          applicationName: null == Chunk913527 ? true : Chunk913527.name,
          skuName: null == (n = Chunk120356.sku) ? true : require.name
        })
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk354351.additionalInformationButtonContainer,
        children: s ? (0, Chunk54381.jsx)(Chunk159691.zxk, {
          variant: "primary",
          text: Chunk388032.intl.string(Chunk388032.t.zoztQA),
          onClick: () => (0, Chunk782568.Z)(ep(c))
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
      s = ep(exports),
      l = this.isPremium ? ed : eu;
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
      playtimeLimit: ef,
      supportURL: s
    }) : require.isCollectible ? Chunk388032.intl.string(Chunk388032.t.s9TZM1) : require.isGift ? Chunk388032.intl.formatToPlainString(Chunk388032.t.owlOWc, {
      dateLimit: Chunk913527
    }) : require.isPremiumSubscription || require.isPremiumGuildSubscription ? Chunk388032.intl.formatToPlainString(Chunk388032.t.dk7vyL, {
      dateLimit: Chunk913527
    }) : Chunk388032.intl.formatToPlainString(Chunk388032.t.s4Kk0C, {
      dateLimit: Chunk913527,
      playtimeLimit: ef
    }), (0, Chunk54381.jsxs)(Chunk473749.Fragment, {
      children: [(0, Chunk54381.jsx)(Chunk481060.H, {
        className: Chunk354351.paymentHeader,
        children: Chunk388032.intl.string(Chunk388032.t["n/27pr"])
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk354351.paymentText,
        children: [(0, Chunk54381.jsx)("div", {
          children: module
        }), this.renderRefundActions(r)]
      })]
    })
  }
  renderRefundCriteria(e, t, n, r) {
    return (0, i.jsxs)("div", {
      className: ea.refundCriteria,
      children: [(0, i.jsx)(h.H, {
        className: ea.refundSubHeader,
        children: e
      }), (0, i.jsxs)("div", {
        className: ea.refundIconContainer,
        children: [(0, i.jsx)(t, {
          className: ea.refundCriteriaIcon,
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
    let r = e.includes("PURCHASE_DATE") ? h.Dio : h.dz2;
    return (0, i.jsxs)("div", {
      className: ea.refundActions,
      children: [(0, i.jsx)("div", {
        className: ea.refundRules,
        children: !n.isCollectible && this.renderRefundCriteria(ei.intl.string(ei.t.H0RNz4), r, ei.intl.formatToPlainString(ei.t["7dtXa/"], {
          daysSincePurchase: this.daysSincePurchase
        }))
      }), (0, i.jsx)(h.Anchor, {
        href: ep(t),
        children: ei.intl.string(ei.t.re5nOB)
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
      m = null != r.paymentSource && Chunk981631.Uk1.has(r.paymentSource.type);
    if (null != Chunk442837 && 0 !== Chunk442837.items.length) {
      let n = [],
        a = null;
      if (Chunk442837.type === Chunk981631.NYc.PREMIUM) Chunk442837.items.forEach(e => {
        let {
          planId: t,
          quantity: r
        } = e;
        (0, X.uZ)(t) ? (n.push(X.ZP.getDisplayName(t, false, m)), a = (0, X.Wz)(en.GP[t].skuId)) : (n.push("".concat(r > 1 ? "".concat(r, "x ") : "").concat(X.ZP.getDisplayName(t, false, m))), null == a && (a = (0, X.Wz)(en.GP[t].skuId)))
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
        className: Chunk354351.descriptionIcon,
        guildClassName: Chunk354351.guildDescriptionIcon,
        game: Chunk120356,
        guild: s,
        size: Chunk925329.A.XSMALL,
        skuId: null != Chunk473749 ? Chunk473749 : null == Chunk95015 ? true : Chunk95015.id
      })
    } else if (null != Chunk95015) {
      var g;
      if (t = r.isGuildProductPurchase && r.isSoftDeletedProduct ? Chunk388032.intl.string(Chunk388032.t.O7uLmw) : Chunk95015.name, null != Chunk913527) {
        let t = (0, Chunk378233.Zt)(Chunk913527);
        e = (0, Chunk54381.jsx)(Chunk419922.Z, {
          disableAnimation: !Chunk314877,
          isInteracting: Chunk314877,
          sticker: exports,
          className: Chunk354351.descriptionIcon,
          size: e_
        })
      } else e = (null == (g = r.sku) ? true : Chunk782568.productLine) === Chunk981631.POd.COLLECTIBLES ? (0, Chunk54381.jsx)(Chunk481060.EOn, {
        size: "custom",
        width: 23,
        height: 23,
        color: "currentColor",
        className: Chunk354351.shopIcon
      }) : (0, Chunk54381.jsx)(Chunk925329.Z, {
        className: Chunk354351.descriptionIcon,
        guildClassName: Chunk354351.guildDescriptionIcon,
        game: Chunk120356,
        guild: s,
        size: Chunk925329.A.XSMALL,
        skuId: Chunk95015.id
      })
    } else e = (0, Chunk54381.jsx)(Chunk481060.SrA, {
      size: "md",
      color: "currentColor",
      className: Chunk354351.descriptionIcon
    }), t = r.description;
    let E = (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        className: Chunk354351.date,
        children: (0, Chunk55935.vc)(c()(r.createdAt), "MM/DD/YYYY")
      }),
      b = r.isGift ? (0, Chunk54381.jsx)(Chunk681715.u, {
        text: Chunk388032.intl.string(Chunk388032.t.QddTpm),
        children: (0, Chunk54381.jsx)(Chunk481060.OgN, {
          size: "md",
          color: "currentColor",
          className: Chunk354351.giftIcon
        })
      }) : null;
    return require ? (0, Chunk54381.jsxs)("div", {
      className: Chunk354351.description,
      children: [module, (0, Chunk54381.jsxs)("div", {
        children: [exports, Chunk100527]
      }), Chunk906732]
    }) : (0, Chunk54381.jsxs)(Chunk473749.Fragment, {
      children: [Chunk100527, (0, Chunk54381.jsxs)("div", {
        className: Chunk354351.description,
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
        className: Chunk354351.sectionDivider
      }), module.isSoftDeletedProduct ? (0, Chunk54381.jsx)(Chunk481060.Wn, {
        messageType: Chunk481060.QYI.WARNING,
        action: (0, Chunk54381.jsx)(Chunk159691.zxk, {
          variant: "overlay-secondary",
          text: Chunk388032.intl.string(Chunk388032.t.zoztQA),
          onClick: () => (0, Chunk782568.Z)(ep(require))
        }),
        children: Chunk388032.intl.string(Chunk388032.t["3AvulN"])
      }) : null != r && null != module.sku && (0, Chunk54381.jsx)(ev, {
        guildId: r,
        guildProductListingId: module.sku.id
      })]
    }) : null
  }
  renderExpandedSection() {
    return (0, Chunk54381.jsx)(Chunk481060.P3F, {
      onClick: e => e.stopPropagation(),
      children: (0, Chunk54381.jsxs)("div", {
        className: Chunk354351.expandedInfo,
        children: [(0, Chunk54381.jsx)(Chunk481060.H, {
          className: Chunk354351.paymentHeader,
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
      children: e => (0, i.jsxs)(h.P3F, ec(es({
        onClick: this.handleExpandInfo,
        "data-expanded": r,
        className: s()(ea.payment, t, {
          [ea.compact]: n
        }),
        focusProps: {
          offset: 4
        }
      }, e), {
        children: [(0, i.jsxs)(S.Z, {
          className: ea.summaryInfo,
          align: S.Z.Align.CENTER,
          "data-expanded": r,
          children: [this.renderDescription(), (0, i.jsxs)("div", {
            className: ea.amount,
            children: [this.renderStatus(), this.renderPrice()]
          }), (0, i.jsx)(K.Z, {
            className: ea.expand,
            direction: r ? K.Z.Directions.UP : K.Z.Directions.DOWN
          })]
        }), r ? this.renderExpandedSection() : null]
      }))
    })
  }
  constructor(...e) {
    super(...e), eo(this, "state", {
      expanded: false
    }), eo(this, "refundRules", [{
      rule: "PURCHASE_DATE",
      canRefund: () => {
        let {
          payment: e
        } = this.props, t = e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift ? ed : eu;
        return this.daysSincePurchase <= t
      }
    }, {
      rule: "SKU_TYPE",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.sku || e.sku.type !== et.epS.CONSUMABLE
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
        return !eh.includes(e.status)
      }
    }, {
      rule: "PAYMENT_GATEWAY",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.paymentGateway || !eg.includes(e.paymentGateway)
      }
    }, {
      rule: "SKU_STICKER_PACK",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.sku || !(0, f.yE)(e.sku.flags, et.l4R.STICKER)
      }
    }, {
      rule: "SUBSCRIPTION_TYPE",
      canRefund: () => {
        var e, t;
        let {
          payment: n
        } = this.props;
        return (null == (e = n.subscription) ? true : e.type) !== et.NYc.GUILD && (null == (t = n.subscription) ? true : t.type) !== et.NYc.APPLICATION
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
    }]), eo(this, "handleExpandInfo", () => {
      this.setState({
        expanded: !this.state.expanded
      })
    })
  }
}

function eI(e) {
  var t, n;
  let {
    payment: r,
    locale: o,
    compactMode: s,
    className: l
  } = e, c = null != r.sku && em.includes(r.sku.type), u = null != r.sku && c ? r.sku.applicationId : null, d = null == (t = r.sku) ? true : t.applicationId, f = (null == (n = r.subscription) ? true : n.type) === et.NYc.APPLICATION, {
    applicationStatistics: _,
    gameApplication: m,
    paymentSources: h
  } = (0, p.cj)([H.Z, W.Z, O.Z], () => {
    var e, t;
    return {
      applicationStatistics: null != u ? W.Z.getCurrentUserStatisticsForApplication(u) : null,
      gameApplication: null != (t = O.Z.getApplication(null != u ? u : "")) ? t : null == (e = r.sku) ? true : e.application,
      paymentSources: H.Z.paymentSources
    }
  }), {
    hasAlreadyLinked: g
  } = (0, y.F)((0, x.K$)(r.sku) ? m : true), v = (0, p.e7)([O.Z], () => null != d ? O.Z.getApplication(d) : null), S = null;
  a.useEffect(() => {
    f && null != d && (0, D.UM)(d)
  }, [d, f]);
  let I = (0, p.e7)([B.Z], () => B.Z.getGuild(null == m ? true : m.guildId)),
    T = c ? m : true,
    C = r.subscription,
    A = (0, p.e7)([Y.Z], () => null != C && C.type !== et.NYc.PREMIUM ? Y.Z.get(C.items[0].planId) : null),
    N = (0, p.e7)([V.default], () => {
      var e, t, n, i;
      let a = r.isGift ? null == (e = r.entitlements) ? true : e.find(e => {
        var t;
        return (null == (t = e.user) ? true : t.id) != null && null != e.gifterId
      }) : null;
      return null == a ? null : null != (i = V.default.getUser(null != (n = null == (t = a.user) ? true : t.id) ? n : null)) ? i : null == a ? true : a.user
    }, [r]),
    {
      analyticsLocations: P
    } = (0, b.ZP)(E.Z.BILLING_SETTINGS_BILLING);
  return (0, i.jsx)(eS, {
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
    plan: A,
    claimedGiftUser: N,
    hasLinkedToApplication: g
  })
}
eo(eS, "defaultProps", {
  compactMode: false
})