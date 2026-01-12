/** Chunk was on 9536 **/
/** chunk id: 296991, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  k: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk97613 = require("./97613.js"),
  o = require.n(Chunk97613),
  Chunk17163 = require("./17163.js"),
  Chunk642007 = require("./642007.js"),
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
  Chunk616224 = require("./616224.js");

function N(e) {
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

function E(e, t) {
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
let I = "RULE";

function S(e) {
  let {
    rule: t,
    rulesChannel: n,
    index: l,
    onChange: s,
    onKeyDown: o,
    onClear: u,
    onRuleReorder: p,
    isDropHovered: h,
    focused: x,
    onFocus: j,
    previewEnabled: O,
    isDragEnabled: N,
    disabled: E
  } = e, S = i.useRef(null), _ = i.useRef(null), [{
    textValue: T,
    richValue: P
  }, w] = i.useState((0, f.eK)(t.value)), [, Z, R] = (0, c.c)({
    type: I,
    item: {
      rule: t,
      index: l
    },
    end: (e, t) => {
      null == e || t.didDrop() || p(e.rule, null, true)
    }
  }), [, D] = (0, d.L)({
    accept: I,
    hover: (e, t) => {
      var n;
      let {
        index: r
      } = e, i = null == (n = S.current) ? true : n.getBoundingClientRect(), a = t.getClientOffset();
      if (null == i || null == a) return;
      let s = (i.bottom - i.top) / 2,
        o = a.y - i.top;
      r < l && o < s || r > l && o > s || p(e.rule, l, false)
    },
    drop: e => {
      p(e.rule, l, true)
    }
  });
  if (i.useLayoutEffect(() => (Z(_), R(D(S)), () => {
      Z(null), D(null)
    }), [Z, D, R]), i.useEffect(() => {
      "" !== t.value && "" === T && w((0, f.eK)(t.value))
    }, [t.value, T]), null == n) return null;
  let A = "" !== t.value ? t.value : t.id;
  return (0, r.jsx)("div", {
    ref: S,
    className: a()(C.draggableInputContainer, {
      [C.dragging]: h
    }),
    "data-dnd-name": A,
    children: (0, r.jsxs)("div", {
      className: C.inputWrapper,
      children: [(0, r.jsx)(g.P3F, {
        onMouseDown: () => j(l),
        children: (0, r.jsx)(b.ZP, {
          innerClassName: C.rulesTextAreaInput,
          type: m.Ie.RULES_INPUT,
          textValue: T,
          richValue: P,
          channel: n,
          placeholder: y.intl.string(y.t.BRkD41),
          focused: x,
          onChange: (e, n, r) => {
            let i = E ? t.value : n;
            i.length > v.fn && (i = i.slice(0, v.fn)), n !== i && (n = i, r = (0, f.JM)(i)), s(n), w({
              textValue: n,
              richValue: r
            })
          },
          onKeyDown: o,
          canMentionChannels: O,
          canMentionRoles: O,
          maxCharacterCount: v.fn,
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
          "aria-label": y.intl.string(y.t.VkKicb),
          onClick: u
        })
      }), (0, r.jsx)("div", {
        ref: _,
        className: C.dragContainer,
        "data-dnd-name": A,
        children: N && (0, r.jsx)(g.Vni, {
          size: "xs",
          color: "currentColor",
          className: C.dragIcon
        })
      })]
    })
  })
}

function _(e) {
  let {
    rules: t,
    setRules: n,
    guild: l,
    disabled: a
  } = e, s = l.rulesChannelId, c = l.features.has(O.GuildFeatures.PREVIEW_ENABLED), d = (0, u.e7)([p.Z], () => null != s ? p.Z.getChannel(s) : null), m = (0, u.e7)([h.ZP], () => h.ZP.getDefaultChannel(l.id)), [f, b] = i.useState(null), [I, _] = i.useState(null), T = i.useCallback(e => {
    if (!a && t.length !== v.X2)
      if (null != e && "" === t[t.length - 1].value) {
        let r = [...t];
        r[t.length - 1] = E(N({}, r[t.length - 1]), {
          value: e
        }), n(r), _(r.length - 1)
      } else n([...t, {
        id: o()(),
        value: null != e ? e : ""
      }]), _(t.length)
  }, [a, t, n]), P = i.useCallback(() => {
    a || T(true)
  }, [T, a]), w = i.useCallback((e, r) => {
    if (a) return;
    let i = [...t];
    i[r] = E(N({}, i[r]), {
      value: e
    }), n(i)
  }, [a, t, n]), Z = i.useCallback((e, r, i) => {
    if (a || null == t) return;
    let l = t.indexOf(e);
    if (null != r && r !== l) {
      let i = [...t];
      i.splice(l, 1), i.splice(r, 0, e), n(i)
    }
    i ? null !== f && b(null) : r !== f && b(r)
  }, [a, f, t, n]), R = t.length === v.X2, D = i.useMemo(() => {
    let e = R ? y.intl.formatToPlainString(y.t.tU718E, {
      number: v.X2
    }) : true;
    return [{
      text: y.intl.string(y.t.DXq2od),
      onClick: () => T(y.intl.string(y.t.XudkSq)),
      disabled: R || a,
      tooltipText: e
    }, {
      text: y.intl.string(y.t.nSqTjM),
      onClick: () => T(y.intl.string(y.t.np91jA)),
      disabled: R || a,
      tooltipText: e
    }, {
      text: y.intl.string(y.t.AtRxsO),
      onClick: () => T(y.intl.string(y.t.PNIDDJ)),
      disabled: R || a,
      tooltipText: e
    }, {
      text: y.intl.string(y.t["0K5NJt"]),
      onClick: () => T(y.intl.string(y.t.HolIDy)),
      disabled: R || a,
      tooltipText: e
    }]
  }, [T, a, R]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: C.rulesContainer,
      children: t.map((e, i) => (0, r.jsx)(S, {
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
        isDropHovered: i === f,
        focused: i === I,
        onFocus: _,
        previewEnabled: null == c || c,
        isDragEnabled: !a && t.length > 1,
        disabled: a
      }, e.id))
    }), !R && (0, r.jsx)(x.A, {
      text: y.intl.string(y.t.Cq5JuR),
      onClick: P,
      disabled: a
    }), (0, r.jsx)(g.Heading, {
      variant: "text-xs/bold",
      color: "text-muted",
      className: C.exampleRulesTitle,
      children: y.intl.string(y.t.XHWj8W)
    }), (0, r.jsx)(j.j, {
      pills: D,
      pillClassName: C.pill
    })]
  })
}