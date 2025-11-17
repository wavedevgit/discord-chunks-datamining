/** Chunk was on 33213 **/
/** chunk id: 919815, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk888369 = require("./888369.js"),
  Chunk181945 = require("./181945.js"),
  Chunk388032 = require("./388032.jsx");

function o(e, t) {
  let n = e.id,
    o = (0, r.e7)([l.default], () => l.default.getGuildHasUnreadIgnoreMuted(n), [n]);
  return (0, i.jsx)(s.sNh, {
    id: "mark-guild-read",
    label: c.intl.string(c.t.e6RscS),
    icon: true,
    action: () => (0, a.Z)([n], t.section),
    disabled: !o
  })
}