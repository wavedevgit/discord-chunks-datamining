/** Chunk was on 13616 **/
/** chunk id: 296023, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  w: () => a
});
var Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.js");

function a(e) {
  var t;
  let n = null == (t = e.linkedLobby) ? true : t.linked_at,
    a = (0, r.e7)([l.default], () => {
      var t;
      return l.default.getUser(null == (t = e.linkedLobby) ? true : t.linked_by)
    });
  return i.useMemo(() => {
    if (null == n) return;
    let e = new Date(n);
    return null != a ? o.intl.format(o.t["xPrJ+v"], {
      username: a.username,
      linkedAtDate: e
    }) : o.intl.formatToPlainString(o.t.EyygeH, {
      linkedAtDate: e
    })
  }, [n, a])
}