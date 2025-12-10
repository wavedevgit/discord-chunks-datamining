/** Chunk was on web.js **/
/** chunk id: 254621, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./415506.js"), require("./49124.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk734610 = require("./734610.js"),
  Chunk818710 = require("./818710.js"),
  Chunk442837 = require("./442837.js"),
  Chunk646834 = require("./646834.js"),
  Chunk626135 = require("./626135.js"),
  Chunk960048 = require("./960048.js"),
  Chunk998054 = require("./998054.js"),
  Chunk323183 = require("./323183.js"),
  Chunk5900 = require("./5900.js"),
  Chunk60995 = require("./60995.js"),
  Chunk607726 = require("./607726.js"),
  Chunk773275 = require("./773275.jsx"),
  Chunk981631 = require("./981631.js");
let E = () => {
    let {
      installationStatus: e,
      setInstallationStatus: t,
      setConnectionStatus: n,
      finishSetup: r,
      getWarpInstallationStatus: a,
      connect: o,
      installTimeout: E
    } = (0, Chunk773275.xf)(), {
      status: b
    } = (0, Chunk442837.e7)([Chunk646834.Z], () => Chunk646834.Z.state, []), [y, O] = (0, Chunk473749.useState)(0), {
      installedDiscordPrivateBrowsingPerk: v
    } = (0, Chunk442837.e7)([Chunk607726.Z], () => Chunk607726.Z.getState(), []), [S, I] = (0, Chunk473749.useState)(false), [T, C] = (0, Chunk473749.useState)(null);
    return (0, Chunk473749.useEffect)(() => {
      S || (I(true), module !== Chunk5900._n.INSTALLING && (0, Chunk998054.Y)().then(e => e === p._n.NOT_INSTALLED ? void t(p._n.NOT_INSTALLED) : e === p._n.EXISTING_INSTALLATION && v ? void t(p._n.INSTALLING) : void t(e)))
    }, [exports, v, S, module]), (0, Chunk473749.useEffect)(() => {
      v && module === Chunk5900._n.NOT_INSTALLED && (0, Chunk60995._)(false), v && module === Chunk5900._n.EXISTING_INSTALLATION && exports(Chunk5900._n.INSTALLED)
    }, [v, module, exports]), (0, Chunk473749.useEffect)(() => {
      if (![Chunk5900._n.INSTALLED, Chunk5900._n.WAITING_FOR_TERMS].includes(module)) return;
      let n = setInterval(async () => {
        await Chunk734610() === Chunk5900._n.NOT_INSTALLED && exports(Chunk5900._n.NOT_INSTALLED)
      }, 1e3);
      return () => clearInterval(require)
    }, [module, exports, Chunk734610]), (0, Chunk473749.useEffect)(() => {
      if (![Chunk5900._n.INSTALLED, Chunk5900._n.EXISTING_INSTALLATION].includes(module)) return void require(Chunk5900.Ij.DISCONNECTED);
      switch (b) {
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
          I(false)
      }
    }, [b, module, require]), (0, Chunk473749.useEffect)(() => {
      y > 10 && (exports(Chunk5900._n.ERROR), O(0))
    }, [y, exports]), (0, Chunk473749.useEffect)(() => {
      module === Chunk5900._n.READY_FOR_LICENSE && Chunk54381().then(e => {
        e && t(p._n.INSTALLED), o()
      }).catch(e => {
        u.Z.captureException(e, {
          tags: {
            source: f.D.PRIVATE_BROWSING_PERK_LICENSE_FINISH_SETUP
          }
        }), c.default.track(g.rMx.PREMIUM_FEATURE_ERROR, {
          error_message: e instanceof Error ? e.message : JSON.stringify(e),
          error_source: f.D.PRIVATE_BROWSING_PERK_LICENSE_FINISH_SETUP
        }), t(p._n.ERROR)
      })
    }, [module, exports, Chunk54381, Chunk818710]), (0, Chunk473749.useEffect)(() => {
      if (![Chunk5900._n.INSTALLING, Chunk5900._n.WAITING_FOR_TERMS].includes(module)) return void C(null);
      if (null == T && C(Date.now()), null != T) {
        let e = T + E - Date.now();
        if (module <= 0) return void exports(Chunk5900._n.INSTALLING_TIMEOUT);
        let n = setTimeout(() => {
          exports(Chunk5900._n.INSTALLING_TIMEOUT)
        }, module);
        return () => clearTimeout(require)
      }
    }, [module, T, C, exports, E]), (0, Chunk473749.useEffect)(() => {
      if (![Chunk5900._n.INSTALLING, Chunk5900._n.WAITING_FOR_TERMS, Chunk5900._n.INSTALLING_TIMEOUT].includes(module)) return;
      let n = setInterval(async () => {
        let n = await Chunk734610();
        switch (require) {
          case Chunk5900._n.ERROR:
            O(e => e + 1);
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
  b = () => (0, Chunk818710.nI)() ? (0, Chunk54381.jsx)(Chunk734610.SV, {
    fallback: null,
    children: (0, Chunk54381.jsx)(E, {})
  }) : null