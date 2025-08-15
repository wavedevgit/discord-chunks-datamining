/** Chunk was on 33213 **/
/** chunk id: 919815, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk888369 = require("./888369.js"),
  Chunk181945 = require("./181945.js"),
  Chunk388032 = require("./388032.jsx");

function c(e, t) {
  let n = e.id,
    c = (0, r.e7)([s.default], () => s.default.getGuildHasUnreadIgnoreMuted(n), [n]);
  return (0, i.jsx)(l.sNh, {
    id: "mark-guild-read",
    label: a.intl.string(a.t.e6RscX),
    icon: true,
    action: () => (0, o.Z)([n], t.section),
    disabled: !c
  })
}