/** Chunk was on 88806 **/
/** chunk id: 946211, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  L: () => a
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk409813 = require("./409813.js"),
  Chunk443650 = require("./443650.jsx"),
  Chunk464797 = require("./464797.jsx"),
  Chunk594816 = require("./594816.js");

function u(e) {
  let {
    onClose: t
  } = e, {
    guildProductListing: r
  } = (0, l._)();
  return (0, n.jsx)(c.Z, {
    guildProductListing: r,
    className: i.header,
    onClose: t
  })
}
let a = (e, t, r) => r === o.h8.CONFIRM ? null : (0, n.jsx)(u, {
  onClose: () => t(false)
})