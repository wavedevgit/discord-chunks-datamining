/** Chunk was on web.js **/
/** chunk id: 316770, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk956793 = require("./956793.js"),
  Chunk47167 = require("./47167.js"),
  Chunk378570 = require("./378570.js"),
  Chunk345942 = require("./345942.js"),
  Chunk323443 = require("./323443.js"),
  Chunk576705 = require("./576705.js"),
  Chunk531648 = require("./531648.jsx"),
  Chunk10862 = require("./10862.jsx"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk380297 = require("./380297.js");

function b(e) {
  let {
    channel: t,
    guild: n,
    onAction: i,
    onClose: b
  } = e, y = (0, c.Ay)(t), O = (0, s.bG)([p.A], () => t.isPrivate() || p.A.can(m.xB.CONNECT, t)), A = () => {
    if (!O) return y;
    let e = e => {
      e.stopPropagation(), t.isGuildStageVoice() ? (0, f.av)(t) : (l.default.selectVoiceChannel(t.id), (0, u.iN)(t.id)), null == i || i({
        action: "OPEN_VOICE_CHANNEL"
      }), null == b || b()
    };
    return (0, r.jsx)(o.DUT, {
      className: a()(E.sd, E.mG),
      onClick: e,
      children: y
    })
  }, v = () => {
    if (null == n) return null;
    let e = e => {
      e.stopPropagation(), (0, d.u)(n.id), null == i || i({
        action: "OPEN_VOICE_GUILD"
      }), null == b || b()
    };
    return (0, r.jsx)(_.A, {
      variant: "text-xs/normal",
      text: g.intl.formatToPlainString(g.t["hq/Qze"], {
        guildName: n.name
      }),
      onClick: e
    })
  };
  return (0, r.jsxs)("div", {
    children: [(0, r.jsxs)(o.Heading, {
      variant: "heading-sm/semibold",
      color: "text-default",
      className: E.CT,
      children: [(0, r.jsx)(h.A, {
        channel: t,
        size: "xxs",
        color: o.LU0.colors.TEXT_DEFAULT,
        className: E.Ow
      }), A()]
    }), v()]
  })
}