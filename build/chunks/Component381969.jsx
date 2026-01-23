/** Chunk was on web.js **/
/** chunk id: 381969, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N,
  k: () => C
}), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
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

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}
let T = Chunk64700.createContext(true);

function C() {
  let e = i.useContext(T);
  return s()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e
}

function N(e) {
  var t;
  let {
    children: n,
    initialTab: a,
    guildId: s
  } = e, I = (0, o.bG)([m.A], () => m.A.getGuild(s)), C = (0, o.bG)([p.A], () => p.A.isViewingServerShop(s)), N = (0, y.P)(I, "guild_shop_page"), w = (0, E.YZ)(s, "guild_shop_page"), R = (null == I ? true : I.features.has(A.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === true, P = (0, f.Oh)(null == I ? true : I.id), D = P && w, x = null == (t = (0, d.Tq)(s)) ? true : t.server_shop_tab_order, L = [], j = b.B.GUILD_SHOP_FULL_PREVIEW;
  C || R && P ? (L.push(x === O.HA.PRODUCTS_FIRST ? b.B.GUILD_PRODUCTS : b.B.GUILD_ROLE_SUBSCRIPTIONS), L.push(x === O.HA.PRODUCTS_FIRST ? b.B.GUILD_ROLE_SUBSCRIPTIONS : b.B.GUILD_PRODUCTS), j = L[0]) : R && !P ? (L.push(b.B.GUILD_PRODUCTS), j = b.B.GUILD_PRODUCTS) : !R && P && (L.push(b.B.GUILD_ROLE_SUBSCRIPTIONS), j = b.B.GUILD_ROLE_SUBSCRIPTIONS, N && L.push(b.B.GUILD_PRODUCTS_PREVIEW)), a = null != a ? a : j;
  let [M, k] = i.useState(a), U = N && !D || M === b.B.GUILD_PRODUCTS_PREVIEW;
  i.useEffect(() => {
    k(a)
  }, [a]);
  let G = e => {
    (0, u.Dr)(l.M.SERVER_SHOP_PHANTOM_PREVIEW);
    let t = S({}, (0, c.H$)(s));
    if (M === b.B.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), k(b.B.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = v.hN.DISMISS_TAB_PREVIEW;
    else {
      var n;
      (0, _.bG)(A.BVt.CHANNEL(s, null == (n = h.Ay.getDefaultChannel(s)) ? true : n.id)), t.action_taken = v.hN.DISMISS_FULL_PREVIEW
    }
    g.default.track(A.HAw.GUILD_SHOP_PREVIEW_CLICK, t)
  };
  return (0, r.jsx)(T.Provider, {
    value: {
      selectedTab: M,
      setSelectedTab: k,
      categoryTabs: L,
      isPhantomPreview: U,
      handlePreviewDismiss: G
    },
    children: n
  })
}