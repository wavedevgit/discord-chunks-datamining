/** Chunk was on 21738 **/
/** chunk id: 502696, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk954571 = require("./954571.js"),
  Chunk217549 = require("./217549.jsx"),
  Chunk70856 = require("./70856.jsx"),
  Chunk875922 = require("./875922.jsx"),
  Chunk163518 = require("./163518.js"),
  Chunk294132 = require("./294132.jsx"),
  Chunk971203 = require("./971203.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function m(e) {
  let {
    party: t,
    close: n,
    onSelect: m
  } = e, f = (0, c.A)(t), A = (0, p.A)(t), _ = (0, d.A)(t), b = (0, u.A)(t), E = (0, s.A)(t), O = (0, o.A)(t);
  return (0, l.Ay)(() => {
    let e = t.currentActivities.filter(e => {
      var t, n;
      return (null == (t = e.game) ? true : t.name) != null && (0, a.isGameApplicationType)(null == (n = e.game) ? true : n.type)
    }).map(e => e.game.name);
    a.default.track(h.HAw.OPEN_POPOUT, {
      type: "Now Playing Card Popout",
      games_detected: e
    })
  }), (0, r.jsxs)(i.W1t, {
    "data-menu-migrated": true,
    navId: "now-playing-menu",
    onClose: n,
    "aria-label": g.intl.string(g.t.ogxXGq),
    onSelect: m,
    children: [f, (0, r.jsxs)(i.rXV, {
      children: [A, _]
    }), (0, r.jsx)(i.rXV, {
      children: b
    }), (0, r.jsx)(i.rXV, {
      children: E
    }), O]
  })
}