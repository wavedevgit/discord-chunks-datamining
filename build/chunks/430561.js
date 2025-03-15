/** Chunk was on 88712 **/
r.d(t, {
  GY: () => O,
  PI: () => f,
  RT: () => g,
  ls: () => b
});
var n = r(200651);
r(192379);
var i = r(120356),
  l = r.n(i),
  o = r(692547),
  a = r(481060),
  s = r(765250),
  c = r(388032),
  u = r(304046);

function d(e) {
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
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function f(e) {
  let {
    children: t
  } = e;
  return (0, n.jsx)("div", {
    className: u.titleWrapper,
    children: (0, n.jsx)(a.Text, {
      variant: "text-xs/semibold",
      color: "header-primary",
      children: t
    })
  })
}

function b(e) {
  let {
    onClick: t
  } = e, r = c.NW.string(c.t["3D5yo6"]);
  return (0, n.jsx)(a.ua7, {
    text: r,
    "aria-label": r,
    children: e => (0, n.jsx)(a.P3F, p(d({}, e), {
      className: u.button,
      onClick: t,
      children: (0, n.jsx)(a.ewm, {
        size: "xxs",
        color: o.Z.colors.INTERACTIVE_ACTIVE
      })
    }))
  })
}

function O(e) {
  let {
    widgetId: t,
    showAllStreams: r
  } = e, i = r ? c.NW.string(c.t.q2B3rq) : c.NW.string(c.t.JKGi6u), f = () => {
    (0, s.zG)(t, {
      showAllStreams: !r
    })
  };
  return (0, n.jsx)(a.ua7, {
    text: i,
    "aria-label": i,
    children: e => (0, n.jsx)(a.P3F, p(d({}, e), {
      className: l()(u.button, r && u.active),
      onClick: f,
      children: (0, n.jsx)(a.pzj, {
        size: "xxs",
        color: r ? o.Z.colors.BG_BRAND : o.Z.colors.INTERACTIVE_ACTIVE
      })
    }))
  })
}

function g(e) {
  let {
    id: t,
    pinned: r
  } = e, i = r ? c.NW.string(c.t.cSu80t) : c.NW.string(c.t.cM8Vnp);
  return (0, n.jsx)(a.ua7, {
    text: i,
    "aria-label": i,
    children: e => (0, n.jsx)(a.P3F, p(d({}, e), {
      className: l()(u.button, r && u.active),
      onClick: () => (0, s.xh)(t),
      children: (0, n.jsx)(a.k5M, {
        size: "xxs",
        color: r ? o.Z.colors.BG_BRAND : o.Z.colors.INTERACTIVE_ACTIVE
      })
    }))
  })
}