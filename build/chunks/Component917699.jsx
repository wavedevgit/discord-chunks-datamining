/** Chunk was on web.js **/
/** chunk id: 917699, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk46690 = require("./46690.js");
let f = [{
  getQuestion: () => Chunk388032.intl.string(Chunk388032.t.C4J8UB),
  getAnswer: () => Chunk388032.intl.string(Chunk388032.t.nhkk6k)
}, {
  getQuestion: () => Chunk388032.intl.string(Chunk388032.t.ai4ym2),
  getAnswer: () => Chunk388032.intl.format(Chunk388032.t["8zlqlD"], {
    helpCenterUrl: Chunk63063.Z.getArticleURL(Chunk981631.BhN.GUILD_BOOSTING_FAQ)
  })
}, {
  getQuestion: () => Chunk388032.intl.string(Chunk388032.t.kMVGsC),
  getAnswer: () => Chunk388032.intl.string(Chunk388032.t["Vz/SCQ"])
}, {
  getQuestion: () => Chunk388032.intl.string(Chunk388032.t.kYmXWF),
  getAnswer: () => Chunk388032.intl.string(Chunk388032.t["+OURPp"])
}, {
  getQuestion: () => Chunk388032.intl.string(Chunk388032.t["LsX/vb"]),
  getAnswer: () => Chunk388032.intl.string(Chunk388032.t["3TeauK"])
}, {
  getQuestion: () => Chunk388032.intl.string(Chunk388032.t.fRlnXU),
  getAnswer: () => Chunk388032.intl.string(Chunk388032.t.bTRacj)
}, {
  getQuestion: () => Chunk388032.intl.string(Chunk388032.t["8Mu5Q9"]),
  getAnswer: () => Chunk388032.intl.string(Chunk388032.t["2T5iPo"])
}, {
  getQuestion: () => Chunk388032.intl.string(Chunk388032.t["6EN+TZ"]),
  getAnswer: () => Chunk388032.intl.string(Chunk388032.t.NZax1u)
}, {
  getQuestion: () => Chunk388032.intl.string(Chunk388032.t.f5B4EW),
  getAnswer: () => Chunk388032.intl.string(Chunk388032.t.Aje8Pb)
}];

function p(e) {
  let {
    className: t
  } = e, [n, a] = i.useState(null), [l, c] = i.useState(null);
  return (0, r.jsxs)("div", {
    className: o()(d.wrapper, t),
    children: [(0, r.jsx)(s.Heading, {
      className: d.heading,
      variant: "heading-xxl/semibold",
      children: u.intl.string(u.t.HPJ6Nj)
    }), (0, r.jsx)(s.LZC, {
      size: 32
    }), (0, r.jsx)("ul", {
      className: d.list,
      children: f.map((e, t) => {
        let i = n === t,
          u = l === t,
          f = i || u ? "text-default" : "text-muted";
        return (0, r.jsxs)("li", {
          className: o()(d.listItem, {
            [d.listItemExpanded]: i
          }),
          children: [(0, r.jsxs)(s.P3F, {
            className: d.questionWrapper,
            onClick: () => a(e => e === t ? null : t),
            onMouseEnter: () => c(t),
            onMouseLeave: () => c(null),
            children: [(0, r.jsx)(s.Text, {
              className: d.question,
              color: f,
              variant: "heading-md/semibold",
              tag: "span",
              children: e.getQuestion()
            }), (0, r.jsx)(s.CJ0, {
              size: "sm",
              color: s.TVs.colors.INTERACTIVE_ICON_DEFAULT,
              className: d.questionIcon,
              style: {
                transform: i ? "rotate(180deg)" : "rotate(0deg)"
              }
            })]
          }), i && (0, r.jsx)(s.Text, {
            className: d.answer,
            color: "text-muted",
            variant: "text-sm/medium",
            children: e.getAnswer()
          })]
        }, t)
      })
    })]
  })
}