/** Chunk was on web.js **/
/** chunk id: 402426, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js");
var Chunk73800 = require("./73800.js"),
  Chunk647000 = require("./647000.js"),
  Chunk544891 = require("./544891.js"),
  Chunk396704 = require("./396704.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk279421 = require("./279421.js"),
  Chunk410401 = require("./410401.js"),
  Chunk701262 = require("./701262.js");
let f = e => {
    let [t, n] = (0, r.useState)({
      modalGlowEntry: true,
      modalGlowIdle: true,
      modalGlowExit: true
    }), [i, a] = (0, r.useState)(false), [s, l] = (0, r.useState)(false), [f, _] = (0, r.useState)(false), p = (0, r.useRef)(true);
    (0, r.useEffect)(() => (p.current = true, () => {
      p.current = false
    }), []);
    let h = (0, r.useCallback)(() => null != t.modalGlowEntry && null != t.modalGlowIdle && null != t.modalGlowExit, [t.modalGlowEntry, t.modalGlowIdle, t.modalGlowExit]),
      m = (0, r.useCallback)(async () => {
        if (!h() && !f) {
          _(true), l(false), a(false);
          try {
            let [e, t, r] = await Promise.all([o.tn.get({
              url: c.Z,
              binary: true,
              rejectWithError: true
            }), o.tn.get({
              url: u.Z,
              binary: true,
              rejectWithError: true
            }), o.tn.get({
              url: d.Z,
              binary: true,
              rejectWithError: true
            })]);
            p.current && (n({
              modalGlowEntry: window.URL.createObjectURL(e.body),
              modalGlowExit: window.URL.createObjectURL(t.body),
              modalGlowIdle: window.URL.createObjectURL(r.body)
            }), a(true))
          } catch (e) {
            p.current && l(true)
          } finally {
            p.current && _(false)
          }
        }
      }, [h, f]);
    return (0, r.useEffect)(() => {
      e && m()
    }, [e, m]), (0, r.useEffect)(() => () => {
      null != t.modalGlowEntry && window.URL.revokeObjectURL(t.modalGlowEntry), null != t.modalGlowIdle && window.URL.revokeObjectURL(t.modalGlowIdle), null != t.modalGlowExit && window.URL.revokeObjectURL(t.modalGlowExit)
    }, [t.modalGlowEntry, t.modalGlowIdle, t.modalGlowExit]), {
      mediaUrls: t,
      isSuccess: i,
      isFailure: s,
      isLoading: f
    }
  },
  _ = e => {
    (0, r.useEffect)(() => {
      e && s.default.track(l.rMx.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCHING)
    }, [e]);
    let {
      mediaUrls: t,
      isSuccess: n,
      isLoading: o
    } = f(e), {
      status: c
    } = (0, a.VG)(e ? i.Z : null);
    return {
      mediaUrls: t,
      isSuccess: n && c === a.Jt.Loaded,
      isLoading: o || c === a.Jt.Loading
    }
  }