/** Chunk was on 97492 **/
/** chunk id: 100449, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk717558 = require("./717558.js"),
  Chunk287809 = require("./287809.js"),
  Chunk562153 = require("./562153.js"),
  Chunk732777 = require("./732777.js"),
  Chunk806931 = require("./806931.js"),
  Chunk731854 = require("./731854.js"),
  Chunk334609 = require("./334609.js");
let g = Chunk64700.memo(function(e) {
  let {
    channel: t,
    participant: n
  } = e, i = (0, s.bG)([u.default], () => u.default.getUser(n.user.id), [n.user.id]), f = l.useMemo(() => {
    var e, r;
    return null != (e = null != (r = d.Ay.getNickname(t.guild_id, t.id, i)) ? r : null == i ? true : i.globalName) ? e : n.userNick
  }, [t, i, n.userNick]), p = (0, c.A)({
    userId: n.user.id,
    context: h.x.DEFAULT
  });
  if (null == i) return null;
  let g = o._3J.SIZE_32,
    m = o.vCh[g].size,
    A = i.getAvatarURL(t.guild_id, m);
  return (0, r.jsxs)("div", {
    className: a()(b.vB, {
      [b.zY]: p
    }),
    children: [(0, r.jsx)(o.euF, {
      className: b.my,
      size: g,
      src: A,
      "aria-hidden": true
    }), (0, r.jsx)("div", {
      className: b.Xh,
      children: (0, r.jsx)(o.Text, {
        variant: "text-xs/medium",
        color: "text-default",
        children: f
      })
    })]
  })
});

function m(e) {
  let {
    channel: t,
    participants: n
  } = e, i = (0, f.A)(t.id), a = l.useMemo(() => {
    if (null == i) return [];
    let e = new Set(i.participants.map(e => e.userId));
    return n.filter(t => !(!(0, p.Xw)(t) || e.has(t.user.id)))
  }, [n, i]);
  return 0 === a.length ? null : (0, r.jsx)("div", {
    className: b.kL,
    children: a.map(e => (0, p.Xw)(e) ? (0, r.jsx)(g, {
      channel: t,
      participant: e
    }, e.user.id) : null)
  })
}