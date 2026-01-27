/** Chunk was on 12236 **/
/** chunk id: 117056, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk314116 = require("./314116.jsx"),
  Chunk58149 = require("./58149.js"),
  Chunk997509 = require("./997509.js"),
  Chunk632738 = require("./632738.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let m = e => {
  let {
    guildId: t,
    reportId: n
  } = e, [m, p] = r.useState(false), b = d.A.getGuild(t), _ = null != b;
  r.useEffect(() => {
    p(!_)
  }, [_]);
  let g = r.useCallback(() => {
    p(true), a.Ay.trackWithMetadata(c.HAw.IAR_LEAVE_GUILD_BUTTON_CLICKED, {
      guild_id: t,
      report_id: n
    }), s.A.leaveGuild(t)
  }, [t, n]);
  return null == b ? null : (0, l.jsx)(o.PQ, {
    title: u.intl.string(u.t.cU96ip),
    description: u.intl.formatToPlainString(u.t["26mR6/"], {
      guildName: null == b ? true : b.name
    }),
    buttonText: m ? u.intl.string(u.t["9Ak99h"]) : u.intl.string(u.t.F3qExp),
    buttonDisabled: m,
    buttonVariant: "critical-primary",
    onButtonPress: () => {
      (0, i.A)({
        title: u.intl.formatToPlainString(u.t["1GX6P/"], {
          name: b.name
        }),
        subtitle: u.intl.format(u.t.ZEXC0r, {
          name: b.name
        }),
        confirmText: u.intl.string(u.t.J2TBi3),
        onConfirm: g
      })
    }
  })
}