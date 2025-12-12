/** Chunk was on 54844 **/
/** chunk id: 157759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
let x = e => {
  let {
    application: t,
    reportId: n
  } = e, [x, h] = l.useState(false), [f, v] = l.useState(false), j = (0, i.e7)([g.Z, u.Z], () => {
    var e;
    return null == (e = u.Z.getChannel(g.Z.getChannelId())) ? true : e.guild_id
  }), [y, O] = l.useState(null);
  l.useEffect(() => {
    null != y && (h(true), v(true))
  }, [y]), l.useEffect(() => {
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
  let Z = l.useCallback(() => {
      v(false), s.ZP.trackWithMetadata(_.rMx.IAR_REMOVE_APP_BUTTON_CLICKED, {
        guild_id: j,
        application_id: t.id,
        report_id: n
      }), null != j && null != y && o.Z.disableIntegration(j, y.id).catch(() => {
        a.Z.show({
          title: b.intl.string(b.t.wYqMmI),
          body: b.intl.string(b.t.A4Mnst)
        })
      })
    }, [t.id, j, y, n]),
    I = (0, i.e7)([p.Z, m.Z], () => {
      let e = m.Z.getGuild(j);
      if (null == e) returnfalse;
      let n = p.Z.can(_.Plq.MANAGE_GUILD, e),
        r = null == t.bot || p.Z.canManageUser(_.Plq.MANAGE_GUILD, t.bot.id, e);
      return n && r
    });
  return null != t && null != j && x && I ? (0, r.jsx)(d.JZ, {
    title: b.intl.string(b.t["WV/CsH"]),
    description: b.intl.string(b.t["FlcC+3"]),
    buttonText: f ? b.intl.string(b.t.aCJlq4) : b.intl.string(b.t["6I1F3i"]),
    buttonDisabled: !f,
    onButtonPress: Z,
    buttonVariant: f ? "critical-primary" : "secondary"
  }) : null
}