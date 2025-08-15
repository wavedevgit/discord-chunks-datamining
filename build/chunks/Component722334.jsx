/** Chunk was on 66866 **/
/** chunk id: 722334, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => C
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk755721 = require("./755721.js"),
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

function E(e) {
  let {
    questId: t
  } = e;
  return (0, r.jsx)("div", {
    className: h.buttonContainer,
    children: (0, r.jsx)(o.zx, {
      className: h.button,
      color: o.Tt.BRAND,
      onClick: () => {
        (0, p.navigateToQuestHome)({
          fromContent: d.jn.EXCLUDED_QUEST_EMBED
        }), c.default.track(_.rMx.QUEST_CONTENT_CLICKED, function(e) {
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
          cta_name: u.jZ.VIEW_QUESTS,
          is_targeted: false
        }, (0, u.mH)(d.jn.EXCLUDED_QUEST_EMBED)))
      },
      children: g.intl.string(g.t.GURBQk)
    })
  })
}

function C(e) {
  let {
    questId: t
  } = e, {
    containerRef: n,
    size: i
  } = (0, m.h)();
  return (0, u.Zk)(f.V_.EXCLUDED_QUEST, t), (0, r.jsxs)("div", {
    ref: e => {
      n.current = e
    },
    className: l()(h.container, {
      [h.wide]: "lg" === i,
      [h.tall]: "lg" !== i
    }),
    children: [(0, r.jsxs)("div", {
      className: h.contentContainer,
      children: [(0, r.jsx)(s.X6q, {
        variant: "lg" === i ? "heading-xl/bold" : "heading-lg/bold",
        color: "header-primary",
        children: g.intl.string(g.t.vnP31d)
      }), (0, r.jsx)(s.Text, {
        variant: "lg" === i ? "text-sm/medium" : "text-xs/medium",
        color: "text-default",
        className: h.__invalid_mobileWebCopy,
        children: g.intl.string(g.t.nuWSYW)
      }), (0, r.jsx)(E, {
        questId: t
      })]
    }), (0, r.jsx)("div", {
      className: h.imgContainer,
      children: (0, r.jsx)("img", {
        src: b,
        alt: "",
        className: h.missingQuestImage
      })
    })]
  })
}