/** Chunk was on 75708 **/
/** chunk id: 818420, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk906732 = require("./906732.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk18438 = require("./18438.js"),
  Chunk158947 = require("./158947.jsx"),
  Chunk318110 = require("./318110.jsx"),
  Chunk150039 = require("./150039.js"),
  Chunk993413 = require("./993413.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk388898 = require("./388898.js");

function x(e) {
  let {
    user: t,
    guild: n,
    titleIcon: x
  } = e, {
    analyticsLocations: _
  } = (0, o.ZP)(), j = null != n, {
    userNameplate: E,
    guildNameplate: C,
    pendingNameplate: O,
    pendingErrors: v
  } = (0, p.Zx)(t, null == n ? true : n.id), S = [s.z.NAMEPLATE_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE], [T, I] = (0, c.US)(S), N = T === s.z.NAMEPLATE_USER_SETTINGS_PROFILE_PAGE_NEW_BADGE, y = r.useCallback(() => {
    I(h.L.TAKE_ACTION), (0, m.f)({
      analyticsLocations: _,
      guildId: null == n ? true : n.id
    })
  }, [_, I, null == n ? true : n.id]), A = r.useCallback(() => {
    (null == n ? true : n.id) != null ? (0, d.RH)(null) : (0, l.Rx)(null)
  }, [null == n ? true : n.id]);
  return <g.Z title={f.intl.string(f.t.x5CoXV)} titleIcon={N ? (0, i.jsx)(u.Z, {
      className: b.newBadge
    }) : x} errors={v}><div className={b.section}>{<a.zxk variant={"primary"} size={"sm"} text={f.intl.string(f.t.BwdeMz)} onClick={y} />}{(true === O ? (j ? C : E) != null : null != O) && <a.zxk variant={"secondary"} size={"sm"} text={f.intl.string(f.t["9zwziY"])} onClick={A} />}</div></g.Z>
}