/** Chunk was on 91173 **/
/** chunk id: 722334, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => E
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk617136 = require("./617136.js"),
  Chunk497505 = require("./497505.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk266843 = require("./266843.js"),
  Chunk46140 = require("./46140.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk815648 = require("./815648.js"),
  Chunk87181 = require("./87181.js");

function b(e) {
  let {
    questId: t,
    fullWidth: n
  } = e;
  return (0, r.jsx)("div", {
    className: _.buttonContainer,
    children: (0, r.jsx)(o.zxk, {
      fullWidth: n,
      variant: "primary",
      onClick: () => {
        (0, d.navigateToQuestHome)({
          fromContent: u.jn.EXCLUDED_QUEST_EMBED
        }), s.default.track(f.rMx.QUEST_CONTENT_CLICKED, function(e) {
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
          click_id: (0, a.Z)(),
          cta_name: c.jZ.VIEW_QUESTS,
          is_targeted: false
        }, (0, c.mH)(u.jn.EXCLUDED_QUEST_EMBED)))
      },
      text: g.intl.string(g.t.GURBQk)
    })
  })
}

function E(e) {
  let {
    questId: t
  } = e, {
    containerRef: n,
    size: i
  } = (0, p.h)();
  return (0, c.Zk)(m.V_.EXCLUDED_QUEST, t), (0, r.jsxs)("div", {
    ref: e => {
      n.current = e
    },
    className: l()(_.container, {
      [_.wide]: "lg" === i,
      [_.tall]: "lg" !== i
    }),
    children: [(0, r.jsxs)("div", {
      className: _.contentContainer,
      children: [(0, r.jsx)(o.X6q, {
        variant: "lg" === i ? "heading-xl/bold" : "heading-lg/bold",
        color: "header-primary",
        children: g.intl.string(g.t.vnP31d)
      }), (0, r.jsx)(o.Text, {
        variant: "lg" === i ? "text-sm/medium" : "text-xs/medium",
        color: "text-default",
        className: _.__invalid_mobileWebCopy,
        children: g.intl.string(g.t.nuWSYW)
      }), (0, r.jsx)(b, {
        questId: t,
        fullWidth: "lg" !== i
      })]
    }), (0, r.jsx)("div", {
      className: _.imgContainer,
      children: (0, r.jsx)("img", {
        src: h,
        alt: "",
        className: _.missingQuestImage
      })
    })]
  })
}