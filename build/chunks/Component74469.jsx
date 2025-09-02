/** Chunk was on web.js **/
/** chunk id: 74469, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
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
let b = (0, Chunk313201.hQ)(),
  y = Chunk647438.memo(function(e) {
    let {
      availablePrimaryGuilds: t,
      pendingPrimaryGuildId: n,
      onChange: l
    } = e, [y, O] = (0, c.US)([o.z.GUILD_TAG_USER_PROFILE_NEW_BADGE]), v = i.useMemo(() => new Map(t.map(e => [e.id, e])), [t]), I = (0, a.e7)([_.default], () => {
      var e;
      return (0, u.Pb)(null == (e = _.default.getCurrentUser()) ? true : e.primaryGuild).guildId
    }), S = true !== n ? n : I, T = i.useMemo(() => t.reduce((e, t) => {
      var n;
      return (null == (n = t.profile) ? true : n.tag) != null && e.push({
        label: t.name,
        value: t.id
      }), e
    }, []), [t]), A = i.useCallback(e => {
      var t, n, i;
      if (null == e) return null;
      let a = v.get(e.value);
      if (null == a) return null;
      let o = null == (t = a.profile) ? true : t.tag;
      return null == o ? null : (0, r.jsx)(p.Z, {
        guildTag: o,
        guildBadge: null != (i = null == (n = a.profile) ? true : n.badge) ? i : true,
        guildId: a.id,
        guildName: e.label,
        guildIcon: a.icon,
        guildIconSize: 32
      })
    }, [v]), C = i.useCallback(e => {
      let t = e[0];
      return null == t ? null : (0, r.jsx)(r.Fragment, {
        children: A(t)
      })
    }, [A]), N = i.useCallback(e => {
      O(h.L.TAKE_ACTION), null == l || l(e)
    }, [O, l]), R = i.useCallback(e => e === S, [S]), P = i.useCallback(e => e, []), w = i.useCallback(() => {
      O(h.L.TAKE_ACTION), null == l || l(null)
    }, [O, l]), D = i.useRef(null);
    return (0, f.Z)(D, m.Y_.GUILD_TAG), (0, r.jsxs)(d.Z, {
      title: g.intl.string(g.t.Pdd1nZ),
      titleId: b,
      ref: D,
      titleIcon: y === o.z.GUILD_TAG_USER_PROFILE_NEW_BADGE && (0, r.jsx)(s.IGR, {
        text: g.intl.string(g.t.y2b7CA),
        className: E.newBadge
      }),
      children: [(0, r.jsx)(s.Text, {
        className: E.subtitle,
        variant: "text-sm/normal",
        children: g.intl.string(g.t.mlZ6Jy)
      }), (0, r.jsx)(s.PhF, {
        className: E.select,
        optionClassName: E.selectPopout,
        isSelected: R,
        options: T,
        select: N,
        renderOptionValue: C,
        renderOptionLabel: A,
        serialize: P,
        clear: w,
        clearable: null != S
      })]
    })
  })