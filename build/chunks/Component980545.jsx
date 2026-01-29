/** Chunk was on 2827 **/
/** chunk id: 980545, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
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
  Chunk341915 = require("./341915.js"),
  Chunk590202 = require("./590202.js"),
  Chunk545986 = require("./545986.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk608821 = require("./608821.js"),
  Chunk641701 = require("./641701.js");

function E(e) {
  let {
    inOldSettings: t = false
  } = e, n = (0, o.Mw)((0, d.Ay)()), l = i.useMemo(() => ({
    backgroundImage: "url(".concat("https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png", ")")
  }), []), E = i.useCallback(() => {
    (0, u.default)(), (0, g.navigateToQuestHome)({
      fromContent: p.uF.QUEST_HOME_MOVE_CALLOUT
    }), _.default.track(A.HAw.QUEST_CONTENT_CLICKED, function(e) {
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
      cta_name: m.Cy.VIEW_QUESTS,
      click_id: (0, a.A)(),
      is_targeted: false
    }, (0, m.fF)(p.uF.QUEST_HOME_MOVE_CALLOUT)))
  }, []);
  return (0, r.jsx)("div", {
    className: s()(b.kL, {
      [b.Zd]: t
    }),
    style: l,
    children: (0, r.jsxs)(c.BJc, {
      className: b.FS,
      justify: "space-between",
      children: [(0, r.jsxs)(c.BJc, {
        gap: 4,
        children: [(0, r.jsxs)("div", {
          className: b.N1,
          children: [(0, r.jsx)("img", {
            alt: "",
            src: h,
            className: b.Kk
          }), (0, r.jsx)(c.Heading, {
            variant: "heading-lg/bold",
            color: "always-white",
            children: f.intl.string(f.t.z8YP2A)
          })]
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "text-subtle",
          children: f.intl.string(f.t.HdKh65)
        })]
      }), (0, r.jsx)(c.Button, {
        variant: n ? "primary" : "overlay-primary",
        text: f.intl.string(f.t.GURBQl),
        onClick: E
      })]
    })
  })
}