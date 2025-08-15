/** Chunk was on 87337 **/
/** chunk id: 14251, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => d,
  r: () => u
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk481060 = require("./481060.js"),
  Chunk785232 = require("./785232.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk405842 = require("./405842.js");
let u = (e, t) => {
    if (1 === e.length) {
      let n = a.default.getUser(e[0]);
      return null != n ? (0, r.jsx)(s.qEK, {
        src: n.getAvatarURL(t, 32),
        size: s.EFr.SIZE_32,
        "aria-hidden": true
      }) : (0, r.jsx)(s.tBG, {})
    }
    return (0, r.jsx)(i.Z, {
      recipients: e,
      size: s.EFr.SIZE_32
    })
  },
  d = (e, t, n, i) => {
    let u = [...e].map(e => a.default.getUser(e)),
      d = e => (0, r.jsx)(s.Text, {
        variant: "text-md/semibold",
        className: c.username,
        children: l.ZP.getName(n, i, e)
      });
    return t >= 4 ? o.intl.format(o.t.qfo6KS, {
      usernameHook1: () => d(u[0]),
      usernameHook2: () => d(u[1]),
      numberOfOtherUsers: t - e.length
    }) : 3 === t ? o.intl.format(o.t["67ZE+/"], {
      usernameHook1: () => d(u[0]),
      usernameHook2: () => d(u[1])
    }) : 2 === t ? o.intl.format(o.t.veV4IC, {
      usernameHook1: () => d(u[0]),
      usernameHook2: () => d(u[1])
    }) : o.intl.format(o.t["4WHCtr"], {
      usernameHook: () => d(u[0])
    })
  }