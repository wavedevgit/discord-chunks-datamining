/** Chunk was on 73736 **/
/** chunk id: 659972, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b,
  k: () => m
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
  Chunk613419 = require("./613419.jsx"),
  Chunk302592 = require("./302592.js"),
  m = ((r = {})[r.UNSPECIFIED = 0] = "UNSPECIFIED", r[r.TRENDING = 1] = "TRENDING", r[r.PERSONALIZED = 2] = "PERSONALIZED", r[r.USER_GUILDS = 3] = "USER_GUILDS", r[r.FRIENDS_GUILDS = 4] = "FRIENDS_GUILDS", r[r.INTRO_CARD = 5] = "INTRO_CARD", r[r.FEATURED = 6] = "FEATURED", r);

function b(e) {
  let {
    guild: t,
    stageInstance: n,
    showGuildPopout: r,
    setShowGuildPopout: a,
    handleGuildNameClick: m,
    source: b,
    speakers: f,
    speakerCount: p,
    audienceCount: v,
    channelName: _
  } = e, j = l.useRef(null), N = t.id;
  return (0, i.jsx)("div", {
    className: g.contentContainer,
    children: (0, i.jsxs)("div", {
      className: g.headerContainer,
      children: [(0, i.jsxs)("div", {
        className: g.guildInfoContainer,
        children: [(0, i.jsx)(u.Z, {
          guildId: N,
          shouldShow: r,
          onRequestClose: () => a(false),
          targetElementRef: j,
          children: () => (0, i.jsxs)(s.P3F, {
            className: g.flexContainerRow,
            onClick: m,
            innerRef: j,
            children: [(0, i.jsx)(c.Z, {
              guild: t,
              size: c.Z.Sizes.MINI,
              className: g.guildIcon
            }), (0, i.jsxs)("div", {
              className: g.flexContainerRow,
              children: [(0, i.jsx)(s.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: o()(g.guildName, {
                  [g.disabled]: null == m
                }),
                children: t.name
              }), (0, i.jsx)(d.Z, {
                guild: t
              })]
            })]
          })
        }), (0, i.jsxs)("div", {
          className: g.rightJustifiedContent,
          children: [6 === b && (0, i.jsx)("div", {
            className: g.featuredTag,
            children: (0, i.jsx)(s.Text, {
              variant: "text-sm/normal",
              className: g.featuredTagText,
              children: "Featured"
            })
          }), (0, i.jsx)(h.Z, {
            count: v,
            className: g.__invalid_audienceCount
          })]
        })]
      }), (0, i.jsx)(s.Text, {
        color: "header-primary",
        variant: "text-lg/semibold",
        className: g.topicText,
        children: n.topic
      }), (0, i.jsx)(s.Text, {
        color: "header-secondary",
        className: g.description,
        variant: "text-sm/normal",
        children: n.description
      }), (0, i.jsx)(x.Z, {
        guild: t,
        speakers: f,
        speakerCount: p,
        className: g.speakers
      }), null != _ && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("hr", {
          className: g.divider
        }), (0, i.jsxs)("div", {
          className: g.footer,
          children: [(0, i.jsx)(s.ewx, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20,
            className: g.icon
          }), (0, i.jsx)(s.Text, {
            color: "header-secondary",
            className: g.__invalid_label,
            variant: "text-sm/normal",
            children: _
          })]
        })]
      })]
    })
  })
}