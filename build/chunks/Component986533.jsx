/** Chunk was on web.js **/
/** chunk id: 986533, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk709066 = require("./709066.jsx"),
  Chunk763754 = require("./763754.js"),
  Chunk643204 = require("./643204.jsx"),
  Chunk809115 = require("./809115.jsx"),
  Chunk888675 = require("./888675.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk705751 = require("./705751.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk234054 = require("./234054.js");

function m(e) {
  let {
    message: t,
    compact: n,
    usernameHook: i
  } = e, m = (0, l.Ay)(t), g = i(m), {
    avatarSrc: E,
    eventHandlers: {
      onMouseEnter: y,
      onMouseLeave: b
    }
  } = (0, u.a)(true), O = "" !== t.content ? new Date(t.content).toLocaleString(_.intl.currentLocale, {
    hour: "numeric",
    minute: "2-digit",
    month: "2-digit",
    day: "2-digit",
    year: "numeric"
  }) : "";
  return (0, r.jsx)("div", {
    onMouseEnter: y,
    onMouseLeave: b,
    children: (0, r.jsx)(d.A, {
      className: a()(h.rs, {
        [h.oE]: n
      }),
      iconNode: n ? null : (0, r.jsx)(u.l, {
        src: E
      }),
      iconContainerClassName: h.zc,
      compact: n,
      children: (0, r.jsxs)("div", {
        className: a()(h.Qs, {
          [h.oE]: n
        }),
        children: [(0, r.jsx)(c.ix, {
          message: t,
          messageClassname: h.he,
          className: a()(h.QV, h.he, {
            [h.oE]: n
          }),
          username: (0, r.jsxs)("div", {
            className: h.he,
            children: [(0, r.jsx)(s.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: h.Xh,
              children: _.intl.string(_.t.hG1StD)
            }), (0, r.jsx)(o.A, {
              type: p.nu.SYSTEM_DM,
              className: h.Al
            })]
          }),
          compact: n,
          showTimestamp: true
        }), (0, r.jsx)("div", {
          className: a()(h.__invalid_messageContent, {
            [h.oE]: n
          }),
          children: t.type === f.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED ? _.intl.format(_.t["+m8eD7"], {
            username: m.nick,
            usernameHook: g,
            time: O
          }) : _.intl.format(_.t["BHeke+"], {
            username: m.nick,
            usernameHook: g
          })
        })]
      })
    })
  })
}