/** Chunk was on 8106 **/
/** chunk id: 852898, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk951284 = require("./951284.js"),
  Chunk442837 = require("./442837.js"),
  Chunk139387 = require("./139387.js"),
  Chunk726542 = require("./726542.js"),
  Chunk690221 = require("./690221.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e, t) {
  let n = (0, a.e7)([u.Z], () => u.Z.getProps().integrations);
  return i.useMemo(() => (function(e, t, n) {
    var i, a, u, p;
    let f;
    if (!t.managed) return null;
    let h = null == (i = t.tags) ? true : i.bot_id,
      b = null == (a = t.tags) ? true : a.integration_id,
      x = (null == (u = t.tags) ? true : u.premium_subscriber) !== true,
      j = (null == (p = t.tags) ? true : p.guild_connections) !== true;
    if (null != h ? f = null == n ? true : n.find(e => {
        var t;
        let {
          application: n
        } = e;
        return (null == n || null == (t = n.bot) ? true : t.id) === h
      }) : null != b && (f = null == n ? true : n.find(e => {
        let {
          id: t
        } = e;
        return t === b
      })), null != f && null != f.application && null != f.name) {
      let e = f.application.id,
        t = f.name;
      [l.b.TWITCH, l.b.YOUTUBE].includes(f.type) && (t = "".concat(o.Z.get(f.type).name, " - ").concat(t));
      let n = () => {
        d.Z.setSection(m.pNK.INTEGRATIONS), s.Z.setSection(m.b4C.APPLICATION, e)
      };
      return g.intl.format(g.t.FuXsWl, {
        name: t,
        integrationNameHook: (e, t) => (0, r.jsx)(c.Z, {
          onClick: n,
          children: e
        }, t)
      })
    }
    return x ? g.intl.string(g.t.oF6FYW) : j ? g.intl.string(g.t.ZQ37tL) : g.intl.string(g.t.k5d7DA)
  })(0, t, n), [e, t, n])
}