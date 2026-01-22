/** Chunk was on 97492 **/
/** chunk id: 224648, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  RG: () => p,
  Uo: () => f
}), require("./321073.js"), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk59520 = require("./59520.js"),
  Chunk313961 = require("./313961.js"),
  Chunk996439 = require("./996439.js"),
  Chunk63995 = require("./63995.js"),
  Chunk113783 = require("./113783.js"),
  Chunk69407 = require("./69407.js");

function f(e) {
  let t = (0, u.zy)(e, d.ip.AUDIENCE),
    [n, l] = r.useState(false);
  return r.useEffect(() => {
    t > 100 ? l(true) : t < 75 && l(false)
  }, [t]), 5e3 * !!n
}

function p(e, t, n) {
  let u, f, p = arguments.length > 3 && true !== arguments[3] && arguments[3],
    h = (u = (0, i.bG)([c.A], () => [e, c.A.getParticipantsVersion(e)], [e], o.D), f = (0, i.bG)([s.A], () => s.A.getSelectedParticipantId(e), [e]), r.useMemo(() => {
      let n = [],
        r = [],
        i = false,
        a = [];
      if (p)
        for (let t of c.A.getMutableParticipants(e, d.ip.SPEAKER))
          if (t.type === d.wY.STREAM) t.id !== f && a.push(t), i++;
          else break;
      let s = (e, t, a) => {
          let s = a ? e.filter((e, t) => e.id !== f && t > i) : e,
            o = (0, l.chunk)(s, t);
          r.push(o), n.push(o.length)
        },
        o = null != f ? c.A.getParticipant(e, f) : null;
      return (null == o ? true : o.speaker) ? s([o], 1, false) : s([], 1, false), [d.ip.SPEAKER, d.ip.AUDIENCE].forEach(e => {
        s(c.A.getMutableParticipants(u[0], e), t[e], e === d.ip.SPEAKER)
      }), s(a, 1, false), [n, r]
    }, [u, t, f, p, e])),
    [b, g] = h,
    [m, A] = (0, a.J)(h, n, [t[d.ip.AUDIENCE]]);
  return [
    [b[3 * !!p], b[1], m[2]],
    [g[3 * !!p], g[1], A[2]]
  ]
}