/** Chunk was on 21968 **/
/** chunk id: 514810, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk287809 = require("./287809.js"),
  Chunk985018 = require("./985018.jsx");

function s(e) {
  var t;
  let n = null == (t = e.linkedLobby) ? true : t.linked_at,
    s = (0, r.bG)([l.default], () => {
      var t;
      return l.default.getUser(null == (t = e.linkedLobby) ? true : t.linked_by)
    });
  return i.useMemo(() => {
    if (null == n) return;
    let e = new Date(n);
    return null != s ? a.intl.format(a.t["xPrJ+q"], {
      username: s.username,
      linkedAtDate: e
    }) : a.intl.formatToPlainString(a.t.EyygeM, {
      linkedAtDate: e
    })
  }, [n, s])
}