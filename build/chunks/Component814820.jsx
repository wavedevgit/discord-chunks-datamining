/** Chunk was on web.js **/
/** chunk id: 814820, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => y
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk628800 = require("./628800.js");
let b = e => {
    let {
      channel: t,
      message: n
    } = e, [o, c] = i.useState(false), u = (0, h.y6)(n.id), d = i.useCallback(() => {
      (0, p.v)({
        type: s.Ie.FORM,
        content: "",
        channel: t
      }).then(e => {
        let {
          valid: r
        } = e;
        r && (0, h.TZ)(t, n, u.id)
      })
    }, [t, n, u]);
    return (0, r.jsx)("div", {
      className: E.welcomeCTA,
      children: (0, r.jsxs)(a.zx, {
        "data-migration-pending": true,
        className: E.welcomeCTAButtonOuter,
        innerClassName: E.welcomeCTAButton,
        color: a.Tt.PRIMARY,
        onMouseEnter: () => c(true),
        onMouseLeave: () => c(false),
        onClick: d,
        children: [(0, r.jsx)(l.Z, {
          className: E.welcomeCTASticker,
          isInteracting: o,
          sticker: u,
          size: 28
        }), g.intl.string(g.t["7Tj6HR"])]
      })
    })
  },
  y = e => {
    let {
      message: t,
      channel: n
    } = e, i = n.getGuildId(), a = (0, o.e7)([_.default, f.Z, d.Z, u.ZP], () => {
      var e;
      let r = _.default.getCurrentUser(),
        o = (0, c.xl)(n),
        a = f.Z.can(m.Plq.SEND_MESSAGES, n),
        s = null != i && null != r && (null == (e = u.ZP.getMember(i, r.id)) ? true : e.isPending),
        l = t.author.bot,
        p = d.Z.getGuild(i),
        h = null != p && (p.systemChannelFlags & m.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES) == 0;
      return a && !o && !s && !l && h
    });
    return null != i && a ? (0, r.jsx)(b, {
      message: t,
      channel: n
    }) : null
  }