/** Chunk was on 77069 **/
/** chunk id: 663623, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  r: () => S
});
var Chunk442837 = require("./442837.js"),
  Chunk509613 = require("./509613.js"),
  Chunk960412 = require("./960412.js"),
  Chunk151662 = require("./151662.js"),
  Chunk313789 = require("./313789.js"),
  Chunk930441 = require("./930441.js"),
  Chunk388032 = require("./388032.jsx");
let S = (0, Chunk509613.ax)(Chunk313789.n.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.Ra9Pwk),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.iYjQ8X),
  useLabel: () => Chunk388032.intl.string(Chunk388032.t.KT1pBA),
  useDisabled: () => {
    let {
      categories: t
    } = (0, Chunk442837.cj)([Chunk151662.Z], () => Chunk151662.Z.getEmailSettings());
    return Chunk930441.M0.every(e => !t[e])
  },
  onClick: () => (0, Chunk960412.oc)(),
  useVariant: () => "critical-secondary"
})