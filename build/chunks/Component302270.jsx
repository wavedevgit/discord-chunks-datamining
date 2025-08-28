/** Chunk was on 56011 **/
/** chunk id: 302270, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk358221 = require("./358221.js"),
  Chunk185935 = require("./185935.js"),
  Chunk522651 = require("./522651.js"),
  Chunk933557 = require("./933557.js"),
  Chunk236091 = require("./236091.jsx"),
  Chunk623624 = require("./623624.jsx"),
  Chunk665149 = require("./665149.jsx"),
  Chunk984370 = require("./984370.jsx"),
  Chunk616286 = require("./616286.jsx"),
  Chunk975146 = require("./975146.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk626135 = require("./626135.js"),
  Chunk431328 = require("./431328.js"),
  Chunk501655 = require("./501655.js"),
  Chunk200498 = require("./200498.js"),
  Chunk146085 = require("./146085.js"),
  Chunk427679 = require("./427679.js"),
  Chunk592473 = require("./592473.jsx"),
  Chunk903108 = require("./903108.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk270479 = require("./270479.js");

function L(e) {
  let {
    channel: t,
    toggleRequestToSpeakSidebar: n,
    showRequestToSpeakSidebar: i
  } = e, {
    analyticsLocations: l,
    newestAnalyticsLocation: s
  } = (0, p.ZP)(d.Z.VOICE_CHANNEL_HEADER), {
    chatOpen: c,
    participantsListOpen: g
  } = (0, o.cj)([h.Z], () => ({
    chatOpen: h.Z.getChatOpen(t.id),
    participantsListOpen: h.Z.getParticipantsListOpen(t.id)
  }), [t.id]), y = (0, P.B)(t.id), _ = (0, S.Rk)(t.id, I.pV.REQUESTED_TO_SPEAK_ONLY), {
    hasParticipantsPanel: C
  } = (0, f.Z)({
    location: "StageChannelCallHeader"
  }), O = C && g;
  return (0, r.jsxs)(p.Gt, {
    value: l,
    children: [(0, r.jsx)(b.Z, {
      channelId: t.id
    }, "clips-enabled-indicator"), !i && y ? (0, r.jsx)("div", {
      className: D.button,
      children: (0, r.jsx)(N.Z, {
        toggleRequestToSpeakSidebar: () => {
          c && u.Z.updateChatOpen(t.id, false), g && u.Z.toggleParticipantsList(t.id, false), (0, m.v)(s, m.d.OPEN_REQUEST_TO_SPEAK_SIDEBAR), n()
        },
        showRequestToSpeakSidebar: i,
        numRequestToSpeak: _
      })
    }) : null, !g && C && (0, r.jsx)(x.Z, {
      className: a()(D.button, {
        [D.sidebarOpen]: c
      }),
      onClick: () => {
        i && n(), u.Z.toggleParticipantsList(t.id, !g)
      }
    }, "participants-list-button"), !c && (0, r.jsx)("div", {
      className: a()(D.button, {
        [D.sidebarOpen]: O || i
      }),
      children: (0, r.jsx)(v.T, {
        channelId: t.id,
        showRequestToSpeakSidebar: i,
        toggleRequestToSpeakSidebar: n,
        iconClassName: D.buttonIcon
      })
    })]
  })
}

function k(e) {
  var t;
  let {
    channel: n,
    toggleRequestToSpeakSidebar: l,
    showRequestToSpeakSidebar: d
  } = e, p = (0, g.ZP)(n), h = (0, o.e7)([T.Z], () => T.Z.getStageInstanceByChannel(n.id)), f = (0, S.Io)(n.id), m = (0, S.Rk)(n.id, I.pV.AUDIENCE), b = (0, o.e7)([O.Z], () => O.Z.getGuild(n.guild_id), [n.guild_id]), v = null != (t = null == b ? true : b.maxStageVideoChannelUsers) ? t : 0, x = null != b && b.features.has(w.oNc.COMMUNITY) ? v < w.TU7 : (null == b ? true : b.premiumTier) !== w.Eu4.TIER_3 && v <= w.eez, P = (0, A.Z)(n), N = (0, o.e7)([j.Z], () => j.Z.can(Z.yP, n)), k = () => {
    u.Z.updateStageVideoLimitBoostUpsellDismissed(n.id, true), E.default.track(w.rMx.BOOSTING_UPSELL_CLICKED, {
      guild_id: n.guild_id,
      type: R.cd.VIDEO_STAGE_LIMIT,
      is_moderator: N,
      action: R.T7.DISMISS
    })
  }, B = {
    canModerate: N,
    audienceCount: m,
    channel: n,
    speakerCount: f
  }, G = i.useRef(B);
  i.useEffect(() => {
    G.current = B
  }), i.useEffect(() => {
    let {
      canModerate: e,
      audienceCount: t,
      channel: n,
      speakerCount: r
    } = G.current;
    P && E.default.track(w.rMx.BOOSTING_UPSELL_VIEWED, {
      guild_id: n.guild_id,
      type: R.cd.VIDEO_STAGE_LIMIT,
      is_moderator: e,
      listener_count: r + t
    })
  }, [P]);
  let H = (0, r.jsx)(c.f6W, {
    theme: w.BRd.DARK,
    children: e => {
      var t;
      return (0, r.jsxs)(_.ZP, {
        toolbar: (0, r.jsx)(L, {
          toggleRequestToSpeakSidebar: l,
          showRequestToSpeakSidebar: d,
          channel: n
        }),
        onDoubleClick: C.O,
        transparent: true,
        className: a()(e, D.participants),
        children: [(0, r.jsx)(_.ZP.Icon, {
          icon: c.ewx,
          disabled: true,
          "aria-label": M.intl.string(M.t.EErMzM),
          className: D.icon,
          color: null != h ? s.Z.colors.HEADER_MUTED.css : true
        }), (0, r.jsx)(_.ZP.Title, {
          className: D.channelName,
          wrapperClassName: D.channelNameWrapper,
          children: null != (t = null == h ? true : h.topic) ? t : p
        }), (0, r.jsx)(_.ZP.Divider, {
          className: D.divider
        }), (0, r.jsxs)(_.ZP.Title, {
          children: [(0, r.jsx)(c.S6n, {
            size: "xs",
            color: s.Z.colors.TEXT_LOW_CONTRAST.css
          }), (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: D.speakerCount,
            children: M.intl.format(M.t.chmM9P, {
              count: f
            })
          }), (0, r.jsx)(c.BFJ, {
            size: "xs",
            className: D.icon,
            color: "currentColor"
          }), (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: D.speakerCount,
            children: M.intl.format(M.t["+v2pNz"], {
              count: m
            })
          })]
        })]
      })
    }
  });
  return P ? (0, r.jsxs)("div", {
    children: [H, (0, r.jsxs)("div", {
      className: D.boostUpsell,
      children: [(0, r.jsx)(U, {}), (0, r.jsxs)("div", {
        className: D.text,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          children: x ? M.intl.string(M.t["T+zF9P"]) : M.intl.string(M.t["IZ+SVl"])
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: x ? M.intl.string(M.t.Izgpmp) : M.intl.string(M.t["7FHbPD"])
        })]
      }), (0, r.jsx)("div", {
        className: D.buttons,
        children: x ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(c.zxk, {
            onClick: k,
            size: "sm",
            variant: "secondary",
            text: M.intl.string(M.t.L5eIZ2)
          }), (0, r.jsx)(c.zxk, {
            variant: "expressive",
            onClick: () => {
              (0, y.f)({
                guildId: n.guild_id,
                location: {
                  section: w.jXE.STAGE_VIDEO_LIMIT
                }
              }), E.default.track(w.rMx.BOOSTING_UPSELL_CLICKED, {
                guild_id: n.guild_id,
                type: R.cd.VIDEO_STAGE_LIMIT,
                is_moderator: N,
                action: R.T7.BOOST
              })
            },
            size: "sm",
            text: M.intl.string(M.t.Uj0md3)
          })]
        }) : (0, r.jsx)(c.zxk, {
          variant: "primary",
          onClick: k,
          size: "sm",
          text: M.intl.string(M.t.WAI6xs)
        })
      })]
    })]
  }) : H
}

function U() {
  return (0, Chunk951288.jsxs)("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    children: [(0, Chunk951288.jsxs)("g", {
      clipPath: "url(#clip0_595_59940)",
      children: [(0, Chunk951288.jsx)("path", {
        d: "M36 18C36 19.8 33.075 21.15 32.625 22.725C32.175 24.3 33.525 27.225 32.625 28.575C31.725 29.925 28.35 29.25 27 30.375C25.65 31.5 25.2 34.425 23.625 35.1C22.05 35.775 19.8 33.3 18 33.3C16.2 33.3 13.95 35.55 12.375 35.1C10.8 34.65 10.35 31.275 9 30.375C7.65 29.475 4.5 29.925 3.375 28.575C2.25 27.225 3.825 24.525 3.375 22.725C2.925 20.925 0 19.8 0 18C0 16.2 2.925 14.85 3.375 13.275C3.825 11.7 2.475 8.77497 3.375 7.42496C4.275 6.07497 7.65 6.74997 9 5.62497C10.35 4.49997 10.8 1.57497 12.375 0.899965C13.95 0.224965 16.2 2.69997 18 2.69997C19.8 2.69997 22.05 0.449965 23.625 0.899965C25.2 1.34997 25.65 4.49997 27 5.62497C28.35 6.74997 31.5 6.07497 32.625 7.42496C33.75 8.77497 32.175 11.475 32.625 13.275C33.075 15.075 36 16.2 36 18Z",
        fill: "url(#paint0_linear_595_59940)"
      }), (0, Chunk951288.jsx)("path", {
        d: "M15.75 20.7001L18 22.9501L20.25 20.7001V15.3001L18 13.0501L15.75 15.3001V20.7001Z",
        fill: "white"
      }), (0, Chunk951288.jsx)("path", {
        d: "M18 6.75L11.25 13.5V22.5L18 29.25L24.75 22.5V13.5L18 6.75ZM22.5 21.6L18 26.1L13.5 21.6V14.4L18 9.9L22.5 14.4V21.6Z",
        fill: "white"
      })]
    }), (0, Chunk951288.jsxs)("defs", {
      children: [(0, Chunk951288.jsxs)("linearGradient", {
        id: "paint0_linear_595_59940",
        x1: "2.4046e-06",
        y1: "35.2166",
        x2: "35.7182",
        y2: "-1.45185",
        gradientUnits: "userSpaceOnUse",
        children: [(0, Chunk951288.jsx)("stop", {
          stopColor: "#3E70DD"
        }), (0, Chunk951288.jsx)("stop", {
          offset: "1",
          stopColor: "#B377F3"
        })]
      }), (0, Chunk951288.jsx)("clipPath", {
        id: "clip0_595_59940",
        children: (0, Chunk951288.jsx)("rect", {
          width: "36",
          height: "36",
          fill: "white"
        })
      })]
    })]
  })
}