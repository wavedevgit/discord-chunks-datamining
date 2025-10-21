/** Chunk was on 88806 **/
/** chunk id: 946211, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => a
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk409813 = require("./409813.js"),
  Chunk443650 = require("./443650.jsx"),
  Chunk464797 = require("./464797.jsx"),
  Chunk605078 = require("./605078.js");

function u(e) {
  let {
    onClose: t
  } = e, {
    guildProductListing: n
  } = (0, l._)();
  return (0, r.jsx)(c.Z, {
    guildProductListing: n,
    className: i.header,
    onClose: t
  })
}
let a = (e, t, n) => n === o.h8.CONFIRM ? null : (0, r.jsx)(u, {
  onClose: () => t(false)
})