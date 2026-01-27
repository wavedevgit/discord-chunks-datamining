/** Chunk was on 92917 **/
/** chunk id: 509282, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $: () => R,
  G: () => w
}), require("./896048.js"), require("./938796.js"), require("./228524.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
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
let N = (0, Chunk311907.UT)([Chunk67480.A, Chunk328968.A, Chunk97352.A], {
    getQueryId: Chunk652215.fic.SKU,
    get: e => {
      if (null == e) return;
      let t = b.A.get(e),
        n = A.A.getForSKU(e);
      if (null == t || null == n) return;
      let r = h.A.getForSKU(e);
      return {
        sku: t,
        storeListing: n,
        subscriptionPlan: null != r ? r[0] : true
      }
    },
    load: async e => {
      a()(null != e, "skuId is null"), await (0, u.QB)(e)
    }
  }),
  P = (0, Chunk311907.UT)([Chunk67480.A], {
    getQueryId: Chunk652215.fic.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU,
    get: e => {
      var t;
      return null == e ? null : null != (t = b.A.getParentSKU(e)) ? t : null
    },
    load: async (e, t) => {
      a()(null != e && null != t, "appId is null"), await (0, u.JI)(t)
    }
  });

function w(e) {
  let {
    appId: t,
    message: l
  } = e, a = (0, E.G)(t), {
    data: u
  } = (0, d.YY)(t), [m, f, h, b] = (0, s.yK)([p.A, _.A, g.A], () => {
    var e;
    let n = p.A.getApplication(t),
      r = null != n ? (0, x.A)(n, 45) : true,
      i = null == (e = g.A.getBasicChannel(l.channel_id)) ? true : e.guild_id;
    return [_.A.getStoreLayout(t), _.A.getFetchStatus(t), i, r]
  }, [t, l.channel_id]);
  i.useEffect(() => {
    f === _.N.NONE && (0, c.V)(t)
  }, [t, f]);
  let A = m.subscriptions.length,
    v = m.otps.length,
    j = i.useMemo(() => A > 0 && v > 0 ? S.intl.formatToPlainString(S.t["jA648+"], {
      subCount: A,
      itemCount: v
    }) : A > 0 ? S.intl.formatToPlainString(S.t.GSfibA, {
      count: A
    }) : v > 0 ? S.intl.formatToPlainString(S.t.j7Go5A, {
      count: v
    }) : S.intl.string(S.t.rMA98g), [v, A]);
  if (!a || null == u) return null;
  let N = () => {
    (0, o.mMO)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("33563"), n.e("43245")]).then(n.bind(n, 719847));
      return n => (0, r.jsx)(e, {
        transitionState: n.transitionState,
        onClose: n.onClose,
        appId: t,
        guildId: h
      })
    })
  };
  return (0, r.jsx)(D, {
    appName: u.name,
    title: S.intl.formatToPlainString(S.t.XDRjs5, {
      appName: u.name
    }),
    description: j,
    link: "".concat(location.protocol, "//").concat(location.host).concat(C.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(u.id, I.GlobalDiscoveryAppsSections.STORE)),
    onLinkCopy: () => {
      (0, O.K)(t, O.C.STORE_EMBED)
    },
    iconSrc: b,
    onIconClick: () => {
      N(), y.default.track(C.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
        application_id: t,
        area: "app_icon"
      })
    },
    children: (0, r.jsx)("div", {
      className: T.mZ,
      children: (0, r.jsx)(o.Button, {
        onClick: () => {
          N(), y.default.track(C.HAw.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
            application_id: t,
            area: "open_store_button"
          })
        },
        text: S.intl.string(S.t.kRvlKJ)
      })
    })
  })
}

function R(e) {
  var t, l;
  let {
    appId: a,
    skuId: c,
    message: u
  } = e, {
    parentSku: p,
    sku: h,
    subscriptionPlan: _,
    storeListing: b
  } = function(e, t) {
    var n, r;
    let {
      data: i
    } = N(e), l = null == i ? true : i.sku, a = null == i ? true : i.subscriptionPlan, s = null == i ? true : i.storeListing, {
      data: o
    } = P(e, null != (n = null == l || null == (r = l.application) ? true : r.id) ? n : null == l ? true : l.applicationId);
    return {
      parentSku: o,
      sku: (null == l ? true : l.applicationId) === t ? l : null,
      storeListing: s,
      subscriptionPlan: a
    }
  }(c, a), {
    data: A
  } = (0, d.YY)(null == h ? true : h.applicationId), v = (0, s.bG)([g.A], () => {
    var e;
    return null == (e = g.A.getBasicChannel(u.channel_id)) ? true : e.guild_id
  }, [u]), w = i.useMemo(() => null != A ? (0, x.A)(A, 45) : true, [A]), R = (0, E.G)(null != (t = null == A ? true : A.id) ? t : ""), {
    openModal: L,
    subscriptionPurchaseButtonState: M
  } = (0, f.A)({
    skuId: c,
    initialSubscribeForGuild: v
  });
  if (!R || null == A || null == h) return null;
  let k = h.type === C.Puh.SUBSCRIPTION,
    U = !!k && (0, m.bg)(h.flags),
    G = () => {
      (0, o.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("33563"), n.e("43245")]).then(n.bind(n, 719847));
        return t => (0, r.jsx)(e, {
          transitionState: t.transitionState,
          onClose: t.onClose,
          appId: A.id,
          guildId: v
        })
      })
    },
    B = () => {
      (0, o.mMO)(async () => {
        let e = k ? (await Promise.resolve().then(n.bind(n, 168393))).SubscriptionDetailsModal : null,
          t = k ? null : (await Promise.resolve().then(n.bind(n, 963179))).ItemDetailsModal;
        return n => {
          let i = () => {
            n.onClose(), G()
          };
          return null != e && null != p ? (0, r.jsx)(e, {
            transitionState: n.transitionState,
            appId: A.id,
            skuId: h.id,
            guildId: v,
            subscriptionType: U ? "user" : "guild",
            onClose: n.onClose,
            onHeaderTitleClick: i
          }) : null != t ? (0, r.jsx)(t, {
            transitionState: n.transitionState,
            appId: A.id,
            skuId: c,
            onClose: n.onClose,
            onHeaderTitleClick: i
          }) : null
        }
      })
    },
    F = k ? U ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.nys, {
        size: "custom",
        width: 12,
        height: 12
      }), " ", S.intl.string(S.t.wnifjC)]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.RR9, {
        size: "custom",
        width: 12,
        height: 12
      }), " ", S.intl.string(S.t.NRC3ar)]
    }) : null == b || null == (l = b.description) ? true : l.trim();
  "" === F && (F = true);
  let H = () => {
    y.default.track(C.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
      application_id: A.id,
      sku_id: h.id,
      area: "purchase_button"
    })
  };
  return (0, r.jsx)(D, {
    appName: A.name,
    title: h.name,
    description: F,
    link: "".concat(location.protocol, "//").concat(location.host).concat(C.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(A.id, I.GlobalDiscoveryAppsSections.STORE)),
    onLinkCopy: () => {
      (0, O.K)(A.id, O.C.SKU_EMBED, c)
    },
    iconSrc: w,
    onIconClick: () => {
      G(), y.default.track(C.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
        application_id: A.id,
        sku_id: h.id,
        area: "app_icon"
      })
    },
    children: (0, r.jsxs)("div", {
      className: T.w,
      children: [(0, r.jsx)(o.Button, {
        variant: "secondary",
        onClick: () => {
          B(), y.default.track(C.HAw.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
            application_id: A.id,
            sku_id: h.id,
            area: "view_details"
          })
        },
        text: S.intl.string(S.t.DXYfjO)
      }), k ? null != _ ? (0, r.jsx)(j.rc, {
        onClick: L,
        appId: A.id,
        subscriptionType: U ? "user" : "guild",
        skuId: h.id,
        icon: o.U1X,
        onHasClicked: H,
        subscriptionPlan: _,
        state: M
      }) : (0, r.jsx)(o.Button, {
        variant: "primary",
        text: S.intl.string(S.t.uuzaAK),
        onClick: B
      }) : (0, r.jsx)(j.$P, {
        appId: A.id,
        sku: h,
        icon: o.U1X,
        onHasClicked: H
      })]
    })
  })
}

function D(e) {
  let {
    appName: t,
    title: n,
    description: i,
    link: l,
    iconSrc: a,
    onIconClick: s,
    onLinkCopy: c,
    children: u
  } = e;
  return (0, r.jsxs)("div", {
    className: T.iE,
    children: [(0, r.jsxs)("div", {
      className: T.wx,
      children: [(0, r.jsxs)("div", {
        className: T.qd,
        children: [(0, r.jsx)(o.U1X, {
          size: "xxs"
        }), (0, r.jsx)(o.Text, {
          variant: "eyebrow",
          color: "text-muted",
          children: t
        })]
      }), v.p5 && (0, r.jsx)(o.K0, {
        "aria-label": S.intl.string(S.t.WqhZss),
        icon: () => (0, r.jsx)(o.qYV, {
          size: "xs"
        }),
        size: "sm",
        onClick: () => {
          (0, v.C)(l, () => {
            (0, o.showToast)((0, o.createToast)(S.intl.string(S.t["L/PwZf"]), o.ToastType.SUCCESS)), c()
          })
        },
        variant: "icon-only"
      })]
    }), (0, r.jsxs)("div", {
      className: T.Qs,
      children: [(0, r.jsxs)("div", {
        className: T.oB,
        children: [null != a && (0, r.jsx)(o.DUT, {
          onClick: s,
          children: (0, r.jsx)("img", {
            src: a.href,
            alt: "",
            className: T.Z2
          })
        }), (0, r.jsxs)("div", {
          className: T.Tf,
          style: null == i ? {
            justifyContent: "space-evenly"
          } : true,
          children: [(0, r.jsx)(o.Text, {
            variant: "heading-md/semibold",
            tag: "div",
            children: n
          }), null != i && (0, r.jsx)(o.Text, {
            variant: "heading-md/medium",
            color: "text-muted",
            tag: "div",
            className: T.h_,
            children: i
          })]
        })]
      }), u]
    })]
  })
}