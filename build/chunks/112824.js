/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  R: () => C,
  Z: () => b
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(149765),
  l = n(442837),
  o = n(481060),
  A = n(430824),
  c = n(496675),
  d = n(700785),
  u = n(647086),
  g = n(135899),
  f = n(388032),
  m = n(713401);

function p(e) {
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

function h(e, t) {
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

function C(e) {
  return g.$X.filter(t => (null == e ? void 0 : e.id) !== u._ && d.oz(t, e))
}

function b(e) {
  let {
    guild: t
  } = e, i = (0, l.e7)([A.Z], () => A.Z.getRole(t.id, t.getEveryoneRoleId())), d = C(t), u = d.length > 0, b = g.$X.some(e => !c.Z.can(e, t, null, {
    [i.id]: h(p({}, i), {
      permissions: a.Od(i.permissions, e)
    })
  })), v = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: m.itemContent,
      children: [(0, r.jsx)(o.X6q, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: f.NW.string(f.t["+vaUlJ"])
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: f.NW.format(f.t.RXAtdH, {
          numPerms: d.length
        })
      })]
    }), u ? (0, r.jsx)(o.P4T, {
      size: "custom",
      color: "currentColor",
      height: 24,
      width: 24,
      className: m.warning,
      "aria-label": f.NW.string(f.t.bG7Gu7)
    }) : (0, r.jsx)(o.owK, {
      size: "custom",
      color: "currentColor",
      height: 24,
      width: 24,
      className: m.check,
      "aria-label": f.NW.string(f.t["YQix8/"])
    })]
  });
  return u ? b ? (0, r.jsx)(o.ua7, {
    text: f.NW.string(f.t["E5v/a2"]),
    children: e => (0, r.jsx)("div", h(p({
      className: s()(m.simpleItemWrapper, m.disabled)
    }, e), {
      children: v
    }))
  }) : (0, r.jsx)(o.P3F, {
    onClick: () => {
      (0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("39627").then(n.bind(n, 193845));
        return n => (0, r.jsx)(e, p({
          guild: t
        }, n))
      })
    },
    className: s()(m.simpleItemWrapper, m.clickable),
    children: v
  }) : (0, r.jsx)("div", {
    className: m.simpleItemWrapper,
    children: v
  })
}