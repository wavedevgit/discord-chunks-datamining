/** Chunk was on 92917 **/
/** chunk id: 336589, original params: e,t,n (module,exports,require) **/
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
let A = e => {
    let {
      channel: t,
      message: n
    } = e, l = (0, g.dv)(n.id), c = i.useCallback(() => {
      (0, f.i)({
        type: s.oU.FORM,
        content: "",
        channel: t
      }).then(e => {
        let {
          valid: r
        } = e;
        r && (0, g.S9)(t, n, l.id)
      })
    }, [t, n, l]);
    return (0, r.jsx)("div", {
      className: b.T,
      children: (0, r.jsx)(a.$nd, {
        icon: {
          type: "sticker",
          asset: l,
          component: o.A
        },
        text: _.intl.string(_.t["7Tj6HT"]),
        onClick: c,
        variant: "secondary"
      })
    })
  },
  y = e => {
    let {
      message: t,
      channel: n
    } = e, i = n.getGuildId(), a = (0, l.bG)([m.default, p.A, d.A, u.Ay], () => {
      var e;
      let r = m.default.getCurrentUser(),
        l = (0, c.UJ)(n),
        a = p.A.can(h.xBc.SEND_MESSAGES, n),
        s = null != i && null != r && (null == (e = u.Ay.getMember(i, r.id)) ? true : e.isPending),
        o = t.author.bot,
        f = d.A.getGuild(i),
        g = null != f && (f.systemChannelFlags & h.ogj.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
      return a && !l && !s && !o && g
    });
    return null != i && a ? (0, r.jsx)(A, {
      message: t,
      channel: n
    }) : null
  }