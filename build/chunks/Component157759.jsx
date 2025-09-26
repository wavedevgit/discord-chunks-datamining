/** Chunk was on 9273 **/
/** chunk id: 157759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
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
let b = e => {
  let {
    application: t,
    reportId: n
  } = e, [b, h] = i.useState(false), [x, v] = i.useState(false), j = (0, l.e7)([p.Z, u.Z], () => {
    var e;
    return null == (e = u.Z.getChannel(p.Z.getChannelId())) ? true : e.guild_id
  }), [y, O] = i.useState(null);
  i.useEffect(() => {
    null != y && (h(true), v(true))
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
  let C = i.useCallback(() => {
      v(false), o.ZP.trackWithMetadata(g.rMx.IAR_REMOVE_APP_BUTTON_CLICKED, {
        guild_id: j,
        application_id: t.id,
        report_id: n
      }), null != j && null != y && s.Z.disableIntegration(j, y.id).catch(() => {
        a.Z.show({
          title: f.intl.string(f.t.wYqMmJ),
          body: f.intl.string(f.t.A4Mnsr)
        })
      })
    }, [t.id, j, y, n]),
    I = (0, l.e7)([m.Z, _.Z], () => {
      let e = _.Z.getGuild(j);
      if (null == e) returnfalse;
      let n = m.Z.can(g.Plq.MANAGE_GUILD, e),
        r = null == t.bot || m.Z.canManageUser(g.Plq.MANAGE_GUILD, t.bot.id, e);
      return n && r
    });
  return null != t && null != j && b && I ? (0, r.jsx)(d.JZ, {
    title: f.intl.string(f.t["WV/CsL"]),
    description: f.intl.string(f.t["FlcC+/"]),
    buttonText: x ? f.intl.string(f.t.aCJlq6) : f.intl.string(f.t["6I1F3t"]),
    buttonDisabled: !x,
    onButtonPress: C,
    buttonVariant: x ? "critical-primary" : "secondary"
  }) : null
}