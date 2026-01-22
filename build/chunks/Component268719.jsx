/** Chunk was on web.js **/
/** chunk id: 268719, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk994500 = require("./994500.js"),
  Chunk301960 = require("./301960.jsx");

function o(e) {
  let {
    message: t,
    channel: n,
    compact: o
  } = e, l = (0, i.bG)([a.A], () => null != t.interaction && a.A.isBlocked(t.interaction.user.id), [t.interaction]);
  return (0, r.jsx)(s.A, {
    message: t,
    channel: n,
    compact: o,
    isInteractionUserBlocked: l
  })
}

function l(e, t, n) {
  return null != e.interaction && "" !== e.interaction.displayName ? (0, r.jsx)(o, {
    message: e,
    channel: t,
    compact: n
  }) : null
}