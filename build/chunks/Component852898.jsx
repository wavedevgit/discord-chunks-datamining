/** Chunk was on 54052 **/
/** chunk id: 852898, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk951284 = require("./951284.js"),
  Chunk442837 = require("./442837.js"),
  Chunk139387 = require("./139387.js"),
  Chunk726542 = require("./726542.js"),
  Chunk690221 = require("./690221.jsx"),
  Chunk232062 = require("./232062.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function f(e, t) {
  let n = (0, a.e7)([m.Z], () => m.Z.getProps().integrations);
  return i.useMemo(() => (function(e, t, n) {
    var i, a, m, f;
    let h;
    if (!t.managed) return null;
    let b = null == (i = t.tags) ? true : i.bot_id,
      x = null == (a = t.tags) ? true : a.integration_id,
      j = (null == (m = t.tags) ? true : m.premium_subscriber) !== true,
      _ = (null == (f = t.tags) ? true : f.guild_connections) !== true;
    if (null != b ? h = null == n ? true : n.find(e => {
        var t;
        let {
          application: n
        } = e;
        return (null == n || null == (t = n.bot) ? true : t.id) === b
      }) : null != x && (h = null == n ? true : n.find(e => {
        let {
          id: t
        } = e;
        return t === x
      })), null != h && null != h.application && null != h.name) {
      let e = h.application.id,
        t = h.name;
      [l.b.TWITCH, l.b.YOUTUBE].includes(h.type) && (t = "".concat(o.Z.get(h.type).name, " - ").concat(t));
      let n = () => {
        u.Z.setSection(g.pNK.INTEGRATIONS), s.Z.setSection(g.b4C.APPLICATION, e)
      };
      return p.intl.format(p.t.FuXsWl, {
        name: t,
        integrationNameHook: (e, t) => (0, r.jsx)(c.Z, {
          onClick: n,
          children: e
        }, t)
      })
    }
    return j ? (0, d.Tq)(e, "useManagedRoleWarningText") ? p.intl.string(p.t.NqRten) : p.intl.string(p.t.oF6FYW) : _ ? p.intl.string(p.t.ZQ37tL) : p.intl.string(p.t.k5d7DA)
  })(e, t, n), [e, t, n])
}