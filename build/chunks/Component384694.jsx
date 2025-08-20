/** Chunk was on 65819 **/
/** chunk id: 384694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => _
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
let v = e => ({
    label: e.name,
    value: e.id
  }),
  j = e => d.Z.can(x.Plq.CREATE_GUILD_EXPRESSIONS, e),
  _ = e => {
    let {
      onChange: t,
      selected: n,
      onError: d,
      labelledBy: _,
      isEmojiAnimated: N
    } = e, E = (0, i.cj)([c.Z, m.ZP], () => Object.fromEntries(m.ZP.getFlattenedGuildIds().map(e => c.Z.getGuild(e)).filter(f.lm).map(e => [e.id, e]))), O = (0, i.cj)([o.ZP], () => Object.fromEntries(Object.entries(E).map(e => {
      let [t, n] = e;
      return [t, function(e) {
        var t;
        let {
          guild: n,
          emojis: r,
          isEmojiAnimated: l
        } = e, i = null != (t = r.filter(e => e.animated === l && !(0, u.Kt)(e, n.id)).length) ? t : 0;
        return (0, g.y4)(n) - i
      }({
        guild: n,
        emojis: o.ZP.getGuildEmoji(t),
        isEmojiAnimated: N
      })]
    })), [E, N]), C = l.useMemo(() => Object.values(E).filter(j).map(v), [E]), I = l.useCallback(e => {
      let [t] = e;
      if (null == t || null == t.value) return null;
      let n = E[t.value];
      return null == n ? null : (0, r.jsxs)("div", {
        className: b.value,
        children: [(0, r.jsx)(s.Z, {
          guild: n,
          size: s.Z.Sizes.SMALLER,
          active: true,
          className: b.icon
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          className: b.text,
          children: t.label
        })]
      })
    }, [E]), y = l.useCallback(e => {
      if (null == e || null == e.value) return null;
      let t = E[e.value];
      return null == t ? null : (0, r.jsxs)("div", {
        className: b.option,
        children: [(0, r.jsx)(s.Z, {
          guild: t,
          size: s.Z.Sizes.MEDIUM,
          active: true,
          className: b.icon
        }), (0, r.jsxs)("div", {
          className: b.optionLabelContainer,
          children: [(0, r.jsx)(a.Text, {
            variant: "text-sm/medium",
            className: b.text,
            children: e.label
          }), (0, r.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "text-tertiary",
            className: b.text,
            children: p.intl.format(p.t.WkK72t, {
              count: O[e.value]
            })
          })]
        })]
      })
    }, [O, E]);
    return l.useEffect(() => {
      var e;
      C.length < 1 ? d(h.ze.NO_PERMISSIONS) : null != n && (null != (e = null == O ? true : O[n]) ? e : 0) < 1 ? d(x.evJ.TOO_MANY_EMOJI) : d(null)
    }, [C, t, d, n, O]), (0, r.jsx)(a.q4e, {
      onChange: t,
      options: C,
      popoutPosition: "top",
      popoutWidth: 240,
      renderOptionLabel: y,
      renderOptionValue: I,
      value: n,
      "aria-labelledby": _,
      placeholder: C.length < 1 ? p.intl.string(p.t.jHpxws) : p.intl.string(p.t["4mqeQE"]),
      isDisabled: C.length < 1
    })
  }