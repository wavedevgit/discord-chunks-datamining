/** Chunk was on 30776 **/
t.d(n, {
  Z: () => C
}), t(388685);
var o = t(200651),
  r = t(192379),
  a = t(120356),
  i = t.n(a),
  c = t(481060),
  l = t(37234),
  s = t(410030),
  d = t(81897),
  u = t(906732),
  f = t(566898),
  p = t(769654),
  m = t(785717),
  b = t(806729),
  _ = t(708108),
  h = t(146078),
  y = t(857302),
  g = t(892001),
  x = t(252417),
  j = t(428927),
  I = t(228168),
  v = t(388032),
  O = t(714905);

function C(e) {
  let {
    user: n,
    guildId: t,
    channelId: a,
    onClose: C
  } = e, {
    analyticsLocations: N
  } = (0, u.ZP)(), {
    context: P,
    trackUserProfileAction: A
  } = (0, m.KZ)(), Z = (0, s.ZP)(), {
    mutualFriends: w,
    mutualFriendsCount: T,
    mutualGuilds: S,
    isFetching: M
  } = (0, b.Z)(n), E = (0, d.Z)(), U = r.useMemo(() => [{
    section: I.oh.MUTUAL_FRIENDS,
    text: (0, _.Z)(T)
  }, {
    section: I.oh.MUTUAL_GUILDS,
    text: (0, h.Z)(null == S ? void 0 : S.length)
  }], [T, null == S ? void 0 : S.length]), [{
    section: B,
    text: V
  }, k] = r.useState(U[0]);
  return r.useEffect(() => {
    B === I.oh.MUTUAL_FRIENDS && (0, y.Z)(n.id, E)
  }, [B, n.id, E]), (0, o.jsxs)("div", {
    className: O.container,
    children: [(0, o.jsx)(c.njP, {
      className: O.tabBar,
      selectedItem: B,
      onItemSelect: e => {
        k(n => {
          var t;
          return null != (t = U.find(n => n.section === e)) ? t : n
        }), A({
          action: "PRESS_SECTION",
          section: e
        })
      },
      children: U.map(e => (0, o.jsx)(c.njP.Item, {
        id: e.section,
        "aria-label": e.text,
        className: O.tabBarItem,
        children: (0, o.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "text-primary",
          children: e.text
        })
      }, e.section))
    }), (0, o.jsx)(c.njP.Panel, {
      id: B,
      "aria-label": V,
      className: O.tabBarPanel,
      children: (0, o.jsxs)(c.Ttm, {
        className: O.scroller,
        fade: !0,
        children: [B === I.oh.MUTUAL_FRIENDS && (null == w ? Array.from({
          length: null != T ? T : 10
        }).map((e, n) => (0, o.jsxs)("div", {
          className: i()(O.loadingItem, O.loadingMutualFriend),
          children: [(0, o.jsx)(f.ZT, {
            width: 40,
            opacity: .08
          }), (0, o.jsx)(f.ZT, {
            width: 135,
            opacity: .08
          })]
        }, n)) : 0 === w.length ? (0, o.jsxs)("div", {
          className: O.empty,
          children: [(0, o.jsx)("div", {
            className: i()(O.emptyImage, O.noMutualFriends)
          }), (0, o.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "header-primary",
            children: v.intl.string(v.t["ru+2j4"])
          })]
        }) : w.map(e => {
          let {
            key: n,
            user: r,
            status: i
          } = e;
          return (0, o.jsx)(x.Z, {
            user: r,
            status: i,
            guildId: t,
            channelId: a,
            onSelect: () => {
              var e, n;
              C(), A({
                action: "PRESS_MUTUAL_FRIEND"
              }), (0, g.openUserProfileModal)((e = function(e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = null != arguments[n] ? arguments[n] : {},
                    o = Object.keys(t);
                  "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                  }))), o.forEach(function(n) {
                    var o;
                    o = t[n], n in e ? Object.defineProperty(e, n, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    }) : e[n] = o
                  })
                }
                return e
              }({}, P), n = n = {
                userId: r.id,
                sourceAnalyticsLocations: N
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var o = Object.getOwnPropertySymbols(e);
                  t.push.apply(t, o)
                }
                return t
              })(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              }), e))
            }
          }, n)
        })), B === I.oh.MUTUAL_GUILDS && (null == S && M ? Array.from({
          length: 10
        }).map((e, n) => (0, o.jsxs)("div", {
          className: i()(O.loadingItem, O.loadingMutualGuild),
          children: [(0, o.jsx)(f.ZT, {
            width: 40,
            opacity: .08
          }), (0, o.jsx)(f.ZT, {
            width: 135,
            opacity: .08
          })]
        }, n)) : (null != S || M) && (null == S ? void 0 : S.length) !== 0 ? null == S ? void 0 : S.map(e => {
          let {
            guild: t,
            nick: r
          } = e;
          return (0, o.jsx)(j.D, {
            user: n,
            guild: t,
            nick: r,
            theme: Z,
            onSelect: () => {
              A({
                action: "PRESS_MUTUAL_GUILD"
              }), (0, p.X)(t.id), C(), (0, l.xf)()
            }
          }, t.id)
        }) : (0, o.jsxs)("div", {
          className: O.empty,
          children: [(0, o.jsx)("div", {
            className: i()(O.emptyImage, O.noMutualGuilds)
          }), (0, o.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "header-primary",
            children: v.intl.string(v.t.x5y3DA)
          })]
        }))]
      })
    })]
  })
}