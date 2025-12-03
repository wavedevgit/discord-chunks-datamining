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
      getWarpInstallationStatus: a,
      connect: o,
      installTimeout: m
    } = (0, Chunk773275.xf)(), {
      status: h
    } = (0, Chunk442837.e7)([Chunk646834.Z], () => Chunk646834.Z.state, []), [g, E] = (0, Chunk473749.useState)(0), {
      installedDiscordPrivateBrowsingPerk: b
    } = (0, Chunk442837.e7)([Chunk607726.Z], () => Chunk607726.Z.getState(), []), [y, O] = (0, Chunk473749.useState)(false), [v, S] = (0, Chunk473749.useState)(null);
    return (0, Chunk473749.useEffect)(() => {
      y || (O(true), module !== Chunk5900._n.INSTALLING && (0, Chunk998054.Y)().then(e => e === d._n.NOT_INSTALLED ? void t(d._n.NOT_INSTALLED) : e === d._n.EXISTING_INSTALLATION && b ? void t(d._n.INSTALLING) : void t(e)))
    }, [exports, b, y, module]), (0, Chunk473749.useEffect)(() => {
      b && module === Chunk5900._n.NOT_INSTALLED && (0, Chunk60995._)(false), b && module === Chunk5900._n.EXISTING_INSTALLATION && exports(Chunk5900._n.INSTALLED)
    }, [b, module, exports]), (0, Chunk473749.useEffect)(() => {
      if (![Chunk5900._n.INSTALLED, Chunk5900._n.WAITING_FOR_TERMS].includes(module)) return;
      let n = setInterval(async () => {
        await Chunk734610() === Chunk5900._n.NOT_INSTALLED && exports(Chunk5900._n.NOT_INSTALLED)
      }, 1e3);
      return () => clearInterval(require)
    }, [module, exports, Chunk734610]), (0, Chunk473749.useEffect)(() => {
      if (![Chunk5900._n.INSTALLED, Chunk5900._n.EXISTING_INSTALLATION].includes(module)) return void require(Chunk5900.Ij.DISCONNECTED);
      switch (h) {
        case Chunk5900.zb.CONNECTED:
          require(Chunk5900.Ij.CONNECTED);
          break;
        case Chunk5900.zb.CONNECTING:
          require(Chunk5900.Ij.INITIALIZING);
          break;
        case Chunk5900.zb.DISCONNECTED:
          require(Chunk5900.Ij.DISCONNECTED);
          break;
        case Chunk5900.zb.UNABLE:
          O(false)
      }
    }, [h, module, require]), (0, Chunk473749.useEffect)(() => {
      g > 10 && (exports(Chunk5900._n.ERROR), E(0))
    }, [g, exports]), (0, Chunk473749.useEffect)(() => {
      module === Chunk5900._n.READY_FOR_LICENSE && Chunk54381().then(e => {
        e && t(d._n.INSTALLED), o()
      }).catch(e => {
        c.Z.captureException(e, {
          tags: {
            source: "PRIVATE_BROWSING_PERK_LICENSE_FINISH_SETUP"
          }
        }), t(d._n.ERROR)
      })
    }, [module, exports, Chunk54381, Chunk818710]), (0, Chunk473749.useEffect)(() => {
      if (![Chunk5900._n.INSTALLING, Chunk5900._n.WAITING_FOR_TERMS].includes(module)) return void S(null);
      if (null == v && S(Date.now()), null != v) {
        let e = v + m - Date.now();
        if (module <= 0) return void exports(Chunk5900._n.INSTALLING_TIMEOUT);
        let n = setTimeout(() => {
          exports(Chunk5900._n.INSTALLING_TIMEOUT)
        }, module);
        return () => clearTimeout(require)
      }
    }, [module, v, S, exports, m]), (0, Chunk473749.useEffect)(() => {
      if (![Chunk5900._n.INSTALLING, Chunk5900._n.WAITING_FOR_TERMS, Chunk5900._n.INSTALLING_TIMEOUT].includes(module)) return;
      let n = setInterval(async () => {
        let n = await Chunk734610();
        switch (require) {
          case Chunk5900._n.ERROR:
            E(e => e + 1);
            return;
          case Chunk5900._n.NOT_INSTALLED:
            [Chunk5900._n.NOT_INSTALLED, Chunk5900._n.INSTALLING].includes(module) || exports(Chunk5900._n.NOT_INSTALLED);
            return;
          case Chunk5900._n.EXISTING_INSTALLATION:
            exports(Chunk5900._n.READY_FOR_LICENSE);
            return;
          case Chunk5900._n.WAITING_FOR_TERMS:
          case Chunk5900._n.INSTALLING:
            if (module === Chunk5900._n.INSTALLING_TIMEOUT) return;
            exports(require);
            break;
          default:
            exports(require)
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