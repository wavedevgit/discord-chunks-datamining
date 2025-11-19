/** Chunk was on web.js **/
/** chunk id: 254621, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk734610 = require("./734610.js"),
  Chunk442837 = require("./442837.js"),
  Chunk956097 = require("./956097.js"),
  Chunk960048 = require("./960048.js"),
  Chunk998054 = require("./998054.js"),
  Chunk5900 = require("./5900.js"),
  Chunk953865 = require("./953865.jsx"),
  Chunk60995 = require("./60995.js"),
  Chunk607726 = require("./607726.js");
let p = () => {
    let {
      installationStatus: e,
      setInstallationStatus: t,
      setConnectionStatus: n,
      finishSetup: r,
      getWarpInstallationStatus: a
    } = (0, Chunk953865.xf)(), {
      status: p
    } = (0, Chunk442837.e7)([Chunk956097.Z], () => Chunk956097.Z.state, []), [h, m] = (0, Chunk473749.useState)(0), {
      installedDiscordPrivateBrowsingPerk: g
    } = (0, Chunk442837.e7)([Chunk607726.Z], () => Chunk607726.Z.getState(), []), [E, b] = (0, Chunk473749.useState)(false);
    return (0, Chunk473749.useEffect)(() => {
      E || (b(true), module !== Chunk5900._n.INSTALLING && (0, Chunk998054.Y)().then(e => e === u._n.NOT_INSTALLED ? void t(u._n.NOT_INSTALLED) : e === u._n.EXISTING_INSTALLATION && g ? void t(u._n.INSTALLING) : void t(e)))
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
      switch (p) {
        case Chunk5900.zb.CONNECTED:
          require(Chunk5900.Ij.CONNECTED);
          break;
        case Chunk5900.zb.CONNECTING:
          require(Chunk5900.Ij.INITIALIZING);
          break;
        case Chunk5900.zb.DISCONNECTED:
          require(Chunk5900.Ij.DISCONNECTED)
      }
    }, [p, module, require]), (0, Chunk473749.useEffect)(() => {
      h > 10 && (exports(Chunk5900._n.ERROR), m(0))
    }, [h, exports]), (0, Chunk473749.useEffect)(() => {
      module === Chunk5900._n.READY_FOR_LICENSE && Chunk54381().then(e => {
        e && t(u._n.INSTALLED)
      }).catch(e => l.Z.captureException(e, {
        tags: {
          source: "PRIVATE_BROWSING_PERK_LICENSE_FINISH_SETUP"
        }
      }))
    }, [module, exports, Chunk54381]), (0, Chunk473749.useEffect)(() => {
      if (module !== Chunk5900._n.INSTALLING) return;
      let n = setInterval(async () => {
        let e = await Chunk734610();
        switch (module) {
          case Chunk5900._n.ERROR:
            m(e => e + 1);
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
  h = () => (0, Chunk54381.jsx)(Chunk734610.SV, {
    fallback: null,
    children: (0, Chunk54381.jsx)(p, {})
  })