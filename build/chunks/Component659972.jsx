/** Chunk was on 73736 **/
/** chunk id: 659972, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m,
  k: () => b
}), require("./953529.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk372769 = require("./372769.jsx"),
  Chunk857395 = require("./857395.jsx"),
  Chunk131154 = require("./131154.jsx"),
  Chunk38981 = require("./38981.jsx"),
  Chunk302592 = require("./302592.js"),
  b = ((r = {})[r.UNSPECIFIED = 0] = "UNSPECIFIED", r[r.TRENDING = 1] = "TRENDING", r[r.PERSONALIZED = 2] = "PERSONALIZED", r[r.USER_GUILDS = 3] = "USER_GUILDS", r[r.FRIENDS_GUILDS = 4] = "FRIENDS_GUILDS", r[r.INTRO_CARD = 5] = "INTRO_CARD", r[r.FEATURED = 6] = "FEATURED", r);

function m(e) {
  let {
    guild: t,
    stageInstance: n,
    showGuildPopout: r,
    setShowGuildPopout: a,
    handleGuildNameClick: b,
    source: m,
    speakers: f,
    speakerCount: x,
    audienceCount: p,
    channelName: v
  } = e, j = l.useRef(null), N = t.id;
  return (0, i.jsx)("div", {
    className: _.contentContainer,
    children: (0, i.jsxs)("div", {
      className: _.headerContainer,
      children: [(0, i.jsxs)("div", {
        className: _.guildInfoContainer,
        children: [(0, i.jsx)(u.Z, {
          guildId: N,
          shouldShow: r,
          onRequestClose: () => a(false),
          targetElementRef: j,
          children: () => (0, i.jsxs)(s.P3F, {
            className: _.flexContainerRow,
            onClick: b,
            innerRef: j,
            children: [(0, i.jsx)(c.Z, {
              guild: t,
              size: c.Z.Sizes.MINI,
              className: _.guildIcon
            }), (0, i.jsxs)("div", {
              className: _.flexContainerRow,
              children: [(0, i.jsx)(s.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: o()(_.guildName, {
                  [_.disabled]: null == b
                }),
                children: t.name
              }), (0, i.jsx)(d.Z, {
                guild: t
              })]
            })]
          })
        }), (0, i.jsxs)("div", {
          className: _.rightJustifiedContent,
          children: [6 === m && (0, i.jsx)("div", {
            className: _.featuredTag,
            children: (0, i.jsx)(s.Text, {
              variant: "text-sm/normal",
              className: _.featuredTagText,
              children: "Featured"
            })
          }), (0, i.jsx)(g.Z, {
            count: p,
            className: _.__invalid_audienceCount
          })]
        })]
      }), (0, i.jsx)(s.Text, {
        color: "header-primary",
        variant: "text-lg/semibold",
        className: _.topicText,
        children: n.topic
      }), (0, i.jsx)(s.Text, {
        color: "header-secondary",
        className: _.description,
        variant: "text-sm/normal",
        children: n.description
      }), (0, i.jsx)(h.Z, {
        guild: t,
        speakers: f,
        speakerCount: x,
        className: _.speakers
      }), null != v && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("hr", {
          className: _.divider
        }), (0, i.jsxs)("div", {
          className: _.footer,
          children: [(0, i.jsx)(s.ewx, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: _.icon
          }), (0, i.jsx)(s.Text, {
            color: "header-secondary",
            className: _.__invalid_label,
            variant: "text-sm/normal",
            children: v
          })]
        })]
      })]
    })
  })
}