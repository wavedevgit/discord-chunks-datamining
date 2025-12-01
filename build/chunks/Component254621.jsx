/** Chunk was on web.js **/
/** chunk id: 254621, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk734610 = require("./734610.js"),
  Chunk818710 = require("./818710.js"),
  Chunk442837 = require("./442837.js"),
  Chunk646834 = require("./646834.js"),
  Chunk960048 = require("./960048.js"),
  Chunk998054 = require("./998054.js"),
  Chunk5900 = require("./5900.js"),
  Chunk60995 = require("./60995.js"),
  Chunk607726 = require("./607726.js"),
  Chunk773275 = require("./773275.jsx");
let m = () => {
    let {
      installationStatus: e,
      setInstallationStatus: t,
      setConnectionStatus: n,
      finishSetup: r,
      getWarpInstallationStatus: a
    } = (0, Chunk773275.xf)(), {
      status: o
    } = (0, Chunk442837.e7)([Chunk646834.Z], () => Chunk646834.Z.state, []), [m, h] = (0, Chunk473749.useState)(0), {
      installedDiscordPrivateBrowsingPerk: g
    } = (0, Chunk442837.e7)([Chunk607726.Z], () => Chunk607726.Z.getState(), []), [E, b] = (0, Chunk473749.useState)(false);
    return (0, Chunk473749.useEffect)(() => {
      E || (b(true), module !== Chunk5900._n.INSTALLING && (0, Chunk998054.Y)().then(e => e === d._n.NOT_INSTALLED ? void t(d._n.NOT_INSTALLED) : e === d._n.EXISTING_INSTALLATION && g ? void t(d._n.INSTALLING) : void t(e)))
    }, [exports, g, E, module]), (0, Chunk473749.useEffect)(() => {
      g && module === Chunk5900._n.NOT_INSTALLED && (0, Chunk60995._)(false), g && module === Chunk5900._n.EXISTING_INSTALLATION && exports(Chunk5900._n.INSTALLED)
    }, [g, module, exports]), (0, Chunk473749.useEffect)(() => {
      if (module !== Chunk5900._n.INSTALLED) return;
      let n = setInterval(async () => {
        await Chunk734610() === Chunk5900._n.NOT_INSTALLED && exports(Chunk5900._n.NOT_INSTALLED)
      }, 1e3);
      return () => clearInterval(require)
    }, [module, exports, Chunk734610]), (0, Chunk473749.useEffect)(() => {
      if (![Chunk5900._n.INSTALLED, Chunk5900._n.EXISTING_INSTALLATION].includes(module)) return void require(Chunk5900.Ij.DISCONNECTED);
      switch (Chunk818710) {
        case Chunk5900.zb.CONNECTED:
          require(Chunk5900.Ij.CONNECTED);
          break;
        case Chunk5900.zb.CONNECTING:
          require(Chunk5900.Ij.INITIALIZING);
          break;
        case Chunk5900.zb.DISCONNECTED:
          require(Chunk5900.Ij.DISCONNECTED)
      }
    }, [Chunk818710, module, require]), (0, Chunk473749.useEffect)(() => {
      m > 10 && (exports(Chunk5900._n.ERROR), h(0))
    }, [m, exports]), (0, Chunk473749.useEffect)(() => {
      module === Chunk5900._n.READY_FOR_LICENSE && Chunk54381().then(e => {
        e && t(d._n.INSTALLED)
      }).catch(e => {
        c.Z.captureException(e, {
          tags: {
            source: "PRIVATE_BROWSING_PERK_LICENSE_FINISH_SETUP"
          }
        }), t(d._n.ERROR)
      })
    }, [module, exports, Chunk54381]), (0, Chunk473749.useEffect)(() => {
      if (module !== Chunk5900._n.INSTALLING) return;
      let n = setInterval(async () => {
        let e = await Chunk734610();
        switch (module) {
          case Chunk5900._n.ERROR:
            h(e => e + 1);
            return;
          case Chunk5900._n.NOT_INSTALLED:
            return;
          case Chunk5900._n.EXISTING_INSTALLATION:
            exports(Chunk5900._n.READY_FOR_LICENSE);
            return;
          default:
            exports(module)
        }
      }, 1e3);
      return () => {
        clearInterval(require)
      }
    }, [module, exports, Chunk734610]), null
  },
  h = () => (0, Chunk818710.nI)() ? (0, Chunk54381.jsx)(Chunk734610.SV, {
    fallback: null,
    children: (0, Chunk54381.jsx)(m, {})
  }) : null