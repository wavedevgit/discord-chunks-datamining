/** Chunk was on 60667 **/
/** chunk id: 888848, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => U,
  G: () => M
}), require("./896048.js"), require("./228524.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk273166 = require("./273166.jsx"),
  Chunk885996 = require("./885996.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk384904 = require("./384904.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk943775 = require("./943775.js"),
  Chunk123791 = require("./123791.js"),
  Chunk147441 = require("./147441.jsx"),
  Chunk627363 = require("./627363.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk543767 = require("./543767.js"),
  Chunk420139 = require("./420139.jsx"),
  Chunk272207 = require("./272207.js"),
  Chunk71393 = require("./71393.js"),
  Chunk97352 = require("./97352.js"),
  Chunk67480 = require("./67480.js"),
  Chunk328968 = require("./328968.js"),
  Chunk580630 = require("./580630.js"),
  Chunk163437 = require("./163437.js"),
  Chunk3432 = require("./3432.jsx"),
  Chunk572566 = require("./572566.js"),
  Chunk861621 = require("./861621.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk486526 = require("./486526.js");

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function L(e, t) {
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
var M = ((r = {})[r.LOADING = 0] = "LOADING", r[r.DONE = 1] = "DONE", r[r.ERROR = 2] = "ERROR", r);

function U(e) {
  var t, n, r, a, c;
  let {
    subscription: u,
    navigateToSwitchPlan: g,
    loadingState: A
  } = e, E = null == (c = u.metadata) ? true : c.application_subscription_guild_id, {
    renewalMutations: x,
    planId: S
  } = u, {
    appId: v,
    plan: y,
    storeListing: w,
    isGuildSubscription: L,
    subscriptionForGuild: M,
    sku: U,
    isCancelled: W,
    renewalPlan: z
  } = (0, o.cf)([C.A, T.A, I.A, O.A], () => {
    let e, t = C.A.get(S),
      n = null != t ? T.A.get(t.skuId) : true,
      r = null == n ? true : n.applicationId,
      i = null != t ? I.A.getForSKU(t.skuId) : null,
      l = null != i && (0, j.PJ)(i.skuFlags),
      s = l && null != E ? O.A.getGuild(E) : true,
      a = (0, j.Uo)(u, n);
    if (false === a && null != x && x.items.length > 0) {
      var o;
      let t = x.items[0];
      e = null != (o = C.A.get(t.planId)) ? o : true
    }
    return {
      appId: r,
      isGuildSubscription: l,
      plan: t,
      sku: n,
      storeListing: i,
      subscriptionForGuild: s,
      isCancelled: a,
      renewalPlan: e
    }
  }, [E, S, x, u]), {
    data: K
  } = (0, f.YY)(v), Z = l.useMemo(() => null != K ? (0, m.A)(K, 100) : null, [K]), X = null != (t = null == U ? true : U.deleted) && t, q = null != U && (0, j.Se)(U), J = u.status === P.Dmq.PAST_DUE, {
    analyticsLocations: Q
  } = (0, p.Ay)(), [$, ee] = (0, b.Kq)({
    subscriptionId: u.id,
    renewal: true,
    analyticsLocations: Q,
    analyticsLocation: _.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
  }), et = (null == ee ? true : ee.code) === 100062 && null != E && null == M, en = (0, N.Y)(u.currentPeriodEnd), er = 0 === A;
  return (0, i.jsxs)(s.q, {
    headerClassName: D.dL,
    header: false === er ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)("div", {
        className: D.VW,
        children: [null != Z && (0, i.jsx)(d._V3, {
          src: Z.href,
          imageClassName: D.Z2,
          width: 40,
          height: 40
        }), (0, i.jsxs)("div", {
          className: D.aF,
          children: [(0, i.jsx)(d.Heading, {
            variant: "heading-md/semibold",
            lineClamp: 1,
            children: null != (n = null == K ? true : K.name) ? n : R.intl.string(R.t["7kqy7W"])
          }), (0, i.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            lineClamp: 1,
            children: null != (r = null == y ? true : y.name) ? r : R.intl.string(R.t.sqkbMK)
          })]
        })]
      }), (0, i.jsx)("div", {
        className: D.Pz,
        children: null != K && null != w && null != U && false === et && (0, i.jsx)(B, {
          subscription: u,
          app: K,
          guild: M,
          sku: U,
          storeListing: w,
          isCancelled: W,
          navigateToSwitchPlan: g,
          renewalSkuId: null == z ? true : z.skuId
        })
      })]
    }) : (0, i.jsx)(d.y$y, {
      type: d.tVU.PULSING_ELLIPSIS
    }),
    children: [W && (0, i.jsx)(H, {
      type: "warning",
      title: q ? R.intl.formatToPlainString(R.t.QOnM1y, {
        subscriptionPeriodEnd: en
      }) : R.intl.formatToPlainString(R.t.HOaZu8, {
        subscriptionPeriodEnd: en
      })
    }), et && (0, i.jsx)(H, {
      type: "warning",
      title: R.intl.formatToPlainString(R.t.HOaZu8, {
        subscriptionPeriodEnd: en
      })
    }), J && (0, i.jsx)(H, {
      type: "danger",
      title: R.intl.string(R.t.fvOqBo)
    }), (0, i.jsxs)("div", {
      className: D.zH,
      children: [(0, i.jsx)(V, {
        title: R.intl.string(R.t["5D/KEH"]),
        content: L ? (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsxs)("span", {
            className: D.yW,
            children: [(0, i.jsx)(d.RR9, {
              size: "xs"
            }), R.intl.string(R.t.QjL3vn)]
          }), null != M && (0, i.jsxs)("span", {
            className: D._t,
            children: [(0, i.jsx)(d.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: R.intl.format(R.t["7ZD8p1"], {
                guildName: M.name
              })
            }), (0, i.jsx)(h.A, {
              guild: M,
              size: h.A.Sizes.MINI
            })]
          })]
        }) : (0, i.jsxs)("span", {
          className: D.yW,
          children: [(0, i.jsx)(d.nys, {
            size: "xs"
          }), R.intl.string(R.t["6anEVv"])]
        })
      }), (0, i.jsx)(G, {
        invoicePreview: $,
        subscriptionPlan: y
      }), (0, i.jsx)(V, {
        title: R.intl.string(R.t.dnUzb6),
        content: (0, N.Y)(null != (a = u.createdAt) ? a : u.currentPeriodStart)
      }), (0, i.jsx)(k, {
        isCancelled: W,
        subscriptionPeriodEnd: en,
        renewalPlan: z
      })]
    }), (0, i.jsx)(Y, {
      subscription: u,
      currentInvoicePreview: $,
      loadingState: A,
      isDeleted: X,
      isCancelled: W
    }), null != K && (null == w ? true : w.benefits) != null && w.benefits.length > 0 && (0, i.jsx)(F, {
      appId: K.id,
      listingBenefits: w.benefits
    })]
  })
}

function G(e) {
  let {
    subscriptionPlan: t,
    invoicePreview: n
  } = e;
  if (null == t) return (0, i.jsx)(V, {
    title: R.intl.string(R.t.KI7ERx),
    content: ""
  });
  let r = (0, S.CE)((0, S.$g)(t.price, t.currency), t.interval, t.intervalCount),
    l = null == n ? true : n.findInvoiceItemByPlanId(t.id);
  if (null == l) return (0, i.jsx)(V, {
    title: R.intl.string(R.t.KI7ERx),
    content: r
  });
  let s = (0, S.CE)((0, S.$g)(l.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
  return (0, i.jsx)(V, {
    title: R.intl.string(R.t.KI7ERx),
    content: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(d.Text, {
        variant: "text-sm/semibold",
        children: s
      }), s !== r && (0, i.jsx)(c.m_, {
        text: R.intl.format(R.t["6DoE57"], {
          listPrice: r
        }),
        position: "bottom",
        children: (0, i.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: (0, i.jsx)("s", {
            children: r
          })
        })
      })]
    })
  })
}

function k(e) {
  let {
    isCancelled: t,
    subscriptionPeriodEnd: n,
    renewalPlan: r
  } = e;
  if (null != r) {
    let e = (0, S.CE)((0, S.$g)(r.price, r.currency), r.interval, r.intervalCount);
    return (0, i.jsx)(V, {
      title: R.intl.string(R.t.hIhAM3),
      content: (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.Text, {
          variant: "text-sm/medium",
          children: n
        }), (0, i.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: R.intl.format(R.t.MCLbvj, {
            planName: r.name,
            price: e
          })
        })]
      })
    })
  }
  return (0, i.jsx)(V, {
    title: t ? R.intl.string(R.t.enxcAl) : R.intl.string(R.t["Ms+6Zq"]),
    content: n
  })
}

function V(e) {
  let {
    title: t,
    content: n
  } = e;
  return (0, i.jsxs)("div", {
    className: D.nM,
    children: [(0, i.jsx)(d.Text, {
      variant: "text-sm/medium",
      children: t
    }), (0, i.jsx)(d.Text, {
      variant: "text-sm/medium",
      className: D.u4,
      children: n
    })]
  })
}

function H(e) {
  let {
    type: t,
    title: n
  } = e;
  return (0, i.jsx)(d.po8, {
    messageType: "warning" === t ? d.YCn.WARNING : d.YCn.ERROR,
    className: D.Xm,
    children: (0, i.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: n
    })
  })
}

function B(e) {
  let {
    app: t,
    storeListing: r,
    sku: s,
    subscription: a,
    isCancelled: c,
    guild: _,
    renewalSkuId: m,
    navigateToSwitchPlan: A
  } = e, f = (0, j.Se)(s), {
    analyticsLocations: h
  } = (0, p.Ay)(), [b, E] = l.useState(false), O = (0, g.C)(t.id), C = (0, o.bG)([T.A], () => T.A.getParentSKU(r.skuId), [r.skuId]), I = l.useMemo(() => null == C ? [] : (0, y.l)(r.id, C, O.subscriptions), [r.id, O, C]), S = 0 !== I.length, v = async () => {
    try {
      E(true);
      let {
        subscription: e
      } = await (0, u.QP)(a, h);
      if (null == e) return;
      (0, d.mMO)(async () => {
        let {
          default: t
        } = await n.e("52396").then(n.bind(n, 115623));
        return n => (0, i.jsx)(t, L(w({}, n), {
          storeListing: r,
          subscription: x.A.createFromServer(e)
        }))
      })
    } finally {
      E(false)
    }
  };
  return (0, i.jsxs)("div", {
    className: D.fw,
    children: [f ? null : c ? (0, i.jsx)(d.Button, {
      variant: "secondary",
      size: "sm",
      text: R.intl.string(R.t.QtMnkW),
      onClick: v,
      loading: b
    }) : (0, i.jsx)(d.Button, {
      variant: "secondary",
      size: "sm",
      text: R.intl.string(R.t["E8G/tr"]),
      onClick: () => {
        (0, d.mMO)(async () => {
          let {
            default: e
          } = await n.e("33102").then(n.bind(n, 386077));
          return n => (0, i.jsx)(e, L(w({}, n), {
            application: t,
            storeListing: r,
            subscription: a,
            guild: _
          }))
        })
      }
    }), S && null != C && false === c && (0, i.jsx)(d.Button, {
      variant: "primary",
      size: "sm",
      text: R.intl.string(R.t.R74ZBR),
      onClick: () => {
        A({
          currentSubscription: a,
          alternativeListings: I,
          app: t,
          subscriptionGroup: C,
          currentListing: r,
          renewalSkuId: m
        })
      }
    })]
  })
}

function F(e) {
  let {
    appId: t,
    listingBenefits: n
  } = e;
  return (0, i.jsx)(A.A, {
    children: e => (0, i.jsxs)("div", {
      className: D.PX,
      children: [(0, i.jsxs)("div", {
        className: D.wV,
        children: [e && (0, i.jsx)(d.Text, {
          variant: "text-sm/semibold",
          children: R.intl.string(R.t.mORL67)
        }), (0, i.jsx)(A.A.Toggle, {
          className: D.Bh,
          text: e ? R.intl.string(R.t.gsbFAw) : R.intl.string(R.t.IwjfxV)
        })]
      }), e ? n.map(e => {
        let {
          id: n,
          name: r,
          description: l,
          icon: s
        } = e;
        return (0, i.jsx)(a.FY, {
          header: r,
          icon: (0, v.N)(t, s),
          description: l
        }, n)
      }) : null]
    })
  })
}

function Y(e) {
  let {
    subscription: t,
    currentInvoicePreview: n,
    loadingState: r,
    isDeleted: l,
    isCancelled: s
  } = e;
  return null == n ? null : 0 === r ? (0, i.jsx)("div", {
    className: D.Ji,
    children: (0, i.jsx)(d.D0$, {
      label: R.intl.string(R.t.azZaZa),
      children: (0, i.jsx)(d.y$y, {
        type: d.tVU.PULSING_ELLIPSIS
      })
    })
  }) : 2 === r ? (0, i.jsx)("div", {
    className: D.Ji,
    children: (0, i.jsxs)(d.$Td, {
      color: d.Hv$.DANGER,
      style: {
        borderRadius: 0
      },
      children: [R.intl.format(R.t.IIHUUF, {
        subscriptionId: t.id
      }), (0, i.jsx)("br", {}), R.intl.format(R.t.fh65ES, {
        helpLink: "https://support.discord.com/hc/en-us"
      })]
    })
  }) : (0, i.jsx)("div", {
    className: D.Ji,
    children: (0, i.jsx)(d.D0$, {
      label: R.intl.string(R.t.azZaZa),
      children: (0, i.jsx)(E.A, {
        subscription: t,
        currentInvoicePreview: n,
        disabled: l || s
      })
    })
  })
}