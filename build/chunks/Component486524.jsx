/** Chunk was on 93169 **/
/** chunk id: 486524, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk734057 = require("./734057.js"),
  Chunk985018 = require("./985018.jsx");

function o(e, t) {
  let n = a.A.getChannel(e);
  return null == n || n.isMultiUserDM() ? null : (0, i.jsx)(r.Drp, {
    id: "close-dm",
    label: s.intl.string(s.t.jsvgc3),
    action: () => l.A.closePrivateChannel(e, t)
  })
}