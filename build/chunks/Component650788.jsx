/** Chunk was on 78431 **/
/** chunk id: 650788, original params: e,t,r (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => M
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk674180 = require("./674180.js"),
  Chunk38618 = require("./38618.js"),
  Chunk312217 = require("./312217.jsx"),
  Chunk623299 = require("./623299.jsx"),
  Chunk984370 = require("./984370.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk76535 = require("./76535.js"),
  Chunk423000 = require("./423000.js"),
  Chunk891561 = require("./891561.jsx"),
  Chunk847033 = require("./847033.jsx"),
  Chunk544978 = require("./544978.js"),
  Chunk154522 = require("./154522.jsx"),
  Chunk935554 = require("./935554.jsx"),
  Chunk340529 = require("./340529.jsx"),
  Chunk175390 = require("./175390.jsx"),
  Chunk957572 = require("./957572.jsx"),
  Chunk866104 = require("./866104.jsx"),
  Chunk886176 = require("./886176.jsx"),
  Chunk333866 = require("./333866.js"),
  Chunk176505 = require("./176505.js"),
  Chunk20281 = require("./20281.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk486663 = require("./486663.js"),
  Chunk97009 = require("./97009.js");

function E(e) {
  var t;
  let {
    guildId: r,
    productId: i
  } = e, {
    loaded: o,
    subscriptionsSettings: l
  } = (0, O.H)(r), s = (0, c.e7)([g.Z], () => g.Z.getGuild(r)), {
    selectedTab: a,
    isPhantomPreview: u,
    categoryTabs: C
  } = (0, m.m)(), p = !o || null == l;
  return null == s || !u && p ? (0, n.jsx)(d.$jN, {}) : (0, n.jsx)(x.Z, {
    defaultSortOption: null != (t = null == l ? true : l.store_page_guild_products_default_sort) ? t : Z.zJ.NAME,
    children: (0, n.jsxs)("div", {
      className: N.contentContainer,
      children: [(0, n.jsx)(S.C, {
        guild: s,
        subscriptionsSettings: l
      }), (0, n.jsx)(d.LZC, {
        size: 32
      }), C.length > 0 && (0, n.jsx)(w.z, {
        guild: s
      }), (0, n.jsxs)("div", {
        className: N.tabContainer,
        children: [(0, n.jsx)(d.LZC, {
          size: 32
        }), u && (0, n.jsx)(P.Z, {
          guildId: r
        }), a === v.y.GUILD_PRODUCTS && (0, n.jsx)(y.Q, {
          guildId: r,
          productId: i
        }), a === v.y.GUILD_ROLE_SUBSCRIPTIONS && (0, n.jsx)(_.Z, {
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
  } = e, o = (0, c.e7)([p.Z], () => p.Z.isConnected()), O = (0, c.e7)([g.Z], () => g.Z.getGuild(t)), {
    shouldHideGuildPurchaseEntryPoints: x,
    restrictionsLoading: v
  } = (0, C.uP)(t), {
    selectedTab: y,
    isPhantomPreview: _,
    categoryTabs: w
  } = (0, m.m)(), P = o && (null == O || 0 === w.length && !_ || x && !v);
  return i.useEffect(() => {
    P && (0, h.M)(t, D.oC.GUILD_SHOP)
  }, [t, P]), (0, u.Z)({
    type: T.n.PAGE,
    name: s.ImpressionNames.GUILD_SHOP_PAGE,
    properties: {
      product_id: r,
      tab: y
    }
  }, {
    disableTrack: P
  }), (0, n.jsxs)("div", {
    "data-has-border": true,
    className: l()(R.chat, N.container),
    children: [(0, n.jsxs)(j.Z, {
      children: [(0, n.jsx)(j.Z.Icon, {
        icon: (0, d.GSL)(I.Z),
        "aria-hidden": true,
        color: a.Z.colors.INTERACTIVE_ACTIVE.css
      }), (0, n.jsx)(j.Z.Title, {
        children: k.intl.string(k.t.al5EXL)
      }), (0, n.jsx)(L.Z, {})]
    }), (0, n.jsx)(d.u2D, {
      className: N.content,
      children: o ? (0, n.jsx)(E, {
        guildId: t,
        productId: r
      }) : (0, n.jsx)(d.$jN, {})
    }), (0, n.jsx)(b.Z, {
      className: N.sparkleCloudTop
    }), (0, n.jsx)(f.Z, {
      className: N.sparkleCloudBottom
    })]
  })
}

function M(e) {
  let {
    guildId: t,
    productId: r,
    initialTab: i
  } = e;
  return null == i && null != r && (i = v.y.GUILD_PRODUCTS), (0, n.jsx)(m.Z, {
    initialTab: i,
    guildId: t,
    children: (0, n.jsx)(V, {
      initialTab: i,
      productId: r,
      guildId: t
    })
  })
}