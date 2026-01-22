/** Chunk was on web.js **/
/** chunk id: 151660, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js"), require("./864466.js"), require("./443073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk888675 = require("./888675.jsx"),
  Chunk118517 = require("./118517.js"),
  Chunk679382 = require("./679382.js"),
  Chunk148355 = require("./148355.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk203982 = require("./203982.js"),
  Chunk420208 = require("./420208.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk173990 = require("./173990.js");

function b(e) {
  let {
    message: t,
    channel: a,
    compact: b
  } = e, y = (0, o.yK)([d.A], () => Array.from(d.A.getAllGuildStickers().values()).flat()).slice(0, 20), [O, A] = i.useState(null);
  return (i.useEffect(() => {
    let e = setInterval(() => {
      y.length > 0 && A(y[Math.floor(Math.random() * y.length)])
    }, 500);
    return () => clearInterval(e)
  }, [y]), null == a.guild_id) ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(c.A, {
      className: s()(E.r, {
        [E.o]: b
      }),
      icon: n(394803),
      compact: b,
      children: (0, r.jsx)("div", {
        className: s()({
          [E.o]: b
        }),
        children: (0, r.jsx)("div", {
          className: s()({
            [E.o]: b
          }),
          children: "" !== t.content ? t.content : g.intl.string(g.t.wnn1Dc)
        })
      })
    }), (0, r.jsxs)(l.ButtonGroup, {
      children: [(0, r.jsx)(l.Button, {
        variant: "secondary",
        text: g.intl.string(g.t.ASZTf3),
        icon: l.XGR,
        onClick: () => {
          p.default.track(m.HAw.CHANNEL_PROMPT_ACTION_CLICKED, {
            message_id: t.id,
            channel_id: a.id,
            guild_id: a.guild_id,
            action_type: "upload_file"
          }), _._.dispatch(m.jej.UPLOAD_FILE, {
            channelId: a.id
          }), (0, u.Yf)({
            message: t,
            channel: a,
            shouldMention: true
          })
        }
      }), (0, r.jsx)(l.Button, {
        variant: "secondary",
        text: g.intl.string(g.t.gbrrAz),
        icon: null != O ? {
          type: "sticker",
          asset: O,
          component: f.A
        } : l.nm2,
        onClick: () => {
          p.default.track(m.HAw.CHANNEL_PROMPT_ACTION_CLICKED, {
            message_id: t.id,
            channel_id: a.id,
            guild_id: a.guild_id,
            action_type: "sticker"
          }), (0, h.Q)(t.id, a)
        }
      })]
    })]
  })
}