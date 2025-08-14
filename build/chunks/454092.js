/** Chunk was on 58511 **/
/** chunk id: 454092, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => c,
  s: () => s
});
var i, Chunk668781 = require("./668781.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  s = ((i = {})[i.REMOVE_SELF = 0] = "REMOVE_SELF", i[i.REMOVE_ROLE = 1] = "REMOVE_ROLE", i[i.DENY_ROLE = 2] = "DENY_ROLE", i);

function c(e, t) {
  let n;
  0 === e ? n = a.intl.format(a.t["/S6f5+"], {}) : 1 === e ? n = a.intl.format(a.t.EBhv4e, {
    name: t
  }) : 2 === e && (n = a.intl.format(a.t["59Dbw8"], {
    name: t
  })), r.Z.show({
    title: a.intl.string(a.t.vElC9f),
    body: n,
    cancelText: a.intl.string(a.t.psXQHB),
    onCancel() {
      window.open(l.Z.getArticleURL(o.BhN.APPLICATION_COMMAND_PERMISSIONS_LOCKOUT))
    }
  })
}