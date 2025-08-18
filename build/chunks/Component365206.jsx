/** Chunk was on 91173 **/
/** chunk id: 365206, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk871230 = require("./871230.js"),
  Chunk481060 = require("./481060.js"),
  Chunk839963 = require("./839963.js"),
  Chunk139256 = require("./139256.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk33470 = require("./33470.js");

function p(e) {
  let {
    didSelfVote: t,
    label: n,
    percentage: i
  } = e;
  return (0, r.jsxs)("div", {
    className: d.votesData,
    children: [t && (0, r.jsx)(o.T, {
      children: u.intl.string(u.t["8DAM+/"])
    }), (0, r.jsxs)(a.Text, {
      variant: "text-md/semibold",
      color: "none",
      children: [i, "%"]
    }), (0, r.jsx)(a.Text, {
      variant: "text-xs/semibold",
      color: "none",
      children: n
    })]
  })
}

function m(e) {
  let {
    answer: t,
    isExpired: n,
    myAvatarUrl: i,
    canShowVoteCounts: o
  } = e, a = true === t.isSelected, s = true === t.didSelfVote, u = true === t.isVictor;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.$w, {
      attachmentClassName: l()(d.attachment, {
        [d.attachmentWithResults]: o
      }),
      emojiClassName: d.emoji,
      media: t.pollMedia,
      fallback: (0, r.jsx)("div", {
        className: l()(d.attachment, d.mediaMissing)
      })
    }), a && (0, r.jsx)(c.ZY, {
      size: 40,
      isVictor: u,
      isExpired: n,
      className: d.selectedIcon
    }), o && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(p, {
        didSelfVote: s,
        percentage: t.votesPercentage,
        label: t.votes,
        myAvatarUrl: s ? i : true
      }), (!n && s || u) && (0, r.jsx)(c.ZY, {
        size: 18,
        isVictor: u,
        isExpired: n,
        className: d.pollAnswerIcon
      })]
    })]
  })
}

function f(e) {
  var {
    isExpired: t,
    myAvatarUrl: n,
    answersInteraction: i,
    canShowVoteCounts: o
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
  }(e, ["isExpired", "myAvatarUrl", "answersInteraction", "canShowVoteCounts"]);
  return (0, r.jsx)(c.$e, function(e) {
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
  }({
    className: d.answersContainer,
    answerClassName: l()(d.answer, {
      [d.currentlyVoting]: i !== s.Y7.LIST
    }),
    myAvatarUrl: n,
    answersInteraction: i,
    renderAnswerContent: e => (0, r.jsx)(m, {
      answer: e,
      isExpired: t,
      myAvatarUrl: n,
      answersInteraction: i,
      canShowVoteCounts: o
    })
  }, a))
}