/** Chunk was on 91173 **/
/** chunk id: 139256, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $e: () => w,
  $w: () => M,
  Og: () => U,
  ZY: () => k,
  sc: () => L,
  zs: () => F
}), require("./314940.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk313464 = require("./313464.js");

function j(e) {
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

function I(e, t) {
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

function S(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, r.jsx)("ul", {
    "aria-label": y.intl.string(y.t.sJpqBQ),
    className: t,
    children: n
  })
}

function T(e) {
  let {
    className: t,
    children: n
  } = e;
  return (0, r.jsx)("div", {
    "aria-label": y.intl.string(y.t.sJpqBQ),
    role: "group",
    className: t,
    children: n
  })
}

function P(e) {
  let {
    className: t,
    children: n
  } = e, i = (0, s.arW)({
    orientation: "vertical"
  }), {
    ref: l
  } = i, a = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(i, ["ref"]);
  return (0, r.jsx)("div", I(j({
    "aria-label": y.intl.string(y.t.sJpqBQ),
    ref: l
  }, a), {
    className: t,
    children: n
  }))
}

function N(e) {
  let {
    className: t,
    onClick: n,
    isSelected: i,
    isFirstAnswer: l,
    children: o
  } = e, {
    pollAnswerRef: c
  } = (0, v.dv)();
  return (0, r.jsx)(s.P3F, {
    role: "checkbox",
    className: a()(t, x.enabled),
    onClick: n,
    "aria-checked": i,
    ref: l ? c : true,
    children: o
  })
}

function A(e) {
  let {
    className: t,
    children: n,
    onClick: i,
    isSelected: l,
    hasSelectedAnyAnswer: o,
    isFirstAnswer: c
  } = e, {
    pollAnswerRef: u
  } = (0, v.dv)();
  return (0, r.jsx)(s.P3F, {
    role: "radio",
    className: a()(t, x.enabled),
    onClick: i,
    "aria-checked": l,
    tabIndex: o ? l ? 0 : false : c ? 0 : false,
    ref: c ? u : true,
    children: n
  })
}

function w(e) {
  let {
    answers: t,
    answersInteraction: n,
    answerTapAccessibilityLabel: i,
    canTapAnswers: l,
    hasSelectedAnyAnswer: a,
    className: s,
    answerClassName: c,
    renderAnswerContent: u
  } = e, {
    ContainerComponent: d,
    answerElementType: p
  } = (0, o.EQ)({
    canTapAnswers: l,
    answersInteraction: n
  }).with({
    answersInteraction: E.Y7.RADIO_BUTTONS
  }, () => ({
    ContainerComponent: P,
    answerElementType: 1
  })).with({
    answersInteraction: E.Y7.CHECKBOXES
  }, () => ({
    ContainerComponent: T,
    answerElementType: 2
  })).with({
    canTapAnswers: true,
    answersInteraction: E.Y7.LIST
  }, () => ({
    ContainerComponent: S,
    answerElementType: 3
  })).otherwise(() => ({
    ContainerComponent: S,
    answerElementType: 0
  }));
  return (0, r.jsx)(d, {
    className: s,
    children: t.map((e, t) => (0, r.jsx)(Z, {
      className: c,
      answer: e,
      isFirstAnswer: 0 === t,
      elementType: p,
      answerTapAccessibilityLabel: i,
      hasSelectedAnyAnswer: a,
      children: u(e)
    }, e.answerId))
  })
}

function Z(e) {
  let {
    className: t,
    answer: n,
    children: l,
    hasSelectedAnyAnswer: o,
    isFirstAnswer: s,
    elementType: c
  } = e, {
    channelId: u,
    messageId: d
  } = (0, C.pE)(), p = (0, C.$B)(n.style), m = true === n.isSelected, f = i.useCallback(() => {
    h.Z.handlePollAnswerTapped({
      channelId: u,
      messageId: d,
      answerId: n.answerId
    })
  }, [u, d, n.answerId]);
  switch (c) {
    case 0:
    case 3:
      return (0, r.jsx)("li", {
        className: a()(t, p),
        children: l
      });
    case 1:
      return (0, r.jsx)(A, {
        className: a()(t, p),
        onClick: f,
        isSelected: m,
        hasSelectedAnyAnswer: o,
        isFirstAnswer: s,
        children: l
      });
    case 2:
      return (0, r.jsx)(N, {
        className: a()(t, p),
        onClick: f,
        isSelected: m,
        isFirstAnswer: s,
        children: l
      })
  }
}

function R(e) {
  var t;
  let {
    attachment: n,
    className: i
  } = e, l = (0, g.n)(), a = m.QK.useSetting();
  return (0, r.jsx)(p.ZP, {
    className: i,
    imageClassName: x.attachmentImage,
    src: null != n.proxy_url && "" !== n.proxy_url ? n.proxy_url : n.url,
    alt: null != (t = n.description) ? t : (0, b.fw)(n.filename),
    responsive: true,
    width: 212,
    height: 212,
    autoPlay: a,
    shouldAnimate: l,
    shouldRenderAccessory: false
  })
}

function L(e) {
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

function D(e, t) {
  return null != e ? (0, r.jsx)("div", {
    className: e,
    children: t
  }) : t
}

function M(e) {
  let {
    media: t,
    containerClassName: n,
    attachmentClassName: i,
    emojiClassName: l,
    fallback: a
  } = e, {
    message: o
  } = (0, C.GF)();
  if (null != t.attachmentIds && t.attachmentIds.length > 0) {
    let e = o.attachments.find(e => {
      var n;
      return e.id === (null == (n = t.attachmentIds) ? true : n[0])
    });
    if (null != e) return D(n, (0, r.jsx)(R, {
      className: i,
      attachment: e
    }))
  }
  return null != t.emoji ? D(n, (0, r.jsx)(L, {
    className: l,
    emoji: t.emoji
  })) : true !== a ? a : null
}

function k(e) {
  let {
    isVictor: t,
    isExpired: n,
    size: i,
    className: l
  } = e, {
    color: a,
    backgroundColor: c
  } = (0, o.EQ)({
    isVictor: t,
    isExpired: n
  }).with({
    isExpired: true,
    isVictor: true
  }, () => ({
    color: d.Z.BUTTON_POSITIVE_BACKGROUND,
    backgroundColor: (0, u.Lq)(O.Ilk.WHITE_500)
  })).with({
    isExpired: true,
    isVictor: false
  }, () => ({
    color: d.Z.ICON_PRIMARY,
    backgroundColor: d.Z.BACKGROUND_MOD_FAINT
  })).otherwise(() => ({
    color: (0, u.Lq)(O.Ilk.BRAND_500),
    backgroundColor: (0, u.Lq)(O.Ilk.WHITE_500)
  }));
  return (0, r.jsx)(s.owK, {
    size: "custom",
    width: i,
    height: i,
    className: l,
    color: a,
    secondaryColor: c,
    "aria-hidden": true
  })
}

function U(e) {
  let {
    isSelected: t,
    size: n,
    className: i
  } = e, l = {
    width: n,
    height: n,
    background: x.radioBackground,
    "aria-hidden": true
  };
  return t ? (0, r.jsx)(_.Z, I(j({}, l), {
    foreground: x.radioForeground,
    className: i
  })) : (0, r.jsx)(f.Z, I(j({}, l), {
    className: i
  }))
}

function F(e) {
  let {
    isSelected: t,
    size: n,
    className: i
  } = e, l = .85 * n;
  return (0, r.jsx)("div", {
    className: a()(x.checkbox, {
      [x.checkboxSelected]: t
    }, i),
    style: {
      width: n,
      height: n
    },
    "aria-hidden": true,
    children: t && (0, r.jsx)(s.dz2, {
      size: "custom",
      width: l,
      height: l,
      color: (0, u.Lq)(O.Ilk.WHITE_500)
    })
  })
}