/** Chunk was on web.js **/
/** chunk id: 301935, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => U,
  Z: () => G
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk533594 = require("./533594.jsx"),
  Chunk621082 = require("./621082.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk601911 = require("./601911.js"),
  Chunk283836 = require("./283836.js"),
  Chunk887818 = require("./887818.jsx"),
  Chunk728345 = require("./728345.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk374649 = require("./374649.js"),
  Chunk908951 = require("./908951.jsx"),
  Chunk255078 = require("./255078.js"),
  Chunk430824 = require("./430824.js"),
  Chunk509545 = require("./509545.js"),
  Chunk55563 = require("./55563.js"),
  Chunk551428 = require("./551428.js"),
  Chunk937615 = require("./937615.js"),
  Chunk171246 = require("./171246.js"),
  Chunk889989 = require("./889989.jsx"),
  Chunk63487 = require("./63487.js"),
  Chunk547283 = require("./547283.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk608848 = require("./608848.js");

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let j = "https://support.discord.com/hc/en-us";
var U = function(e) {
  return e[e.LOADING = 0] = "LOADING", e[e.DONE = 1] = "DONE", e[e.ERROR = 2] = "ERROR", e
}({});

function G(e) {
  var t, n, o, l, u;
  let {
    subscription: p,
    navigateToSwitchPlan: h,
    loadingState: b
  } = e, y = null == (t = p.metadata) ? true : t.application_subscription_guild_id, {
    renewalMutations: S,
    planId: C
  } = p, {
    appId: R,
    plan: x,
    storeListing: L,
    isGuildSubscription: M,
    subscriptionForGuild: k,
    sku: j,
    isCancelled: U,
    renewalPlan: G
  } = (0, s.cj)([v.Z, I.Z, T.Z, O.Z], () => {
    let e, t = v.Z.get(C),
      n = null != t ? I.Z.get(t.skuId) : true,
      r = null == n ? true : n.applicationId,
      i = null != t ? T.Z.getForSKU(t.skuId) : null,
      a = null != i && (0, A.KK)(i.skuFlags),
      o = a && null != y ? O.Z.getGuild(y) : true,
      s = (0, A.Jf)(p, n);
    if (false === s && null != S && S.items.length > 0) {
      var l;
      let t = S.items[0];
      e = null != (l = v.Z.get(t.planId)) ? l : true
    }
    return {
      appId: r,
      isGuildSubscription: a,
      plan: t,
      sku: n,
      storeListing: i,
      subscriptionForGuild: o,
      isCancelled: s,
      renewalPlan: e
    }
  }, [y, C, S, p]), {
    data: K
  } = (0, m.IX)(R), z = i.useMemo(() => null != K ? (0, _.y)(K, 100) : null, [K]), q = null != (n = null == j ? true : j.deleted) && n, X = null != j && (0, A.OL)(j), Q = p.status === P.O0b.PAST_DUE, {
    analyticsLocations: J
  } = (0, f.ZP)(), [$, ee] = (0, E.ED)({
    subscriptionId: p.id,
    renewal: true,
    analyticsLocations: J,
    analyticsLocation: d.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
  }), et = (null == ee ? true : ee.code) === 100062 && null != y && null == k, en = (0, N.p)(p.currentPeriodEnd), er = 0 === b;
  return (0, r.jsxs)(a.l, {
    headerClassName: D.headerWrapper,
    header: false === er ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: D.headerContent,
        children: [null != z && (0, r.jsx)(c.Eep, {
          src: z.href,
          imageClassName: D.appIcon,
          width: 40,
          height: 40
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(c.Heading, {
            variant: "heading-md/semibold",
            children: null != (o = null == K ? true : K.name) ? o : w.intl.string(w.t["7kqy7W"])
          }), (0, r.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: "header-secondary",
            children: null != (l = null == x ? true : x.name) ? l : w.intl.string(w.t.sqkbMK)
          })]
        })]
      }), (0, r.jsx)("div", {
        className: D.headerButtons,
        children: null != K && null != L && null != j && false === et && (0, r.jsx)(H, {
          subscription: p,
          app: K,
          guild: k,
          sku: j,
          storeListing: L,
          isCancelled: U,
          navigateToSwitchPlan: h,
          renewalSkuId: null == G ? true : G.skuId
        })
      })]
    }) : (0, r.jsx)(c.$jN, {
      type: c.RAz.PULSING_ELLIPSIS
    }),
    children: [U && (0, r.jsx)(V, {
      type: "warning",
      title: X ? w.intl.formatToPlainString(w.t.QOnM1y, {
        subscriptionPeriodEnd: en
      }) : w.intl.formatToPlainString(w.t.HOaZu8, {
        subscriptionPeriodEnd: en
      })
    }), et && (0, r.jsx)(V, {
      type: "warning",
      title: w.intl.formatToPlainString(w.t.HOaZu8, {
        subscriptionPeriodEnd: en
      })
    }), Q && (0, r.jsx)(V, {
      type: "danger",
      title: w.intl.string(w.t.fvOqBo)
    }), (0, r.jsxs)("div", {
      className: D.details,
      children: [(0, r.jsx)(F, {
        title: w.intl.string(w.t["5D/KEH"]),
        content: M ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsxs)("span", {
            className: D.subscriptionTypeRow,
            children: [(0, r.jsx)(c.QTo, {
              size: "xs"
            }), w.intl.string(w.t.QjL3vn)]
          }), null != k && (0, r.jsxs)("span", {
            className: D.guildSubscriptionContentRow,
            children: [(0, r.jsx)(c.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: w.intl.format(w.t["7ZD8p1"], {
                guildName: k.name
              })
            }), (0, r.jsx)(g.Z, {
              guild: k,
              size: g.Z.Sizes.MINI
            })]
          })]
        }) : (0, r.jsxs)("span", {
          className: D.subscriptionTypeRow,
          children: [(0, r.jsx)(c.tBG, {
            size: "xs"
          }), w.intl.string(w.t["6anEVv"])]
        })
      }), (0, r.jsx)(B, {
        invoicePreview: $,
        subscriptionPlan: x
      }), (0, r.jsx)(F, {
        title: w.intl.string(w.t.dnUzb6),
        content: (0, N.p)(null != (u = p.createdAt) ? u : p.currentPeriodStart)
      }), (0, r.jsx)(Z, {
        isCancelled: U,
        subscriptionPeriodEnd: en,
        renewalPlan: G
      })]
    }), (0, r.jsx)(W, {
      subscription: p,
      currentInvoicePreview: $,
      loadingState: b,
      isDeleted: q,
      isCancelled: U
    }), null != K && (null == L ? true : L.benefits) != null && L.benefits.length > 0 && (0, r.jsx)(Y, {
      appId: K.id,
      listingBenefits: L.benefits
    })]
  })
}

function B(e) {
  let {
    subscriptionPlan: t,
    invoicePreview: n
  } = e;
  if (null == t) return (0, r.jsx)(F, {
    title: w.intl.string(w.t.KI7ERx),
    content: ""
  });
  let i = (0, S.og)((0, S.T4)(t.price, t.currency), t.interval, t.intervalCount),
    a = null == n ? true : n.findInvoiceItemByPlanId(t.id);
  if (null == a) return (0, r.jsx)(F, {
    title: w.intl.string(w.t.KI7ERx),
    content: i
  });
  let o = (0, S.og)((0, S.T4)(a.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
  return (0, r.jsx)(F, {
    title: w.intl.string(w.t.KI7ERx),
    content: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.Text, {
        variant: "text-sm/semibold",
        children: o
      }), o !== i && (0, r.jsx)(l.u, {
        text: w.intl.format(w.t["6DoE57"], {
          listPrice: i
        }),
        position: "bottom",
        children: (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-tertiary",
          children: (0, r.jsx)("s", {
            children: i
          })
        })
      })]
    })
  })
}

function Z(e) {
  let {
    isCancelled: t,
    subscriptionPeriodEnd: n,
    renewalPlan: i
  } = e;
  if (null != i) {
    let e = (0, S.og)((0, S.T4)(i.price, i.currency), i.interval, i.intervalCount);
    return (0, r.jsx)(F, {
      title: w.intl.string(w.t.hIhAM3),
      content: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          children: n
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: w.intl.format(w.t.MCLbvj, {
            planName: i.name,
            price: e
          })
        })]
      })
    })
  }
  return (0, r.jsx)(F, {
    title: t ? w.intl.string(w.t.enxcAl) : w.intl.string(w.t["Ms+6Zq"]),
    content: n
  })
}

function F(e) {
  let {
    title: t,
    content: n
  } = e;
  return (0, r.jsxs)("div", {
    className: D.row,
    children: [(0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      children: t
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      className: D.rowContent,
      children: n
    })]
  })
}

function V(e) {
  let {
    type: t,
    title: n
  } = e, i = "warning" === t;
  return (0, r.jsx)(c.Wn, {
    messageType: i ? c.QYI.WARNING : c.QYI.ERROR,
    className: D.noticeBanner,
    children: (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      children: n
    })
  })
}

function H(e) {
  let {
    app: t,
    storeListing: a,
    sku: o,
    subscription: l,
    isCancelled: d,
    guild: _,
    renewalSkuId: h,
    navigateToSwitchPlan: m
  } = e, g = (0, A.OL)(o), {
    analyticsLocations: E
  } = (0, f.ZP)(), [b, O] = i.useState(false), v = (0, p.q)(t.id), T = (0, s.e7)([I.Z], () => I.Z.getParentSKU(a.skuId), [a.skuId]), S = i.useMemo(() => null == T ? [] : (0, R.$)(a.id, T, v.subscriptions), [a.id, v, T]), C = 0 !== S.length, N = () => {
    (0, c.ZDy)(async () => {
      let {
        default: e
      } = await n.e("6284").then(n.bind(n, 257514));
      return n => (0, r.jsx)(e, k(L({}, n), {
        application: t,
        storeListing: a,
        subscription: l,
        guild: _
      }))
    })
  }, P = async () => {
    try {
      O(true);
      let {
        subscription: e
      } = await (0, u.pl)(l, E);
      if (null == e) return;
      (0, c.ZDy)(async () => {
        let {
          default: t
        } = await n.e("18879").then(n.bind(n, 389262));
        return n => (0, r.jsx)(t, k(L({}, n), {
          storeListing: a,
          subscription: y.Z.createFromServer(e)
        }))
      })
    } finally {
      O(false)
    }
  };
  return (0, r.jsxs)("div", {
    className: D.managementBtns,
    children: [g ? null : d ? (0, r.jsx)(c.Button, {
      variant: "secondary",
      size: "sm",
      text: w.intl.string(w.t.QtMnkW),
      onClick: P,
      loading: b
    }) : (0, r.jsx)(c.Button, {
      variant: "secondary",
      size: "sm",
      text: w.intl.string(w.t["E8G/tr"]),
      onClick: N
    }), C && null != T && false === d && (0, r.jsx)(c.Button, {
      variant: "primary",
      size: "sm",
      text: w.intl.string(w.t.R74ZBR),
      onClick: () => {
        m({
          currentSubscription: l,
          alternativeListings: S,
          app: t,
          subscriptionGroup: T,
          currentListing: a,
          renewalSkuId: h
        })
      }
    })]
  })
}

function Y(e) {
  let {
    appId: t,
    listingBenefits: n
  } = e;
  return (0, r.jsx)(h.Z, {
    children: e => (0, r.jsxs)("div", {
      className: D.benefits,
      children: [(0, r.jsxs)("div", {
        className: D.benefitsHeader,
        children: [e && (0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          children: w.intl.string(w.t.mORL67)
        }), (0, r.jsx)(h.Z.Toggle, {
          className: D.benefitsBtn,
          text: e ? w.intl.string(w.t.gsbFAw) : w.intl.string(w.t.IwjfxV)
        })]
      }), e ? n.map(e => {
        let {
          id: n,
          name: i,
          description: a,
          icon: s
        } = e;
        return (0, r.jsx)(o.Gm, {
          header: i,
          icon: (0, C.n)(t, s),
          description: a
        }, n)
      }) : null]
    })
  })
}

function W(e) {
  let {
    subscription: t,
    currentInvoicePreview: n,
    loadingState: i,
    isDeleted: a,
    isCancelled: o
  } = e;
  return null == n ? null : 0 === i ? (0, r.jsx)("div", {
    className: D.payment,
    children: (0, r.jsx)(c.gNt, {
      label: w.intl.string(w.t.azZaZa),
      children: (0, r.jsx)(c.$jN, {
        type: c.RAz.PULSING_ELLIPSIS
      })
    })
  }) : 2 === i ? (0, r.jsx)("div", {
    className: D.payment,
    children: (0, r.jsxs)(c.qXd, {
      color: c.DM8.DANGER,
      style: {
        borderRadius: 0
      },
      children: [w.intl.format(w.t.IIHUUF, {
        subscriptionId: t.id
      }), (0, r.jsx)("br", {}), w.intl.format(w.t.fh65ES, {
        helpLink: j
      })]
    })
  }) : (0, r.jsx)("div", {
    className: D.payment,
    children: (0, r.jsx)(c.gNt, {
      label: w.intl.string(w.t.azZaZa),
      children: (0, r.jsx)(b.Z, {
        subscription: t,
        currentInvoicePreview: n,
        disabled: a || o
      })
    })
  })
}