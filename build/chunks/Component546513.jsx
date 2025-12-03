/** Chunk was on 384 **/
/** chunk id: 546513, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk85960 = require("./85960.js"),
  Chunk489776 = require("./489776.jsx"),
  Chunk252121 = require("./252121.jsx"),
  Chunk564488 = require("./564488.jsx");

function o(e) {
  let {
    guildId: t,
    rules: n,
    triggerType: o,
    initWithEdit: c
  } = e, {
    perGuildMaxCount: u
  } = i.I6[o], d = 0 === n.length, g = u > n.length && !d;
  return (0, r.jsxs)(r.Fragment, {
    children: [d && (0, r.jsx)(a.Z, {
      guildId: t,
      triggerType: o
    }), n.map(e => (0, r.jsx)(s.Z, {
      rule: e,
      initWithEdit: c
    }, e.id)), g && (0, r.jsx)(l.Z, {
      guildId: t,
      triggerType: o
    })]
  })
}