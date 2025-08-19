/** Chunk was on 37447 **/
/** chunk id: 683650, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => C,
  o: () => j
});
var s, Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk617136 = require("./617136.js"),
  Chunk497505 = require("./497505.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk266843 = require("./266843.js"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk107508 = require("./107508.js"),
  Chunk87181 = require("./87181.js");

function x(e) {
  let {
    fullWidth: t
  } = e;
  return (0, o.jsx)("div", {
    className: h.buttonContainer,
    children: (0, o.jsx)(a.zxk, {
      fullWidth: t,
      variant: "primary",
      onClick: () => {
        (0, c.navigateToQuestHome)({
          fromContent: u.jn.QUESTS_EMBED
        })
      },
      text: p.intl.string(p.t.GURBQk)
    })
  })
}
var C = ((s = {}).NOT_FOUND = "not_found", s.MOBILE_ONLY = "mobile_only", s);

function j(e) {
  let {
    questId: t,
    reason: n = "not_found"
  } = e, {
    containerRef: s,
    size: r
  } = (0, d.h)();
  return (0, l.Zk)(m.V_.UNKNOWN_QUEST, t), (0, o.jsxs)("div", {
    ref: e => {
      s.current = e
    },
    className: i()(h.container, {
      [h.wide]: "lg" === r,
      [h.tall]: "lg" !== r
    }),
    children: [(0, o.jsxs)("div", {
      className: h.contentContainer,
      children: [(0, o.jsx)(a.X6q, {
        variant: "lg" === r ? "heading-xl/bold" : "heading-lg/bold",
        color: "header-primary",
        children: p.intl.string(p.t.vnP31d)
      }), (0, o.jsx)(a.Text, {
        variant: "lg" === r ? "text-sm/medium" : "text-xs/medium",
        color: "text-default",
        className: h.__invalid_mobileWebCopy,
        children: p.intl.string("mobile_only" === n ? p.t.Pag1gY : p.t.CTn0yc)
      }), (0, o.jsx)(x, {
        fullWidth: "lg" !== r
      })]
    }), (0, o.jsx)("div", {
      className: h.imgContainer,
      children: (0, o.jsx)("img", {
        src: g,
        alt: "",
        className: h.missingQuestImage
      })
    })]
  })
}