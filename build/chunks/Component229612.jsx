/** Chunk was on 11298 **/
/** chunk id: 229612, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => _
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

function g(e) {
  let {
    title: t,
    options: n,
    selectedOption: i,
    freeformText: b,
    isFreeformEnabled: d,
    selectOption: o,
    onFreeformTextChange: f
  } = e, g = a.useMemo(() => n.map(c.Wo), [n]), _ = a.useCallback(e => {
    let t = (0, c.xx)(e, n);
    null != t && o(t)
  }, [o, n]);
  return (0, l.jsxs)("div", {
    className: E.question,
    children: [(0, l.jsx)(s.X6q, {
      variant: "heading-lg/semibold",
      color: "text-primary",
      className: E.questionTitle,
      children: t
    }), (0, l.jsx)(s.FXm, {
      options: g,
      value: null == i ? true : i.value,
      onChange: _
    }), (0, l.jsx)(s.X6q, {
      variant: "heading-lg/semibold",
      color: "text-primary",
      className: E.textAreaTitle,
      children: O.intl.string(O.t.oV10fn)
    }), (0, l.jsx)(u.iS, {
      className: r()(E.freeformTextArea, {
        [E.freeformTextAreaDisabled]: !d
      }),
      value: b,
      maxLength: v.iF,
      onChange: f,
      disabled: !d
    })]
  })
}
let _ = function(e) {
  let {
    searchContext: t,
    rating: n,
    transitionState: i,
    onClose: r
  } = e, u = (0, d.Dt)(), _ = (0, f.e)({
    getOptions: c.bM
  }), h = (0, f.e)({
    getOptions: c.cc
  }), S = n === v.aZ.BAD, {
    questionItems: p,
    questionTitles: N
  } = a.useMemo(() => {
    let e = [],
      t = [];
    return S && (e.push(_), t.push(O.intl.string(O.t.UyBQFx))), e.push(h), t.push(O.intl.string(O.t.LhMLCg)), {
      questionItems: e,
      questionTitles: t
    }
  }, [S, h, _]);
  a.useEffect(() => {
    (0, o.Yc)({
      rating: n,
      searchContext: t
    })
  }, [n, t]);
  let [T, D] = a.useState(0), m = 0 === T, x = T === p.length - 1, C = a.useMemo(() => {
    let e = p[T],
      t = N[T];
    return (0, l.jsx)(g, function(e) {
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
  }, [p, N, T]), I = a.useMemo(() => p.every(c.cp), [p]), L = a.useMemo(() => {
    let e = p[T];
    return (0, c.cp)(e)
  }, [p, T]), M = a.useCallback(() => {
    I && ((0, o.z4)({
      rating: n,
      searchContext: t,
      unsatisfiedQuestionOption: S ? (0, c.HO)(_) : null,
      unsatisfiedQuestionText: S ? (0, c.sG)(_) : null,
      describeSearchQuestionOption: (0, c.HO)(h),
      describeSearchQuestionText: (0, c.sG)(h)
    }), r())
  }, [I, n, t, S, _, h, r]), y = a.useCallback(() => {
    if (m) return void r();
    D(T - 1)
  }, [m, T, r]), A = a.useCallback(() => {
    D(T + 1)
  }, [T]);
  return (0, l.jsxs)(s.Y0X, {
    size: s.CgR.MEDIUM,
    transitionState: i,
    "aria-labelledby": u,
    parentComponent: "SearchResultsFeedbackModal",
    children: [(0, l.jsxs)(s.xBx, {
      separator: false,
      className: E.header,
      children: [(0, l.jsx)(s.X6q, {
        id: u,
        variant: "heading-xl/semibold",
        color: "text-primary",
        children: O.intl.string(O.t.LRGdV1)
      }), (0, l.jsx)(s.olH, {
        onClick: r
      })]
    }), (0, l.jsx)(s.hzk, {
      className: E.content,
      children: C
    }), (0, l.jsxs)(s.mzw, {
      separator: true,
      className: E.footer,
      direction: b.Z.Direction.HORIZONTAL,
      justify: b.Z.Justify.END,
      children: [(0, l.jsx)(s.zxk, {
        variant: "secondary",
        text: m ? O.intl.string(O.t["ETE/oK"]) : O.intl.string(O.t["13/7kZ"]),
        onClick: y
      }), x ? (0, l.jsx)(s.zxk, {
        variant: "primary",
        text: O.intl.string(O.t["4Zpxtr"]),
        onClick: M,
        disabled: !I
      }) : (0, l.jsx)(s.zxk, {
        variant: "primary",
        text: O.intl.string(O.t.PDTjLC),
        onClick: A,
        disabled: !L
      })]
    })]
  })
}