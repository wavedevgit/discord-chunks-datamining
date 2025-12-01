/** Chunk was on web.js **/
/** chunk id: 74469, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
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
let v = (0, Chunk313201.hQ)(),
  S = Chunk473749.memo(function(e) {
    let {
      availablePrimaryGuilds: t,
      pendingPrimaryGuildId: n,
      onChange: l
    } = e, [S, I] = (0, c.US)([o.z.GUILD_TAG_USER_PROFILE_NEW_BADGE]), T = i.useMemo(() => new Map(t.map(e => [e.id, e])), [t]), A = (0, a.e7)([m.default], () => {
      var e;
      return (0, d.Pb)(null == (e = m.default.getCurrentUser()) ? true : e.primaryGuild).guildId
    }), C = true !== n ? n : A, N = i.useMemo(() => t.reduce((e, t) => {
      var n;
      return (null == (n = t.profile) ? true : n.tag) != null && e.push({
        label: t.name,
        value: t.id
      }), e
    }, []), [t]), P = i.useCallback(e => {
      var t, n, i;
      if (null == e) return null;
      let a = T.get(e.value);
      if (null == a) return null;
      let o = null == (t = a.profile) ? true : t.tag;
      return null == o ? null : (0, r.jsx)(h.Z, {
        guildTag: o,
        guildBadge: null != (i = null == (n = a.profile) ? true : n.badge) ? i : true,
        guildId: a.id,
        guildName: e.label,
        guildIcon: a.icon,
        guildIconSize: 32
      })
    }, [T]), R = i.useCallback(e => {
      var t;
      if (null == e) return null;
      let n = T.get(e.value);
      return null == n || null == (null == (t = n.profile) ? true : t.tag) ? null : (0, r.jsx)(u.Ft, {
        guildId: n.id,
        guildName: n.name,
        guildIcon: n.icon,
        iconSize: 32,
        animate: false
      })
    }, [T]), w = i.useCallback(e => {
      var t, n, i;
      if (null == e) return null;
      let a = T.get(e.value);
      if (null == a) return null;
      let o = null == (t = a.profile) ? true : t.tag;
      return null == o ? null : (0, r.jsx)(f.m0, {
        guildId: a.id,
        guildTag: o,
        guildBadge: null != (i = null == (n = a.profile) ? true : n.badge) ? i : true,
        badgeSize: E.Gg.SIZE_16,
        textColor: "interactive-normal",
        textVariant: "text-sm/semibold"
      })
    }, [T]), D = i.useCallback(e => {
      let t = e[0];
      return null == t ? null : (0, r.jsx)(r.Fragment, {
        children: P(t)
      })
    }, [P]), x = i.useCallback(e => {
      I(g.L.TAKE_ACTION), null == l || l(e)
    }, [I, l]), L = i.useCallback(e => e === C, [C]), j = i.useCallback(e => e, []), M = i.useCallback(() => {
      I(g.L.TAKE_ACTION), null == l || l(null)
    }, [I, l]), k = i.useRef(null);
    return (0, _.Z)(k, b.Y_.GUILD_TAG), (0, r.jsxs)(p.Z, {
      title: y.intl.string(y.t.Pdd1nd),
      titleId: v,
      ref: k,
      titleIcon: S === o.z.GUILD_TAG_USER_PROFILE_NEW_BADGE && (0, r.jsx)(s.IGR, {
        text: y.intl.string(y.t.y2b7CA),
        className: O.newBadge
      }),
      children: [(0, r.jsx)(s.Text, {
        className: O.subtitle,
        variant: "text-sm/normal",
        children: y.intl.string(y.t.mlZ6Jx)
      }), (0, r.jsx)(s.PhF, {
        className: O.select,
        optionClassName: O.selectPopout,
        isSelected: L,
        options: N,
        select: x,
        renderLeading: R,
        renderTrailing: w,
        renderOptionValue: D,
        serialize: j,
        clear: M,
        clearable: null != C,
        maxVisibleItems: 8
      })]
    })
  })