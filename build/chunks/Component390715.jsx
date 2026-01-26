/** Chunk was on 39048 **/
/** chunk id: 390715, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk53594 = require("./53594.js"),
  Chunk767822 = require("./767822.jsx"),
  Chunk692467 = require("./692467.jsx"),
  Chunk690420 = require("./690420.jsx");

function o(e) {
  let {
    guildId: t,
    rules: n,
    triggerType: o,
    initWithEdit: c
  } = e, {
    perGuildMaxCount: d
  } = i.i$[o], u = 0 === n.length, g = d > n.length && !u;
  return (0, r.jsxs)(r.Fragment, {
    children: [u && (0, r.jsx)(s.A, {
      guildId: t,
      triggerType: o
    }), n.map(e => (0, r.jsx)(a.A, {
      rule: e,
      initWithEdit: c
    }, e.id)), g && (0, r.jsx)(l.A, {
      guildId: t,
      triggerType: o
    })]
  })
}