/** Chunk was on web.js **/
/** chunk id: 821241, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk709066 = require("./709066.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk763754 = require("./763754.js"),
  Chunk643204 = require("./643204.jsx"),
  Chunk809115 = require("./809115.jsx"),
  Chunk888675 = require("./888675.jsx"),
  Chunk705751 = require("./705751.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk234054 = require("./234054.js");

function g(e) {
  var t;
  let {
    message: n,
    compact: i,
    usernameHook: g,
    channel: E
  } = e, b = (0, s.bG)([c.A], () => c.A.getGuild(E.guild_id)), y = (0, u.Ay)(n), O = g(y), {
    avatarSrc: A,
    eventHandlers: {
      onMouseEnter: v,
      onMouseLeave: S
    }
  } = (0, f.a)(true);
  return (0, r.jsx)("div", {
    onMouseEnter: v,
    onMouseLeave: S,
    children: (0, r.jsx)(p.A, {
      className: a()(m.rs, {
        [m.oE]: i
      }),
      iconNode: i ? null : (0, r.jsx)(f.l, {
        src: A
      }),
      iconContainerClassName: m.zc,
      compact: i,
      children: (0, r.jsxs)("div", {
        className: a()(m.Qs, {
          [m.oE]: i
        }),
        children: [(0, r.jsx)(d.ix, {
          message: n,
          messageClassname: m.he,
          className: a()(m.QV, m.he, {
            [m.oE]: i
          }),
          username: (0, r.jsxs)("div", {
            className: m.he,
            children: [(0, r.jsx)(o.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: m.Xh,
              children: h.intl.string(h.t.hG1StD)
            }), (0, r.jsx)(l.A, {
              type: _.nu.SYSTEM_DM,
              className: m.Al
            })]
          }),
          compact: i,
          showTimestamp: true
        }), (0, r.jsx)("div", {
          className: a()(m.__invalid_messageContent, {
            [m.oE]: i
          }),
          children: h.intl.format(h.t.W0UBI3, {
            username: y.nick,
            usernameHook: O,
            guildName: null != (t = null == b ? true : b.name) ? t : ""
          })
        })]
      })
    })
  })
}