/** Chunk was on 11868 **/
/** chunk id: 847033, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C,
  m: () => P
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
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
let g = Chunk647438.createContext(true);

function P() {
  let e = Chunk647438.useContext(g);
  return a()(null != module, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), module
}

function C(e) {
  var t;
  let {
    children: n,
    initialTab: l,
    guildId: a
  } = e, P = (0, o.e7)([O.Z], () => O.Z.getGuild(a)), C = (0, o.e7)([E.Z], () => E.Z.isViewingServerShop(a)), D = (0, f.g)(P, "guild_shop_page"), y = (0, N.RF)(a, "guild_shop_page"), h = (null == P ? true : P.features.has(A.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === true, b = (0, _.mY)(null == P ? true : P.id), U = null == (t = (0, d.YB)(a)) ? true : t.server_shop_tab_order, M = [], v = S.y.GUILD_SHOP_FULL_PREVIEW;
  C || h && b ? (M.push(U === m.a3.PRODUCTS_FIRST ? S.y.GUILD_PRODUCTS : S.y.GUILD_ROLE_SUBSCRIPTIONS), M.push(U === m.a3.PRODUCTS_FIRST ? S.y.GUILD_ROLE_SUBSCRIPTIONS : S.y.GUILD_PRODUCTS), v = M[0]) : h && !b ? (M.push(S.y.GUILD_PRODUCTS), v = S.y.GUILD_PRODUCTS) : !h && b && (M.push(S.y.GUILD_ROLE_SUBSCRIPTIONS), v = S.y.GUILD_ROLE_SUBSCRIPTIONS, D && M.push(S.y.GUILD_PRODUCTS_PREVIEW)), l = null != l ? l : v;
  let [Z, L] = i.useState(l), k = D && !(b && y) || Z === S.y.GUILD_PRODUCTS_PREVIEW;
  return i.useEffect(() => {
    L(l)
  }, [l]), (0, r.jsx)(g.Provider, {
    value: {
      selectedTab: Z,
      setSelectedTab: L,
      categoryTabs: M,
      isPhantomPreview: k,
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
        }({}, (0, s.hH)(a));
        if (Z === S.y.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), L(S.y.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = R.mz.DISMISS_TAB_PREVIEW;
        else {
          var n;
          (0, I.dL)(A.Z5c.CHANNEL(a, null == (n = T.ZP.getDefaultChannel(a)) ? true : n.id)), t.action_taken = R.mz.DISMISS_FULL_PREVIEW
        }
        p.default.track(A.rMx.GUILD_SHOP_PREVIEW_CLICK, t)
      }
    },
    children: n
  })
}