/** Chunk was on 67544 **/
/** chunk id: 265513, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk522474 = require("./522474.js");

function a(e) {
  let {
    isPaused: t,
    onFrame: n,
    windowKey: a
  } = e, i = (0, r.useRef)(t), c = (0, r.useRef)(true), l = (0, r.useRef)(null), u = (0, s.e7)([o.Z], () => o.Z.getWindow(a)), d = (0, r.useCallback)(e => {
    n(null != l.current ? (e - l.current) / 1e3 : 0), l.current = e, i.current || (c.current = null == u ? true : u.requestAnimationFrame(d))
  }, [u, n]);
  (0, r.useEffect)(() => {
    i.current = t
  }, [t]), (0, r.useEffect)(() => (t || (l.current = null, c.current = null == u ? true : u.requestAnimationFrame(d)), () => {
    null != c.current && (null == u || u.cancelAnimationFrame(c.current))
  }), [u, t, d]), (0, r.useEffect)(() => () => {
    null != c.current && (null == u || u.cancelAnimationFrame(c.current))
  }, [u])
}