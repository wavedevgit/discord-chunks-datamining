/** Chunk was on 1272 (d2669c1c27f74703.js) **/
n.d(t, {
  Z: () => g
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(748780),
  s = n(91192),
  c = n(481060),
  u = n(239091),
  d = n(687683),
  p = n(331926);

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

function f(e, t) {
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
let g = function(e) {
  let {
    index: t,
    children: l,
    user: g,
    channel: m,
    onClick: b,
    isFocused: _,
    isActive: E,
    onOtherHover: O,
    className: N
  } = e, [v, y] = i.useState(!1), [I, C] = i.useState(!1), S = () => {
    y(!0), !_ || E || I || null == O || O()
  }, T = () => {
    y(!1)
  }, P = (e, t) => {
    null != t && (C(!0), (0, u.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("79695"), n.e("69220"), n.e("31923")]).then(n.bind(n, 881351));
      return n => (0, r.jsx)(e, f(h({}, n), {
        user: t
      }))
    }, {
      onClose: () => {
        C(!1)
      }
    }))
  };
  return (0, r.jsx)(s.mh, {
    id: m.id,
    children: e => (0, r.jsx)(c.tEY, {
      offset: {
        left: -8,
        right: -8
      },
      children: (0, r.jsx)(a.Z.div, f(h({
        className: o()(p.messageRequestItem, N, {
          [p.active]: E || I,
          [p.firstItem]: 0 === t
        }),
        onContextMenu: e => P(e, g),
        onMouseEnter: S,
        onMouseLeave: T,
        onClick: null != b ? b : void 0,
        style: {
          LIST_ROW_HEIGHT: d.WN,
          opacity: 1
        }
      }, e), {
        children: l(v || E || I)
      }))
    })
  })
}