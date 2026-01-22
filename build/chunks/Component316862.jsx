/** Chunk was on 58652 **/
/** chunk id: 316862, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
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
let f = e => {
  let {
    application: t,
    reportId: n
  } = e, [f, v] = r.useState(false), [h, j] = r.useState(false), _ = (0, a.bG)([p.A, u.A], () => {
    var e;
    return null == (e = u.A.getChannel(p.A.getChannelId())) ? true : e.guild_id
  }), [A, y] = r.useState(null);
  r.useEffect(() => {
    null != A && (v(true), j(true))
  }, [A]), r.useEffect(() => {
    if (null == _) return;
    let e = false;
    return (async () => {
      let n = null;
      try {
        n = await (0, c.c)(_)
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
  }, [_, t.id]);
  let O = r.useCallback(() => {
      j(false), s.Ay.trackWithMetadata(x.HAw.IAR_REMOVE_APP_BUTTON_CLICKED, {
        guild_id: _,
        application_id: t.id,
        report_id: n
      }), null != _ && null != A && o.A.disableIntegration(_, A.id).catch(() => {
        i.A.show({
          title: g.intl.string(g.t.wYqMmI),
          body: g.intl.string(g.t.A4Mnst)
        })
      })
    }, [t.id, _, A, n]),
    S = (0, a.bG)([b.A, m.A], () => {
      let e = m.A.getGuild(_);
      if (null == e) returnfalse;
      let n = b.A.can(x.xBc.MANAGE_GUILD, e),
        l = null == t.bot || b.A.canManageUser(x.xBc.MANAGE_GUILD, t.bot.id, e);
      return n && l
    });
  return null != t && null != _ && f && S ? (0, l.jsx)(d.PQ, {
    title: g.intl.string(g.t["WV/CsH"]),
    description: g.intl.string(g.t["FlcC+3"]),
    buttonText: h ? g.intl.string(g.t.aCJlq4) : g.intl.string(g.t["6I1F3i"]),
    buttonDisabled: !h,
    onButtonPress: O,
    buttonVariant: h ? "critical-primary" : "secondary"
  }) : null
}