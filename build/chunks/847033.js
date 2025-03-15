/** Chunk was on 53063 **/
n.d(t, {
  Z: () => y,
  m: () => S
}), n(653041), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(512722),
  l = n.n(o),
  a = n(399606),
  s = n(704215),
  c = n(367907),
  u = n(605236),
  d = n(584825),
  _ = n(994592),
  p = n(160404),
  E = n(703656),
  f = n(984933),
  h = n(430824),
  m = n(626135),
  b = n(652515),
  O = n(550951),
  g = n(544978),
  N = n(333866),
  I = n(629481),
  T = n(981631);
let C = i.createContext(void 0);

function S() {
  let e = i.useContext(C);
  return l()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e
}

function y(e) {
  var t;
  let {
    children: n,
    initialTab: o,
    guildId: l
  } = e, S = (0, a.e7)([h.Z], () => h.Z.getGuild(l)), y = (0, a.e7)([p.Z], () => p.Z.isViewingServerShop(l)), v = (0, O.g)(S, "guild_shop_page"), P = (0, b.RF)(l, "guild_shop_page"), R = (null == S ? void 0 : S.hasFeature(T.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0, A = (0, _.mY)(null == S ? void 0 : S.id), x = null === (t = (0, d.YB)(l)) || void 0 === t ? void 0 : t.server_shop_tab_order, D = [], j = g.y.GUILD_SHOP_FULL_PREVIEW;
  y || R && A ? (D.push(x === N.a3.PRODUCTS_FIRST ? g.y.GUILD_PRODUCTS : g.y.GUILD_ROLE_SUBSCRIPTIONS), D.push(x === N.a3.PRODUCTS_FIRST ? g.y.GUILD_ROLE_SUBSCRIPTIONS : g.y.GUILD_PRODUCTS), j = D[0]) : R && !A ? (D.push(g.y.GUILD_PRODUCTS), j = g.y.GUILD_PRODUCTS) : !R && A && (D.push(g.y.GUILD_ROLE_SUBSCRIPTIONS), j = g.y.GUILD_ROLE_SUBSCRIPTIONS, v && D.push(g.y.GUILD_PRODUCTS_PREVIEW)), o = null != o ? o : j;
  let [L, k] = i.useState(o), M = v && !(A && P) || L === g.y.GUILD_PRODUCTS_PREVIEW;
  return i.useEffect(() => {
    k(o)
  }, [o]), (0, r.jsx)(C.Provider, {
    value: {
      selectedTab: L,
      setSelectedTab: k,
      categoryTabs: D,
      isPhantomPreview: M,
      handlePreviewDismiss: e => {
        (0, u.EW)(s.z.SERVER_SHOP_PHANTOM_PREVIEW);
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
        }({}, (0, c.hH)(l));
        if (L === g.y.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), k(g.y.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = I.mz.DISMISS_TAB_PREVIEW;
        else {
          var n;
          (0, E.dL)(T.Z5c.CHANNEL(l, null === (n = f.ZP.getDefaultChannel(l)) || void 0 === n ? void 0 : n.id)), t.action_taken = I.mz.DISMISS_FULL_PREVIEW
        }
        m.default.track(T.rMx.GUILD_SHOP_PREVIEW_CLICK, t)
      }
    },
    children: n
  })
}