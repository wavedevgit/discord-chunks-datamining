/** Chunk was on 193 **/
/** chunk id: 621516, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk706619 = require("./706619.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk410030 = require("./410030.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk961675 = require("./961675.js"),
  Chunk883429 = require("./883429.js"),
  Chunk432771 = require("./432771.js"),
  Chunk406074 = require("./406074.js"),
  Chunk434404 = require("./434404.js"),
  Chunk430824 = require("./430824.js"),
  Chunk63063 = require("./63063.js"),
  Chunk595433 = require("./595433.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk993843 = require("./993843.js"),
  Chunk906739 = require("./906739.js"),
  Chunk965358 = require("./965358.js"),
  Chunk420196 = require("./420196.js"),
  Chunk433075 = require("./433075.js");

function P(e) {
  let {
    handleHide: t
  } = e;
  return (0, a.jsx)(d.P3F, {
    onClick: t,
    className: T.closeButton,
    "aria-label": y.intl.string(y.t.WAI6xu),
    children: (0, a.jsx)(d.Dio, {
      size: "md",
      color: "currentColor",
      className: T.closeIcon
    })
  })
}

function I(e) {
  let {
    username: t,
    title: n,
    videoSrc: r,
    messageCount: i,
    reaction: s,
    reactionCount: o,
    classname: c
  } = e;
  return (0, a.jsxs)("div", {
    className: l()(T.videoPreview, c),
    children: [(0, a.jsx)("div", {
      className: T.authorRow,
      children: (0, a.jsxs)("div", {
        className: T.rowGroup,
        children: [(0, a.jsx)(d.Text, {
          tag: "span",
          className: T.author,
          variant: "text-sm/semibold",
          children: t
        }), (0, a.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          className: T.postCreationTimestamp,
          children: y.intl.string(y.t.mA0IvI)
        })]
      })
    }), (0, a.jsx)(d.Heading, {
      variant: "heading-md/extrabold",
      className: T.title,
      color: "text-strong",
      "aria-hidden": true,
      children: n
    }), (0, a.jsx)(d.LZC, {
      size: 10
    }), (0, a.jsx)(m.Z, {
      className: T.video,
      src: r,
      autoPlay: true,
      loop: true,
      muted: true
    }), (0, a.jsx)(d.LZC, {
      size: 10
    }), (0, a.jsx)("div", {
      className: T.footer,
      children: (0, a.jsxs)("div", {
        className: T.forumPostControls,
        children: [(0, a.jsxs)("div", {
          className: T.messageCountBox,
          children: [(0, a.jsx)("span", {
            className: T.messageCountIcon,
            children: (0, a.jsx)(d.kBi, {
              size: "xs",
              color: "currentColor"
            })
          }), (0, a.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "interactive-text-default",
            children: i
          })]
        }), (0, a.jsxs)("div", {
          className: T.reactionBox,
          children: [(0, a.jsx)("span", {
            role: "img",
            "aria-label": "",
            children: s
          }), (0, a.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "interactive-text-default",
            children: o
          })]
        })]
      })
    })]
  })
}
let E = e => {
  var t, n;
  let {
    channel: i
  } = e, m = (0, u.ZP)(), E = (0, c.wj)(m), _ = (0, o.e7)([p.Z], () => p.Z.getGuild(i.guild_id)), R = (0, o.e7)([f.Z], () => f.Z.hasHidden(i.id)), M = (0, x.C)({
    guildId: i.guild_id,
    channelId: i.id
  }), {
    transitions: Z,
    setVisible: k
  } = (0, v.H)(), A = r.useCallback(() => {
    k(false), h.Z.hideAdminOnboarding(i.id, true)
  }, [i, k]);
  r.useEffect(() => {
    (0, g.c)(i.id) || k(!R)
  }, [i, k, R]);
  let L = r.useMemo(() => [y.intl.string(y.t["8pEGAw"]), y.intl.string(y.t.jwfgDd), y.intl.string(y.t.mPKs27), y.intl.string(y.t.StRbvG)], []),
    F = r.useMemo(() => [y.intl.string(y.t["m/b58M"]), y.intl.string(y.t.MuJSKw), y.intl.string(y.t["d/Wqvu"]), y.intl.string(y.t.GJklAw)], []),
    D = () => {
      b.Z.open(i.guild_id, C.pNK.ROLE_SUBSCRIPTIONS)
    },
    H = null != (t = null == _ ? true : _.features.has(C.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) && t ? y.intl.string(y.t.n0q7sI) : y.intl.string(y.t.QoYdie),
    z = null != (n = (null == _ ? true : _.features.has(C.GuildFeatures.CREATOR_MONETIZABLE)) || (null == _ ? true : _.features.has(C.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))) && n,
    B = z ? y.intl.string(y.t["G/7ciZ"]) : y.intl.string(y.t.IFOiit),
    U = z ? y.intl.string(y.t.GjgQO1) : y.intl.string(y.t.E7AO6t);
  return (0, a.jsx)(a.Fragment, {
    children: Z((e, t) => t ? (0, a.jsxs)(s.animated.div, {
      style: e,
      className: T.container,
      children: [(0, a.jsxs)("div", {
        className: T.headerRow,
        children: [(0, a.jsxs)(d.Text, {
          variant: "text-xs/normal",
          className: T.visibilityInfo,
          children: [(0, a.jsx)(d.d3s, {
            size: "xxs",
            color: "currentColor",
            className: T.icon
          }), y.intl.string(y.t.znhX2R)]
        }), (0, a.jsx)(P, {
          handleHide: A
        })]
      }), (0, a.jsxs)("div", {
        className: T.contentContainer,
        children: [(0, a.jsxs)("div", {
          className: l()(T.contentRow, z && T.contentRowOne),
          children: [(0, a.jsx)("div", {
            className: T.contentMediaContainer,
            children: (0, a.jsxs)("div", {
              className: T.contentVideoContainer,
              children: [(0, a.jsx)(I, {
                username: y.intl.string(y.t.AkORco),
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                title: y.intl.string(y.t.yO6Fxu),
                messageCount: "34",
                reaction: "⚡️",
                reactionCount: "724",
                classname: T.backgroundVideo
              }), (0, a.jsx)(I, {
                username: y.intl.string(y.t.DPg3YM),
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                title: y.intl.string(y.t["R5XnC/"]),
                messageCount: "34",
                reactionCount: "84",
                reaction: "\uD83D\uDC9E",
                classname: T.backgroundVideo
              }), (0, a.jsx)(I, {
                username: y.intl.string(y.t.KIelex),
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                title: y.intl.string(y.t.pt88Vb),
                messageCount: "7,103",
                reaction: "⚡️",
                reactionCount: "724",
                classname: T.highlightVideo
              })]
            })
          }), (0, a.jsxs)("article", {
            className: T.contentTextContainer,
            children: [(0, a.jsx)(d.Heading, {
              variant: "heading-lg/semibold",
              color: "text-strong",
              children: B
            }), (0, a.jsx)(d.LZC, {
              size: 8
            }), (0, a.jsx)(d.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: U
            }), (0, a.jsx)(d.LZC, {
              size: 16
            }), (0, a.jsxs)(d.P3F, {
              onClick: () => open(j.Z.getCreatorSupportArticleURL(C.BhN.MEDIA_CHANNEL)),
              className: T.helpCenterLink,
              children: [(0, a.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-link",
                children: y.intl.string(y.t.OahzBd)
              }), (0, a.jsx)(d.rgF, {
                size: "xs",
                color: "currentColor",
                className: T.helpCenterLinkIcon
              })]
            }), (0, a.jsx)(d.LZC, {
              size: 16
            }), (0, a.jsx)("div", {
              className: T.mediaChannelTagsContainer,
              children: L.map(e => (0, a.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                className: T.mediaChannelTag,
                children: e
              }, e))
            })]
          })]
        }), z && (0, a.jsxs)("div", {
          className: l()(T.contentRow, T.contentRowTwo),
          children: [(0, a.jsx)("div", {
            className: T.contentMediaContainer,
            children: (0, a.jsxs)("div", {
              className: T.contentImageContainer,
              children: [(0, a.jsx)("img", {
                src: E ? N : O,
                alt: "",
                className: T.previewEmbedImage
              }), (0, a.jsx)("img", {
                src: E ? w : S,
                alt: "",
                className: T.previewEmbedImage
              })]
            })
          }), (0, a.jsxs)("article", {
            className: T.contentTextContainer,
            children: [(0, a.jsxs)(d.Text, {
              variant: "text-xxs/bold",
              className: T.serverSubPill,
              children: [y.intl.string(y.t.NChGwy), " ", (0, a.jsx)("span", {
                role: "img",
                "aria-label": "",
                children: "\uD83D\uDD25"
              })]
            }), (0, a.jsx)(d.LZC, {
              size: 10
            }), (0, a.jsx)(d.Heading, {
              variant: "heading-lg/semibold",
              color: "text-strong",
              children: y.intl.string(y.t["N/TRrT"])
            }), (0, a.jsx)(d.LZC, {
              size: 8
            }), (0, a.jsx)(d.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: y.intl.string(y.t.t3yWxG)
            }), (0, a.jsx)(d.LZC, {
              size: 16
            }), (0, a.jsx)("div", {
              className: T.mediaChannelTagsContainer,
              children: F.map(e => (0, a.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                className: T.mediaChannelTag,
                children: e
              }, e))
            }), (0, a.jsx)(d.LZC, {
              size: 16
            }), 0 === M.length && (0, a.jsx)(d.Button, {
              variant: "primary",
              onClick: D,
              text: H
            })]
          })]
        })]
      })]
    }) : null)
  })
}