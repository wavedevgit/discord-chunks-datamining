/** Chunk was on 29679 **/
/** chunk id: 296991, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  k: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk97613 = require("./97613.js"),
  o = require.n(Chunk97613),
  Chunk100568 = require("./100568.js"),
  Chunk417865 = require("./417865.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk541716 = require("./541716.js"),
  Chunk752305 = require("./752305.js"),
  Chunk893718 = require("./893718.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk540457 = require("./540457.jsx"),
  Chunk681460 = require("./681460.jsx"),
  Chunk592286 = require("./592286.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk761560 = require("./761560.js");

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
        enumerable: true,
        configurable: true,
        writable: true
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
let E = "RULE";

function I(e) {
  let {
    rule: t,
    rulesChannel: n,
    index: l,
    onChange: a,
    onKeyDown: o,
    onClear: u,
    onRuleReorder: h,
    isDropHovered: x,
    focused: b,
    onFocus: j,
    previewEnabled: _,
    isDragEnabled: C,
    disabled: N
  } = e, I = i.useRef(null), S = i.useRef(null), [{
    textValue: T,
    richValue: P
  }, w] = i.useState((0, p.eK)(t.value)), [, R, Z] = (0, c.c)({
    type: E,
    item: {
      rule: t,
      index: l
    },
    end: (e, t) => {
      null == e || t.didDrop() || h(e.rule, null, true)
    }
  }), [, D] = (0, d.L)({
    accept: E,
    hover: (e, t) => {
      var n;
      let {
        index: r
      } = e, i = null == (n = I.current) ? true : n.getBoundingClientRect(), s = t.getClientOffset();
      if (null == i || null == s) return;
      let a = (i.bottom - i.top) / 2,
        o = s.y - i.top;
      r < l && o < a || r > l && o > a || h(e.rule, l, false)
    },
    drop: e => {
      h(e.rule, l, true)
    }
  });
  if (i.useLayoutEffect(() => (R(S), Z(D(I)), () => {
      R(null), D(null)
    }), [R, D, Z]), i.useEffect(() => {
      "" !== t.value && "" === T && w((0, p.eK)(t.value))
    }, [t.value, T]), null == n) return null;
  let A = "" !== t.value ? t.value : t.id;
  return (0, r.jsx)("div", {
    ref: I,
    className: s()(y.draggableInputContainer, {
      [y.dragging]: x
    }),
    "data-dnd-name": A,
    children: (0, r.jsxs)("div", {
      className: y.inputWrapper,
      children: [(0, r.jsx)(m.P3F, {
        onMouseDown: () => j(l),
        children: (0, r.jsx)(f.ZP, {
          innerClassName: y.rulesTextAreaInput,
          type: g.Ie.RULES_INPUT,
          textValue: T,
          richValue: P,
          channel: n,
          placeholder: O.intl.string(O.t["BRkD4+"]),
          focused: b,
          onChange: (e, n, r) => {
            let i = N ? t.value : n;
            i.length > v.fn && (i = i.slice(0, v.fn)), n !== i && (n = i, r = (0, p.JM)(i)), a(n), w({
              textValue: n,
              richValue: r
            })
          },
          onKeyDown: o,
          canMentionChannels: _,
          canMentionRoles: _,
          maxCharacterCount: v.fn,
          onSubmit: () => Promise.resolve({
            shouldClear: false,
            shouldRefocus: true
          })
        })
      }), (0, r.jsx)("div", {
        className: y.clearButton,
        children: (0, r.jsx)(m.hU, {
          size: "sm",
          variant: "icon-only",
          icon: m.k$p,
          "aria-label": O.intl.string(O.t.VkKicX),
          onClick: u
        })
      }), (0, r.jsx)("div", {
        ref: S,
        className: y.dragContainer,
        "data-dnd-name": A,
        children: C && (0, r.jsx)(m.Vni, {
          size: "xs",
          color: "currentColor",
          className: y.dragIcon
        })
      })]
    })
  })
}

function S(e) {
  let {
    rules: t,
    setRules: n,
    guild: l,
    disabled: s
  } = e, a = l.rulesChannelId, c = l.features.has(_.oNc.PREVIEW_ENABLED), d = (0, u.e7)([h.Z], () => null != a ? h.Z.getChannel(a) : null), g = (0, u.e7)([x.ZP], () => x.ZP.getDefaultChannel(l.id)), [p, f] = i.useState(null), [E, S] = i.useState(null), T = i.useCallback(e => {
    if (!s && t.length !== v.X2)
      if (null != e && "" === t[t.length - 1].value) {
        let r = [...t];
        r[t.length - 1] = N(C({}, r[t.length - 1]), {
          value: e
        }), n(r), S(r.length - 1)
      } else n([...t, {
        id: o()(),
        value: null != e ? e : ""
      }]), S(t.length)
  }, [s, t, n]), P = i.useCallback(() => {
    s || T(true)
  }, [T, s]), w = i.useCallback((e, r) => {
    if (s) return;
    let i = [...t];
    i[r] = N(C({}, i[r]), {
      value: e
    }), n(i)
  }, [s, t, n]), R = i.useCallback((e, r, i) => {
    if (s || null == t) return;
    let l = t.indexOf(e);
    if (null != r && r !== l) {
      let i = [...t];
      i.splice(l, 1), i.splice(r, 0, e), n(i)
    }
    i ? null !== p && f(null) : r !== p && f(r)
  }, [s, p, t, n]), Z = t.length === v.X2, D = i.useMemo(() => {
    let e = Z ? O.intl.formatToPlainString(O.t.tU718P, {
      number: v.X2
    }) : true;
    return [{
      text: O.intl.string(O.t.DXq2oa),
      onClick: () => T(O.intl.string(O.t.XudkSk)),
      disabled: Z || s,
      tooltipText: e
    }, {
      text: O.intl.string(O.t.nSqTjI),
      onClick: () => T(O.intl.string(O.t.np91jI)),
      disabled: Z || s,
      tooltipText: e
    }, {
      text: O.intl.string(O.t.AtRxsL),
      onClick: () => T(O.intl.string(O.t.PNIDDA)),
      disabled: Z || s,
      tooltipText: e
    }, {
      text: O.intl.string(O.t["0K5NJi"]),
      onClick: () => T(O.intl.string(O.t.HolIDw)),
      disabled: Z || s,
      tooltipText: e
    }]
  }, [T, s, Z]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: y.rulesContainer,
      children: t.map((e, i) => (0, r.jsx)(I, {
        rulesChannel: null != d ? d : g,
        rule: e,
        index: i,
        onChange: e => w(e, i),
        onClear: () => (e => {
          if (s) return;
          let r = [...t.slice(0, e), ...t.slice(e + 1)];
          n(0 === r.length ? [{
            id: o()(),
            value: ""
          }] : r)
        })(i),
        onRuleReorder: R,
        isDropHovered: i === p,
        focused: i === E,
        onFocus: S,
        previewEnabled: null == c || c,
        isDragEnabled: !s && t.length > 1,
        disabled: s
      }, e.id))
    }), !Z && (0, r.jsx)(b.A, {
      text: O.intl.string(O.t.Cq5Jub),
      onClick: P,
      disabled: s
    }), (0, r.jsx)(m.X6q, {
      variant: "text-xs/bold",
      color: "text-muted",
      className: y.exampleRulesTitle,
      children: O.intl.string(O.t.XHWj8f)
    }), (0, r.jsx)(j.j, {
      pills: D,
      pillClassName: y.pill
    })]
  })
}