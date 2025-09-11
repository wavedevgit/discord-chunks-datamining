/** Chunk was on web.js **/
/** chunk id: 362604, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./472816.js"), require("./794429.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk247708 = require("./247708.js");

function O(e) {
  let {
    message: t,
    channel: a,
    compact: O
  } = e, v = (0, s.Wu)([_.Z], () => Array.from(_.Z.getAllGuildStickers().values()).flat()).slice(0, 20), [I, T] = i.useState(null);
  return (i.useEffect(() => {
    let e = setInterval(() => {
      v.length > 0 && T(v[Math.floor(Math.random() * v.length)])
    }, 500);
    return () => clearInterval(e)
  }, [v]), null == a.guild_id) ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(d.Z, {
      className: o()(y.mainContainer, {
        [y.compact]: O
      }),
      icon: n(570111),
      compact: O,
      children: (0, r.jsx)("div", {
        className: o()(y.__invalid_content, {
          [y.compact]: O
        }),
        children: (0, r.jsx)("div", {
          className: o()(y.__invalid_messageContent, {
            [y.compact]: O
          }),
          children: "" !== t.content ? t.content : b.intl.string(b.t.wnn1DQ)
        })
      })
    }), (0, r.jsxs)("div", {
      className: y.actions,
      children: [(0, r.jsx)(l.u, {
        asContainer: true,
        text: b.intl.string(b.t.ASZTf3),
        children: (0, r.jsx)(c.zx, {
          color: c.zx.Colors.PRIMARY,
          onClick: () => {
            h.default.track(E.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
              message_id: t.id,
              channel_id: a.id,
              guild_id: a.guild_id,
              action_type: "upload_file"
            }), m.S.dispatch(E.CkL.UPLOAD_FILE), (0, f.fE)({
              message: t,
              channel: a,
              shouldMention: true
            })
          },
          children: (0, r.jsx)(u.FmF, {
            size: "md",
            color: "currentColor"
          })
        })
      }), (0, r.jsx)(l.u, {
        asContainer: true,
        text: b.intl.string(b.t.gbrrAw),
        children: (0, r.jsx)(c.zx, {
          color: c.zx.Colors.PRIMARY,
          onClick: () => {
            h.default.track(E.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
              message_id: t.id,
              channel_id: a.id,
              guild_id: a.guild_id,
              action_type: "sticker"
            }), (0, g.O)(t.id, a)
          },
          children: null != I ? (0, r.jsx)(p.Z, {
            size: 32,
            sticker: I
          }) : (0, r.jsx)(u.EO4, {
            size: "md",
            color: "currentColor"
          })
        })
      })]
    })]
  })
}