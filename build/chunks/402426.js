/** Chunk was on web.js **/
/** chunk id: 402426, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk73800 = require("./73800.js"),
  Chunk525729 = require("./525729.js"),
  Chunk544891 = require("./544891.js"),
  Chunk396704 = require("./396704.js"),
  Chunk626135 = require("./626135.js"),
  Chunk526167 = require("./526167.js"),
  Chunk981631 = require("./981631.js"),
  Chunk316776 = require("./316776.js"),
  Chunk279421 = require("./279421.js"),
  Chunk965715 = require("./965715.js"),
  Chunk410401 = require("./410401.js"),
  Chunk51926 = require("./51926.js"),
  Chunk701262 = require("./701262.js");
let m = e => {
    let t = (0, l.rO)(),
      [n, i] = (0, r.useState)({
        modalGlowEntry: true,
        modalGlowIdle: true,
        modalGlowExit: true
      }),
      [a, s] = (0, r.useState)(false),
      [c, m] = (0, r.useState)(false),
      [g, E] = (0, r.useState)(false),
      b = (0, r.useRef)(true);
    (0, r.useEffect)(() => (b.current = true, () => {
      b.current = false
    }), []);
    let y = (0, r.useCallback)(() => null != n.modalGlowEntry && null != n.modalGlowIdle && null != n.modalGlowExit, [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit]),
      O = (0, r.useCallback)(async () => {
        if (!y() && !g) {
          E(true), m(false), s(false);
          try {
            let [e, n, r] = await Promise.all([o.tn.get({
              url: t ? u.Z : d.Z,
              binary: true,
              rejectWithError: true
            }), o.tn.get({
              url: t ? f.Z : _.Z,
              binary: true,
              rejectWithError: true
            }), o.tn.get({
              url: t ? p.Z : h.Z,
              binary: true,
              rejectWithError: true
            })]);
            b.current && (i({
              modalGlowEntry: window.URL.createObjectURL(e.body),
              modalGlowExit: window.URL.createObjectURL(n.body),
              modalGlowIdle: window.URL.createObjectURL(r.body)
            }), s(true))
          } catch (e) {
            b.current && m(true)
          } finally {
            b.current && E(false)
          }
        }
      }, [y, g, t]);
    return (0, r.useEffect)(() => {
      e && O()
    }, [e, O]), (0, r.useEffect)(() => () => {
      null != n.modalGlowEntry && window.URL.revokeObjectURL(n.modalGlowEntry), null != n.modalGlowIdle && window.URL.revokeObjectURL(n.modalGlowIdle), null != n.modalGlowExit && window.URL.revokeObjectURL(n.modalGlowExit)
    }, [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit]), {
      mediaUrls: n,
      isSuccess: a,
      isFailure: c,
      isLoading: g
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
    } = m(e), {
      status: l
    } = (0, a.VG)(e ? i.Z : null);
    return {
      mediaUrls: t,
      isSuccess: n && l === a.Jt.Loaded,
      isLoading: o || l === a.Jt.Loading
    }
  }