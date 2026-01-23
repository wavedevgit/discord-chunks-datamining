/** Chunk was on web.js **/
/** chunk id: 185955, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O
}), require("./896048.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk843282 = require("./843282.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk145497 = require("./145497.jsx"),
  Chunk685073 = require("./685073.js"),
  Chunk534400 = require("./534400.jsx"),
  Chunk128450 = require("./128450.jsx"),
  Chunk193658 = require("./193658.js"),
  Chunk287809 = require("./287809.js"),
  Chunk581781 = require("./581781.jsx"),
  Chunk743981 = require("./743981.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk86267 = require("./86267.js");
let b = (0, Chunk915089.Ld)(),
  O = Chunk64700.memo(function(e) {
    let {
      availablePrimaryGuilds: t,
      pendingPrimaryGuildId: n,
      onChange: l
    } = e, O = i.useMemo(() => new Map(t.map(e => [e.id, e])), [t]), v = (0, a.bG)([_.default], () => {
      var e;
      return (0, u.Zo)(null == (e = _.default.getCurrentUser()) ? true : e.primaryGuild).guildId
    }), A = true !== n ? n : v, I = i.useMemo(() => t.reduce((e, t) => {
      var n;
      return (null == (n = t.profile) ? true : n.tag) != null && e.push({
        label: t.name,
        value: t.id
      }), e
    }, []), [t]), S = i.useCallback(e => {
      var t, n, i;
      if (null == e) return null;
      let a = O.get(e.value);
      if (null == a) return null;
      let s = null == (n = a.profile) ? true : n.tag;
      return null == s ? null : (0, r.jsx)(h.A, {
        guildTag: s,
        guildBadge: null != (t = null == (i = a.profile) ? true : i.badge) ? t : true,
        guildId: a.id,
        guildName: e.label,
        guildIcon: a.icon,
        guildIconSize: 32
      })
    }, [O]), T = i.useCallback(e => {
      var t;
      if (null == e) return null;
      let n = O.get(e.value);
      return null == n || null == (null == (t = n.profile) ? true : t.tag) ? null : (0, r.jsx)(c.j, {
        guildId: n.id,
        guildName: n.name,
        guildIcon: n.icon,
        iconSize: 32,
        animate: false
      })
    }, [O]), C = i.useCallback(e => {
      var t, n, i;
      if (null == e) return null;
      let a = O.get(e.value);
      if (null == a) return null;
      let s = null == (n = a.profile) ? true : n.tag;
      return null == s ? null : (0, r.jsx)(d.o9, {
        guildId: a.id,
        guildTag: s,
        guildBadge: null != (t = null == (i = a.profile) ? true : i.badge) ? t : true,
        badgeSize: m.Sl.SIZE_16,
        textColor: "interactive-text-default",
        textVariant: "text-sm/semibold"
      })
    }, [O]), N = i.useCallback(e => {
      let t = e[0];
      return null == t ? null : (0, r.jsx)(r.Fragment, {
        children: S(t)
      })
    }, [S]), w = i.useCallback(e => {
      null == l || l(e)
    }, [l]), R = i.useCallback(e => e === A, [A]), P = i.useCallback(e => e, []), D = i.useCallback(() => {
      null == l || l(null)
    }, [l]), x = i.useRef(null);
    return (0, p.A)(x, g._F.GUILD_TAG), (0, r.jsxs)(f.A, {
      title: E.intl.string(E.t.Pdd1nd),
      titleId: b,
      ref: x,
      children: [(0, r.jsx)(o.Text, {
        className: y.VA,
        variant: "text-sm/normal",
        children: E.intl.string(E.t.mlZ6Jx)
      }), (0, r.jsx)(s.Pw, {
        className: y.Lt,
        optionClassName: y.S0,
        isSelected: R,
        options: I,
        select: w,
        renderLeading: T,
        renderTrailing: C,
        renderOptionValue: N,
        serialize: P,
        clear: D,
        clearable: null != A,
        maxVisibleItems: 8,
        "data-migration-pending": true
      })]
    })
  })