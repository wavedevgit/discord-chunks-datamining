/** Chunk was on 64935 **/
/** chunk id: 986533, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
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

function _(e) {
  let {
    message: t,
    compact: n,
    usernameHook: i
  } = e, _ = (0, o.Ay)(t), h = i(_), {
    avatarSrc: b,
    eventHandlers: {
      onMouseEnter: A,
      onMouseLeave: y
    }
  } = (0, u.a)(true), v = "" !== t.content ? new Date(t.content).toLocaleString(f.intl.currentLocale, {
    hour: "numeric",
    minute: "2-digit",
    month: "2-digit",
    day: "2-digit",
    year: "numeric"
  }) : "";
  return (0, r.jsx)("div", {
    onMouseEnter: A,
    onMouseLeave: y,
    children: (0, r.jsx)(d.A, {
      className: l()(g.rs, {
        [g.oE]: n
      }),
      iconNode: n ? null : (0, r.jsx)(u.l, {
        src: b
      }),
      iconContainerClassName: g.zc,
      compact: n,
      children: (0, r.jsxs)("div", {
        className: l()(g.Qs, {
          [g.oE]: n
        }),
        children: [(0, r.jsx)(c.ix, {
          message: t,
          messageClassname: g.he,
          className: l()(g.QV, g.he, {
            [g.oE]: n
          }),
          username: (0, r.jsxs)("div", {
            className: g.he,
            children: [(0, r.jsx)(a.Text, {
              variant: "text-md/normal",
              color: "text-brand",
              tag: "span",
              className: g.Xh,
              children: f.intl.string(f.t.hG1StD)
            }), (0, r.jsx)(s.A, {
              type: m.nu.SYSTEM_DM,
              className: g.Al
            })]
          }),
          compact: n,
          showTimestamp: true
        }), (0, r.jsx)("div", {
          className: l()(g.__invalid_messageContent, {
            [g.oE]: n
          }),
          children: t.type === p.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED ? f.intl.format(f.t["+m8eD7"], {
            username: _.nick,
            usernameHook: h,
            time: v
          }) : f.intl.format(f.t["BHeke+"], {
            username: _.nick,
            usernameHook: h
          })
        })]
      })
    })
  })
}