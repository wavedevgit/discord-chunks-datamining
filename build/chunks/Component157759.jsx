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
  } = e, [x, b] = i.useState(false), [f, v] = i.useState(false), j = (0, l.e7)([g.Z, u.Z], () => {
    var e;
    return null == (e = u.Z.getChannel(g.Z.getChannelId())) ? true : e.guild_id
  }), [y, Z] = i.useState(null);
  i.useEffect(() => {
    null != y && (b(true), v(true))
  }, [y]), i.useEffect(() => {
    if (null == j) return;
    let e = false;
    return (async () => {
      let n = null;
      try {
        n = await (0, d.i)(j)
      } catch (e) {}
      if (e || null == n) return;
      let r = n.find(e => {
        var n;
        return (null == (n = e.application) ? true : n.id) === t.id
      });
      null != r && Z(r)
    })(), () => {
      e = true
    }
  }, [j, t.id]);
  let O = i.useCallback(() => {
      v(false), s.ZP.trackWithMetadata(_.rMx.IAR_REMOVE_APP_BUTTON_CLICKED, {
        guild_id: j,
        application_id: t.id,
        report_id: n
      }), null != j && null != y && o.Z.disableIntegration(j, y.id).catch(() => {
        a.Z.show({
          title: h.intl.string(h.t.wYqMmI),
          body: h.intl.string(h.t.A4Mnst)
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
  return null != t && null != j && x && I ? (0, r.jsx)(c.JZ, {
    title: h.intl.string(h.t["WV/CsH"]),
    description: h.intl.string(h.t["FlcC+3"]),
    buttonText: f ? h.intl.string(h.t.aCJlq4) : h.intl.string(h.t["6I1F3i"]),
    buttonDisabled: !f,
    onButtonPress: O,
    buttonVariant: f ? "critical-primary" : "secondary"
  }) : null
}