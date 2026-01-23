/** Chunk was on 46875 **/
/** chunk id: 504842, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => E
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
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

function N(e) {
  let {
    handleHide: t
  } = e;
  return (0, l.jsx)(d.DUT, {
    onClick: t,
    className: A.b,
    "aria-label": y.intl.string(y.t.WAI6xu),
    children: (0, l.jsx)(d.PGe, {
      size: "md",
      color: "currentColor",
      className: A.ut
    })
  })
}

function w(e) {
  let {
    username: t,
    title: n,
    videoSrc: r,
    messageCount: i,
    reaction: s,
    reactionCount: o,
    classname: c
  } = e;
  return (0, l.jsxs)("div", {
    className: a()(A.IP, c),
    children: [(0, l.jsx)("div", {
      className: A.Y6,
      children: (0, l.jsxs)("div", {
        className: A.wO,
        children: [(0, l.jsx)(d.Text, {
          tag: "span",
          className: A.cy,
          variant: "text-sm/semibold",
          children: t
        }), (0, l.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          className: A.SD,
          children: y.intl.string(y.t.mA0IvI)
        })]
      })
    }), (0, l.jsx)(d.Heading, {
      variant: "heading-md/extrabold",
      className: A.DD,
      color: "text-strong",
      "aria-hidden": true,
      children: n
    }), (0, l.jsx)(d.hKd, {
      size: 10
    }), (0, l.jsx)(m.A, {
      className: A.Ki,
      src: r,
      autoPlay: true,
      loop: true,
      muted: true
    }), (0, l.jsx)(d.hKd, {
      size: 10
    }), (0, l.jsx)("div", {
      className: A.qr,
      children: (0, l.jsxs)("div", {
        className: A.GD,
        children: [(0, l.jsxs)("div", {
          className: A.Mv,
          children: [(0, l.jsx)("span", {
            className: A.SZ,
            children: (0, l.jsx)(d.oyn, {
              size: "xs",
              color: "currentColor"
            })
          }), (0, l.jsx)(d.Text, {
            variant: "text-xs/normal",
            color: "interactive-text-default",
            children: i
          })]
        }), (0, l.jsxs)("div", {
          className: A.vi,
          children: [(0, l.jsx)("span", {
            role: "img",
            "aria-label": "",
            children: s
          }), (0, l.jsx)(d.Text, {
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
  } = e, m = (0, u.Ay)(), E = (0, c.Mw)(m), I = (0, o.bG)([b.A], () => b.A.getGuild(i.guild_id)), P = (0, o.bG)([h.A], () => h.A.hasHidden(i.id)), R = (0, f.e)({
    guildId: i.guild_id,
    channelId: i.id
  }), {
    transitions: k,
    setVisible: M
  } = (0, v.V)(), D = r.useCallback(() => {
    M(false), g.A.hideAdminOnboarding(i.id, true)
  }, [i, M]);
  r.useEffect(() => {
    (0, x.l)(i.id) || M(!P)
  }, [i, M, P]);
  let L = r.useMemo(() => [y.intl.string(y.t["8pEGAw"]), y.intl.string(y.t.jwfgDd), y.intl.string(y.t.mPKs27), y.intl.string(y.t.StRbvG)], []),
    U = r.useMemo(() => [y.intl.string(y.t["m/b58M"]), y.intl.string(y.t.MuJSKw), y.intl.string(y.t["d/Wqvu"]), y.intl.string(y.t.GJklAw)], []),
    F = () => {
      p.A.open(i.guild_id, _.BEX.ROLE_SUBSCRIPTIONS)
    },
    G = null != (t = null == I ? true : I.features.has(_.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) && t ? y.intl.string(y.t.n0q7sI) : y.intl.string(y.t.QoYdie),
    z = null != (n = (null == I ? true : I.features.has(_.GuildFeatures.CREATOR_MONETIZABLE)) || (null == I ? true : I.features.has(_.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL))) && n,
    H = z ? y.intl.string(y.t["G/7ciZ"]) : y.intl.string(y.t.IFOiit),
    B = z ? y.intl.string(y.t.GjgQO1) : y.intl.string(y.t.E7AO6t);
  return (0, l.jsx)(l.Fragment, {
    children: k((e, t) => t ? (0, l.jsxs)(s.animated.div, {
      style: e,
      className: A.kL,
      children: [(0, l.jsxs)("div", {
        className: A.U1,
        children: [(0, l.jsxs)(d.Text, {
          variant: "text-xs/normal",
          className: A.l2,
          children: [(0, l.jsx)(d.mir, {
            size: "xxs",
            color: "currentColor",
            className: A.Kk
          }), y.intl.string(y.t.znhX2R)]
        }), (0, l.jsx)(N, {
          handleHide: D
        })]
      }), (0, l.jsxs)("div", {
        className: A.hQ,
        children: [(0, l.jsxs)("div", {
          className: a()(A.CT, z && A.en),
          children: [(0, l.jsx)("div", {
            className: A.F2,
            children: (0, l.jsxs)("div", {
              className: A.IZ,
              children: [(0, l.jsx)(w, {
                username: y.intl.string(y.t.AkORco),
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_discord_birthday.mp4",
                title: y.intl.string(y.t.yO6Fxu),
                messageCount: "34",
                reaction: "⚡️",
                reactionCount: "724",
                classname: A.q6
              }), (0, l.jsx)(w, {
                username: y.intl.string(y.t.DPg3YM),
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_wumpus_onboarding.mp4",
                title: y.intl.string(y.t["R5XnC/"]),
                messageCount: "34",
                reactionCount: "84",
                reaction: "\uD83D\uDC9E",
                classname: A.q6
              }), (0, l.jsx)(w, {
                username: y.intl.string(y.t.KIelex),
                videoSrc: "https://cdn.discordapp.com/assets/media_channel/admin_edu_scientist_wumpus.mp4",
                title: y.intl.string(y.t.pt88Vb),
                messageCount: "7,103",
                reaction: "⚡️",
                reactionCount: "724",
                classname: A.Ob
              })]
            })
          }), (0, l.jsxs)("article", {
            className: A.n$,
            children: [(0, l.jsx)(d.Heading, {
              variant: "heading-lg/semibold",
              color: "text-strong",
              children: H
            }), (0, l.jsx)(d.hKd, {
              size: 8
            }), (0, l.jsx)(d.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: B
            }), (0, l.jsx)(d.hKd, {
              size: 16
            }), (0, l.jsxs)(d.DUT, {
              onClick: () => open(j.A.getCreatorSupportArticleURL(_.MVz.MEDIA_CHANNEL)),
              className: A.zy,
              children: [(0, l.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-link",
                children: y.intl.string(y.t.OahzBd)
              }), (0, l.jsx)(d.tfB, {
                size: "xs",
                color: "currentColor",
                className: A.QI
              })]
            }), (0, l.jsx)(d.hKd, {
              size: 16
            }), (0, l.jsx)("div", {
              className: A.Qq,
              children: L.map(e => (0, l.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                className: A.U0,
                children: e
              }, e))
            })]
          })]
        }), z && (0, l.jsxs)("div", {
          className: a()(A.CT, A.Gw),
          children: [(0, l.jsx)("div", {
            className: A.F2,
            children: (0, l.jsxs)("div", {
              className: A.kQ,
              children: [(0, l.jsx)("img", {
                src: E ? O : S,
                alt: "",
                className: A.JM
              }), (0, l.jsx)("img", {
                src: E ? C : T,
                alt: "",
                className: A.JM
              })]
            })
          }), (0, l.jsxs)("article", {
            className: A.n$,
            children: [(0, l.jsxs)(d.Text, {
              variant: "text-xxs/bold",
              className: A.X4,
              children: [y.intl.string(y.t.NChGwy), " ", (0, l.jsx)("span", {
                role: "img",
                "aria-label": "",
                children: "\uD83D\uDD25"
              })]
            }), (0, l.jsx)(d.hKd, {
              size: 10
            }), (0, l.jsx)(d.Heading, {
              variant: "heading-lg/semibold",
              color: "text-strong",
              children: y.intl.string(y.t["N/TRrT"])
            }), (0, l.jsx)(d.hKd, {
              size: 8
            }), (0, l.jsx)(d.Text, {
              variant: "text-md/normal",
              color: "text-muted",
              children: y.intl.string(y.t.t3yWxG)
            }), (0, l.jsx)(d.hKd, {
              size: 16
            }), (0, l.jsx)("div", {
              className: A.Qq,
              children: U.map(e => (0, l.jsx)(d.Text, {
                variant: "text-sm/medium",
                color: "text-default",
                className: A.U0,
                children: e
              }, e))
            }), (0, l.jsx)(d.hKd, {
              size: 16
            }), 0 === R.length && (0, l.jsx)(d.Button, {
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