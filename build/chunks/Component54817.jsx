/** Chunk was on 91173 **/
/** chunk id: 54817, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk385499 = require("./385499.jsx"),
  Chunk739566 = require("./739566.js"),
  Chunk464891 = require("./464891.jsx"),
  Chunk83561 = require("./83561.jsx"),
  Chunk834129 = require("./834129.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk674563 = require("./674563.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk682392 = require("./682392.js");

function _(e) {
  let {
    message: t,
    compact: n,
    usernameHook: i
  } = e, _ = (0, s.ZP)(t), h = i(_), {
    avatarSrc: b,
    eventHandlers: {
      onMouseEnter: E,
      onMouseLeave: C
    }
  } = (0, u.m)(true), v = "" !== t.content ? new Date(t.content).toLocaleString(f.intl.currentLocale, {
    hour: "numeric",
    minute: "2-digit",
    month: "2-digit",
    day: "2-digit",
    year: "numeric"
  }) : "";
  return (0, r.jsx)("div", {
    onMouseEnter: E,
    onMouseLeave: C,
    children: (0, r.jsx)(d.Z, {
      className: l()(g.mainContainer, {
        [g.compact]: n
      }),
      iconNode: n ? null : (0, r.jsx)(u.S, {
        src: b
      }),
      iconContainerClassName: g.iconContainer,
      compact: n,
      children: (0, r.jsxs)("div", {
        className: l()(g.content, {
          [g.compact]: n
        }),
        children: [(0, r.jsx)(c.nD, {
          message: t,
          messageClassname: g.spanCorrection,
          className: l()(g.usernameContainer, g.spanCorrection, {
            [g.compact]: n
          }),
          username: (0, r.jsxs)("div", {
            className: g.spanCorrection,
            children: [(0, r.jsx)(a.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: g.username,
              children: f.intl.string(f.t.hG1StL)
            }), (0, r.jsx)(o.Z, {
              type: m.Hb.SYSTEM_DM,
              className: g.systemTag
            })]
          }),
          compact: n,
          showTimestamp: true
        }), (0, r.jsx)("div", {
          className: l()(g.__invalid_messageContent, {
            [g.compact]: n
          }),
          children: t.type === p.uaV.GUILD_INCIDENT_ALERT_MODE_ENABLED ? f.intl.format(f.t["+m8eDw"], {
            username: _.nick,
            usernameHook: h,
            time: v
          }) : f.intl.format(f.t.BHeke3, {
            username: _.nick,
            usernameHook: h
          })
        })]
      })
    })
  })
}