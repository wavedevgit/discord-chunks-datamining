/** Chunk was on web.js **/
/** chunk id: 847033, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N,
  m: () => A
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk399606 = require("./399606.js"),
  Chunk704215 = require("./704215.js"),
  Chunk367907 = require("./367907.js"),
  Chunk266454 = require("./266454.js"),
  Chunk584825 = require("./584825.js"),
  Chunk994592 = require("./994592.js"),
  Chunk160404 = require("./160404.js"),
  Chunk703656 = require("./703656.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk652515 = require("./652515.js"),
  Chunk550951 = require("./550951.js"),
  Chunk544978 = require("./544978.js"),
  Chunk333866 = require("./333866.js"),
  Chunk629481 = require("./629481.js"),
  Chunk981631 = require("./981631.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
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
let C = Chunk473749.createContext(true);

function A() {
  let e = Chunk473749.useContext(C);
  return o()(null != module, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), module
}

function N(e) {
  var t;
  let {
    children: n,
    initialTab: a,
    guildId: o
  } = e, I = (0, s.e7)([h.Z], () => h.Z.getGuild(o)), A = (0, s.e7)([p.Z], () => p.Z.isViewingServerShop(o)), N = (0, b.g)(I, "guild_shop_page"), P = (0, E.RF)(o, "guild_shop_page"), R = (null == I ? true : I.features.has(S.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === true, w = (0, f.mY)(null == I ? true : I.id), D = w && P, x = null == (t = (0, d.YB)(o)) ? true : t.server_shop_tab_order, L = [], j = y.y.GUILD_SHOP_FULL_PREVIEW;
  A || R && w ? (L.push(x === O.a3.PRODUCTS_FIRST ? y.y.GUILD_PRODUCTS : y.y.GUILD_ROLE_SUBSCRIPTIONS), L.push(x === O.a3.PRODUCTS_FIRST ? y.y.GUILD_ROLE_SUBSCRIPTIONS : y.y.GUILD_PRODUCTS), j = L[0]) : R && !w ? (L.push(y.y.GUILD_PRODUCTS), j = y.y.GUILD_PRODUCTS) : !R && w && (L.push(y.y.GUILD_ROLE_SUBSCRIPTIONS), j = y.y.GUILD_ROLE_SUBSCRIPTIONS, N && L.push(y.y.GUILD_PRODUCTS_PREVIEW)), a = null != a ? a : j;
  let [M, k] = i.useState(a), U = N && !D || M === y.y.GUILD_PRODUCTS_PREVIEW;
  i.useEffect(() => {
    k(a)
  }, [a]);
  let G = e => {
    (0, u.Q3)(l.z.SERVER_SHOP_PHANTOM_PREVIEW);
    let t = T({}, (0, c.hH)(o));
    if (M === y.y.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), k(y.y.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = v.mz.DISMISS_TAB_PREVIEW;
    else {
      var n;
      (0, _.dL)(S.Z5c.CHANNEL(o, null == (n = m.ZP.getDefaultChannel(o)) ? true : n.id)), t.action_taken = v.mz.DISMISS_FULL_PREVIEW
    }
    g.default.track(S.rMx.GUILD_SHOP_PREVIEW_CLICK, t)
  };
  return (0, r.jsx)(C.Provider, {
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