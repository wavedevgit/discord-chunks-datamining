/** Chunk was on web.js **/
/** chunk id: 365206, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk513351 = require("./513351.js"),
  Chunk481060 = require("./481060.js"),
  Chunk839963 = require("./839963.js"),
  Chunk139256 = require("./139256.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk427816 = require("./427816.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      f(e, t, n[t])
    })
  }
  return e
}

function p(e, t) {
  if (null == e) return {};
  var n, r, i = h(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let m = 40,
  g = 18;

function E(e) {
  let {
    didSelfVote: t,
    label: n,
    percentage: i
  } = e;
  return (0, r.jsxs)("div", {
    className: d.votesData,
    children: [t && (0, r.jsx)(o.T, {
      children: u.intl.string(u.t["8DAM+5"])
    }), (0, r.jsxs)(s.Text, {
      variant: "text-md/semibold",
      color: "none",
      children: [i, "%"]
    }), (0, r.jsx)(s.Text, {
      variant: "text-xs/semibold",
      color: "none",
      children: n
    })]
  })
}

function b(e) {
  let {
    answer: t,
    isExpired: n,
    myAvatarUrl: i,
    canShowVoteCounts: o
  } = e, s = true === t.isSelected, l = true === t.didSelfVote, u = true === t.isVictor;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.$w, {
      attachmentClassName: a()(d.attachment, {
        [d.attachmentWithResults]: o
      }),
      emojiClassName: d.emoji,
      media: t.pollMedia,
      fallback: (0, r.jsx)("div", {
        className: a()(d.attachment, d.mediaMissing)
      })
    }), s && (0, r.jsx)(c.ZY, {
      size: m,
      isVictor: u,
      isExpired: n,
      className: d.selectedIcon
    }), o && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(E, {
        didSelfVote: l,
        percentage: t.votesPercentage,
        label: t.votes,
        myAvatarUrl: l ? i : true
      }), (!n && l || u) && (0, r.jsx)(c.ZY, {
        size: g,
        isVictor: u,
        isExpired: n,
        className: d.pollAnswerIcon
      })]
    })]
  })
}

function y(e) {
  var {
    isExpired: t,
    myAvatarUrl: n,
    answersInteraction: i,
    canShowVoteCounts: o
  } = e, s = p(e, ["isExpired", "myAvatarUrl", "answersInteraction", "canShowVoteCounts"]);
  return (0, r.jsx)(c.$e, _({
    className: d.answersContainer,
    answerClassName: a()(d.answer, {
      [d.currentlyVoting]: i !== l.Y7.LIST
    }),
    myAvatarUrl: n,
    answersInteraction: i,
    renderAnswerContent: e => (0, r.jsx)(b, {
      answer: e,
      isExpired: t,
      myAvatarUrl: n,
      answersInteraction: i,
      canShowVoteCounts: o
    })
  }, s))
}