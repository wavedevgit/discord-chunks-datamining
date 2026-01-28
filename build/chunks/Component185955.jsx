/** Chunk was on 60667 **/
/** chunk id: 185955, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
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
let E = (0, Chunk915089.Ld)(),
  x = Chunk64700.memo(function(e) {
    let {
      availablePrimaryGuilds: t,
      pendingPrimaryGuildId: n,
      onChange: o
    } = e, x = i.useMemo(() => new Map(t.map(e => [e.id, e])), [t]), O = (0, l.bG)([m.default], () => {
      var e;
      return (0, d.Zo)(null == (e = m.default.getCurrentUser()) ? true : e.primaryGuild).guildId
    }), C = true !== n ? n : O, T = i.useMemo(() => t.reduce((e, t) => {
      var n;
      return (null == (n = t.profile) ? true : n.tag) != null && e.push({
        label: t.name,
        value: t.id
      }), e
    }, []), [t]), I = i.useCallback(e => {
      var t, n, i;
      if (null == e) return null;
      let l = x.get(e.value);
      if (null == l) return null;
      let s = null == (n = l.profile) ? true : n.tag;
      return null == s ? null : (0, r.jsx)(g.A, {
        guildTag: s,
        guildBadge: null != (t = null == (i = l.profile) ? true : i.badge) ? t : true,
        guildId: l.id,
        guildName: e.label,
        guildIcon: l.icon,
        guildIconSize: 32
      })
    }, [x]), S = i.useCallback(e => {
      var t;
      if (null == e) return null;
      let n = x.get(e.value);
      return null == n || null == (null == (t = n.profile) ? true : t.tag) ? null : (0, r.jsx)(c.j, {
        guildId: n.id,
        guildName: n.name,
        guildIcon: n.icon,
        iconSize: 32,
        animate: false
      })
    }, [x]), j = i.useCallback(e => {
      var t, n, i;
      if (null == e) return null;
      let l = x.get(e.value);
      if (null == l) return null;
      let s = null == (n = l.profile) ? true : n.tag;
      return null == s ? null : (0, r.jsx)(u.o9, {
        guildId: l.id,
        guildTag: s,
        guildBadge: null != (t = null == (i = l.profile) ? true : i.badge) ? t : true,
        badgeSize: A.Sl.SIZE_16,
        textColor: "interactive-text-default",
        textVariant: "text-sm/semibold"
      })
    }, [x]), v = i.useCallback(e => {
      let t = e[0];
      return null == t ? null : (0, r.jsx)(r.Fragment, {
        children: I(t)
      })
    }, [I]), N = i.useCallback(e => {
      null == o || o(e)
    }, [o]), y = i.useCallback(e => e === C, [C]), P = i.useCallback(e => e, []), R = i.useCallback(() => {
      null == o || o(null)
    }, [o]), D = i.useRef(null);
    return (0, p.A)(D, f._F.GUILD_TAG), (0, r.jsxs)(_.A, {
      title: h.intl.string(h.t.Pdd1nd),
      titleId: E,
      ref: D,
      children: [(0, r.jsx)(a.Text, {
        className: b.VA,
        variant: "text-sm/normal",
        children: h.intl.string(h.t.mlZ6Jx)
      }), (0, r.jsx)(s.Pw, {
        className: b.Lt,
        optionClassName: b.S0,
        isSelected: y,
        options: T,
        select: N,
        renderLeading: S,
        renderTrailing: j,
        renderOptionValue: v,
        serialize: P,
        clear: R,
        clearable: null != C,
        maxVisibleItems: 8,
        "data-migration-pending": true
      })]
    })
  })