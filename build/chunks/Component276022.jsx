/** Chunk was on web.js **/
/** chunk id: 276022, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk139387 = require("./139387.js"),
  Chunk230711 = require("./230711.js"),
  Chunk213459 = require("./213459.js"),
  Chunk434404 = require("./434404.js"),
  Chunk795594 = require("./795594.jsx"),
  Chunk881998 = require("./881998.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  var t;
  let {
    user: g,
    application: E,
    guildId: b,
    context: y,
    onItemClick: O
  } = e, v = null != (t = null == E ? true : E.id) ? t : null == g ? true : g.id, I = _.Z.getGuild(b), S = (0, a.e7)([p.Z], () => null != I ? p.Z.can(h.Plq.MANAGE_GUILD, I) : null), T = true, A = true, C = (0, c.LD)(b, A), N = (0, c.PL)(T, A), R = (0, a.e7)([f.Z], () => null != f.Z.getNewestTokenForApplication(v)), {
    isUserApp: P,
    isGuildApp: w
  } = i.useMemo(() => {
    var e, t, n, r;
    if (null == v) return {
      isGuildApp: false,
      isUserApp: false
    };
    let i = Object.values(null != (n = null == (e = C.result) ? true : e.sections) ? n : {}),
      a = Object.values(null != (r = null == (t = N.result) ? true : t.sections) ? r : {});
    return {
      isGuildApp: i.some(e => {
        var t;
        return (null == (t = e.descriptor.application) ? true : t.id) === v
      }),
      isUserApp: a.some(e => {
        var t;
        return (null == (t = e.descriptor.application) ? true : t.id) === v
      })
    }
  }, [C, N, v]);
  i.useEffect(() => {
    n(360606)
  }, []);
  let D = i.useCallback(() => {
      (null == I ? true : I.id) != null && (u.Z.open(I.id, h.pNK.INTEGRATIONS), s.Z.setSection(h.b4C.APPLICATION, v), null == O || O())
    }, [v, null == I ? true : I.id, O]),
    x = i.useCallback(() => {
      l.Z.open(h.oAB.AUTHORIZED_APPS);
      let e = "";
      null != E ? e = E.name : null != g && (e = g.username), "" !== e && d.J.setState({
        searchQuery: e
      }), null == O || O()
    }, [E, O, g]);
  if (y === h.IlC.POPOUT) return null;
  let L = [];
  return w && S && L.push((0, r.jsx)(o.sNh, {
    id: "manage-server-integration",
    label: m.intl.string(m.t.IuSJT0),
    action: D
  }, "manage-server-integration")), P && R && L.push((0, r.jsx)(o.sNh, {
    id: "manage-authorized-app",
    label: m.intl.string(m.t.V8ruv7),
    action: x
  }, "manage-authorized-app")), L
}