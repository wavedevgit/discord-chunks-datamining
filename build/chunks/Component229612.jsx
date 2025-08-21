/** Chunk was on 11298 **/
/** chunk id: 229612, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
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

function _(e) {
  let {
    title: t,
    options: l,
    selectedOption: i,
    freeformText: b,
    isFreeformEnabled: d,
    selectOption: o,
    onFreeformTextChange: c
  } = e, _ = a.useMemo(() => l.map(f.Wo), [l]), g = a.useCallback(e => {
    let t = (0, f.xx)(e, l);
    null != t && o(t)
  }, [o, l]);
  return (0, n.jsxs)("div", {
    className: E.question,
    children: [(0, n.jsx)(s.X6q, {
      variant: "heading-lg/semibold",
      color: "text-primary",
      className: E.questionTitle,
      children: t
    }), (0, n.jsx)(s.FXm, {
      options: _,
      value: null == i ? true : i.value,
      onChange: g
    }), (0, n.jsx)(s.X6q, {
      variant: "heading-lg/semibold",
      color: "text-primary",
      className: E.textAreaTitle,
      children: O.intl.string(O.t.oV10fn)
    }), (0, n.jsx)(u.iS, {
      className: r()(E.freeformTextArea, {
        [E.freeformTextAreaDisabled]: !d
      }),
      value: b,
      maxLength: v.iF,
      onChange: c,
      disabled: !d
    })]
  })
}
let g = function(e) {
  let {
    searchContext: t,
    rating: l,
    transitionState: i,
    onClose: r
  } = e, u = (0, d.Dt)(), g = (0, c.e)({
    getOptions: f.bM
  }), h = (0, c.e)({
    getOptions: f.cc
  }), S = l === v.aZ.BAD, {
    questionItems: p,
    questionTitles: N
  } = a.useMemo(() => {
    let e = [],
      t = [];
    return S && (e.push(g), t.push(O.intl.string(O.t.UyBQFx))), e.push(h), t.push(O.intl.string(O.t.LhMLCg)), {
      questionItems: e,
      questionTitles: t
    }
  }, [S, h, g]);
  a.useEffect(() => {
    (0, o.Yc)({
      rating: l,
      searchContext: t
    })
  }, [l, t]);
  let [T, D] = a.useState(0), m = 0 === T, I = T === p.length - 1, x = a.useMemo(() => {
    let e = p[T],
      t = N[T];
    return (0, n.jsx)(_, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
          return Object.getOwnPropertyDescriptor(l, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = l[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({
      title: t
    }, e))
  }, [p, N, T]), C = a.useMemo(() => p.every(f.cp), [p]), L = a.useMemo(() => {
    let e = p[T];
    return (0, f.cp)(e)
  }, [p, T]), M = a.useCallback(() => {
    C && ((0, o.z4)({
      rating: l,
      searchContext: t,
      unsatisfiedQuestionOption: S ? (0, f.HO)(g) : null,
      unsatisfiedQuestionText: S ? (0, f.sG)(g) : null,
      describeSearchQuestionOption: (0, f.HO)(h),
      describeSearchQuestionText: (0, f.sG)(h)
    }), r())
  }, [C, l, t, S, g, h, r]), y = a.useCallback(() => {
    if (m) return void r();
    D(T - 1)
  }, [m, T, r]), A = a.useCallback(() => {
    D(T + 1)
  }, [T]);
  return (0, n.jsxs)(s.Y0X, {
    size: s.CgR.MEDIUM,
    transitionState: i,
    "aria-labelledby": u,
    parentComponent: "SearchResultsFeedbackModal",
    children: [(0, n.jsxs)(s.xBx, {
      separator: false,
      className: E.header,
      children: [(0, n.jsx)(s.X6q, {
        id: u,
        variant: "heading-xl/semibold",
        color: "text-primary",
        children: O.intl.string(O.t.LRGdV1)
      }), (0, n.jsx)(s.olH, {
        onClick: r
      })]
    }), (0, n.jsx)(s.hzk, {
      className: E.content,
      children: x
    }), (0, n.jsxs)(s.mzw, {
      separator: true,
      className: E.footer,
      direction: b.Z.Direction.HORIZONTAL,
      justify: b.Z.Justify.END,
      children: [(0, n.jsx)(s.zxk, {
        variant: "secondary",
        text: m ? O.intl.string(O.t["ETE/oK"]) : O.intl.string(O.t["13/7kZ"]),
        onClick: y
      }), I ? (0, n.jsx)(s.zxk, {
        variant: "primary",
        text: O.intl.string(O.t["4Zpxtr"]),
        onClick: M,
        disabled: !C
      }) : (0, n.jsx)(s.zxk, {
        variant: "primary",
        text: O.intl.string(O.t.PDTjLC),
        onClick: A,
        disabled: !L
      })]
    })]
  })
}