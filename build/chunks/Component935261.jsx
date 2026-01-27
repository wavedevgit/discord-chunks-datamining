/** Chunk was on web.js **/
/** chunk id: 935261, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./896048.js"), require("./65821.js"), require("./457529.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk484030 = require("./484030.js"),
  Chunk574381 = require("./574381.js"),
  Chunk311907 = require("./311907.js"),
  Chunk689194 = require("./689194.js"),
  Chunk954571 = require("./954571.js"),
  Chunk728458 = require("./728458.js"),
  Chunk858013 = require("./858013.js"),
  Chunk156186 = require("./156186.js"),
  Chunk602450 = require("./602450.js"),
  Chunk587093 = require("./587093.js"),
  Chunk69369 = require("./69369.js"),
  Chunk557571 = require("./557571.jsx"),
  Chunk652215 = require("./652215.js");
let E = () => {
    let {
      installationStatus: e,
      setInstallationStatus: t,
      setConnectionStatus: n,
      finishSetup: r,
      getWarpInstallationStatus: a,
      connect: o,
      installTimeout: E
    } = (0, m.lV)(), {
      status: y
    } = (0, s.bG)([l.A], () => l.A.state, []), [b, O] = (0, i.useState)(0), {
      installedDiscordPrivateBrowsingPerk: v
    } = (0, s.bG)([h.A], () => h.A.getState(), []), [A, I] = (0, i.useState)(false), [S, T] = (0, i.useState)(null);
    return (0, i.useEffect)(() => {
      A || (I(true), e !== p.Lk.INSTALLING && (0, d.t)().then(e => {
        e === p.Lk.NOT_INSTALLED ? t(p.Lk.NOT_INSTALLED) : e === p.Lk.EXISTING_INSTALLATION && v ? t(p.Lk.INSTALLING) : t(e)
      }))
    }, [t, v, A, e]), (0, i.useEffect)(() => {
      v && e === p.Lk.NOT_INSTALLED && (0, _.K)(false), v && e === p.Lk.EXISTING_INSTALLATION && t(p.Lk.INSTALLED)
    }, [v, e, t]), (0, i.useEffect)(() => {
      if (![p.Lk.INSTALLED, p.Lk.WAITING_FOR_TERMS].includes(e)) return;
      let n = setInterval(async () => {
        await a() === p.Lk.NOT_INSTALLED && t(p.Lk.NOT_INSTALLED)
      }, 1e3);
      return () => clearInterval(n)
    }, [e, t, a]), (0, i.useEffect)(() => {
      if (![p.Lk.INSTALLED, p.Lk.EXISTING_INSTALLATION].includes(e)) return void n(p.l7.DISCONNECTED);
      switch (y) {
        case p.N2.CONNECTED:
          n(p.l7.CONNECTED);
          break;
        case p.N2.CONNECTING:
          n(p.l7.INITIALIZING);
          break;
        case p.N2.DISCONNECTED:
          n(p.l7.DISCONNECTED);
          break;
        case p.N2.UNABLE:
          I(false)
      }
    }, [y, e, n]), (0, i.useEffect)(() => {
      b > 10 && (t(p.Lk.ERROR), O(0))
    }, [b, t]), (0, i.useEffect)(() => {
      e === p.Lk.READY_FOR_LICENSE && r().then(e => {
        e && t(p.Lk.INSTALLED), o()
      }).catch(e => {
        u.A.captureException(e, {
          tags: {
            source: f.q.PRIVATE_BROWSING_PERK_LICENSE_FINISH_SETUP
          }
        }), c.default.track(g.HAw.PREMIUM_FEATURE_ERROR, {
          error_message: e instanceof Error ? e.message : JSON.stringify(e),
          error_source: f.q.PRIVATE_BROWSING_PERK_LICENSE_FINISH_SETUP
        }), t(p.Lk.ERROR)
      })
    }, [e, t, r, o]), (0, i.useEffect)(() => {
      if (![p.Lk.INSTALLING, p.Lk.WAITING_FOR_TERMS].includes(e)) return void T(null);
      if (null == S && T(Date.now()), null != S) {
        let e = S + E - Date.now();
        if (e <= 0) return void t(p.Lk.INSTALLING_TIMEOUT);
        let n = setTimeout(() => {
          t(p.Lk.INSTALLING_TIMEOUT)
        }, e);
        return () => clearTimeout(n)
      }
    }, [e, S, T, t, E]), (0, i.useEffect)(() => {
      if (![p.Lk.INSTALLING, p.Lk.WAITING_FOR_TERMS, p.Lk.INSTALLING_TIMEOUT].includes(e)) return;
      let n = setInterval(async () => {
        let n = await a();
        switch (n) {
          case p.Lk.ERROR:
            O(e => e + 1);
            return;
          case p.Lk.NOT_INSTALLED:
            [p.Lk.NOT_INSTALLED, p.Lk.INSTALLING].includes(e) || t(p.Lk.NOT_INSTALLED);
            return;
          case p.Lk.EXISTING_INSTALLATION:
            t(p.Lk.READY_FOR_LICENSE);
            return;
          case p.Lk.WAITING_FOR_TERMS:
          case p.Lk.INSTALLING:
            if (e === p.Lk.INSTALLING_TIMEOUT) return;
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
  y = () => (0, o.xl)() ? (0, r.jsx)(a.tH, {
    fallback: null,
    children: (0, r.jsx)(E, {})
  }) : null