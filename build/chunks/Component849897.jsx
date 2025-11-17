/** Chunk was on web.js **/
/** chunk id: 849897, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk588468 = require("./588468.jsx"),
  Chunk77498 = require("./77498.js"),
  Chunk483360 = require("./483360.js"),
  Chunk877565 = require("./877565.jsx"),
  Chunk590921 = require("./590921.js"),
  Chunk761652 = require("./761652.js"),
  Chunk388032 = require("./388032.jsx");

function f(e) {
  return "".concat(u.ME).concat(e.name)
}

function _(e) {
  return "<@$".concat(e.id, ">")
}
let p = {
  autocompleteInputElementType: "gameMentionInput",
  stores: [Chunk77498.Z],
  matches: (e, t, n, r, i) => true,
  queryResults: (e, t, n) => ({
    results: {
      games: s.ZP.queryGames(n).slice(0, 10)
    }
  }),
  renderResults(e) {
    let {
      results: {
        games: t
      },
      selectedIndex: n,
      query: o,
      onHover: s,
      onClick: c
    } = e, f = t.map((e, t) => (0, r.jsx)(a.ZP.Game, {
      onClick: c,
      onHover: s,
      selected: n === t,
      index: t,
      game: e
    }, e.id)), _ = d.t["/U2VW+"], p = d.intl.string(d.t.URyqtP);
    return (0, r.jsxs)(i.Fragment, {
      children: [(0, l.gm)({
        titleWithQuery: _,
        titleWithoutQuery: p,
        query: o,
        getQuery: e => "".concat(u.ME).concat(e)
      }), f]
    }, "mentions")
  },
  onSelect(e) {
    let {
      results: {
        games: t
      },
      index: n,
      options: r
    } = e, i = t[n];
    return r.replaceInlineInput("gameMentionInput", f(i), _(i)), {
      type: c.z2.GAME_MENTION,
      metadata: {
        applicationId: i.id
      }
    }
  }
}