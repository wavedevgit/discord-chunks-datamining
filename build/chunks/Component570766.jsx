/** Chunk was on 64935 **/
/** chunk id: 570766, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk126031 = require("./126031.js"),
  Chunk397927 = require("./397927.js"),
  Chunk438437 = require("./438437.js"),
  Chunk306417 = require("./306417.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk603112 = require("./603112.js");

function p(e) {
  let {
    didSelfVote: t,
    label: n,
    percentage: i
  } = e;
  return (0, r.jsxs)("div", {
    className: d.AA,
    children: [t && (0, r.jsx)(a.s, {
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

function m(e) {
  let {
    answer: t,
    isExpired: n,
    myAvatarUrl: i,
    canShowVoteCounts: a
  } = e, s = true === t.isSelected, o = true === t.didSelfVote, u = true === t.isVictor;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.Dt, {
      attachmentClassName: l()(d.oh, {
        [d.Wx]: a
      }),
      emojiClassName: d.Zg,
      media: t.pollMedia,
      fallback: (0, r.jsx)("div", {
        className: l()(d.oh, d.nb)
      })
    }), s && (0, r.jsx)(c.Vx, {
      size: 40,
      isVictor: u,
      isExpired: n,
      className: d.Dt
    }), a && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(p, {
        didSelfVote: o,
        percentage: t.votesPercentage,
        label: t.votes,
        myAvatarUrl: o ? i : true
      }), (!n && o || u) && (0, r.jsx)(c.Vx, {
        size: 18,
        isVictor: u,
        isExpired: n,
        className: d.Po
      })]
    })]
  })
}

function f(e) {
  let {
    isExpired: t,
    myAvatarUrl: n,
    answersInteraction: i,
    canShowVoteCounts: a
  } = e, s = function(e, t) {
    if (null == e) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(e, ["isExpired", "myAvatarUrl", "answersInteraction", "canShowVoteCounts"]);
  return (0, r.jsx)(c.Fh, function(e) {
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
    className: d.ry,
    answerClassName: l()(d.ZF, {
      [d.EK]: i !== o.CQ.LIST
    }),
    myAvatarUrl: n,
    answersInteraction: i,
    renderAnswerContent: e => (0, r.jsx)(m, {
      answer: e,
      isExpired: t,
      myAvatarUrl: n,
      answersInteraction: i,
      canShowVoteCounts: a
    })
  }, s))
}