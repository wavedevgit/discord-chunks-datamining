/** Chunk was on 46154 **/
/** chunk id: 612856, original params: t,n,e (module,exports,require) **/
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
  let n = (0, s.B)(t);
  return (0, l.e7)([r.Z], () => r.Z.hasJoined(t.id)) ? (0, i.jsx)(a.sNh, {
    id: "thread-notifications",
    label: u.intl.string(u.t.h850Sk),
    children: (0, d.zb)().map(e => {
      let {
        setting: l,
        label: r
      } = e;
      return (0, i.jsx)(a.k5B, {
        group: "thread-notifications",
        id: "".concat(l),
        label: r,
        action: () => o.Z.setNotificationSettings(t, {
          flags: l
        }),
        checked: l === n
      }, l)
    })
  }) : (0, i.jsx)(a.sNh, {
    id: "notifications-disabled",
    label: u.intl.string(u.t.h850Sk),
    disabled: true
  })
}