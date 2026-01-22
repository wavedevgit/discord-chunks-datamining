/** Chunk was on 47841 **/
/** chunk id: 390715, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk53594 = require("./53594.js"),
  Chunk767822 = require("./767822.jsx"),
  Chunk692467 = require("./692467.jsx"),
  Chunk690420 = require("./690420.jsx");

function c(e) {
  let {
    guildId: t,
    rules: n,
    triggerType: c,
    initWithEdit: o
  } = e, {
    perGuildMaxCount: d
  } = i.i$[c], u = 0 === n.length, f = d > n.length && !u;
  return (0, r.jsxs)(r.Fragment, {
    children: [u && (0, r.jsx)(s.A, {
      guildId: t,
      triggerType: c
    }), n.map(e => (0, r.jsx)(a.A, {
      rule: e,
      initWithEdit: o
    }, e.id)), f && (0, r.jsx)(l.A, {
      guildId: t,
      triggerType: c
    })]
  })
}