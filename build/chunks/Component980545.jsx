/** Chunk was on web.js **/
/** chunk id: 980545, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk835245 = require("./835245.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk12901 = require("./12901.js"),
  Chunk954571 = require("./954571.js"),
  Chunk216456 = require("./216456.js"),
  Chunk341915 = require("./341915.js"),
  Chunk545986 = require("./545986.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk608821 = require("./608821.js"),
  Chunk641701 = require("./641701.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}
let A = "https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png";

function v(e) {
  let {
    inOldSettings: t = false
  } = e, n = (0, l.Mw)((0, u.Ay)()), a = i.useMemo(() => ({
    backgroundImage: "url(".concat(A, ")")
  }), []), y = i.useCallback(() => {
    (0, d.default)(), (0, h.navigateToQuestHome)({
      fromContent: _.uF.QUEST_HOME_MOVE_CALLOUT
    }), f.default.track(m.HAw.QUEST_CONTENT_CLICKED, O({
      cta_name: p.Cy.VIEW_QUESTS,
      click_id: (0, o.A)(),
      is_targeted: false
    }, (0, p.fF)(_.uF.QUEST_HOME_MOVE_CALLOUT)))
  }, []);
  return (0, r.jsx)("div", {
    className: s()(E.kL, {
      [E.Zd]: t
    }),
    style: a,
    children: (0, r.jsxs)(c.BJc, {
      className: E.FS,
      justify: "space-between",
      children: [(0, r.jsxs)(c.BJc, {
        gap: 4,
        children: [(0, r.jsxs)("div", {
          className: E.N1,
          children: [(0, r.jsx)("img", {
            alt: "",
            src: b,
            className: E.Kk
          }), (0, r.jsx)(c.Heading, {
            variant: "heading-lg/bold",
            color: "always-white",
            children: g.intl.string(g.t.z8YP2A)
          })]
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: g.intl.string(g.t.HdKh65)
        })]
      }), (0, r.jsx)(c.Button, {
        variant: n ? "primary" : "overlay-primary",
        text: g.intl.string(g.t.GURBQl),
        onClick: y
      })]
    })
  })
}