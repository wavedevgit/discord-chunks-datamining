/** Chunk was on 32923 **/
/** chunk id: 296991, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  k: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk761560 = require("./761560.js");

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
    onChange: s,
    onKeyDown: o,
    onClear: u,
    onRuleReorder: h,
    isDropHovered: b,
    focused: x,
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
  }), [, D] = (0, d.L)({
    accept: E,
    hover: (e, t) => {
      var n;
      let {
        index: r
      } = e, i = null == (n = I.current) ? true : n.getBoundingClientRect(), a = t.getClientOffset();
      if (null == i || null == a) return;
      let s = (i.bottom - i.top) / 2,
        o = a.y - i.top;
      r < l && o < s || r > l && o > s || h(e.rule, l, false)
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
    className: a()(C.draggableInputContainer, {
      [C.dragging]: b
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
          focused: x,
          onChange: (e, n, r) => {
            let i = N ? t.value : n;
            i.length > _.fn && (i = i.slice(0, _.fn)), n !== i && (n = i, r = (0, p.JM)(i)), s(n), w({
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
          onClick: u
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
    disabled: a
  } = e, s = l.rulesChannelId, c = l.features.has(v.GuildFeatures.PREVIEW_ENABLED), d = (0, u.e7)([h.Z], () => null != s ? h.Z.getChannel(s) : null), m = (0, u.e7)([b.ZP], () => b.ZP.getDefaultChannel(l.id)), [p, f] = i.useState(null), [E, S] = i.useState(null), T = i.useCallback(e => {
    if (!a && t.length !== _.X2)
      if (null != e && "" === t[t.length - 1].value) {
        let r = [...t];
        r[t.length - 1] = N(y({}, r[t.length - 1]), {
          value: e
        }), n(r), S(r.length - 1)
      } else n([...t, {
        id: o()(),
        value: null != e ? e : ""
      }]), S(t.length)
  }, [a, t, n]), P = i.useCallback(() => {
    a || T(true)
  }, [T, a]), w = i.useCallback((e, r) => {
    if (a) return;
    let i = [...t];
    i[r] = N(y({}, i[r]), {
      value: e
    }), n(i)
  }, [a, t, n]), Z = i.useCallback((e, r, i) => {
    if (a || null == t) return;
    let l = t.indexOf(e);
    if (null != r && r !== l) {
      let i = [...t];
      i.splice(l, 1), i.splice(r, 0, e), n(i)
    }
    i ? null !== p && f(null) : r !== p && f(r)
  }, [a, p, t, n]), R = t.length === _.X2, D = i.useMemo(() => {
    let e = R ? O.intl.formatToPlainString(O.t.tU718E, {
      number: _.X2
    }) : true;
    return [{
      text: O.intl.string(O.t.DXq2od),
      onClick: () => T(O.intl.string(O.t.XudkSq)),
      disabled: R || a,
      tooltipText: e
    }, {
      text: O.intl.string(O.t.nSqTjM),
      onClick: () => T(O.intl.string(O.t.np91jA)),
      disabled: R || a,
      tooltipText: e
    }, {
      text: O.intl.string(O.t.AtRxsO),
      onClick: () => T(O.intl.string(O.t.PNIDDJ)),
      disabled: R || a,
      tooltipText: e
    }, {
      text: O.intl.string(O.t["0K5NJt"]),
      onClick: () => T(O.intl.string(O.t.HolIDy)),
      disabled: R || a,
      tooltipText: e
    }]
  }, [T, a, R]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: C.rulesContainer,
      children: t.map((e, i) => (0, r.jsx)(I, {
        rulesChannel: null != d ? d : m,
        rule: e,
        index: i,
        onChange: e => w(e, i),
        onClear: () => (e => {
          if (a) return;
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
        isDragEnabled: !a && t.length > 1,
        disabled: a
      }, e.id))
    }), !R && (0, r.jsx)(x.A, {
      text: O.intl.string(O.t.Cq5JuR),
      onClick: P,
      disabled: a
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