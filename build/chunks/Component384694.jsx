/** Chunk was on 2262 **/
/** chunk id: 384694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => _
}), require("./467055.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk935450 = require("./935450.js");
let x = e => ({
    label: e.name,
    value: e.id
  }),
  j = e => d.Z.can(b.Plq.CREATE_GUILD_EXPRESSIONS, e),
  _ = e => {
    let {
      onChange: t,
      selected: n,
      onError: d,
      labelledBy: _,
      isEmojiAnimated: E,
      label: O,
      required: y,
      errorMessage: C
    } = e, I = (0, i.cj)([c.Z, m.ZP], () => Object.fromEntries(m.ZP.getFlattenedGuildIds().map(e => c.Z.getGuild(e)).filter(h.lm).map(e => [e.id, e]))), N = (0, i.cj)([o.ZP], () => Object.fromEntries(Object.entries(I).map(e => {
      let [t, n] = e;
      return [t, function(e) {
        var t;
        let {
          guild: n,
          emojis: l,
          isEmojiAnimated: r
        } = e, i = null != (t = l.filter(e => e.animated === r && !(0, u.Kt)(e, n.id)).length) ? t : 0;
        return (0, g.y4)(n) - i
      }({
        guild: n,
        emojis: o.ZP.getGuildEmoji(t),
        isEmojiAnimated: E
      })]
    })), [I, E]), S = r.useMemo(() => Object.values(I).filter(j).map(x), [I]), w = r.useCallback(e => {
      let [t] = e;
      if (null == t || null == t.value) return null;
      let n = I[t.value];
      return null == n ? null : (0, l.jsxs)("div", {
        className: p.value,
        children: [(0, l.jsx)(s.Z, {
          guild: n,
          size: s.Z.Sizes.SMALLER,
          active: true,
          className: p.icon
        }), (0, l.jsx)(a.Text, {
          variant: "text-md/normal",
          className: p.label,
          children: t.label
        })]
      })
    }, [I]), M = r.useCallback(e => {
      if (null == e || null == e.value) return null;
      let t = I[e.value];
      return null == t ? null : (0, l.jsxs)("div", {
        className: p.option,
        children: [(0, l.jsx)(s.Z, {
          guild: t,
          size: s.Z.Sizes.MEDIUM,
          active: true,
          className: p.icon
        }), (0, l.jsxs)("div", {
          className: p.optionLabelContainer,
          children: [(0, l.jsx)(a.Text, {
            variant: "text-md/medium",
            className: p.label,
            lineClamp: 1,
            children: e.label
          }), (0, l.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "text-tertiary",
            className: p.sublabel,
            lineClamp: 1,
            children: v.intl.format(v.t.WkK72v, {
              count: N[e.value]
            })
          })]
        })]
      })
    }, [N, I]);
    return r.useEffect(() => {
      var e;
      S.length < 1 ? d(f.ze.NO_PERMISSIONS) : null != n && (null != (e = null == N ? true : N[n]) ? e : 0) < 1 ? d(b.evJ.TOO_MANY_EMOJI) : d(null)
    }, [S, t, d, n, N]), (0, l.jsx)(a.q4e, {
      label: O,
      required: y,
      errorMessage: C,
      onChange: t,
      options: S,
      popoutPosition: "bottom",
      popoutWidth: 240,
      renderOptionLabel: M,
      renderOptionValue: w,
      value: n,
      "aria-labelledby": _,
      placeholder: S.length < 1 ? v.intl.string(v.t.jHpxwo) : v.intl.string(v.t["4mqeQO"]),
      isDisabled: S.length < 1
    })
  }