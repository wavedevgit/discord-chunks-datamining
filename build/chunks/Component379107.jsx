/** Chunk was on web.js **/
/** chunk id: 379107, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk843282 = require("./843282.jsx"),
  Chunk565645 = require("./565645.jsx"),
  Chunk155718 = require("./155718.js"),
  Chunk594808 = require("./594808.jsx"),
  Chunk207963 = require("./207963.jsx"),
  Chunk489414 = require("./489414.js"),
  Chunk814890 = require("./814890.js"),
  Chunk979811 = require("./979811.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e) {
  let {
    emoji: t,
    label: n,
    description: i,
    isDisabled: a,
    isOffset: o
  } = e, l = s()(m._A, {
    [m.r9]: a,
    [m.cY]: null == t && o
  });
  return (0, r.jsxs)("div", {
    className: m.uK,
    children: [null != t ? (0, r.jsx)(u.A, {
      className: m.Zg,
      emojiId: t.id,
      emojiName: t.name,
      animated: t.animated
    }) : null, (0, r.jsxs)("div", {
      className: l,
      children: [(0, r.jsx)("strong", {
        className: m.Pf,
        children: n
      }), null != i ? (0, r.jsx)("span", {
        className: m.h_,
        children: i
      }) : null]
    })]
  })
}

function A(e) {
  let {
    emoji: t,
    label: n
  } = e;
  return (0, r.jsx)("div", {
    className: m.uK,
    children: (0, r.jsxs)("div", {
      className: s()(m.Uq, m.u9),
      children: [null != t ? (0, r.jsx)(u.A, {
        className: m.Zg,
        src: t.src,
        emojiId: t.id,
        emojiName: t.name,
        animated: t.animated
      }) : null, (0, r.jsx)("span", {
        className: m.oX,
        children: n
      })]
    })
  })
}

function v(e) {
  let {
    options: t
  } = e;
  return (0, r.jsx)("div", {
    className: m.uK,
    children: (0, r.jsx)("div", {
      className: m.Uq,
      children: t.map((e, t) => (0, r.jsxs)("div", {
        className: m.mK,
        children: [null != e.emoji ? (0, r.jsx)(u.A, {
          className: m.eh,
          src: e.emoji.src,
          emojiId: e.emoji.id,
          emojiName: e.emoji.name,
          animated: e.emoji.animated
        }) : null, (0, r.jsx)("span", {
          className: m.Tc,
          children: e.label
        }, e.value)]
      }, t))
    })
  })
}

function S(e) {
  let {
    type: t,
    options: n,
    id: a,
    maxValues: o,
    minValues: u,
    disabled: g
  } = e, b = (0, h.c7)(e), S = i.useMemo(() => n.filter(e => e.default).map(e => e.value), [n]), I = (0, p.jc)();
  l()(null != I, "StringSelectActionComponent must be rendered inside a ComponentStateContext");
  let {
    state: T,
    executeStateUpdate: C,
    visualState: N,
    isDisabled: R,
    error: w
  } = I.useComponentState(e, S.length > 0 ? {
    type: t,
    values: S
  } : true), P = null != I.modal, D = o > 1, x = N === _.BB.LOADING, [L, j] = i.useState(false), [M, k] = i.useState(() => new Set(n.filter(e => e.default).map(e => e.value))), [U, G] = i.useState(M), V = i.useMemo(() => n.some(e => null != e.emoji), [n]);
  i.useEffect(() => {
    if ((null == T ? true : T.type) === d.I5.STRING_SELECT) {
      let e = new Set(T.values);
      k(e), G(e)
    } else {
      let e = new Set(S);
      k(e), G(e)
    }
  }, [a, S, T]);
  let F = i.useCallback(() => {
    U !== M && C({
      type: d.I5.STRING_SELECT,
      values: Array.from(M)
    }) && G(M)
  }, [M, U, G, C]);
  i.useEffect(() => {
    L || M.size === U.size && Array.from(U).every(e => M.has(e)) || F()
  }, [L, M, U, F]);
  let B = c.lS;
  D ? B = c.M8 : 0 === u && (B = c.$l);
  let H = (0, c.Ev)({
    value: M,
    onChange: e => k(e),
    onSelectInteraction: B
  });
  return (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsx)("div", {
      className: m.kL,
      children: (0, r.jsx)(c.Pw, y(E({
        isProcessing: x,
        isDisabled: g || N === _.BB.DISABLED || R,
        className: s()(m.Lt, {
          [m.zE]: P
        }),
        options: n.map(e => y(E({}, e), {
          disabled: D && !M.has(e.value) && M.size === o
        })),
        placeholder: b,
        onClose: () => j(false),
        onOpen: () => j(true),
        maxVisibleItems: 5,
        closeOnSelect: !D,
        optionClassName: m.MT,
        renderOptionLabel: e => (0, r.jsx)(O, y(E({}, e), {
          isDisabled: D && !M.has(e.value) && M.size === o,
          isOffset: V
        })),
        renderOptionValue: e => D ? (0, r.jsx)(v, {
          options: e
        }) : (0, r.jsx)(A, E({}, e[0]))
      }, H), {
        "data-migration-pending": true
      }))
    }), null == w || P ? null : (0, r.jsx)(f.S0, y(E({}, (0, f.PS)(w)), {
      className: m.z3
    }))]
  })
}