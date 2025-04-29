/** Chunk was on 82670 **/
r.d(t, {
  D: () => P,
  Z: () => N
});
var n = r(200651);
r(192379);
var i = r(120356),
  l = r.n(i),
  s = r(780384),
  a = r(481060),
  o = r(239091),
  c = r(37234),
  u = r(410030),
  d = r(44315),
  m = r(565138),
  p = r(769654),
  b = r(51144),
  f = r(785717),
  j = r(806729),
  v = r(228168),
  x = r(981631),
  g = r(388032),
  h = r(301150),
  y = r(67487);
let O = (0, a.pxk)(a.EFr.SIZE_16);

function P(e) {
  let {
    user: t,
    guild: i,
    nick: c,
    theme: u,
    onSelect: p
  } = e, f = t.hasAvatarForGuild(i.id);
  return (0, n.jsxs)(a.P3F, {
    focusProps: {
      offset: {
        right: 8
      }
    },
    className: h.listRow,
    onClick: p,
    onContextMenu: e => {
      (0, o.jW)(e, async () => {
        let {
          default: e
        } = await Promise.all([r.e("48835"), r.e("25292"), r.e("90508"), r.e("95477"), r.e("91245"), r.e("20875"), r.e("80284"), r.e("27146"), r.e("60691"), r.e("2286"), r.e("94928"), r.e("7654"), r.e("70205"), r.e("62117"), r.e("49049"), r.e("44156"), r.e("86133"), r.e("49286"), r.e("32652"), r.e("6850"), r.e("58227"), r.e("54408"), r.e("80728"), r.e("50629"), r.e("93375"), r.e("64679"), r.e("44606"), r.e("56534"), r.e("87154"), r.e("33213"), r.e("20849")]).then(r.bind(r, 545135));
        return t => {
          var r, l;
          return (0, n.jsx)(e, (r = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              }))), n.forEach(function(t) {
                var n;
                n = r[t], t in e ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : e[t] = n
              })
            }
            return e
          }({}, t), l = l = {
            guild: i
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r.push.apply(r, n)
            }
            return r
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
          }), r))
        }
      })
    },
    children: [(0, n.jsx)(m.Z, {
      tabIndex: -1,
      guild: i,
      showBadge: !0,
      className: l()(h.listAvatar, null == i.icon ? y.guildAvatarWithoutIcon : null),
      badgeStrokeColor: (0, d.Lq)((0, s.wj)(u) ? x.Ilk.PRIMARY_600 : x.Ilk.WHITE_500),
      badgeTooltipColor: a.FGA.PRIMARY,
      badgeTooltipDelay: v.vB,
      size: m.Z.Sizes.MEDIUM,
      active: !0
    }), (0, n.jsxs)("div", {
      className: h.listRowContent,
      children: [(0, n.jsx)("div", {
        className: h.listName,
        children: i.toString()
      }), f || null != c ? (0, n.jsxs)("div", {
        className: y.guildNick,
        children: [f && (0, n.jsx)(a.qEK, {
          src: t.getAvatarURL(i.id, O),
          size: a.EFr.SIZE_16,
          className: y.guildAvatar,
          "aria-hidden": !0
        }), null != c ? c : b.ZP.getName(t)]
      }) : null]
    })]
  })
}

function N(e) {
  let {
    user: t,
    onClose: r
  } = e, {
    trackUserProfileAction: i
  } = (0, f.KZ)(), {
    mutualGuilds: l,
    isFetching: s
  } = (0, j.Z)(t), o = (0, u.ZP)(), d = e => {
    (0, p.X)(e), r(), (0, c.xf)()
  };
  return (0, n.jsx)(a.zJl, {
    className: h.listScroller,
    fade: !0,
    children: null == l && s ? (0, n.jsx)("div", {
      className: h.empty,
      children: (0, n.jsx)(a.$jN, {})
    }) : (null != l || s) && (null == l ? void 0 : l.length) !== 0 ? null == l ? void 0 : l.map(e => {
      let {
        guild: r,
        nick: l
      } = e;
      return (0, n.jsx)(P, {
        user: t,
        guild: r,
        nick: l,
        theme: o,
        onSelect: () => {
          i({
            action: "PRESS_MUTUAL_GUILD"
          }), d(r.id)
        }
      }, r.id)
    }) : (0, n.jsxs)("div", {
      className: h.empty,
      children: [(0, n.jsx)("div", {
        className: h.emptyIconGuilds
      }), (0, n.jsx)("div", {
        className: h.emptyText,
        children: g.intl.string(g.t.zjVh8v)
      })]
    })
  })
}