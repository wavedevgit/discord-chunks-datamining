/** Chunk was on web.js **/
/** chunk id: 814820, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => y
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
  Chunk321068 = require("./321068.js");
let b = e => {
    let {
      channel: t,
      message: n
    } = e, a = (0, h.y6)(n.id), c = i.useCallback(() => {
      (0, p.v)({
        type: s.Ie.FORM,
        content: "",
        channel: t
      }).then(e => {
        let {
          valid: r
        } = e;
        r && (0, h.TZ)(t, n, a.id)
      })
    }, [t, n, a]);
    return (0, r.jsx)("div", {
      className: E.welcomeCTA,
      children: (0, r.jsx)(o.zxk, {
        icon: {
          type: "sticker",
          asset: a,
          component: l.Z
        },
        text: g.intl.string(g.t["7Tj6HT"]),
        onClick: c,
        variant: "secondary"
      })
    })
  },
  y = e => {
    let {
      message: t,
      channel: n
    } = e, i = n.getGuildId(), o = (0, a.e7)([_.default, f.Z, d.Z, u.ZP], () => {
      var e;
      let r = _.default.getCurrentUser(),
        a = (0, c.xl)(n),
        o = f.Z.can(m.Plq.SEND_MESSAGES, n),
        s = null != i && null != r && (null == (e = u.ZP.getMember(i, r.id)) ? true : e.isPending),
        l = t.author.bot,
        p = d.Z.getGuild(i),
        h = null != p && (p.systemChannelFlags & m.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
      return o && !a && !s && !l && h
    });
    return null != i && o ? (0, r.jsx)(b, {
      message: t,
      channel: n
    }) : null
  }