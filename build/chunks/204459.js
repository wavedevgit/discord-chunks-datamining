/** Chunk was on 16674 **/
/** chunk id: 204459, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  w: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk383501 = require("./383501.js"),
  Chunk162605 = require("./162605.js"),
  Chunk814278 = require("./814278.js");

function s(e) {
  let {
    channelId: t,
    userId: r,
    nickname: s,
    onAlertOpen: c
  } = e, o = function(e) {
    let {
      userId: t
    } = e;
    return (0, l.bG)([u.A, i.A], () => (0, a.m8)(t, [u.A, i.A]))
  }({
    userId: r
  }), f = n.useRef(null);
  n.useEffect(() => {
    o && null == f.current ? f.current = setTimeout(() => {
      c(), (0, a.Vw)({
        userId: r,
        channelId: t,
        nickname: s
      })
    }, 1e3) : (clearTimeout(f.current), f.current = null);
    let e = f.current;
    return () => {
      clearTimeout(e)
    }
  }, [t, o, s, c, r])
}