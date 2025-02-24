/** Chunk was on 58121 **/
t.d(n, {
  I: () => b,
  Z: () => v
}), t(47120), t(301563);
var l = t(200651),
  r = t(192379),
  a = t(442837),
  i = t(481060),
  o = t(325708),
  s = t(213557),
  c = t(433355),
  d = t(324067),
  u = t(984933),
  m = t(430824),
  h = t(496675),
  p = t(626135),
  f = t(216306),
  g = t(775028),
  x = t(981631),
  _ = t(176505),
  C = t(388032),
  j = t(509747);

function b(e) {
  let {
    channelId: n
  } = e;
  return (0, l.jsx)(o.Z, {
    sidebarType: o.y.ThreadSidebar,
    maxWidth: 600,
    children: (0, l.jsx)(s.Z, {
      channelId: n,
      baseChannelId: _.oC.CHANNEL_BROWSER
    })
  })
}

function v(e) {
  let {
    guildId: n
  } = e, [o, s] = r.useState(""), b = (0, a.e7)([m.Z], () => m.Z.getGuild(n)), v = (0, a.e7)([u.ZP], () => u.ZP.getChannels(n)), N = (0, a.e7)([d.Z], () => d.Z.getCategories(n)), y = (0, f.Fo)(n, N, v, o), O = (0, a.e7)([h.Z], () => h.Z.canWithPartialContext(x.Plq.MANAGE_CHANNELS, {
    guildId: n
  })), I = (0, a.e7)([c.ZP], () => null != c.ZP.getCurrentSidebarChannelId(_.oC.CHANNEL_BROWSER)), Z = r.useCallback(() => s(""), [s]), w = r.useCallback(() => {
    (0, i.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("45094"), t.e("89013")]).then(t.bind(t, 218613));
      return t => {
        var r, a;
        return (0, l.jsx)(e, (r = function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              l = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), l.forEach(function(n) {
              var l;
              l = t[n], n in e ? Object.defineProperty(e, n, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[n] = l
            })
          }
          return e
        }({}, t), a = a = {
          channelType: null,
          guildId: n
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, n) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            t.push.apply(t, l)
          }
          return t
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
        }), r))
      }
    })
  }, [n]);
  return null == b ? null : (0, l.jsxs)("div", {
    className: j.pageBody,
    children: [(0, l.jsxs)("div", {
      className: j.header,
      children: [(0, l.jsx)(i.E1j, {
        className: j.search,
        size: i.E1j.Sizes.MEDIUM,
        query: o,
        onChange: e => {
          "" === o && "" !== e && p.default.track(x.rMx.SEARCH_STARTED, {
            search_type: "channel browser"
          }), s(e.toLowerCase())
        },
        onClear: Z,
        placeholder: C.NW.string(C.t.s5MnmJ)
      }), O ? (0, l.jsxs)(i.zxk, {
        className: j.createButton,
        innerClassName: j.createButtonInner,
        onClick: w,
        children: [(0, l.jsx)(i.qJs, {
          size: "sm",
          color: "currentColor",
          className: j.createIcon
        }), C.NW.string(C.t.CumH4u)]
      }) : null]
    }), (0, l.jsx)(g.Z, {
      className: j.browser,
      channels: v,
      categories: y,
      guild: b,
      hasSidebar: I
    })]
  })
}