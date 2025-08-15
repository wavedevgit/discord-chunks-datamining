/** Chunk was on 30202 **/
/** chunk id: 74469, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk731722 = require("./731722.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk996073 = require("./996073.js"),
  Chunk594174 = require("./594174.js"),
  Chunk840720 = require("./840720.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk999087 = require("./999087.js");
let _ = (0, Chunk313201.hQ)(),
  j = Chunk647438.memo(function(e) {
    let {
      availablePrimaryGuilds: t,
      pendingPrimaryGuildId: n,
      onChange: o
    } = e, [j, E] = (0, c.US)([a.z.GUILD_TAG_USER_PROFILE_NEW_BADGE]), C = r.useMemo(() => new Map(t.map(e => [e.id, e])), [t]), O = (0, s.e7)([p.default], () => {
      var e;
      return (0, d.Pb)(null == (e = p.default.getCurrentUser()) ? true : e.primaryGuild).guildId
    }), v = true !== n ? n : O, S = r.useMemo(() => t.reduce((e, t) => {
      var n;
      return (null == (n = t.profile) ? true : n.tag) != null && e.push({
        label: t.name,
        value: t.id
      }), e
    }, []), [t]), T = r.useCallback(e => {
      var t, n, r;
      if (null == e) return null;
      let s = C.get(e.value);
      if (null == s) return null;
      let a = null == (t = s.profile) ? true : t.tag;
      return null == a ? null : (0, i.jsx)(g.Z, {
        guildTag: a,
        guildBadge: null != (r = null == (n = s.profile) ? true : n.badge) ? r : true,
        guildId: s.id,
        guildName: e.label,
        guildIcon: s.icon,
        guildIconSize: 32
      })
    }, [C]), N = r.useCallback(e => {
      let t = e[0];
      return null == t ? null : (0, i.jsx)(i.Fragment, {
        children: T(t)
      })
    }, [T]), I = r.useCallback(e => {
      E(h.L.TAKE_ACTION), null == o || o(e)
    }, [E, o]), y = r.useCallback(e => e === v, [v]), A = r.useCallback(e => e, []), P = r.useCallback(() => {
      E(h.L.TAKE_ACTION), null == o || o(null)
    }, [E, o]), R = r.useRef(null);
    return (0, m.Z)(R, f.Y_.GUILD_TAG), (0, i.jsxs)(u.Z, {
      title: b.intl.string(b.t.Pdd1nZ),
      titleId: _,
      ref: R,
      titleIcon: j === a.z.GUILD_TAG_USER_PROFILE_NEW_BADGE && (0, i.jsx)(l.IGR, {
        text: b.intl.string(b.t.y2b7CA),
        className: x.newBadge
      }),
      children: [(0, i.jsx)(l.Text, {
        className: x.subtitle,
        variant: "text-sm/normal",
        children: b.intl.string(b.t.mlZ6Jy)
      }), (0, i.jsx)(l.PhF, {
        className: x.select,
        optionClassName: x.selectPopout,
        isSelected: y,
        options: S,
        select: I,
        renderOptionValue: N,
        renderOptionLabel: T,
        serialize: A,
        clear: P,
        clearable: null != v
      })]
    })
  })