/** Chunk was on 99534 **/
/** chunk id: 612856, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk569471 = require("./569471.js"),
  Chunk346479 = require("./346479.js"),
  Chunk723170 = require("./723170.js"),
  Chunk124368 = require("./124368.js"),
  Chunk388032 = require("./388032.jsx");

function c(t) {
  let n = (0, o.B)(t);
  return (0, l.e7)([a.Z], () => a.Z.hasJoined(t.id)) ? (0, e.jsx)(r.sNh, {
    id: "thread-notifications",
    label: u.intl.string(u.t.h850Sk),
    children: (0, s.zb)().map(i => {
      let {
        setting: l,
        label: a
      } = i;
      return (0, e.jsx)(r.k5B, {
        group: "thread-notifications",
        id: "".concat(l),
        label: a,
        action: () => d.Z.setNotificationSettings(t, {
          flags: l
        }),
        checked: l === n
      }, l)
    })
  }) : (0, e.jsx)(r.sNh, {
    id: "notifications-disabled",
    label: u.intl.string(u.t.h850Sk),
    disabled: true
  })
}