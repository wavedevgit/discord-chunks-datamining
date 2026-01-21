/** Chunk was on 77069 **/
/** chunk id: 614074, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  C: () => S
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk5900 = require("./5900.js"),
  Chunk773275 = require("./773275.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk472057 = require("./472057.js"),
  Chunk977701 = require("./977701.js");
let S = () => {
    let {
      isWeb: t,
      installationStatus: e,
      perkAvailableToUser: n
    } = (0, r.xf)(), T = (0, l.useMemo)(() => {
      if (t || !n) return a.intl.string(o.default.jV0wEC);
      switch (e) {
        case u._n.ERROR:
          return a.intl.string(o.default.cjqyz7);
        case u._n.INSTALLING_TIMEOUT:
          return a.intl.string(o.default.an5PuY);
        case u._n.NOT_INSTALLED:
        case u._n.UNKNOWN:
          return a.intl.string(o.default.jV0wEC);
        case u._n.INSTALLING:
          return a.intl.string(o.default.lYWqUK);
        case u._n.WAITING_FOR_TERMS:
        case u._n.READY_FOR_LICENSE:
          return a.intl.string(o.default.NSVz3Y);
        case u._n.EXISTING_INSTALLATION:
          return a.intl.string(o.default.FgL0HB);
        case u._n.ZERO_TRUST:
          return a.intl.string(o.default["7zgDRR"]);
        case u._n.INSTALLED:
          return (0, i.jsx)(c, {})
      }
    }, [t, e, n]);
    return (0, i.jsx)(s.X6q, {
      variant: "heading-md/semibold",
      children: T
    })
  },
  c = () => {
    switch ((0, r.xf)(t => t.connectionStatus)) {
      case u.Ij.INITIALIZING:
        return (0, i.jsxs)("span", {
          className: T.connectedStatus,
          children: [a.intl.string(o.default["00vkCU"]), " ", (0, i.jsx)("span", {
            children: (0, i.jsx)(s.$jN, {
              type: s.RAz.SPINNING_CIRCLE,
              className: T.spinner
            })
          })]
        });
      case u.Ij.CONNECTED:
        return a.intl.string(o.default.FBu3XJ);
      case u.Ij.DISCONNECTED:
        return a.intl.string(o.default["9V78nW"]);
      case u.Ij.ERROR:
        return a.intl.string(o.default.i4ZzK6)
    }
  }