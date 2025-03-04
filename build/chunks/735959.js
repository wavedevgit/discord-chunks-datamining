/** Chunk was on 93886 **/
n.d(t, {
  Z: () => f
}), n(47120);
var r = n(200651),
  a = n(192379),
  l = n(389117),
  i = n(913527),
  o = n.n(i),
  s = n(330711),
  c = n(442837),
  d = n(481060),
  u = n(665149),
  m = n(706454),
  h = n(428530),
  p = n(257785),
  x = n(388032);

function f() {
  let e = (0, c.e7)([m.default], () => m.default.locale),
    [t, n] = a.useState(),
    i = (0, l.runtimeHashMessageKey)(null != t ? t : ""),
    f = a.useMemo(() => x.t[i], [i]);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsxs)(u.ZP, {
      children: [(0, r.jsx)(u.ZP.Icon, {
        icon: d.os0,
        tooltip: "Locale"
      }), (0, r.jsx)(u.ZP.Title, {
        children: "Locale"
      })]
    }), (0, r.jsxs)(p.E, {
      children: [(0, r.jsx)(p.Z9, {
        name: "Active System",
        children: "@discord/intl"
      }), (0, r.jsx)(p.Z9, {
        name: "App",
        children: e
      }), (0, r.jsx)(p.Z9, {
        name: "@discord/intl",
        children: x.NW.currentLocale
      }), (0, r.jsx)(p.Z9, {
        name: "common i18n",
        children: s.Z.getLocale()
      }), (0, r.jsx)(p.Z9, {
        name: "Moment",
        children: o().locale()
      })]
    }), (0, r.jsxs)(u.ZP, {
      children: [(0, r.jsx)(u.ZP.Icon, {
        icon: d.os0,
        tooltip: "Messages"
      }), (0, r.jsx)(u.ZP.Title, {
        children: "New System Messages"
      })]
    }), (0, r.jsx)(p.E, {
      children: (0, r.jsx)(p.Z9, {
        name: "Unique Rendered Main Messages",
        children: Object.keys(x.t).length
      })
    }), (0, r.jsx)(d.oil, {
      onChange: function(e) {
        n(e)
      },
      name: "Message name",
      style: {
        margin: 16
      },
      placeholder: "Find a message"
    }), (0, r.jsxs)(p.E, {
      children: [(0, r.jsx)(p.Z9, {
        name: "Hashed key",
        children: i
      }), (0, r.jsx)(p.Z9, {
        name: "Exists?",
        children: null != f ? "yes" : "no"
      })]
    }), (0, r.jsx)(h.Z, {
      data: null == f ? void 0 : f(e)
    })]
  })
}