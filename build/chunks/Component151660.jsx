/** Chunk was on 92917 **/
/** chunk id: 151660, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js"), require("./864466.js"), require("./443073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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

function A(e) {
  let {
    message: t,
    channel: l,
    compact: A
  } = e, y = (0, s.yK)([d.A], () => Array.from(d.A.getAllGuildStickers().values()).flat()).slice(0, 20), [v, x] = i.useState(null);
  return (i.useEffect(() => {
    let e = setInterval(() => {
      y.length > 0 && x(y[Math.floor(Math.random() * y.length)])
    }, 500);
    return () => clearInterval(e)
  }, [y]), null == l.guild_id) ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(c.A, {
      className: a()(b.r, {
        [b.o]: A
      }),
      icon: n(394803),
      compact: A,
      children: (0, r.jsx)("div", {
        className: a()({
          [b.o]: A
        }),
        children: (0, r.jsx)("div", {
          className: a()({
            [b.o]: A
          }),
          children: "" !== t.content ? t.content : _.intl.string(_.t.wnn1Dc)
        })
      })
    }), (0, r.jsxs)(o.ButtonGroup, {
      children: [(0, r.jsx)(o.Button, {
        variant: "secondary",
        text: _.intl.string(_.t.ASZTf3),
        icon: o.XGR,
        onClick: () => {
          m.default.track(h.HAw.CHANNEL_PROMPT_ACTION_CLICKED, {
            message_id: t.id,
            channel_id: l.id,
            guild_id: l.guild_id,
            action_type: "upload_file"
          }), f._.dispatch(h.jej.UPLOAD_FILE, {
            channelId: l.id
          }), (0, u.Yf)({
            message: t,
            channel: l,
            shouldMention: true
          })
        }
      }), (0, r.jsx)(o.Button, {
        variant: "secondary",
        text: _.intl.string(_.t.gbrrAz),
        icon: null != v ? {
          type: "sticker",
          asset: v,
          component: p.A
        } : o.nm2,
        onClick: () => {
          m.default.track(h.HAw.CHANNEL_PROMPT_ACTION_CLICKED, {
            message_id: t.id,
            channel_id: l.id,
            guild_id: l.guild_id,
            action_type: "sticker"
          }), (0, g.Q)(t.id, l)
        }
      })]
    })]
  })
}