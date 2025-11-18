/** Chunk was on 99063 **/
/** chunk id: 296023, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  var t;
  let n = null == (t = e.linkedLobby) ? true : t.linked_at,
    o = (0, r.e7)([l.default], () => {
      var t;
      return l.default.getUser(null == (t = e.linkedLobby) ? true : t.linked_by)
    });
  return i.useMemo(() => {
    if (null == n) return;
    let e = new Date(n);
    return null != o ? a.intl.format(a.t["xPrJ+q"], {
      username: o.username,
      linkedAtDate: e
    }) : a.intl.formatToPlainString(a.t.EyygeM, {
      linkedAtDate: e
    })
  }, [n, o])
}