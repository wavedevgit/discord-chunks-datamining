/** Chunk was on web.js **/
/** chunk id: 814820, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk755721 = require("./755721.js"),
  Chunk541716 = require("./541716.js"),
  Chunk419922 = require("./419922.jsx"),
  Chunk665906 = require("./665906.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk838440 = require("./838440.js"),
  Chunk779139 = require("./779139.js"),
  Chunk223750 = require("./223750.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk177562 = require("./177562.js");
let O = e => {
    let {
      channel: t,
      message: n
    } = e, o = (0, g.t)(), [u, d] = i.useState(false), f = (0, m.y6)(n.id), _ = i.useCallback(() => {
      (0, h.v)({
        type: l.Ie.FORM,
        content: "",
        channel: t
      }).then(e => {
        let {
          valid: r
        } = e;
        r && (0, m.TZ)(t, n, f.id)
      })
    }, [t, n, f]);
    return (0, r.jsx)("div", {
      className: y.welcomeCTA,
      children: o ? (0, r.jsx)(a.zx, {
        variant: "secondary",
        size: "md",
        onClick: _,
        text: b.intl.string(b.t["7Tj6HR"])
      }) : (0, r.jsxs)(s.zx, {
        "data-migration-pending": true,
        className: y.welcomeCTAButtonOuter,
        innerClassName: y.welcomeCTAButton,
        color: s.Tt.PRIMARY,
        onMouseEnter: () => d(true),
        onMouseLeave: () => d(false),
        onClick: _,
        children: [(0, r.jsx)(c.Z, {
          className: y.welcomeCTASticker,
          isInteracting: u,
          sticker: f,
          size: 28
        }), b.intl.string(b.t["7Tj6HR"])]
      })
    })
  },
  v = e => {
    let {
      message: t,
      channel: n
    } = e, i = n.getGuildId(), a = (0, o.e7)([p.default, _.Z, f.Z, d.ZP], () => {
      var e;
      let r = p.default.getCurrentUser(),
        o = (0, u.xl)(n),
        a = _.Z.can(E.Plq.SEND_MESSAGES, n),
        s = null != i && null != r && (null == (e = d.ZP.getMember(i, r.id)) ? true : e.isPending),
        l = t.author.bot,
        c = f.Z.getGuild(i),
        h = null != c && (c.systemChannelFlags & E.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
      return a && !o && !s && !l && h
    });
    return null != i && a ? (0, r.jsx)(O, {
      message: t,
      channel: n
    }) : null
  }