/** Chunk was on web.js **/
/** chunk id: 116282, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  R: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159691 = require("./159691.js"),
  Chunk323183 = require("./323183.js"),
  Chunk5900 = require("./5900.js"),
  Chunk953865 = require("./953865.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk163646 = require("./163646.js");
let d = () => {
  let {
    isWeb: e,
    installationStatus: t,
    connectionStatus: n
  } = (0, Chunk953865.xf)(), d = (0, Chunk473749.useMemo)(() => {
    switch (require) {
      case Chunk5900.Ij.CONNECTED:
        return Chunk388032.intl.format(Chunk163646.default.EVQZqy, {
          helpdeskArticle: Chunk323183.w
        });
      case Chunk5900.Ij.DISCONNECTED:
        return Chunk388032.intl.format(Chunk163646.default.zOCRv9, {
          helpdeskArticle: Chunk323183.w
        });
      case Chunk5900.Ij.ERROR:
        return Chunk388032.intl.format(Chunk163646.default.e9MkUw, {
          helpdeskArticle: Chunk323183.w
        });
      default:
        return Chunk388032.intl.format(Chunk163646.default["Rr+ah3"], {
          helpdeskArticle: Chunk323183.w
        })
    }
  }, [require]), f = (0, Chunk473749.useMemo)(() => {
    if (module) return Chunk388032.intl.format(Chunk163646.default.z6v0w5, {
      helpdeskArticle: Chunk323183.w
    });
    switch (exports) {
      case Chunk5900._n.ERROR:
        return Chunk388032.intl.format(Chunk163646.default.vjIpaK, {
          helpdeskArticle: Chunk323183.w
        });
      case Chunk5900._n.INSTALLING:
      case Chunk5900._n.READY_FOR_LICENSE:
        return Chunk388032.intl.format(Chunk163646.default.ZLrDvb, {
          helpdeskArticle: Chunk323183.w
        });
      case Chunk5900._n.EXISTING_INSTALLATION:
        return Chunk388032.intl.format(Chunk163646.default.gOBU3K, {
          helpdeskArticle: Chunk323183.w
        });
      case Chunk5900._n.ZERO_TRUST:
        return Chunk388032.intl.string(Chunk163646.default.KVSUDs);
      case Chunk5900._n.INSTALLED:
        return d;
      case Chunk5900._n.NOT_INSTALLED:
      case Chunk5900._n.UNKNOWN:
      default:
        return Chunk388032.intl.format(Chunk163646.default["Rr+ah3"], {
          helpdeskArticle: Chunk323183.w
        })
    }
  }, [module, exports, d]);
  return (0, Chunk54381.jsx)(Chunk159691.xvT, {
    variant: "text-sm/normal",
    color: "text-secondary",
    children: f
  })
}