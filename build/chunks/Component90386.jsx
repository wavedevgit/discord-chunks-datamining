/** Chunk was on 39679 **/
/** chunk id: 90386, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => _,
  T: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk954376 = require("./954376.jsx"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk441805 = require("./441805.js");
let _ = (e, t) => {
    if (1 === e.length) {
      let n = a.default.getUser(e[0]);
      return null != n ? (0, s.jsx)(i.euF, {
        src: n.getAvatarURL(t, 32),
        size: i._3J.SIZE_32,
        "aria-hidden": true
      }) : (0, s.jsx)(i.nys, {})
    }
    return (0, s.jsx)(r.A, {
      recipients: e,
      size: i._3J.SIZE_32
    })
  },
  u = (e, t, n, r) => {
    let _ = [...e].map(e => a.default.getUser(e)),
      u = e => (0, s.jsx)(i.Text, {
        variant: "text-md/semibold",
        className: d.Xh,
        children: o.Ay.getName(n, r, e)
      });
    return t >= 4 ? l.intl.format(l.t.qfo6KR, {
      usernameHook1: () => u(_[0]),
      usernameHook2: () => u(_[1]),
      numberOfOtherUsers: t - e.length
    }) : 3 === t ? l.intl.format(l.t["67ZE+9"], {
      usernameHook1: () => u(_[0]),
      usernameHook2: () => u(_[1])
    }) : 2 === t ? l.intl.format(l.t.veV4IN, {
      usernameHook1: () => u(_[0]),
      usernameHook2: () => u(_[1])
    }) : l.intl.format(l.t["4WHCtq"], {
      usernameHook: () => u(_[0])
    })
  }