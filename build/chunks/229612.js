/** Chunk was on 11298 **/
n.d(t, {
  default: () => g
}), n(539854), n(388685);
var l = n(255367),
  a = n(73800),
  i = n(120356),
  r = n.n(i),
  u = n(481060),
  s = n(600164),
  b = n(313201),
  d = n(315322),
  o = n(257126),
  c = n(731220),
  f = n(531578),
  v = n(388032),
  O = n(925126);

function E(e) {
  let {
    title: t,
    options: n,
    selectedOption: i,
    freeformText: s,
    isFreeformEnabled: b,
    selectOption: d,
    onFreeformTextChange: c
  } = e, E = a.useMemo(() => n.map(o.Wo), [n]), g = a.useCallback(e => {
    let t = (0, o.xx)(e, n);
    null != t && d(t)
  }, [d, n]);
  return (0, l.jsxs)("div", {
    className: O.question,
    children: [(0, l.jsx)(u.X6q, {
      variant: "heading-lg/semibold",
      color: "text-primary",
      className: O.questionTitle,
      children: t
    }), (0, l.jsx)(u.FXm, {
      options: E,
      value: null == i ? void 0 : i.value,
      onChange: g
    }), (0, l.jsx)(u.X6q, {
      variant: "heading-lg/semibold",
      color: "text-primary",
      className: O.textAreaTitle,
      children: v.intl.string(v.t.oV10fn)
    }), (0, l.jsx)(u.Kx8, {
      className: r()(O.freeformTextArea, {
        [O.freeformTextAreaDisabled]: !b
      }),
      value: s,
      maxLength: f.iF,
      onChange: c,
      disabled: !b
    })]
  })
}
let g = function(e) {
  let {
    searchId: t,
    searchType: n,
    rating: i,
    transitionState: r,
    onClose: g
  } = e, _ = (0, b.Dt)(), h = (0, c.e)({
    getOptions: o.bM
  }), S = (0, c.e)({
    getOptions: o.cc
  }), p = i === f.aZ.BAD, {
    questionItems: N,
    questionTitles: T
  } = a.useMemo(() => {
    let e = [],
      t = [];
    return p && (e.push(h), t.push(v.intl.string(v.t.UyBQFx))), e.push(S), t.push(v.intl.string(v.t.LhMLCg)), {
      questionItems: e,
      questionTitles: t
    }
  }, [p, S, h]);
  a.useEffect(() => {
    (0, d.Yc)({
      rating: i,
      searchId: t,
      searchType: n
    })
  }, [i, t, n]);
  let [D, m] = a.useState(0), x = 0 === D, C = D === N.length - 1, I = a.useMemo(() => {
    let e = N[D],
      t = T[D];
    return (0, l.jsx)(E, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
          var l;
          l = n[t], t in e ? Object.defineProperty(e, t, {
            value: l,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = l
        })
      }
      return e
    }({
      title: t
    }, e))
  }, [N, T, D]), L = a.useMemo(() => N.every(o.cp), [N]), M = a.useMemo(() => {
    let e = N[D];
    return (0, o.cp)(e)
  }, [N, D]), y = a.useCallback(() => {
    L && ((0, d.z4)({
      rating: i,
      searchId: t,
      searchType: n,
      unsatisfiedQuestionOption: p ? (0, o.HO)(h) : null,
      unsatisfiedQuestionText: p ? (0, o.sG)(h) : null,
      describeSearchQuestionOption: (0, o.HO)(S),
      describeSearchQuestionText: (0, o.sG)(S)
    }), g())
  }, [h, p, L, g, i, S, t, n]), A = a.useCallback(() => {
    if (x) return void g();
    m(D - 1)
  }, [x, D, g]), R = a.useCallback(() => {
    m(D + 1)
  }, [D]);
  return (0, l.jsxs)(u.Y0X, {
    size: u.CgR.MEDIUM,
    transitionState: r,
    "aria-labelledby": _,
    parentComponent: "SearchResultsFeedbackModal",
    children: [(0, l.jsxs)(u.xBx, {
      separator: !1,
      className: O.header,
      children: [(0, l.jsx)(u.X6q, {
        id: _,
        variant: "heading-xl/semibold",
        color: "text-primary",
        children: v.intl.string(v.t.LRGdV1)
      }), (0, l.jsx)(u.olH, {
        onClick: g
      })]
    }), (0, l.jsx)(u.hzk, {
      className: O.content,
      children: I
    }), (0, l.jsxs)(u.mzw, {
      separator: !0,
      className: O.footer,
      direction: s.Z.Direction.HORIZONTAL,
      justify: s.Z.Justify.END,
      children: [(0, l.jsx)(u.zxk, {
        variant: "secondary",
        text: x ? v.intl.string(v.t["ETE/oK"]) : v.intl.string(v.t["13/7kZ"]),
        onClick: A
      }), C ? (0, l.jsx)(u.zxk, {
        variant: "primary",
        text: v.intl.string(v.t["4Zpxtr"]),
        onClick: y,
        disabled: !L
      }) : (0, l.jsx)(u.zxk, {
        variant: "primary",
        text: v.intl.string(v.t.PDTjLC),
        onClick: R,
        disabled: !M
      })]
    })]
  })
}