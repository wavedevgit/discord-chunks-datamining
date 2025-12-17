/** Chunk was on 2262 **/
/** chunk id: 384694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => O
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
  Chunk288336 = require("./288336.js");
let p = e => ({
    label: e.name,
    value: e.id
  }),
  E = e => m.Z.can(v.Plq.CREATE_GUILD_EXPRESSIONS, e),
  O = e => {
    let {
      onChange: t,
      selected: n,
      onError: m,
      labelledBy: O,
      isEmojiAnimated: y,
      label: I,
      required: S,
      errorMessage: N
    } = e, C = (0, r.cj)([d.Z, b.ZP], () => Object.fromEntries(b.ZP.getFlattenedGuildIds().map(e => d.Z.getGuild(e)).filter(h.lm).map(e => [e.id, e]))), _ = (0, r.cj)([s.ZP], () => Object.fromEntries(Object.entries(C).map(e => {
      let [t, n] = e;
      return [t, function(e) {
        var t;
        let {
          guild: n,
          emojis: l,
          isEmojiAnimated: i
        } = e, r = null != (t = l.filter(e => e.animated === i && !(0, c.Kt)(e, n.id)).length) ? t : 0;
        return (0, g.y4)(n) - r
      }({
        guild: n,
        emojis: s.ZP.getGuildEmoji(t),
        isEmojiAnimated: y
      })]
    })), [C, y]), w = i.useMemo(() => Object.values(C).filter(E).map(p), [C]), M = i.useCallback(e => {
      let [t] = e;
      if (null == t || null == t.value) return null;
      let n = C[t.value];
      return null == n ? null : (0, l.jsxs)("div", {
        className: j.value,
        children: [(0, l.jsx)(u.Z, {
          guild: n,
          size: u.Z.Sizes.SMALLER,
          active: true,
          className: j.icon
        }), (0, l.jsx)(o.Text, {
          variant: "text-md/normal",
          className: j.label,
          children: t.label
        })]
      })
    }, [C]), T = i.useCallback(e => {
      if (null == e || null == e.value) return null;
      let t = C[e.value];
      return null == t ? null : (0, l.jsxs)("div", {
        className: j.option,
        children: [(0, l.jsx)(u.Z, {
          guild: t,
          size: u.Z.Sizes.MEDIUM,
          active: true,
          className: j.icon
        }), (0, l.jsxs)("div", {
          className: j.optionLabelContainer,
          children: [(0, l.jsx)(o.Text, {
            variant: "text-md/medium",
            className: j.label,
            lineClamp: 1,
            children: e.label
          }), (0, l.jsx)(o.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: j.sublabel,
            lineClamp: 1,
            children: x.intl.format(x.t.WkK72v, {
              count: _[e.value]
            })
          })]
        })]
      })
    }, [_, C]);
    return i.useEffect(() => {
      var e;
      w.length < 1 ? m(f.ze.NO_PERMISSIONS) : null != n && (null != (e = null == _ ? true : _[n]) ? e : 0) < 1 ? m(v.evJ.TOO_MANY_EMOJI) : m(null)
    }, [w, t, m, n, _]), (0, l.jsx)(a.y6, {
      label: I,
      required: S,
      errorMessage: N,
      onChange: t,
      options: w,
      popoutPosition: "bottom",
      popoutWidth: 240,
      renderOptionLabel: T,
      renderOptionValue: M,
      value: n,
      "aria-labelledby": O,
      placeholder: w.length < 1 ? x.intl.string(x.t.jHpxwo) : x.intl.string(x.t["4mqeQO"]),
      isDisabled: w.length < 1
    })
  }