/** Chunk was on web.js **/
/** chunk id: 368451, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk199849 = require("./199849.jsx"),
  Chunk596454 = require("./596454.jsx"),
  Chunk911969 = require("./911969.js"),
  Chunk739754 = require("./739754.jsx"),
  Chunk970184 = require("./970184.jsx"),
  Chunk280501 = require("./280501.js"),
  Chunk292419 = require("./292419.js"),
  Chunk219879 = require("./219879.js");

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
    isOffset: s
  } = e, l = o()(h.labelContainer, {
    [h.disabled]: a,
    [h.offset]: null == t && s
  });
  return (0, r.jsxs)("div", {
    className: h.option,
    children: [null != t ? (0, r.jsx)(u.Z, {
      className: h.emoji,
      emojiId: t.id,
      emojiName: t.name,
      animated: t.animated
    }) : null, (0, r.jsxs)("div", {
      className: l,
      children: [(0, r.jsx)("strong", {
        className: h.label,
        children: n
      }), null != i ? (0, r.jsx)("span", {
        className: h.description,
        children: i
      }) : null]
    })]
  })
}

function v(e) {
  let {
    emoji: t,
    label: n
  } = e;
  return (0, r.jsx)("div", {
    className: h.option,
    children: (0, r.jsxs)("div", {
      className: o()(h.value, h.singleValue),
      children: [null != t ? (0, r.jsx)(u.Z, {
        className: h.emoji,
        src: t.src,
        emojiId: t.id,
        emojiName: t.name,
        animated: t.animated
      }) : null, (0, r.jsx)("span", {
        className: h.singleValueLabel,
        children: n
      })]
    })
  })
}

function S(e) {
  let {
    options: t
  } = e;
  return (0, r.jsx)("div", {
    className: h.option,
    children: (0, r.jsx)("div", {
      className: h.value,
      children: t.map((e, t) => (0, r.jsxs)("div", {
        className: h.optionTag,
        children: [null != e.emoji ? (0, r.jsx)(u.Z, {
          className: h.smallEmoji,
          src: e.emoji.src,
          emojiId: e.emoji.id,
          emojiName: e.emoji.name,
          animated: e.emoji.animated
        }) : null, (0, r.jsx)("span", {
          className: h.tag,
          children: e.label
        }, e.value)]
      }, t))
    })
  })
}

function I(e) {
  let {
    type: t,
    options: n,
    id: a,
    maxValues: s,
    minValues: u,
    disabled: g
  } = e, b = (0, m.Wo)(e), I = i.useMemo(() => n.filter(e => e.default).map(e => e.value), [n]), T = (0, p.CJ)();
  l()(null != T, "StringSelectActionComponent must be rendered inside a ComponentStateContext");
  let {
    state: A,
    executeStateUpdate: C,
    visualState: N,
    isDisabled: P,
    error: R
  } = T.useComponentState(e, I.length > 0 ? {
    type: t,
    values: I
  } : true), w = null != T.modal, D = s > 1, x = N === _.gH.LOADING, [L, j] = i.useState(false), [M, k] = i.useState(() => new Set(n.filter(e => e.default).map(e => e.value))), [U, G] = i.useState(M), Z = i.useMemo(() => n.some(e => null != e.emoji), [n]);
  i.useEffect(() => {
    if ((null == A ? true : A.type) === d.re.STRING_SELECT) {
      let e = new Set(A.values);
      k(e), G(e)
    } else {
      let e = new Set(I);
      k(e), G(e)
    }
  }, [a, I, A]);
  let B = i.useCallback(() => {
    U !== M && C({
      type: d.re.STRING_SELECT,
      values: Array.from(M)
    }) && G(M)
  }, [M, U, G, C]);
  i.useEffect(() => {
    !L && (M.size === U.size && Array.from(U).every(e => M.has(e)) || B())
  }, [L, M, U, B]);
  let F = c.UN;
  D ? F = c.gz : 0 === u && (F = c.s6);
  let V = (0, c.cY)({
    value: M,
    onChange: e => k(e),
    onSelectInteraction: F
  });
  return (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsx)("div", {
      className: h.container,
      children: (0, r.jsx)(c.B6, E({
        isProcessing: x,
        isDisabled: g || N === _.gH.DISABLED || P,
        className: o()(h.select, {
          [h.inModal]: w
        }),
        options: n.map(e => y(E({}, e), {
          disabled: D && !M.has(e.value) && M.size === s
        })),
        placeholder: b,
        onClose: () => j(false),
        onOpen: () => j(true),
        maxVisibleItems: 5,
        closeOnSelect: !D,
        optionClassName: h.selectOption,
        renderOptionLabel: e => (0, r.jsx)(O, y(E({}, e), {
          isDisabled: D && !M.has(e.value) && M.size === s,
          isOffset: Z
        })),
        renderOptionValue: e => D ? (0, r.jsx)(S, {
          options: e
        }) : (0, r.jsx)(v, E({}, e[0]))
      }, V))
    }), null == R || w ? null : (0, r.jsx)(f.st, y(E({}, (0, f.c4)(R)), {
      className: h.error
    }))]
  })
}