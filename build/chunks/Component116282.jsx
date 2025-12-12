/** Chunk was on 77069 **/
/** chunk id: 116282, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  R: () => S
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159691 = require("./159691.js"),
  Chunk323183 = require("./323183.js"),
  Chunk5900 = require("./5900.js"),
  Chunk773275 = require("./773275.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk472057 = require("./472057.js");
let S = () => {
  let {
    isWeb: t,
    installationStatus: e,
    connectionStatus: n
  } = (0, Chunk773275.xf)(), S = (0, Chunk473749.useMemo)(() => {
    switch (require) {
      case Chunk5900.Ij.CONNECTED:
        return Chunk388032.intl.format(Chunk472057.default.EVQZqy, {
          helpdeskArticle: Chunk323183.w
        });
      case Chunk5900.Ij.DISCONNECTED:
        return Chunk388032.intl.format(Chunk472057.default.zOCRv9, {
          helpdeskArticle: Chunk323183.w
        });
      case Chunk5900.Ij.ERROR:
        return Chunk388032.intl.format(Chunk472057.default.e9MkUw, {
          helpdeskArticle: Chunk323183.w
        });
      default:
        return Chunk388032.intl.format(Chunk472057.default["Rr+ah3"], {
          helpdeskArticle: Chunk323183.w
        })
    }
  }, [require]), d = (0, Chunk473749.useMemo)(() => {
    if (module) return Chunk388032.intl.format(Chunk472057.default.z6v0w5, {
      helpdeskArticle: Chunk323183.w
    });
    switch (exports) {
      case Chunk5900._n.ERROR:
        return Chunk388032.intl.format(Chunk472057.default.vjIpaK, {
          helpdeskArticle: Chunk323183.w
        });
      case Chunk5900._n.INSTALLING_TIMEOUT:
        return Chunk388032.intl.format(Chunk472057.default.QWyvkt, {
          helpdeskArticle: Chunk323183.w
        });
      case Chunk5900._n.INSTALLING:
        return Chunk388032.intl.format(Chunk472057.default.ZLrDvb, {
          helpdeskArticle: Chunk323183.w
        });
      case Chunk5900._n.WAITING_FOR_TERMS:
      case Chunk5900._n.READY_FOR_LICENSE:
        return Chunk388032.intl.format(Chunk472057.default.rX9Z5g, {
          helpdeskArticle: Chunk323183.w
        });
      case Chunk5900._n.EXISTING_INSTALLATION:
        return Chunk388032.intl.format(Chunk472057.default.gOBU3K, {
          helpdeskArticle: Chunk323183.w
        });
      case Chunk5900._n.ZERO_TRUST:
        return Chunk388032.intl.string(Chunk472057.default.KVSUDs);
      case Chunk5900._n.INSTALLED:
        return S;
      case Chunk5900._n.NOT_INSTALLED:
      case Chunk5900._n.UNKNOWN:
      default:
        return Chunk388032.intl.format(Chunk472057.default["Rr+ah3"], {
          helpdeskArticle: Chunk323183.w
        })
    }
  }, [module, exports, S]);
  return (0, Chunk54381.jsx)(Chunk159691.xvT, {
    variant: "text-sm/normal",
    color: "text-subtle",
    children: d
  })
}