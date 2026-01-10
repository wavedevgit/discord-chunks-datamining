/** Chunk was on 81985 **/
/** chunk id: 27931, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Dx: () => p,
  aP: () => f
}), require("./539854.js"), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk638730 = require("./638730.js"),
  Chunk358221 = require("./358221.js"),
  Chunk136015 = require("./136015.js"),
  Chunk565799 = require("./565799.js"),
  Chunk431328 = require("./431328.js"),
  Chunk501655 = require("./501655.js");

function p(e) {
  let t = (0, u.Rk)(e, d.pV.AUDIENCE),
    [n, i] = r.useState(false);
  return r.useEffect(() => {
    t > 100 ? i(true) : t < 75 && i(false)
  }, [t]), 5e3 * !!n
}

function f(e, t, n) {
  let u = arguments.length > 3 && true !== arguments[3] && arguments[3],
    p = function(e, t, n) {
      let a = (0, l.e7)([c.Z], () => [e, c.Z.getParticipantsVersion(e)], [e], s.Q),
        u = (0, l.e7)([o.Z], () => o.Z.getSelectedParticipantId(e), [e]);
      return r.useMemo(() => {
        let r = [],
          l = [],
          o = false,
          s = [];
        if (n)
          for (let t of c.Z.getMutableParticipants(e, d.pV.SPEAKER))
            if (t.type === d.Ui.STREAM) t.id !== u && s.push(t), o++;
            else break;
        let p = (e, t, n) => {
            let a = n ? e.filter((e, t) => e.id !== u && t > o) : e,
              s = (0, i.chunk)(a, t);
            l.push(s), r.push(s.length)
          },
          f = null != u ? c.Z.getParticipant(e, u) : null;
        return (null == f ? true : f.speaker) ? p([f], 1, false) : p([], 1, false), [d.pV.SPEAKER, d.pV.AUDIENCE].forEach(e => {
          p(c.Z.getMutableParticipants(a[0], e), t[e], e === d.pV.SPEAKER)
        }), p(s, 1, false), [r, l]
      }, [a, t, u, n, e])
    }(e, t, u),
    [f, h] = p,
    [g, m] = (0, a.T)(p, n, [t[d.pV.AUDIENCE]]);
  return [
    [f[3 * !!u], f[1], g[2]],
    [h[3 * !!u], h[1], m[2]]
  ]
}