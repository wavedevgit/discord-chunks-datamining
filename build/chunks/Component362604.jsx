/** Chunk was on 66866 **/
/** chunk id: 362604, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js"), require("./472816.js"), require("./794429.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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

function C(e) {
  let {
    message: t,
    channel: l,
    compact: C
  } = e, v = (0, o.Wu)([p.Z], () => Array.from(p.Z.getAllGuildStickers().values()).flat()).slice(0, 20), [O, y] = i.useState(null);
  return (i.useEffect(() => {
    let e = setInterval(() => {
      v.length > 0 && y(v[Math.floor(Math.random() * v.length)])
    }, 500);
    return () => clearInterval(e)
  }, [v]), null == l.guild_id) ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(u.Z, {
      className: a()(E.mainContainer, {
        [E.compact]: C
      }),
      icon: n(570111),
      compact: C,
      children: (0, r.jsx)("div", {
        className: a()(E.__invalid_content, {
          [E.compact]: C
        }),
        children: (0, r.jsx)("div", {
          className: a()(E.__invalid_messageContent, {
            [E.compact]: C
          }),
          children: "" !== t.content ? t.content : b.intl.string(b.t.wnn1DQ)
        })
      })
    }), (0, r.jsxs)("div", {
      className: E.actions,
      children: [(0, r.jsx)(c.DY3, {
        text: b.intl.string(b.t.ASZTf3),
        children: (0, r.jsx)(s.zx, {
          color: s.zx.Colors.PRIMARY,
          onClick: () => {
            f.default.track(h.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
              message_id: t.id,
              channel_id: l.id,
              guild_id: l.guild_id,
              action_type: "upload_file"
            }), _.S.dispatch(h.CkL.UPLOAD_FILE), (0, d.fE)({
              message: t,
              channel: l,
              shouldMention: true
            })
          },
          children: (0, r.jsx)(c.FmF, {
            size: "md",
            color: "currentColor"
          })
        })
      }), (0, r.jsx)(c.DY3, {
        text: b.intl.string(b.t.gbrrAw),
        children: (0, r.jsx)(s.zx, {
          color: s.zx.Colors.PRIMARY,
          onClick: () => {
            f.default.track(h.rMx.CHANNEL_PROMPT_ACTION_CLICKED, {
              message_id: t.id,
              channel_id: l.id,
              guild_id: l.guild_id,
              action_type: "sticker"
            }), (0, g.O)(t.id, l)
          },
          children: null != O ? (0, r.jsx)(m.Z, {
            size: 32,
            sticker: O
          }) : (0, r.jsx)(c.EO4, {
            size: "md",
            color: "currentColor"
          })
        })
      })]
    })]
  })
}