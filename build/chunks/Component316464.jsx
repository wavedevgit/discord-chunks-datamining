/** Chunk was on 41469 **/
/** chunk id: 316464, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  j: () => a
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk166532 = require("./166532.js"),
  Chunk716956 = require("./716956.jsx"),
  Chunk920241 = require("./920241.jsx"),
  Chunk358326 = require("./358326.js");

function u(e) {
  let {
    onClose: t
  } = e, {
    guildProductListing: r
  } = (0, c.S)();
  return (0, n.jsx)(l.A, {
    guildProductListing: r,
    className: i.w,
    onClose: t
  })
}
let a = (e, t, r) => r === o.pn.CONFIRM ? null : (0, n.jsx)(u, {
  onClose: () => t(false)
})