/** Chunk was on 33397 **/
/** chunk id: 802063, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  i: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk19780 = require("./19780.js"),
  Chunk959457 = require("./959457.js"),
  Chunk630759 = require("./630759.js");

function o(e) {
  let {
    channelId: t,
    userId: r,
    nickname: o,
    onAlertOpen: s
  } = e, a = function(e) {
    let {
      userId: t
    } = e;
    return (0, l.e7)([u.Z, i.Z], () => (0, c.UB)(t, [u.Z, i.Z]))
  }({
    userId: r
  }), f = n.useRef(null);
  n.useEffect(() => {
    a && null == f.current ? f.current = setTimeout(() => {
      s(), (0, c.lg)({
        userId: r,
        channelId: t,
        nickname: o
      })
    }, 1e3) : (clearTimeout(f.current), f.current = null);
    let e = f.current;
    return () => {
      clearTimeout(e)
    }
  }, [t, a, o, s, r])
}