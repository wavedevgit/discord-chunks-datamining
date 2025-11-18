/** Chunk was on 87337 **/
/** chunk id: 14251, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  a: () => u,
  r: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk785232 = require("./785232.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk73199 = require("./73199.js");
let c = (e, t) => {
    if (1 === e.length) {
      let n = a.default.getUser(e[0]);
      return null != n ? (0, i.jsx)(s.qEK, {
        src: n.getAvatarURL(t, 32),
        size: s.EFr.SIZE_32,
        "aria-hidden": true
      }) : (0, i.jsx)(s.tBG, {})
    }
    return (0, i.jsx)(r.Z, {
      recipients: e,
      size: s.EFr.SIZE_32
    })
  },
  u = (e, t, n, r) => {
    let c = [...e].map(e => a.default.getUser(e)),
      u = e => (0, i.jsx)(s.Text, {
        variant: "text-md/semibold",
        className: d.username,
        children: l.ZP.getName(n, r, e)
      });
    return t >= 4 ? o.intl.format(o.t.qfo6KR, {
      usernameHook1: () => u(c[0]),
      usernameHook2: () => u(c[1]),
      numberOfOtherUsers: t - e.length
    }) : 3 === t ? o.intl.format(o.t["67ZE+9"], {
      usernameHook1: () => u(c[0]),
      usernameHook2: () => u(c[1])
    }) : 2 === t ? o.intl.format(o.t.veV4IN, {
      usernameHook1: () => u(c[0]),
      usernameHook2: () => u(c[1])
    }) : o.intl.format(o.t["4WHCtq"], {
      usernameHook: () => u(c[0])
    })
  }