/** Chunk was on web.js **/
/** chunk id: 700210, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk282956 = require("./282956.js"),
  Chunk264322 = require("./264322.js"),
  Chunk997509 = require("./997509.js"),
  Chunk780964 = require("./780964.js"),
  Chunk891912 = require("./891912.jsx"),
  Chunk840065 = require("./840065.jsx"),
  Chunk546183 = require("./546183.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function E(e) {
  var t;
  let {
    user: E,
    application: y,
    guildId: b,
    context: O,
    onItemClick: v
  } = e, A = null != (t = null == y ? true : y.id) ? t : null == E ? true : E.id, I = _.A.getGuild(b), S = (0, a.bG)([h.A], () => null != I ? h.A.can(m.xBc.MANAGE_GUILD, I) : null), T = true, C = true, N = (0, l.ON)(b, C), w = (0, l.A4)(T, C), R = (0, a.bG)([p.default], () => null != p.default.getNewestTokenForApplication(A)), {
    isUserApp: P,
    isGuildApp: D
  } = i.useMemo(() => {
    var e, t, n, r;
    if (null == A) return {
      isGuildApp: false,
      isUserApp: false
    };
    let i = Object.values(null != (e = null == (n = N.result) ? true : n.sections) ? e : {}),
      a = Object.values(null != (t = null == (r = w.result) ? true : r.sections) ? t : {});
    return {
      isGuildApp: i.some(e => {
        var t;
        return (null == (t = e.descriptor.application) ? true : t.id) === A
      }),
      isUserApp: a.some(e => {
        var t;
        return (null == (t = e.descriptor.application) ? true : t.id) === A
      })
    }
  }, [N, w, A]);
  i.useEffect(() => {
    n(53656)
  }, []);
  let L = i.useCallback(() => {
      (null == I ? true : I.id) != null && (c.A.open(I.id, m.BEX.INTEGRATIONS), s.A.setSection(m.wLn.APPLICATION, A), null == v || v())
    }, [A, null == I ? true : I.id, v]),
    x = i.useCallback(() => {
      (0, f.openUserSettings)(u.X.AUTHORIZED_APPS_PANEL, {
        section: m.nc_.AUTHORIZED_APPS
      });
      let e = "";
      null != y ? e = y.name : null != E && (e = E.username), "" !== e && d.iU.setState({
        searchQuery: e
      }), null == v || v()
    }, [y, v, E]);
  if (O === m.BRT.POPOUT) return null;
  let M = [];
  return D && S && M.push((0, r.jsx)(o.Drp, {
    id: "manage-server-integration",
    label: g.intl.string(g.t.IuSJT8),
    action: L
  }, "manage-server-integration")), P && R && M.push((0, r.jsx)(o.Drp, {
    id: "manage-authorized-app",
    label: g.intl.string(g.t.V8ruvz),
    action: x
  }, "manage-authorized-app")), M
}