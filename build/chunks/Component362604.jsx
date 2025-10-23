/** Chunk was on web.js **/
/** chunk id: 362604, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./472816.js"), require("./794429.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk623292 = require("./623292.js"),
  Chunk926491 = require("./926491.js"),
  Chunk419922 = require("./419922.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk585483 = require("./585483.js"),
  Chunk115610 = require("./115610.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk38297 = require("./38297.js");

function b(e) {
  let {
    message: t,
    channel: a,
    compact: b
  } = e, y = (0, s.Wu)([d.Z], () => Array.from(d.Z.getAllGuildStickers().values()).flat()).slice(0, 20), [O, v] = i.useState(null);
  return (i.useEffect(() => {
    let e = setInterval(() => {
      y.length > 0 && v(y[Math.floor(Math.random() * y.length)])
    }, 500);
    return () => clearInterval(e)
  }, [y]), null == a.guild_id) ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(c.Z, {
      className: o()(E.mainContainer, {
        [E.compact]: b
      }),
      icon: n(570111),
      compact: b,
      children: (0, r.jsx)("div", {
        className: o()({
          [E.compact]: b
        }),
        children: (0, r.jsx)("div", {
          className: o()({
            [E.compact]: b
          }),
          children: "" !== t.content ? t.content : g.intl.string(g.t.wnn1Dc)
        })
      })
    }), (0, r.jsxs)(l.ButtonGroup, {
      children: [(0, r.jsx)(l.Button, {
        variant: "secondary",
        text: g.intl.string(g.t.ASZTf3),
        icon: l.FmF,
        onClick: () => {
          _.default.track(m.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
            message_id: t.id,
            channel_id: a.id,
            guild_id: a.guild_id,
            action_type: "upload_file"
          }), p.S.dispatch(m.CkL.UPLOAD_FILE), (0, u.fE)({
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
          component: f.Z
        } : l.EO4,
        onClick: () => {
          _.default.track(m.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
            message_id: t.id,
            channel_id: a.id,
            guild_id: a.guild_id,
            action_type: "sticker"
          }), (0, h.O)(t.id, a)
        }
      })]
    })]
  })
}