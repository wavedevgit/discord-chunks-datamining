/** Chunk was on 21087 **/
/** chunk id: 27931, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Dx: () => h,
  aP: () => p
}), require("./539854.js"), require("./388685.js");
var Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk638730 = require("./638730.js"),
  Chunk358221 = require("./358221.js"),
  Chunk136015 = require("./136015.js"),
  Chunk565799 = require("./565799.js"),
  Chunk431328 = require("./431328.js"),
  Chunk501655 = require("./501655.js");

function h(e) {
  let t = (0, u.Rk)(e, d.pV.AUDIENCE),
    [n, i] = r.useState(false);
  return r.useEffect(() => {
    t > 100 ? i(true) : t < 75 && i(false)
  }, [t]), 5e3 * !!n
}

function p(e, t, n) {
  let u = arguments.length > 3 && true !== arguments[3] && arguments[3],
    h = function(e, t, n) {
      let a = (0, l.e7)([c.Z], () => [e, c.Z.getParticipantsVersion(e)], [e], o.Q),
        u = (0, l.e7)([s.Z], () => s.Z.getSelectedParticipantId(e), [e]);
      return r.useMemo(() => {
        let r = [],
          l = [],
          s = false,
          o = [];
        if (n)
          for (let t of c.Z.getMutableParticipants(e, d.pV.SPEAKER))
            if (t.type === d.Ui.STREAM) t.id !== u && o.push(t), s++;
            else break;
        let h = (e, t, n) => {
            let a = n ? e.filter((e, t) => e.id !== u && t > s) : e,
              o = (0, i.chunk)(a, t);
            l.push(o), r.push(o.length)
          },
          p = null != u ? c.Z.getParticipant(e, u) : null;
        return (null == p ? true : p.speaker) ? h([p], 1, false) : h([], 1, false), [d.pV.SPEAKER, d.pV.AUDIENCE].forEach(e => {
          h(c.Z.getMutableParticipants(a[0], e), t[e], e === d.pV.SPEAKER)
        }), h(o, 1, false), [r, l]
      }, [a, t, u, n, e])
    }(e, t, u),
    [p, f] = h,
    [g, m] = (0, a.T)(h, n, [t[d.pV.AUDIENCE]]);
  return [
    [p[3 * !!u], p[1], g[2]],
    [f[3 * !!u], f[1], m[2]]
  ]
}