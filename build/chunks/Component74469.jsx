/** Chunk was on web.js **/
/** chunk id: 74469, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk305347 = require("./305347.jsx"),
  Chunk731722 = require("./731722.js"),
  Chunk172751 = require("./172751.jsx"),
  Chunk993413 = require("./993413.jsx"),
  Chunk996073 = require("./996073.js"),
  Chunk594174 = require("./594174.js"),
  Chunk840720 = require("./840720.jsx"),
  Chunk131085 = require("./131085.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk149782 = require("./149782.js");
let y = (0, Chunk313201.hQ)(),
  O = Chunk473749.memo(function(e) {
    let {
      availablePrimaryGuilds: t,
      pendingPrimaryGuildId: n,
      onChange: l
    } = e, O = i.useMemo(() => new Map(t.map(e => [e.id, e])), [t]), v = (0, a.e7)([_.default], () => {
      var e;
      return (0, u.Pb)(null == (e = _.default.getCurrentUser()) ? true : e.primaryGuild).guildId
    }), S = true !== n ? n : v, I = i.useMemo(() => t.reduce((e, t) => {
      var n;
      return (null == (n = t.profile) ? true : n.tag) != null && e.push({
        label: t.name,
        value: t.id
      }), e
    }, []), [t]), T = i.useCallback(e => {
      var t, n, i;
      if (null == e) return null;
      let a = O.get(e.value);
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
    }, [O]), C = i.useCallback(e => {
      var t;
      if (null == e) return null;
      let n = O.get(e.value);
      return null == n || null == (null == (t = n.profile) ? true : t.tag) ? null : (0, r.jsx)(c.Ft, {
        guildId: n.id,
        guildName: n.name,
        guildIcon: n.icon,
        iconSize: 32,
        animate: false
      })
    }, [O]), A = i.useCallback(e => {
      var t, n, i;
      if (null == e) return null;
      let a = O.get(e.value);
      if (null == a) return null;
      let o = null == (t = a.profile) ? true : t.tag;
      return null == o ? null : (0, r.jsx)(d.m0, {
        guildId: a.id,
        guildTag: o,
        guildBadge: null != (i = null == (n = a.profile) ? true : n.badge) ? i : true,
        badgeSize: m.Gg.SIZE_16,
        textColor: "interactive-text-default",
        textVariant: "text-sm/semibold"
      })
    }, [O]), N = i.useCallback(e => {
      let t = e[0];
      return null == t ? null : (0, r.jsx)(r.Fragment, {
        children: T(t)
      })
    }, [T]), P = i.useCallback(e => {
      null == l || l(e)
    }, [l]), w = i.useCallback(e => e === S, [S]), R = i.useCallback(e => e, []), D = i.useCallback(() => {
      null == l || l(null)
    }, [l]), x = i.useRef(null);
    return (0, p.Z)(x, g.Y_.GUILD_TAG), (0, r.jsxs)(f.Z, {
      title: E.intl.string(E.t.Pdd1nd),
      titleId: y,
      ref: x,
      children: [(0, r.jsx)(s.Text, {
        className: b.subtitle,
        variant: "text-sm/normal",
        children: E.intl.string(E.t.mlZ6Jx)
      }), (0, r.jsx)(o.B6, {
        className: b.select,
        optionClassName: b.selectPopout,
        isSelected: w,
        options: I,
        select: P,
        renderLeading: C,
        renderTrailing: A,
        renderOptionValue: N,
        serialize: R,
        clear: D,
        clearable: null != S,
        maxVisibleItems: 8
      })]
    })
  })