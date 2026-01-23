/** Chunk was on 97492 **/
/** chunk id: 998986, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => P
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk554146 = require("./554146.js"),
  Chunk506774 = require("./506774.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk775602 = require("./775602.js"),
  Chunk58149 = require("./58149.js"),
  Chunk289397 = require("./289397.js"),
  Chunk491026 = require("./491026.js"),
  Chunk486418 = require("./486418.js"),
  Chunk575926 = require("./575926.jsx"),
  Chunk826673 = require("./826673.js"),
  Chunk976860 = require("./976860.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652793 = require("./652793.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk634654 = require("./634654.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk568187 = require("./568187.js");

function I(e) {
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

function T(e) {
  let {
    guildId: t,
    selected: n,
    handleClick: l
  } = e, u = (0, f.YZ)(t, "guild_shop_channel_row"), g = (0, s.bG)([_.A], () => _.A.getGuild(t)), x = (null == g ? true : g.features.has(v.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) === true, T = "false" === o.w.get(E.bJ, "false"), P = (0, s.bG)([d.A], () => d.A.useReducedMotion);
  return (0, r.jsx)(j.G, {
    id: "shop-".concat(t),
    className: i()(S.A2, {
      [S.wH]: n,
      [S.ST]: T
    }),
    innerClassName: S.LE,
    renderIcon: e => (0, r.jsx)(m.h, {
      width: 20,
      height: 20,
      className: i()([e, S.sV])
    }),
    text: C.intl.string(C.t.al5EXL),
    selected: n,
    onClick: l,
    trailing: (0, r.jsxs)("div", {
      className: S.ai,
      children: [P ? (0, r.jsx)(c.LpS, {
        color: c.LU0.unsafe_rawColors.BRAND_260.css,
        text: C.intl.string(C.t.y2b7CA),
        className: S.Ad
      }) : (0, r.jsx)("img", {
        src: (0, h.n)("server_products/storefront/money.gif"),
        className: S.TG,
        alt: ""
      }), n && (0, r.jsx)(c.DUT, {
        className: S.b,
        onClick: e => {
          if (e.stopPropagation(), (0, b.Dr)(a.M.SERVER_SHOP_PHANTOM_PREVIEW), O.default.track(v.HAw.GUILD_SHOP_PREVIEW_CLICK, N(I({}, (0, p.H$)(t)), {
              action_taken: E.hN.DISMISS_CHANNEL_ROW
            })), !u || !x) {
            var n;
            (0, A.bG)(v.BVt.CHANNEL(t, null == (n = y.Ay.getDefaultChannel(t)) ? true : n.id))
          }
        },
        "aria-label": C.intl.string(C.t.cpT0Cq),
        children: (0, r.jsx)(c.aXh, {
          size: "xs",
          color: "currentColor"
        })
      })]
    })
  })
}

function P(e) {
  let {
    guild: t,
    selected: l
  } = e, i = (0, g.P)(t, "guild_shop_channel_row"), s = () => {
    o.w.set(E.bJ, "true"), (0, A.pX)(v.BVt.CHANNEL(t.id, x.VV.GUILD_SHOP))
  };
  return i ? (0, r.jsx)(T, {
    guildId: t.id,
    selected: l,
    handleClick: s
  }) : (0, r.jsx)(j.G, {
    id: "shop-".concat(t.id),
    renderIcon: e => (0, r.jsx)(m.h, {
      width: 20,
      height: 20,
      className: e
    }),
    text: C.intl.string(C.t.al5EXL),
    selected: l,
    onClick: s,
    onContextMenu: e => {
      null != t && (0, u.L3)(e, async () => {
        let {
          default: e
        } = await n.e("52565").then(n.bind(n, 345332));
        return n => (0, r.jsx)(e, N(I({}, n), {
          guild: t
        }))
      })
    }
  })
}