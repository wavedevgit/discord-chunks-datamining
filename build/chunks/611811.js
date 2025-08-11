/** Chunk was on 36878 **/
/** chunk id: 611811, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk509613 = require("./509613.js"),
  Chunk960412 = require("./960412.js"),
  Chunk151662 = require("./151662.js"),
  Chunk930441 = require("./930441.js"),
  Chunk388032 = require("./388032.jsx");
let u = (0, Chunk509613.ax)("UnsubscribeFromAllMarketingEmails", {
  useTitle: () => Chunk388032.intl.string(Chunk388032.t.Ra9Pws),
  useSubtitle: () => Chunk388032.intl.string(Chunk388032.t.iYjQ8f),
  useLabel: () => Chunk388032.intl.string(Chunk388032.t.KT1pBA),
  useVariant: () => "critical-secondary",
  useDisabled: () => {
    let {
      categories: e
    } = (0, Chunk442837.cj)([Chunk151662.Z], () => Chunk151662.Z.getEmailSettings());
    return Chunk930441.M0.every(t => !e[t])
  },
  onClick: () => (0, Chunk960412.oc)()
})