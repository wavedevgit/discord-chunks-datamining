/** Chunk was on 66866 **/
/** chunk id: 920557, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => I
}), require("./388685.js"), require("./314940.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk871230 = require("./871230.js"),
  Chunk815061 = require("./815061.js"),
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
  Chunk390840 = require("./390840.js");

function v(e) {
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

function O(e) {
  let {
    percentage: t,
    label: n,
    canShowVoterDetails: l,
    answerId: a
  } = e, s = (0, p.Dt)(), {
    channelId: c,
    messageId: u
  } = (0, b.pE)(), [g, h] = i.useState(""), [E, O] = i.useState(false), y = "" !== g && E, x = i.useCallback(() => {
    h((0, _.e1)(u, c, a))
  }, [u, c, a]), j = i.useCallback(() => {
    x(), O(true)
  }, [x]), I = i.useCallback(() => {
    O(false)
  }, []), S = i.useCallback(() => {
    (0, f.n)({
      channelId: c,
      messageId: u,
      answerId: a
    })
  }, [c, u, a]);
  return i.useEffect(() => {
    if (E) return m.Z.addReactChangeListener(x), () => {
      m.Z.removeReactChangeListener(x)
    }
  }, [E, x]), (0, r.jsxs)("div", {
    className: C.votesData,
    children: [l ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(d.ua7, {
        text: (0, r.jsx)(d.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          scaleFontToUserSetting: true,
          children: g
        }),
        forceOpen: y,
        "aria-label": false,
        children: e => {
          var t, i;
          return (0, r.jsx)(d.Avr, (t = v({}, e), i = i = {
            onMouseEnter: j,
            onMouseLeave: I,
            onFocus: j,
            onBlur: I,
            onClick: S,
            "aria-describedby": y ? s : true,
            text: n,
            variant: "secondary",
            textVariant: "text-xs/semibold"
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
          }), t))
        }
      }), y && (0, r.jsx)(o.T, {
        id: s,
        children: g
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

function y(e) {
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
  return (0, r.jsx)(s.animated.span, {
    className: C.votePercentageBar,
    style: i,
    "aria-hidden": true
  })
}

function x(e) {
  let {
    answersInteraction: t,
    isSelected: n,
    didSelfVote: i,
    isVictor: l,
    isExpired: a,
    className: o
  } = e;
  return (0, c.EQ)({
    answersInteraction: t,
    didSelfVote: i
  }).with({
    answersInteraction: g.Y7.RADIO_BUTTONS
  }, () => (0, r.jsx)(h.Og, {
    isSelected: n,
    size: 24,
    className: o
  })).with({
    answersInteraction: g.Y7.CHECKBOXES
  }, () => (0, r.jsx)(h.zs, {
    isSelected: n,
    size: 20,
    className: o
  })).with({
    answersInteraction: g.Y7.LIST,
    didSelfVote: true
  }, () => (0, r.jsx)(h.ZY, {
    isVictor: l,
    isExpired: a,
    size: 24,
    className: o
  })).otherwise(() => null)
}

function j(e) {
  let {
    answer: t,
    isExpired: n,
    answersInteraction: i,
    canShowVoteCounts: l,
    canShowVoterDetails: s
  } = e, c = true === t.isSelected, u = true === t.didSelfVote, p = true === t.isVictor, m = t.shouldAnimateTransition;
  return (0, r.jsxs)("div", {
    className: a()(C.answerInner, {
      [C.currentlyVoting]: i !== g.Y7.LIST,
      [C.selected]: c
    }),
    children: [l ? (0, r.jsx)(y, {
      percentage: t.votesPercentage,
      shouldAnimate: m
    }) : null, null != t.pollMedia.emoji && (0, r.jsx)(h.sc, {
      className: C.emoji,
      emoji: t.pollMedia.emoji
    }), (0, r.jsx)(d.Text, {
      className: C.label,
      variant: "text-sm/semibold",
      color: "none",
      scaleFontToUserSetting: true,
      children: t.pollMedia.text
    }), t.didSelfVote && (0, r.jsx)(o.T, {
      children: E.intl.string(E.t["8DAM+/"])
    }), l && (0, r.jsx)(O, {
      percentage: t.votesPercentage,
      label: t.votes,
      canShowVoterDetails: s,
      answerId: t.answerId
    }), (0, r.jsx)(x, {
      answersInteraction: i,
      isSelected: c,
      didSelfVote: u,
      isVictor: p,
      isExpired: n,
      className: C.answerSelectionIcon
    })]
  })
}

function I(e) {
  var {
    isExpired: t,
    answersInteraction: n,
    canShowVoteCounts: i,
    canTapAnswers: l
  } = e, a = function(e, t) {
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
  }(e, ["isExpired", "answersInteraction", "canShowVoteCounts", "canTapAnswers"]);
  return (0, r.jsx)(h.$e, v({
    className: C.answersContainer,
    answerClassName: C.answer,
    answersInteraction: n,
    canTapAnswers: l,
    renderAnswerContent: e => (0, r.jsx)(j, {
      answer: e,
      isExpired: t,
      answersInteraction: n,
      canShowVoteCounts: i,
      canShowVoterDetails: l
    })
  }, a))
}