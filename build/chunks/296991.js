/** Chunk was on 5945 **/
n.d(t, {
  k: () => w
}), n(47120);
var r = n(200651),
  l = n(192379),
  a = n(120356),
  o = n.n(a),
  i = n(97613),
  c = n.n(i),
  s = n(999153),
  u = n(584922),
  d = n(442837),
  p = n(481060),
  b = n(541716),
  g = n(752305),
  f = n(893718),
  m = n(592125),
  x = n(984933),
  j = n(540457),
  y = n(681460),
  h = n(592286),
  O = n(981631),
  v = n(388032),
  _ = n(711277);

function C(e) {
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

function N(e, t) {
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
let P = "RULE";

function k(e) {
  let {
    rule: t,
    rulesChannel: n,
    index: a,
    onChange: i,
    onKeyDown: c,
    onClear: d,
    onRuleReorder: m,
    isDropHovered: x,
    focused: j,
    onFocus: y,
    previewEnabled: O,
    isDragEnabled: C
  } = e, N = l.useRef(null), k = l.useRef(null), [{
    textValue: w,
    richValue: I
  }, S] = l.useState((0, g.eK)(t.value)), [, D, E] = (0, s.c)({
    type: P,
    item: {
      rule: t,
      index: a
    },
    end: (e, t) => {
      null == e || t.didDrop() || m(e.rule, null, !0)
    }
  }), [, T] = (0, u.L)({
    accept: P,
    hover: (e, t) => {
      var n;
      let {
        index: r
      } = e, l = null === (n = N.current) || void 0 === n ? void 0 : n.getBoundingClientRect(), o = t.getClientOffset();
      if (null == l || null == o) return;
      let i = (l.bottom - l.top) / 2,
        c = o.y - l.top;
      r < a && c < i || r > a && c > i || m(e.rule, a, !1)
    },
    drop: e => {
      m(e.rule, a, !0)
    }
  });
  if (l.useLayoutEffect(() => (D(k), E(T(N)), () => {
      D(null), T(null)
    }), [D, T, E]), l.useEffect(() => {
      "" !== t.value && "" === w && S((0, g.eK)(t.value))
    }, [t.value, w]), null == n) return null;
  let R = "" !== t.value ? t.value : t.id;
  return (0, r.jsx)("div", {
    ref: N,
    className: o()(_.draggableInputContainer, {
      [_.dragging]: x
    }),
    "data-dnd-name": R,
    children: (0, r.jsxs)("div", {
      className: _.inputWrapper,
      children: [(0, r.jsx)(p.P3F, {
        onMouseDown: () => y(a),
        children: (0, r.jsx)(f.Z, {
          innerClassName: _.rulesTextAreaInput,
          type: b.Ie.RULES_INPUT,
          textValue: w,
          richValue: I,
          channel: n,
          placeholder: v.NW.string(v.t["BRkD4+"]),
          focused: j,
          onChange: (e, t, n) => {
            let r = t;
            r.length > h.fn && (r = r.slice(0, h.fn)), t !== r && (t = r, n = (0, g.JM)(r)), i(t), S({
              textValue: t,
              richValue: n
            })
          },
          onKeyDown: c,
          canMentionChannels: O,
          canMentionRoles: O,
          maxCharacterCount: h.fn,
          onSubmit: () => Promise.resolve({
            shouldClear: !1,
            shouldRefocus: !0
          })
        })
      }), (0, r.jsx)(p.zxk, {
        className: _.clearButton,
        onClick: d,
        look: p.zxk.Looks.BLANK,
        size: p.zxk.Sizes.NONE,
        children: (0, r.jsx)(p.k$p, {
          size: "md",
          color: "currentColor",
          className: _.clearIcon
        })
      }), (0, r.jsx)("div", {
        ref: k,
        className: _.dragContainer,
        "data-dnd-name": R,
        children: C && (0, r.jsx)(p.Vni, {
          size: "xs",
          color: "currentColor",
          className: _.dragIcon
        })
      })]
    })
  })
}

function w(e) {
  let {
    rules: t,
    setRules: n,
    guild: a
  } = e, o = a.rulesChannelId, i = a.hasFeature(O.oNc.PREVIEW_ENABLED), s = (0, d.e7)([m.Z], () => null != o ? m.Z.getChannel(o) : null), u = (0, d.e7)([x.ZP], () => x.ZP.getDefaultChannel(a.id)), [b, g] = l.useState(null), [f, P] = l.useState(null), w = l.useCallback(e => {
    if (t.length !== h.X2) {
      if (null != e && "" === t[t.length - 1].value) {
        let r = [...t];
        r[t.length - 1] = N(C({}, r[t.length - 1]), {
          value: e
        }), n(r), P(r.length - 1)
      } else n([...t, {
        id: c()(),
        value: null != e ? e : ""
      }]), P(t.length)
    }
  }, [t, n]), I = l.useCallback(() => {
    w(void 0)
  }, [w]), S = (e, r) => {
    let l = [...t];
    l[r] = N(C({}, l[r]), {
      value: e
    }), n(l)
  }, D = e => {
    let r = [...t.slice(0, e), ...t.slice(e + 1)];
    n(0 === r.length ? [{
      id: c()(),
      value: ""
    }] : r)
  }, E = l.useCallback((e, r, l) => {
    if (null == t) return;
    let a = t.indexOf(e);
    if (null != r && r !== a) {
      let l = [...t];
      l.splice(a, 1), l.splice(r, 0, e), n(l)
    }
    l ? null !== b && g(null) : r !== b && g(r)
  }, [b, t, n]), T = t.length === h.X2, R = l.useMemo(() => {
    let e = T ? v.NW.formatToPlainString(v.t.tU718P, {
      number: h.X2
    }) : void 0;
    return [{
      text: v.NW.string(v.t.DXq2oa),
      onClick: () => w(v.NW.string(v.t.XudkSk)),
      disabled: T,
      tooltipText: e
    }, {
      text: v.NW.string(v.t.nSqTjI),
      onClick: () => w(v.NW.string(v.t.np91jI)),
      disabled: T,
      tooltipText: e
    }, {
      text: v.NW.string(v.t.AtRxsL),
      onClick: () => w(v.NW.string(v.t.PNIDDA)),
      disabled: T,
      tooltipText: e
    }, {
      text: v.NW.string(v.t["0K5NJi"]),
      onClick: () => w(v.NW.string(v.t.HolIDw)),
      disabled: T,
      tooltipText: e
    }]
  }, [w, T]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: _.rulesContainer,
      children: t.map((e, n) => (0, r.jsx)(k, {
        rulesChannel: null != s ? s : u,
        rule: e,
        index: n,
        onChange: e => S(e, n),
        onClear: () => D(n),
        onRuleReorder: E,
        isDropHovered: n === b,
        focused: n === f,
        onFocus: P,
        previewEnabled: null == i || i,
        isDragEnabled: t.length > 1
      }, e.id))
    }), !T && (0, r.jsx)(j.A, {
      text: v.NW.string(v.t.Cq5Jub),
      onClick: I
    }), (0, r.jsx)(p.X6q, {
      variant: "text-xs/bold",
      color: "text-muted",
      className: _.exampleRulesTitle,
      children: v.NW.string(v.t.XHWj8f)
    }), (0, r.jsx)(y.j, {
      pills: R,
      pillClassName: _.pill
    })]
  })
}