/** Chunk was on web.js **/
/** chunk id: 139256, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $e: () => j,
  $w: () => Z,
  Og: () => V,
  ZY: () => F,
  sc: () => G,
  zs: () => H
}), require("./314940.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk44315 = require("./44315.js"),
  Chunk377171 = require("./377171.js"),
  Chunk124347 = require("./124347.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk186523 = require("./186523.jsx"),
  Chunk553826 = require("./553826.jsx"),
  Chunk506071 = require("./506071.js"),
  Chunk203143 = require("./203143.js"),
  Chunk79390 = require("./79390.js"),
  Chunk839963 = require("./839963.js"),
  Chunk294608 = require("./294608.jsx"),
  Chunk65145 = require("./65145.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk668464 = require("./668464.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function N(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = P(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function P(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function w(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, r.jsx)("ul", {
    "aria-label": I.intl.string(I.t.sJpqBQ),
    className: t,
    children: n
  })
}

function D(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, r.jsx)("div", {
    "aria-label": I.intl.string(I.t.sJpqBQ),
    role: "group",
    className: t,
    children: n
  })
}

function L(e) {
  let {
    className: t,
    children: n
  } = e, i = (0, l.arW)({
    orientation: "vertical"
  }), {
    ref: o
  } = i, a = R(i, ["ref"]);
  return (0, r.jsx)("div", C(A({
    "aria-label": I.intl.string(I.t.sJpqBQ),
    ref: o
  }, a), {
    className: t,
    children: n
  }))
}

function x(e) {
  let {
    className: t,
    onClick: n,
    isSelected: i,
    isFirstAnswer: o,
    children: s
  } = e, {
    pollAnswerRef: c
  } = (0, O.dv)();
  return (0, r.jsx)(l.P3F, {
    role: "checkbox",
    className: a()(t, T.enabled),
    onClick: n,
    "aria-checked": i,
    ref: o ? c : true,
    children: s
  })
}

function M(e) {
  let t, {
    className: n,
    children: i,
    onClick: o,
    isSelected: s,
    hasSelectedAnyAnswer: c,
    isFirstAnswer: u
  } = e;
  t = c ? s ? 0 : false : u ? 0 : false;
  let {
    pollAnswerRef: d
  } = (0, O.dv)();
  return (0, r.jsx)(l.P3F, {
    role: "radio",
    className: a()(n, T.enabled),
    onClick: o,
    "aria-checked": s,
    tabIndex: t,
    ref: u ? d : true,
    children: i
  })
}

function j(e) {
  let {
    answers: t,
    answersInteraction: n,
    answerTapAccessibilityLabel: i,
    canTapAnswers: o,
    hasSelectedAnyAnswer: a,
    className: l,
    answerClassName: c,
    renderAnswerContent: u
  } = e, {
    ContainerComponent: d,
    answerElementType: f
  } = (0, s.EQ)({
    canTapAnswers: o,
    answersInteraction: n
  }).with({
    answersInteraction: b.Y7.RADIO_BUTTONS
  }, () => ({
    ContainerComponent: L,
    answerElementType: 1
  })).with({
    answersInteraction: b.Y7.CHECKBOXES
  }, () => ({
    ContainerComponent: D,
    answerElementType: 2
  })).with({
    canTapAnswers: true,
    answersInteraction: b.Y7.LIST
  }, () => ({
    ContainerComponent: w,
    answerElementType: 3
  })).otherwise(() => ({
    ContainerComponent: w,
    answerElementType: 0
  }));
  return (0, r.jsx)(d, {
    className: l,
    children: t.map((e, t) => (0, r.jsx)(k, {
      className: c,
      answer: e,
      isFirstAnswer: 0 === t,
      elementType: f,
      answerTapAccessibilityLabel: i,
      hasSelectedAnyAnswer: a,
      children: u(e)
    }, e.answerId))
  })
}

function k(e) {
  let {
    className: t,
    answer: n,
    children: o,
    hasSelectedAnyAnswer: s,
    isFirstAnswer: l,
    elementType: c
  } = e, {
    channelId: u,
    messageId: d
  } = (0, y.pE)(), f = (0, y.$B)(n.style), _ = true === n.isSelected, p = i.useCallback(() => {
    g.Z.handlePollAnswerTapped({
      channelId: u,
      messageId: d,
      answerId: n.answerId
    })
  }, [u, d, n.answerId]);
  switch (c) {
    case 0:
    case 3:
      return (0, r.jsx)("li", {
        className: a()(t, f),
        children: o
      });
    case 1:
      return (0, r.jsx)(M, {
        className: a()(t, f),
        onClick: p,
        isSelected: _,
        hasSelectedAnyAnswer: s,
        isFirstAnswer: l,
        children: o
      });
    case 2:
      return (0, r.jsx)(x, {
        className: a()(t, f),
        onClick: p,
        isSelected: _,
        isFirstAnswer: l,
        children: o
      })
  }
}

function U(e) {
  var t;
  let {
    attachment: n,
    className: i
  } = e, o = (0, m.n)(), a = _.QK.useSetting(), s = 212;
  return (0, r.jsx)(f.ZP, {
    className: i,
    imageClassName: T.attachmentImage,
    src: null != n.proxy_url && "" !== n.proxy_url ? n.proxy_url : n.url,
    alt: null != (t = n.description) ? t : (0, E.fw)(n.filename),
    responsive: true,
    width: s,
    height: s,
    autoPlay: a,
    shouldAnimate: o,
    shouldRenderAccessory: false
  })
}

function G(e) {
  let {
    className: t,
    emoji: n
  } = e;
  return (0, r.jsx)(c.Z, {
    className: t,
    emojiId: n.id,
    emojiName: n.name,
    animated: n.animated
  })
}

function B(e, t) {
  return null != e ? (0, r.jsx)("div", {
    className: e,
    children: t
  }) : t
}

function Z(e) {
  let {
    media: t,
    containerClassName: n,
    attachmentClassName: i,
    emojiClassName: o,
    fallback: a
  } = e, {
    message: s
  } = (0, y.GF)();
  if (null != t.attachmentIds && t.attachmentIds.length > 0) {
    let e = s.attachments.find(e => {
      var n;
      return e.id === (null == (n = t.attachmentIds) ? true : n[0])
    });
    if (null != e) return B(n, (0, r.jsx)(U, {
      className: i,
      attachment: e
    }))
  }
  return null != t.emoji ? B(n, (0, r.jsx)(G, {
    className: o,
    emoji: t.emoji
  })) : true !== a ? a : null
}

function F(e) {
  let {
    isVictor: t,
    isExpired: n,
    size: i,
    className: o
  } = e, {
    color: a,
    backgroundColor: c
  } = (0, s.EQ)({
    isVictor: t,
    isExpired: n
  }).with({
    isExpired: true,
    isVictor: true
  }, () => ({
    color: d.Z.BUTTON_POSITIVE_BACKGROUND,
    backgroundColor: (0, u.Lq)(v.Ilk.WHITE_500)
  })).with({
    isExpired: true,
    isVictor: false
  }, () => ({
    color: d.Z.ICON_PRIMARY,
    backgroundColor: d.Z.BACKGROUND_MOD_FAINT
  })).otherwise(() => ({
    color: (0, u.Lq)(v.Ilk.BRAND_500),
    backgroundColor: (0, u.Lq)(v.Ilk.WHITE_500)
  }));
  return (0, r.jsx)(l.owK, {
    size: "custom",
    width: i,
    height: i,
    className: o,
    color: a,
    secondaryColor: c,
    "aria-hidden": true
  })
}

function V(e) {
  let {
    isSelected: t,
    size: n,
    className: i
  } = e, o = {
    width: n,
    height: n,
    background: T.radioBackground,
    "aria-hidden": true
  };
  return t ? (0, r.jsx)(h.Z, C(A({}, o), {
    foreground: T.radioForeground,
    className: i
  })) : (0, r.jsx)(p.Z, C(A({}, o), {
    className: i
  }))
}

function H(e) {
  let {
    isSelected: t,
    size: n,
    className: i
  } = e, o = .85 * n;
  return (0, r.jsx)("div", {
    className: a()(T.checkbox, {
      [T.checkboxSelected]: t
    }, i),
    style: {
      width: n,
      height: n
    },
    "aria-hidden": true,
    children: t && (0, r.jsx)(l.dz2, {
      size: "custom",
      width: o,
      height: o,
      color: (0, u.Lq)(v.Ilk.WHITE_500)
    })
  })
}