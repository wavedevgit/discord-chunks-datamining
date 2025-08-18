/** Chunk was on 91173 **/
/** chunk id: 814820, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  f: () => C
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk541716 = require("./541716.js"),
  Chunk419922 = require("./419922.jsx"),
  Chunk665906 = require("./665906.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk838440 = require("./838440.js"),
  Chunk779139 = require("./779139.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk628800 = require("./628800.js");
let E = e => {
    let {
      channel: t,
      message: n
    } = e, l = (0, _.y6)(n.id), c = i.useCallback(() => {
      (0, f.v)({
        type: o.Ie.FORM,
        content: "",
        channel: t
      }).then(e => {
        let {
          valid: r
        } = e;
        r && (0, _.TZ)(t, n, l.id)
      })
    }, [t, n, l]);
    return (0, r.jsx)("div", {
      className: b.welcomeCTA,
      children: (0, r.jsx)(a.zx, {
        icon: {
          type: "sticker",
          asset: l,
          component: s.Z
        },
        text: h.intl.string(h.t["7Tj6HR"]),
        onClick: c,
        variant: "secondary"
      })
    })
  },
  C = e => {
    let {
      message: t,
      channel: n
    } = e, i = n.getGuildId(), a = (0, l.e7)([m.default, p.Z, d.Z, u.ZP], () => {
      var e;
      let r = m.default.getCurrentUser(),
        l = (0, c.xl)(n),
        a = p.Z.can(g.Plq.SEND_MESSAGES, n),
        o = null != i && null != r && (null == (e = u.ZP.getMember(i, r.id)) ? true : e.isPending),
        s = t.author.bot,
        f = d.Z.getGuild(i),
        _ = null != f && (f.systemChannelFlags & g.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
      return a && !l && !o && !s && _
    });
    return null != i && a ? (0, r.jsx)(E, {
      message: t,
      channel: n
    }) : null
  }