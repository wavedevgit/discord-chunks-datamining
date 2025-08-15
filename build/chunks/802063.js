/** Chunk was on 33397 **/
/** chunk id: 802063, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  i: () => s
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk19780 = require("./19780.js"),
  Chunk959457 = require("./959457.js"),
  Chunk630759 = require("./630759.js");

function s(e) {
  let {
    channelId: t,
    userId: r,
    nickname: s,
    onAlertOpen: o
  } = e, c = function(e) {
    let {
      userId: t
    } = e;
    return (0, l.e7)([i.Z, u.Z], () => (0, a.UB)(t, [i.Z, u.Z]))
  }({
    userId: r
  }), d = n.useRef(null);
  n.useEffect(() => {
    c && null == d.current ? d.current = setTimeout(() => {
      o(), (0, a.lg)({
        userId: r,
        channelId: t,
        nickname: s
      })
    }, 1e3) : (clearTimeout(d.current), d.current = null);
    let e = d.current;
    return () => {
      clearTimeout(e)
    }
  }, [t, c, s, o, r])
}