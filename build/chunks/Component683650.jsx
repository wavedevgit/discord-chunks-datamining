/** Chunk was on 37447 **/
/** chunk id: 683650, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => j,
  o: () => f
});
var s, Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk617136 = require("./617136.js"),
  Chunk497505 = require("./497505.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk266843 = require("./266843.js"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk107508 = require("./107508.js"),
  Chunk87181 = require("./87181.js");

function C() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk107508.buttonContainer,
    children: (0, Chunk951288.jsx)(Chunk755721.zx, {
      className: Chunk107508.button,
      color: Chunk755721.Tt.BRAND,
      onClick: () => {
        (0, Chunk110560.navigateToQuestHome)({
          fromContent: Chunk497505.jn.QUESTS_EMBED
        })
      },
      children: Chunk388032.intl.string(Chunk388032.t.GURBQk)
    })
  })
}
var j = ((s = {}).NOT_FOUND = "not_found", s.MOBILE_ONLY = "mobile_only", s);

function f(e) {
  let {
    questId: t,
    reason: n = "not_found"
  } = e, {
    containerRef: s,
    size: r
  } = (0, m.h)();
  return (0, u.Zk)(p.V_.UNKNOWN_QUEST, t), (0, o.jsxs)("div", {
    ref: e => {
      s.current = e
    },
    className: i()(g.container, {
      [g.wide]: "lg" === r,
      [g.tall]: "lg" !== r
    }),
    children: [(0, o.jsxs)("div", {
      className: g.contentContainer,
      children: [(0, o.jsx)(l.X6q, {
        variant: "lg" === r ? "heading-xl/bold" : "heading-lg/bold",
        color: "header-primary",
        children: h.intl.string(h.t.vnP31d)
      }), (0, o.jsx)(l.Text, {
        variant: "lg" === r ? "text-sm/medium" : "text-xs/medium",
        color: "text-default",
        className: g.__invalid_mobileWebCopy,
        children: h.intl.string("mobile_only" === n ? h.t.Pag1gY : h.t.CTn0yc)
      }), (0, o.jsx)(C, {})]
    }), (0, o.jsx)("div", {
      className: g.imgContainer,
      children: (0, o.jsx)("img", {
        src: x,
        alt: "",
        className: g.missingQuestImage
      })
    })]
  })
}