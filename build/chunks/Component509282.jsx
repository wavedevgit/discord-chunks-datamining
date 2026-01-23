/** Chunk was on web.js **/
/** chunk id: 509282, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => L,
  G: () => x
}), require("./896048.js"), require("./938796.js"), require("./228524.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk996759 = require("./996759.js"),
  Chunk800342 = require("./800342.js"),
  Chunk627363 = require("./627363.js"),
  Chunk587895 = require("./587895.js"),
  Chunk163437 = require("./163437.js"),
  Chunk185438 = require("./185438.js"),
  Chunk734057 = require("./734057.js"),
  Chunk97352 = require("./97352.js"),
  Chunk31455 = require("./31455.js"),
  Chunk67480 = require("./67480.js"),
  Chunk328968 = require("./328968.js"),
  Chunk954571 = require("./954571.js"),
  Chunk957565 = require("./957565.js"),
  Chunk943775 = require("./943775.js"),
  Chunk997997 = require("./997997.js"),
  Chunk658575 = require("./658575.js"),
  Chunk376374 = require("./376374.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk435220 = require("./435220.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk159740 = require("./159740.js");
let R = (0, Chunk311907.UT)([Chunk67480.A, Chunk328968.A, Chunk97352.A], {
    getQueryId: Chunk652215.fic.SKU,
    get: e => {
      if (null == e) return;
      let t = E.A.get(e),
        n = y.A.getForSKU(e);
      if (null == t || null == n) return;
      let r = m.A.getForSKU(e);
      return {
        sku: t,
        storeListing: n,
        subscriptionPlan: null != r ? r[0] : true
      }
    },
    load: async e => {
      s()(null != e, "skuId is null"), await (0, u.QB)(e)
    }
  }),
  P = (0, Chunk311907.UT)([Chunk67480.A], {
    getQueryId: Chunk652215.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
    get: e => {
      var t;
      return null == e ? null : null != (t = E.A.getParentSKU(e)) ? t : null
    },
    load: async (e, t) => {
      s()(null != e && null != t, "appId is null"), await (0, u.JI)(t)
    }
  });

function D(e, t) {
  var n, r;
  let {
    data: i
  } = R(e), a = null == i ? true : i.sku, s = null == i ? true : i.subscriptionPlan, o = null == i ? true : i.storeListing, {
    data: l
  } = P(e, null != (n = null == a || null == (r = a.application) ? true : r.id) ? n : null == a ? true : a.applicationId);
  return {
    parentSku: l,
    sku: (null == a ? true : a.applicationId) === t ? a : null,
    storeListing: o,
    subscriptionPlan: s
  }
}

function x(e) {
  let {
    appId: t,
    message: a
  } = e, s = (0, I.G)(t), {
    data: u
  } = (0, d.YY)(t), [p, _, m, E] = (0, o.yK)([f.A, g.A, h.A], () => {
    var e;
    let n = f.A.getApplication(t),
      r = null != n ? (0, v.A)(n, 45) : true,
      i = null == (e = h.A.getBasicChannel(a.channel_id)) ? true : e.guild_id;
    return [g.A.getStoreLayout(t), g.A.getFetchStatus(t), i, r]
  }, [t, a.channel_id]);
  i.useEffect(() => {
    _ === g.N.NONE && (0, c.V)(t)
  }, [t, _]);
  let y = p.subscriptions.length,
    O = p.otps.length,
    S = i.useMemo(() => y > 0 && O > 0 ? N.intl.formatToPlainString(N.t["jA648+"], {
      subCount: y,
      itemCount: O
    }) : y > 0 ? N.intl.formatToPlainString(N.t.GSfibA, {
      count: y
    }) : O > 0 ? N.intl.formatToPlainString(N.t.j7Go5A, {
      count: O
    }) : N.intl.string(N.t.rMA98g), [O, y]);
  if (!s || null == u) return null;
  let R = () => {
      (0, l.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("33563"), n.e("80212")]).then(n.bind(n, 719847));
        return n => (0, r.jsx)(e, {
          transitionState: n.transitionState,
          onClose: n.onClose,
          appId: t,
          guildId: m
        })
      })
    },
    P = () => {
      R(), b.default.track(T.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
        application_id: t,
        area: "app_icon"
      })
    },
    D = () => {
      R(), b.default.track(T.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
        application_id: t,
        area: "open_store_button"
      })
    },
    x = () => {
      (0, A.K)(t, A.C.STORE_EMBED)
    };
  return (0, r.jsx)(j, {
    appName: u.name,
    title: N.intl.formatToPlainString(N.t.XDRjs5, {
      appName: u.name
    }),
    description: S,
    link: "".concat(location.protocol, "//").concat(location.host).concat(T.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(u.id, C.GlobalDiscoveryAppsSections.STORE)),
    onLinkCopy: x,
    iconSrc: E,
    onIconClick: P,
    children: (0, r.jsx)("div", {
      className: w.mZ,
      children: (0, r.jsx)(l.Button, {
        onClick: D,
        text: N.intl.string(N.t.kRvlKJ)
      })
    })
  })
}

function L(e) {
  var t, a;
  let {
    appId: s,
    skuId: c,
    message: u
  } = e, {
    parentSku: f,
    sku: m,
    subscriptionPlan: g,
    storeListing: E
  } = D(c, s), {
    data: y
  } = (0, d.YY)(null == m ? true : m.applicationId), O = (0, o.bG)([h.A], () => {
    var e;
    return null == (e = h.A.getBasicChannel(u.channel_id)) ? true : e.guild_id
  }, [u]), R = i.useMemo(() => null != y ? (0, v.A)(y, 45) : true, [y]), P = (0, I.G)(null != (t = null == y ? true : y.id) ? t : ""), {
    openModal: x,
    subscriptionPurchaseButtonState: L
  } = (0, _.A)({
    skuId: c,
    initialSubscribeForGuild: O
  });
  if (!P || null == y || null == m) return null;
  let M = m.type === T.Puh.SUBSCRIPTION,
    k = !!M && (0, p.bg)(m.flags),
    U = () => {
      (0, l.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("33563"), n.e("80212")]).then(n.bind(n, 719847));
        return t => (0, r.jsx)(e, {
          transitionState: t.transitionState,
          onClose: t.onClose,
          appId: y.id,
          guildId: O
        })
      })
    },
    G = () => {
      (0, l.mMO)(async () => {
        let e = M ? (await Promise.resolve().then(n.bind(n, 168393))).SubscriptionDetailsModal : null,
          t = M ? null : (await Promise.resolve().then(n.bind(n, 963179))).ItemDetailsModal;
        return n => {
          let i = () => {
            n.onClose(), U()
          };
          return null != e && null != f ? (0, r.jsx)(e, {
            transitionState: n.transitionState,
            appId: y.id,
            skuId: m.id,
            guildId: O,
            subscriptionType: k ? "user" : "guild",
            onClose: n.onClose,
            onHeaderTitleClick: i
          }) : null != t ? (0, r.jsx)(t, {
            transitionState: n.transitionState,
            appId: y.id,
            skuId: c,
            onClose: n.onClose,
            onHeaderTitleClick: i
          }) : null
        }
      })
    },
    V = 12,
    F = M ? k ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.nys, {
        size: "custom",
        width: V,
        height: V
      }), " ", N.intl.string(N.t.wnifjC)]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.RR9, {
        size: "custom",
        width: V,
        height: V
      }), " ", N.intl.string(N.t.NRC3ar)]
    }) : null == E || null == (a = E.description) ? true : a.trim();
  "" === F && (F = true);
  let B = () => {
      U(), b.default.track(T.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
        application_id: y.id,
        sku_id: m.id,
        area: "app_icon"
      })
    },
    H = () => {
      G(), b.default.track(T.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
        application_id: y.id,
        sku_id: m.id,
        area: "view_details"
      })
    },
    Y = () => {
      b.default.track(T.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
        application_id: y.id,
        sku_id: m.id,
        area: "purchase_button"
      })
    },
    W = () => {
      (0, A.K)(y.id, A.C.SKU_EMBED, c)
    };
  return (0, r.jsx)(j, {
    appName: y.name,
    title: m.name,
    description: F,
    link: "".concat(location.protocol, "//").concat(location.host).concat(T.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(y.id, C.GlobalDiscoveryAppsSections.STORE)),
    onLinkCopy: W,
    iconSrc: R,
    onIconClick: B,
    children: (0, r.jsxs)("div", {
      className: w.w,
      children: [(0, r.jsx)(l.Button, {
        variant: "secondary",
        onClick: H,
        text: N.intl.string(N.t.DXYfjO)
      }), M ? null != g ? (0, r.jsx)(S.rc, {
        onClick: x,
        appId: y.id,
        subscriptionType: k ? "user" : "guild",
        skuId: m.id,
        icon: l.U1X,
        onHasClicked: Y,
        subscriptionPlan: g,
        state: L
      }) : (0, r.jsx)(l.Button, {
        variant: "primary",
        text: N.intl.string(N.t.uuzaAK),
        onClick: G
      }) : (0, r.jsx)(S.$P, {
        appId: y.id,
        sku: m,
        icon: l.U1X,
        onHasClicked: Y
      })]
    })
  })
}

function j(e) {
  let {
    appName: t,
    title: n,
    description: i,
    link: a,
    iconSrc: s,
    onIconClick: o,
    onLinkCopy: c,
    children: u
  } = e;
  return (0, r.jsxs)("div", {
    className: w.iE,
    children: [(0, r.jsxs)("div", {
      className: w.wx,
      children: [(0, r.jsxs)("div", {
        className: w.qd,
        children: [(0, r.jsx)(l.U1X, {
          size: "xxs"
        }), (0, r.jsx)(l.Text, {
          variant: "eyebrow",
          color: "text-muted",
          children: t
        })]
      }), O.p5 && (0, r.jsx)(l.K0, {
        "aria-label": N.intl.string(N.t.WqhZss),
        icon: () => (0, r.jsx)(l.qYV, {
          size: "xs"
        }),
        size: "sm",
        onClick: () => {
          (0, O.C)(a, () => {
            (0, l.showToast)((0, l.createToast)(N.intl.string(N.t["L/PwZf"]), l.ToastType.SUCCESS)), c()
          })
        },
        variant: "icon-only"
      })]
    }), (0, r.jsxs)("div", {
      className: w.Qs,
      children: [(0, r.jsxs)("div", {
        className: w.oB,
        children: [null != s && (0, r.jsx)(l.DUT, {
          onClick: o,
          children: (0, r.jsx)("img", {
            src: s.href,
            alt: "",
            className: w.Z2
          })
        }), (0, r.jsxs)("div", {
          className: w.Tf,
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
            className: w.h_,
            children: i
          })]
        })]
      }), u]
    })]
  })
}