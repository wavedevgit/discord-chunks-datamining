/** Chunk was on web.js **/
/** chunk id: 402426, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk473749 = require("./473749.js"),
  Chunk646903 = require("./646903.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk526167 = require("./526167.js"),
  Chunk981631 = require("./981631.js"),
  Chunk316776 = require("./316776.js"),
  Chunk279421 = require("./279421.js"),
  Chunk965715 = require("./965715.js"),
  Chunk410401 = require("./410401.js"),
  Chunk51926 = require("./51926.js"),
  Chunk701262 = require("./701262.js");
let h = e => {
    let t = (0, l.rO)(),
      [n, i] = (0, r.useState)({
        modalGlowEntry: true,
        modalGlowIdle: true,
        modalGlowExit: true
      }),
      [a, h] = (0, r.useState)(false),
      [g, E] = (0, r.useState)(false),
      [b, y] = (0, r.useState)(false),
      O = (0, r.useRef)(true);
    (0, r.useEffect)(() => (O.current = true, () => {
      O.current = false
    }), []);
    let v = (0, r.useCallback)(() => null != n.modalGlowEntry && null != n.modalGlowIdle && null != n.modalGlowExit, [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit]),
      S = (0, r.useCallback)(async () => {
        if (!v() && !b) {
          y(true), E(false), h(false);
          try {
            let e = Date.now(),
              [n, r, a] = await Promise.all([o.tn.get({
                url: t ? u.Z : d.Z,
                binary: true,
                rejectWithError: true
              }), o.tn.get({
                url: t ? f.Z : p.Z,
                binary: true,
                rejectWithError: true
              }), o.tn.get({
                url: t ? _.Z : m.Z,
                binary: true,
                rejectWithError: true
              })]);
            O.current && (i({
              modalGlowEntry: window.URL.createObjectURL(n.body),
              modalGlowExit: window.URL.createObjectURL(r.body),
              modalGlowIdle: window.URL.createObjectURL(a.body)
            }), h(true), s.default.track(c.rMx.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCH_SUCCESS, {
              load_duration_ms: Date.now() - e
            }))
          } catch (e) {
            O.current && E(true)
          } finally {
            O.current && y(false)
          }
        }
      }, [v, b, t]);
    return (0, r.useEffect)(() => {
      e && S()
    }, [e, S]), (0, r.useEffect)(() => () => {
      null != n.modalGlowEntry && window.URL.revokeObjectURL(n.modalGlowEntry), null != n.modalGlowIdle && window.URL.revokeObjectURL(n.modalGlowIdle), null != n.modalGlowExit && window.URL.revokeObjectURL(n.modalGlowExit)
    }, [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit]), {
      mediaUrls: n,
      isSuccess: a,
      isFailure: g,
      isLoading: b
    }
  },
  g = e => {
    (0, r.useEffect)(() => {
      e && s.default.track(c.rMx.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCHING)
    }, [e]);
    let {
      mediaUrls: t,
      isSuccess: n,
      isLoading: o
    } = h(e), {
      status: l
    } = (0, a.VG8)(e ? i.Z : null);
    return {
      mediaUrls: t,
      isSuccess: n && l === a.JtY.Loaded,
      isLoading: o || l === a.JtY.Loading
    }
  }