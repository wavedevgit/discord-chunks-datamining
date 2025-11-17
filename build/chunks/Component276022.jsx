/** Chunk was on web.js **/
/** chunk id: 276022, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk139387 = require("./139387.js"),
  Chunk213459 = require("./213459.js"),
  Chunk434404 = require("./434404.js"),
  Chunk313789 = require("./313789.js"),
  Chunk795594 = require("./795594.jsx"),
  Chunk518596 = require("./518596.jsx"),
  Chunk881998 = require("./881998.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function E(e) {
  var t;
  let {
    user: E,
    application: b,
    guildId: y,
    context: O,
    onItemClick: v
  } = e, I = null != (t = null == b ? true : b.id) ? t : null == E ? true : E.id, T = p.Z.getGuild(y), S = (0, a.e7)([h.Z], () => null != T ? h.Z.can(m.Plq.MANAGE_GUILD, T) : null), A = true, C = true, N = (0, l.LD)(y, C), R = (0, l.PL)(A, C), P = (0, a.e7)([_.default], () => null != _.default.getNewestTokenForApplication(I)), {
    isUserApp: D,
    isGuildApp: w
  } = i.useMemo(() => {
    var e, t, n, r;
    if (null == I) return {
      isGuildApp: false,
      isUserApp: false
    };
    let i = Object.values(null != (n = null == (e = N.result) ? true : e.sections) ? n : {}),
      a = Object.values(null != (r = null == (t = R.result) ? true : t.sections) ? r : {});
    return {
      isGuildApp: i.some(e => {
        var t;
        return (null == (t = e.descriptor.application) ? true : t.id) === I
      }),
      isUserApp: a.some(e => {
        var t;
        return (null == (t = e.descriptor.application) ? true : t.id) === I
      })
    }
  }, [N, R, I]);
  i.useEffect(() => {
    n(145260)
  }, []);
  let x = i.useCallback(() => {
      (null == T ? true : T.id) != null && (c.Z.open(T.id, m.pNK.INTEGRATIONS), s.Z.setSection(m.b4C.APPLICATION, I), null == v || v())
    }, [I, null == T ? true : T.id, v]),
    L = i.useCallback(() => {
      (0, f.openUserSettings)(u.n.AUTHORIZED_APPS_PANEL, {
        section: m.oAB.AUTHORIZED_APPS
      });
      let e = "";
      null != b ? e = b.name : null != E && (e = E.username), "" !== e && d.J.setState({
        searchQuery: e
      }), null == v || v()
    }, [b, v, E]);
  if (O === m.IlC.POPOUT) return null;
  let M = [];
  return w && S && M.push((0, r.jsx)(o.sNh, {
    id: "manage-server-integration",
    label: g.intl.string(g.t.IuSJT8),
    action: x
  }, "manage-server-integration")), D && P && M.push((0, r.jsx)(o.sNh, {
    id: "manage-authorized-app",
    label: g.intl.string(g.t.V8ruvz),
    action: L
  }, "manage-authorized-app")), M
}