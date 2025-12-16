/** Chunk was on 1272 **/
/** chunk id: 860160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk876215 = require("./876215.js"),
  Chunk442837 = require("./442837.js"),
  Chunk471445 = require("./471445.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk924301 = require("./924301.js"),
  Chunk178480 = require("./178480.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk697392 = require("./697392.js");

function _(e) {
  var t;
  let {
    item: n
  } = e, _ = i.useMemo(() => {
    switch (n.data.kind) {
      case "message":
      case "guildEvent":
      case "forumThread":
      case "generatedCandidate":
        return "guild";
      case "contentInventory":
        return "user";
      default:
        return "unknown"
    }
  }, [n]), E = i.useMemo(() => {
    switch (n.data.kind) {
      case "message":
        return n.data.message.channel_id;
      case "generatedCandidate":
        return n.data.item.channel_id;
      case "forumThread":
        return n.data.threadChannel.id;
      default:
        return
    }
  }, [n]), O = i.useMemo(() => {
    if ("guildEvent" === n.data.kind) {
      let e = c.ZP.getGuildScheduledEvent(n.data.eventId);
      return null == e ? true : e.guild_id
    }
  }, [n]), v = i.useMemo(() => {
    if ("contentInventory" === n.data.kind) return n.data.content.author_id
  }, [n]), y = i.useMemo(() => {
    switch (n.data.kind) {
      case "message":
      case "forumThread":
        return g.default.extractTimestamp(n.data.message.id);
      case "guildEvent":
        return g.default.extractTimestamp(n.data.eventId);
      case "generatedCandidate":
        return g.default.extractTimestamp(n.data.item.content_id);
      default:
        return n.timestamp
    }
  }, [n]), I = (0, a.e7)([d.Z], () => d.Z.getChannel(E), [E]), C = null != (t = null == I ? true : I.guild_id) ? t : O, S = (0, a.e7)([p.Z], () => null != C ? p.Z.getGuild(C) : null, [C]), T = (0, a.e7)([f.default], () => null != v ? f.default.getUser(v) : null, [v]);
  return "unknown" === _ ? null : (0, r.jsx)("div", {
    className: b.container,
    children: (0, r.jsxs)("div", {
      className: b.header,
      children: [(() => {
        if ("guild" === _ && null != S) return (0, r.jsx)(o.Z, {
          guild: S,
          size: "Medium",
          active: false,
          showBadge: false,
          textScale: 1,
          showTooltip: false,
          tooltipPosition: "top",
          animate: false
        });
        if ("user" === _ && null != T) {
          let e = T.getAvatarURL(true, 50);
          return (0, r.jsx)("img", {
            src: e,
            alt: T.username,
            className: b.avatar
          })
        }
        return null
      })(), (0, r.jsxs)("div", {
        className: b.headerInfo,
        children: [(0, r.jsx)("div", {
          className: b.titleRow,
          children: (0, r.jsxs)("div", {
            className: b.titleLeft,
            children: ["guild" === _ && null != S ? (0, r.jsx)("div", {
              className: b.title,
              children: S.name
            }) : "user" === _ && null != T ? (0, r.jsx)("div", {
              className: b.title,
              children: T.username
            }) : null, (0, r.jsx)("div", {
              className: b.timestamp,
              children: (0, u.a3)(y)
            })]
          })
        }), (() => {
          let e = (() => {
            switch (n.data.kind) {
              case "message":
                if (n.channelType === h.d4z.GUILD_ANNOUNCEMENT) return m.intl.string(m.t["8P08G9"]);
                return m.intl.string(m.t.hMFMY9);
              case "generatedCandidate":
                return m.intl.string(m.t.ljgIO9);
              case "guildEvent":
                return m.intl.string(m.t["6pFsLQ"]);
              case "forumThread":
                return m.intl.string(m.t.bYNuVx);
              case "contentInventory":
                switch (n.data.content.content_type) {
                  case l.s.CUSTOM_STATUS:
                    return m.intl.string(m.t.fxOLPR);
                  case l.s.TOP_GAME:
                  case l.s.PLAYED_GAME:
                    return m.intl.string(m.t.ktOTRQ);
                  default:
                    return "".concat(n.data.content.content_type)
                }
              default:
                return ""
            }
          })();
          if ("user" === _) return (0, r.jsx)("div", {
            className: b.subtitle,
            children: (0, r.jsx)("span", {
              className: b.subtitleText,
              children: e
            })
          });
          if (null != I && null != e) {
            let t = (0, s.KS)(I, S);
            return (0, r.jsxs)("div", {
              className: b.subtitle,
              children: [(0, r.jsx)("span", {
                className: b.subtitleText,
                children: e
              }), (0, r.jsx)("span", {
                className: b.subtitleText,
                children: m.intl.string(m.t.CHUAYk)
              }), (0, r.jsxs)("span", {
                className: b.subtitleText,
                children: [null != t && (0, r.jsx)(t, {
                  size: "custom",
                  width: 16,
                  height: 16,
                  className: b.channelIcon
                }), I.name]
              })]
            })
          }
          return null != e ? (0, r.jsx)("div", {
            className: b.subtitle,
            children: (0, r.jsx)("span", {
              className: b.subtitleText,
              children: e
            })
          }) : null
        })()]
      })]
    })
  })
}