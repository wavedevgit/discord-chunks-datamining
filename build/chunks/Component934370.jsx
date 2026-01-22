/** Chunk was on 28979 **/
/** chunk id: 934370, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  F: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk602450 = require("./602450.js"),
  Chunk557571 = require("./557571.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk895431 = require("./895431.js"),
  Chunk372476 = require("./372476.js");
let A = () => {
    let {
      isWeb: t,
      installationStatus: e,
      perkAvailableToUser: i
    } = (0, u.lV)(), T = (0, l.useMemo)(() => {
      if (t || !i) return a.intl.string(o.default.jV0wEC);
      switch (e) {
        case r.Lk.ERROR:
          return a.intl.string(o.default.cjqyz7);
        case r.Lk.INSTALLING_TIMEOUT:
          return a.intl.string(o.default.an5PuY);
        case r.Lk.NOT_INSTALLED:
        case r.Lk.UNKNOWN:
          return a.intl.string(o.default.jV0wEC);
        case r.Lk.INSTALLING:
          return a.intl.string(o.default.lYWqUK);
        case r.Lk.WAITING_FOR_TERMS:
        case r.Lk.READY_FOR_LICENSE:
          return a.intl.string(o.default.NSVz3Y);
        case r.Lk.EXISTING_INSTALLATION:
          return a.intl.string(o.default.FgL0HB);
        case r.Lk.ZERO_TRUST:
          return a.intl.string(o.default["7zgDRR"]);
        case r.Lk.INSTALLED:
          return (0, n.jsx)(S, {})
      }
    }, [t, e, i]);
    return (0, n.jsx)(s.DZT, {
      variant: "heading-md/semibold",
      children: T
    })
  },
  S = () => {
    switch ((0, u.lV)(t => t.connectionStatus)) {
      case r.l7.INITIALIZING:
        return (0, n.jsxs)("span", {
          className: T.u,
          children: [a.intl.string(o.default["00vkCU"]), " ", (0, n.jsx)("span", {
            children: (0, n.jsx)(s.y$y, {
              type: s.tVU.SPINNING_CIRCLE,
              className: T.b
            })
          })]
        });
      case r.l7.CONNECTED:
        return a.intl.string(o.default.FBu3XJ);
      case r.l7.DISCONNECTED:
        return a.intl.string(o.default["9V78nW"]);
      case r.l7.ERROR:
        return a.intl.string(o.default.i4ZzK6)
    }
  }