/** Chunk was on web.js **/
/** chunk id: 54817, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk385499 = require("./385499.jsx"),
  Chunk739566 = require("./739566.js"),
  Chunk464891 = require("./464891.jsx"),
  Chunk83561 = require("./83561.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk674563 = require("./674563.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk138851 = require("./138851.js");

function h(e) {
  let {
    message: t,
    compact: n,
    usernameHook: i
  } = e, h = (0, l.ZP)(t), g = i(h), {
    avatarSrc: E,
    eventHandlers: {
      onMouseEnter: b,
      onMouseLeave: y
    }
  } = (0, u.m)(true), O = "" !== t.content ? new Date(t.content).toLocaleString(_.intl.currentLocale, {
    hour: "numeric",
    minute: "2-digit",
    month: "2-digit",
    day: "2-digit",
    year: "numeric"
  }) : "";
  return (0, r.jsx)("div", {
    onMouseEnter: b,
    onMouseLeave: y,
    children: (0, r.jsx)(d.Z, {
      className: a()(m.mainContainer, {
        [m.compact]: n
      }),
      iconNode: n ? null : (0, r.jsx)(u.S, {
        src: E
      }),
      iconContainerClassName: m.iconContainer,
      compact: n,
      children: (0, r.jsxs)("div", {
        className: a()(m.content, {
          [m.compact]: n
        }),
        children: [(0, r.jsx)(c.nD, {
          message: t,
          messageClassname: m.spanCorrection,
          className: a()(m.usernameContainer, m.spanCorrection, {
            [m.compact]: n
          }),
          username: (0, r.jsxs)("div", {
            className: m.spanCorrection,
            children: [(0, r.jsx)(o.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: m.username,
              children: _.intl.string(_.t.hG1StD)
            }), (0, r.jsx)(s.Z, {
              type: p.Hb.SYSTEM_DM,
              className: m.systemTag
            })]
          }),
          compact: n,
          showTimestamp: true
        }), (0, r.jsx)("div", {
          className: a()(m.__invalid_messageContent, {
            [m.compact]: n
          }),
          children: t.type === f.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED ? _.intl.format(_.t["+m8eD7"], {
            username: h.nick,
            usernameHook: g,
            time: O
          }) : _.intl.format(_.t["BHeke+"], {
            username: h.nick,
            usernameHook: g
          })
        })]
      })
    })
  })
}