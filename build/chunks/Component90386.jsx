/** Chunk was on 83792 **/
/** chunk id: 90386, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  I: () => c,
  T: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk954376 = require("./954376.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk441805 = require("./441805.js");
let c = (e, t) => {
    if (1 === e.length) {
      let r = l.default.getUser(e[0]);
      return null != r ? (0, n.jsx)(a.euF, {
        src: r.getAvatarURL(t, 32),
        size: a._3J.SIZE_32,
        "aria-hidden": true
      }) : (0, n.jsx)(a.nys, {})
    }
    return (0, n.jsx)(s.A, {
      recipients: e,
      size: a._3J.SIZE_32
    })
  },
  u = (e, t, r, s) => {
    let c = [...e].map(e => l.default.getUser(e)),
      u = e => (0, n.jsx)(a.Text, {
        variant: "text-md/semibold",
        className: A.Xh,
        children: i.Ay.getName(r, s, e)
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