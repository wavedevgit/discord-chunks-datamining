/** Chunk was on web.js **/
/** chunk id: 614074, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk5900 = require("./5900.js"),
  Chunk953865 = require("./953865.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk845259 = require("./845259.js"),
  Chunk291771 = require("./291771.js");
let d = () => {
    let {
      isWeb: e,
      installationStatus: t
    } = (0, Chunk953865.xf)(), n = (0, Chunk473749.useMemo)(() => {
      if (module) return Chunk388032.intl.string(Chunk845259.default.KN6HOb);
      switch (exports) {
        case Chunk5900._n.ERROR:
          return Chunk388032.intl.string(Chunk845259.default.cjqyz7);
        case Chunk5900._n.NOT_INSTALLED:
        case Chunk5900._n.UNKNOWN:
          return Chunk388032.intl.string(Chunk845259.default.KN6HOb);
        case Chunk5900._n.INSTALLING:
        case Chunk5900._n.READY_FOR_LICENSE:
          return Chunk388032.intl.string(Chunk845259.default.lYWqUK);
        case Chunk5900._n.EXISTING_INSTALLATION:
          return Chunk388032.intl.string(Chunk845259.default.FgL0HB);
        case Chunk5900._n.ZERO_TRUST:
          return Chunk388032.intl.string(Chunk845259.default["7zgDRR"]);
        case Chunk5900._n.INSTALLED:
          return (0, Chunk54381.jsx)(f, {})
      }
    }, [module, exports]);
    return (0, Chunk54381.jsx)(Chunk793030.X6q, {
      variant: "heading-md/semibold",
      children: require
    })
  },
  f = () => {
    switch ((0, Chunk953865.xf)(e => e.connectionStatus)) {
      case Chunk5900.Ij.INITIALIZING:
        return (0, Chunk54381.jsxs)("span", {
          className: Chunk291771.connectedStatus,
          children: [Chunk388032.intl.string(Chunk845259.default["00vkCU"]), " ", (0, Chunk54381.jsx)("span", {
            children: (0, Chunk54381.jsx)(Chunk793030.$jN, {
              type: Chunk793030.RAz.SPINNING_CIRCLE,
              className: Chunk291771.spinner
            })
          })]
        });
      case Chunk5900.Ij.CONNECTED:
        return Chunk388032.intl.string(Chunk845259.default.FBu3XJ);
      case Chunk5900.Ij.DISCONNECTED:
        return Chunk388032.intl.string(Chunk845259.default["9V78nW"]);
      case Chunk5900.Ij.ERROR:
        return Chunk388032.intl.string(Chunk845259.default.i4ZzK6)
    }
  }