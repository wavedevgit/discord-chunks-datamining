/** Chunk was on 51424 **/
n.d(t, {
  Z: () => y,
  m: () => S
}), n(653041), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(512722),
  o = n.n(l),
  a = n(399606),
  s = n(704215),
  c = n(367907),
  u = n(605236),
  d = n(584825),
  _ = n(994592),
  E = n(160404),
  p = n(703656),
  m = n(984933),
  f = n(430824),
  h = n(626135),
  g = n(652515),
  O = n(550951),
  N = n(544978),
  I = n(333866),
  b = n(629481),
  T = n(981631);
let C = i.createContext(void 0);

function S() {
  let e = i.useContext(C);
  return o()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e
}

function y(e) {
  var t;
  let {
    children: n,
    initialTab: l,
    guildId: o
  } = e, S = (0, a.e7)([f.Z], () => f.Z.getGuild(o)), y = (0, a.e7)([E.Z], () => E.Z.isViewingServerShop(o)), P = (0, O.g)(S, "guild_shop_page"), R = (0, g.RF)(o, "guild_shop_page"), A = (null == S ? void 0 : S.hasFeature(T.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0, v = (0, _.mY)(null == S ? void 0 : S.id), x = null === (t = (0, d.YB)(o)) || void 0 === t ? void 0 : t.server_shop_tab_order, D = [], L = N.y.GUILD_SHOP_FULL_PREVIEW;
  y || A && v ? (D.push(x === I.a3.PRODUCTS_FIRST ? N.y.GUILD_PRODUCTS : N.y.GUILD_ROLE_SUBSCRIPTIONS), D.push(x === I.a3.PRODUCTS_FIRST ? N.y.GUILD_ROLE_SUBSCRIPTIONS : N.y.GUILD_PRODUCTS), L = D[0]) : A && !v ? (D.push(N.y.GUILD_PRODUCTS), L = N.y.GUILD_PRODUCTS) : !A && v && (D.push(N.y.GUILD_ROLE_SUBSCRIPTIONS), L = N.y.GUILD_ROLE_SUBSCRIPTIONS, P && D.push(N.y.GUILD_PRODUCTS_PREVIEW)), l = null != l ? l : L;
  let [j, k] = i.useState(l), M = P && !(v && R) || j === N.y.GUILD_PRODUCTS_PREVIEW;
  return i.useEffect(() => {
    k(l)
  }, [l]), (0, r.jsx)(C.Provider, {
    value: {
      selectedTab: j,
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
        }({}, (0, c.hH)(o));
        if (j === N.y.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), k(N.y.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = b.mz.DISMISS_TAB_PREVIEW;
        else {
          var n;
          (0, p.dL)(T.Z5c.CHANNEL(o, null === (n = m.ZP.getDefaultChannel(o)) || void 0 === n ? void 0 : n.id)), t.action_taken = b.mz.DISMISS_FULL_PREVIEW
        }
        h.default.track(T.rMx.GUILD_SHOP_PREVIEW_CLICK, t)
      }
    },
    children: n
  })
}