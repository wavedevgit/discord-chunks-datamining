/** Chunk was on web.js **/
/** chunk id: 127445, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
}), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk64700 = require("./64700.js"),
  Chunk671325 = require("./671325.js"),
  Chunk562465 = require("./562465.js"),
  Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk676279 = require("./676279.js"),
  Chunk652215 = require("./652215.js"),
  Chunk339747 = require("./339747.js"),
  Chunk883364 = require("./883364.js"),
  Chunk336343 = require("./336343.js"),
  Chunk37232 = require("./37232.js"),
  Chunk855249 = require("./855249.js"),
  Chunk909902 = require("./909902.js");
let m = e => {
    let t = (0, l.TM)(),
      [n, i] = (0, r.useState)({
        modalGlowEntry: true,
        modalGlowIdle: true,
        modalGlowExit: true
      }),
      [s, m] = (0, r.useState)(false),
      [g, E] = (0, r.useState)(false),
      [y, b] = (0, r.useState)(false),
      O = (0, r.useRef)(true);
    (0, r.useEffect)(() => (O.current = true, () => {
      O.current = false
    }), []);
    let v = (0, r.useCallback)(() => null != n.modalGlowEntry && null != n.modalGlowIdle && null != n.modalGlowExit, [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit]),
      A = (0, r.useCallback)(async () => {
        if (!v() && !y) {
          b(true), E(false), m(false);
          try {
            let e = Date.now(),
              [n, r, s] = await Promise.all([a.Bo.get({
                url: t ? u.A : d.A,
                binary: true,
                rejectWithError: true
              }), a.Bo.get({
                url: t ? f.A : p.A,
                binary: true,
                rejectWithError: true
              }), a.Bo.get({
                url: t ? _.A : h.A,
                binary: true,
                rejectWithError: true
              })]);
            O.current && (i({
              modalGlowEntry: window.URL.createObjectURL(n.body),
              modalGlowExit: window.URL.createObjectURL(r.body),
              modalGlowIdle: window.URL.createObjectURL(s.body)
            }), m(true), o.default.track(c.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCH_SUCCESS, {
              load_duration_ms: Date.now() - e
            }))
          } catch (e) {
            O.current && E(true)
          } finally {
            O.current && b(false)
          }
        }
      }, [v, y, t]);
    return (0, r.useEffect)(() => {
      e && A()
    }, [e, A]), (0, r.useEffect)(() => () => {
      null != n.modalGlowEntry && window.URL.revokeObjectURL(n.modalGlowEntry), null != n.modalGlowIdle && window.URL.revokeObjectURL(n.modalGlowIdle), null != n.modalGlowExit && window.URL.revokeObjectURL(n.modalGlowExit)
    }, [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit]), {
      mediaUrls: n,
      isSuccess: s,
      isFailure: g,
      isLoading: y
    }
  },
  g = e => {
    (0, r.useEffect)(() => {
      e && o.default.track(c.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCHING)
    }, [e]);
    let {
      mediaUrls: t,
      isSuccess: n,
      isLoading: a
    } = m(e), {
      status: l
    } = (0, s.CEU)(e ? i.A : null);
    return {
      mediaUrls: t,
      isSuccess: n && l === s.BWP.Loaded,
      isLoading: a || l === s.BWP.Loading
    }
  }