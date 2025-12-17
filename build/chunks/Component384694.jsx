/** Chunk was on 2262 **/
/** chunk id: 384694, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => p
}), require("./467055.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk673221 = require("./673221.jsx"),
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
  Chunk388032 = require("./388032.jsx");
let x = e => ({
    label: e.name,
    value: e.id
  }),
  j = e => d.Z.can(f.Plq.CREATE_GUILD_EXPRESSIONS, e),
  p = e => {
    let {
      onChange: t,
      selected: n,
      onError: d,
      labelledBy: p,
      isEmojiAnimated: E,
      label: O,
      required: y,
      errorMessage: S
    } = e, I = (0, i.cj)([c.Z, m.ZP], () => Object.fromEntries(m.ZP.getFlattenedGuildIds().map(e => c.Z.getGuild(e)).filter(g.lm).map(e => [e.id, e]))), N = (0, i.cj)([o.ZP], () => Object.fromEntries(Object.entries(I).map(e => {
      let [t, n] = e;
      return [t, function(e) {
        var t;
        let {
          guild: n,
          emojis: l,
          isEmojiAnimated: r
        } = e, i = null != (t = l.filter(e => e.animated === r && !(0, u.Kt)(e, n.id)).length) ? t : 0;
        return (0, h.y4)(n) - i
      }({
        guild: n,
        emojis: o.ZP.getGuildEmoji(t),
        isEmojiAnimated: E
      })]
    })), [I, E]), _ = r.useMemo(() => Object.values(I).filter(j).map(x), [I]), w = r.useCallback(e => {
      let {
        value: t,
        label: n,
        disabled: r
      } = e;
      return {
        id: String(t),
        value: t,
        label: n,
        disabled: r,
        leading: (e => {
          if (null == e.value) return null;
          let t = I[e.value];
          return null == t ? null : (0, l.jsx)(s.Z, {
            guild: t,
            size: s.Z.Sizes.SMALLER,
            active: true
          })
        })(e),
        trailing: null == e.value ? null : v.intl.formatToPlainString(v.t.WkK72v, {
          count: N[e.value]
        })
      }
    }, [N, I]);
    return r.useEffect(() => {
      var e;
      _.length < 1 ? d(b.ze.NO_PERMISSIONS) : null != n && (null != (e = null == N ? true : N[n]) ? e : 0) < 1 ? d(f.evJ.TOO_MANY_EMOJI) : d(null)
    }, [_, t, d, n, N]), (0, l.jsx)(a.P, {
      label: O,
      required: y,
      selectionMode: "single",
      errorMessage: S,
      onSelectionChange: t,
      options: _,
      formatOption: w,
      value: n,
      "aria-labelledby": p,
      placeholder: _.length < 1 ? v.intl.string(v.t.jHpxwo) : v.intl.string(v.t["4mqeQO"]),
      disabled: _.length < 1
    })
  }