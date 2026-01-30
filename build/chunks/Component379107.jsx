/** Chunk was on 49559 **/
/** chunk id: 379107, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk843282 = require("./843282.jsx"),
  Chunk565645 = require("./565645.jsx"),
  Chunk155718 = require("./155718.js"),
  Chunk594808 = require("./594808.jsx"),
  Chunk207963 = require("./207963.jsx"),
  Chunk489414 = require("./489414.js"),
  Chunk814890 = require("./814890.js"),
  Chunk979811 = require("./979811.js");

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

function h(e, t) {
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

function j(e) {
  let {
    emoji: t,
    label: n,
    description: l,
    isDisabled: a,
    isOffset: o
  } = e, s = i()(b._A, {
    [b.r9]: a,
    [b.cY]: null == t && o
  });
  return (0, r.jsxs)("div", {
    className: b.uK,
    children: [null != t ? (0, r.jsx)(u.A, {
      className: b.Zg,
      emojiId: t.id,
      emojiName: t.name,
      animated: t.animated
    }) : null, (0, r.jsxs)("div", {
      className: s,
      children: [(0, r.jsx)("strong", {
        className: b.Pf,
        children: n
      }), null != l ? (0, r.jsx)("span", {
        className: b.h_,
        children: l
      }) : null]
    })]
  })
}

function g(e) {
  let {
    emoji: t,
    label: n
  } = e;
  return (0, r.jsx)("div", {
    className: b.uK,
    children: (0, r.jsxs)("div", {
      className: i()(b.Uq, b.u9),
      children: [null != t ? (0, r.jsx)(u.A, {
        className: b.Zg,
        src: t.src,
        emojiId: t.id,
        emojiName: t.name,
        animated: t.animated
      }) : null, (0, r.jsx)("span", {
        className: b.oX,
        children: n
      })]
    })
  })
}

function A(e) {
  let {
    options: t
  } = e;
  return (0, r.jsx)("div", {
    className: b.uK,
    children: (0, r.jsx)("div", {
      className: b.Uq,
      children: t.map((e, t) => (0, r.jsxs)("div", {
        className: b.mK,
        children: [null != e.emoji ? (0, r.jsx)(u.A, {
          className: b.eh,
          src: e.emoji.src,
          emojiId: e.emoji.id,
          emojiName: e.emoji.name,
          animated: e.emoji.animated
        }) : null, (0, r.jsx)("span", {
          className: b.Tc,
          children: e.label
        }, e.value)]
      }, t))
    })
  })
}

function v(e) {
  let {
    type: t,
    options: n,
    id: a,
    maxValues: o,
    minValues: u,
    disabled: v
  } = e, E = (0, O.c7)(e), C = l.useMemo(() => n.filter(e => e.default).map(e => e.value), [n]), x = (0, m.jc)();
  s()(null != x, "StringSelectActionComponent must be rendered inside a ComponentStateContext");
  let {
    state: N,
    executeStateUpdate: I,
    visualState: P,
    isDisabled: S,
    error: _
  } = x.useComponentState(e, C.length > 0 ? {
    type: t,
    values: C
  } : true), T = null != x.modal, R = o > 1, w = P === f.BB.LOADING, [D, L] = l.useState(false), [k, U] = l.useState(() => new Set(n.filter(e => e.default).map(e => e.value))), [M, H] = l.useState(k), K = l.useMemo(() => n.some(e => null != e.emoji), [n]);
  l.useEffect(() => {
    if ((null == N ? true : N.type) === d.I5.STRING_SELECT) {
      let e = new Set(N.values);
      U(e), H(e)
    } else {
      let e = new Set(C);
      U(e), H(e)
    }
  }, [a, C, N]);
  let F = l.useCallback(() => {
    M !== k && I({
      type: d.I5.STRING_SELECT,
      values: Array.from(k)
    }) && H(k)
  }, [k, M, H, I]);
  l.useEffect(() => {
    D || k.size === M.size && Array.from(M).every(e => k.has(e)) || F()
  }, [D, k, M, F]);
  let G = c.lS;
  R ? G = c.M8 : 0 === u && (G = c.$l);
  let B = (0, c.Ev)({
    value: k,
    onChange: e => U(e),
    onSelectInteraction: G
  });
  return (0, r.jsxs)(l.Fragment, {
    children: [(0, r.jsx)("div", {
      className: b.kL,
      children: (0, r.jsx)(c.Pw, h(y({
        isProcessing: w,
        isDisabled: v || P === f.BB.DISABLED || S,
        className: i()(b.Lt, {
          [b.zE]: T
        }),
        options: n.map(e => h(y({}, e), {
          disabled: R && !k.has(e.value) && k.size === o
        })),
        placeholder: E,
        onClose: () => L(false),
        onOpen: () => L(true),
        maxVisibleItems: 5,
        closeOnSelect: !R,
        optionClassName: b.MT,
        renderOptionLabel: e => (0, r.jsx)(j, h(y({}, e), {
          isDisabled: R && !k.has(e.value) && k.size === o,
          isOffset: K
        })),
        renderOptionValue: e => R ? (0, r.jsx)(A, {
          options: e
        }) : (0, r.jsx)(g, y({}, e[0]))
      }, B), {
        "data-migration-pending": true
      }))
    }), null == _ || T ? null : (0, r.jsx)(p.S0, h(y({}, (0, p.PS)(_)), {
      className: b.z3
    }))]
  })
}