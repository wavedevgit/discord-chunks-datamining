/** Chunk was on 67079 **/
/** chunk id: 384694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => j
}), require("./467055.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk339085 = require("./339085.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk889564 = require("./889564.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk771845 = require("./771845.js"),
  Chunk823379 = require("./823379.js"),
  Chunk267642 = require("./267642.js"),
  Chunk598117 = require("./598117.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk503366 = require("./503366.js");
let _ = e => ({
    label: e.name,
    value: e.id
  }),
  b = e => d.Z.can(f.Plq.CREATE_GUILD_EXPRESSIONS, e),
  j = e => {
    let {
      onChange: t,
      selected: n,
      onError: d,
      labelledBy: j,
      isEmojiAnimated: O
    } = e, E = (0, a.cj)([c.Z, h.ZP], () => Object.fromEntries(h.ZP.getFlattenedGuildIds().map(e => c.Z.getGuild(e)).filter(m.lm).map(e => [e.id, e]))), N = (0, a.cj)([s.ZP], () => Object.fromEntries(Object.entries(E).map(e => {
      let [t, n] = e;
      return [t, function(e) {
        var t;
        let {
          guild: n,
          emojis: r,
          isEmojiAnimated: l
        } = e, a = null != (t = r.filter(e => e.animated === l && !(0, u.Kt)(e, n.id)).length) ? t : 0;
        return (0, g.y4)(n) - a
      }({
        guild: n,
        emojis: s.ZP.getGuildEmoji(t),
        isEmojiAnimated: O
      })]
    })), [E, O]), C = l.useMemo(() => Object.values(E).filter(b).map(_), [E]), D = l.useCallback(e => {
      let [t] = e;
      if (null == t || null == t.value) return null;
      let n = E[t.value];
      return null == n ? null : (0, r.jsxs)("div", {
        className: x.value,
        children: [(0, r.jsx)(o.Z, {
          guild: n,
          size: o.Z.Sizes.SMALLER,
          active: true,
          className: x.icon
        }), (0, r.jsx)(i.Text, {
          variant: "text-sm/normal",
          className: x.text,
          children: t.label
        })]
      })
    }, [E]), y = l.useCallback(e => {
      if (null == e || null == e.value) return null;
      let t = E[e.value];
      return null == t ? null : (0, r.jsxs)("div", {
        className: x.option,
        children: [(0, r.jsx)(o.Z, {
          guild: t,
          size: o.Z.Sizes.MEDIUM,
          active: true,
          className: x.icon
        }), (0, r.jsxs)("div", {
          className: x.optionLabelContainer,
          children: [(0, r.jsx)(i.Text, {
            variant: "text-sm/medium",
            className: x.text,
            children: e.label
          }), (0, r.jsx)(i.Text, {
            variant: "text-xs/normal",
            color: "text-tertiary",
            className: x.text,
            children: v.intl.format(v.t.WkK72t, {
              count: N[e.value]
            })
          })]
        })]
      })
    }, [N, E]);
    return l.useEffect(() => {
      var e;
      C.length < 1 ? d(p.ze.NO_PERMISSIONS) : null != n && (null != (e = null == N ? true : N[n]) ? e : 0) < 1 ? d(f.evJ.TOO_MANY_EMOJI) : d(null)
    }, [C, t, d, n, N]), (0, r.jsx)(i.q4e, {
      onChange: t,
      options: C,
      popoutPosition: "top",
      popoutWidth: 240,
      renderOptionLabel: y,
      renderOptionValue: D,
      value: n,
      "aria-labelledby": j,
      placeholder: C.length < 1 ? v.intl.string(v.t.jHpxws) : v.intl.string(v.t["4mqeQE"]),
      isDisabled: C.length < 1
    })
  }