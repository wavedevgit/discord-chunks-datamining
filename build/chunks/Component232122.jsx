/** Chunk was on web.js **/
/** chunk id: 232122, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk822524 = require("./822524.js");
let f = [{
  getQuestion: () => u.intl.string(u.t.C4J8UB),
  getAnswer: () => u.intl.string(u.t.nhkk6k)
}, {
  getQuestion: () => u.intl.string(u.t.ai4ym2),
  getAnswer: () => u.intl.format(u.t["8zlqlD"], {
    helpCenterUrl: l.A.getArticleURL(c.MVz.GUILD_BOOSTING_FAQ)
  })
}, {
  getQuestion: () => u.intl.string(u.t.kMVGsC),
  getAnswer: () => u.intl.string(u.t["Vz/SCQ"])
}, {
  getQuestion: () => u.intl.string(u.t.kYmXWF),
  getAnswer: () => u.intl.string(u.t["+OURPp"])
}, {
  getQuestion: () => u.intl.string(u.t["LsX/vb"]),
  getAnswer: () => u.intl.string(u.t["3TeauK"])
}, {
  getQuestion: () => u.intl.string(u.t.fRlnXU),
  getAnswer: () => u.intl.string(u.t.bTRacj)
}, {
  getQuestion: () => u.intl.string(u.t["8Mu5Q9"]),
  getAnswer: () => u.intl.string(u.t["2T5iPo"])
}, {
  getQuestion: () => u.intl.string(u.t["6EN+TZ"]),
  getAnswer: () => u.intl.string(u.t.NZax1u)
}, {
  getQuestion: () => u.intl.string(u.t.f5B4EW),
  getAnswer: () => u.intl.string(u.t.Aje8Pb)
}];

function p(e) {
  let {
    className: t
  } = e, [n, a] = i.useState(null), [l, c] = i.useState(null);
  return (0, r.jsxs)("div", {
    className: o()(d.iE, t),
    children: [(0, r.jsx)(s.Heading, {
      className: d.R_,
      variant: "heading-xxl/semibold",
      children: u.intl.string(u.t.HPJ6Nj)
    }), (0, r.jsx)(s.hKd, {
      size: 32
    }), (0, r.jsx)("ul", {
      className: d.p_,
      children: f.map((e, t) => {
        let i = n === t,
          u = l === t,
          f = i || u ? "text-default" : "text-muted";
        return (0, r.jsxs)(s.DUT, {
          tag: "li",
          className: o()(d.Aw, {
            [d.$K]: i
          }),
          onClick: () => a(e => e === t ? null : t),
          onMouseEnter: () => c(t),
          onMouseLeave: () => c(null),
          children: [(0, r.jsxs)("div", {
            className: d.k7,
            children: [(0, r.jsx)(s.Text, {
              className: d.b1,
              color: f,
              variant: "heading-md/semibold",
              tag: "span",
              children: e.getQuestion()
            }), (0, r.jsx)(s.abt, {
              size: "sm",
              color: s.LU0.colors.INTERACTIVE_ICON_DEFAULT,
              className: d.q4,
              style: {
                transform: i ? "rotate(180deg)" : "rotate(0deg)"
              }
            })]
          }), i && (0, r.jsx)(s.Text, {
            className: d.ZF,
            color: "text-muted",
            variant: "text-sm/medium",
            children: e.getAnswer()
          })]
        }, t)
      })
    })]
  })
}