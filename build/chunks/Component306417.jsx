/** Chunk was on web.js **/
/** chunk id: 306417, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Dt: () => V,
  Fb: () => U,
  Fh: () => j,
  Vx: () => F,
  e5: () => H,
  k$: () => B
}), require("./801541.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk889137 = require("./889137.js"),
  Chunk827734 = require("./827734.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk619517 = require("./619517.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk44234 = require("./44234.jsx"),
  Chunk282054 = require("./282054.jsx"),
  Chunk218394 = require("./218394.js"),
  Chunk180662 = require("./180662.js"),
  Chunk969632 = require("./969632.js"),
  Chunk438437 = require("./438437.js"),
  Chunk290794 = require("./290794.jsx"),
  Chunk789646 = require("./789646.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk846537 = require("./846537.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
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

function T(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = R(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function w(e) {
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

function P(e) {
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
  } = e, i = (0, c._u)({
    orientation: "vertical"
  }), {
    ref: a
  } = i, s = N(i, ["ref"]);
  return (0, r.jsx)("div", C(S({
    "aria-label": v.intl.string(v.t.sJpqBS),
    ref: a
  }, s), {
    className: t,
    children: n
  }))
}

function x(e) {
  let {
    className: t,
    onClick: n,
    isSelected: i,
    isFirstAnswer: a,
    children: o
  } = e, {
    pollAnswerRef: l
  } = (0, O.Mg)();
  return (0, r.jsx)(u.DUT, {
    role: "checkbox",
    className: s()(t, A.Sn),
    onClick: n,
    "aria-checked": i,
    ref: a ? l : true,
    children: o
  })
}

function L(e) {
  let t, {
    className: n,
    children: i,
    onClick: a,
    isSelected: o,
    hasSelectedAnyAnswer: l,
    isFirstAnswer: c
  } = e;
  t = l ? o ? 0 : false : c ? 0 : false;
  let {
    pollAnswerRef: d
  } = (0, O.Mg)();
  return (0, r.jsx)(u.DUT, {
    role: "radio",
    className: s()(n, A.Sn),
    onClick: a,
    "aria-checked": o,
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
    canTapAnswers: a,
    hasSelectedAnyAnswer: s,
    className: l,
    answerClassName: c,
    renderAnswerContent: u
  } = e, {
    ContainerComponent: d,
    answerElementType: f
  } = (0, o.YW)({
    canTapAnswers: a,
    answersInteraction: n
  }).with({
    answersInteraction: y.CQ.RADIO_BUTTONS
  }, () => ({
    ContainerComponent: D,
    answerElementType: 1
  })).with({
    answersInteraction: y.CQ.CHECKBOXES
  }, () => ({
    ContainerComponent: P,
    answerElementType: 2
  })).with({
    canTapAnswers: true,
    answersInteraction: y.CQ.LIST
  }, () => ({
    ContainerComponent: w,
    answerElementType: 3
  })).otherwise(() => ({
    ContainerComponent: w,
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
      hasSelectedAnyAnswer: s,
      children: u(e)
    }, e.answerId))
  })
}

function M(e) {
  let {
    className: t,
    answer: n,
    children: a,
    hasSelectedAnyAnswer: o,
    isFirstAnswer: l,
    elementType: c
  } = e, {
    channelId: u,
    messageId: d
  } = (0, b.Tu)(), f = (0, b.hd)(n.style), p = true === n.isSelected, _ = i.useCallback(() => {
    g.A.handlePollAnswerTapped({
      channelId: u,
      messageId: d,
      answerId: n.answerId
    })
  }, [u, d, n.answerId]);
  switch (c) {
    case 0:
    case 3:
      return (0, r.jsx)("li", {
        className: s()(t, f),
        children: a
      });
    case 1:
      return (0, r.jsx)(L, {
        className: s()(t, f),
        onClick: _,
        isSelected: p,
        hasSelectedAnyAnswer: o,
        isFirstAnswer: l,
        children: a
      });
    case 2:
      return (0, r.jsx)(x, {
        className: s()(t, f),
        onClick: _,
        isSelected: p,
        isFirstAnswer: l,
        children: a
      })
  }
}

function k(e) {
  var t;
  let {
    attachment: n,
    className: i
  } = e, a = (0, m.j)(), s = p.kt.useSetting(), o = 212;
  return (0, r.jsx)(f.Ay, {
    className: i,
    imageClassName: A.Bw,
    src: null != n.proxy_url && "" !== n.proxy_url ? n.proxy_url : n.url,
    alt: null != (t = n.description) ? t : (0, E.Kj)(n.filename),
    responsive: true,
    width: o,
    height: o,
    autoPlay: s,
    shouldAnimate: a,
    shouldRenderAccessory: false
  })
}

function U(e) {
  let {
    className: t,
    emoji: n
  } = e;
  return (0, r.jsx)(d.A, {
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

function V(e) {
  let {
    media: t,
    containerClassName: n,
    attachmentClassName: i,
    emojiClassName: a,
    fallback: s
  } = e, {
    message: o
  } = (0, b.y0)();
  if (null != t.attachmentIds && t.attachmentIds.length > 0) {
    let e = o.attachments.find(e => {
      var n;
      return e.id === (null == (n = t.attachmentIds) ? true : n[0])
    });
    if (null != e) return G(n, (0, r.jsx)(k, {
      className: i,
      attachment: e
    }))
  }
  return null != t.emoji ? G(n, (0, r.jsx)(U, {
    className: a,
    emoji: t.emoji
  })) : true !== s ? s : null
}

function F(e) {
  let {
    isVictor: t,
    isExpired: n,
    size: i,
    className: a
  } = e, {
    color: s,
    backgroundColor: c
  } = (0, o.YW)({
    isVictor: t,
    isExpired: n
  }).with({
    isExpired: true,
    isVictor: true
  }, () => ({
    color: l.A.colors.CONTROL_CONNECTED_BACKGROUND_DEFAULT.css,
    backgroundColor: l.A.unsafe_rawColors.WHITE.css
  })).with({
    isExpired: true,
    isVictor: false
  }, () => ({
    color: l.A.colors.ICON_STRONG.css,
    backgroundColor: l.A.colors.BACKGROUND_MOD_MUTED.css
  })).otherwise(() => ({
    color: l.A.unsafe_rawColors.BRAND_500.css,
    backgroundColor: l.A.unsafe_rawColors.WHITE.css
  }));
  return (0, r.jsx)(u.yr3, {
    size: "custom",
    width: i,
    height: i,
    className: a,
    color: s,
    secondaryColor: c,
    "aria-hidden": true
  })
}

function B(e) {
  let {
    isSelected: t,
    size: n,
    className: i
  } = e, a = {
    width: n,
    height: n,
    background: A.So,
    "aria-hidden": true
  };
  return t ? (0, r.jsx)(h.A, C(S({}, a), {
    foreground: A.dY,
    className: i
  })) : (0, r.jsx)(_.A, C(S({}, a), {
    className: i
  }))
}

function H(e) {
  let {
    isSelected: t,
    size: n,
    className: i
  } = e, a = .85 * n;
  return (0, r.jsx)("div", {
    className: s()(A.kv, {
      [A.H7]: t
    }, i),
    style: {
      width: n,
      height: n
    },
    "aria-hidden": true,
    children: t && (0, r.jsx)(u.A9s, {
      size: "custom",
      width: a,
      height: a,
      color: l.A.unsafe_rawColors.WHITE.css
    })
  })
}