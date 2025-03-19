/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => h
});
var r = n(200651),
  i = n(192379),
  s = n(536982),
  a = n(456677),
  l = n(951665),
  o = n(428760),
  c = n(55889),
  A = n(300453),
  d = n(620436),
  u = n(273504),
  g = n(388032),
  f = n(617185);

function m(e) {
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

function p(e, t) {
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

function h(e) {
  var t, n, h, C, b, v;
  let {
    rule: x,
    onChangeRule: N
  } = e, j = i.useCallback(e => {
    N(p(m({}, x), {
      triggerMetadata: p(m({}, x.triggerMetadata), {
        keywordFilter: e
      })
    }))
  }, [N, x]), E = i.useCallback(e => {
    N(p(m({}, x), {
      triggerMetadata: p(m({}, x.triggerMetadata), {
        allowList: e
      })
    }))
  }, [N, x]);
  return (0, r.jsxs)("div", {
    className: f.cardContentsContainer,
    children: [(0, r.jsxs)(A.Z, {
      step: 1,
      header: g.NW.string(g.t["ue+tnZ"]),
      children: [(0, r.jsx)(o.Z, {
        onChangeText: j,
        maxWordCount: u.RH,
        initialValue: null === (t = x.triggerMetadata) || void 0 === t ? void 0 : t.keywordFilter
      }), (0, r.jsx)(l.Z, {
        rule: x,
        onChangeRule: N,
        collapsed: (null == x ? void 0 : null === (n = x.triggerMetadata) || void 0 === n ? void 0 : n.regexPatterns) == null || (null == x ? void 0 : null === (h = x.triggerMetadata) || void 0 === h ? void 0 : h.regexPatterns.length) === 0
      }), (0, r.jsx)(s.Z, {
        onChange: E,
        initialValue: null === (C = x.triggerMetadata) || void 0 === C ? void 0 : C.allowList,
        maxWordCount: u.n4,
        collapsed: (null === (b = x.triggerMetadata) || void 0 === b ? void 0 : b.allowList) == null || (null === (v = x.triggerMetadata) || void 0 === v ? void 0 : v.allowList.length) === 0
      })]
    }), (0, r.jsx)(d.Z, {
      type: d.Z.Type.ARROW_DOWN
    }), (0, r.jsx)(A.Z, {
      step: 2,
      header: g.NW.string(g.t["18TOiY"]),
      children: (0, r.jsx)(a.Z, {
        rule: x,
        onChangeRule: N
      })
    }), (0, r.jsx)(d.Z, {
      type: d.Z.Type.CROSS
    }), (0, r.jsx)(A.Z, {
      step: 3,
      header: g.NW.string(g.t.eq3gjo),
      children: (0, r.jsx)(c.Z, {
        rule: x,
        onChangeRule: N
      })
    })]
  })
}