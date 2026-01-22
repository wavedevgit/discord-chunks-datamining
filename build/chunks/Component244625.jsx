/** Chunk was on 21738 **/
/** chunk id: 244625, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk681154 = require("./681154.js"),
  Chunk311907 = require("./311907.js"),
  Chunk713654 = require("./713654.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk698441 = require("./698441.js"),
  Chunk995273 = require("./995273.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk310633 = require("./310633.js");

function b(e) {
  var t;
  let {
    item: n
  } = e, b = i.useMemo(() => {
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
  }, [n]), _ = i.useMemo(() => {
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
  }, [n]), E = i.useMemo(() => {
    if ("guildEvent" === n.data.kind) {
      let e = c.Ay.getGuildScheduledEvent(n.data.eventId);
      return null == e ? true : e.guild_id
    }
  }, [n]), O = i.useMemo(() => {
    if ("contentInventory" === n.data.kind) return n.data.content.author_id
  }, [n]), y = i.useMemo(() => {
    switch (n.data.kind) {
      case "message":
      case "forumThread":
        return h.default.extractTimestamp(n.data.message.id);
      case "guildEvent":
        return h.default.extractTimestamp(n.data.eventId);
      case "generatedCandidate":
        return h.default.extractTimestamp(n.data.item.content_id);
      default:
        return n.timestamp
    }
  }, [n]), I = (0, a.bG)([d.A], () => d.A.getChannel(_), [_]), v = null != (t = null == I ? true : I.guild_id) ? t : E, S = (0, a.bG)([p.A], () => null != v ? p.A.getGuild(v) : null, [v]), C = (0, a.bG)([f.default], () => null != O ? f.default.getUser(O) : null, [O]);
  return "unknown" === b ? null : (0, r.jsx)("div", {
    className: m.kL,
    children: (0, r.jsxs)("div", {
      className: m.wx,
      children: [(() => {
        if ("guild" === b && null != S) return (0, r.jsx)(o.A, {
          guild: S,
          size: "Medium",
          active: false,
          showBadge: false,
          textScale: 1,
          showTooltip: false,
          tooltipPosition: "top",
          animate: false
        });
        if ("user" === b && null != C) {
          let e = C.getAvatarURL(true, 50);
          return (0, r.jsx)("img", {
            src: e,
            alt: C.username,
            className: m.my
          })
        }
        return null
      })(), (0, r.jsxs)("div", {
        className: m.Se,
        children: [(0, r.jsx)("div", {
          className: m.$,
          children: (0, r.jsxs)("div", {
            className: m.gH,
            children: ["guild" === b && null != S ? (0, r.jsx)("div", {
              className: m.DD,
              children: S.name
            }) : "user" === b && null != C ? (0, r.jsx)("div", {
              className: m.DD,
              children: C.username
            }) : null, (0, r.jsx)("div", {
              className: m.vE,
              children: (0, u.jb)(y)
            })]
          })
        }), (() => {
          let e = (() => {
            switch (n.data.kind) {
              case "message":
                if (n.channelType === A.rbe.GUILD_ANNOUNCEMENT) return g.intl.string(g.t["8P08G9"]);
                return g.intl.string(g.t.hMFMY9);
              case "generatedCandidate":
                return g.intl.string(g.t.ljgIO9);
              case "guildEvent":
                return g.intl.string(g.t["6pFsLQ"]);
              case "forumThread":
                return g.intl.string(g.t.bYNuVx);
              case "contentInventory":
                switch (n.data.content.content_type) {
                  case l.I.CUSTOM_STATUS:
                    return g.intl.string(g.t.fxOLPR);
                  case l.I.TOP_GAME:
                  case l.I.PLAYED_GAME:
                    return g.intl.string(g.t.ktOTRQ);
                  default:
                    return "".concat(n.data.content.content_type)
                }
              default:
                return ""
            }
          })();
          if ("user" === b) return (0, r.jsx)("div", {
            className: m.VA,
            children: (0, r.jsx)("span", {
              className: m.o4,
              children: e
            })
          });
          if (null != I && null != e) {
            let t = (0, s.gU)(I, S);
            return (0, r.jsxs)("div", {
              className: m.VA,
              children: [(0, r.jsx)("span", {
                className: m.o4,
                children: e
              }), (0, r.jsx)("span", {
                className: m.o4,
                children: g.intl.string(g.t.CHUAYk)
              }), (0, r.jsxs)("span", {
                className: m.o4,
                children: [null != t && (0, r.jsx)(t, {
                  size: "custom",
                  width: 16,
                  height: 16,
                  className: m.p
                }), I.name]
              })]
            })
          }
          return null != e ? (0, r.jsx)("div", {
            className: m.VA,
            children: (0, r.jsx)("span", {
              className: m.o4,
              children: e
            })
          }) : null
        })()]
      })]
    })
  })
}