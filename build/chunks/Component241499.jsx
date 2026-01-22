/** Chunk was on 47841 **/
/** chunk id: 241499, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  _: () => T
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk296489 = require("./296489.js"),
  c = require.n(Chunk296489),
  Chunk131346 = require("./131346.js"),
  Chunk744818 = require("./744818.js"),
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
let _ = "RULE";

function S(e) {
  let {
    rule: t,
    rulesChannel: n,
    index: l,
    onChange: a,
    onKeyDown: c,
    onClear: u,
    onRuleReorder: p,
    isDropHovered: x,
    focused: h,
    onFocus: j,
    previewEnabled: y,
    isDragEnabled: E,
    disabled: N
  } = e, S = i.useRef(null), T = i.useRef(null), [{
    textValue: I,
    richValue: C
  }, P] = i.useState((0, b.ur)(t.value)), [, w, R] = (0, o.i)({
    type: _,
    item: {
      rule: t,
      index: l
    },
    end: (e, t) => {
      null == e || t.didDrop() || p(e.rule, null, true)
    }
  }), [, D] = (0, d.H)({
    accept: _,
    hover: (e, t) => {
      var n;
      let {
        index: r
      } = e, i = null == (n = S.current) ? true : n.getBoundingClientRect(), s = t.getClientOffset();
      if (null == i || null == s) return;
      let a = (i.bottom - i.top) / 2,
        c = s.y - i.top;
      r < l && c < a || r > l && c > a || p(e.rule, l, false)
    },
    drop: e => {
      p(e.rule, l, true)
    }
  });
  if (i.useLayoutEffect(() => (w(T), R(D(S)), () => {
      w(null), D(null)
    }), [w, D, R]), i.useEffect(() => {
      "" !== t.value && "" === I && P((0, b.ur)(t.value))
    }, [t.value, I]), null == n) return null;
  let G = "" !== t.value ? t.value : t.id;
  return (0, r.jsx)("div", {
    ref: S,
    className: s()(A.XQ, {
      [A.cB]: x
    }),
    "data-dnd-name": G,
    children: (0, r.jsxs)("div", {
      className: A.I6,
      children: [(0, r.jsx)(f.DUT, {
        onMouseDown: () => j(l),
        children: (0, r.jsx)(m.Ay, {
          innerClassName: A.oQ,
          type: g.oU.RULES_INPUT,
          textValue: I,
          richValue: C,
          channel: n,
          placeholder: v.intl.string(v.t.BRkD41),
          focused: h,
          onChange: (e, n, r) => {
            let i = N ? t.value : n;
            i.length > O.pc && (i = i.slice(0, O.pc)), n !== i && (n = i, r = (0, b.x7)(i)), a(n), P({
              textValue: n,
              richValue: r
            })
          },
          onKeyDown: c,
          canMentionChannels: y,
          canMentionRoles: y,
          maxCharacterCount: O.pc,
          onSubmit: () => Promise.resolve({
            shouldClear: false,
            shouldRefocus: true
          })
        })
      }), (0, r.jsx)("div", {
        className: A.mt,
        children: (0, r.jsx)(f.K0, {
          size: "sm",
          variant: "icon-only",
          icon: f.aXh,
          "aria-label": v.intl.string(v.t.VkKicb),
          onClick: u
        })
      }), (0, r.jsx)("div", {
        ref: T,
        className: A.cK,
        "data-dnd-name": G,
        children: E && (0, r.jsx)(f.WP0, {
          size: "xs",
          color: "currentColor",
          className: A.co
        })
      })]
    })
  })
}

function T(e) {
  let {
    rules: t,
    setRules: n,
    guild: l,
    disabled: s
  } = e, a = l.rulesChannelId, o = l.features.has(y.GuildFeatures.PREVIEW_ENABLED), d = (0, u.bG)([p.A], () => null != a ? p.A.getChannel(a) : null), g = (0, u.bG)([x.Ay], () => x.Ay.getDefaultChannel(l.id)), [b, m] = i.useState(null), [_, T] = i.useState(null), I = i.useCallback(e => {
    if (!s && t.length !== O.yN)
      if (null != e && "" === t[t.length - 1].value) {
        let r = [...t];
        r[t.length - 1] = N(E({}, r[t.length - 1]), {
          value: e
        }), n(r), T(r.length - 1)
      } else n([...t, {
        id: c()(),
        value: null != e ? e : ""
      }]), T(t.length)
  }, [s, t, n]), C = i.useCallback(() => {
    s || I(true)
  }, [I, s]), P = i.useCallback((e, r) => {
    if (s) return;
    let i = [...t];
    i[r] = N(E({}, i[r]), {
      value: e
    }), n(i)
  }, [s, t, n]), w = i.useCallback((e, r, i) => {
    if (s || null == t) return;
    let l = t.indexOf(e);
    if (null != r && r !== l) {
      let i = [...t];
      i.splice(l, 1), i.splice(r, 0, e), n(i)
    }
    i ? null !== b && m(null) : r !== b && m(r)
  }, [s, b, t, n]), R = t.length === O.yN, D = i.useMemo(() => {
    let e = R ? v.intl.formatToPlainString(v.t.tU718E, {
      number: O.yN
    }) : true;
    return [{
      text: v.intl.string(v.t.DXq2od),
      onClick: () => I(v.intl.string(v.t.XudkSq)),
      disabled: R || s,
      tooltipText: e
    }, {
      text: v.intl.string(v.t.nSqTjM),
      onClick: () => I(v.intl.string(v.t.np91jA)),
      disabled: R || s,
      tooltipText: e
    }, {
      text: v.intl.string(v.t.AtRxsO),
      onClick: () => I(v.intl.string(v.t.PNIDDJ)),
      disabled: R || s,
      tooltipText: e
    }, {
      text: v.intl.string(v.t["0K5NJt"]),
      onClick: () => I(v.intl.string(v.t.HolIDy)),
      disabled: R || s,
      tooltipText: e
    }]
  }, [I, s, R]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: A.$W,
      children: t.map((e, i) => (0, r.jsx)(S, {
        rulesChannel: null != d ? d : g,
        rule: e,
        index: i,
        onChange: e => P(e, i),
        onClear: () => (e => {
          if (s) return;
          let r = [...t.slice(0, e), ...t.slice(e + 1)];
          n(0 === r.length ? [{
            id: c()(),
            value: ""
          }] : r)
        })(i),
        onRuleReorder: w,
        isDropHovered: i === b,
        focused: i === _,
        onFocus: T,
        previewEnabled: null == o || o,
        isDragEnabled: !s && t.length > 1,
        disabled: s
      }, e.id))
    }), !R && (0, r.jsx)(h.d, {
      text: v.intl.string(v.t.Cq5JuR),
      onClick: C,
      disabled: s
    }), (0, r.jsx)(f.Heading, {
      variant: "text-xs/bold",
      color: "text-muted",
      className: A.V7,
      children: v.intl.string(v.t.XHWj8W)
    }), (0, r.jsx)(j.z, {
      pills: D,
      pillClassName: A.Io
    })]
  })
}