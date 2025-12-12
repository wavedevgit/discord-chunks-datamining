/** Chunk was on 384 **/
/** chunk id: 296991, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  k: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk97613 = require("./97613.js"),
  o = require.n(Chunk97613),
  Chunk891371 = require("./891371.js"),
  Chunk692992 = require("./692992.js"),
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
  Chunk94228 = require("./94228.js");

function y(e) {
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
    onClear: d,
    onRuleReorder: h,
    isDropHovered: x,
    focused: b,
    onFocus: j,
    previewEnabled: v,
    isDragEnabled: y,
    disabled: N
  } = e, I = i.useRef(null), S = i.useRef(null), [{
    textValue: T,
    richValue: P
  }, w] = i.useState((0, p.eK)(t.value)), [, Z, R] = (0, c.c)({
    type: E,
    item: {
      rule: t,
      index: l
    },
    end: (e, t) => {
      null == e || t.didDrop() || h(e.rule, null, true)
    }
  }), [, D] = (0, u.L)({
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
  if (i.useLayoutEffect(() => (Z(S), R(D(I)), () => {
      Z(null), D(null)
    }), [Z, D, R]), i.useEffect(() => {
      "" !== t.value && "" === T && w((0, p.eK)(t.value))
    }, [t.value, T]), null == n) return null;
  let A = "" !== t.value ? t.value : t.id;
  return (0, r.jsx)("div", {
    ref: I,
    className: s()(C.draggableInputContainer, {
      [C.dragging]: x
    }),
    "data-dnd-name": A,
    children: (0, r.jsxs)("div", {
      className: C.inputWrapper,
      children: [(0, r.jsx)(g.P3F, {
        onMouseDown: () => j(l),
        children: (0, r.jsx)(f.ZP, {
          innerClassName: C.rulesTextAreaInput,
          type: m.Ie.RULES_INPUT,
          textValue: T,
          richValue: P,
          channel: n,
          placeholder: O.intl.string(O.t.BRkD41),
          focused: b,
          onChange: (e, n, r) => {
            let i = N ? t.value : n;
            i.length > _.fn && (i = i.slice(0, _.fn)), n !== i && (n = i, r = (0, p.JM)(i)), a(n), w({
              textValue: n,
              richValue: r
            })
          },
          onKeyDown: o,
          canMentionChannels: v,
          canMentionRoles: v,
          maxCharacterCount: _.fn,
          onSubmit: () => Promise.resolve({
            shouldClear: false,
            shouldRefocus: true
          })
        })
      }), (0, r.jsx)("div", {
        className: C.clearButton,
        children: (0, r.jsx)(g.hU, {
          size: "sm",
          variant: "icon-only",
          icon: g.k$p,
          "aria-label": O.intl.string(O.t.VkKicb),
          onClick: d
        })
      }), (0, r.jsx)("div", {
        ref: S,
        className: C.dragContainer,
        "data-dnd-name": A,
        children: y && (0, r.jsx)(g.Vni, {
          size: "xs",
          color: "currentColor",
          className: C.dragIcon
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
  } = e, a = l.rulesChannelId, c = l.features.has(v.GuildFeatures.PREVIEW_ENABLED), u = (0, d.e7)([h.Z], () => null != a ? h.Z.getChannel(a) : null), m = (0, d.e7)([x.ZP], () => x.ZP.getDefaultChannel(l.id)), [p, f] = i.useState(null), [E, S] = i.useState(null), T = i.useCallback(e => {
    if (!s && t.length !== _.X2)
      if (null != e && "" === t[t.length - 1].value) {
        let r = [...t];
        r[t.length - 1] = N(y({}, r[t.length - 1]), {
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
    i[r] = N(y({}, i[r]), {
      value: e
    }), n(i)
  }, [s, t, n]), Z = i.useCallback((e, r, i) => {
    if (s || null == t) return;
    let l = t.indexOf(e);
    if (null != r && r !== l) {
      let i = [...t];
      i.splice(l, 1), i.splice(r, 0, e), n(i)
    }
    i ? null !== p && f(null) : r !== p && f(r)
  }, [s, p, t, n]), R = t.length === _.X2, D = i.useMemo(() => {
    let e = R ? O.intl.formatToPlainString(O.t.tU718E, {
      number: _.X2
    }) : true;
    return [{
      text: O.intl.string(O.t.DXq2od),
      onClick: () => T(O.intl.string(O.t.XudkSq)),
      disabled: R || s,
      tooltipText: e
    }, {
      text: O.intl.string(O.t.nSqTjM),
      onClick: () => T(O.intl.string(O.t.np91jA)),
      disabled: R || s,
      tooltipText: e
    }, {
      text: O.intl.string(O.t.AtRxsO),
      onClick: () => T(O.intl.string(O.t.PNIDDJ)),
      disabled: R || s,
      tooltipText: e
    }, {
      text: O.intl.string(O.t["0K5NJt"]),
      onClick: () => T(O.intl.string(O.t.HolIDy)),
      disabled: R || s,
      tooltipText: e
    }]
  }, [T, s, R]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: C.rulesContainer,
      children: t.map((e, i) => (0, r.jsx)(I, {
        rulesChannel: null != u ? u : m,
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
        onRuleReorder: Z,
        isDropHovered: i === p,
        focused: i === E,
        onFocus: S,
        previewEnabled: null == c || c,
        isDragEnabled: !s && t.length > 1,
        disabled: s
      }, e.id))
    }), !R && (0, r.jsx)(b.A, {
      text: O.intl.string(O.t.Cq5JuR),
      onClick: P,
      disabled: s
    }), (0, r.jsx)(g.Heading, {
      variant: "text-xs/bold",
      color: "text-muted",
      className: C.exampleRulesTitle,
      children: O.intl.string(O.t.XHWj8W)
    }), (0, r.jsx)(j.j, {
      pills: D,
      pillClassName: C.pill
    })]
  })
}