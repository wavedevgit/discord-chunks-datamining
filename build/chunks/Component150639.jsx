/** Chunk was on 76443 **/
/** chunk id: 150639, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => _
}), require("./446912.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk508675 = require("./508675.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk492494 = require("./492494.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk711014 = require("./711014.js"),
  Chunk403362 = require("./403362.js"),
  Chunk473145 = require("./473145.js"),
  Chunk80569 = require("./80569.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let v = e => ({
    label: e.name,
    value: e.id
  }),
  x = e => d.A.can(f.xBc.CREATE_GUILD_EXPRESSIONS, e),
  _ = e => {
    let {
      onChange: t,
      selected: n,
      onError: d,
      labelledBy: _,
      isEmojiAnimated: E,
      label: O,
      required: p,
      errorMessage: y
    } = e, S = (0, a.cf)([c.A, m.Ay], () => Object.fromEntries(m.Ay.getFlattenedGuildIds().map(e => c.A.getGuild(e)).filter(h.Vq).map(e => [e.id, e]))), I = (0, a.cf)([s.Ay], () => Object.fromEntries(Object.entries(S).map(e => {
      let [t, n] = e;
      return [t, function(e) {
        var t;
        let {
          guild: n,
          emojis: l,
          isEmojiAnimated: r
        } = e, i = null != (t = l.filter(e => e.animated === r && !(0, o.Eg)(e, n.id)).length) ? t : 0;
        return (0, g.sN)(n) - i
      }({
        guild: n,
        emojis: s.Ay.getGuildEmoji(t),
        isEmojiAnimated: E
      })]
    })), [S, E]), A = r.useMemo(() => Object.values(S).filter(x).map(v), [S]), N = r.useCallback(e => {
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
          let t = S[e.value];
          return null == t ? null : (0, l.jsx)(u.A, {
            guild: t,
            size: u.A.Sizes.SMALLER,
            active: true
          })
        })(e),
        trailing: null == e.value ? null : j.intl.formatToPlainString(j.t.WkK72v, {
          count: I[e.value]
        })
      }
    }, [I, S]);
    return r.useEffect(() => {
      var e;
      A.length < 1 ? d(b.j.NO_PERMISSIONS) : null != n && (null != (e = null == I ? true : I[n]) ? e : 0) < 1 ? d(f.t02.TOO_MANY_EMOJI) : d(null)
    }, [A, t, d, n, I]), (0, l.jsx)(i.l6P, {
      label: O,
      required: p,
      selectionMode: "single",
      errorMessage: y,
      onSelectionChange: t,
      options: A,
      formatOption: N,
      value: n,
      "aria-labelledby": _,
      placeholder: A.length < 1 ? j.intl.string(j.t.jHpxwo) : j.intl.string(j.t["4mqeQO"]),
      disabled: A.length < 1
    })
  }