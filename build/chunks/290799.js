/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => _
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(481060),
  l = n(63063),
  c = n(981631),
  u = n(388032),
  d = n(27768);
let f = [{
    getQuestion: () => u.NW.string(u.t.C4J8UF),
    getAnswer: () => u.NW.string(u.t.nhkk6u)
  }, {
    getQuestion: () => u.NW.string(u.t.ai4ym5),
    getAnswer: () => u.NW.format(u.t["8zlqlJ"], {
      helpCenterUrl: l.Z.getArticleURL(c.BhN.GUILD_BOOSTING_FAQ)
    })
  }, {
    getQuestion: () => u.NW.string(u.t.kMVGsL),
    getAnswer: () => u.NW.string(u.t["Vz/SCQ"])
  }, {
    getQuestion: () => u.NW.string(u.t.kYmXWF),
    getAnswer: () => u.NW.string(u.t["+OURPj"])
  }],
  _ = function(e) {
    let {
      className: t
    } = e, [n, o] = i.useState(null);
    return (0, r.jsxs)("div", {
      className: a()(d.wrapper, t),
      children: [(0, r.jsx)(s.X6q, {
        className: d.heading,
        variant: "heading-xxl/bold",
        children: u.NW.string(u.t.HPJ6Nj)
      }), (0, r.jsx)("ul", {
        className: d.list,
        children: f.map((e, t) => {
          let i = n === t;
          return (0, r.jsxs)("div", {
            className: d.listItem,
            children: [(0, r.jsxs)(s.P3F, {
              className: a()(d.questionWrapper, {
                [d.questionWrapperExpanded]: i
              }),
              onClick: () => o(e => e === t ? null : t),
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
              color: "text-normal",
              variant: "text-md/normal",
              children: e.getAnswer()
            })]
          }, t)
        })
      })]
    })
  }