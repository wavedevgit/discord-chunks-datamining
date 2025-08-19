/** Chunk was on 87337 **/
/** chunk id: 14251, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  a: () => _,
  r: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk785232 = require("./785232.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk405842 = require("./405842.js");
let c = (t, e) => {
    if (1 === t.length) {
      let n = a.default.getUser(t[0]);
      return null != n ? (0, i.jsx)(r.qEK, {
        src: n.getAvatarURL(e, 32),
        size: r.EFr.SIZE_32,
        "aria-hidden": true
      }) : (0, i.jsx)(r.tBG, {})
    }
    return (0, i.jsx)(s.Z, {
      recipients: t,
      size: r.EFr.SIZE_32
    })
  },
  _ = (t, e, n, s) => {
    let c = [...t].map(t => a.default.getUser(t)),
      _ = t => (0, i.jsx)(r.Text, {
        variant: "text-md/semibold",
        className: u.username,
        children: l.ZP.getName(n, s, t)
      });
    return e >= 4 ? o.intl.format(o.t.qfo6KS, {
      usernameHook1: () => _(c[0]),
      usernameHook2: () => _(c[1]),
      numberOfOtherUsers: e - t.length
    }) : 3 === e ? o.intl.format(o.t["67ZE+/"], {
      usernameHook1: () => _(c[0]),
      usernameHook2: () => _(c[1])
    }) : 2 === e ? o.intl.format(o.t.veV4IC, {
      usernameHook1: () => _(c[0]),
      usernameHook2: () => _(c[1])
    }) : o.intl.format(o.t["4WHCtr"], {
      usernameHook: () => _(c[0])
    })
  }