/** Chunk was on 9536 **/
/** chunk id: 852898, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk951284 = require("./951284.js"),
  Chunk442837 = require("./442837.js"),
  Chunk139387 = require("./139387.js"),
  Chunk726542 = require("./726542.js"),
  Chunk690221 = require("./690221.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function m(e, t) {
  let n = (0, a.e7)([u.Z], () => u.Z.getProps().integrations);
  return i.useMemo(() => (function(e, t, n) {
    var i, a, u, m;
    let b;
    if (!t.managed) return null;
    let p = null == (i = t.tags) ? true : i.bot_id,
      h = null == (a = t.tags) ? true : a.integration_id,
      x = (null == (u = t.tags) ? true : u.premium_subscriber) !== true,
      j = (null == (m = t.tags) ? true : m.guild_connections) !== true;
    if (null != p ? b = null == n ? true : n.find(e => {
        var t;
        let {
          application: n
        } = e;
        return (null == n || null == (t = n.bot) ? true : t.id) === p
      }) : null != h && (b = null == n ? true : n.find(e => {
        let {
          id: t
        } = e;
        return t === h
      })), null != b && null != b.application && null != b.name) {
      let e = b.application.id,
        t = b.name;
      [l.b.TWITCH, l.b.YOUTUBE].includes(b.type) && (t = "".concat(o.Z.get(b.type).name, " - ").concat(t));
      let n = () => {
        d.Z.setSection(g.pNK.INTEGRATIONS), s.Z.setSection(g.b4C.APPLICATION, e)
      };
      return f.intl.format(f.t.FuXsWm, {
        name: t,
        integrationNameHook: (e, t) => (0, r.jsx)(c.Z, {
          onClick: n,
          children: e
        }, t)
      })
    }
    return x ? f.intl.string(f.t.oF6FYT) : j ? f.intl.string(f.t.ZQ37tH) : f.intl.string(f.t.k5d7DJ)
  })(0, t, n), [e, t, n])
}