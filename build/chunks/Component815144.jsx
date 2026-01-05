/** Chunk was on 40184 **/
/** chunk id: 815144, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk586902 = require("./586902.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk23303 = require("./23303.js"),
  Chunk354459 = require("./354459.js"),
  Chunk65154 = require("./65154.js"),
  Chunk398839 = require("./398839.js");
let g = Chunk473749.memo(function(e) {
  let {
    channel: t,
    participant: n
  } = e, l = (0, o.e7)([u.default], () => u.default.getUser(n.user.id), [n.user.id]), p = r.useMemo(() => {
    var e, i;
    return null != (i = null != (e = d.ZP.getNickname(t.guild_id, t.id, l)) ? e : null == l ? true : l.globalName) ? i : n.userNick
  }, [t, l, n.userNick]), f = (0, c.Z)({
    userId: n.user.id,
    context: h.Yn.DEFAULT
  });
  if (null == l) return null;
  let g = s.EFr.SIZE_32,
    b = s.ny6[g].size,
    C = l.getAvatarURL(t.guild_id, b);
  return (0, i.jsxs)("div", {
    className: a()(m.participantItem, {
      [m.speaking]: f
    }),
    children: [(0, i.jsx)(s.qEK, {
      className: m.avatar,
      size: g,
      src: C,
      "aria-hidden": true
    }), (0, i.jsx)("div", {
      className: m.username,
      children: (0, i.jsx)(s.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: p
      })
    })]
  })
});

function b(e) {
  let {
    channel: t,
    participants: n
  } = e, l = (0, p.Z)(t.id), a = r.useMemo(() => {
    if (null == l) return [];
    let e = new Set(l.participants.map(e => e.userId));
    return n.filter(t => !(!(0, f.Io)(t) || e.has(t.user.id)))
  }, [n, l]);
  return 0 === a.length ? null : (0, i.jsx)("div", {
    className: m.container,
    children: a.map(e => (0, f.Io)(e) ? (0, i.jsx)(g, {
      channel: t,
      participant: e
    }, e.user.id) : null)
  })
}