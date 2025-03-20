/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => u
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(481060),
  a = n(457414),
  l = n(311173),
  o = n(388032),
  A = n(97895);

function c(e) {
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

function d(e, t) {
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

function u(e) {
  var t;
  let {
    rule: n,
    onChangeRule: u,
    collapsed: g = !1
  } = e, [f, m] = i.useState(!g), p = i.useCallback(() => {
    m(!f)
  }, [f, m]), h = i.useCallback(e => {
    u(d(c({}, n), {
      triggerMetadata: d(c({}, n.triggerMetadata), {
        regexPatterns: e
      })
    }))
  }, [u, n]);
  return (0, a.S)(n.triggerType) ? (0, r.jsx)(s.zF9, {
    isExpanded: f,
    collapsibleContent: (0, r.jsx)(l.Z, {
      rule: n,
      onChangeText: h,
      className: A.textAreaContainer,
      initialValue: null === (t = n.triggerMetadata) || void 0 === t ? void 0 : t.regexPatterns
    }),
    className: A.collapseable,
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(s.P3F, {
        onClick: e => {
          p(), t(e)
        },
        children: (0, r.jsxs)("div", {
          className: A.header,
          children: [(0, r.jsx)(s.X6q, {
            variant: "text-sm/medium",
            children: o.NW.string(o.t.dnunm5)
          }), f ? (0, r.jsx)(s.u04, {
            size: "md",
            color: "currentColor",
            className: A.arrow
          }) : (0, r.jsx)(s.CJ0, {
            size: "md",
            color: "currentColor",
            className: A.arrow
          })]
        })
      })
    }
  }) : null
}