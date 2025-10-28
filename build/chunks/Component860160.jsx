/** Chunk was on 1272 **/
/** chunk id: 860160, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk25493 = require("./25493.js");

function b(e) {
  var t;
  let {
    item: n
  } = e, b = i.useMemo(() => {
    switch (n.data.kind) {
      case "message":
      case "channelSummary":
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
      case "channelSummary":
        return n.data.topic.channelId;
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
  }, [n]), I = i.useMemo(() => {
    if ("contentInventory" === n.data.kind) return n.data.content.author_id
  }, [n]), v = i.useMemo(() => {
    switch (n.data.kind) {
      case "message":
      case "forumThread":
        return m.default.extractTimestamp(n.data.message.id);
      case "channelSummary":
        return m.default.extractTimestamp(n.data.topic.endId);
      case "guildEvent":
        return m.default.extractTimestamp(n.data.eventId);
      case "generatedCandidate":
        return m.default.extractTimestamp(n.data.item.content_id);
      default:
        return n.timestamp
    }
  }, [n]), y = (0, a.e7)([d.Z], () => d.Z.getChannel(E), [E]), C = null != (t = null == y ? true : y.guild_id) ? t : O, S = (0, a.e7)([p.Z], () => null != C ? p.Z.getGuild(C) : null, [C]), T = (0, a.e7)([f.default], () => null != I ? f.default.getUser(I) : null, [I]);
  return "unknown" === b ? null : (0, r.jsx)("div", {
    className: _.container,
    children: (0, r.jsxs)("div", {
      className: _.header,
      children: [(() => {
        if ("guild" === b && null != S) return (0, r.jsx)(o.Z, {
          guild: S,
          size: "Medium",
          active: false,
          showBadge: false,
          textScale: 1,
          showTooltip: false,
          tooltipPosition: "top",
          animate: false
        });
        if ("user" === b && null != T) {
          let e = T.getAvatarURL(true, 50);
          return (0, r.jsx)("img", {
            src: e,
            alt: T.username,
            className: _.avatar
          })
        }
        return null
      })(), (0, r.jsxs)("div", {
        className: _.headerInfo,
        children: [(0, r.jsx)("div", {
          className: _.titleRow,
          children: (0, r.jsxs)("div", {
            className: _.titleLeft,
            children: ["guild" === b && null != S ? (0, r.jsx)("div", {
              className: _.title,
              children: S.name
            }) : "user" === b && null != T ? (0, r.jsx)("div", {
              className: _.title,
              children: T.username
            }) : null, (0, r.jsx)("div", {
              className: _.timestamp,
              children: (0, u.a3)(v)
            })]
          })
        }), (() => {
          let e = (() => {
            switch (n.data.kind) {
              case "message":
                if (n.channelType === h.d4z.GUILD_ANNOUNCEMENT) return g.intl.string(g.t["8P08G9"]);
                return g.intl.string(g.t.hMFMY9);
              case "channelSummary":
              case "generatedCandidate":
                return g.intl.string(g.t.ljgIO9);
              case "guildEvent":
                return g.intl.string(g.t["6pFsLQ"]);
              case "forumThread":
                return g.intl.string(g.t.bYNuVx);
              case "contentInventory":
                switch (n.data.content.content_type) {
                  case l.s.CUSTOM_STATUS:
                    return g.intl.string(g.t.fxOLPR);
                  case l.s.TOP_GAME:
                  case l.s.PLAYED_GAME:
                    return g.intl.string(g.t.ktOTRQ);
                  default:
                    return "".concat(n.data.content.content_type)
                }
              default:
                return ""
            }
          })();
          if ("user" === b) return (0, r.jsx)("div", {
            className: _.subtitle,
            children: (0, r.jsx)("span", {
              className: _.subtitleText,
              children: e
            })
          });
          if (null != y && null != e) {
            let t = (0, s.KS)(y, S);
            return (0, r.jsxs)("div", {
              className: _.subtitle,
              children: [(0, r.jsx)("span", {
                className: _.subtitleText,
                children: e
              }), (0, r.jsx)("span", {
                className: _.subtitleText,
                children: g.intl.string(g.t.CHUAYk)
              }), (0, r.jsxs)("span", {
                className: _.subtitleText,
                children: [null != t && (0, r.jsx)(t, {
                  size: "custom",
                  width: 16,
                  height: 16,
                  className: _.channelIcon
                }), y.name]
              })]
            })
          }
          return null != e ? (0, r.jsx)("div", {
            className: _.subtitle,
            children: (0, r.jsx)("span", {
              className: _.subtitleText,
              children: e
            })
          }) : null
        })()]
      })]
    })
  })
}