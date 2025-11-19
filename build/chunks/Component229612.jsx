/** Chunk was on 11298 **/
/** chunk id: 229612, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk315322 = require("./315322.js"),
  Chunk257126 = require("./257126.js"),
  Chunk731220 = require("./731220.js"),
  Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.jsx");

function v(t) {
  let {
    title: e,
    options: n,
    selectedOption: i,
    freeformText: u,
    isFreeformEnabled: b,
    selectOption: v,
    onFreeformTextChange: O
  } = t, E = a.useMemo(() => n.map(s.Wo), [n]), f = a.useCallback(t => {
    let e = (0, s.xx)(t, n);
    null != e && v(e)
  }, [v, n]);
  return (0, l.jsxs)(r.Kqy, {
    gap: 24,
    children: [(0, l.jsxs)(r.Kqy, {
      gap: 16,
      children: [(0, l.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        color: "text-primary",
        children: e
      }), (0, l.jsx)(r.FXm, {
        options: E,
        value: null == i ? true : i.value,
        onChange: f
      })]
    }), (0, l.jsxs)(r.Kqy, {
      gap: 16,
      children: [(0, l.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        color: "text-primary",
        children: o.intl.string(o.t.oV10fv)
      }), (0, l.jsx)(r.Kx8, {
        value: u,
        maxLength: d.iF,
        onChange: O,
        disabled: !b
      })]
    })]
  })
}
let O = function(t) {
  let {
    searchContext: e,
    rating: n,
    transitionState: r,
    onClose: O
  } = t, E = (0, b.e)({
    getOptions: s.bM
  }), f = (0, b.e)({
    getOptions: s.cc
  }), c = n === d.aZ.BAD, {
    questionItems: g,
    questionTitles: _
  } = a.useMemo(() => {
    let t = [],
      e = [];
    return c && (t.push(E), e.push(o.intl.string(o.t.UyBQF7))), t.push(f), e.push(o.intl.string(o.t.LhMLCk)), {
      questionItems: t,
      questionTitles: e
    }
  }, [c, f, E]);
  a.useEffect(() => {
    (0, u.Yc)({
      rating: n,
      searchContext: e
    })
  }, [n, e]);
  let [h, p] = a.useState(0), S = 0 === h, N = h === g.length - 1, D = a.useMemo(() => {
    let t = g[h],
      e = _[h];
    return (0, l.jsx)(v, function(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {},
          l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
          return Object.getOwnPropertyDescriptor(n, t).enumerable
        }))), l.forEach(function(e) {
          var l;
          l = n[e], e in t ? Object.defineProperty(t, e, {
            value: l,
            enumerable: true,
            configurable: true,
            writable: true
          }) : t[e] = l
        })
      }
      return t
    }({
      title: e
    }, t))
  }, [g, _, h]), L = a.useMemo(() => g.every(s.cp), [g]), I = a.useMemo(() => {
    let t = g[h];
    return (0, s.cp)(t)
  }, [g, h]), C = a.useCallback(() => {
    L && ((0, u.z4)({
      rating: n,
      searchContext: e,
      unsatisfiedQuestionOption: c ? (0, s.HO)(E) : null,
      unsatisfiedQuestionText: c ? (0, s.sG)(E) : null,
      describeSearchQuestionOption: (0, s.HO)(f),
      describeSearchQuestionText: (0, s.sG)(f)
    }), O())
  }, [L, n, e, c, E, f, O]), T = a.useCallback(() => {
    if (S) return void O();
    p(h - 1)
  }, [S, h, O]), M = a.useCallback(() => {
    p(h + 1)
  }, [h]), y = a.useMemo(() => {
    let t = [];
    return S ? t.push({
      variant: "secondary",
      text: o.intl.string(o.t["ETE/oC"]),
      onClick: O
    }) : t.push({
      variant: "secondary",
      text: o.intl.string(o.t["13/7kX"]),
      onClick: T
    }), N ? t.push({
      variant: "primary",
      text: o.intl.string(o.t["4Zpxtl"]),
      onClick: C,
      disabled: !L
    }) : t.push({
      variant: "primary",
      text: o.intl.string(o.t.PDTjLN),
      onClick: M,
      disabled: !I
    }), t
  }, [S, N, L, I, O, T, C, M]);
  return (0, l.jsx)(i.Modal, {
    title: o.intl.string(o.t.LRGdVy),
    actions: y,
    onClose: O,
    transitionState: r,
    children: D
  })
}