/** Chunk was on 40247 **/
n.d(t, {
  Z: () => D,
  m: () => m
}), n(653041), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(512722),
  o = n.n(l),
  a = n(399606),
  s = n(704215),
  c = n(367907),
  u = n(605236),
  E = n(584825),
  d = n(994592),
  _ = n(160404),
  N = n(703656),
  I = n(984933),
  O = n(430824),
  T = n(626135),
  S = n(652515),
  p = n(550951),
  P = n(544978),
  A = n(333866),
  R = n(629481),
  C = n(981631);
let f = 12633 == n.j ? i.createContext(void 0) : null;

function m() {
  let e = i.useContext(f);
  return o()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e
}

function D(e) {
  var t;
  let {
    children: n,
    initialTab: l,
    guildId: o
  } = e, m = (0, a.e7)([O.Z], () => O.Z.getGuild(o)), D = (0, a.e7)([_.Z], () => _.Z.isViewingServerShop(o)), g = (0, p.g)(m, "guild_shop_page"), y = (0, S.RF)(o, "guild_shop_page"), h = (null == m ? void 0 : m.hasFeature(C.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0, b = (0, d.mY)(null == m ? void 0 : m.id), U = null === (t = (0, E.YB)(o)) || void 0 === t ? void 0 : t.server_shop_tab_order, k = [], M = P.y.GUILD_SHOP_FULL_PREVIEW;
  D || h && b ? (k.push(U === A.a3.PRODUCTS_FIRST ? P.y.GUILD_PRODUCTS : P.y.GUILD_ROLE_SUBSCRIPTIONS), k.push(U === A.a3.PRODUCTS_FIRST ? P.y.GUILD_ROLE_SUBSCRIPTIONS : P.y.GUILD_PRODUCTS), M = k[0]) : h && !b ? (k.push(P.y.GUILD_PRODUCTS), M = P.y.GUILD_PRODUCTS) : !h && b && (k.push(P.y.GUILD_ROLE_SUBSCRIPTIONS), M = P.y.GUILD_ROLE_SUBSCRIPTIONS, g && k.push(P.y.GUILD_PRODUCTS_PREVIEW)), l = null != l ? l : M;
  let [v, Z] = i.useState(l), j = g && !(b && y) || v === P.y.GUILD_PRODUCTS_PREVIEW;
  return i.useEffect(() => {
    Z(l)
  }, [l]), (0, r.jsx)(f.Provider, {
    value: {
      selectedTab: v,
      setSelectedTab: Z,
      categoryTabs: k,
      isPhantomPreview: j,
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
        if (v === P.y.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), Z(P.y.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = R.mz.DISMISS_TAB_PREVIEW;
        else {
          var n;
          (0, N.dL)(C.Z5c.CHANNEL(o, null === (n = I.ZP.getDefaultChannel(o)) || void 0 === n ? void 0 : n.id)), t.action_taken = R.mz.DISMISS_FULL_PREVIEW
        }
        T.default.track(C.rMx.GUILD_SHOP_PREVIEW_CLICK, t)
      }
    },
    children: n
  })
}