/** Chunk was on web.js **/
/** chunk id: 61509, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => eS
}), require("./228524.js"), require("./896048.js"), require("./321073.js"), require("./938796.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  c = require.n(Chunk989349),
  Chunk837381 = require("./837381.jsx"),
  Chunk122817 = require("./122817.js"),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975807 = require("./975807.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk362490 = require("./362490.js"),
  Chunk587895 = require("./587895.js"),
  Chunk120385 = require("./120385.jsx"),
  Chunk235986 = require("./235986.jsx"),
  Chunk769015 = require("./769015.jsx"),
  Chunk250627 = require("./250627.js"),
  Chunk871109 = require("./871109.js"),
  Chunk571654 = require("./571654.js"),
  Chunk411342 = require("./411342.jsx"),
  Chunk179499 = require("./179499.js"),
  Chunk22007 = require("./22007.js"),
  Chunk95035 = require("./95035.jsx"),
  Chunk337095 = require("./337095.js"),
  Chunk871123 = require("./871123.js"),
  Chunk510022 = require("./510022.jsx"),
  Chunk378058 = require("./378058.js"),
  Chunk148355 = require("./148355.jsx"),
  Chunk780964 = require("./780964.js"),
  Chunk12901 = require("./12901.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk202613 = require("./202613.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk295405 = require("./295405.js"),
  Chunk97352 = require("./97352.js"),
  Chunk90165 = require("./90165.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk957565 = require("./957565.js"),
  Chunk405269 = require("./405269.js"),
  Chunk927578 = require("./927578.js"),
  Chunk580630 = require("./580630.js"),
  Chunk427262 = require("./427262.js"),
  Chunk219887 = require("./219887.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk124953 = require("./124953.js");

function es(e, t, n) {
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
      es(e, t, n[t])
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
  ep = e => "https://".concat(et.XlF, "/hc/").concat(e.toLowerCase(), "/requests/new?ticket_form_id=360000118612"),
  e_ = 24,
  eh = [Chunk652215.Puh.DURABLE_PRIMARY, Chunk652215.Puh.DURABLE, Chunk652215.Puh.CONSUMABLE],
  em = [Chunk652215.__0.FAILED, Chunk652215.__0.REVERSED, Chunk652215.__0.CANCELED],
  eg = [Chunk818348.kM.APPLE],
  eE = e => {
    let {
      description: t,
      cost: n
    } = e;
    return (0, i.jsx)("li", {
      className: ea.mg,
      children: (0, i.jsxs)(v.A, {
        justify: v.A.Justify.BETWEEN,
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
  } = e, [s, o] = a.useState(false), [l, c] = a.useState(false), u = () => {
    (0, X.C)(t, () => {
      c(true), o(true)
    })
  };
  return (0, i.jsx)(_.m_, {
    forceOpen: l,
    text: s ? r : n,
    children: (0, i.jsx)(m.DUT, {
      onMouseEnter: () => {
        s && o(false)
      },
      onMouseLeave: () => {
        c(false)
      },
      onClick: u,
      children: (0, i.jsx)("div", {
        className: ea.l9,
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
    className: ea.Iu,
    children: (0, i.jsxs)(v.A, {
      justify: v.A.Justify.BETWEEN,
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
  } = e, r = (0, I.Qi)(t, n, {
    requireCurrentGuild: false
  }), s = (0, C.z)(r), o = (0, p.bG)([B.A], () => B.A.getGuild(t)), l = (null == r ? true : r.role_id) != null && (null == r ? true : r.attachments_count) === 0 ? ei.intl.string(ei.t.H11qcT) : s, c = a.useCallback(async () => {
    (null == o ? true : o.features.has(et.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) ? await (0, w.A)(et.BVt.GUILD_PRODUCT(t, n)) : await (0, w.A)(et.BVt.CHANNEL(t)), (0, U.default)()
  }, [o, t, n]);
  return (0, i.jsxs)(i.Fragment, {
    children: [null != l && (0, i.jsx)(ey, {
      description: ei.intl.string(ei.t.lXPbJb),
      detail: l
    }), null != o && (0, i.jsx)(ey, {
      description: ei.intl.string(ei.t.Wpn8z8),
      detail: (0, i.jsx)(P.A, {
        onClick: c,
        children: o.name
      })
    })]
  })
}

function eA(e) {
  var t, n;
  let {
    guildId: r,
    guildProductListingId: a
  } = e, s = (0, I.Qi)(r, a, {
    requireCurrentGuild: false
  }), o = (0, p.bG)([T.A], () => T.A.getGuildProductFetchState(a) === T.e.FETCHING), l = null == s ? true : s.role_id, c = (0, p.bG)([F.A], () => null != l ? F.A.getRole(r, l) : true, [r, l]), u = (0, R.A)({
    guildId: r,
    productId: a
  }), d = (null != (t = null == s || null == (n = s.attachments) ? true : n.length) ? t : 0) > 0, f = null != c;
  return o ? (0, i.jsx)("div", {
    className: ea.hT,
    children: (0, i.jsx)(m.y$y, {})
  }) : null != s && (d || f) ? (0, i.jsxs)("div", {
    className: ea.hT,
    children: [d && (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(m.Text, {
        variant: "text-xs/semibold",
        color: "text-default",
        className: ea.yE,
        children: ei.intl.string(ei.t.hxawoy)
      }), (0, i.jsx)(h.$nd, eo({}, u))]
    }), f && (0, i.jsxs)(i.Fragment, {
      children: [d && (0, i.jsx)("div", {
        className: ea.yF
      }), (0, i.jsx)(m.Text, {
        variant: "text-xs/semibold",
        color: "text-default",
        className: ea.yE,
        children: ei.intl.string(ei.t.gWBNet)
      }), (0, i.jsx)(N.A, {
        role: c
      })]
    })]
  }) : null
}
class ev extends(r = Chunk64700.PureComponent) {
  get daysSincePurchase() {
    let {
      payment: e
    } = this.props, t = null != e.sku ? e.sku.releaseDate : null, n = null != t && t.isAfter(e.createdAt) ? t : e.createdAt;
    return c()().diff(n, "days")
  }
  get isPremium() {
    let {
      payment: e
    } = this.props;
    return e.isPremiumSubscription || e.isPremiumGuildSubscription || e.isPremiumGift
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
    switch (e.status) {
      case et.__0.PENDING:
        return (0, i.jsx)("span", {
          className: ea.Xg,
          children: ei.intl.string(ei.t.y7F0Re)
        });
      case et.__0.FAILED:
        return (0, i.jsx)("span", {
          className: ea.ob,
          children: ei.intl.string(ei.t.Yo4ru6)
        });
      case et.__0.REFUNDED:
        if (e.amountRefunded !== e.amount) return (0, i.jsx)("span", {
          className: ea.gD,
          children: ei.intl.string(ei.t.lYbZzz)
        });
        return (0, i.jsx)("span", {
          className: ea.gD,
          children: ei.intl.string(ei.t.ZBb6NK)
        });
      case et.__0.REVERSED:
        return (0, i.jsx)("span", {
          className: ea.ob,
          children: ei.intl.string(ei.t.YQv9Li)
        });
      case et.__0.CANCELED:
        return (0, i.jsx)("span", {
          className: ea.ob,
          children: ei.intl.string(ei.t.ttkBhy)
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
    return (0, x.bF)(e.sku) && e.status === et.__0.COMPLETED ? null != e.entitlements && e.entitlements.some(e => e.isFulfilled()) ? (0, i.jsx)("span", {
      className: ea.gD,
      children: ei.intl.string(ei.t.Osji1u)
    }) : e.isGift ? null != e.entitlements && e.entitlements.some(e => null != e.gifterId) ? (0, i.jsx)("span", {
      className: ea.gD,
      children: ei.intl.string(ei.t.lIsIFo)
    }) : (0, i.jsx)("span", {
      className: ea.Tf,
      children: ei.intl.string(ei.t["+tqSi3"])
    }) : t ? (0, i.jsx)("span", {
      className: ea.Tf,
      children: ei.intl.string(ei.t.y7F0Re)
    }) : (0, i.jsx)("span", {
      className: ea.Tf,
      children: ei.intl.string(ei.t.HHC5Z4)
    }) : null
  }
  renderStatus() {
    var e;
    return null != (e = this.renderTenantStatusOverride()) ? e : this.renderDefaultStatus()
  }
  renderPrice() {
    let {
      payment: e
    } = this.props, t = e.amount - e.amountRefunded;
    return (0, i.jsx)("span", {
      className: ea.q9,
      children: (0, $.$g)(t, e.currency)
    })
  }
  renderPaymentIdField() {
    let {
      payment: e
    } = this.props;
    return (0, i.jsx)("li", {
      className: ea.mg,
      children: (0, i.jsxs)("div", {
        className: ea.bx,
        children: [(0, i.jsx)("div", {
          children: ei.intl.string(ei.t["UQim+r"])
        }), (0, i.jsx)(eb, {
          value: e.id,
          copyText: ei.intl.string(ei.t["Mdk9+A"]),
          copyFeedbackText: ei.intl.string(ei.t["7eIrA2"])
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
      tax: s,
      amount: l,
      amountRefunded: c,
      currency: u
    } = e, d = null == n ? true : n.guildId;
    return (0, i.jsxs)("div", {
      className: o()(ea.iL, ea.W),
      children: [null != e.paymentSource ? (0, i.jsx)(ee.A, {
        paymentSource: e.paymentSource,
        locale: t,
        descriptionClassName: ea.iL,
        showLabels: true,
        showPaymentSourceIcon: true
      }) : e.paymentGateway === er.kM.APPLE_PARTNER ? (0, i.jsx)(ee.A, {
        paymentSource: new V.Pw({}),
        locale: t,
        descriptionClassName: ea.iL,
        showLabels: true,
        showPaymentSourceIcon: true
      }) : null, (0, i.jsxs)("ul", {
        children: [this.renderPaymentIdField(), !r && s > 0 ? (0, i.jsxs)(a.Fragment, {
          children: [(0, i.jsx)(eE, {
            description: e.description,
            cost: (0, $.$g)(l - s, u)
          }), (0, i.jsx)(eE, {
            description: ei.intl.string(ei.t.QgWXht),
            cost: (0, $.$g)(s, u)
          })]
        }) : null, (0, i.jsx)(eE, {
          description: ei.intl.string(ei.t.txajQG),
          cost: (0, $.$g)(l, u)
        }), e.isGuildProductPurchase && null != d && null != e.sku && (0, i.jsx)(eO, {
          guildId: d,
          guildProductListingId: e.sku.id
        }), c > 0 && (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)(eE, {
            description: ei.intl.string(ei.t["A+I0AP"]),
            cost: (0, $.$g)(c, u)
          }), (0, i.jsx)(eE, {
            description: ei.intl.string(ei.t.xER6Wi),
            cost: (0, $.$g)(l - c, u)
          })]
        })]
      })]
    })
  }
  renderInvoiceDownload() {
    let {
      payment: e
    } = this.props;
    return (0, i.jsx)(A.A, {
      payment: e
    })
  }
  renderAdditionalGameItemDetails() {
    var e, t, n;
    let {
      claimedGiftUser: r,
      payment: s,
      hasLinkedToApplication: o,
      application: l,
      locale: c,
      analyticsLocations: u
    } = this.props, d = null == (e = s.entitlements) ? true : e.some(e => e.isFulfilled());
    return s.status === et.__0.REFUNDED ? (0, i.jsxs)(a.Fragment, {
      children: [(0, i.jsx)(m.H, {
        className: ea.mW,
        children: ei.intl.string(ei.t["gIGB/A"])
      }), (0, i.jsx)("div", {
        className: ea.iL,
        children: null != r ? ei.intl.format(ei.t.Q1K9eg, {
          username: J.Ay.getName(r)
        }) : ei.intl.format(ei.t.IBtGwC, {
          applicationName: null == l ? true : l.name
        })
      })]
    }) : s.isGift ? (0, i.jsxs)(a.Fragment, {
      children: [(0, i.jsx)(m.H, {
        className: ea.mW,
        children: ei.intl.string(ei.t["gIGB/A"])
      }), (0, i.jsx)("div", {
        className: ea.iL,
        children: null != r ? ei.intl.format(ei.t.vfUW65, {
          username: J.Ay.getName(r)
        }) : ei.intl.string(ei.t["18wIqp"])
      }), null == r && (0, i.jsx)("div", {
        className: ea.TP,
        children: (0, i.jsx)(h.$nd, {
          variant: "primary",
          text: ei.intl.string(ei.t["jcSP+g"]),
          onClick: () => (0, G.openUserSettings)(k.X.GIFT_PANEL, {
            section: et.nc_.INVENTORY
          })
        })
      })]
    }) : d ? null : (0, i.jsxs)(a.Fragment, {
      children: [(0, i.jsx)(m.H, {
        className: ea.mW,
        children: ei.intl.string(ei.t["gIGB/A"])
      }), (0, i.jsx)("div", {
        className: ea.iL,
        children: o ? ei.intl.format(ei.t.DQQCAw, {
          applicationName: null == l ? true : l.name,
          skuName: null == (t = s.sku) ? true : t.name
        }) : ei.intl.format(ei.t.ED2BqF, {
          applicationName: null == l ? true : l.name,
          skuName: null == (n = s.sku) ? true : n.name
        })
      }), (0, i.jsx)("div", {
        className: ea.TP,
        children: o ? (0, i.jsx)(h.$nd, {
          variant: "primary",
          text: ei.intl.string(ei.t.zoztQA),
          onClick: () => (0, g.A)(ep(c))
        }) : (0, i.jsx)(h.$nd, {
          variant: "primary",
          text: ei.intl.string(ei.t["jCqvk/"]),
          onClick: () => {
            null != s.sku && null != l && (q.default.track(et.HAw.PAYMENT_HISTORY_CONNECT_ACCOUNT_BUTTON_CLICKED, {
              sku_id: s.sku.id,
              application_id: l.id,
              location_stack: u
            }), (0, L.n)({
              sku: s.sku,
              application: l,
              analyticsLocations: u
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
    if ((0, x.bF)(e.sku)) return this.renderAdditionalGameItemDetails()
  }
  renderRefundDetails() {
    let e, {
        locale: t,
        payment: n
      } = this.props,
      r = this.validateRefundRules();
    if (r.includes("PAYMENT_GATEWAY") || r.includes("PAYMENT_STATUS") || r.includes("ALREADY_REFUNDED") || r.includes("SKU_STICKER_PACK") || r.includes("SUBSCRIPTION_TYPE") || r.includes("GUILD_PRODUCT")) return null;
    let s = 0 === r.length,
      o = ep(t),
      l = this.isPremium ? ed : eu;
    return e = r.includes("SKU_TYPE") ? ei.intl.format(ei.t["5lvoVS"], {
      supportURL: o
    }) : s ? n.isPremiumSubscription || n.isPremiumGuildSubscription ? ei.intl.format(ei.t.EPYteX, {
      dateLimit: l,
      supportURL: o
    }) : n.isGift ? ei.intl.format(ei.t["16eP/L"], {
      dateLimit: l,
      supportURL: o
    }) : ei.intl.format(ei.t["1LDI4J"], {
      dateLimit: l,
      playtimeLimit: ef,
      supportURL: o
    }) : n.isCollectible ? ei.intl.string(ei.t.s9TZM1) : n.isGift ? ei.intl.formatToPlainString(ei.t.owlOWc, {
      dateLimit: l
    }) : n.isPremiumSubscription || n.isPremiumGuildSubscription ? ei.intl.formatToPlainString(ei.t.dk7vyL, {
      dateLimit: l
    }) : ei.intl.formatToPlainString(ei.t.s4Kk0C, {
      dateLimit: l,
      playtimeLimit: ef
    }), (0, i.jsxs)(a.Fragment, {
      children: [(0, i.jsx)(m.H, {
        className: ea.mW,
        children: ei.intl.string(ei.t["n/27pr"])
      }), (0, i.jsxs)("div", {
        className: ea.iL,
        children: [(0, i.jsx)("div", {
          children: e
        }), this.renderRefundActions(r)]
      })]
    })
  }
  renderRefundCriteria(e, t, n, r) {
    return (0, i.jsxs)("div", {
      className: ea._Z,
      children: [(0, i.jsx)(m.H, {
        className: ea.ud,
        children: e
      }), (0, i.jsxs)("div", {
        className: ea.z9,
        children: [(0, i.jsx)(t, {
          className: ea.xb,
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
    let r = e.includes("PURCHASE_DATE") ? m.PGe : m.A9s;
    return (0, i.jsxs)("div", {
      className: ea.My,
      children: [(0, i.jsx)("div", {
        className: ea.Kf,
        children: !n.isCollectible && this.renderRefundCriteria(ei.intl.string(ei.t.H0RNz4), r, ei.intl.formatToPlainString(ei.t["7dtXa/"], {
          daysSincePurchase: this.daysSincePurchase
        }))
      }), (0, i.jsx)(m.MzZ, {
        href: ep(t),
        children: ei.intl.string(ei.t.re5nOB)
      })]
    })
  }
  renderDescription() {
    let e, t, {
        compactMode: n,
        payment: r,
        application: s,
        guild: o,
        stickerPack: l,
        plan: u
      } = this.props,
      {
        expanded: d
      } = this.state,
      f = r.sku,
      p = r.subscription,
      h = null != r.paymentSource && et.AD1.has(r.paymentSource.type);
    if (null != p && 0 !== p.items.length) {
      let n = [],
        a = null;
      if (p.type === et.rzx.PREMIUM) p.items.forEach(e => {
        let {
          planId: t,
          quantity: r
        } = e;
        (0, Q.xq)(t) ? (n.push(Q.Ay.getDisplayName(t, false, h)), a = (0, Q.mH)(en.hd[t].skuId)) : (n.push("".concat(r > 1 ? "".concat(r, "x ") : "").concat(Q.Ay.getDisplayName(t, false, h))), null == a && (a = (0, Q.mH)(en.hd[t].skuId)))
      });
      else if (p.type === et.rzx.GUILD) {
        if (null != u) {
          let e = u.interval === en.WT.YEAR ? ei.t.V6UFQM : ei.t["6oq128"];
          n.push(ei.intl.format(e, {
            planName: u.name
          })), a = u.skuId
        }
      } else p.type === et.rzx.APPLICATION && (null != u && (a = u.skuId), null != s ? n.push(ei.intl.formatToPlainString(ei.t["0wL/VI"], {
        tier: null == f ? true : f.name
      })) : n.push(ei.intl.string(ei.t["9czSYu"])));
      t = 0 !== n.length ? n.join(", ") : r.description, e = (0, i.jsx)(S.A, {
        className: ea.Sy,
        guildClassName: ea.zA,
        game: s,
        guild: o,
        size: S.M.XSMALL,
        skuId: null != a ? a : null == f ? true : f.id
      })
    } else if (null != f) {
      var g;
      if (t = r.isGuildProductPurchase && r.isSoftDeletedProduct ? ei.intl.string(ei.t.O7uLmw) : f.name, null != l) {
        let t = (0, j.Id)(l);
        e = (0, i.jsx)(M.A, {
          disableAnimation: !d,
          isInteracting: d,
          sticker: t,
          className: ea.Sy,
          size: e_
        })
      } else e = (null == (g = r.sku) ? true : g.productLine) === et.EZt.COLLECTIBLES ? (0, i.jsx)(m.U1X, {
        size: "custom",
        width: 23,
        height: 23,
        color: "currentColor",
        className: ea.sV
      }) : (0, i.jsx)(S.A, {
        className: ea.Sy,
        guildClassName: ea.zA,
        game: s,
        guild: o,
        size: S.M.XSMALL,
        skuId: f.id
      })
    } else e = (0, i.jsx)(m.tvc, {
      size: "md",
      color: "currentColor",
      className: ea.Sy
    }), t = r.description;
    let E = (0, i.jsx)(m.Text, {
        variant: "text-sm/normal",
        className: ea.p6,
        children: (0, Z.i$)(c()(r.createdAt), "MM/DD/YYYY")
      }),
      b = r.isGift ? (0, i.jsx)(_.m_, {
        text: ei.intl.string(ei.t.QddTpm),
        children: (0, i.jsx)(m.okO, {
          size: "md",
          color: "currentColor",
          className: ea.ez
        })
      }) : null;
    return n ? (0, i.jsxs)("div", {
      className: ea.h_,
      children: [e, (0, i.jsxs)("div", {
        children: [t, E]
      }), b]
    }) : (0, i.jsxs)(a.Fragment, {
      children: [E, (0, i.jsxs)("div", {
        className: ea.h_,
        children: [e, (0, i.jsx)("div", {
          children: t
        }), b]
      })]
    })
  }
  renderGuildProductBenefits() {
    let {
      payment: e,
      application: t,
      locale: n
    } = this.props, r = null == t ? true : t.guildId;
    return e.isGuildProductPurchase ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)("div", {
        className: ea.ts
      }), e.isSoftDeletedProduct ? (0, i.jsx)(m.po8, {
        messageType: m.YCn.WARNING,
        action: (0, i.jsx)(h.$nd, {
          variant: "overlay-secondary",
          text: ei.intl.string(ei.t.zoztQA),
          onClick: () => (0, g.A)(ep(n))
        }),
        children: ei.intl.string(ei.t["3AvulN"])
      }) : null != r && null != e.sku && (0, i.jsx)(eA, {
        guildId: r,
        guildProductListingId: e.sku.id
      })]
    }) : null
  }
  renderExpandedSection() {
    return (0, i.jsx)(m.DUT, {
      onClick: e => e.stopPropagation(),
      children: (0, i.jsxs)("div", {
        className: ea.WI,
        children: [(0, i.jsx)(m.H, {
          className: ea.mW,
          children: ei.intl.string(ei.t.nyzoFb)
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
    return (0, i.jsx)(u.tG, {
      id: e.id,
      children: e => (0, i.jsxs)(m.DUT, ec(eo({
        onClick: this.handleExpandInfo,
        "data-expanded": r,
        className: o()(ea.Ji, t, {
          [ea.oE]: n
        }),
        focusProps: {
          offset: 4
        }
      }, e), {
        children: [(0, i.jsxs)(v.A, {
          className: ea.J7,
          align: v.A.Align.CENTER,
          "data-expanded": r,
          children: [this.renderDescription(), (0, i.jsxs)("div", {
            className: ea.vj,
            children: [this.renderStatus(), this.renderPrice()]
          }), (0, i.jsx)(z.A, {
            className: ea.fT,
            direction: r ? z.A.Directions.UP : z.A.Directions.DOWN
          })]
        }), r ? this.renderExpandedSection() : null]
      }))
    })
  }
  constructor(...e) {
    super(...e), es(this, "state", {
      expanded: false
    }), es(this, "refundRules", [{
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
        return null == e.sku || e.sku.type !== et.Puh.CONSUMABLE
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
        return !em.includes(e.status)
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
        return null == e.sku || !(0, f.Lt)(e.sku.flags, et.d68.STICKER)
      }
    }, {
      rule: "SUBSCRIPTION_TYPE",
      canRefund: () => {
        var e, t;
        let {
          payment: n
        } = this.props;
        return (null == (e = n.subscription) ? true : e.type) !== et.rzx.GUILD && (null == (t = n.subscription) ? true : t.type) !== et.rzx.APPLICATION
      }
    }, {
      rule: "GUILD_PRODUCT",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return null == e.sku || !(0, f.Lt)(e.sku.flags, d.d.GUILD_PRODUCT)
      }
    }, {
      rule: "COLLECTIBLE",
      canRefund: () => {
        let {
          payment: e
        } = this.props;
        return !e.isCollectible
      }
    }]), es(this, "handleExpandInfo", () => {
      this.setState({
        expanded: !this.state.expanded
      })
    })
  }
}

function eS(e) {
  var t, n;
  let {
    payment: r,
    locale: s,
    compactMode: o,
    className: l
  } = e, c = null != r.sku && eh.includes(r.sku.type), u = null != r.sku && c ? r.sku.applicationId : null, d = null == (t = r.sku) ? true : t.applicationId, f = (null == (n = r.subscription) ? true : n.type) === et.rzx.APPLICATION, {
    applicationStatistics: _,
    gameApplication: h,
    paymentSources: m
  } = (0, p.cf)([Y.A, K.A, O.A], () => {
    var e, t;
    return {
      applicationStatistics: null != u ? K.A.getCurrentUserStatisticsForApplication(u) : null,
      gameApplication: null != (e = O.A.getApplication(null != u ? u : "")) ? e : null == (t = r.sku) ? true : t.application,
      paymentSources: Y.A.paymentSources
    }
  }), {
    hasAlreadyLinked: g
  } = (0, y.RD)((0, x.bF)(r.sku) ? h : true), A = (0, p.bG)([O.A], () => null != d ? O.A.getApplication(d) : null), v = null;
  a.useEffect(() => {
    f && null != d && (0, D.TA)(d)
  }, [d, f]);
  let S = (0, p.bG)([B.A], () => B.A.getGuild(null == h ? true : h.guildId)),
    I = c ? h : true,
    T = r.subscription,
    C = (0, p.bG)([W.A], () => null != T && T.type !== et.rzx.PREMIUM ? W.A.get(T.items[0].planId) : null),
    N = (0, p.bG)([H.default], () => {
      var e, t, n, i;
      let a = r.isGift ? null == (n = r.entitlements) ? true : n.find(e => {
        var t;
        return (null == (t = e.user) ? true : t.id) != null && null != e.gifterId
      }) : null;
      return null == a ? null : null != (e = H.default.getUser(null != (t = null == (i = a.user) ? true : i.id) ? t : null)) ? e : null == a ? true : a.user
    }, [r]),
    {
      analyticsLocations: R
    } = (0, b.Ay)(E.A.BILLING_SETTINGS_BILLING);
  return (0, i.jsx)(ev, {
    applicationStatistics: _,
    application: f ? A : I,
    analyticsLocations: R,
    guild: S,
    stickerPack: v,
    paymentSources: m,
    locale: s,
    compactMode: o,
    className: l,
    payment: r,
    plan: C,
    claimedGiftUser: N,
    hasLinkedToApplication: g
  })
}
es(ev, "defaultProps", {
  compactMode: false
})