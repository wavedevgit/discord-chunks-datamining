/** Chunk was on web.js **/
/** chunk id: 336589, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk355622 = require("./355622.js"),
  Chunk148355 = require("./148355.jsx"),
  Chunk406704 = require("./406704.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk287809 = require("./287809.js"),
  Chunk460350 = require("./460350.js"),
  Chunk167681 = require("./167681.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk182777 = require("./182777.js");
let b = e => {
    let {
      channel: t,
      message: n
    } = e, a = (0, h.dv)(n.id), c = i.useCallback(() => {
      (0, _.i)({
        type: o.oU.FORM,
        content: "",
        channel: t
      }).then(e => {
        let {
          valid: r
        } = e;
        r && (0, h.S9)(t, n, a.id)
      })
    }, [t, n, a]);
    return (0, r.jsx)("div", {
      className: E.T,
      children: (0, r.jsx)(s.$nd, {
        icon: {
          type: "sticker",
          asset: a,
          component: l.A
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
    } = e, i = n.getGuildId(), s = (0, a.bG)([p.default, f.A, d.A, u.Ay], () => {
      var e;
      let r = p.default.getCurrentUser(),
        a = (0, c.UJ)(n),
        s = f.A.can(m.xBc.SEND_MESSAGES, n),
        o = null != i && null != r && (null == (e = u.Ay.getMember(i, r.id)) ? true : e.isPending),
        l = t.author.bot,
        _ = d.A.getGuild(i),
        h = null != _ && (_.systemChannelFlags & m.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
      return s && !a && !o && !l && h
    });
    return null != i && s ? (0, r.jsx)(b, {
      message: t,
      channel: n
    }) : null
  }