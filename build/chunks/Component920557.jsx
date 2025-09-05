/** Chunk was on web.js **/
/** chunk id: 920557, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => L
}), require("./388685.js"), require("./314940.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk871230 = require("./871230.js"),
  Chunk261616 = require("./261616.js"),
  Chunk278074 = require("./278074.js"),
  Chunk748780 = require("./748780.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk542578 = require("./542578.js"),
  Chunk203143 = require("./203143.js"),
  Chunk79390 = require("./79390.js"),
  Chunk839963 = require("./839963.js"),
  Chunk139256 = require("./139256.jsx"),
  Chunk294608 = require("./294608.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk525799 = require("./525799.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = A(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let C = 24,
  N = 24,
  R = 20;

function P(e) {
  let {
    percentage: t,
    label: n,
    canShowVoterDetails: a,
    answerId: o
  } = e, l = (0, f.Dt)(), {
    channelId: c,
    messageId: u
  } = (0, E.pE)(), [m, g] = i.useState(""), [b, O] = i.useState(false), I = "" !== m && b, S = i.useCallback(() => {
    g((0, h.e1)(u, c, o))
  }, [u, c, o]), A = i.useCallback(() => {
    S(), O(true)
  }, [S]), C = i.useCallback(() => {
    O(false)
  }, []), N = i.useCallback(() => {
    (0, p.n)({
      channelId: c,
      messageId: u,
      answerId: o
    })
  }, [c, u, o]);
  return i.useEffect(() => {
    if (b) return _.Z.addReactChangeListener(S), () => {
      _.Z.removeReactChangeListener(S)
    }
  }, [b, S]), (0, r.jsxs)("div", {
    className: y.votesData,
    children: [a ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.ua7, {
        text: (0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          scaleFontToUserSetting: true,
          children: m
        }),
        forceOpen: I,
        "aria-label": false,
        children: e => (0, r.jsx)(d.Avr, T(v({}, e), {
          onMouseEnter: A,
          onMouseLeave: C,
          onFocus: A,
          onBlur: C,
          onClick: N,
          "aria-describedby": I ? l : true,
          text: n,
          variant: "secondary",
          textVariant: "text-xs/semibold"
        }))
      }), I && (0, r.jsx)(s.T, {
        id: l,
        children: m
      })]
    }) : (0, r.jsx)(d.Text, {
      variant: "text-xs/semibold",
      color: "none",
      scaleFontToUserSetting: true,
      children: n
    }), (0, r.jsxs)(d.Text, {
      variant: "text-md/bold",
      color: "none",
      scaleFontToUserSetting: true,
      children: [t, "%"]
    })]
  })
}

function w(e) {
  let {
    percentage: t,
    shouldAnimate: n
  } = e, i = (0, d.q_F)({
    from: {
      width: n ? "0%" : "".concat(t, "%")
    },
    to: {
      width: "".concat(t, "%")
    },
    config: {
      duration: 1200,
      easing: u.Z.Easing.inOut(u.Z.Easing.ease)
    }
  }, "animate-always");
  return (0, r.jsx)(l.animated.span, {
    className: y.votePercentageBar,
    style: i,
    "aria-hidden": true
  })
}

function D(e) {
  let {
    answersInteraction: t,
    isSelected: n,
    didSelfVote: i,
    isVictor: a,
    isExpired: o,
    className: s
  } = e;
  return (0, c.EQ)({
    answersInteraction: t,
    didSelfVote: i
  }).with({
    answersInteraction: m.Y7.RADIO_BUTTONS
  }, () => (0, r.jsx)(g.Og, {
    isSelected: n,
    size: N,
    className: s
  })).with({
    answersInteraction: m.Y7.CHECKBOXES
  }, () => (0, r.jsx)(g.zs, {
    isSelected: n,
    size: R,
    className: s
  })).with({
    answersInteraction: m.Y7.LIST,
    didSelfVote: true
  }, () => (0, r.jsx)(g.ZY, {
    isVictor: a,
    isExpired: o,
    size: C,
    className: s
  })).otherwise(() => null)
}

function x(e) {
  let {
    answer: t,
    isExpired: n,
    answersInteraction: i,
    canShowVoteCounts: a,
    canShowVoterDetails: l
  } = e, c = true === t.isSelected, u = true === t.didSelfVote, f = true === t.isVictor, _ = t.shouldAnimateTransition;
  return (0, r.jsxs)("div", {
    className: o()(y.answerInner, {
      [y.currentlyVoting]: i !== m.Y7.LIST,
      [y.selected]: c
    }),
    children: [a ? (0, r.jsx)(w, {
      percentage: t.votesPercentage,
      shouldAnimate: _
    }) : null, null != t.pollMedia.emoji && (0, r.jsx)(g.sc, {
      className: y.emoji,
      emoji: t.pollMedia.emoji
    }), (0, r.jsx)(d.Text, {
      className: y.label,
      variant: "text-sm/semibold",
      color: "none",
      scaleFontToUserSetting: true,
      children: t.pollMedia.text
    }), t.didSelfVote && (0, r.jsx)(s.T, {
      children: b.intl.string(b.t["8DAM+/"])
    }), a && (0, r.jsx)(P, {
      percentage: t.votesPercentage,
      label: t.votes,
      canShowVoterDetails: l,
      answerId: t.answerId
    }), (0, r.jsx)(D, {
      answersInteraction: i,
      isSelected: c,
      didSelfVote: u,
      isVictor: f,
      isExpired: n,
      className: y.answerSelectionIcon
    })]
  })
}

function L(e) {
  var {
    isExpired: t,
    answersInteraction: n,
    canShowVoteCounts: i,
    canTapAnswers: a
  } = e, o = S(e, ["isExpired", "answersInteraction", "canShowVoteCounts", "canTapAnswers"]);
  return (0, r.jsx)(g.$e, v({
    className: y.answersContainer,
    answerClassName: y.answer,
    answersInteraction: n,
    canTapAnswers: a,
    renderAnswerContent: e => (0, r.jsx)(x, {
      answer: e,
      isExpired: t,
      answersInteraction: n,
      canShowVoteCounts: i,
      canShowVoterDetails: a
    })
  }, o))
}