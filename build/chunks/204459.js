/** Chunk was on 16674 **/
/** chunk id: 204459, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  w: () => c
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk383501 = require("./383501.js"),
  Chunk162605 = require("./162605.js"),
  Chunk814278 = require("./814278.js");

function c(e) {
  let {
    channelId: t,
    userId: r,
    nickname: c,
    onAlertOpen: s
  } = e, o = function(e) {
    let {
      userId: t
    } = e;
    return (0, l.bG)([u.A, a.A], () => (0, i.m8)(t, [u.A, a.A]))
  }({
    userId: r
  }), f = n.useRef(null);
  n.useEffect(() => {
    o && null == f.current ? f.current = setTimeout(() => {
      s(), (0, i.Vw)({
        userId: r,
        channelId: t,
        nickname: c
      })
    }, 1e3) : (clearTimeout(f.current), f.current = null);
    let e = f.current;
    return () => {
      clearTimeout(e)
    }
  }, [t, o, c, s, r])
}