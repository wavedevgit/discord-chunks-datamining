/** Chunk was on 74098 **/
n.d(t, {
  Z: () => C,
  m: () => P
}), n(539854), n(388685);
var r = n(255367),
  i = n(73800),
  l = n(512722),
  a = n.n(l),
  o = n(399606),
  c = n(704215),
  s = n(367907),
  u = n(266454),
  d = n(584825),
  _ = n(994592),
  E = n(160404),
  O = n(703656),
  I = n(984933),
  p = n(430824),
  T = n(626135),
  S = n(652515),
  N = n(550951),
  f = n(544978),
  g = n(333866),
  m = n(629481),
  A = n(981631);
let R = i.createContext(void 0);

function P() {
  let e = i.useContext(R);
  return a()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e
}

function C(e) {
  var t;
  let {
    children: n,
    initialTab: l,
    guildId: a
  } = e, P = (0, o.e7)([p.Z], () => p.Z.getGuild(a)), C = (0, o.e7)([E.Z], () => E.Z.isViewingServerShop(a)), y = (0, N.g)(P, "guild_shop_page"), b = (0, S.RF)(a, "guild_shop_page"), D = (null == P ? void 0 : P.features.has(A.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0, h = (0, _.mY)(null == P ? void 0 : P.id), U = null == (t = (0, d.YB)(a)) ? void 0 : t.server_shop_tab_order, M = [], v = f.y.GUILD_SHOP_FULL_PREVIEW;
  C || D && h ? (M.push(U === g.a3.PRODUCTS_FIRST ? f.y.GUILD_PRODUCTS : f.y.GUILD_ROLE_SUBSCRIPTIONS), M.push(U === g.a3.PRODUCTS_FIRST ? f.y.GUILD_ROLE_SUBSCRIPTIONS : f.y.GUILD_PRODUCTS), v = M[0]) : D && !h ? (M.push(f.y.GUILD_PRODUCTS), v = f.y.GUILD_PRODUCTS) : !D && h && (M.push(f.y.GUILD_ROLE_SUBSCRIPTIONS), v = f.y.GUILD_ROLE_SUBSCRIPTIONS, y && M.push(f.y.GUILD_PRODUCTS_PREVIEW)), l = null != l ? l : v;
  let [Z, j] = i.useState(l), L = y && !(h && b) || Z === f.y.GUILD_PRODUCTS_PREVIEW;
  return i.useEffect(() => {
    j(l)
  }, [l]), (0, r.jsx)(R.Provider, {
    value: {
      selectedTab: Z,
      setSelectedTab: j,
      categoryTabs: M,
      isPhantomPreview: L,
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
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = r
            })
          }
          return e
        }({}, (0, s.hH)(a));
        if (Z === f.y.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), j(f.y.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = m.mz.DISMISS_TAB_PREVIEW;
        else {
          var n;
          (0, O.dL)(A.Z5c.CHANNEL(a, null == (n = I.ZP.getDefaultChannel(a)) ? void 0 : n.id)), t.action_taken = m.mz.DISMISS_FULL_PREVIEW
        }
        T.default.track(A.rMx.GUILD_SHOP_PREVIEW_CLICK, t)
      }
    },
    children: n
  })
}