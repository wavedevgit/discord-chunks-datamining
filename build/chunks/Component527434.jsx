/** Chunk was on web.js **/
/** chunk id: 527434, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk580424 = require("./580424.jsx"),
  Chunk760751 = require("./760751.js"),
  Chunk248465 = require("./248465.js"),
  Chunk634788 = require("./634788.jsx"),
  Chunk374803 = require("./374803.js");
require("./827669.js");
var Chunk985018 = require("./985018.jsx");

function d(e) {
  return "".concat("@").concat(e.name)
}

function f(e) {
  return "<@$".concat(e.id, ">")
}
let p = {
  autocompleteInputElementType: "gameMentionInput",
  stores: [Chunk760751.A],
  matches: (e, t, n, r, i) => true,
  queryResults: (e, t, n) => ({
    results: {
      games: s.Ay.queryGames(n).slice(0, 10)
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
    } = e, d = t.map((e, t) => (0, r.jsx)(a.Ay.Game, {
      onClick: c,
      onHover: s,
      selected: n === t,
      index: t,
      game: e
    }, e.id)), f = u.t["/U2VW+"], p = u.intl.string(u.t.URyqtP);
    return (0, r.jsxs)(i.Fragment, {
      children: [(0, l.wZ)({
        titleWithQuery: f,
        titleWithoutQuery: p,
        query: o,
        getQuery: e => "".concat("@").concat(e)
      }), d]
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
    return r.replaceInlineInput("gameMentionInput", d(i), f(i)), {
      type: c.kc.GAME_MENTION,
      metadata: {
        applicationId: i.id
      }
    }
  }
}