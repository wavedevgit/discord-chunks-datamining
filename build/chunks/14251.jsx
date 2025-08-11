/** Chunk was on 87337 **/
/** chunk id: 14251, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  a: () => u,
  r: () => c
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk481060 = require("./481060.js"),
  Chunk785232 = require("./785232.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk388032 = require("./388032.js"),
  Chunk193728 = require("./193728.js");
let c = (e, n) => {
    if (1 === e.length) {
      let t = a.default.getUser(e[0]);
      return null != t ? <i.qEK src={t.getAvatarURL(n, 32)} size={i.EFr.SIZE_32} aria-hidden={true} /> : <i.tBG />
    }
    return <r.Z recipients={e} size={i.EFr.SIZE_32} />
  },
  u = (e, n, t, r) => {
    let c = [...e].map(e => a.default.getUser(e)),
      u = e => <i.Text variant={"text-md/semibold"} className={d.username}>{l.ZP.getName(t, r, e)}</i.Text>;
    return n >= 4 ? o.intl.format(o.t.qfo6KS, {
      usernameHook1: () => u(c[0]),
      usernameHook2: () => u(c[1]),
      numberOfOtherUsers: n - e.length
    }) : 3 === n ? o.intl.format(o.t["67ZE+/"], {
      usernameHook1: () => u(c[0]),
      usernameHook2: () => u(c[1])
    }) : 2 === n ? o.intl.format(o.t.veV4IC, {
      usernameHook1: () => u(c[0]),
      usernameHook2: () => u(c[1])
    }) : o.intl.format(o.t["4WHCtr"], {
      usernameHook: () => u(c[0])
    })
  }