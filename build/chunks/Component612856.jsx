/** Chunk was on 78650 **/
/** chunk id: 612856, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk569471 = require("./569471.js"),
  Chunk346479 = require("./346479.js"),
  Chunk723170 = require("./723170.js"),
  Chunk124368 = require("./124368.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let t = (0, s.B)(e);
  return (0, r.e7)([a.Z], () => a.Z.hasJoined(e.id)) ? (0, i.jsx)(l.sNh, {
    id: "thread-notifications",
    label: u.intl.string(u.t.h850Sk),
    children: (0, d.zb)().map(n => {
      let {
        setting: r,
        label: a
      } = n;
      return (0, i.jsx)(l.k5B, {
        group: "thread-notifications",
        id: "".concat(r),
        label: a,
        action: () => o.Z.setNotificationSettings(e, {
          flags: r
        }),
        checked: r === t
      }, r)
    })
  }) : (0, i.jsx)(l.sNh, {
    id: "notifications-disabled",
    label: u.intl.string(u.t.h850Sk),
    disabled: true
  })
}