/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => p
});
var r = n(200651),
  i = n(192379),
  s = n(536982),
  a = n(285318),
  l = n(456677),
  o = n(55889),
  c = n(300453),
  A = n(620436),
  d = n(273504),
  u = n(388032),
  g = n(617185);

function f(e) {
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

function m(e, t) {
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

function p(e) {
  var t, n, p;
  let {
    rule: h,
    onChangeRule: C
  } = e, b = i.useCallback(e => {
    C(m(f({}, h), {
      triggerMetadata: m(f({}, h.triggerMetadata), {
        allowList: e
      })
    }))
  }, [C, h]);
  return (0, r.jsxs)("div", {
    className: g.cardContentsContainer,
    children: [(0, r.jsxs)(c.Z, {
      step: 1,
      header: u.NW.string(u.t.CX5YfX),
      children: [(0, r.jsx)(a.Z, {
        rule: h,
        onChangeRule: C
      }), (0, r.jsx)(s.Z, {
        onChange: b,
        initialValue: null === (t = h.triggerMetadata) || void 0 === t ? void 0 : t.allowList,
        maxWordCount: d.I3,
        collapsed: (null === (n = h.triggerMetadata) || void 0 === n ? void 0 : n.allowList) == null || (null === (p = h.triggerMetadata) || void 0 === p ? void 0 : p.allowList.length) === 0
      })]
    }), (0, r.jsx)(A.Z, {
      type: A.Z.Type.ARROW_DOWN
    }), (0, r.jsx)(c.Z, {
      step: 2,
      header: u.NW.string(u.t["18TOiY"]),
      children: (0, r.jsx)(l.Z, {
        rule: h,
        onChangeRule: C
      })
    }), (0, r.jsx)(A.Z, {
      type: A.Z.Type.CROSS
    }), (0, r.jsx)(c.Z, {
      step: 3,
      header: u.NW.string(u.t.eq3gjo),
      children: (0, r.jsx)(o.Z, {
        rule: h,
        onChangeRule: C
      })
    })]
  })
}