/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => b
});
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(399606),
  o = n(481060),
  A = n(734893),
  c = n(150512),
  d = n(314897),
  u = n(8426),
  g = n(969632),
  f = n(535907),
  m = n(388032),
  p = n(668813);

function h(e) {
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
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = function(e) {
  let {
    guildId: t
  } = e, s = (0, l.cj)([g.Z], () => {
    var e;
    return null !== (e = g.Z.getSettings().welcomeMessage) && void 0 !== e ? e : f.z
  }), b = i.useCallback(() => (0, o.ZDy)(async () => {
    let {
      default: e
    } = await n.e("36371").then(n.bind(n, 893626));
    return n => (0, r.jsx)(e, C(h({}, n), {
      guildId: t,
      welcomeMessage: s,
      onSave: e => (0, u._N)(e)
    }))
  }), [t, s]), v = (0, l.e7)([d.default], () => d.default.getId());
  return (0, A.pw)(s) ? (0, r.jsx)(o.zxk, {
    size: o.zxk.Sizes.SMALL,
    onClick: b,
    children: (0, r.jsx)(o.Text, {
      variant: "text-sm/medium",
      children: m.NW.string(m.t["9Z+aEB"])
    })
  }) : (0, r.jsxs)(o.P3F, {
    className: p.editWelcomeSection,
    onClick: b,
    children: [(0, r.jsx)(c.Z, {
      guildId: t,
      welcomeMessage: {
        authorIds: s.authorIds.length > 0 ? s.authorIds : [v],
        message: s.message
      }
    }), (0, r.jsx)(o.ua7, {
      text: m.NW.string(m.t.bt75u7),
      children: e => (0, r.jsxs)("div", C(h({}, e), {
        className: a()(p.actionItemEditButton, p.editWelcomeButton),
        children: [(0, r.jsx)(o.vdY, {
          size: "md",
          color: "currentColor"
        }), (0, r.jsx)(o.nn4, {
          children: m.NW.string(m.t.bt75u7)
        })]
      }))
    })]
  })
}