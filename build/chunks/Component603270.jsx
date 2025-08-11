/** Chunk was on web.js **/
/** chunk id: 603270, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => M,
  P: () => x
}), require("./388685.js"), require("./997841.js"), require("./953529.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk241159 = require("./241159.js"),
  Chunk558381 = require("./558381.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk307643 = require("./307643.js"),
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
  Chunk197866 = require("./197866.js");
let w = (0, Chunk442837.Kb)([Chunk55563.Z, Chunk551428.Z, Chunk509545.Z], {
    queryId: e => N.McO.SKU(e),
    get: e => {
      if (null == e) return;
      let t = b.Z.get(e),
        n = y.Z.getForSKU(e);
      if (null == t || null == n) return;
      let r = g.Z.getForSKU(e);
      return {
        sku: t,
        storeListing: n,
        subscriptionPlan: null != r ? r[0] : true
      }
    },
    load: async (e, t) => {
      a()(null != t, "skuId is null"), await (0, u.km)(t)
    },
    useStateHook: Chunk442837.cj
  }),
  D = (0, Chunk442837.Kb)([Chunk55563.Z], {
    queryId: (e, t) => N.McO.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU(t),
    get: e => {
      if (null != e) return b.Z.getParentSKU(e)
    },
    load: async (e, t, n) => {
      a()(null != t && null != n, "appId is null"), await (0, u.oJ)(n)
    },
    useStateHook: Chunk442837.cj
  });

function L(e, t) {
  var n, r;
  let {
    data: i
  } = w(e), o = null == i ? true : i.sku, a = null == i ? true : i.subscriptionPlan, s = null == i ? true : i.storeListing, {
    data: l
  } = D(e, null != (r = null == o || null == (n = o.application) ? true : n.id) ? r : null == o ? true : o.applicationId);
  return {
    parentSku: l,
    sku: (null == o ? true : o.applicationId) === t ? o : null,
    storeListing: s,
    subscriptionPlan: a
  }
}

function x(e) {
  let {
    appId: t,
    message: o
  } = e, a = (0, S.R)(t), [u, d, p, h, g, b, y] = (0, s.Wu)([f.Z, E.Z, m.Z], () => {
    var e;
    let n = f.Z.getApplication(t),
      r = null != n ? (0, I.y)(n, 45) : true,
      i = null == (e = m.Z.getBasicChannel(o.channel_id)) ? true : e.guild_id;
    return [n, f.Z.isFetchingApplication(t), f.Z.didFetchingApplicationFail(t), E.Z.getStoreLayout(t), E.Z.getFetchStatus(t), i, r]
  }, [t, o.channel_id]);
  i.useEffect(() => {
    g === E.N.NONE && (0, c.k)(t), null != u || d || p || (0, _.UM)(t)
  }, [u, t, p, d, g]);
  let v = h.subscriptions.length,
    A = h.otps.length,
    w = i.useMemo(() => v > 0 && A > 0 ? R.intl.formatToPlainString(R.t["jA648/"], {
      subCount: v,
      itemCount: A
    }) : v > 0 ? R.intl.formatToPlainString(R.t.GSfibG, {
      count: v
    }) : A > 0 ? R.intl.formatToPlainString(R.t.j7Go5O, {
      count: A
    }) : R.intl.string(R.t.rMA98v), [A, v]);
  if (!a || null == u) return null;
  let D = () => {
      (0, l.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("77803"), n.e("83372")]).then(n.bind(n, 7225));
        return n => (0, r.jsx)(e, {
          transitionState: n.transitionState,
          onClose: n.onClose,
          appId: t,
          guildId: b
        })
      })
    },
    L = () => {
      D(), O.default.track(N.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
        application_id: t,
        area: "app_icon"
      })
    },
    x = () => {
      D(), O.default.track(N.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
        application_id: t,
        area: "open_store_button"
      })
    },
    M = () => {
      (0, T.X)(t, T.B.STORE_EMBED)
    };
  return (0, r.jsx)(k, {
    appName: u.name,
    title: R.intl.formatToPlainString(R.t.XDRjs7, {
      appName: u.name
    }),
    description: w,
    link: "".concat(location.protocol, "//").concat(location.host).concat(N.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(u.id, C.GlobalDiscoveryAppsSections.STORE)),
    onLinkCopy: M,
    iconSrc: y,
    onIconClick: L,
    children: (0, r.jsx)("div", {
      className: P.openStoreButton,
      children: (0, r.jsx)(l.zxk, {
        onClick: x,
        text: R.intl.string(R.t.kRvlKC)
      })
    })
  })
}

function M(e) {
  var t, o;
  let {
    appId: a,
    skuId: c,
    message: u
  } = e, {
    parentSku: f,
    sku: _,
    subscriptionPlan: g,
    storeListing: E
  } = L(c, a), {
    data: b
  } = (0, d.IX)(null == _ ? true : _.applicationId), y = (0, s.e7)([m.Z], () => {
    var e;
    return null == (e = m.Z.getBasicChannel(u.channel_id)) ? true : e.guild_id
  }, [u]), v = i.useMemo(() => null != b ? (0, I.y)(b, 45) : true, [b]), w = (0, S.R)(null != (o = null == b ? true : b.id) ? o : ""), {
    openModal: D,
    subscriptionPurchaseButtonState: x
  } = (0, h.Z)({
    skuId: c,
    initialSubscribeForGuild: y
  });
  if (!w || null == b || null == _) return null;
  let M = _.type === N.epS.SUBSCRIPTION,
    j = !!M && (0, p.KW)(_.flags),
    U = () => {
      (0, l.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("77803"), n.e("83372")]).then(n.bind(n, 7225));
        return t => (0, r.jsx)(e, {
          transitionState: t.transitionState,
          onClose: t.onClose,
          appId: b.id,
          guildId: y
        })
      })
    },
    G = () => {
      (0, l.ZDy)(async () => {
        let e = M ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
          t = M ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
        return n => {
          let i = () => {
            n.onClose(), U()
          };
          return null != e && null != f ? (0, r.jsx)(e, {
            transitionState: n.transitionState,
            appId: b.id,
            skuId: _.id,
            guildId: y,
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
    Z = M ? j ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.tBG, {
        size: "custom",
        width: B,
        height: B
      }), " ", R.intl.string(R.t.wnifjI)]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.QTo, {
        size: "custom",
        width: B,
        height: B
      }), " ", R.intl.string(R.t.NRC3am)]
    }) : null == E || null == (t = E.description) ? true : t.trim();
  "" === Z && (Z = true);
  let F = () => {
      U(), O.default.track(N.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
        application_id: b.id,
        sku_id: _.id,
        area: "app_icon"
      })
    },
    V = () => {
      G(), O.default.track(N.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
        application_id: b.id,
        sku_id: _.id,
        area: "view_details"
      })
    },
    H = () => {
      O.default.track(N.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
        application_id: b.id,
        sku_id: _.id,
        area: "purchase_button"
      })
    },
    Y = () => {
      (0, T.X)(b.id, T.B.SKU_EMBED, c)
    };
  return (0, r.jsx)(k, {
    appName: b.name,
    title: _.name,
    description: Z,
    link: "".concat(location.protocol, "//").concat(location.host).concat(N.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(b.id, C.GlobalDiscoveryAppsSections.STORE)),
    onLinkCopy: Y,
    iconSrc: v,
    onIconClick: F,
    children: (0, r.jsxs)("div", {
      className: P.skuPurchaseButtons,
      children: [(0, r.jsx)(l.zxk, {
        variant: "secondary",
        onClick: V,
        text: R.intl.string(R.t.DXYfjI)
      }), M ? null != g ? (0, r.jsx)(A.pV, {
        onClick: D,
        appId: b.id,
        subscriptionType: j ? "user" : "guild",
        skuId: _.id,
        icon: l.EOn,
        onHasClicked: H,
        subscriptionPlan: g,
        state: x
      }) : (0, r.jsx)(l.zxk, {
        variant: "primary",
        text: R.intl.string(R.t.uuzaAA),
        onClick: G
      }) : (0, r.jsx)(A.YG, {
        appId: b.id,
        sku: _,
        icon: l.EOn,
        onHasClicked: H
      })]
    })
  })
}

function k(e) {
  let {
    appName: t,
    title: n,
    description: i,
    link: o,
    iconSrc: a,
    onIconClick: s,
    onLinkCopy: c,
    children: u
  } = e;
  return (0, r.jsxs)("div", {
    className: P.wrapper,
    children: [(0, r.jsxs)("div", {
      className: P.header,
      children: [(0, r.jsxs)("div", {
        className: P.headerTitle,
        children: [(0, r.jsx)(l.EOn, {
          size: "xxs"
        }), (0, r.jsx)(l.Text, {
          variant: "eyebrow",
          color: "text-muted",
          children: t
        })]
      }), v.wS && (0, r.jsx)(l.hU, {
        "aria-label": R.intl.string(R.t.WqhZsr),
        icon: () => (0, r.jsx)(l.xPt, {
          size: "xs"
        }),
        size: "sm",
        onClick: () => {
          (0, v.JG)(o, () => {
            (0, l.showToast)((0, l.createToast)(R.intl.string(R.t["L/PwZW"]), l.ToastType.SUCCESS)), c()
          })
        },
        variant: "icon-only"
      })]
    }), (0, r.jsxs)("div", {
      className: P.content,
      children: [(0, r.jsxs)("div", {
        className: P.contentTextWrapper,
        children: [null != a && (0, r.jsx)(l.P3F, {
          onClick: s,
          children: (0, r.jsx)("img", {
            src: a.href,
            alt: "",
            className: P.appIcon
          })
        }), (0, r.jsxs)("div", {
          className: P.contentText,
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
            className: P.description,
            children: i
          })]
        })]
      }), u]
    })]
  })
}