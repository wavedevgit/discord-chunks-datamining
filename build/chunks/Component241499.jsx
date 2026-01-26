/** Chunk was on 39048 **/
/** chunk id: 241499, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  _: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk296489 = require("./296489.js"),
  o = require.n(Chunk296489),
  Chunk131346 = require("./131346.js"),
  Chunk522437 = require("./522437.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk355622 = require("./355622.js"),
  Chunk408018 = require("./408018.js"),
  Chunk133343 = require("./133343.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk557420 = require("./557420.jsx"),
  Chunk596484 = require("./596484.jsx"),
  Chunk260197 = require("./260197.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk828771 = require("./828771.js");

function A(e) {
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
let N = "RULE";

function S(e) {
  let {
    rule: t,
    rulesChannel: n,
    index: l,
    onChange: a,
    onKeyDown: o,
    onClear: u,
    onRuleReorder: h,
    isDropHovered: b,
    focused: x,
    onFocus: j,
    previewEnabled: O,
    isDragEnabled: A,
    disabled: E
  } = e, S = i.useRef(null), I = i.useRef(null), [{
    textValue: T,
    richValue: C
  }, P] = i.useState((0, p.ur)(t.value)), [, w, R] = (0, c.i)({
    type: N,
    item: {
      rule: t,
      index: l
    },
    end: (e, t) => {
      null == e || t.didDrop() || h(e.rule, null, true)
    }
  }), [, D] = (0, d.H)({
    accept: N,
    hover: (e, t) => {
      var n;
      let {
        index: r
      } = e, i = null == (n = S.current) ? true : n.getBoundingClientRect(), s = t.getClientOffset();
      if (null == i || null == s) return;
      let a = (i.bottom - i.top) / 2,
        o = s.y - i.top;
      r < l && o < a || r > l && o > a || h(e.rule, l, false)
    },
    drop: e => {
      h(e.rule, l, true)
    }
  });
  if (i.useLayoutEffect(() => (w(I), R(D(S)), () => {
      w(null), D(null)
    }), [w, D, R]), i.useEffect(() => {
      "" !== t.value && "" === T && P((0, p.ur)(t.value))
    }, [t.value, T]), null == n) return null;
  let G = "" !== t.value ? t.value : t.id;
  return (0, r.jsx)("div", {
    ref: S,
    className: s()(y.XQ, {
      [y.cB]: b
    }),
    "data-dnd-name": G,
    children: (0, r.jsxs)("div", {
      className: y.I6,
      children: [(0, r.jsx)(g.DUT, {
        onMouseDown: () => j(l),
        children: (0, r.jsx)(f.Ay, {
          innerClassName: y.oQ,
          type: m.oU.RULES_INPUT,
          textValue: T,
          richValue: C,
          channel: n,
          placeholder: v.intl.string(v.t.BRkD41),
          focused: x,
          onChange: (e, n, r) => {
            let i = E ? t.value : n;
            i.length > _.pc && (i = i.slice(0, _.pc)), n !== i && (n = i, r = (0, p.x7)(i)), a(n), P({
              textValue: n,
              richValue: r
            })
          },
          onKeyDown: o,
          canMentionChannels: O,
          canMentionRoles: O,
          maxCharacterCount: _.pc,
          onSubmit: () => Promise.resolve({
            shouldClear: false,
            shouldRefocus: true
          })
        })
      }), (0, r.jsx)("div", {
        className: y.mt,
        children: (0, r.jsx)(g.K0, {
          size: "sm",
          variant: "icon-only",
          icon: g.aXh,
          "aria-label": v.intl.string(v.t.VkKicb),
          onClick: u
        })
      }), (0, r.jsx)("div", {
        ref: I,
        className: y.cK,
        "data-dnd-name": G,
        children: A && (0, r.jsx)(g.WP0, {
          size: "xs",
          color: "currentColor",
          className: y.co
        })
      })]
    })
  })
}

function I(e) {
  let {
    rules: t,
    setRules: n,
    guild: l,
    disabled: s
  } = e, a = l.rulesChannelId, c = l.features.has(O.GuildFeatures.PREVIEW_ENABLED), d = (0, u.bG)([h.A], () => null != a ? h.A.getChannel(a) : null), m = (0, u.bG)([b.Ay], () => b.Ay.getDefaultChannel(l.id)), [p, f] = i.useState(null), [N, I] = i.useState(null), T = i.useCallback(e => {
    if (!s && t.length !== _.yN)
      if (null != e && "" === t[t.length - 1].value) {
        let r = [...t];
        r[t.length - 1] = E(A({}, r[t.length - 1]), {
          value: e
        }), n(r), I(r.length - 1)
      } else n([...t, {
        id: o()(),
        value: null != e ? e : ""
      }]), I(t.length)
  }, [s, t, n]), C = i.useCallback(() => {
    s || T(true)
  }, [T, s]), P = i.useCallback((e, r) => {
    if (s) return;
    let i = [...t];
    i[r] = E(A({}, i[r]), {
      value: e
    }), n(i)
  }, [s, t, n]), w = i.useCallback((e, r, i) => {
    if (s || null == t) return;
    let l = t.indexOf(e);
    if (null != r && r !== l) {
      let i = [...t];
      i.splice(l, 1), i.splice(r, 0, e), n(i)
    }
    i ? null !== p && f(null) : r !== p && f(r)
  }, [s, p, t, n]), R = t.length === _.yN, D = i.useMemo(() => {
    let e = R ? v.intl.formatToPlainString(v.t.tU718E, {
      number: _.yN
    }) : true;
    return [{
      text: v.intl.string(v.t.DXq2od),
      onClick: () => T(v.intl.string(v.t.XudkSq)),
      disabled: R || s,
      tooltipText: e
    }, {
      text: v.intl.string(v.t.nSqTjM),
      onClick: () => T(v.intl.string(v.t.np91jA)),
      disabled: R || s,
      tooltipText: e
    }, {
      text: v.intl.string(v.t.AtRxsO),
      onClick: () => T(v.intl.string(v.t.PNIDDJ)),
      disabled: R || s,
      tooltipText: e
    }, {
      text: v.intl.string(v.t["0K5NJt"]),
      onClick: () => T(v.intl.string(v.t.HolIDy)),
      disabled: R || s,
      tooltipText: e
    }]
  }, [T, s, R]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: y.$W,
      children: t.map((e, i) => (0, r.jsx)(S, {
        rulesChannel: null != d ? d : m,
        rule: e,
        index: i,
        onChange: e => P(e, i),
        onClear: () => (e => {
          if (s) return;
          let r = [...t.slice(0, e), ...t.slice(e + 1)];
          n(0 === r.length ? [{
            id: o()(),
            value: ""
          }] : r)
        })(i),
        onRuleReorder: w,
        isDropHovered: i === p,
        focused: i === N,
        onFocus: I,
        previewEnabled: null == c || c,
        isDragEnabled: !s && t.length > 1,
        disabled: s
      }, e.id))
    }), !R && (0, r.jsx)(x.d, {
      text: v.intl.string(v.t.Cq5JuR),
      onClick: C,
      disabled: s
    }), (0, r.jsx)(g.Heading, {
      variant: "text-xs/bold",
      color: "text-muted",
      className: y.V7,
      children: v.intl.string(v.t.XHWj8W)
    }), (0, r.jsx)(j.z, {
      pills: D,
      pillClassName: y.Io
    })]
  })
}