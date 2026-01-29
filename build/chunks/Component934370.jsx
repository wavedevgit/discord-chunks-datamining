/** Chunk was on 4670 **/
/** chunk id: 934370, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  F: () => T
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk602450 = require("./602450.js"),
  Chunk557571 = require("./557571.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk895431 = require("./895431.js"),
  Chunk372476 = require("./372476.js");
let T = () => {
    let {
      isWeb: e,
      installationStatus: t,
      perkAvailableToUser: i
    } = (0, a.lV)(), d = (0, l.useMemo)(() => {
      if (e || !i) return u.intl.string(o.default.jV0wEC);
      switch (t) {
        case r.Lk.ERROR:
          return u.intl.string(o.default.cjqyz7);
        case r.Lk.INSTALLING_TIMEOUT:
          return u.intl.string(o.default.an5PuY);
        case r.Lk.NOT_INSTALLED:
        case r.Lk.UNKNOWN:
          return u.intl.string(o.default.jV0wEC);
        case r.Lk.INSTALLING:
          return u.intl.string(o.default.lYWqUK);
        case r.Lk.WAITING_FOR_TERMS:
        case r.Lk.READY_FOR_LICENSE:
          return u.intl.string(o.default.NSVz3Y);
        case r.Lk.EXISTING_INSTALLATION:
          return u.intl.string(o.default.FgL0HB);
        case r.Lk.ZERO_TRUST:
          return u.intl.string(o.default["7zgDRR"]);
        case r.Lk.INSTALLED:
          return (0, n.jsx)(c, {})
      }
    }, [e, t, i]);
    return (0, n.jsx)(s.DZT, {
      variant: "heading-md/semibold",
      children: d
    })
  },
  c = () => {
    switch ((0, a.lV)(e => e.connectionStatus)) {
      case r.l7.INITIALIZING:
        return (0, n.jsxs)("span", {
          className: d.u,
          children: [u.intl.string(o.default["00vkCU"]), " ", (0, n.jsx)("span", {
            children: (0, n.jsx)(s.y$y, {
              type: s.tVU.SPINNING_CIRCLE,
              className: d.b
            })
          })]
        });
      case r.l7.CONNECTED:
        return u.intl.string(o.default.FBu3XJ);
      case r.l7.DISCONNECTED:
        return u.intl.string(o.default["9V78nW"]);
      case r.l7.ERROR:
        return u.intl.string(o.default.i4ZzK6)
    }
  }