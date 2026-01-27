/** Chunk was on 60667 **/
/** chunk id: 400553, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk417597 = require("./417597.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk695515 = require("./695515.js"),
  Chunk923531 = require("./923531.js"),
  Chunk397808 = require("./397808.jsx"),
  Chunk254847 = require("./254847.jsx"),
  Chunk773349 = require("./773349.jsx"),
  Chunk994987 = require("./994987.jsx"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk721757 = require("./721757.js");
let A = () => {
  let e = (0, i.bG)([a.A], () => a.A.getTopUserActivities()),
    t = (0, i.bG)([a.A], () => a.A.getTopGuildActivities());
  return 0 === e.length && 0 === t.length ? null : (0, r.jsxs)("div", {
    className: g.kL,
    children: [e.length > 0 && (0, r.jsxs)("div", {
      className: g.A2,
      children: [(0, r.jsx)(s.Heading, {
        variant: "text-md/medium",
        className: g.bV,
        children: m.intl.string(p.default.BxbvS7)
      }), (0, r.jsx)("div", {
        className: g.Ce,
        children: 1 === e.length ? (0, r.jsx)(u.A, {
          userId: e[0].user_id,
          subText: (0, o.fq)(e[0].dms_sent, e[0].call_count),
          className: g.q3
        }) : e.map(e => (0, r.jsx)(_.A, {
          userId: e.user_id,
          dmsSent: e.dms_sent,
          callCount: e.call_count
        }, e.user_id))
      })]
    }), t.length > 0 && (0, r.jsxs)("div", {
      className: g.A2,
      children: [(0, r.jsx)(s.Heading, {
        variant: "text-md/medium",
        className: g.bV,
        children: m.intl.string(p.default.Lq9Set)
      }), 1 === t.length ? (0, r.jsx)(d.A, {
        guildId: t[0].guild_id,
        customSubtext: (0, o.fq)(t[0].messages_sent, t[0].call_count),
        className: g._S
      }) : (0, r.jsx)("div", {
        className: g.Ce,
        children: t.map(e => {
          var t, n;
          let i = a.A.getGuild(e.guild_id),
            s = null != (t = null == i ? true : i.name) ? t : "Unknown Server";
          return (0, r.jsx)(l.un, {
            title: s,
            body: null != (n = (0, o.fq)(e.messages_sent, e.call_count)) ? n : null,
            asContainer: true,
            children: (0, r.jsx)(c.A, {
              guildId: null == e ? true : e.guild_id
            })
          }, e.guild_id)
        })
      })]
    })]
  })
}