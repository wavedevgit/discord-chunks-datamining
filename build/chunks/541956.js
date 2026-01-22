/** Chunk was on 21968 **/
/** chunk id: 541956, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c,
  Q: () => o
});
var i, Chunk157559 = require("./157559.js"),
  Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  o = ((i = {})[i.REMOVE_SELF = 0] = "REMOVE_SELF", i[i.REMOVE_ROLE = 1] = "REMOVE_ROLE", i[i.DENY_ROLE = 2] = "DENY_ROLE", i);

function c(e, t) {
  let n;
  0 === e ? n = s.intl.format(s.t["/S6f5y"], {}) : 1 === e ? n = s.intl.format(s.t.EBhv4R, {
    name: t
  }) : 2 === e && (n = s.intl.format(s.t["59Dbw0"], {
    name: t
  })), r.A.show({
    title: s.intl.string(s.t.vElC9b),
    body: n,
    cancelText: s.intl.string(s.t.psXQHP),
    onCancel() {
      window.open(l.A.getArticleURL(a.MVz.APPLICATION_COMMAND_PERMISSIONS_LOCKOUT))
    }
  })
}