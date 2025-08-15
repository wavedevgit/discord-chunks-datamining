/** Chunk was on 31253 **/
/** chunk id: 847033, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P,
  m: () => g
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
let m = 12633 == require.j ? Chunk647438.createContext(true) : null;

function g() {
  let e = Chunk647438.useContext(m);
  return o()(null != module, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), module
}

function P(e) {
  var t;
  let {
    children: n,
    initialTab: l,
    guildId: o
  } = e, g = (0, a.e7)([O.Z], () => O.Z.getGuild(o)), P = (0, a.e7)([E.Z], () => E.Z.isViewingServerShop(o)), D = (0, p.g)(g, "guild_shop_page"), b = (0, S.RF)(o, "guild_shop_page"), y = (null == g ? true : g.features.has(C.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === true, h = (0, d.mY)(null == g ? true : g.id), U = null == (t = (0, _.YB)(o)) ? true : t.server_shop_tab_order, M = [], k = R.y.GUILD_SHOP_FULL_PREVIEW;
  P || y && h ? (M.push(U === f.a3.PRODUCTS_FIRST ? R.y.GUILD_PRODUCTS : R.y.GUILD_ROLE_SUBSCRIPTIONS), M.push(U === f.a3.PRODUCTS_FIRST ? R.y.GUILD_ROLE_SUBSCRIPTIONS : R.y.GUILD_PRODUCTS), k = M[0]) : y && !h ? (M.push(R.y.GUILD_PRODUCTS), k = R.y.GUILD_PRODUCTS) : !y && h && (M.push(R.y.GUILD_ROLE_SUBSCRIPTIONS), k = R.y.GUILD_ROLE_SUBSCRIPTIONS, D && M.push(R.y.GUILD_PRODUCTS_PREVIEW)), l = null != l ? l : k;
  let [L, Z] = i.useState(l), j = D && !(h && b) || L === R.y.GUILD_PRODUCTS_PREVIEW;
  return i.useEffect(() => {
    Z(l)
  }, [l]), (0, r.jsx)(m.Provider, {
    value: {
      selectedTab: L,
      setSelectedTab: Z,
      categoryTabs: M,
      isPhantomPreview: j,
      handlePreviewDismiss: e => {
        (0, u.Q3)(c.z.SERVER_SHOP_PHANTOM_PREVIEW);
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
        }({}, (0, s.hH)(o));
        if (L === R.y.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), Z(R.y.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = A.mz.DISMISS_TAB_PREVIEW;
        else {
          var n;
          (0, I.dL)(C.Z5c.CHANNEL(o, null == (n = T.ZP.getDefaultChannel(o)) ? true : n.id)), t.action_taken = A.mz.DISMISS_FULL_PREVIEW
        }
        N.default.track(C.rMx.GUILD_SHOP_PREVIEW_CLICK, t)
      }
    },
    children: n
  })
}