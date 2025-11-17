/** Chunk was on web.js **/
/** chunk id: 603270, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => x,
  P: () => L
}), require("./388685.js"), require("./997841.js"), require("./953529.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk241159 = require("./241159.js"),
  Chunk558381 = require("./558381.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk171246 = require("./171246.js"),
  Chunk263519 = require("./263519.js"),
  Chunk592125 = require("./592125.js"),
  Chunk509545 = require("./509545.js"),
  Chunk238 = require("./238.js"),
  Chunk55563 = require("./55563.js"),
  Chunk551428 = require("./551428.js"),
  Chunk626135 = require("./626135.js"),
  Chunk572004 = require("./572004.js"),
  Chunk601911 = require("./601911.js"),
  Chunk504211 = require("./504211.js"),
  Chunk970321 = require("./970321.js"),
  Chunk680005 = require("./680005.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk979007 = require("./979007.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk561498 = require("./561498.js");
let P = (0, Chunk442837.Kb)([Chunk55563.Z, Chunk551428.Z, Chunk509545.Z], {
    getQueryId: Chunk981631.McO.SKU,
    get: e => {
      if (null == e) return;
      let t = E.Z.get(e),
        n = b.Z.getForSKU(e);
      if (null == t || null == n) return;
      let r = m.Z.getForSKU(e);
      return {
        sku: t,
        storeListing: n,
        subscriptionPlan: null != r ? r[0] : true
      }
    },
    load: async e => {
      o()(null != e, "skuId is null"), await (0, u.km)(e)
    }
  }),
  D = (0, Chunk442837.Kb)([Chunk55563.Z], {
    getQueryId: Chunk981631.McO.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
    get: e => {
      var t;
      return null == e ? null : null != (t = E.Z.getParentSKU(e)) ? t : null
    },
    load: async (e, t) => {
      o()(null != e && null != t, "appId is null"), await (0, u.oJ)(t)
    }
  });

function w(e, t) {
  var n, r;
  let {
    data: i
  } = P(e), a = null == i ? true : i.sku, o = null == i ? true : i.subscriptionPlan, s = null == i ? true : i.storeListing, {
    data: l
  } = D(e, null != (r = null == a || null == (n = a.application) ? true : n.id) ? r : null == a ? true : a.applicationId);
  return {
    parentSku: l,
    sku: (null == a ? true : a.applicationId) === t ? a : null,
    storeListing: s,
    subscriptionPlan: o
  }
}

function L(e) {
  let {
    appId: t,
    message: a
  } = e, o = (0, T.R)(t), {
    data: u
  } = (0, d.IX)(t), [_, p, m, E] = (0, s.Wu)([f.Z, g.Z, h.Z], () => {
    var e;
    let n = f.Z.getApplication(t),
      r = null != n ? (0, v.y)(n, 45) : true,
      i = null == (e = h.Z.getBasicChannel(a.channel_id)) ? true : e.guild_id;
    return [g.Z.getStoreLayout(t), g.Z.getFetchStatus(t), i, r]
  }, [t, a.channel_id]);
  i.useEffect(() => {
    p === g.N.NONE && (0, c.k)(t)
  }, [t, p]);
  let b = _.subscriptions.length,
    O = _.otps.length,
    S = i.useMemo(() => b > 0 && O > 0 ? N.intl.formatToPlainString(N.t["jA648+"], {
      subCount: b,
      itemCount: O
    }) : b > 0 ? N.intl.formatToPlainString(N.t.GSfibA, {
      count: b
    }) : O > 0 ? N.intl.formatToPlainString(N.t.j7Go5A, {
      count: O
    }) : N.intl.string(N.t.rMA98g), [O, b]);
  if (!o || null == u) return null;
  let P = () => {
      (0, l.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("77803"), n.e("42124")]).then(n.bind(n, 7225));
        return n => (0, r.jsx)(e, {
          transitionState: n.transitionState,
          onClose: n.onClose,
          appId: t,
          guildId: m
        })
      })
    },
    D = () => {
      P(), y.default.track(A.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
        application_id: t,
        area: "app_icon"
      })
    },
    w = () => {
      P(), y.default.track(A.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
        application_id: t,
        area: "open_store_button"
      })
    },
    L = () => {
      (0, I.X)(t, I.B.STORE_EMBED)
    };
  return (0, r.jsx)(M, {
    appName: u.name,
    title: N.intl.formatToPlainString(N.t.XDRjs5, {
      appName: u.name
    }),
    description: S,
    link: "".concat(location.protocol, "//").concat(location.host).concat(A.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(u.id, C.GlobalDiscoveryAppsSections.STORE)),
    onLinkCopy: L,
    iconSrc: E,
    onIconClick: D,
    children: (0, r.jsx)("div", {
      className: R.openStoreButton,
      children: (0, r.jsx)(l.Button, {
        onClick: w,
        text: N.intl.string(N.t.kRvlKJ)
      })
    })
  })
}

function x(e) {
  var t, a;
  let {
    appId: o,
    skuId: c,
    message: u
  } = e, {
    parentSku: f,
    sku: m,
    subscriptionPlan: g,
    storeListing: E
  } = w(c, o), {
    data: b
  } = (0, d.IX)(null == m ? true : m.applicationId), O = (0, s.e7)([h.Z], () => {
    var e;
    return null == (e = h.Z.getBasicChannel(u.channel_id)) ? true : e.guild_id
  }, [u]), P = i.useMemo(() => null != b ? (0, v.y)(b, 45) : true, [b]), D = (0, T.R)(null != (a = null == b ? true : b.id) ? a : ""), {
    openModal: L,
    subscriptionPurchaseButtonState: x
  } = (0, p.Z)({
    skuId: c,
    initialSubscribeForGuild: O
  });
  if (!D || null == b || null == m) return null;
  let k = m.type === A.epS.SUBSCRIPTION,
    j = !!k && (0, _.KW)(m.flags),
    U = () => {
      (0, l.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("77803"), n.e("42124")]).then(n.bind(n, 7225));
        return t => (0, r.jsx)(e, {
          transitionState: t.transitionState,
          onClose: t.onClose,
          appId: b.id,
          guildId: O
        })
      })
    },
    G = () => {
      (0, l.ZDy)(async () => {
        let e = k ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
          t = k ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
        return n => {
          let i = () => {
            n.onClose(), U()
          };
          return null != e && null != f ? (0, r.jsx)(e, {
            transitionState: n.transitionState,
            appId: b.id,
            skuId: m.id,
            guildId: O,
            subscriptionType: j ? "user" : "guild",
            onClose: n.onClose,
            onHeaderTitleClick: i
          }) : null != t ? (0, r.jsx)(t, {
            transitionState: n.transitionState,
            appId: b.id,
            skuId: c,
            onClose: n.onClose,
            onHeaderTitleClick: i
          }) : null
        }
      })
    },
    B = 12,
    Z = k ? j ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.tBG, {
        size: "custom",
        width: B,
        height: B
      }), " ", N.intl.string(N.t.wnifjC)]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.QTo, {
        size: "custom",
        width: B,
        height: B
      }), " ", N.intl.string(N.t.NRC3ar)]
    }) : null == E || null == (t = E.description) ? true : t.trim();
  "" === Z && (Z = true);
  let F = () => {
      U(), y.default.track(A.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
        application_id: b.id,
        sku_id: m.id,
        area: "app_icon"
      })
    },
    V = () => {
      G(), y.default.track(A.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
        application_id: b.id,
        sku_id: m.id,
        area: "view_details"
      })
    },
    H = () => {
      y.default.track(A.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
        application_id: b.id,
        sku_id: m.id,
        area: "purchase_button"
      })
    },
    Y = () => {
      (0, I.X)(b.id, I.B.SKU_EMBED, c)
    };
  return (0, r.jsx)(M, {
    appName: b.name,
    title: m.name,
    description: Z,
    link: "".concat(location.protocol, "//").concat(location.host).concat(A.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(b.id, C.GlobalDiscoveryAppsSections.STORE)),
    onLinkCopy: Y,
    iconSrc: P,
    onIconClick: F,
    children: (0, r.jsxs)("div", {
      className: R.skuPurchaseButtons,
      children: [(0, r.jsx)(l.Button, {
        variant: "secondary",
        onClick: V,
        text: N.intl.string(N.t.DXYfjO)
      }), k ? null != g ? (0, r.jsx)(S.pV, {
        onClick: L,
        appId: b.id,
        subscriptionType: j ? "user" : "guild",
        skuId: m.id,
        icon: l.EOn,
        onHasClicked: H,
        subscriptionPlan: g,
        state: x
      }) : (0, r.jsx)(l.Button, {
        variant: "primary",
        text: N.intl.string(N.t.uuzaAK),
        onClick: G
      }) : (0, r.jsx)(S.YG, {
        appId: b.id,
        sku: m,
        icon: l.EOn,
        onHasClicked: H
      })]
    })
  })
}

function M(e) {
  let {
    appName: t,
    title: n,
    description: i,
    link: a,
    iconSrc: o,
    onIconClick: s,
    onLinkCopy: c,
    children: u
  } = e;
  return (0, r.jsxs)("div", {
    className: R.wrapper,
    children: [(0, r.jsxs)("div", {
      className: R.header,
      children: [(0, r.jsxs)("div", {
        className: R.headerTitle,
        children: [(0, r.jsx)(l.EOn, {
          size: "xxs"
        }), (0, r.jsx)(l.Text, {
          variant: "eyebrow",
          color: "text-muted",
          children: t
        })]
      }), O.wS && (0, r.jsx)(l.hU, {
        "aria-label": N.intl.string(N.t.WqhZss),
        icon: () => (0, r.jsx)(l.xPt, {
          size: "xs"
        }),
        size: "sm",
        onClick: () => {
          (0, O.JG)(a, () => {
            (0, l.showToast)((0, l.createToast)(N.intl.string(N.t["L/PwZf"]), l.ToastType.SUCCESS)), c()
          })
        },
        variant: "icon-only"
      })]
    }), (0, r.jsxs)("div", {
      className: R.content,
      children: [(0, r.jsxs)("div", {
        className: R.contentTextWrapper,
        children: [null != o && (0, r.jsx)(l.P3F, {
          onClick: s,
          children: (0, r.jsx)("img", {
            src: o.href,
            alt: "",
            className: R.appIcon
          })
        }), (0, r.jsxs)("div", {
          className: R.contentText,
          style: null == i ? {
            justifyContent: "space-evenly"
          } : true,
          children: [(0, r.jsx)(l.Text, {
            variant: "heading-md/semibold",
            tag: "div",
            children: n
          }), null != i && (0, r.jsx)(l.Text, {
            variant: "heading-md/medium",
            color: "text-muted",
            tag: "div",
            className: R.description,
            children: i
          })]
        })]
      }), u]
    })]
  })
}