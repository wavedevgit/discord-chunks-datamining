/** Chunk was on 61222 **/
/** chunk id: 381969, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => D,
  k: () => f
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk417597 = require("./417597.js"),
  Chunk554146 = require("./554146.js"),
  Chunk58149 = require("./58149.js"),
  Chunk826673 = require("./826673.js"),
  Chunk599941 = require("./599941.js"),
  Chunk960253 = require("./960253.js"),
  Chunk164956 = require("./164956.js"),
  Chunk976860 = require("./976860.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk954571 = require("./954571.js"),
  Chunk491026 = require("./491026.js"),
  Chunk486418 = require("./486418.js"),
  Chunk920814 = require("./920814.js"),
  Chunk284683 = require("./284683.js"),
  Chunk634654 = require("./634654.js"),
  Chunk652215 = require("./652215.js");
let C = 21552 == require.j ? Chunk64700.createContext(true) : null;

function f() {
  let e = i.useContext(C);
  return o()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e
}

function D(e) {
  var t;
  let {
    children: n,
    initialTab: l,
    guildId: o
  } = e, f = (0, a.bG)([I.A], () => I.A.getGuild(o)), D = (0, a.bG)([_.A], () => _.A.isViewingServerShop(o)), g = (0, p.P)(f, "guild_shop_page"), m = (0, N.YZ)(o, "guild_shop_page"), h = (null == f ? true : f.features.has(y.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === true, U = (0, d.Oh)(null == f ? true : f.id), M = null == (t = (0, E.Tq)(o)) ? true : t.server_shop_tab_order, b = [], j = R.B.GUILD_SHOP_FULL_PREVIEW;
  D || h && U ? (b.push(M === S.HA.PRODUCTS_FIRST ? R.B.GUILD_PRODUCTS : R.B.GUILD_ROLE_SUBSCRIPTIONS), b.push(M === S.HA.PRODUCTS_FIRST ? R.B.GUILD_ROLE_SUBSCRIPTIONS : R.B.GUILD_PRODUCTS), j = b[0]) : h && !U ? (b.push(R.B.GUILD_PRODUCTS), j = R.B.GUILD_PRODUCTS) : !h && U && (b.push(R.B.GUILD_ROLE_SUBSCRIPTIONS), j = R.B.GUILD_ROLE_SUBSCRIPTIONS, g && b.push(R.B.GUILD_PRODUCTS_PREVIEW)), l = null != l ? l : j;
  let [k, L] = i.useState(l), v = g && !(U && m) || k === R.B.GUILD_PRODUCTS_PREVIEW;
  return i.useEffect(() => {
    L(l)
  }, [l]), (0, r.jsx)(C.Provider, {
    value: {
      selectedTab: k,
      setSelectedTab: L,
      categoryTabs: b,
      isPhantomPreview: v,
      handlePreviewDismiss: e => {
        (0, u.Dr)(s.M.SERVER_SHOP_PHANTOM_PREVIEW);
        let t = function(e) {
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
        }({}, (0, c.H$)(o));
        if (k === R.B.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), L(R.B.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = P.hN.DISMISS_TAB_PREVIEW;
        else {
          var n;
          (0, A.bG)(y.BVt.CHANNEL(o, null == (n = T.Ay.getDefaultChannel(o)) ? true : n.id)), t.action_taken = P.hN.DISMISS_FULL_PREVIEW
        }
        O.default.track(y.HAw.GUILD_SHOP_PREVIEW_CLICK, t)
      }
    },
    children: n
  })
}