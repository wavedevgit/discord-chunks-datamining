/** Chunk was on 12236 **/
/** chunk id: 316862, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk157559 = require("./157559.js"),
  Chunk58149 = require("./58149.js"),
  Chunk997509 = require("./997509.js"),
  Chunk794967 = require("./794967.js"),
  Chunk632738 = require("./632738.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk309010 = require("./309010.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let x = e => {
  let {
    application: t,
    reportId: n
  } = e, [x, h] = r.useState(false), [v, f] = r.useState(false), j = (0, i.bG)([b.A, u.A], () => {
    var e;
    return null == (e = u.A.getChannel(b.A.getChannelId())) ? true : e.guild_id
  }), [A, y] = r.useState(null);
  r.useEffect(() => {
    null != A && (h(true), f(true))
  }, [A]), r.useEffect(() => {
    if (null == j) return;
    let e = false;
    return (async () => {
      let n = null;
      try {
        n = await (0, d.c)(j)
      } catch (e) {}
      if (e || null == n) return;
      let l = n.find(e => {
        var n;
        return (null == (n = e.application) ? true : n.id) === t.id
      });
      null != l && y(l)
    })(), () => {
      e = true
    }
  }, [j, t.id]);
  let O = r.useCallback(() => {
      f(false), s.Ay.trackWithMetadata(_.HAw.IAR_REMOVE_APP_BUTTON_CLICKED, {
        guild_id: j,
        application_id: t.id,
        report_id: n
      }), null != j && null != A && o.A.disableIntegration(j, A.id).catch(() => {
        a.A.show({
          title: g.intl.string(g.t.wYqMmI),
          body: g.intl.string(g.t.A4Mnst)
        })
      })
    }, [t.id, j, A, n]),
    S = (0, i.bG)([p.A, m.A], () => {
      let e = m.A.getGuild(j);
      if (null == e) returnfalse;
      let n = p.A.can(_.xBc.MANAGE_GUILD, e),
        l = null == t.bot || p.A.canManageUser(_.xBc.MANAGE_GUILD, t.bot.id, e);
      return n && l
    });
  return null != t && null != j && x && S ? (0, l.jsx)(c.PQ, {
    title: g.intl.string(g.t["WV/CsH"]),
    description: g.intl.string(g.t["FlcC+3"]),
    buttonText: v ? g.intl.string(g.t.aCJlq4) : g.intl.string(g.t["6I1F3i"]),
    buttonDisabled: !v,
    onButtonPress: O,
    buttonVariant: v ? "critical-primary" : "secondary"
  }) : null
}