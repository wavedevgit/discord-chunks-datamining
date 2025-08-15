/** Chunk was on 66866 **/
/** chunk id: 603270, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  F: () => R,
  P: () => Z
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
  Chunk561498 = require("./561498.js");
let A = (0, Chunk442837.Kb)([Chunk55563.Z, Chunk551428.Z, Chunk509545.Z], {
    queryId: e => S.McO.SKU(e),
    get: e => {
      if (null == e) return;
      let t = E.Z.get(e),
        n = C.Z.getForSKU(e);
      if (null == t || null == n) return;
      let r = h.Z.getForSKU(e);
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
  w = (0, Chunk442837.Kb)([Chunk55563.Z], {
    queryId: (e, t) => S.McO.__DO_NOT_USE__STOREFRONT_MESSAGE_EMBED_PARENT_SKU(t),
    get: e => {
      if (null != e) return E.Z.getParentSKU(e)
    },
    load: async (e, t, n) => {
      a()(null != t && null != n, "appId is null"), await (0, u.oJ)(n)
    },
    useStateHook: Chunk442837.cj
  });

function Z(e) {
  let {
    appId: t,
    message: l
  } = e, a = (0, j.R)(t), [u, d, f, _, h, E, C] = (0, o.Wu)([p.Z, b.Z, g.Z], () => {
    var e;
    let n = p.Z.getApplication(t),
      r = null != n ? (0, y.y)(n, 45) : true,
      i = null == (e = g.Z.getBasicChannel(l.channel_id)) ? true : e.guild_id;
    return [n, p.Z.isFetchingApplication(t), p.Z.didFetchingApplicationFail(t), b.Z.getStoreLayout(t), b.Z.getFetchStatus(t), i, r]
  }, [t, l.channel_id]);
  i.useEffect(() => {
    h === b.N.NONE && (0, c.k)(t), null != u || d || f || (0, m.UM)(t)
  }, [u, t, f, d, h]);
  let O = _.subscriptions.length,
    I = _.otps.length,
    A = i.useMemo(() => O > 0 && I > 0 ? P.intl.formatToPlainString(P.t["jA648/"], {
      subCount: O,
      itemCount: I
    }) : O > 0 ? P.intl.formatToPlainString(P.t.GSfibG, {
      count: O
    }) : I > 0 ? P.intl.formatToPlainString(P.t.j7Go5O, {
      count: I
    }) : P.intl.string(P.t.rMA98v), [I, O]);
  if (!a || null == u) return null;
  let w = () => {
    (0, s.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("77803"), n.e("18992")]).then(n.bind(n, 7225));
      return n => (0, r.jsx)(e, {
        transitionState: n.transitionState,
        onClose: n.onClose,
        appId: t,
        guildId: E
      })
    })
  };
  return (0, r.jsx)(L, {
    appName: u.name,
    title: P.intl.formatToPlainString(P.t.XDRjs7, {
      appName: u.name
    }),
    description: A,
    link: "".concat(location.protocol, "//").concat(location.host).concat(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(u.id, T.GlobalDiscoveryAppsSections.STORE)),
    onLinkCopy: () => {
      (0, x.X)(t, x.B.STORE_EMBED)
    },
    iconSrc: C,
    onIconClick: () => {
      w(), v.default.track(S.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
        application_id: t,
        area: "app_icon"
      })
    },
    children: (0, r.jsx)("div", {
      className: N.openStoreButton,
      children: (0, r.jsx)(s.zxk, {
        onClick: () => {
          w(), v.default.track(S.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
            application_id: t,
            area: "open_store_button"
          })
        },
        text: P.intl.string(P.t.kRvlKC)
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
    sku: m,
    subscriptionPlan: h,
    storeListing: b
  } = function(e, t) {
    var n, r;
    let {
      data: i
    } = A(e), l = null == i ? true : i.sku, a = null == i ? true : i.subscriptionPlan, o = null == i ? true : i.storeListing, {
      data: s
    } = w(e, null != (r = null == l || null == (n = l.application) ? true : n.id) ? r : null == l ? true : l.applicationId);
    return {
      parentSku: s,
      sku: (null == l ? true : l.applicationId) === t ? l : null,
      storeListing: o,
      subscriptionPlan: a
    }
  }(c, a), {
    data: E
  } = (0, d.IX)(null == m ? true : m.applicationId), C = (0, o.e7)([g.Z], () => {
    var e;
    return null == (e = g.Z.getBasicChannel(u.channel_id)) ? true : e.guild_id
  }, [u]), O = i.useMemo(() => null != E ? (0, y.y)(E, 45) : true, [E]), Z = (0, j.R)(null != (l = null == E ? true : E.id) ? l : ""), {
    openModal: R,
    subscriptionPurchaseButtonState: D
  } = (0, _.Z)({
    skuId: c,
    initialSubscribeForGuild: C
  });
  if (!Z || null == E || null == m) return null;
  let M = m.type === S.epS.SUBSCRIPTION,
    k = !!M && (0, f.KW)(m.flags),
    U = () => {
      (0, s.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("77803"), n.e("18992")]).then(n.bind(n, 7225));
        return t => (0, r.jsx)(e, {
          transitionState: t.transitionState,
          onClose: t.onClose,
          appId: E.id,
          guildId: C
        })
      })
    },
    F = () => {
      (0, s.ZDy)(async () => {
        let e = M ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
          t = M ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
        return n => {
          let i = () => {
            n.onClose(), U()
          };
          return null != e && null != p ? (0, r.jsx)(e, {
            transitionState: n.transitionState,
            appId: E.id,
            skuId: m.id,
            guildId: C,
            subscriptionType: k ? "user" : "guild",
            onClose: n.onClose,
            onHeaderTitleClick: i
          }) : null != t ? (0, r.jsx)(t, {
            transitionState: n.transitionState,
            appId: E.id,
            skuId: c,
            onClose: n.onClose,
            onHeaderTitleClick: i
          }) : null
        }
      })
    },
    B = M ? k ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.tBG, {
        size: "custom",
        width: 12,
        height: 12
      }), " ", P.intl.string(P.t.wnifjI)]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.QTo, {
        size: "custom",
        width: 12,
        height: 12
      }), " ", P.intl.string(P.t.NRC3am)]
    }) : null == b || null == (t = b.description) ? true : t.trim();
  "" === B && (B = true);
  let G = () => {
    v.default.track(S.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
      application_id: E.id,
      sku_id: m.id,
      area: "purchase_button"
    })
  };
  return (0, r.jsx)(L, {
    appName: E.name,
    title: m.name,
    description: B,
    link: "".concat(location.protocol, "//").concat(location.host).concat(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(E.id, T.GlobalDiscoveryAppsSections.STORE)),
    onLinkCopy: () => {
      (0, x.X)(E.id, x.B.SKU_EMBED, c)
    },
    iconSrc: O,
    onIconClick: () => {
      U(), v.default.track(S.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
        application_id: E.id,
        sku_id: m.id,
        area: "app_icon"
      })
    },
    children: (0, r.jsxs)("div", {
      className: N.skuPurchaseButtons,
      children: [(0, r.jsx)(s.zxk, {
        variant: "secondary",
        onClick: () => {
          F(), v.default.track(S.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
            application_id: E.id,
            sku_id: m.id,
            area: "view_details"
          })
        },
        text: P.intl.string(P.t.DXYfjI)
      }), M ? null != h ? (0, r.jsx)(I.pV, {
        onClick: R,
        appId: E.id,
        subscriptionType: k ? "user" : "guild",
        skuId: m.id,
        icon: s.EOn,
        onHasClicked: G,
        subscriptionPlan: h,
        state: D
      }) : (0, r.jsx)(s.zxk, {
        variant: "primary",
        text: P.intl.string(P.t.uuzaAA),
        onClick: F
      }) : (0, r.jsx)(I.YG, {
        appId: E.id,
        sku: m,
        icon: s.EOn,
        onHasClicked: G
      })]
    })
  })
}

function L(e) {
  let {
    appName: t,
    title: n,
    description: i,
    link: l,
    iconSrc: a,
    onIconClick: o,
    onLinkCopy: c,
    children: u
  } = e;
  return (0, r.jsxs)("div", {
    className: N.wrapper,
    children: [(0, r.jsxs)("div", {
      className: N.header,
      children: [(0, r.jsxs)("div", {
        className: N.headerTitle,
        children: [(0, r.jsx)(s.EOn, {
          size: "xxs"
        }), (0, r.jsx)(s.Text, {
          variant: "eyebrow",
          color: "text-muted",
          children: t
        })]
      }), O.wS && (0, r.jsx)(s.hU, {
        "aria-label": P.intl.string(P.t.WqhZsr),
        icon: () => (0, r.jsx)(s.xPt, {
          size: "xs"
        }),
        size: "sm",
        onClick: () => {
          (0, O.JG)(l, () => {
            (0, s.showToast)((0, s.createToast)(P.intl.string(P.t["L/PwZW"]), s.ToastType.SUCCESS)), c()
          })
        },
        variant: "icon-only"
      })]
    }), (0, r.jsxs)("div", {
      className: N.content,
      children: [(0, r.jsxs)("div", {
        className: N.contentTextWrapper,
        children: [null != a && (0, r.jsx)(s.P3F, {
          onClick: o,
          children: (0, r.jsx)("img", {
            src: a.href,
            alt: "",
            className: N.appIcon
          })
        }), (0, r.jsxs)("div", {
          className: N.contentText,
          style: null == i ? {
            justifyContent: "space-evenly"
          } : true,
          children: [(0, r.jsx)(s.Text, {
            variant: "heading-md/semibold",
            tag: "div",
            children: n
          }), null != i && (0, r.jsx)(s.Text, {
            variant: "heading-md/medium",
            color: "text-muted",
            tag: "div",
            className: N.description,
            children: i
          })]
        })]
      }), u]
    })]
  })
}