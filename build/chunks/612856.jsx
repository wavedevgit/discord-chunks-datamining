/** Chunk was on 46154 **/
/** chunk id: 612856, original params: t,n,e (module,exports,require) **/
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

function c(t) {
  let n = (0, s.B)(t);
  return (0, a.e7)([r.Z], () => r.Z.hasJoined(t.id)) ? <l.sNh id={"thread-notifications"} label={u.intl.string(u.t.h850Sk)}>{(0, d.zb)().map(e => {
      let {
        setting: a,
        label: r
      } = e;
      return (0, i.jsx)(l.k5B, {
        group: "thread-notifications",
        id: "".concat(a),
        label: r,
        action: () => o.Z.setNotificationSettings(t, {
          flags: a
        }),
        checked: a === n
      }, a)
    })}</l.sNh> : <l.sNh id={"notifications-disabled"} label={u.intl.string(u.t.h850Sk)} disabled={true} />
}