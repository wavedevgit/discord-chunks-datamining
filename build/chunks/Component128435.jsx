/** Chunk was on web.js **/
/** chunk id: 128435, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./314940.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk278074 = require("./278074.js"),
  Chunk263568 = require("./263568.js"),
  Chunk481060 = require("./481060.js"),
  Chunk203143 = require("./203143.js"),
  Chunk365206 = require("./365206.jsx"),
  Chunk294608 = require("./294608.jsx"),
  Chunk65145 = require("./65145.jsx"),
  Chunk920557 = require("./920557.jsx"),
  Chunk290550 = require("./290550.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e) {
  let {
    media: t
  } = e;
  return (0, r.jsx)(c.Heading, {
    variant: "text-md/medium",
    className: h.question,
    scaleFontToUserSetting: true,
    children: t.text
  })
}

function b(e) {
  let {
    buttonLabel: t,
    secondaryLabel: n,
    handleClick: i,
    isInteractive: a,
    className: s
  } = e;
  return (0, r.jsxs)("div", {
    className: o()(h.detailsText, s),
    children: [a ? (0, r.jsx)(c.Avr, {
      text: t,
      onClick: i,
      variant: "secondary",
      textVariant: "text-sm/medium"
    }) : (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      scaleFontToUserSetting: true,
      children: t
    }), null != n && (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      scaleFontToUserSetting: true,
      children: n
    })]
  })
}

function y(e, t) {
  let n = {
    answers: t.answers,
    answersInteraction: t.answersInteraction,
    answerTapAccessibilityLabel: t.answerTapAccessibilityLabel,
    isExpired: t.isExpired,
    canTapAnswers: t.canTapAnswers,
    hasSelectedAnyAnswer: t.hasSelectedAnswer,
    myAvatarUrl: t.myAvatarUrl,
    canShowVoteCounts: t.canShowVoteCounts
  };
  return (0, s.EQ)(t.layoutType).with(l.C.DEFAULT, () => (0, r.jsx)(p.K, g({}, n))).with(l.C.IMAGE_ONLY_ANSWERS, () => (0, r.jsx)(d.Z, g({}, n))).otherwise(() => null)
}

function O(e) {
  let {
    action: t,
    channelId: n,
    messageId: a,
    isInteractive: o,
    className: s
  } = e, {
    actionButtonRef: l,
    manageFocusOnAction: d
  } = (0, _.dv)(), f = i.useCallback(async () => {
    (null == t ? true : t.type) != null && (await u.Z.handlePollActionTapped({
      channelId: n,
      messageId: a,
      type: t.type
    }), d(t.type))
  }, [null == t ? true : t.type, n, a, d]);
  return null == t ? null : "button" === t.presentation || "secondaryButton" === t.presentation ? (0, r.jsx)(c.Button, {
    buttonRef: l,
    onClick: f,
    disabled: !t.enabled,
    variant: "secondaryButton" === t.presentation ? "secondary" : "primary",
    size: "sm",
    text: t.label
  }, t.presentation) : "textButton" === t.presentation ? (0, r.jsx)(c.Avr, {
    buttonRef: l,
    onClick: f,
    text: t.label,
    variant: "secondary",
    textVariant: "text-sm/medium"
  }) : (0, r.jsx)(b, {
    buttonLabel: t.label,
    secondaryLabel: t.secondaryLabel,
    handleClick: f,
    isInteractive: o,
    className: s
  })
}

function v(e) {
  let {
    message: t,
    poll: n,
    className: i
  } = e, a = (0, f.$B)(n.containerStyle), s = y(t, n);
  return null == s ? null : (0, r.jsx)("div", {
    className: o()(h.container, a, i),
    children: (0, r.jsxs)(c.y5t, {
      children: [(0, r.jsxs)("div", {
        className: h.header,
        children: [(0, r.jsx)(E, {
          media: n.question
        }), null != n.promptLabel && (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: h.prompt,
          scaleFontToUserSetting: true,
          children: n.promptLabel
        })]
      }), s, (0, r.jsxs)("div", {
        className: h.bottomBar,
        children: [(0, r.jsx)(O, {
          channelId: t.getChannelId(),
          messageId: t.id,
          action: n.secondaryAction,
          className: h.secondaryAction,
          isInteractive: n.isInteractive
        }), (0, r.jsx)(O, {
          channelId: t.getChannelId(),
          messageId: t.id,
          action: n.tertiaryAction,
          className: h.tertiaryAction
        }), (0, r.jsx)(O, {
          channelId: t.getChannelId(),
          messageId: t.id,
          action: n.primaryAction
        })]
      })]
    })
  })
}

function I(e) {
  let {
    message: t,
    poll: n,
    className: i
  } = e;
  return (0, r.jsx)(f.XL, {
    message: t,
    poll: n,
    children: (0, r.jsx)(_.Pk, {
      children: (0, r.jsx)(v, {
        message: t,
        poll: n,
        className: i
      })
    })
  })
}