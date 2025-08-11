/** Chunk was on 33397 **/
/** chunk id: 802063, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  i: () => s
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk19780 = require("./19780.js"),
  Chunk959457 = require("./959457.js"),
  Chunk630759 = require("./630759.js");

function s(e) {
  let {
    channelId: t,
    userId: r,
    nickname: s,
    onAlertOpen: a
  } = e, u = function(e) {
    let {
      userId: t
    } = e;
    return (0, l.e7)([o.Z, c.Z], () => (0, i.UB)(t, [o.Z, c.Z]))
  }({
    userId: r
  }), d = n.useRef(null);
  n.useEffect(() => {
    u && null == d.current ? d.current = setTimeout(() => {
      a(), (0, i.lg)({
        userId: r,
        channelId: t,
        nickname: s
      })
    }, 1e3) : (clearTimeout(d.current), d.current = null);
    let e = d.current;
    return () => {
      clearTimeout(e)
    }
  }, [t, u, s, a, r])
}