/** Chunk was on web.js **/
/** chunk id: 290799, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk353579 = require("./353579.js");
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
  }],
  _ = function(e) {
    let {
      className: t
    } = e, [n, a] = i.useState(null);
    return (0, r.jsxs)("div", {
      className: o()(d.wrapper, t),
      children: [(0, r.jsx)(s.Heading, {
        className: d.heading,
        variant: "heading-xxl/bold",
        children: u.intl.string(u.t.HPJ6Nj)
      }), (0, r.jsx)("ul", {
        className: d.list,
        children: f.map((e, t) => {
          let i = n === t;
          return (0, r.jsxs)("div", {
            className: d.listItem,
            children: [(0, r.jsxs)(s.P3F, {
              className: o()(d.questionWrapper, {
                [d.questionWrapperExpanded]: i
              }),
              onClick: () => a(e => e === t ? null : t),
              tag: "li",
              children: [(0, r.jsx)(s.Text, {
                className: d.question,
                variant: "text-lg/normal",
                children: e.getQuestion()
              }), i ? (0, r.jsx)(s.V_R, {
                size: "md",
                color: "currentColor",
                className: d.questionIcon
              }) : (0, r.jsx)(s.qJs, {
                size: "md",
                color: "currentColor",
                className: d.questionIcon
              })]
            }), i && (0, r.jsx)(s.Text, {
              className: d.answer,
              color: "text-default",
              variant: "text-md/normal",
              children: e.getAnswer()
            })]
          }, t)
        })
      })]
    })
  }