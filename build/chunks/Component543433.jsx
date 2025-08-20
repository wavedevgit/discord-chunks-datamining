/** Chunk was on 37447 **/
/** chunk id: 543433, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => C
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk617136 = require("./617136.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk266843 = require("./266843.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk598272 = require("./598272.js"),
  Chunk87181 = require("./87181.js");

function x(e) {
  let {
    questId: t,
    questContent: n,
    fullWidth: o
  } = e;
  return (0, r.jsx)("div", {
    className: h.buttonContainer,
    children: (0, r.jsx)(a.zxk, {
      fullWidth: o,
      variant: "primary",
      onClick: () => {
        (0, c.navigateToQuestHome)({
          fromContent: n
        }), l.default.track(m.rMx.QUEST_CONTENT_CLICKED, function(e) {
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
          quest_id: t,
          click_id: (0, i.Z)(),
          cta_name: u.jZ.VIEW_QUESTS,
          is_targeted: false
        }, (0, u.mH)(n)))
      },
      text: p.intl.string(p.t.GURBQk)
    })
  })
}

function C(e) {
  let {
    questId: t,
    fallbackReason: n,
    bodyText: o,
    questContent: i
  } = e, {
    containerRef: l,
    size: c
  } = (0, d.h)();
  return (0, u.Zk)(n, t), (0, r.jsxs)("div", {
    ref: e => {
      l.current = e
    },
    className: s()(h.container, {
      [h.wide]: "lg" === c,
      [h.tall]: "lg" !== c
    }),
    children: [(0, r.jsxs)("div", {
      className: h.contentContainer,
      children: [(0, r.jsx)(a.X6q, {
        variant: "lg" === c ? "heading-xl/bold" : "heading-lg/bold",
        color: "header-primary",
        children: p.intl.string(p.t.vnP31d)
      }), (0, r.jsx)(a.Text, {
        variant: "lg" === c ? "text-sm/medium" : "text-xs/medium",
        color: "text-default",
        className: h.__invalid_mobileWebCopy,
        children: o
      }), (0, r.jsx)(x, {
        questId: t,
        questContent: i,
        fullWidth: "lg" !== c
      })]
    }), (0, r.jsx)("div", {
      className: h.imgContainer,
      children: (0, r.jsx)("img", {
        src: g,
        alt: "",
        className: h.missingQuestImage
      })
    })]
  })
}