/** Chunk was on web.js **/
/** chunk id: 920557, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => x
}), require("./388685.js"), require("./314940.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk485853 = require("./485853.js"),
  Chunk666917 = require("./666917.js"),
  Chunk278074 = require("./278074.js"),
  Chunk748780 = require("./748780.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk542578 = require("./542578.js"),
  Chunk203143 = require("./203143.js"),
  Chunk79390 = require("./79390.js"),
  Chunk839963 = require("./839963.js"),
  Chunk139256 = require("./139256.jsx"),
  Chunk294608 = require("./294608.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk390840 = require("./390840.js");

function v(e, t, n) {
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
      v(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i = T(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let A = 24,
  C = 24,
  N = 20;

function P(e) {
  let {
    percentage: t,
    label: n,
    canShowVoterDetails: a,
    answerId: o
  } = e, l = (0, p.Dt)(), {
    channelId: c,
    messageId: u
  } = (0, b.pE)(), [g, E] = i.useState(""), [y, v] = i.useState(false), S = "" !== g && y, I = i.useCallback(() => {
    E((0, h.e1)(u, c, o))
  }, [u, c, o]), T = i.useCallback(() => {
    I(), v(true)
  }, [I]), A = i.useCallback(() => {
    v(false)
  }, []), C = i.useCallback(() => {
    (0, m.n)({
      channelId: c,
      messageId: u,
      answerId: o
    })
  }, [c, u, o]);
  return i.useEffect(() => {
    if (y) return _.Z.addReactChangeListener(I), () => {
      _.Z.removeReactChangeListener(I)
    }
  }, [y, I]), (0, r.jsxs)("div", {
    className: O.votesData,
    children: [a ? (0, r.jsxs)(r.Fragment, {
      children: ["" !== g ? (0, r.jsx)(d.u, {
        __unsupportedReactNodeAsText: (0, r.jsx)(f.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          scaleFontToUserSetting: true,
          children: g
        }),
        forceOpen: S,
        "aria-label": false,
        children: (0, r.jsx)(f.Avr, {
          onMouseEnter: T,
          onMouseLeave: A,
          onFocus: T,
          onBlur: A,
          onClick: C,
          "aria-describedby": S ? l : true,
          text: n,
          variant: "secondary",
          textVariant: "text-xs/semibold"
        })
      }) : (0, r.jsx)(f.Avr, {
        onMouseEnter: T,
        onMouseLeave: A,
        onFocus: T,
        onBlur: A,
        onClick: C,
        text: n,
        variant: "secondary",
        textVariant: "text-xs/semibold"
      }), S && (0, r.jsx)(s.T, {
        id: l,
        children: g
      })]
    }) : (0, r.jsx)(f.Text, {
      variant: "text-xs/semibold",
      color: "none",
      scaleFontToUserSetting: true,
      children: n
    }), (0, r.jsxs)(f.Text, {
      variant: "text-md/bold",
      color: "none",
      scaleFontToUserSetting: true,
      children: [t, "%"]
    })]
  })
}

function R(e) {
  let {
    percentage: t,
    shouldAnimate: n
  } = e, i = (0, f.q_F)({
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
    className: O.votePercentageBar,
    style: i,
    "aria-hidden": true
  })
}

function w(e) {
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
    answersInteraction: g.Y7.RADIO_BUTTONS
  }, () => (0, r.jsx)(E.Og, {
    isSelected: n,
    size: C,
    className: s
  })).with({
    answersInteraction: g.Y7.CHECKBOXES
  }, () => (0, r.jsx)(E.zs, {
    isSelected: n,
    size: N,
    className: s
  })).with({
    answersInteraction: g.Y7.LIST,
    didSelfVote: true
  }, () => (0, r.jsx)(E.ZY, {
    isVictor: a,
    isExpired: o,
    size: A,
    className: s
  })).otherwise(() => null)
}

function D(e) {
  let {
    answer: t,
    isExpired: n,
    answersInteraction: i,
    canShowVoteCounts: a,
    canShowVoterDetails: l
  } = e, c = true === t.isSelected, u = true === t.didSelfVote, d = true === t.isVictor, p = t.shouldAnimateTransition;
  return (0, r.jsxs)("div", {
    className: o()(O.answerInner, {
      [O.currentlyVoting]: i !== g.Y7.LIST,
      [O.selected]: c
    }),
    children: [a ? (0, r.jsx)(R, {
      percentage: t.votesPercentage,
      shouldAnimate: p
    }) : null, null != t.pollMedia.emoji && (0, r.jsx)(E.sc, {
      className: O.emoji,
      emoji: t.pollMedia.emoji
    }), (0, r.jsx)(f.Text, {
      className: O.label,
      variant: "text-sm/semibold",
      color: "none",
      scaleFontToUserSetting: true,
      children: t.pollMedia.text
    }), t.didSelfVote && (0, r.jsx)(s.T, {
      children: y.intl.string(y.t["8DAM+5"])
    }), a && (0, r.jsx)(P, {
      percentage: t.votesPercentage,
      label: t.votes,
      canShowVoterDetails: l,
      answerId: t.answerId
    }), (0, r.jsx)(w, {
      answersInteraction: i,
      isSelected: c,
      didSelfVote: u,
      isVictor: d,
      isExpired: n,
      className: O.answerSelectionIcon
    })]
  })
}

function x(e) {
  var {
    isExpired: t,
    answersInteraction: n,
    canShowVoteCounts: i,
    canTapAnswers: a
  } = e, o = I(e, ["isExpired", "answersInteraction", "canShowVoteCounts", "canTapAnswers"]);
  return (0, r.jsx)(E.$e, S({
    className: O.answersContainer,
    answerClassName: O.answer,
    answersInteraction: n,
    canTapAnswers: a,
    renderAnswerContent: e => (0, r.jsx)(D, {
      answer: e,
      isExpired: t,
      answersInteraction: n,
      canShowVoteCounts: i,
      canShowVoterDetails: a
    })
  }, o))
}