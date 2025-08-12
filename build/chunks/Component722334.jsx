/** Chunk was on web.js **/
/** chunk id: 722334, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => v
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk825357 = require("./825357.js"),
  Chunk87181 = require("./87181.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e) {
  let {
    questId: t
  } = e, n = () => {
    (0, f.navigateToQuestHome)({
      fromContent: d.jn.EXCLUDED_QUEST_EMBED
    }), c.default.track(h.rMx.QUEST_CONTENT_CLICKED, y({
      quest_id: t,
      click_id: (0, a.Z)(),
      cta_name: u.jZ.VIEW_QUESTS,
      is_targeted: false
    }, (0, u.mH)(d.jn.EXCLUDED_QUEST_EMBED)))
  };
  return (0, r.jsx)("div", {
    className: g.buttonContainer,
    children: (0, r.jsx)(s.zx, {
      className: g.button,
      color: s.Tt.BRAND,
      onClick: n,
      children: m.intl.string(m.t.GURBQk)
    })
  })
}

function v(e) {
  let {
    questId: t
  } = e, {
    containerRef: n,
    size: i
  } = (0, _.h)();
  return (0, u.Zk)(p.V_.EXCLUDED_QUEST, t), (0, r.jsxs)("div", {
    ref: e => {
      n.current = e
    },
    className: o()(g.container, {
      [g.wide]: "lg" === i,
      [g.tall]: "lg" !== i
    }),
    children: [(0, r.jsxs)("div", {
      className: g.contentContainer,
      children: [(0, r.jsx)(l.X6q, {
        variant: "lg" === i ? "heading-xl/bold" : "heading-lg/bold",
        color: "header-primary",
        children: m.intl.string(m.t.vnP31d)
      }), (0, r.jsx)(l.Text, {
        variant: "lg" === i ? "text-sm/medium" : "text-xs/medium",
        color: "text-default",
        className: g.__invalid_mobileWebCopy,
        children: m.intl.string(m.t.nuWSYW)
      }), (0, r.jsx)(O, {
        questId: t
      })]
    }), (0, r.jsx)("div", {
      className: g.imgContainer,
      children: (0, r.jsx)("img", {
        src: E,
        alt: "",
        className: g.missingQuestImage
      })
    })]
  })
}