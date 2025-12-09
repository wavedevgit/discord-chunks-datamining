/** Chunk was on web.js **/
/** chunk id: 74469, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk305347 = require("./305347.jsx"),
  Chunk731722 = require("./731722.js"),
  Chunk172751 = require("./172751.jsx"),
  Chunk993413 = require("./993413.jsx"),
  Chunk996073 = require("./996073.js"),
  Chunk594174 = require("./594174.js"),
  Chunk840720 = require("./840720.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk131085 = require("./131085.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk999087 = require("./999087.js");
let S = (0, Chunk313201.hQ)(),
  I = Chunk473749.memo(function(e) {
    let {
      availablePrimaryGuilds: t,
      pendingPrimaryGuildId: n,
      onChange: c
    } = e, [I, T] = (0, u.US)([o.z.GUILD_TAG_USER_PROFILE_NEW_BADGE]), A = i.useMemo(() => new Map(t.map(e => [e.id, e])), [t]), C = (0, a.e7)([h.default], () => {
      var e;
      return (0, f.Pb)(null == (e = h.default.getCurrentUser()) ? true : e.primaryGuild).guildId
    }), N = true !== n ? n : C, P = i.useMemo(() => t.reduce((e, t) => {
      var n;
      return (null == (n = t.profile) ? true : n.tag) != null && e.push({
        label: t.name,
        value: t.id
      }), e
    }, []), [t]), R = i.useCallback(e => {
      var t, n, i;
      if (null == e) return null;
      let a = A.get(e.value);
      if (null == a) return null;
      let o = null == (t = a.profile) ? true : t.tag;
      return null == o ? null : (0, r.jsx)(g.Z, {
        guildTag: o,
        guildBadge: null != (i = null == (n = a.profile) ? true : n.badge) ? i : true,
        guildId: a.id,
        guildName: e.label,
        guildIcon: a.icon,
        guildIconSize: 32
      })
    }, [A]), D = i.useCallback(e => {
      var t;
      if (null == e) return null;
      let n = A.get(e.value);
      return null == n || null == (null == (t = n.profile) ? true : t.tag) ? null : (0, r.jsx)(d.Ft, {
        guildId: n.id,
        guildName: n.name,
        guildIcon: n.icon,
        iconSize: 32,
        animate: false
      })
    }, [A]), w = i.useCallback(e => {
      var t, n, i;
      if (null == e) return null;
      let a = A.get(e.value);
      if (null == a) return null;
      let o = null == (t = a.profile) ? true : t.tag;
      return null == o ? null : (0, r.jsx)(p.m0, {
        guildId: a.id,
        guildTag: o,
        guildBadge: null != (i = null == (n = a.profile) ? true : n.badge) ? i : true,
        badgeSize: b.Gg.SIZE_16,
        textColor: "interactive-normal",
        textVariant: "text-sm/semibold"
      })
    }, [A]), x = i.useCallback(e => {
      let t = e[0];
      return null == t ? null : (0, r.jsx)(r.Fragment, {
        children: R(t)
      })
    }, [R]), L = i.useCallback(e => {
      T(E.L.TAKE_ACTION), null == c || c(e)
    }, [T, c]), j = i.useCallback(e => e === N, [N]), M = i.useCallback(e => e, []), k = i.useCallback(() => {
      T(E.L.TAKE_ACTION), null == c || c(null)
    }, [T, c]), U = i.useRef(null);
    return (0, m.Z)(U, y.Y_.GUILD_TAG), (0, r.jsxs)(_.Z, {
      title: O.intl.string(O.t.Pdd1nd),
      titleId: S,
      ref: U,
      titleIcon: I === o.z.GUILD_TAG_USER_PROFILE_NEW_BADGE && (0, r.jsx)(l.IGR, {
        text: O.intl.string(O.t.y2b7CA),
        className: v.newBadge
      }),
      children: [(0, r.jsx)(l.Text, {
        className: v.subtitle,
        variant: "text-sm/normal",
        children: O.intl.string(O.t.mlZ6Jx)
      }), (0, r.jsx)(s.B6, {
        className: v.select,
        optionClassName: v.selectPopout,
        isSelected: j,
        options: P,
        select: L,
        renderLeading: D,
        renderTrailing: w,
        renderOptionValue: x,
        serialize: M,
        clear: k,
        clearable: null != N,
        maxVisibleItems: 8
      })]
    })
  })