/** Chunk was on 43491 **/
/** chunk id: 384694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => E
}), require("./467055.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
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
let j = e => ({
    label: e.name,
    value: e.id
  }),
  _ = e => m.Z.can(v.Plq.CREATE_GUILD_EXPRESSIONS, e),
  E = e => {
    let {
      onChange: t,
      selected: n,
      onError: m,
      labelledBy: E,
      isEmojiAnimated: O,
      label: y,
      required: C,
      errorMessage: I
    } = e, N = (0, i.cj)([d.Z, h.ZP], () => Object.fromEntries(h.ZP.getFlattenedGuildIds().map(e => d.Z.getGuild(e)).filter(g.lm).map(e => [e.id, e]))), S = (0, i.cj)([s.ZP], () => Object.fromEntries(Object.entries(N).map(e => {
      let [t, n] = e;
      return [t, function(e) {
        var t;
        let {
          guild: n,
          emojis: l,
          isEmojiAnimated: r
        } = e, i = null != (t = l.filter(e => e.animated === r && !(0, c.Kt)(e, n.id)).length) ? t : 0;
        return (0, f.y4)(n) - i
      }({
        guild: n,
        emojis: s.ZP.getGuildEmoji(t),
        isEmojiAnimated: O
      })]
    })), [N, O]), w = r.useMemo(() => Object.values(N).filter(_).map(j), [N]), M = r.useCallback(e => {
      let [t] = e;
      if (null == t || null == t.value) return null;
      let n = N[t.value];
      return null == n ? null : (0, l.jsxs)("div", {
        className: x.value,
        children: [(0, l.jsx)(u.Z, {
          guild: n,
          size: u.Z.Sizes.SMALLER,
          active: true,
          className: x.icon
        }), (0, l.jsx)(o.Text, {
          variant: "text-md/normal",
          className: x.label,
          children: t.label
        })]
      })
    }, [N]), R = r.useCallback(e => {
      if (null == e || null == e.value) return null;
      let t = N[e.value];
      return null == t ? null : (0, l.jsxs)("div", {
        className: x.option,
        children: [(0, l.jsx)(u.Z, {
          guild: t,
          size: u.Z.Sizes.MEDIUM,
          active: true,
          className: x.icon
        }), (0, l.jsxs)("div", {
          className: x.optionLabelContainer,
          children: [(0, l.jsx)(o.Text, {
            variant: "text-md/medium",
            className: x.label,
            lineClamp: 1,
            children: e.label
          }), (0, l.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: x.sublabel,
            lineClamp: 1,
            children: p.intl.format(p.t.WkK72v, {
              count: S[e.value]
            })
          })]
        })]
      })
    }, [S, N]);
    return r.useEffect(() => {
      var e;
      w.length < 1 ? m(b.ze.NO_PERMISSIONS) : null != n && (null != (e = null == S ? true : S[n]) ? e : 0) < 1 ? m(v.evJ.TOO_MANY_EMOJI) : m(null)
    }, [w, t, m, n, S]), (0, l.jsx)(a.y6, {
      label: y,
      required: C,
      errorMessage: I,
      onChange: t,
      options: w,
      popoutPosition: "bottom",
      popoutWidth: 240,
      renderOptionLabel: R,
      renderOptionValue: M,
      value: n,
      "aria-labelledby": E,
      placeholder: w.length < 1 ? p.intl.string(p.t.jHpxwo) : p.intl.string(p.t["4mqeQO"]),
      isDisabled: w.length < 1
    })
  }