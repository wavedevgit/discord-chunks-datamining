/** Chunk was on 46875 **/
/** chunk id: 504842, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => w
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk432022 = require("./432022.js"),
  Chunk311907 = require("./311907.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk736653 = require("./736653.js"),
  Chunk607470 = require("./607470.jsx"),
  Chunk947094 = require("./947094.js"),
  Chunk919577 = require("./919577.js"),
  Chunk892110 = require("./892110.js"),
  Chunk251766 = require("./251766.js"),
  Chunk997509 = require("./997509.js"),
  Chunk71393 = require("./71393.js"),
  Chunk975571 = require("./975571.js"),
  Chunk305182 = require("./305182.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk231984 = require("./231984.js"),
  Chunk394350 = require("./394350.js"),
  Chunk488047 = require("./488047.js"),
  Chunk336127 = require("./336127.js"),
  Chunk964570 = require("./964570.js");

function _(e) {
  let {
    handleHide: t
  } = e;
  return (0, l.jsx)(d.DUT, {
    onClick: t,
    className: C.b,
    "aria-label": A.intl.string(A.t.WAI6xu),
    children: (0, l.jsx)(d.PGe, {
      size: "md",
      color: "currentColor",
      className: C.ut
    })
  })
}

function E(e) {
  let {
    username: t,
    title: n,
    videoSrc: r,
    messageCount: a,
    reaction: s,
    reactionCount: c,
    classname: o
  } = e;
  return (0, l.jsxs)("div", {
    className: i()(C.IP, o),
    children: [(0, l.jsx)("div", {
      className: C.Y6,
      children: (0, l.jsxs)("div", {
        className: C.wO,
        children: [(0, l.jsx)(d.Text, {
          tag: "span",
          className: C.cy,
          variant: "text-sm/semibold",
          children: t
        }), (0, l.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          className: C.SD,
          children: A.intl.string(A.t.mA0IvI)
        })]
      })
    }), (0, l.jsx)(d.Heading, {
      variant: "heading-md/extrabold",
      className: C.DD,
      color: "text-strong",
      "aria-hidden": true,
      children: n
    }), (0, l.jsx)(d.hKd, {
      size: 10
    }), (0, l.jsx)(m.A, {
      className: C.Ki,
      src: r,
      autoPlay: true,
      loop: true,
      muted: true
    }), (0, l.jsx)(d.hKd, {
      size: 10
    }), (0, l.jsx)("div", {
      className: C.qr,
      children: (0, l.jsxs)("div", {
        className: C.GD,
        children: [(0, l.jsxs)("div", {
          className: C.Mv,
          children: [(0, l.jsx)("span", {
            className: C.SZ,
            children: (0, l.jsx)(d.oyn, {
              size: "xs",
              color: "currentColor"
            })
          }), (0, l.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "interactive-text-default",
            children: a
          })]
        }), (0, l.jsxs)("div", {
          className: C.vi,
          children: [(0, l.jsx)("span", {
            role: "img",
            "aria-label": "",
            children: s
          }), (0, l.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "interactive-text-default",
            children: c
          })]
        })]
      })
    })]
  })
}
let w = e => {
  var t, n;
  let {
    channel: a
  } = e, m = (0, u.Ay)(), w = (0, o.Mw)(m), R = (0, c.bG)([p.A], () => p.A.getGuild(a.guild_id)), k = (0, c.bG)([h.A], () => h.A.hasHidden(a.id)), P = (0, x.e)({
    guildId: a.guild_id,
    channelId: a.id
  }), {
    transitions: I,
    setVisible: M
  } = (0, v.V)(), D = r.useCallback(() => {
    M(false), f.A.hideAdminOnboarding(a.id, true)
  }, [a, M]);
  r.useEffect(() => {
    (0, g.l)(a.id) || M(!k)
  }, [a, M, k]);
  let L = r.useMemo(() => [A.intl.string(A.t["8pEGAw"]), A.intl.string(A.t.jwfgDd), A.intl.string(A.t.mPKs27), A.intl.string(A.t.StRbvG)], []),
    U = r.useMemo(() => [A.intl.string(A.t["m/b58M"]), A.intl.string(A.t.MuJSKw), A.intl.string(A.t["d/Wqvu"]), A.intl.string(A.t.GJklAw)], []),
    F = () => {
      b.A.open(a.guild_id, y.BEX.ROLE_SUBSCRIPTIONS)
    },
    G = null != (t = null == R ? true : R.features.has(y.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) && t ? A.intl.string(A.t.n0q7sI) : A.intl.string(A.t.QoYdie),
    z = null != (n = (null == R ? true : R.features.has(y.GuildFeatures.CREATOR_MONETIZABLE)) || (null == R ? true : R.features.has(y.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))) && n,
    H = z ? A.intl.string(A.t["G/7ciZ"]) : A.intl.string(A.t.IFOiit),
    V = z ? A.intl.string(A.t.GjgQO1) : A.intl.string(A.t.E7AO6t);
  return (0, l.jsx)(l.Fragment, {
    children: I((e, t) => t ? (0, l.jsxs)(s.animated.div, {
      style: e,
      className: C.kL,
      children: [(0, l.jsxs)("div", {
        className: C.U1,
        children: [(0, l.jsxs)(d.Text, {
          variant: "text-xs/normal",
          className: C.l2,
          children: [(0, l.jsx)(d.mir, {
            size: "xxs",
            color: "currentColor",
            className: C.Kk
          }), A.intl.string(A.t.znhX2R)]
        }), (0, l.jsx)(_, {
          handleHide: D
        })]
      }), (0, l.jsxs)("div", {
        className: C.hQ,
        children: [(0, l.jsxs)("div", {
          className: i()(C.CT, z && C.en),
          children: [(0, l.jsx)("div", {
            className: C.F2,
            children: (0, l.jsxs)("div", {
              className: C.IZ,
              children: [(0, l.jsx)(E, {
                username: A.intl.string(A.t.AkORco),
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                title: A.intl.string(A.t.yO6Fxu),
                messageCount: "34",
                reaction: "⚡️",
                reactionCount: "724",
                classname: C.q6
              }), (0, l.jsx)(E, {
                username: A.intl.string(A.t.DPg3YM),
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                title: A.intl.string(A.t["R5XnC/"]),
                messageCount: "34",
                reactionCount: "84",
                reaction: "\uD83D\uDC9E",
                classname: C.q6
              }), (0, l.jsx)(E, {
                username: A.intl.string(A.t.KIelex),
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                title: A.intl.string(A.t.pt88Vb),
                messageCount: "7,103",
                reaction: "⚡️",
                reactionCount: "724",
                classname: C.Ob
              })]
            })
          }), (0, l.jsxs)("article", {
            className: C.n$,
            children: [(0, l.jsx)(d.Heading, {
              variant: "heading-lg/semibold",
              color: "text-strong",
              children: H
            }), (0, l.jsx)(d.hKd, {
              size: 8
            }), (0, l.jsx)(d.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: V
            }), (0, l.jsx)(d.hKd, {
              size: 16
            }), (0, l.jsxs)(d.DUT, {
              onClick: () => open(j.A.getCreatorSupportArticleURL(y.MVz.MEDIA_CHANNEL)),
              className: C.zy,
              children: [(0, l.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-link",
                children: A.intl.string(A.t.OahzBd)
              }), (0, l.jsx)(d.tfB, {
                size: "xs",
                color: "currentColor",
                className: C.QI
              })]
            }), (0, l.jsx)(d.hKd, {
              size: 16
            }), (0, l.jsx)("div", {
              className: C.Qq,
              children: L.map(e => (0, l.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                className: C.U0,
                children: e
              }, e))
            })]
          })]
        }), z && (0, l.jsxs)("div", {
          className: i()(C.CT, C.Gw),
          children: [(0, l.jsx)("div", {
            className: C.F2,
            children: (0, l.jsxs)("div", {
              className: C.kQ,
              children: [(0, l.jsx)("img", {
                src: w ? S : T,
                alt: "",
                className: C.JM
              }), (0, l.jsx)("img", {
                src: w ? O : N,
                alt: "",
                className: C.JM
              })]
            })
          }), (0, l.jsxs)("article", {
            className: C.n$,
            children: [(0, l.jsxs)(d.Text, {
              variant: "text-xxs/bold",
              className: C.X4,
              children: [A.intl.string(A.t.NChGwy), " ", (0, l.jsx)("span", {
                role: "img",
                "aria-label": "",
                children: "\uD83D\uDD25"
              })]
            }), (0, l.jsx)(d.hKd, {
              size: 10
            }), (0, l.jsx)(d.Heading, {
              variant: "heading-lg/semibold",
              color: "text-strong",
              children: A.intl.string(A.t["N/TRrT"])
            }), (0, l.jsx)(d.hKd, {
              size: 8
            }), (0, l.jsx)(d.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: A.intl.string(A.t.t3yWxG)
            }), (0, l.jsx)(d.hKd, {
              size: 16
            }), (0, l.jsx)("div", {
              className: C.Qq,
              children: U.map(e => (0, l.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                className: C.U0,
                children: e
              }, e))
            }), (0, l.jsx)(d.hKd, {
              size: 16
            }), 0 === P.length && (0, l.jsx)(d.Button, {
              variant: "primary",
              onClick: F,
              text: G
            })]
          })]
        })]
      })]
    }) : null)
  })
}