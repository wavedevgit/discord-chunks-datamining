/** Chunk was on 23628 **/
/** chunk id: 885947, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk713517 = require("./713517.js"),
  Chunk240248 = require("./240248.js"),
  Chunk341915 = require("./341915.js"),
  Chunk890687 = require("./890687.js"),
  Chunk590202 = require("./590202.js"),
  Chunk971649 = require("./971649.js"),
  Chunk717415 = require("./717415.jsx"),
  Chunk583235 = require("./583235.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk438655 = require("./438655.js");

function h() {
  let {
    quest: e,
    sourceQuestContent: t,
    isPortrait: n,
    onClose: o
  } = l.useContext(v.VideoQuestModalContext), h = (0, m.go)(), y = (0, p.LS)(e), O = l.useRef(null), {
    isHoveringOrFocusing: S
  } = (0, c.A)(O), _ = (0, b.H)({
    quest: e,
    onClose: o,
    sourceQuestContent: t,
    impressionId: h
  }), C = e.config.ctaConfig.subtitle, x = true !== C && !(0, u.uJ)(C);
  return (0, r.jsx)(s.m_, {
    text: E.intl.string(E.t.EuHF34),
    children: (0, r.jsx)(a.DUT, {
      onClick: () => _(d.uF.VIDEO_MODAL, f.Cy.OPEN_GAME_LINK),
      className: g._S,
      children: (0, r.jsxs)("div", {
        className: i()(g.hA, g.t8, {
          [g.Mc]: y
        }),
        ref: O,
        children: [(0, r.jsx)("div", {
          className: g.sB,
          children: (0, r.jsx)(a.Heading, {
            variant: "heading-md/medium",
            color: "text-strong",
            className: i()(g.xw, {
              [g._L]: n
            }),
            lineClamp: n ? true : 1,
            children: E.intl.format(E.t.EQa7os, {
              questName: e.config.messages.questName
            })
          })
        }), (0, r.jsxs)("div", {
          className: i()(g.sB, {
            [g.fi]: n
          }),
          children: [(0, r.jsx)("div", {
            className: i()(g.PV, {
              [g.WV]: n,
              [g.mq]: n
            }),
            children: (0, r.jsx)(a.yr3, {
              size: "xs",
              color: S ? a.LU0.colors.ICON_STRONG.css : a.LU0.colors.ICON_MUTED.css
            })
          }), (0, r.jsx)(a.Heading, {
            variant: "heading-sm/medium",
            className: i()(g.PV, {
              [g.WV]: n,
              [g.mq]: n
            }),
            color: S ? "text-strong" : "text-subtle",
            lineClamp: 1,
            children: e.config.messages.gamePublisher
          }), x ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)("div", {
              "aria-hidden": "true",
              className: i()(g.SC, {
                [g.b2]: n
              })
            }), (0, r.jsx)(a.Heading, {
              className: i()(g.xw, {
                [g._L]: n
              }),
              variant: "heading-sm/medium",
              lineClamp: n ? true : 1,
              color: S ? "text-strong" : "text-subtle",
              children: C
            })]
          }) : null]
        })]
      })
    })
  })
}