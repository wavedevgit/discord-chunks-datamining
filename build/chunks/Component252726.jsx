/** Chunk was on 91042 **/
/** chunk id: 252726, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk956793 = require("./956793.js"),
  Chunk47167 = require("./47167.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk147036 = require("./147036.js"),
  Chunk488926 = require("./488926.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function h(e, t) {
  let n = (0, i.bG)([c.Ay], () => c.Ay.getChannels(t)[c.vM], [t]),
    h = (0, i.bG)([p.A, u.A], () => {
      let n = p.A.getUserVoiceChannelId(t, e.id);
      return u.A.getChannel(n)
    }, [t, e.id]);
  if ((0, i.bG)([A.Ay], () => A.Ay.isGuestOrLurker(t, e.id), [t, e.id]) || null == h) return null;
  let j = e.id === d.default.getId();
  if (!j && !g.A.can(v.xBc.MOVE_MEMBERS, h)) return null;
  let x = n.filter(t => {
    let {
      channel: n
    } = t;
    return n.id !== h.id && (j ? g.A.can(v.xBc.CONNECT, n) && !(0, O.Pd)(n, p.A, b.A) : g.A.can(v.xBc.MOVE_MEMBERS, n) && (g.A.can(v.xBc.CONNECT, n) || y.$3({
      permission: v.xBc.CONNECT,
      user: e,
      context: n
    })) && !(0, O.Pd)(n, p.A, b.A))
  });
  return 0 === x.length ? null : (0, l.jsx)(r.Drp, {
    id: "voice-move",
    label: E.intl.string(E.t.FAplms),
    children: x.map(n => {
      let {
        channel: i
      } = n;
      return (0, l.jsx)(r.Drp, {
        id: i.id,
        action: () => {
          e.id === d.default.getId() ? o.default.selectVoiceChannel(i.id) : a.A.setChannel(t, e.id, i.id)
        },
        label: (0, s.m1)(i, m.default, f.A)
      }, i.id)
    })
  })
}