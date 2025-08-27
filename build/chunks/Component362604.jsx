/** Chunk was on web.js **/
/** chunk id: 362604, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js"), require("./472816.js"), require("./794429.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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

function y(e) {
  let {
    message: t,
    channel: a,
    compact: y
  } = e, O = (0, s.Wu)([f.Z], () => Array.from(f.Z.getAllGuildStickers().values()).flat()).slice(0, 20), [v, I] = i.useState(null);
  return (i.useEffect(() => {
    let e = setInterval(() => {
      O.length > 0 && I(O[Math.floor(Math.random() * O.length)])
    }, 500);
    return () => clearInterval(e)
  }, [O]), null == a.guild_id) ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(u.Z, {
      className: o()(b.mainContainer, {
        [b.compact]: y
      }),
      icon: n(570111),
      compact: y,
      children: (0, r.jsx)("div", {
        className: o()(b.__invalid_content, {
          [b.compact]: y
        }),
        children: (0, r.jsx)("div", {
          className: o()(b.__invalid_messageContent, {
            [b.compact]: y
          }),
          children: "" !== t.content ? t.content : E.intl.string(E.t.wnn1DQ)
        })
      })
    }), (0, r.jsxs)("div", {
      className: b.actions,
      children: [(0, r.jsx)(c.DY3, {
        text: E.intl.string(E.t.ASZTf3),
        children: (0, r.jsx)(l.zx, {
          color: l.zx.Colors.PRIMARY,
          onClick: () => {
            p.default.track(g.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
              message_id: t.id,
              channel_id: a.id,
              guild_id: a.guild_id,
              action_type: "upload_file"
            }), h.S.dispatch(g.CkL.UPLOAD_FILE), (0, d.fE)({
              message: t,
              channel: a,
              shouldMention: true
            })
          },
          children: (0, r.jsx)(c.FmF, {
            size: "md",
            color: "currentColor"
          })
        })
      }), (0, r.jsx)(c.DY3, {
        text: E.intl.string(E.t.gbrrAw),
        children: (0, r.jsx)(l.zx, {
          color: l.zx.Colors.PRIMARY,
          onClick: () => {
            p.default.track(g.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
              message_id: t.id,
              channel_id: a.id,
              guild_id: a.guild_id,
              action_type: "sticker"
            }), (0, m.O)(t.id, a)
          },
          children: null != v ? (0, r.jsx)(_.Z, {
            size: 32,
            sticker: v
          }) : (0, r.jsx)(c.EO4, {
            size: "md",
            color: "currentColor"
          })
        })
      })]
    })]
  })
}