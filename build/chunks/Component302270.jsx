/** Chunk was on 49152 **/
/** chunk id: 302270, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => M
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk523335 = require("./523335.js");

function L(e) {
  let {
    channel: t,
    toggleRequestToSpeakSidebar: n,
    showRequestToSpeakSidebar: i
  } = e, {
    analyticsLocations: l,
    newestAnalyticsLocation: o
  } = (0, h.ZP)(d.Z.VOICE_CHANNEL_HEADER), {
    chatOpen: c,
    participantsListOpen: m
  } = (0, s.cj)([p.Z], () => ({
    chatOpen: p.Z.getChatOpen(t.id),
    participantsListOpen: p.Z.getParticipantsListOpen(t.id)
  }), [t.id]), y = (0, Z.B)(t.id), x = (0, S.Rk)(t.id, I.pV.REQUESTED_TO_SPEAK_ONLY), {
    hasParticipantsPanel: _
  } = (0, f.Z)({
    location: "StageChannelCallHeader"
  }), v = _ && m;
  return (0, r.jsxs)(h.Gt, {
    value: l,
    children: [(0, r.jsx)(b.Z, {
      channelId: t.id
    }, "clips-enabled-indicator"), !i && y ? (0, r.jsx)("div", {
      className: k.button,
      children: (0, r.jsx)(N.Z, {
        toggleRequestToSpeakSidebar: () => {
          c && u.Z.updateChatOpen(t.id, false), m && u.Z.toggleParticipantsList(t.id, false), (0, g.v)(o, g.d.OPEN_REQUEST_TO_SPEAK_SIDEBAR), n()
        },
        showRequestToSpeakSidebar: i,
        numRequestToSpeak: x
      })
    }) : null, !m && _ && (0, r.jsx)(O.Z, {
      className: a()(k.button, {
        [k.sidebarOpen]: c
      }),
      onClick: () => {
        i && n(), u.Z.toggleParticipantsList(t.id, !m)
      }
    }, "participants-list-button"), !c && (0, r.jsx)("div", {
      className: a()(k.button, {
        [k.sidebarOpen]: v || i
      }),
      children: (0, r.jsx)(j.T, {
        channelId: t.id,
        showRequestToSpeakSidebar: i,
        toggleRequestToSpeakSidebar: n,
        iconClassName: k.buttonIcon
      })
    })]
  })
}

function M(e) {
  var t;
  let {
    channel: n,
    toggleRequestToSpeakSidebar: l,
    showRequestToSpeakSidebar: d
  } = e, h = (0, m.ZP)(n), p = (0, s.e7)([T.Z], () => T.Z.getStageInstanceByChannel(n.id)), f = (0, S.Io)(n.id), g = (0, S.Rk)(n.id, I.pV.AUDIENCE), b = (0, s.e7)([v.Z], () => v.Z.getGuild(n.guild_id), [n.guild_id]), j = null != (t = null == b ? true : b.maxStageVideoChannelUsers) ? t : 0, O = null != b && b.features.has(w.oNc.COMMUNITY) ? j < w.TU7 : (null == b ? true : b.premiumTier) !== w.Eu4.TIER_3 && j <= w.eez, Z = (0, R.Z)(n), N = (0, s.e7)([C.Z], () => C.Z.can(P.yP, n)), M = () => {
    u.Z.updateStageVideoLimitBoostUpsellDismissed(n.id, true), E.default.track(w.rMx.BOOSTING_UPSELL_CLICKED, {
      guild_id: n.guild_id,
      type: A.cd.VIDEO_STAGE_LIMIT,
      is_moderator: N,
      action: A.T7.DISMISS
    })
  }, F = {
    canModerate: N,
    audienceCount: g,
    channel: n,
    speakerCount: f
  }, H = i.useRef(F);
  i.useEffect(() => {
    H.current = F
  }), i.useEffect(() => {
    let {
      canModerate: e,
      audienceCount: t,
      channel: n,
      speakerCount: r
    } = H.current;
    Z && E.default.track(w.rMx.BOOSTING_UPSELL_VIEWED, {
      guild_id: n.guild_id,
      type: A.cd.VIDEO_STAGE_LIMIT,
      is_moderator: e,
      listener_count: r + t
    })
  }, [Z]);
  let G = (0, r.jsx)(c.f6W, {
    theme: w.BRd.DARK,
    children: e => {
      var t;
      return (0, r.jsxs)(x.ZP, {
        toolbar: (0, r.jsx)(L, {
          toggleRequestToSpeakSidebar: l,
          showRequestToSpeakSidebar: d,
          channel: n
        }),
        onDoubleClick: _.O,
        transparent: true,
        className: a()(e, k.participants),
        children: [(0, r.jsx)(x.ZP.Icon, {
          icon: c.ewx,
          disabled: true,
          "aria-label": D.intl.string(D.t.EErMzM),
          className: k.icon,
          color: null != p ? o.Z.colors.HEADER_MUTED.css : true
        }), (0, r.jsx)(x.ZP.Title, {
          className: k.channelName,
          wrapperClassName: k.channelNameWrapper,
          children: null != (t = null == p ? true : p.topic) ? t : h
        }), (0, r.jsx)(x.ZP.Divider, {
          className: k.divider
        }), (0, r.jsxs)(x.ZP.Title, {
          children: [(0, r.jsx)(c.S6n, {
            size: "xs",
            color: o.Z.colors.TEXT_LOW_CONTRAST.css
          }), (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: k.speakerCount,
            children: D.intl.format(D.t.chmM9P, {
              count: f
            })
          }), (0, r.jsx)(c.BFJ, {
            size: "xs",
            className: k.icon,
            color: "currentColor"
          }), (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: k.speakerCount,
            children: D.intl.format(D.t["+v2pNz"], {
              count: g
            })
          })]
        })]
      })
    }
  });
  return Z ? (0, r.jsxs)("div", {
    children: [G, (0, r.jsxs)("div", {
      className: k.boostUpsell,
      children: [(0, r.jsx)(U, {}), (0, r.jsxs)("div", {
        className: k.text,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          children: O ? D.intl.string(D.t["T+zF9P"]) : D.intl.string(D.t["IZ+SVl"])
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: O ? D.intl.string(D.t.Izgpmp) : D.intl.string(D.t["7FHbPD"])
        })]
      }), (0, r.jsx)("div", {
        className: k.buttons,
        children: O ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(c.zxk, {
            onClick: M,
            size: "sm",
            variant: "secondary",
            text: D.intl.string(D.t.L5eIZ2)
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
                type: A.cd.VIDEO_STAGE_LIMIT,
                is_moderator: N,
                action: A.T7.BOOST
              })
            },
            size: "sm",
            text: D.intl.string(D.t.Uj0md3)
          })]
        }) : (0, r.jsx)(c.zxk, {
          variant: "primary",
          onClick: M,
          size: "sm",
          text: D.intl.string(D.t.WAI6xs)
        })
      })]
    })]
  }) : G
}

function U() {
  return (0, Chunk255367.jsxs)("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    children: [(0, Chunk255367.jsxs)("g", {
      clipPath: "url(#clip0_595_59940)",
      children: [(0, Chunk255367.jsx)("path", {
        d: "M36 18C36 19.8 33.075 21.15 32.625 22.725C32.175 24.3 33.525 27.225 32.625 28.575C31.725 29.925 28.35 29.25 27 30.375C25.65 31.5 25.2 34.425 23.625 35.1C22.05 35.775 19.8 33.3 18 33.3C16.2 33.3 13.95 35.55 12.375 35.1C10.8 34.65 10.35 31.275 9 30.375C7.65 29.475 4.5 29.925 3.375 28.575C2.25 27.225 3.825 24.525 3.375 22.725C2.925 20.925 0 19.8 0 18C0 16.2 2.925 14.85 3.375 13.275C3.825 11.7 2.475 8.77497 3.375 7.42496C4.275 6.07497 7.65 6.74997 9 5.62497C10.35 4.49997 10.8 1.57497 12.375 0.899965C13.95 0.224965 16.2 2.69997 18 2.69997C19.8 2.69997 22.05 0.449965 23.625 0.899965C25.2 1.34997 25.65 4.49997 27 5.62497C28.35 6.74997 31.5 6.07497 32.625 7.42496C33.75 8.77497 32.175 11.475 32.625 13.275C33.075 15.075 36 16.2 36 18Z",
        fill: "url(#paint0_linear_595_59940)"
      }), (0, Chunk255367.jsx)("path", {
        d: "M15.75 20.7001L18 22.9501L20.25 20.7001V15.3001L18 13.0501L15.75 15.3001V20.7001Z",
        fill: "white"
      }), (0, Chunk255367.jsx)("path", {
        d: "M18 6.75L11.25 13.5V22.5L18 29.25L24.75 22.5V13.5L18 6.75ZM22.5 21.6L18 26.1L13.5 21.6V14.4L18 9.9L22.5 14.4V21.6Z",
        fill: "white"
      })]
    }), (0, Chunk255367.jsxs)("defs", {
      children: [(0, Chunk255367.jsxs)("linearGradient", {
        id: "paint0_linear_595_59940",
        x1: "2.4046e-06",
        y1: "35.2166",
        x2: "35.7182",
        y2: "-1.45185",
        gradientUnits: "userSpaceOnUse",
        children: [(0, Chunk255367.jsx)("stop", {
          stopColor: "#3E70DD"
        }), (0, Chunk255367.jsx)("stop", {
          offset: "1",
          stopColor: "#B377F3"
        })]
      }), (0, Chunk255367.jsx)("clipPath", {
        id: "clip0_595_59940",
        children: (0, Chunk255367.jsx)("rect", {
          width: "36",
          height: "36",
          fill: "white"
        })
      })]
    })]
  })
}