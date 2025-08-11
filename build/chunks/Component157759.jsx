/** Chunk was on 54844 **/
/** chunk id: 157759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  } = e, [h, x] = i.useState(false), [f, v] = i.useState(false), j = (0, l.e7)([g.Z, u.Z], () => {
    var e;
    return null == (e = u.Z.getChannel(g.Z.getChannelId())) ? true : e.guild_id
  }), [y, O] = i.useState(null);
  i.useEffect(() => {
    null != y && (x(true), v(true))
  }, [y]), i.useEffect(() => {
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
      null != r && O(r)
    })(), () => {
      e = true
    }
  }, [j, t.id]);
  let Z = i.useCallback(() => {
      v(false), s.ZP.trackWithMetadata(_.rMx.IAR_REMOVE_APP_BUTTON_CLICKED, {
        guild_id: j,
        application_id: t.id,
        report_id: n
      }), null != j && null != y && o.Z.disableIntegration(j, y.id).catch(() => {
        a.Z.show({
          title: b.intl.string(b.t.wYqMmJ),
          body: b.intl.string(b.t.A4Mnsr)
        })
      })
    }, [t.id, j, y, n]),
    I = (0, l.e7)([p.Z, m.Z], () => {
      let e = m.Z.getGuild(j);
      if (null == e) returnfalse;
      let n = p.Z.can(_.Plq.MANAGE_GUILD, e),
        r = null == t.bot || p.Z.canManageUser(_.Plq.MANAGE_GUILD, t.bot.id, e);
      return n && r
    });
  return null != t && null != j && h && I ? (0, r.jsx)(d.JZ, {
    title: b.intl.string(b.t["WV/CsL"]),
    description: b.intl.string(b.t["FlcC+/"]),
    buttonText: f ? b.intl.string(b.t.aCJlq6) : b.intl.string(b.t["6I1F3t"]),
    buttonDisabled: !f,
    onButtonPress: Z,
    buttonVariant: f ? "critical-primary" : "secondary"
  }) : null
}