/** Chunk was on 78528 **/
/** chunk id: 420650, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk824744 = require("./824744.js");

function s(e) {
  let {
    volume: t,
    description: n,
    label: s,
    onVolumeChange: a
  } = e;
  return (0, r.jsx)(l.Apm, {
    label: s,
    description: n,
    initialValue: (0, i.M)(t),
    maxValue: 100,
    onValueRender: e => "".concat(e.toFixed(0), "%"),
    onValueChange: a
  })
}