/** Chunk was on 54844 **/
/** chunk id: 266080, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk248514 = require("./248514.jsx"),
  Chunk367907 = require("./367907.js"),
  Chunk434404 = require("./434404.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let m = e => {
  let {
    guildId: t,
    reportId: n
  } = e, [m, p] = i.useState(false), g = d.Z.getGuild(t), _ = null != g;
  i.useEffect(() => {
    p(!_)
  }, [_]);
  let h = i.useCallback(() => {
    p(true), a.ZP.trackWithMetadata(c.rMx.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
      guild_id: t,
      report_id: n
    }), s.Z.leaveGuild(t)
  }, [t, n]);
  return null == g ? null : (0, r.jsx)(o.JZ, {
    title: u.intl.string(u.t.cU96ip),
    description: u.intl.formatToPlainString(u.t["26mR6/"], {
      guildName: null == g ? true : g.name
    }),
    buttonText: m ? u.intl.string(u.t["9Ak99h"]) : u.intl.string(u.t.F3qExp),
    buttonDisabled: m,
    buttonVariant: "critical-primary",
    onButtonPress: () => {
      (0, l.Z)({
        title: u.intl.formatToPlainString(u.t["1GX6P/"], {
          name: g.name
        }),
        subtitle: u.intl.format(u.t.ZEXC0r, {
          name: g.name
        }),
        confirmText: u.intl.string(u.t.J2TBi3),
        onConfirm: h
      })
    }
  })
}