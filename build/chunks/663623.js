/** Chunk was on 77069 **/
/** chunk id: 663623, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  r: () => T
});
var Chunk442837 = require("./442837.js"),
  Chunk509613 = require("./509613.js"),
  Chunk960412 = require("./960412.js"),
  Chunk151662 = require("./151662.js"),
  Chunk313789 = require("./313789.js"),
  Chunk930441 = require("./930441.js"),
  Chunk388032 = require("./388032.jsx");
let T = (0, Chunk509613.ax)(Chunk313789.n.UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS, {
  useTitle: () => o.intl.string(o.t.Ra9Pwk),
  useSubtitle: () => o.intl.string(o.t.iYjQ8X),
  useLabel: () => o.intl.string(o.t.KT1pBA),
  useDisabled: () => {
    let {
      categories: t
    } = (0, i.cj)([u.Z], () => u.Z.getEmailSettings());
    return a.M0.every(e => !t[e])
  },
  onClick: () => (0, s.oc)(),
  useVariant: () => "critical-secondary"
})