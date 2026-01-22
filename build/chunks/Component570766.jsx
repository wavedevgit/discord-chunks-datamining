/** Chunk was on web.js **/
/** chunk id: 570766, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk126031 = require("./126031.js"),
  Chunk397927 = require("./397927.js"),
  Chunk438437 = require("./438437.js"),
  Chunk306417 = require("./306417.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk603112 = require("./603112.js");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
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

function _(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = h(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function h(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
    className: d.AA,
    children: [t && (0, r.jsx)(s.s, {
      children: u.intl.string(u.t["8DAM+5"])
    }), (0, r.jsxs)(o.Text, {
      variant: "text-md/semibold",
      color: "none",
      children: [i, "%"]
    }), (0, r.jsx)(o.Text, {
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
    canShowVoteCounts: s
  } = e, o = true === t.isSelected, l = true === t.didSelfVote, u = true === t.isVictor;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Dt, {
      attachmentClassName: a()(d.oh, {
        [d.Wx]: s
      }),
      emojiClassName: d.Zg,
      media: t.pollMedia,
      fallback: (0, r.jsx)("div", {
        className: a()(d.oh, d.nb)
      })
    }), o && (0, r.jsx)(c.Vx, {
      size: m,
      isVictor: u,
      isExpired: n,
      className: d.Dt
    }), s && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(E, {
        didSelfVote: l,
        percentage: t.votesPercentage,
        label: t.votes,
        myAvatarUrl: l ? i : true
      }), (!n && l || u) && (0, r.jsx)(c.Vx, {
        size: g,
        isVictor: u,
        isExpired: n,
        className: d.Po
      })]
    })]
  })
}

function y(e) {
  let {
    isExpired: t,
    myAvatarUrl: n,
    answersInteraction: i,
    canShowVoteCounts: s
  } = e, o = _(e, ["isExpired", "myAvatarUrl", "answersInteraction", "canShowVoteCounts"]);
  return (0, r.jsx)(c.Fh, p({
    className: d.ry,
    answerClassName: a()(d.ZF, {
      [d.EK]: i !== l.CQ.LIST
    }),
    myAvatarUrl: n,
    answersInteraction: i,
    renderAnswerContent: e => (0, r.jsx)(b, {
      answer: e,
      isExpired: t,
      myAvatarUrl: n,
      answersInteraction: i,
      canShowVoteCounts: s
    })
  }, o))
}