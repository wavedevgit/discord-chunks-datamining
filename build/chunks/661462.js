/** Chunk was on 30776 **/
t.d(n, {
  Z: () => p
}), t(388685);
var o = t(200651),
  r = t(192379),
  a = t(481060),
  i = t(785717),
  c = t(128156),
  l = t(210788),
  s = t(228168),
  d = t(388032),
  u = t(662776);

function f(e) {
  let {
    user: n,
    currentUser: t,
    section: r,
    subsection: a,
    displayProfile: i,
    guildId: d,
    channelId: u,
    onClose: f
  } = e;
  return r === s.oh.ACTIVITY ? (0, o.jsx)(c.Z, {
    user: n,
    currentUser: t,
    displayProfile: i,
    guildId: d,
    subsection: a,
    onClose: f
  }) : r === s.oh.MUTUALS ? (0, o.jsx)(l.Z, {
    user: n,
    guildId: d,
    channelId: u,
    onClose: f
  }) : null
}

function p(e) {
  var n, t, c;
  let {
    user: l,
    currentUser: p,
    displayProfile: m,
    guildId: b,
    channelId: _,
    initialSection: h,
    initialSubsection: y,
    onClose: g
  } = e, {
    trackUserProfileAction: x
  } = (0, i.KZ)(), j = r.useMemo(() => l.id === p.id ? [{
    section: s.oh.ACTIVITY,
    text: d.intl.string(d.t.chq59f),
    subsection: void 0
  }] : [{
    section: s.oh.ACTIVITY,
    text: d.intl.string(d.t.chq59f),
    subsection: void 0
  }, {
    section: s.oh.MUTUALS,
    text: d.intl.string(d.t.f5KLNj),
    subsection: void 0
  }], [l.id, p.id]), [{
    section: I,
    subsection: v,
    text: O
  }, C] = r.useState((t = function(e) {
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
  }({}, null != (n = j.find(e => {
    let {
      section: n
    } = e;
    return n === h
  })) ? n : j[0]), c = c = {
    subsection: y
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(c)) : (function(e, n) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      t.push.apply(t, o)
    }
    return t
  })(Object(c)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(c, e))
  }), t));
  return (0, o.jsxs)("div", {
    className: u.container,
    children: [(0, o.jsx)(a.njP, {
      type: "top",
      className: u.tabBar,
      selectedItem: I,
      onItemSelect: e => {
        x({
          action: "PRESS_SECTION",
          section: e
        }), C(n => {
          var t;
          return null != (t = j.find(n => n.section === e)) ? t : n
        })
      },
      children: j.map(e => (0, o.jsx)(a.njP.Item, {
        className: u.tabBarItem,
        id: e.section,
        "aria-label": e.text,
        children: (0, o.jsx)(a.X6q, {
          variant: "heading-lg/medium",
          children: e.text
        })
      }, e.section))
    }), (0, o.jsx)(a.njP.Panel, {
      id: I,
      "aria-label": O,
      className: u.tabBarPanel,
      children: (0, o.jsx)(f, {
        user: l,
        currentUser: p,
        displayProfile: m,
        guildId: b,
        channelId: _,
        section: I,
        subsection: v,
        onClose: g
      })
    })]
  })
}