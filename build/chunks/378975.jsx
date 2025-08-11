/** Chunk was on web.js **/
/** chunk id: 378975, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => T
}), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.js"),
  Chunk911969 = require("./911969.js"),
  Chunk739754 = require("./739754.js"),
  Chunk970184 = require("./970184.js"),
  Chunk280501 = require("./280501.js"),
  Chunk388032 = require("./388032.js"),
  Chunk950386 = require("./950386.js");

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
    isDisabled: o,
    isOffset: s
  } = e, l = a()(m.labelContainer, {
    [m.disabled]: o,
    [m.offset]: null == t && s
  });
  return <div className={m.option}>{null != t ? <u.Z className={m.emoji} emojiId={t.id} emojiName={t.name} animated={t.animated} /> : null}{<div className={l}>{<strong className={m.label}>{n}</strong>}{null != i ? <span className={m.description}>{i}</span> : null}</div>}</div>
}

function v(e) {
  let {
    emoji: t,
    label: n
  } = e;
  return <div className={m.option}><div className={a()(m.value, m.singleValue)}>{null != t ? <u.Z className={m.emoji} src={t.src} emojiId={t.id} emojiName={t.name} animated={t.animated} /> : null}{<span className={m.singleValueLabel}>{n}</span>}</div></div>
}

function I(e) {
  let {
    options: t
  } = e;
  return <div className={m.option}><div className={m.value}>{t.map((e, t) => (0, r.jsxs)("div", {
        className: m.optionTag,
        children: [null != e.emoji ? (0, r.jsx)(u.Z, {
          className: m.smallEmoji,
          src: e.emoji.src,
          emojiId: e.emoji.id,
          emojiName: e.emoji.name,
          animated: e.emoji.animated
        }) : null, (0, r.jsx)("span", {
          className: m.tag,
          children: e.label
        }, e.value)]
      }, t))}</div></div>
}

function T(e) {
  let {
    type: t,
    options: n,
    id: o,
    placeholder: s,
    maxValues: u,
    minValues: g,
    disabled: b
  } = e, T = i.useMemo(() => n.filter(e => e.default).map(e => e.value), [n]), S = (0, _.CJ)();
  l()(null != S, "SelectActionComponent must be rendered inside a ComponentStateContext");
  let {
    state: A,
    executeStateUpdate: N,
    visualState: C,
    isDisabled: R,
    error: P
  } = S.useComponentState(e, T.length > 0 ? {
    type: t,
    values: T
  } : true), w = null != S.modal, D = u > 1, L = C === p.gH.LOADING, [x, M] = i.useState(false), [k, j] = i.useState(() => new Set(n.filter(e => e.default).map(e => e.value))), [U, G] = i.useState(k), B = i.useMemo(() => n.some(e => null != e.emoji), [n]);
  i.useEffect(() => {
    if ((null == A ? true : A.type) === d.re.STRING_SELECT) {
      let e = new Set(A.values);
      j(e), G(e)
    } else {
      let e = new Set(T);
      j(e), G(e)
    }
  }, [o, T, A]);
  let Z = i.useCallback(() => {
    U !== k && N({
      type: d.re.STRING_SELECT,
      values: Array.from(k)
    }) && G(k)
  }, [k, U, G, N]);
  i.useEffect(() => {
    !x && (k.size === U.size && Array.from(U).every(e => k.has(e)) || Z())
  }, [x, k, U, Z]);
  let F = c.UNb;
  D ? F = c.gzz : 0 === g && (F = c.s6k);
  let V = (0, c.cYr)({
    value: k,
    onChange: e => j(e),
    onSelectInteraction: F
  });
  return <i.Fragment>{<div className={m.container}><c.PhF{...E({
        isProcessing: L,
        isDisabled: b || C === p.gH.DISABLED || R,
        className: a()(m.select, {
          [m.inModal]: w
        }),
        options: n.map(e => y(E({}, e), {
          disabled: D && !k.has(e.value) && k.size === u
        })),
        placeholder: null != s ? s : h.intl.string(h.t.Otr6W1),
        onClose: () => M(false),
        onOpen: () => M(true),
        maxVisibleItems: 5,
        closeOnSelect: !D,
        optionClassName: m.selectOption,
        renderOptionLabel: e => (0, r.jsx)(O, y(E({}, e), {
          isDisabled: D && !k.has(e.value) && k.size === u,
          isOffset: B
        })),
        renderOptionValue: e => D ? (0, r.jsx)(I, {
          options: e
        }) : (0, r.jsx)(v, E({}, e[0]))
      }, V)} /></div>}{null == P || w ? null : <f.st{...y(E({}, (0, f.c4)(P)), {
      className: m.error
    })} />}</i.Fragment>
}