/** Chunk was on 2262 **/
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
  Chunk935450 = require("./935450.js");
let b = e => ({
    label: e.name,
    value: e.id
  }),
  j = e => d.Z.can(f.Plq.CREATE_GUILD_EXPRESSIONS, e),
  _ = e => {
    let {
      onChange: t,
      selected: n,
      onError: d,
      labelledBy: _,
      isEmojiAnimated: O,
      label: y,
      required: E,
      errorMessage: D
    } = e, w = (0, l.cj)([c.Z, h.ZP], () => Object.fromEntries(h.ZP.getFlattenedGuildIds().map(e => c.Z.getGuild(e)).filter(m.lm).map(e => [e.id, e]))), N = (0, l.cj)([s.ZP], () => Object.fromEntries(Object.entries(w).map(e => {
      let [t, n] = e;
      return [t, function(e) {
        var t;
        let {
          guild: n,
          emojis: r,
          isEmojiAnimated: i
        } = e, l = null != (t = r.filter(e => e.animated === i && !(0, u.Kt)(e, n.id)).length) ? t : 0;
        return (0, g.y4)(n) - l
      }({
        guild: n,
        emojis: s.ZP.getGuildEmoji(t),
        isEmojiAnimated: O
      })]
    })), [w, O]), C = i.useMemo(() => Object.values(w).filter(j).map(b), [w]), I = i.useCallback(e => {
      let [t] = e;
      if (null == t || null == t.value) return null;
      let n = w[t.value];
      return null == n ? null : (0, r.jsxs)("div", {
        className: x.value,
        children: [(0, r.jsx)(o.Z, {
          guild: n,
          size: o.Z.Sizes.SMALLER,
          active: true,
          className: x.icon
        }), (0, r.jsx)(a.Text, {
          variant: "text-sm/normal",
          className: x.text,
          children: t.label
        })]
      })
    }, [w]), S = i.useCallback(e => {
      if (null == e || null == e.value) return null;
      let t = w[e.value];
      return null == t ? null : (0, r.jsxs)("div", {
        className: x.option,
        children: [(0, r.jsx)(o.Z, {
          guild: t,
          size: o.Z.Sizes.MEDIUM,
          active: true,
          className: x.icon
        }), (0, r.jsxs)("div", {
          className: x.optionLabelContainer,
          children: [(0, r.jsx)(a.Text, {
            variant: "text-sm/medium",
            className: x.text,
            children: e.label
          }), (0, r.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "text-tertiary",
            className: x.text,
            children: v.intl.format(v.t.WkK72v, {
              count: N[e.value]
            })
          })]
        })]
      })
    }, [N, w]);
    return i.useEffect(() => {
      var e;
      C.length < 1 ? d(p.ze.NO_PERMISSIONS) : null != n && (null != (e = null == N ? true : N[n]) ? e : 0) < 1 ? d(f.evJ.TOO_MANY_EMOJI) : d(null)
    }, [C, t, d, n, N]), (0, r.jsx)(a.q4e, {
      label: y,
      required: E,
      errorMessage: D,
      onChange: t,
      options: C,
      popoutPosition: "top",
      popoutWidth: 240,
      renderOptionLabel: S,
      renderOptionValue: I,
      value: n,
      "aria-labelledby": _,
      placeholder: C.length < 1 ? v.intl.string(v.t.jHpxwo) : v.intl.string(v.t["4mqeQO"]),
      isDisabled: C.length < 1
    })
  }