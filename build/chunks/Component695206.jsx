/** Chunk was on web.js **/
/** chunk id: 695206, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
}), require("./801541.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk889137 = require("./889137.js"),
  Chunk966974 = require("./966974.js"),
  Chunk397927 = require("./397927.js"),
  Chunk180662 = require("./180662.js"),
  Chunk570766 = require("./570766.jsx"),
  Chunk290794 = require("./290794.jsx"),
  Chunk789646 = require("./789646.jsx"),
  Chunk431174 = require("./431174.jsx"),
  Chunk744180 = require("./744180.js");

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
    className: h.b1,
    scaleFontToUserSetting: true,
    children: t.text
  })
}

function y(e) {
  let {
    buttonLabel: t,
    secondaryLabel: n,
    handleClick: i,
    isInteractive: a,
    className: o
  } = e;
  return (0, r.jsxs)("div", {
    className: s()(h.ez, o),
    children: [a ? (0, r.jsx)(c.QWc, {
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

function b(e, t) {
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
  return (0, o.YW)(t.layoutType).with(l.Z.DEFAULT, () => (0, r.jsx)(_.j, g({}, n))).with(l.Z.IMAGE_ONLY_ANSWERS, () => (0, r.jsx)(d.A, g({}, n))).otherwise(() => null)
}

function O(e) {
  let {
    action: t,
    channelId: n,
    messageId: a,
    isInteractive: s,
    className: o
  } = e, {
    actionButtonRef: l,
    manageFocusOnAction: d
  } = (0, p.Mg)(), f = i.useCallback(async () => {
    (null == t ? true : t.type) != null && (await u.A.handlePollActionTapped({
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
  }, t.presentation) : "textButton" === t.presentation ? (0, r.jsx)(c.QWc, {
    buttonRef: l,
    onClick: f,
    text: t.label,
    variant: "secondary",
    textVariant: "text-sm/medium"
  }) : (0, r.jsx)(y, {
    buttonLabel: t.label,
    secondaryLabel: t.secondaryLabel,
    handleClick: f,
    isInteractive: s,
    className: o
  })
}

function v(e) {
  let {
    message: t,
    poll: n,
    className: i
  } = e, a = (0, f.hd)(n.containerStyle), o = b(t, n);
  return null == o ? null : (0, r.jsx)("div", {
    className: s()(h.kL, a, i),
    children: (0, r.jsxs)(c.Fmo, {
      children: [(0, r.jsxs)("div", {
        className: h.wx,
        children: [(0, r.jsx)(E, {
          media: n.question
        }), null != n.promptLabel && (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          className: h.J1,
          scaleFontToUserSetting: true,
          children: n.promptLabel
        })]
      }), o, (0, r.jsxs)("div", {
        className: h.pR,
        children: [(0, r.jsx)(O, {
          channelId: t.getChannelId(),
          messageId: t.id,
          action: n.secondaryAction,
          className: h.Dc,
          isInteractive: n.isInteractive
        }), (0, r.jsx)(O, {
          channelId: t.getChannelId(),
          messageId: t.id,
          action: n.tertiaryAction,
          className: h.vD
        }), (0, r.jsx)(O, {
          channelId: t.getChannelId(),
          messageId: t.id,
          action: n.primaryAction
        })]
      })]
    })
  })
}

function A(e) {
  let {
    message: t,
    poll: n,
    className: i
  } = e;
  return (0, r.jsx)(f.y5, {
    message: t,
    poll: n,
    children: (0, r.jsx)(p.RZ, {
      children: (0, r.jsx)(v, {
        message: t,
        poll: n,
        className: i
      })
    })
  })
}