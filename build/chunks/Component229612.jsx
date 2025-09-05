/** Chunk was on 11298 **/
/** chunk id: 229612, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk315322 = require("./315322.js"),
  Chunk257126 = require("./257126.js"),
  Chunk731220 = require("./731220.js"),
  Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk485525 = require("./485525.js");

function f(e) {
  let {
    title: t,
    options: n,
    selectedOption: u,
    freeformText: s,
    isFreeformEnabled: b,
    selectOption: o,
    onFreeformTextChange: c
  } = e, f = a.useMemo(() => n.map(d.Wo), [n]), E = a.useCallback(e => {
    let t = (0, d.xx)(e, n);
    null != t && o(t)
  }, [o, n]);
  return (0, l.jsxs)(r.Kqy, {
    gap: 24,
    children: [(0, l.jsxs)(r.Kqy, {
      gap: 16,
      children: [(0, l.jsx)(r.X6q, {
        variant: "heading-lg/semibold",
        color: "text-primary",
        children: t
      }), (0, l.jsx)(i.Gu, {
        options: f,
        value: null == u ? true : u.value,
        onChange: E
      })]
    }), (0, l.jsxs)(r.Kqy, {
      gap: 16,
      children: [(0, l.jsx)(r.X6q, {
        variant: "heading-lg/semibold",
        color: "text-primary",
        children: v.intl.string(v.t.oV10fn)
      }), (0, l.jsx)(r.Kx8, {
        value: s,
        maxLength: O.iF,
        onChange: c,
        disabled: !b
      })]
    })]
  })
}
let E = function(e) {
  let {
    searchContext: t,
    rating: n,
    transitionState: i,
    onClose: E
  } = e, g = (0, s.Dt)(), _ = (0, o.e)({
    getOptions: d.bM
  }), h = (0, o.e)({
    getOptions: d.cc
  }), p = n === O.aZ.BAD, {
    questionItems: S,
    questionTitles: N
  } = a.useMemo(() => {
    let e = [],
      t = [];
    return p && (e.push(_), t.push(v.intl.string(v.t.UyBQFx))), e.push(h), t.push(v.intl.string(v.t.LhMLCg)), {
      questionItems: e,
      questionTitles: t
    }
  }, [p, h, _]);
  a.useEffect(() => {
    (0, b.Yc)({
      rating: n,
      searchContext: t
    })
  }, [n, t]);
  let [D, I] = a.useState(0), C = 0 === D, T = D === S.length - 1, L = a.useMemo(() => {
    let e = S[D],
      t = N[D];
    return (0, l.jsx)(f, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
          var l;
          l = n[t], t in e ? Object.defineProperty(e, t, {
            value: l,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = l
        })
      }
      return e
    }({
      title: t
    }, e))
  }, [S, N, D]), M = a.useMemo(() => S.every(d.cp), [S]), y = a.useMemo(() => {
    let e = S[D];
    return (0, d.cp)(e)
  }, [S, D]), x = a.useCallback(() => {
    M && ((0, b.z4)({
      rating: n,
      searchContext: t,
      unsatisfiedQuestionOption: p ? (0, d.HO)(_) : null,
      unsatisfiedQuestionText: p ? (0, d.sG)(_) : null,
      describeSearchQuestionOption: (0, d.HO)(h),
      describeSearchQuestionText: (0, d.sG)(h)
    }), E())
  }, [M, n, t, p, _, h, E]), m = a.useCallback(() => {
    if (C) return void E();
    I(D - 1)
  }, [C, D, E]), R = a.useCallback(() => {
    I(D + 1)
  }, [D]);
  return (0, l.jsxs)(r.Y0X, {
    size: r.CgR.MEDIUM,
    transitionState: i,
    "aria-labelledby": g,
    parentComponent: "SearchResultsFeedbackModal",
    children: [(0, l.jsxs)(r.xBx, {
      separator: false,
      className: c.header,
      children: [(0, l.jsx)(r.X6q, {
        id: g,
        variant: "heading-xl/semibold",
        color: "text-primary",
        children: v.intl.string(v.t.LRGdV1)
      }), (0, l.jsx)(r.olH, {
        onClick: E
      })]
    }), (0, l.jsx)(r.hzk, {
      className: c.content,
      children: L
    }), (0, l.jsxs)(r.mzw, {
      separator: true,
      className: c.footer,
      direction: u.Z.Direction.HORIZONTAL,
      justify: u.Z.Justify.END,
      children: [(0, l.jsx)(r.zxk, {
        variant: "secondary",
        text: C ? v.intl.string(v.t["ETE/oK"]) : v.intl.string(v.t["13/7kZ"]),
        onClick: m
      }), T ? (0, l.jsx)(r.zxk, {
        variant: "primary",
        text: v.intl.string(v.t["4Zpxtr"]),
        onClick: x,
        disabled: !M
      }) : (0, l.jsx)(r.zxk, {
        variant: "primary",
        text: v.intl.string(v.t.PDTjLC),
        onClick: R,
        disabled: !y
      })]
    })]
  })
}