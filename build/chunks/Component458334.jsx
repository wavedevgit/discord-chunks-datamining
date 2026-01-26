/** Chunk was on 39048 **/
/** chunk id: 458334, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk125744 = require("./125744.js"),
  Chunk311907 = require("./311907.js"),
  Chunk282956 = require("./282956.js"),
  Chunk573648 = require("./573648.js"),
  Chunk95035 = require("./95035.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk555337 = require("./555337.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function p(e, t) {
  let n = (0, s.bG)([u.A], () => u.A.getProps().integrations);
  return i.useMemo(() => (function(e, t, n) {
    var i, s, u, p;
    let f;
    if (!t.managed) return null;
    let h = null == (i = t.tags) ? true : i.bot_id,
      b = null == (s = t.tags) ? true : s.integration_id,
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
      [l.s.TWITCH, l.s.YOUTUBE].includes(f.type) && (t = "".concat(o.A.get(f.type).name, " - ").concat(t));
      let n = () => {
        d.A.setSection(g.BEX.INTEGRATIONS), a.A.setSection(g.wLn.APPLICATION, e)
      };
      return m.intl.format(m.t.FuXsWm, {
        name: t,
        integrationNameHook: (e, t) => (0, r.jsx)(c.A, {
          onClick: n,
          children: e
        }, t)
      })
    }
    return x ? m.intl.string(m.t.oF6FYT) : j ? m.intl.string(m.t.ZQ37tH) : m.intl.string(m.t.k5d7DJ)
  })(0, t, n), [e, t, n])
}