/** Chunk was on 30202 **/
/** chunk id: 301935, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => k,
  Z: () => L
}), require("./388685.js"), require("./953529.js");
var i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk561537 = require("./561537.jsx"),
  Chunk269210 = require("./269210.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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

function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function w(e, t) {
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
var k = ((i = {})[i.LOADING = 0] = "LOADING", i[i.DONE = 1] = "DONE", i[i.ERROR = 2] = "ERROR", i);

function L(e) {
  var t, n, i, l, c;
  let {
    subscription: u,
    navigateToSwitchPlan: h,
    loadingState: f
  } = e, j = null == (t = u.metadata) ? true : t.application_subscription_guild_id, {
    renewalMutations: E,
    planId: I
  } = u, {
    appId: A,
    plan: Z,
    storeListing: w,
    price: k,
    isGuildSubscription: L,
    subscriptionForGuild: H,
    sku: z,
    isCancelled: W,
    renewalPlan: Y
  } = (0, o.cj)([O.Z, v.Z, S.Z, C.Z], () => {
    let e, t = O.Z.get(I),
      n = null != t ? v.Z.get(t.skuId) : true,
      i = null == n ? true : n.applicationId,
      r = null != t ? S.Z.getForSKU(t.skuId) : null,
      s = null != t ? (0, T.og)((0, T.T4)(t.price, t.currency), t.interval, t.intervalCount) : null,
      a = null != r && (0, N.KK)(r.skuFlags),
      l = a && null != j ? C.Z.getGuild(j) : true,
      o = (0, N.Jf)(u, n);
    if (false === o && null != E && E.items.length > 0) {
      var c;
      let t = E.items[0];
      e = null != (c = O.Z.get(t.planId)) ? c : true
    }
    return {
      appId: i,
      isGuildSubscription: a,
      plan: t,
      price: s,
      sku: n,
      storeListing: r,
      subscriptionForGuild: l,
      isCancelled: o,
      renewalPlan: e
    }
  }, [j, I, E, u]), {
    data: K
  } = (0, b.IX)(A), q = s.useMemo(() => null != K ? (0, g.y)(K, 100) : null, [K]), X = null != (n = null == z ? true : z.deleted) && n, J = null != z && (0, N.OL)(z), Q = u.status === P.O0b.PAST_DUE, {
    analyticsLocations: $
  } = (0, p.ZP)(), [ee, et] = (0, _.ED)({
    subscriptionId: u.id,
    renewal: true,
    analyticsLocations: $,
    analyticsLocation: m.Z.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE
  }), en = (null == et ? true : et.code) === 100062 && null != j && null == H, ei = (0, y.p)(u.currentPeriodEnd), er = 0 === f;
  return (0, r.jsxs)(a.l, {
    headerClassName: D.headerWrapper,
    header: false === er ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: D.headerContent,
        children: [null != q && (0, r.jsx)(d.Eep, {
          src: q.href,
          imageClassName: D.appIcon,
          width: 40,
          height: 40
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(d.X6q, {
            variant: "heading-md/semibold",
            children: null != (i = null == K ? true : K.name) ? i : R.intl.string(R.t["7kqy7e"])
          }), (0, r.jsx)(d.Text, {
            variant: "text-sm/medium",
            color: "header-secondary",
            children: null != (l = null == Z ? true : Z.name) ? l : R.intl.string(R.t.sqkbMD)
          })]
        })]
      }), (0, r.jsx)("div", {
        className: D.headerButtons,
        children: null != K && null != w && null != z && false === en && (0, r.jsx)(V, {
          subscription: u,
          app: K,
          sku: z,
          storeListing: w,
          isCancelled: W,
          navigateToSwitchPlan: h,
          renewalSkuId: null == Y ? true : Y.skuId
        })
      })]
    }) : (0, r.jsx)(d.$jN, {
      type: d.RAz.PULSING_ELLIPSIS
    }),
    children: [W && (0, r.jsx)(U, {
      type: "warning",
      title: J ? R.intl.formatToPlainString(R.t.QOnM19, {
        subscriptionPeriodEnd: ei
      }) : R.intl.formatToPlainString(R.t.HOaZu7, {
        subscriptionPeriodEnd: ei
      })
    }), en && (0, r.jsx)(U, {
      type: "warning",
      title: R.intl.formatToPlainString(R.t.HOaZu7, {
        subscriptionPeriodEnd: ei
      })
    }), Q && (0, r.jsx)(U, {
      type: "danger",
      title: R.intl.string(R.t.fvOqBg)
    }), (0, r.jsxs)("div", {
      className: D.details,
      children: [(0, r.jsx)(M, {
        title: R.intl.string(R.t["5D/KEB"]),
        content: L ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsxs)("span", {
            className: D.subscriptionTypeRow,
            children: [(0, r.jsx)(d.QTo, {
              size: "xs"
            }), R.intl.string(R.t.QjL3vr)]
          }), null != H && (0, r.jsxs)("span", {
            className: D.guildSubscriptionContentRow,
            children: [(0, r.jsx)(d.Text, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: R.intl.format(R.t["7ZD8p6"], {
                guildName: H.name
              })
            }), (0, r.jsx)(x.Z, {
              guild: H,
              size: x.Z.Sizes.MINI
            })]
          })]
        }) : (0, r.jsxs)("span", {
          className: D.subscriptionTypeRow,
          children: [(0, r.jsx)(d.tBG, {
            size: "xs"
          }), R.intl.string(R.t["6anEVl"])]
        })
      }), null != k && (0, r.jsx)(M, {
        title: R.intl.string(R.t.KI7ER0),
        content: k
      }), (0, r.jsx)(M, {
        title: R.intl.string(R.t.dnUzb2),
        content: (0, y.p)(null != (c = u.createdAt) ? c : u.currentPeriodStart)
      }), (0, r.jsx)(B, {
        isCancelled: W,
        subscriptionPeriodEnd: ei,
        renewalPlan: Y
      })]
    }), (0, r.jsx)(F, {
      subscription: u,
      currentInvoicePreview: ee,
      loadingState: f,
      isDeleted: X,
      isCancelled: W
    }), null != K && (null == w ? true : w.benefits) != null && w.benefits.length > 0 && (0, r.jsx)(G, {
      appId: K.id,
      listingBenefits: w.benefits
    })]
  })
}

function B(e) {
  let {
    isCancelled: t,
    subscriptionPeriodEnd: n,
    renewalPlan: i
  } = e;
  if (null != i) {
    let e = (0, T.og)((0, T.T4)(i.price, i.currency), i.interval, i.intervalCount);
    return (0, r.jsx)(M, {
      title: R.intl.string(R.t.hIhAMz),
      content: (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.Text, {
          variant: "text-sm/medium",
          children: n
        }), (0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          children: R.intl.format(R.t.MCLbvr, {
            planName: i.name,
            price: e
          })
        })]
      })
    })
  }
  return (0, r.jsx)(M, {
    title: t ? R.intl.string(R.t.enxcAg) : R.intl.string(R.t["Ms+6Zm"]),
    content: n
  })
}

function M(e) {
  let {
    title: t,
    content: n
  } = e;
  return (0, r.jsxs)("div", {
    className: D.row,
    children: [(0, r.jsx)(d.Text, {
      variant: "text-sm/medium",
      children: t
    }), (0, r.jsx)(d.Text, {
      variant: "text-sm/medium",
      className: D.rowContent,
      children: n
    })]
  })
}

function U(e) {
  let {
    type: t,
    title: n
  } = e;
  return (0, r.jsx)(d.Wn, {
    messageType: "warning" === t ? d.QYI.WARNING : d.QYI.ERROR,
    className: D.noticeBanner,
    children: (0, r.jsx)(d.Text, {
      variant: "text-sm/normal",
      children: n
    })
  })
}

function V(e) {
  let {
    app: t,
    storeListing: i,
    sku: a,
    subscription: l,
    isCancelled: m,
    guild: g,
    renewalSkuId: f,
    navigateToSwitchPlan: b
  } = e, x = (0, N.OL)(a), {
    analyticsLocations: _
  } = (0, p.ZP)(), [j, C] = s.useState(false), O = (0, h.q)(t.id), S = (0, o.e7)([v.Z], () => v.Z.getParentSKU(i.skuId), [i.skuId]), T = s.useMemo(() => null == S ? [] : (0, A.$)(i.id, S, O.subscriptions), [i.id, O, S]), I = 0 !== T.length, y = async () => {
    try {
      C(true);
      let {
        subscription: e
      } = await (0, u.pl)(l, _);
      if (null == e) return;
      (0, d.ZDy)(async () => {
        let {
          default: t
        } = await n.e("18879").then(n.bind(n, 389262));
        return n => (0, r.jsx)(t, w(Z({}, n), {
          storeListing: i,
          subscription: E.Z.createFromServer(e)
        }))
      })
    } finally {
      C(false)
    }
  };
  return (0, r.jsxs)("div", {
    className: D.managementBtns,
    children: [x ? null : m ? (0, r.jsx)(d.zxk, {
      variant: "secondary",
      size: "sm",
      text: R.intl.string(R.t.QtMnkZ),
      onClick: y,
      loading: j
    }) : (0, r.jsx)(c.zx, {
      color: c.zx.Colors.CUSTOM,
      size: c.zx.Sizes.SMALL,
      className: D.secondaryBtn,
      onClick: () => {
        (0, d.ZDy)(async () => {
          let {
            default: e
          } = await n.e("6284").then(n.bind(n, 257514));
          return n => (0, r.jsx)(e, w(Z({}, n), {
            application: t,
            storeListing: i,
            subscription: l,
            guild: g
          }))
        })
      },
      children: R.intl.string(R.t["E8G/tr"])
    }), I && null != S && false === m && (0, r.jsx)(d.zxk, {
      variant: "primary",
      size: "sm",
      text: R.intl.string(R.t.R74ZBQ),
      onClick: () => {
        b({
          currentSubscription: l,
          alternativeListings: T,
          app: t,
          subscriptionGroup: S,
          currentListing: i,
          renewalSkuId: f
        })
      }
    })]
  })
}

function G(e) {
  let {
    appId: t,
    listingBenefits: n
  } = e;
  return (0, r.jsx)(f.Z, {
    children: e => (0, r.jsxs)("div", {
      className: D.benefits,
      children: [(0, r.jsxs)("div", {
        className: D.benefitsHeader,
        children: [e && (0, r.jsx)(d.Text, {
          variant: "text-sm/semibold",
          children: R.intl.string(R.t["mORL6+"])
        }), (0, r.jsx)(f.Z.Toggle, {
          className: D.benefitsBtn,
          text: e ? R.intl.string(R.t.gsbFAw) : R.intl.string(R.t.Iwjfxc)
        })]
      }), e ? n.map(e => {
        let {
          id: n,
          name: i,
          description: s,
          icon: a
        } = e;
        return (0, r.jsx)(l.Gm, {
          header: i,
          icon: (0, I.n)(t, a),
          description: s
        }, n)
      }) : null]
    })
  })
}

function F(e) {
  let {
    subscription: t,
    currentInvoicePreview: n,
    loadingState: i,
    isDeleted: s,
    isCancelled: a
  } = e;
  return null == n ? null : 0 === i ? (0, r.jsxs)("div", {
    className: D.payment,
    children: [(0, r.jsx)(d.vwX, {
      children: R.intl.string(R.t.azZaZW)
    }), (0, r.jsx)(d.$jN, {
      type: d.RAz.PULSING_ELLIPSIS
    })]
  }) : 2 === i ? (0, r.jsx)("div", {
    className: D.payment,
    children: (0, r.jsxs)(d.qXd, {
      color: d.DM8.DANGER,
      style: {
        borderRadius: 0
      },
      children: [R.intl.format(R.t.IIHUUF, {
        subscriptionId: t.id
      }), (0, r.jsx)("br", {}), R.intl.format(R.t.fh65ER, {
        helpLink: "https://support.discord.com/hc/en-us"
      })]
    })
  }) : (0, r.jsxs)("div", {
    className: D.payment,
    children: [(0, r.jsx)(d.vwX, {
      children: R.intl.string(R.t.azZaZW)
    }), (0, r.jsx)(j.Z, {
      subscription: t,
      currentInvoicePreview: n,
      disabled: s || a
    })]
  })
}