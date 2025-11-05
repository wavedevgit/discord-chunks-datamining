/** Chunk was on 56710 **/
/** chunk id: 848442, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk704215 = require("./704215.js"),
  Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk607070 = require("./607070.js"),
  Chunk367907 = require("./367907.js"),
  Chunk357352 = require("./357352.js"),
  Chunk652515 = require("./652515.js"),
  Chunk550951 = require("./550951.js"),
  Chunk886176 = require("./886176.jsx"),
  Chunk266454 = require("./266454.js"),
  Chunk703656 = require("./703656.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk434479 = require("./434479.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk629481 = require("./629481.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk296553 = require("./296553.js");

function P(e) {
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

function N(e, t) {
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

function Z(e) {
  let {
    guildId: t,
    selected: n,
    handleClick: i
  } = e, u = (0, f.RF)(t, "guild_shop_channel_row"), g = (0, o.e7)([O.Z], () => O.Z.getGuild(t)), x = (null == g ? true : g.features.has(C.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) === true, Z = "false" === s.K.get(E.tM, "false"), w = (0, o.e7)([d.Z], () => d.Z.useReducedMotion);
  return (0, r.jsx)(j.m, {
    id: "shop-".concat(t),
    className: l()(I.previewChannelRow, {
      [I.selected]: n,
      [I.phantomPreview]: Z
    }),
    innerClassName: I.previewChannelRowContent,
    renderIcon: e => (0, r.jsx)(m.Z, {
      width: 20,
      height: 20,
      className: l()([e, I.shopIcon])
    }),
    text: S.intl.string(S.t.al5EXL),
    selected: n,
    onClick: i,
    trailing: (0, r.jsxs)("div", {
      className: I.gifSection,
      children: [w ? (0, r.jsx)(c.IGR, {
        color: c.TVs.unsafe_rawColors.BRAND_260.css,
        text: S.intl.string(S.t.y2b7CA),
        className: I.newBadge
      }) : (0, r.jsx)("img", {
        src: (0, h.b)("server_products/storefront/money.gif"),
        className: I.money,
        alt: ""
      }), n && (0, r.jsx)(c.P3F, {
        className: I.closeButton,
        onClick: e => {
          if (e.stopPropagation(), (0, b.Q3)(a.z.SERVER_SHOP_PHANTOM_PREVIEW), v.default.track(C.rMx.GUILD_SHOP_PREVIEW_CLICK, N(P({}, (0, p.hH)(t)), {
              action_taken: E.mz.DISMISS_CHANNEL_ROW
            })), !u || !x) {
            var n;
            (0, _.dL)(C.Z5c.CHANNEL(t, null == (n = y.ZP.getDefaultChannel(t)) ? true : n.id))
          }
        },
        "aria-label": S.intl.string(S.t.cpT0Cq),
        children: (0, r.jsx)(c.k$p, {
          size: "xs",
          color: "currentColor"
        })
      })]
    })
  })
}

function w(e) {
  let {
    guild: t,
    selected: i
  } = e, l = (0, g.g)(t, "guild_shop_channel_row"), o = () => {
    s.K.set(E.tM, "true"), (0, _.uL)(C.Z5c.CHANNEL(t.id, x.oC.GUILD_SHOP))
  };
  return l ? (0, r.jsx)(Z, {
    guildId: t.id,
    selected: i,
    handleClick: o
  }) : (0, r.jsx)(j.m, {
    id: "shop-".concat(t.id),
    renderIcon: e => (0, r.jsx)(m.Z, {
      width: 20,
      height: 20,
      className: e
    }),
    text: S.intl.string(S.t.al5EXL),
    selected: i,
    onClick: o,
    onContextMenu: e => {
      null != t && (0, u.jW)(e, async () => {
        let {
          default: e
        } = await n.e("66050").then(n.bind(n, 64220));
        return n => (0, r.jsx)(e, N(P({}, n), {
          guild: t
        }))
      })
    }
  })
}