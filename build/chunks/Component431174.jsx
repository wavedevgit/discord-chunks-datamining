/** Chunk was on web.js **/
/** chunk id: 431174, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j: () => x
}), require("./896048.js"), require("./801541.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk126031 = require("./126031.js"),
  Chunk108531 = require("./108531.js"),
  Chunk889137 = require("./889137.js"),
  Chunk615300 = require("./615300.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk956703 = require("./956703.js"),
  Chunk180662 = require("./180662.js"),
  Chunk969632 = require("./969632.js"),
  Chunk438437 = require("./438437.js"),
  Chunk306417 = require("./306417.jsx"),
  Chunk290794 = require("./290794.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk121272 = require("./121272.js");

function v(e, t, n) {
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
      v(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = S(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let T = 24,
  C = 24,
  N = 20;

function R(e) {
  let {
    percentage: t,
    label: n,
    canShowVoterDetails: a,
    answerId: s
  } = e, l = (0, p.GV)(), {
    channelId: c,
    messageId: u
  } = (0, y.Tu)(), [g, E] = i.useState(""), [b, v] = i.useState(false), A = "" !== g && b, I = i.useCallback(() => {
    E((0, m.$m)(u, c, s))
  }, [u, c, s]), S = i.useCallback(() => {
    I(), v(true)
  }, [I]), T = i.useCallback(() => {
    v(false)
  }, []), C = i.useCallback(() => {
    (0, h.e)({
      channelId: c,
      messageId: u,
      answerId: s
    })
  }, [c, u, s]);
  return i.useEffect(() => {
    if (b) return _.A.addReactChangeListener(I), () => {
      _.A.removeReactChangeListener(I)
    }
  }, [b, I]), (0, r.jsxs)("div", {
    className: O.AA,
    children: [a ? (0, r.jsxs)(r.Fragment, {
      children: ["" !== g ? (0, r.jsx)(d.m, {
        __unsupportedReactNodeAsText: (0, r.jsx)(f.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          scaleFontToUserSetting: true,
          children: g
        }),
        forceOpen: A,
        "aria-label": false,
        children: (0, r.jsx)(f.QWc, {
          onMouseEnter: S,
          onMouseLeave: T,
          onFocus: S,
          onBlur: T,
          onClick: C,
          "aria-describedby": A ? l : true,
          text: n,
          variant: "secondary",
          textVariant: "text-xs/semibold"
        })
      }) : (0, r.jsx)(f.QWc, {
        onMouseEnter: S,
        onMouseLeave: T,
        onFocus: S,
        onBlur: T,
        onClick: C,
        text: n,
        variant: "secondary",
        textVariant: "text-xs/semibold"
      }), A && (0, r.jsx)(o.s, {
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

function w(e) {
  let {
    percentage: t,
    shouldAnimate: n
  } = e, i = (0, f.zhh)({
    from: {
      width: n ? "0%" : "".concat(t, "%")
    },
    to: {
      width: "".concat(t, "%")
    },
    config: {
      duration: 1200,
      easing: u.A.Easing.inOut(u.A.Easing.ease)
    }
  }, "animate-always");
  return (0, r.jsx)(l.animated.span, {
    className: O.an,
    style: i,
    "aria-hidden": true
  })
}

function P(e) {
  let {
    answersInteraction: t,
    isSelected: n,
    didSelfVote: i,
    isVictor: a,
    isExpired: s,
    className: o
  } = e;
  return (0, c.YW)({
    answersInteraction: t,
    didSelfVote: i
  }).with({
    answersInteraction: g.CQ.RADIO_BUTTONS
  }, () => (0, r.jsx)(E.k$, {
    isSelected: n,
    size: C,
    className: o
  })).with({
    answersInteraction: g.CQ.CHECKBOXES
  }, () => (0, r.jsx)(E.e5, {
    isSelected: n,
    size: N,
    className: o
  })).with({
    answersInteraction: g.CQ.LIST,
    didSelfVote: true
  }, () => (0, r.jsx)(E.Vx, {
    isVictor: a,
    isExpired: s,
    size: T,
    className: o
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
    className: s()(O.Fk, {
      [O.EK]: i !== g.CQ.LIST,
      [O.wH]: c
    }),
    children: [a ? (0, r.jsx)(w, {
      percentage: t.votesPercentage,
      shouldAnimate: p
    }) : null, null != t.pollMedia.emoji && (0, r.jsx)(E.Fb, {
      className: O.Zg,
      emoji: t.pollMedia.emoji
    }), (0, r.jsx)(f.Text, {
      className: O.Pf,
      variant: "text-sm/semibold",
      color: "none",
      scaleFontToUserSetting: true,
      children: t.pollMedia.text
    }), t.didSelfVote && (0, r.jsx)(o.s, {
      children: b.intl.string(b.t["8DAM+5"])
    }), a && (0, r.jsx)(R, {
      percentage: t.votesPercentage,
      label: t.votes,
      canShowVoterDetails: l,
      answerId: t.answerId
    }), (0, r.jsx)(P, {
      answersInteraction: i,
      isSelected: c,
      didSelfVote: u,
      isVictor: d,
      isExpired: n,
      className: O.ck
    })]
  })
}

function x(e) {
  let {
    isExpired: t,
    answersInteraction: n,
    canShowVoteCounts: i,
    canTapAnswers: a
  } = e, s = I(e, ["isExpired", "answersInteraction", "canShowVoteCounts", "canTapAnswers"]);
  return (0, r.jsx)(E.Fh, A({
    className: O.ry,
    answerClassName: O.ZF,
    answersInteraction: n,
    canTapAnswers: a,
    renderAnswerContent: e => (0, r.jsx)(D, {
      answer: e,
      isExpired: t,
      answersInteraction: n,
      canShowVoteCounts: i,
      canShowVoterDetails: a
    })
  }, s))
}