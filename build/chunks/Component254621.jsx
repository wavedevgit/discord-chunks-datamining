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
    } = (0, h.xf)(), {
      status: b
    } = (0, s.e7)([l.Z], () => l.Z.state, []), [y, O] = (0, i.useState)(0), {
      installedDiscordPrivateBrowsingPerk: v
    } = (0, s.e7)([m.Z], () => m.Z.getState(), []), [S, I] = (0, i.useState)(false), [T, C] = (0, i.useState)(null);
    return (0, i.useEffect)(() => {
      S || (I(true), e !== p._n.INSTALLING && (0, d.Y)().then(e => e === p._n.NOT_INSTALLED ? void t(p._n.NOT_INSTALLED) : e === p._n.EXISTING_INSTALLATION && v ? void t(p._n.INSTALLING) : void t(e)))
    }, [t, v, S, e]), (0, i.useEffect)(() => {
      v && e === p._n.NOT_INSTALLED && (0, _._)(false), v && e === p._n.EXISTING_INSTALLATION && t(p._n.INSTALLED)
    }, [v, e, t]), (0, i.useEffect)(() => {
      if (![p._n.INSTALLED, p._n.WAITING_FOR_TERMS].includes(e)) return;
      let n = setInterval(async () => {
        await a() === p._n.NOT_INSTALLED && t(p._n.NOT_INSTALLED)
      }, 1e3);
      return () => clearInterval(n)
    }, [e, t, a]), (0, i.useEffect)(() => {
      if (![p._n.INSTALLED, p._n.EXISTING_INSTALLATION].includes(e)) return void n(p.Ij.DISCONNECTED);
      switch (b) {
        case p.zb.CONNECTED:
          n(p.Ij.CONNECTED);
          break;
        case p.zb.CONNECTING:
          n(p.Ij.INITIALIZING);
          break;
        case p.zb.DISCONNECTED:
          n(p.Ij.DISCONNECTED);
          break;
        case p.zb.UNABLE:
          I(false)
      }
    }, [b, e, n]), (0, i.useEffect)(() => {
      y > 10 && (t(p._n.ERROR), O(0))
    }, [y, t]), (0, i.useEffect)(() => {
      e === p._n.READY_FOR_LICENSE && r().then(e => {
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
    }, [e, t, r, o]), (0, i.useEffect)(() => {
      if (![p._n.INSTALLING, p._n.WAITING_FOR_TERMS].includes(e)) return void C(null);
      if (null == T && C(Date.now()), null != T) {
        let e = T + E - Date.now();
        if (e <= 0) return void t(p._n.INSTALLING_TIMEOUT);
        let n = setTimeout(() => {
          t(p._n.INSTALLING_TIMEOUT)
        }, e);
        return () => clearTimeout(n)
      }
    }, [e, T, C, t, E]), (0, i.useEffect)(() => {
      if (![p._n.INSTALLING, p._n.WAITING_FOR_TERMS, p._n.INSTALLING_TIMEOUT].includes(e)) return;
      let n = setInterval(async () => {
        let n = await a();
        switch (n) {
          case p._n.ERROR:
            O(e => e + 1);
            return;
          case p._n.NOT_INSTALLED:
            [p._n.NOT_INSTALLED, p._n.INSTALLING].includes(e) || t(p._n.NOT_INSTALLED);
            return;
          case p._n.EXISTING_INSTALLATION:
            t(p._n.READY_FOR_LICENSE);
            return;
          case p._n.WAITING_FOR_TERMS:
          case p._n.INSTALLING:
            if (e === p._n.INSTALLING_TIMEOUT) return;
            t(n);
            break;
          default:
            t(n)
        }
      }, 1e3);
      return () => {
        clearInterval(n)
      }
    }, [e, t, a]), null
  },
  b = () => (0, o.nI)() ? (0, r.jsx)(a.SV, {
    fallback: null,
    children: (0, r.jsx)(E, {})
  }) : null