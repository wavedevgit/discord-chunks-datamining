/** Chunk was on 59727 **/
/** chunk id: 157759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk668781 = require("./668781.js"),
  Chunk367907 = require("./367907.js"),
  Chunk434404 = require("./434404.js"),
  Chunk330010 = require("./330010.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let h = e => {
  let {
    application: t,
    reportId: n
  } = e, [h, x] = a.useState(false), [f, v] = a.useState(false), j = (0, i.e7)([_.Z, u.Z], () => {
    var e;
    return null == (e = u.Z.getChannel(_.Z.getChannelId())) ? true : e.guild_id
  }), [y, C] = a.useState(null);
  a.useEffect(() => {
    null != y && (x(true), v(true))
  }, [y]), a.useEffect(() => {
    if (null == j) return;
    let e = false;
    return (async () => {
      let n = null;
      try {
        n = await (0, c.i)(j)
      } catch (e) {}
      if (e || null == n) return;
      let r = n.find(e => {
        var n;
        return (null == (n = e.application) ? true : n.id) === t.id
      });
      null != r && C(r)
    })(), () => {
      e = true
    }
  }, [j, t.id]);
  let O = a.useCallback(() => {
      v(false), o.ZP.trackWithMetadata(g.rMx.IAR_REMOVE_APP_BUTTON_CLICKED, {
        guild_id: j,
        application_id: t.id,
        report_id: n
      }), null != j && null != y && s.Z.disableIntegration(j, y.id).catch(() => {
        l.Z.show({
          title: b.intl.string(b.t.wYqMmJ),
          body: b.intl.string(b.t.A4Mnsr)
        })
      })
    }, [t.id, j, y, n]),
    I = (0, i.e7)([p.Z, m.Z], () => {
      let e = m.Z.getGuild(j);
      if (null == e) returnfalse;
      let n = p.Z.can(g.Plq.MANAGE_GUILD, e),
        r = null == t.bot || p.Z.canManageUser(g.Plq.MANAGE_GUILD, t.bot.id, e);
      return n && r
    });
  return null != t && null != j && h && I ? (0, r.jsx)(d.JZ, {
    title: b.intl.string(b.t["WV/CsL"]),
    description: b.intl.string(b.t["FlcC+/"]),
    buttonText: f ? b.intl.string(b.t.aCJlq6) : b.intl.string(b.t["6I1F3t"]),
    buttonDisabled: !f,
    onButtonPress: O,
    buttonVariant: f ? "critical-primary" : "secondary"
  }) : null
}