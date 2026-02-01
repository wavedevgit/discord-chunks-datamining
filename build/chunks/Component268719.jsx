/** Chunk was on 9753 **/
/** chunk id: 268719, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk994500 = require("./994500.js"),
  Chunk301960 = require("./301960.jsx");

function s(e) {
  let {
    message: t,
    channel: n,
    compact: s
  } = e, o = (0, i.bG)([l.A], () => null != t.interaction && l.A.isBlocked(t.interaction.user.id), [t.interaction]);
  return (0, r.jsx)(a.A, {
    message: t,
    channel: n,
    compact: s,
    isInteractionUserBlocked: o
  })
}

function o(e, t, n) {
  return null != e.interaction && "" !== e.interaction.displayName ? (0, r.jsx)(s, {
    message: e,
    channel: t,
    compact: n
  }) : null
}