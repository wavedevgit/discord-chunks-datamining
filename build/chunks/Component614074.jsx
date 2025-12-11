/** Chunk was on 77069 **/
/** chunk id: 614074, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  C: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk5900 = require("./5900.js"),
  Chunk773275 = require("./773275.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk36385 = require("./36385.js"),
  Chunk291771 = require("./291771.js");
let d = () => {
    let {
      isWeb: t,
      installationStatus: e
    } = (0, Chunk773275.xf)(), n = (0, Chunk473749.useMemo)(() => {
      if (module) return Chunk388032.intl.string(Chunk36385.default.KN6HOb);
      switch (exports) {
        case Chunk5900._n.ERROR:
          return Chunk388032.intl.string(Chunk36385.default.cjqyz7);
        case Chunk5900._n.INSTALLING_TIMEOUT:
          return Chunk388032.intl.string(Chunk36385.default.an5PuY);
        case Chunk5900._n.NOT_INSTALLED:
        case Chunk5900._n.UNKNOWN:
          return Chunk388032.intl.string(Chunk36385.default.KN6HOb);
        case Chunk5900._n.INSTALLING:
          return Chunk388032.intl.string(Chunk36385.default.lYWqUK);
        case Chunk5900._n.WAITING_FOR_TERMS:
        case Chunk5900._n.READY_FOR_LICENSE:
          return Chunk388032.intl.string(Chunk36385.default.NSVz3Y);
        case Chunk5900._n.EXISTING_INSTALLATION:
          return Chunk388032.intl.string(Chunk36385.default.FgL0HB);
        case Chunk5900._n.ZERO_TRUST:
          return Chunk388032.intl.string(Chunk36385.default["7zgDRR"]);
        case Chunk5900._n.INSTALLED:
          return (0, Chunk54381.jsx)(S, {})
      }
    }, [module, exports]);
    return (0, Chunk54381.jsx)(Chunk793030.X6q, {
      variant: "heading-md/semibold",
      children: require
    })
  },
  S = () => {
    switch ((0, Chunk773275.xf)(t => t.connectionStatus)) {
      case Chunk5900.Ij.INITIALIZING:
        return (0, Chunk54381.jsxs)("span", {
          className: Chunk291771.connectedStatus,
          children: [Chunk388032.intl.string(Chunk36385.default["00vkCU"]), " ", (0, Chunk54381.jsx)("span", {
            children: (0, Chunk54381.jsx)(Chunk793030.$jN, {
              type: Chunk793030.RAz.SPINNING_CIRCLE,
              className: Chunk291771.spinner
            })
          })]
        });
      case Chunk5900.Ij.CONNECTED:
        return Chunk388032.intl.string(Chunk36385.default.FBu3XJ);
      case Chunk5900.Ij.DISCONNECTED:
        return Chunk388032.intl.string(Chunk36385.default["9V78nW"]);
      case Chunk5900.Ij.ERROR:
        return Chunk388032.intl.string(Chunk36385.default.i4ZzK6)
    }
  }