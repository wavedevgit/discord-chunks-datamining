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
  } = e, S = null != (t = null == b ? true : b.id) ? t : null == E ? true : E.id, I = _.Z.getGuild(y), T = (0, a.e7)([m.Z], () => null != I ? m.Z.can(h.Plq.MANAGE_GUILD, I) : null), C = true, A = true, N = (0, l.LD)(y, A), P = (0, l.PL)(C, A), R = (0, a.e7)([p.default], () => null != p.default.getNewestTokenForApplication(S)), {
    isUserApp: w,
    isGuildApp: D
  } = i.useMemo(() => {
    var e, t, n, r;
    if (null == S) return {
      isGuildApp: false,
      isUserApp: false
    };
    let i = Object.values(null != (n = null == (e = N.result) ? true : e.sections) ? n : {}),
      a = Object.values(null != (r = null == (t = P.result) ? true : t.sections) ? r : {});
    return {
      isGuildApp: i.some(e => {
        var t;
        return (null == (t = e.descriptor.application) ? true : t.id) === S
      }),
      isUserApp: a.some(e => {
        var t;
        return (null == (t = e.descriptor.application) ? true : t.id) === S
      })
    }
  }, [N, P, S]);
  i.useEffect(() => {
    n(145260)
  }, []);
  let x = i.useCallback(() => {
      (null == I ? true : I.id) != null && (c.Z.open(I.id, h.pNK.INTEGRATIONS), s.Z.setSection(h.b4C.APPLICATION, S), null == v || v())
    }, [S, null == I ? true : I.id, v]),
    L = i.useCallback(() => {
      (0, f.openUserSettings)(u.n.AUTHORIZED_APPS_PANEL, {
        section: h.oAB.AUTHORIZED_APPS
      });
      let e = "";
      null != b ? e = b.name : null != E && (e = E.username), "" !== e && d.J.setState({
        searchQuery: e
      }), null == v || v()
    }, [b, v, E]);
  if (O === h.IlC.POPOUT) return null;
  let j = [];
  return D && T && j.push((0, r.jsx)(o.sNh, {
    id: "manage-server-integration",
    label: g.intl.string(g.t.IuSJT8),
    action: x
  }, "manage-server-integration")), w && R && j.push((0, r.jsx)(o.sNh, {
    id: "manage-authorized-app",
    label: g.intl.string(g.t.V8ruvz),
    action: L
  }, "manage-authorized-app")), j
}