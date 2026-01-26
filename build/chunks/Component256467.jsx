/** Chunk was on 78870 **/
/** chunk id: 256467, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => U
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk139286 = require("./139286.js"),
  Chunk465932 = require("./465932.js"),
  Chunk142120 = require("./142120.js"),
  Chunk495066 = require("./495066.jsx"),
  Chunk854018 = require("./854018.jsx"),
  Chunk742589 = require("./742589.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk722888 = require("./722888.js"),
  Chunk683271 = require("./683271.js"),
  Chunk558060 = require("./558060.jsx"),
  Chunk381969 = require("./381969.jsx"),
  Chunk920814 = require("./920814.js"),
  Chunk638964 = require("./638964.jsx"),
  Chunk422373 = require("./422373.jsx"),
  Chunk812136 = require("./812136.jsx"),
  Chunk398828 = require("./398828.jsx"),
  Chunk46623 = require("./46623.jsx"),
  Chunk43136 = require("./43136.jsx"),
  Chunk575926 = require("./575926.jsx"),
  Chunk284683 = require("./284683.js"),
  Chunk746080 = require("./746080.js"),
  Chunk412728 = require("./412728.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk86719 = require("./86719.js"),
  Chunk638990 = require("./638990.js");

function T(e) {
  var t;
  let {
    guildId: r,
    productId: i
  } = e, {
    loaded: o,
    subscriptionsSettings: l
  } = (0, g.G)(r), s = (0, c.bG)([O.A], () => O.A.getGuild(r)), {
    selectedTab: a,
    isPhantomPreview: u,
    categoryTabs: p
  } = (0, x.k)(), f = !o || null == l;
  return null == s || !u && f ? (0, n.jsx)(d.y$y, {}) : (0, n.jsx)(y.default, {
    defaultSortOption: null != (t = null == l ? true : l.store_page_guild_products_default_sort) ? t : D.p$.NAME,
    children: (0, n.jsxs)("div", {
      className: N.hQ,
      children: [(0, n.jsx)(I.A, {
        guild: s,
        subscriptionsSettings: l
      }), (0, n.jsx)(d.hKd, {
        size: 32
      }), p.length > 0 && (0, n.jsx)(w.F, {
        guild: s
      }), (0, n.jsxs)("div", {
        className: N.v_,
        children: [(0, n.jsx)(d.hKd, {
          size: 32
        }), u && (0, n.jsx)(P.A, {
          guildId: r
        }), a === m.B.GUILD_PRODUCTS && (0, n.jsx)(v.h, {
          guildId: r,
          productId: i
        }), a === m.B.GUILD_ROLE_SUBSCRIPTIONS && (0, n.jsx)(_.A, {
          guildId: r
        })]
      })]
    })
  })
}

function V(e) {
  let {
    guildId: t,
    productId: r
  } = e, o = (0, c.bG)([f.A], () => f.A.isConnected()), g = (0, c.bG)([O.A], () => O.A.getGuild(t)), {
    shouldHideGuildPurchaseEntryPoints: y,
    restrictionsLoading: m
  } = (0, p.MH)(t), {
    selectedTab: v,
    isPhantomPreview: _,
    categoryTabs: w
  } = (0, x.k)(), P = o && (null == g || 0 === w.length && !_ || y && !m);
  return i.useEffect(() => {
    P && (0, h.B)(t, A.VV.GUILD_SHOP)
  }, [t, P]), (0, u.A)({
    type: R.z.PAGE,
    name: s.ImpressionNames.GUILD_SHOP_PAGE,
    properties: {
      product_id: r,
      tab: v
    }
  }, {
    disableTrack: P
  }), (0, n.jsxs)("div", {
    "data-has-border": true,
    className: l()(k.TE, N.kL),
    children: [(0, n.jsxs)(b.A, {
      children: [(0, n.jsx)(b.A.Icon, {
        icon: (0, d.kHD)(S.h),
        "aria-hidden": true,
        color: a.A.colors.INTERACTIVE_TEXT_ACTIVE.css
      }), (0, n.jsx)(b.A.Title, {
        children: E.intl.string(E.t.al5EXL)
      }), (0, n.jsx)(L.A, {})]
    }), (0, n.jsx)(d.d_W, {
      className: N.Qs,
      children: o ? (0, n.jsx)(T, {
        guildId: t,
        productId: r
      }) : (0, n.jsx)(d.y$y, {})
    }), (0, n.jsx)(j.A, {
      className: N.Dv
    }), (0, n.jsx)(C.A, {
      className: N.xC
    })]
  })
}

function U(e) {
  let {
    guildId: t,
    productId: r,
    initialTab: i
  } = e;
  return null == i && null != r && (i = m.B.GUILD_PRODUCTS), (0, n.jsx)(x.A, {
    initialTab: i,
    guildId: t,
    children: (0, n.jsx)(V, {
      initialTab: i,
      productId: r,
      guildId: t
    })
  })
}