/** Chunk was on 44669 **/
/** chunk id: 707251, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => k
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk367513 = require("./367513.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk313961 = require("./313961.js"),
  Chunk261718 = require("./261718.js"),
  Chunk384059 = require("./384059.js"),
  Chunk47167 = require("./47167.js"),
  Chunk689874 = require("./689874.jsx"),
  Chunk509536 = require("./509536.jsx"),
  Chunk58736 = require("./58736.jsx"),
  Chunk742589 = require("./742589.jsx"),
  Chunk977851 = require("./977851.jsx"),
  Chunk772475 = require("./772475.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk954571 = require("./954571.js"),
  Chunk113783 = require("./113783.js"),
  Chunk69407 = require("./69407.js"),
  Chunk776781 = require("./776781.js"),
  Chunk233993 = require("./233993.js"),
  Chunk446600 = require("./446600.js"),
  Chunk608900 = require("./608900.jsx"),
  Chunk533233 = require("./533233.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk20531 = require("./20531.js");

function G(e) {
  let {
    channel: t,
    toggleRequestToSpeakSidebar: n,
    showRequestToSpeakSidebar: l
  } = e, {
    analyticsLocations: i,
    newestAnalyticsLocation: o
  } = (0, p.Ay)(d.A.VOICE_CHANNEL_HEADER), {
    chatOpen: c,
    participantsListOpen: m
  } = (0, a.cf)([h.A], () => ({
    chatOpen: h.A.getChatOpen(t.id),
    participantsListOpen: h.A.getParticipantsListOpen(t.id)
  }), [t.id]), A = (0, I.Ni)(t.id), y = (0, C.zy)(t.id, S.ip.REQUESTED_TO_SPEAK_ONLY), {
    hasParticipantsPanel: O
  } = (0, g.A)({
    location: "StageChannelCallHeader"
  }), x = O && m;
  return (0, r.jsxs)(p.f5, {
    value: i,
    children: [(0, r.jsx)(b.A, {
      channelId: t.id
    }, "clips-enabled-indicator"), !l && A ? (0, r.jsx)("div", {
      className: M.x6,
      children: (0, r.jsx)(P.A, {
        toggleRequestToSpeakSidebar: () => {
          c && u.A.updateChatOpen(t.id, false), m && u.A.toggleParticipantsList(t.id, false), (0, f.X)(o, f.O.OPEN_REQUEST_TO_SPEAK_SIDEBAR), n()
        },
        showRequestToSpeakSidebar: l,
        numRequestToSpeak: y
      })
    }) : null, !m && O && (0, r.jsx)(_.A, {
      className: s()(M.x6, {
        [M.vc]: c
      }),
      onClick: () => {
        l && n(), u.A.toggleParticipantsList(t.id, !m)
      }
    }, "participants-list-button"), !c && (0, r.jsx)("div", {
      className: s()(M.x6, {
        [M.vc]: x || l
      }),
      children: (0, r.jsx)(j.V, {
        channelId: t.id,
        showRequestToSpeakSidebar: l,
        toggleRequestToSpeakSidebar: n,
        iconClassName: M.iA
      })
    })]
  })
}

function k(e) {
  var t;
  let {
    channel: n,
    toggleRequestToSpeakSidebar: i,
    showRequestToSpeakSidebar: d
  } = e, p = (0, m.Ay)(n), h = (0, a.bG)([T.A], () => T.A.getStageInstanceByChannel(n.id)), g = (0, C.uy)(n.id), f = (0, C.zy)(n.id, S.ip.AUDIENCE), b = (0, a.bG)([x.A], () => x.A.getGuild(n.guild_id), [n.guild_id]), j = null != (t = null == b ? true : b.maxStageVideoChannelUsers) ? t : 0, _ = null != b && b.features.has(R.GuildFeatures.COMMUNITY) ? j < R.p2C : (null == b ? true : b.premiumTier) !== R.TVA.TIER_3 && j <= R.nyz, I = (0, w.A)(n), P = (0, a.bG)([v.A], () => v.A.can(N.QY, n)), k = () => {
    u.A.updateStageVideoLimitBoostUpsellDismissed(n.id, true), E.default.track(R.HAw.BOOSTING_UPSELL_CLICKED, {
      guild_id: n.guild_id,
      type: D.e.VIDEO_STAGE_LIMIT,
      is_moderator: P,
      action: D.pd.DISMISS
    })
  }, V = {
    canModerate: P,
    audienceCount: f,
    channel: n,
    speakerCount: g
  }, B = l.useRef(V);
  l.useEffect(() => {
    B.current = V
  }), l.useEffect(() => {
    let {
      canModerate: e,
      audienceCount: t,
      channel: n,
      speakerCount: r
    } = B.current;
    I && E.default.track(R.HAw.BOOSTING_UPSELL_VIEWED, {
      guild_id: n.guild_id,
      type: D.e.VIDEO_STAGE_LIMIT,
      is_moderator: e,
      listener_count: r + t
    })
  }, [I]);
  let H = (0, r.jsx)(c.NPJ, {
    theme: R.NJ8.DARK,
    children: e => {
      var t;
      return (0, r.jsxs)(y.Ay, {
        toolbar: (0, r.jsx)(G, {
          toggleRequestToSpeakSidebar: i,
          showRequestToSpeakSidebar: d,
          channel: n
        }),
        onDoubleClick: O.I,
        transparent: true,
        className: s()(e, M.lF),
        children: [(0, r.jsx)(y.Ay.Icon, {
          icon: c.qux,
          disabled: true,
          "aria-label": L.intl.string(L.t.EErMzA),
          className: M.Kk,
          color: null != h ? o.A.colors.TEXT_MUTED.css : true
        }), (0, r.jsx)(y.Ay.Title, {
          className: M.HA,
          wrapperClassName: M.KD,
          children: null != (t = null == h ? true : h.topic) ? t : p
        }), (0, r.jsx)(y.Ay.Divider, {
          className: M.yF
        }), (0, r.jsxs)(y.Ay.Title, {
          children: [(0, r.jsx)(c.cNw, {
            size: "xs",
            color: o.A.colors.TEXT_MUTED.css
          }), (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: M.N_,
            children: L.intl.format(L.t.chmM9N, {
              count: g
            })
          }), (0, r.jsx)(c.nFg, {
            size: "xs",
            className: M.Kk,
            color: "currentColor"
          }), (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            className: M.N_,
            children: L.intl.format(L.t["+v2pN2"], {
              count: f
            })
          })]
        })]
      })
    }
  });
  return I ? (0, r.jsxs)("div", {
    children: [H, (0, r.jsxs)("div", {
      className: M.bp,
      children: [(0, r.jsx)(U, {}), (0, r.jsxs)("div", {
        className: M.Qq,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "text-strong",
          children: _ ? L.intl.string(L.t["T+zF9M"]) : L.intl.string(L.t["IZ+SVv"])
        }), (0, r.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: _ ? L.intl.string(L.t.Izgpmv) : L.intl.string(L.t["7FHbPG"])
        })]
      }), (0, r.jsx)("div", {
        className: M.Uo,
        children: _ ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(c.Button, {
            onClick: k,
            size: "sm",
            variant: "secondary",
            text: L.intl.string(L.t.L5eIZ2)
          }), (0, r.jsx)(c.Button, {
            variant: "expressive",
            onClick: () => {
              (0, A.K)({
                guildId: n.guild_id,
                location: {
                  section: R.JJy.STAGE_VIDEO_LIMIT
                }
              }), E.default.track(R.HAw.BOOSTING_UPSELL_CLICKED, {
                guild_id: n.guild_id,
                type: D.e.VIDEO_STAGE_LIMIT,
                is_moderator: P,
                action: D.pd.BOOST
              })
            },
            size: "sm",
            text: L.intl.string(L.t.Uj0md3)
          })]
        }) : (0, r.jsx)(c.Button, {
          variant: "primary",
          onClick: k,
          size: "sm",
          text: L.intl.string(L.t.WAI6xu)
        })
      })]
    })]
  }) : H
}

function U() {
  return (0, r.jsxs)("svg", {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    children: [(0, r.jsxs)("g", {
      clipPath: "url(#clip0_595_59940)",
      children: [(0, r.jsx)("path", {
        d: "M36 18C36 19.8 33.075 21.15 32.625 22.725C32.175 24.3 33.525 27.225 32.625 28.575C31.725 29.925 28.35 29.25 27 30.375C25.65 31.5 25.2 34.425 23.625 35.1C22.05 35.775 19.8 33.3 18 33.3C16.2 33.3 13.95 35.55 12.375 35.1C10.8 34.65 10.35 31.275 9 30.375C7.65 29.475 4.5 29.925 3.375 28.575C2.25 27.225 3.825 24.525 3.375 22.725C2.925 20.925 0 19.8 0 18C0 16.2 2.925 14.85 3.375 13.275C3.825 11.7 2.475 8.77497 3.375 7.42496C4.275 6.07497 7.65 6.74997 9 5.62497C10.35 4.49997 10.8 1.57497 12.375 0.899965C13.95 0.224965 16.2 2.69997 18 2.69997C19.8 2.69997 22.05 0.449965 23.625 0.899965C25.2 1.34997 25.65 4.49997 27 5.62497C28.35 6.74997 31.5 6.07497 32.625 7.42496C33.75 8.77497 32.175 11.475 32.625 13.275C33.075 15.075 36 16.2 36 18Z",
        fill: "url(#paint0_linear_595_59940)"
      }), (0, r.jsx)("path", {
        d: "M15.75 20.7001L18 22.9501L20.25 20.7001V15.3001L18 13.0501L15.75 15.3001V20.7001Z",
        fill: "white"
      }), (0, r.jsx)("path", {
        d: "M18 6.75L11.25 13.5V22.5L18 29.25L24.75 22.5V13.5L18 6.75ZM22.5 21.6L18 26.1L13.5 21.6V14.4L18 9.9L22.5 14.4V21.6Z",
        fill: "white"
      })]
    }), (0, r.jsxs)("defs", {
      children: [(0, r.jsxs)("linearGradient", {
        id: "paint0_linear_595_59940",
        x1: "2.4046e-06",
        y1: "35.2166",
        x2: "35.7182",
        y2: "-1.45185",
        gradientUnits: "userSpaceOnUse",
        children: [(0, r.jsx)("stop", {
          stopColor: "#3E70DD"
        }), (0, r.jsx)("stop", {
          offset: "1",
          stopColor: "#B377F3"
        })]
      }), (0, r.jsx)("clipPath", {
        id: "clip0_595_59940",
        children: (0, r.jsx)("rect", {
          width: "36",
          height: "36",
          fill: "white"
        })
      })]
    })]
  })
}