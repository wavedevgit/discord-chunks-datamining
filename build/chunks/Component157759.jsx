/** Chunk was on 54844 **/
/** chunk id: 157759, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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
  } = e, [h, f] = l.useState(false), [v, j] = l.useState(false), y = (0, i.e7)([x.Z, m.Z], () => {
    var e;
    return null == (e = m.Z.getChannel(x.Z.getChannelId())) ? true : e.guild_id
  }), [O, Z] = l.useState(null);
  l.useEffect(() => {
    null != O && (f(true), j(true))
  }, [O]), l.useEffect(() => {
    if (null == y) return;
    let e = false;
    return (async () => {
      let n = null;
      try {
        n = await (0, d.i)(y)
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
  }, [y, t.id]);
  let I = l.useCallback(() => {
      j(false), o.ZP.trackWithMetadata(_.rMx.IAR_REMOVE_APP_BUTTON_CLICKED, {
        guild_id: y,
        application_id: t.id,
        report_id: n
      }), null != y && null != O && c.Z.disableIntegration(y, O.id).catch(() => {
        s.Z.show({
          title: b.intl.string(b.t.wYqMmJ),
          body: b.intl.string(b.t.A4Mnsr)
        })
      })
    }, [t.id, y, O, n]),
    C = (0, i.e7)([g.Z, p.Z], () => {
      let e = p.Z.getGuild(y);
      if (null == e) returnfalse;
      let n = g.Z.can(_.Plq.MANAGE_GUILD, e),
        r = null == t.bot || g.Z.canManageUser(_.Plq.MANAGE_GUILD, t.bot.id, e);
      return n && r
    });
  return null != t && null != y && h && C ? (0, r.jsx)(u.ZP, {
    title: b.intl.string(b.t["WV/CsL"]),
    description: b.intl.string(b.t["FlcC+/"]),
    buttonText: v ? b.intl.string(b.t.aCJlq6) : b.intl.string(b.t["6I1F3t"]),
    buttonDisabled: !v,
    buttonColor: v ? a.zx.Colors.RED : a.zx.Colors.WHITE,
    buttonLook: v ? a.zx.Looks.FILLED : a.zx.Looks.LINK,
    onButtonPress: I
  }) : null
}