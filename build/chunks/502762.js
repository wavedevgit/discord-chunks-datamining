/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => _
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(481060),
  l = n(576635),
  c = n(213053),
  u = n(652853),
  d = n(228168),
  f = n(898446);
let _ = Object.assign(i.forwardRef(function(e, t) {
  let {
    user: n,
    displayProfile: i,
    profileType: o,
    className: _,
    pendingThemeColors: p,
    themeOverride: h,
    children: m,
    forceShowPremium: g = !1
  } = e, {
    theme: E,
    primaryColor: v,
    secondaryColor: b
  } = (0, l.Z)({
    user: n,
    displayProfile: i,
    pendingThemeColors: p,
    isPreview: g
  }), {
    profileThemeStyle: y,
    profileThemeClassName: O
  } = (0, c.Z)({
    theme: null != h ? h : E,
    primaryColor: v,
    secondaryColor: b
  }), I = {
    [f.biteSize]: o === d.y0.BITE_SIZE,
    [f.fullSize]: o === d.y0.FULL_SIZE,
    [f.panel]: o === d.y0.PANEL
  };
  return (0, r.jsx)("div", {
    className: a()(f.outer, O, I, _),
    style: y,
    ref: t,
    children: (0, r.jsx)("div", {
      className: a()(f.inner, I),
      children: (0, r.jsx)(s.ze6, {
        theme: null != h ? h : E,
        children: (0, r.jsx)(u.X, {
          profileType: o,
          theme: null != h ? h : E,
          primaryColor: v,
          secondaryColor: b,
          children: m
        })
      })
    })
  })
}), {
  Overlay: i.forwardRef(function(e, t) {
    let {
      children: n,
      className: i
    } = e, {
      profileType: o
    } = (0, u.z)(), s = {
      [f.biteSize]: o === d.y0.BITE_SIZE,
      [f.fullSize]: o === d.y0.FULL_SIZE,
      [f.panel]: o === d.y0.PANEL
    };
    return (0, r.jsx)("div", {
      ref: t,
      className: a()(f.overlay, s, i),
      children: n
    })
  })
})