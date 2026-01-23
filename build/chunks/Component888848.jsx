/** Chunk was on web.js **/
/** chunk id: 888848, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => G,
  G: () => U
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
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

function j(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function M(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let k = "https://support.discord.com/hc/en-us";
var U = function(e) {
  return e[e.LOADING = 0] = "LOADING", e[e.DONE = 1] = "DONE", e[e.ERROR = 2] = "ERROR", e
}({});

function G(e) {
  var t, n, s, l, u;
  let {
    subscription: _,
    navigateToSwitchPlan: h,
    loadingState: y
  } = e, b = null == (u = _.metadata) ? true : u.application_subscription_guild_id, {
    renewalMutations: S,
    planId: C
  } = _, {
    appId: w,
    plan: x,
    storeListing: L,
    isGuildSubscription: j,
    subscriptionForGuild: M,
    sku: k,
    isCancelled: U,
    renewalPlan: G
  } = (0, o.cf)([v.A, A.A, I.A, O.A], () => {
    let e, t = v.A.get(C),
      n = null != t ? A.A.get(t.skuId) : true,
      r = null == n ? true : n.applicationId,
      i = null != t ? I.A.getForSKU(t.skuId) : null,
      a = null != i && (0, T.PJ)(i.skuFlags),
      s = a && null != b ? O.A.getGuild(b) : true,
      o = (0, T.Uo)(_, n);
    if (false === o && null != S && S.items.length > 0) {
      var l;
      let t = S.items[0];
      e = null != (l = v.A.get(t.planId)) ? l : true
    }
    return {
      appId: r,
      isGuildSubscription: a,
      plan: t,
      sku: n,
      storeListing: i,
      subscriptionForGuild: s,
      isCancelled: o,
      renewalPlan: e
    }
  }, [b, C, S, _]), {
    data: z
  } = (0, m.YY)(w), q = i.useMemo(() => null != z ? (0, p.A)(z, 100) : null, [z]), Z = null != (t = null == k ? true : k.deleted) && t, X = null != k && (0, T.Se)(k), Q = _.status === R.Dmq.PAST_DUE, {
    analyticsLocations: J
  } = (0, f.Ay)(), [$, ee] = (0, E.Kq)({
    subscriptionId: _.id,
    renewal: true,
    analyticsLocations: J,
    analyticsLocation: d.A.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
  }), et = (null == ee ? true : ee.code) === 100062 && null != b && null == M, en = (0, N.Y)(_.currentPeriodEnd), er = 0 === y;
  return (0, r.jsxs)(a.q, {
    headerClassName: D.dL,
    header: false === er ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: D.VW,
        children: [null != q && (0, r.jsx)(c._V3, {
          src: q.href,
          imageClassName: D.Z2,
          width: 40,
          height: 40
        }), (0, r.jsxs)("div", {
          className: D.aF,
          children: [(0, r.jsx)(c.Heading, {
            variant: "heading-md/semibold",
            lineClamp: 1,
            children: null != (n = null == z ? true : z.name) ? n : P.intl.string(P.t["7kqy7W"])
          }), (0, r.jsx)(c.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            lineClamp: 1,
            children: null != (s = null == x ? true : x.name) ? s : P.intl.string(P.t.sqkbMK)
          })]
        })]
      }), (0, r.jsx)("div", {
        className: D.Pz,
        children: null != z && null != L && null != k && false === et && (0, r.jsx)(Y, {
          subscription: _,
          app: z,
          guild: M,
          sku: k,
          storeListing: L,
          isCancelled: U,
          navigateToSwitchPlan: h,
          renewalSkuId: null == G ? true : G.skuId
        })
      })]
    }) : (0, r.jsx)(c.y$y, {
      type: c.tVU.PULSING_ELLIPSIS
    }),
    children: [U && (0, r.jsx)(H, {
      type: "warning",
      title: X ? P.intl.formatToPlainString(P.t.QOnM1y, {
        subscriptionPeriodEnd: en
      }) : P.intl.formatToPlainString(P.t.HOaZu8, {
        subscriptionPeriodEnd: en
      })
    }), et && (0, r.jsx)(H, {
      type: "warning",
      title: P.intl.formatToPlainString(P.t.HOaZu8, {
        subscriptionPeriodEnd: en
      })
    }), Q && (0, r.jsx)(H, {
      type: "danger",
      title: P.intl.string(P.t.fvOqBo)
    }), (0, r.jsxs)("div", {
      className: D.zH,
      children: [(0, r.jsx)(B, {
        title: P.intl.string(P.t["5D/KEH"]),
        content: j ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsxs)("span", {
            className: D.yW,
            children: [(0, r.jsx)(c.RR9, {
              size: "xs"
            }), P.intl.string(P.t.QjL3vn)]
          }), null != M && (0, r.jsxs)("span", {
            className: D._t,
            children: [(0, r.jsx)(c.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: P.intl.format(P.t["7ZD8p1"], {
                guildName: M.name
              })
            }), (0, r.jsx)(g.A, {
              guild: M,
              size: g.A.Sizes.MINI
            })]
          })]
        }) : (0, r.jsxs)("span", {
          className: D.yW,
          children: [(0, r.jsx)(c.nys, {
            size: "xs"
          }), P.intl.string(P.t["6anEVv"])]
        })
      }), (0, r.jsx)(V, {
        invoicePreview: $,
        subscriptionPlan: x
      }), (0, r.jsx)(B, {
        title: P.intl.string(P.t.dnUzb6),
        content: (0, N.Y)(null != (l = _.createdAt) ? l : _.currentPeriodStart)
      }), (0, r.jsx)(F, {
        isCancelled: U,
        subscriptionPeriodEnd: en,
        renewalPlan: G
      })]
    }), (0, r.jsx)(K, {
      subscription: _,
      currentInvoicePreview: $,
      loadingState: y,
      isDeleted: Z,
      isCancelled: U
    }), null != z && (null == L ? true : L.benefits) != null && L.benefits.length > 0 && (0, r.jsx)(W, {
      appId: z.id,
      listingBenefits: L.benefits
    })]
  })
}

function V(e) {
  let {
    subscriptionPlan: t,
    invoicePreview: n
  } = e;
  if (null == t) return (0, r.jsx)(B, {
    title: P.intl.string(P.t.KI7ERx),
    content: ""
  });
  let i = (0, S.CE)((0, S.$g)(t.price, t.currency), t.interval, t.intervalCount),
    a = null == n ? true : n.findInvoiceItemByPlanId(t.id);
  if (null == a) return (0, r.jsx)(B, {
    title: P.intl.string(P.t.KI7ERx),
    content: i
  });
  let s = (0, S.CE)((0, S.$g)(a.subscriptionPlanPrice, t.currency), t.interval, t.intervalCount);
  return (0, r.jsx)(B, {
    title: P.intl.string(P.t.KI7ERx),
    content: (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(c.Text, {
        variant: "text-sm/semibold",
        children: s
      }), s !== i && (0, r.jsx)(l.m_, {
        text: P.intl.format(P.t["6DoE57"], {
          listPrice: i
        }),
        position: "bottom",
        children: (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: (0, r.jsx)("s", {
            children: i
          })
        })
      })]
    })
  })
}

function F(e) {
  let {
    isCancelled: t,
    subscriptionPeriodEnd: n,
    renewalPlan: i
  } = e;
  if (null != i) {
    let e = (0, S.CE)((0, S.$g)(i.price, i.currency), i.interval, i.intervalCount);
    return (0, r.jsx)(B, {
      title: P.intl.string(P.t.hIhAM3),
      content: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          children: n
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: P.intl.format(P.t.MCLbvj, {
            planName: i.name,
            price: e
          })
        })]
      })
    })
  }
  return (0, r.jsx)(B, {
    title: t ? P.intl.string(P.t.enxcAl) : P.intl.string(P.t["Ms+6Zq"]),
    content: n
  })
}

function B(e) {
  let {
    title: t,
    content: n
  } = e;
  return (0, r.jsxs)("div", {
    className: D.nM,
    children: [(0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      children: t
    }), (0, r.jsx)(c.Text, {
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
  } = e, i = "warning" === t;
  return (0, r.jsx)(c.po8, {
    messageType: i ? c.YCn.WARNING : c.YCn.ERROR,
    className: D.Xm,
    children: (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      children: n
    })
  })
}

function Y(e) {
  let {
    app: t,
    storeListing: a,
    sku: s,
    subscription: l,
    isCancelled: d,
    guild: p,
    renewalSkuId: h,
    navigateToSwitchPlan: m
  } = e, g = (0, T.Se)(s), {
    analyticsLocations: E
  } = (0, f.Ay)(), [y, O] = i.useState(false), v = (0, _.C)(t.id), I = (0, o.bG)([A.A], () => A.A.getParentSKU(a.skuId), [a.skuId]), S = i.useMemo(() => null == I ? [] : (0, w.l)(a.id, I, v.subscriptions), [a.id, v, I]), C = 0 !== S.length, N = () => {
    (0, c.mMO)(async () => {
      let {
        default: e
      } = await n.e("33102").then(n.bind(n, 386077));
      return n => (0, r.jsx)(e, M(L({}, n), {
        application: t,
        storeListing: a,
        subscription: l,
        guild: p
      }))
    })
  }, R = async () => {
    try {
      O(true);
      let {
        subscription: e
      } = await (0, u.QP)(l, E);
      if (null == e) return;
      (0, c.mMO)(async () => {
        let {
          default: t
        } = await n.e("52396").then(n.bind(n, 115623));
        return n => (0, r.jsx)(t, M(L({}, n), {
          storeListing: a,
          subscription: b.A.createFromServer(e)
        }))
      })
    } finally {
      O(false)
    }
  };
  return (0, r.jsxs)("div", {
    className: D.fw,
    children: [g ? null : d ? (0, r.jsx)(c.Button, {
      variant: "secondary",
      size: "sm",
      text: P.intl.string(P.t.QtMnkW),
      onClick: R,
      loading: y
    }) : (0, r.jsx)(c.Button, {
      variant: "secondary",
      size: "sm",
      text: P.intl.string(P.t["E8G/tr"]),
      onClick: N
    }), C && null != I && false === d && (0, r.jsx)(c.Button, {
      variant: "primary",
      size: "sm",
      text: P.intl.string(P.t.R74ZBR),
      onClick: () => {
        m({
          currentSubscription: l,
          alternativeListings: S,
          app: t,
          subscriptionGroup: I,
          currentListing: a,
          renewalSkuId: h
        })
      }
    })]
  })
}

function W(e) {
  let {
    appId: t,
    listingBenefits: n
  } = e;
  return (0, r.jsx)(h.A, {
    children: e => (0, r.jsxs)("div", {
      className: D.PX,
      children: [(0, r.jsxs)("div", {
        className: D.wV,
        children: [e && (0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          children: P.intl.string(P.t.mORL67)
        }), (0, r.jsx)(h.A.Toggle, {
          className: D.Bh,
          text: e ? P.intl.string(P.t.gsbFAw) : P.intl.string(P.t.IwjfxV)
        })]
      }), e ? n.map(e => {
        let {
          id: n,
          name: i,
          description: a,
          icon: o
        } = e;
        return (0, r.jsx)(s.FY, {
          header: i,
          icon: (0, C.N)(t, o),
          description: a
        }, n)
      }) : null]
    })
  })
}

function K(e) {
  let {
    subscription: t,
    currentInvoicePreview: n,
    loadingState: i,
    isDeleted: a,
    isCancelled: s
  } = e;
  return null == n ? null : 0 === i ? (0, r.jsx)("div", {
    className: D.Ji,
    children: (0, r.jsx)(c.D0$, {
      label: P.intl.string(P.t.azZaZa),
      children: (0, r.jsx)(c.y$y, {
        type: c.tVU.PULSING_ELLIPSIS
      })
    })
  }) : 2 === i ? (0, r.jsx)("div", {
    className: D.Ji,
    children: (0, r.jsxs)(c.$Td, {
      color: c.Hv$.DANGER,
      style: {
        borderRadius: 0
      },
      children: [P.intl.format(P.t.IIHUUF, {
        subscriptionId: t.id
      }), (0, r.jsx)("br", {}), P.intl.format(P.t.fh65ES, {
        helpLink: k
      })]
    })
  }) : (0, r.jsx)("div", {
    className: D.Ji,
    children: (0, r.jsx)(c.D0$, {
      label: P.intl.string(P.t.azZaZa),
      children: (0, r.jsx)(y.A, {
        subscription: t,
        currentInvoicePreview: n,
        disabled: a || s
      })
    })
  })
}