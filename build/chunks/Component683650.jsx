/** Chunk was on 37447 **/
/** chunk id: 683650, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => C,
  o: () => f
});
var r, Chunk255367 = require("./255367.js");
require("./73800.js");
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

function j() {
  return (0, Chunk255367.jsx)("div", {
    className: Chunk107508.buttonContainer,
    children: (0, Chunk255367.jsx)(Chunk755721.zx, {
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
var C = ((r = {}).NOT_FOUND = "not_found", r.MOBILE_ONLY = "mobile_only", r);

function f(e) {
  let {
    questId: t,
    reason: n = "not_found"
  } = e, {
    containerRef: r,
    size: o
  } = (0, m.h)();
  return (0, c.Zk)(p.V_.UNKNOWN_QUEST, t), (0, s.jsxs)("div", {
    ref: e => {
      r.current = e
    },
    className: i()(h.container, {
      [h.wide]: "lg" === o,
      [h.tall]: "lg" !== o
    }),
    children: [(0, s.jsxs)("div", {
      className: h.contentContainer,
      children: [(0, s.jsx)(l.X6q, {
        variant: "lg" === o ? "heading-xl/bold" : "heading-lg/bold",
        color: "header-primary",
        children: g.intl.string(g.t.vnP31d)
      }), (0, s.jsx)(l.Text, {
        variant: "lg" === o ? "text-sm/medium" : "text-xs/medium",
        color: "text-default",
        className: h.__invalid_mobileWebCopy,
        children: g.intl.string("mobile_only" === n ? g.t.Pag1gY : g.t.CTn0yc)
      }), (0, s.jsx)(j, {})]
    }), (0, s.jsx)("div", {
      className: h.imgContainer,
      children: (0, s.jsx)("img", {
        src: x,
        alt: "",
        className: h.missingQuestImage
      })
    })]
  })
}