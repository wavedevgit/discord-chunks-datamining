/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  k: () => w
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(97613),
  o = n.n(l),
  c = n(999153),
  A = n(584922),
  d = n(442837),
  u = n(481060),
  g = n(541716),
  f = n(752305),
  m = n(893718),
  p = n(592125),
  h = n(984933),
  C = n(540457),
  b = n(681460),
  v = n(592286),
  x = n(981631),
  N = n(388032),
  j = n(711277);

function E(e) {
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

function I(e, t) {
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
let O = "RULE";

function y(e) {
  let {
    rule: t,
    rulesChannel: n,
    index: s,
    onChange: l,
    onKeyDown: o,
    onClear: d,
    onRuleReorder: p,
    isDropHovered: h,
    focused: C,
    onFocus: b,
    previewEnabled: x,
    isDragEnabled: E
  } = e, I = i.useRef(null), y = i.useRef(null), [{
    textValue: w,
    richValue: P
  }, B] = i.useState((0, f.eK)(t.value)), [, D, T] = (0, c.c)({
    type: O,
    item: {
      rule: t,
      index: s
    },
    end: (e, t) => {
      null == e || t.didDrop() || p(e.rule, null, !0)
    }
  }), [, S] = (0, A.L)({
    accept: O,
    hover: (e, t) => {
      var n;
      let {
        index: r
      } = e, i = null === (n = I.current) || void 0 === n ? void 0 : n.getBoundingClientRect(), a = t.getClientOffset();
      if (null == i || null == a) return;
      let l = (i.bottom - i.top) / 2,
        o = a.y - i.top;
      r < s && o < l || r > s && o > l || p(e.rule, s, !1)
    },
    drop: e => {
      p(e.rule, s, !0)
    }
  });
  if (i.useLayoutEffect(() => (D(y), T(S(I)), () => {
      D(null), S(null)
    }), [D, S, T]), i.useEffect(() => {
      "" !== t.value && "" === w && B((0, f.eK)(t.value))
    }, [t.value, w]), null == n) return null;
  let L = "" !== t.value ? t.value : t.id;
  return (0, r.jsx)("div", {
    ref: I,
    className: a()(j.draggableInputContainer, {
      [j.dragging]: h
    }),
    "data-dnd-name": L,
    children: (0, r.jsxs)("div", {
      className: j.inputWrapper,
      children: [(0, r.jsx)(u.P3F, {
        onMouseDown: () => b(s),
        children: (0, r.jsx)(m.Z, {
          innerClassName: j.rulesTextAreaInput,
          type: g.Ie.RULES_INPUT,
          textValue: w,
          richValue: P,
          channel: n,
          placeholder: N.NW.string(N.t["BRkD4+"]),
          focused: C,
          onChange: (e, t, n) => {
            let r = t;
            r.length > v.fn && (r = r.slice(0, v.fn)), t !== r && (t = r, n = (0, f.JM)(r)), l(t), B({
              textValue: t,
              richValue: n
            })
          },
          onKeyDown: o,
          canMentionChannels: x,
          canMentionRoles: x,
          maxCharacterCount: v.fn,
          onSubmit: () => Promise.resolve({
            shouldClear: !1,
            shouldRefocus: !0
          })
        })
      }), (0, r.jsx)(u.zxk, {
        className: j.clearButton,
        onClick: d,
        look: u.zxk.Looks.BLANK,
        size: u.zxk.Sizes.NONE,
        children: (0, r.jsx)(u.k$p, {
          size: "md",
          color: "currentColor",
          className: j.clearIcon
        })
      }), (0, r.jsx)("div", {
        ref: y,
        className: j.dragContainer,
        "data-dnd-name": L,
        children: E && (0, r.jsx)(u.Vni, {
          size: "xs",
          color: "currentColor",
          className: j.dragIcon
        })
      })]
    })
  })
}

function w(e) {
  let {
    rules: t,
    setRules: n,
    guild: s
  } = e, a = s.rulesChannelId, l = s.hasFeature(x.oNc.PREVIEW_ENABLED), c = (0, d.e7)([p.Z], () => null != a ? p.Z.getChannel(a) : null), A = (0, d.e7)([h.ZP], () => h.ZP.getDefaultChannel(s.id)), [g, f] = i.useState(null), [m, O] = i.useState(null), w = i.useCallback(e => {
    if (t.length !== v.X2) {
      if (null != e && "" === t[t.length - 1].value) {
        let r = [...t];
        r[t.length - 1] = I(E({}, r[t.length - 1]), {
          value: e
        }), n(r), O(r.length - 1)
      } else n([...t, {
        id: o()(),
        value: null != e ? e : ""
      }]), O(t.length)
    }
  }, [t, n]), P = i.useCallback(() => {
    w(void 0)
  }, [w]), B = (e, r) => {
    let i = [...t];
    i[r] = I(E({}, i[r]), {
      value: e
    }), n(i)
  }, D = e => {
    let r = [...t.slice(0, e), ...t.slice(e + 1)];
    n(0 === r.length ? [{
      id: o()(),
      value: ""
    }] : r)
  }, T = i.useCallback((e, r, i) => {
    if (null == t) return;
    let s = t.indexOf(e);
    if (null != r && r !== s) {
      let i = [...t];
      i.splice(s, 1), i.splice(r, 0, e), n(i)
    }
    i ? null !== g && f(null) : r !== g && f(r)
  }, [g, t, n]), S = t.length === v.X2, L = i.useMemo(() => {
    let e = S ? N.NW.formatToPlainString(N.t.tU718P, {
      number: v.X2
    }) : void 0;
    return [{
      text: N.NW.string(N.t.DXq2oa),
      onClick: () => w(N.NW.string(N.t.XudkSk)),
      disabled: S,
      tooltipText: e
    }, {
      text: N.NW.string(N.t.nSqTjI),
      onClick: () => w(N.NW.string(N.t.np91jI)),
      disabled: S,
      tooltipText: e
    }, {
      text: N.NW.string(N.t.AtRxsL),
      onClick: () => w(N.NW.string(N.t.PNIDDA)),
      disabled: S,
      tooltipText: e
    }, {
      text: N.NW.string(N.t["0K5NJi"]),
      onClick: () => w(N.NW.string(N.t.HolIDw)),
      disabled: S,
      tooltipText: e
    }]
  }, [w, S]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: j.rulesContainer,
      children: t.map((e, n) => (0, r.jsx)(y, {
        rulesChannel: null != c ? c : A,
        rule: e,
        index: n,
        onChange: e => B(e, n),
        onClear: () => D(n),
        onRuleReorder: T,
        isDropHovered: n === g,
        focused: n === m,
        onFocus: O,
        previewEnabled: null == l || l,
        isDragEnabled: t.length > 1
      }, e.id))
    }), !S && (0, r.jsx)(C.A, {
      text: N.NW.string(N.t.Cq5Jub),
      onClick: P
    }), (0, r.jsx)(u.X6q, {
      variant: "text-xs/bold",
      color: "text-muted",
      className: j.exampleRulesTitle,
      children: N.NW.string(N.t.XHWj8f)
    }), (0, r.jsx)(b.j, {
      pills: L,
      pillClassName: j.pill
    })]
  })
}