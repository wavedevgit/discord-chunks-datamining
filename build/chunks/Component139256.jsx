/** Chunk was on web.js **/
/** chunk id: 139256, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $e: () => j,
  $w: () => F,
  Og: () => H,
  ZY: () => V,
  sc: () => B,
  zs: () => W
}), require("./314940.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk755721 = require("./755721.js"),
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
  Chunk313464 = require("./313464.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
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

function R(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function P(e, t) {
  if (null == e) return {};
  var n, r, i = D(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function D(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function w(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, r.jsx)("ul", {
    "aria-label": T.intl.string(T.t.sJpqBS),
    className: t,
    children: n
  })
}

function L(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, r.jsx)("div", {
    "aria-label": T.intl.string(T.t.sJpqBS),
    role: "group",
    className: t,
    children: n
  })
}

function x(e) {
  let {
    className: t,
    children: n
  } = e, i = (0, l.Jb)({
    orientation: "vertical"
  }), {
    ref: a
  } = i, o = P(i, ["ref"]);
  return (0, r.jsx)("div", R(C({
    "aria-label": T.intl.string(T.t.sJpqBS),
    ref: a
  }, o), {
    className: t,
    children: n
  }))
}

function M(e) {
  let {
    className: t,
    onClick: n,
    isSelected: i,
    isFirstAnswer: a,
    children: s
  } = e, {
    pollAnswerRef: l
  } = (0, v.dv)();
  return (0, r.jsx)(c.P3F, {
    role: "checkbox",
    className: o()(t, S.enabled),
    onClick: n,
    "aria-checked": i,
    ref: a ? l : true,
    children: s
  })
}

function k(e) {
  let t, {
    className: n,
    children: i,
    onClick: a,
    isSelected: s,
    hasSelectedAnyAnswer: l,
    isFirstAnswer: u
  } = e;
  t = l ? s ? 0 : false : u ? 0 : false;
  let {
    pollAnswerRef: d
  } = (0, v.dv)();
  return (0, r.jsx)(c.P3F, {
    role: "radio",
    className: o()(n, S.enabled),
    onClick: a,
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
    canTapAnswers: a,
    hasSelectedAnyAnswer: o,
    className: l,
    answerClassName: c,
    renderAnswerContent: u
  } = e, {
    ContainerComponent: d,
    answerElementType: f
  } = (0, s.EQ)({
    canTapAnswers: a,
    answersInteraction: n
  }).with({
    answersInteraction: y.Y7.RADIO_BUTTONS
  }, () => ({
    ContainerComponent: x,
    answerElementType: 1
  })).with({
    answersInteraction: y.Y7.CHECKBOXES
  }, () => ({
    ContainerComponent: L,
    answerElementType: 2
  })).with({
    canTapAnswers: true,
    answersInteraction: y.Y7.LIST
  }, () => ({
    ContainerComponent: w,
    answerElementType: 3
  })).otherwise(() => ({
    ContainerComponent: w,
    answerElementType: 0
  }));
  return (0, r.jsx)(d, {
    className: l,
    children: t.map((e, t) => (0, r.jsx)(U, {
      className: c,
      answer: e,
      isFirstAnswer: 0 === t,
      elementType: f,
      answerTapAccessibilityLabel: i,
      hasSelectedAnyAnswer: o,
      children: u(e)
    }, e.answerId))
  })
}

function U(e) {
  let {
    className: t,
    answer: n,
    children: a,
    hasSelectedAnyAnswer: s,
    isFirstAnswer: l,
    elementType: c
  } = e, {
    channelId: u,
    messageId: d
  } = (0, O.pE)(), f = (0, O.$B)(n.style), _ = true === n.isSelected, p = i.useCallback(() => {
    E.Z.handlePollAnswerTapped({
      channelId: u,
      messageId: d,
      answerId: n.answerId
    })
  }, [u, d, n.answerId]);
  switch (c) {
    case 0:
    case 3:
      return (0, r.jsx)("li", {
        className: o()(t, f),
        children: a
      });
    case 1:
      return (0, r.jsx)(k, {
        className: o()(t, f),
        onClick: p,
        isSelected: _,
        hasSelectedAnyAnswer: s,
        isFirstAnswer: l,
        children: a
      });
    case 2:
      return (0, r.jsx)(M, {
        className: o()(t, f),
        onClick: p,
        isSelected: _,
        isFirstAnswer: l,
        children: a
      })
  }
}

function G(e) {
  var t;
  let {
    attachment: n,
    className: i
  } = e, a = (0, g.n)(), o = p.QK.useSetting(), s = 212;
  return (0, r.jsx)(_.ZP, {
    className: i,
    imageClassName: S.attachmentImage,
    src: null != n.proxy_url && "" !== n.proxy_url ? n.proxy_url : n.url,
    alt: null != (t = n.description) ? t : (0, b.fw)(n.filename),
    responsive: true,
    width: s,
    height: s,
    autoPlay: o,
    shouldAnimate: a,
    shouldRenderAccessory: false
  })
}

function B(e) {
  let {
    className: t,
    emoji: n
  } = e;
  return (0, r.jsx)(u.Z, {
    className: t,
    emojiId: n.id,
    emojiName: n.name,
    animated: n.animated
  })
}

function Z(e, t) {
  return null != e ? (0, r.jsx)("div", {
    className: e,
    children: t
  }) : t
}

function F(e) {
  let {
    media: t,
    containerClassName: n,
    attachmentClassName: i,
    emojiClassName: a,
    fallback: o
  } = e, {
    message: s
  } = (0, O.GF)();
  if (null != t.attachmentIds && t.attachmentIds.length > 0) {
    let e = s.attachments.find(e => {
      var n;
      return e.id === (null == (n = t.attachmentIds) ? true : n[0])
    });
    if (null != e) return Z(n, (0, r.jsx)(G, {
      className: i,
      attachment: e
    }))
  }
  return null != t.emoji ? Z(n, (0, r.jsx)(B, {
    className: a,
    emoji: t.emoji
  })) : true !== o ? o : null
}

function V(e) {
  let {
    isVictor: t,
    isExpired: n,
    size: i,
    className: a
  } = e, {
    color: o,
    backgroundColor: l
  } = (0, s.EQ)({
    isVictor: t,
    isExpired: n
  }).with({
    isExpired: true,
    isVictor: true
  }, () => ({
    color: f.Z.BUTTON_POSITIVE_BACKGROUND,
    backgroundColor: (0, d.Lq)(I.Ilk.WHITE_500)
  })).with({
    isExpired: true,
    isVictor: false
  }, () => ({
    color: f.Z.ICON_PRIMARY,
    backgroundColor: f.Z.BACKGROUND_MOD_FAINT
  })).otherwise(() => ({
    color: (0, d.Lq)(I.Ilk.BRAND_500),
    backgroundColor: (0, d.Lq)(I.Ilk.WHITE_500)
  }));
  return (0, r.jsx)(c.owK, {
    size: "custom",
    width: i,
    height: i,
    className: a,
    color: o,
    secondaryColor: l,
    "aria-hidden": true
  })
}

function H(e) {
  let {
    isSelected: t,
    size: n,
    className: i
  } = e, a = {
    width: n,
    height: n,
    background: S.radioBackground,
    "aria-hidden": true
  };
  return t ? (0, r.jsx)(m.Z, R(C({}, a), {
    foreground: S.radioForeground,
    className: i
  })) : (0, r.jsx)(h.Z, R(C({}, a), {
    className: i
  }))
}

function W(e) {
  let {
    isSelected: t,
    size: n,
    className: i
  } = e, a = .85 * n;
  return (0, r.jsx)("div", {
    className: o()(S.checkbox, {
      [S.checkboxSelected]: t
    }, i),
    style: {
      width: n,
      height: n
    },
    "aria-hidden": true,
    children: t && (0, r.jsx)(c.dz2, {
      size: "custom",
      width: a,
      height: a,
      color: (0, d.Lq)(I.Ilk.WHITE_500)
    })
  })
}