/** Chunk was on web.js **/
/** chunk id: 139256, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $e: () => j,
  $w: () => Z,
  Og: () => B,
  ZY: () => F,
  sc: () => U,
  zs: () => V
}), require("./314940.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk313464 = require("./313464.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function C(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : C(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e, t) {
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

function R(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, r.jsx)("ul", {
    "aria-label": v.intl.string(v.t.sJpqBS),
    className: t,
    children: n
  })
}

function w(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, r.jsx)("div", {
    "aria-label": v.intl.string(v.t.sJpqBS),
    role: "group",
    className: t,
    children: n
  })
}

function D(e) {
  let {
    className: t,
    children: n
  } = e, i = (0, c.Jb)({
    orientation: "vertical"
  }), {
    ref: o
  } = i, a = N(i, ["ref"]);
  return (0, r.jsx)("div", A(T({
    "aria-label": v.intl.string(v.t.sJpqBS),
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
    pollAnswerRef: l
  } = (0, O.dv)();
  return (0, r.jsx)(u.P3F, {
    role: "checkbox",
    className: a()(t, S.enabled),
    onClick: n,
    "aria-checked": i,
    ref: o ? l : true,
    children: s
  })
}

function L(e) {
  let t, {
    className: n,
    children: i,
    onClick: o,
    isSelected: s,
    hasSelectedAnyAnswer: l,
    isFirstAnswer: c
  } = e;
  t = l ? s ? 0 : false : c ? 0 : false;
  let {
    pollAnswerRef: d
  } = (0, O.dv)();
  return (0, r.jsx)(u.P3F, {
    role: "radio",
    className: a()(n, S.enabled),
    onClick: o,
    "aria-checked": s,
    tabIndex: t,
    ref: c ? d : true,
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
    ContainerComponent: D,
    answerElementType: 1
  })).with({
    answersInteraction: b.Y7.CHECKBOXES
  }, () => ({
    ContainerComponent: w,
    answerElementType: 2
  })).with({
    canTapAnswers: true,
    answersInteraction: b.Y7.LIST
  }, () => ({
    ContainerComponent: R,
    answerElementType: 3
  })).otherwise(() => ({
    ContainerComponent: R,
    answerElementType: 0
  }));
  return (0, r.jsx)(d, {
    className: l,
    children: t.map((e, t) => (0, r.jsx)(M, {
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

function M(e) {
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
  } = (0, y.pE)(), f = (0, y.$B)(n.style), p = true === n.isSelected, _ = i.useCallback(() => {
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
      return (0, r.jsx)(L, {
        className: a()(t, f),
        onClick: _,
        isSelected: p,
        hasSelectedAnyAnswer: s,
        isFirstAnswer: l,
        children: o
      });
    case 2:
      return (0, r.jsx)(x, {
        className: a()(t, f),
        onClick: _,
        isSelected: p,
        isFirstAnswer: l,
        children: o
      })
  }
}

function k(e) {
  var t;
  let {
    attachment: n,
    className: i
  } = e, o = (0, h.n)(), a = p.QK.useSetting(), s = 212;
  return (0, r.jsx)(f.ZP, {
    className: i,
    imageClassName: S.attachmentImage,
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

function U(e) {
  let {
    className: t,
    emoji: n
  } = e;
  return (0, r.jsx)(d.Z, {
    className: t,
    emojiId: n.id,
    emojiName: n.name,
    animated: n.animated
  })
}

function G(e, t) {
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
    if (null != e) return G(n, (0, r.jsx)(k, {
      className: i,
      attachment: e
    }))
  }
  return null != t.emoji ? G(n, (0, r.jsx)(U, {
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
    color: l.Z.colors.CONTROL_CONNECT_BACKGROUND_DEFAULT.css,
    backgroundColor: l.Z.unsafe_rawColors.WHITE_500.css
  })).with({
    isExpired: true,
    isVictor: false
  }, () => ({
    color: l.Z.colors.ICON_STRONG.css,
    backgroundColor: l.Z.colors.BACKGROUND_MOD_MUTED.css
  })).otherwise(() => ({
    color: l.Z.unsafe_rawColors.BRAND_500.css,
    backgroundColor: l.Z.unsafe_rawColors.WHITE_500.css
  }));
  return (0, r.jsx)(u.owK, {
    size: "custom",
    width: i,
    height: i,
    className: o,
    color: a,
    secondaryColor: c,
    "aria-hidden": true
  })
}

function B(e) {
  let {
    isSelected: t,
    size: n,
    className: i
  } = e, o = {
    width: n,
    height: n,
    background: S.radioBackground,
    "aria-hidden": true
  };
  return t ? (0, r.jsx)(m.Z, A(T({}, o), {
    foreground: S.radioForeground,
    className: i
  })) : (0, r.jsx)(_.Z, A(T({}, o), {
    className: i
  }))
}

function V(e) {
  let {
    isSelected: t,
    size: n,
    className: i
  } = e, o = .85 * n;
  return (0, r.jsx)("div", {
    className: a()(S.checkbox, {
      [S.checkboxSelected]: t
    }, i),
    style: {
      width: n,
      height: n
    },
    "aria-hidden": true,
    children: t && (0, r.jsx)(u.dz2, {
      size: "custom",
      width: o,
      height: o,
      color: l.Z.unsafe_rawColors.WHITE_500.css
    })
  })
}