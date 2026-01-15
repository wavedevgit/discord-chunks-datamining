/** Chunk was on web.js **/
/** chunk id: 221558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk379649 = require("./379649.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk324060 = require("./324060.js"),
  Chunk5888 = require("./5888.js"),
  Chunk26118 = require("./26118.js"),
  Chunk539041 = require("./539041.jsx"),
  Chunk909397 = require("./909397.jsx"),
  Chunk198358 = require("./198358.jsx"),
  Chunk391876 = require("./391876.jsx"),
  Chunk883166 = require("./883166.jsx"),
  Chunk612776 = require("./612776.js"),
  Chunk638398 = require("./638398.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk554445 = require("./554445.js"),
  Chunk115750 = require("./115750.js");

function C(e) {
  let {
    guild: t,
    checkpointGuild: n,
    primaryColor: i
  } = e, a = (0, y.gl)(), {
    unit: s,
    duration: l
  } = (0, h.Bi)(n.numVoiceMinutes);
  return (0, r.jsx)(y.QR, {
    className: o()(T.guildContainer, T.topGuild),
    spring: a,
    children: (0, r.jsxs)(m.Z, {
      innerClassName: T.topGuildBorder,
      useTopRightClipPath: true,
      children: [(0, r.jsxs)("div", {
        className: T.guildInfo,
        children: [(0, r.jsx)(d.Z, {
          guild: t,
          size: d.Z.Sizes.LARGER,
          className: T.guildIcon
        }), (0, r.jsx)(b.Z, {
          className: T.guildName,
          variant: "heading-xl/medium",
          children: t.name
        })]
      }), (0, r.jsx)("div", {
        className: T.rank,
        style: {
          backgroundColor: i
        },
        children: (0, r.jsx)(b.Z, {
          variant: "text-lg/normal",
          className: I.numeric,
          children: "#1"
        })
      }), (0, r.jsxs)("div", {
        className: T.guildStats,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(b.Z, {
            variant: "eyebrow",
            children: S.intl.string(v.default.wWKySP)
          }), (0, r.jsx)(b.Z, {
            variant: "heading-xxl/normal",
            className: I.numeric,
            children: n.numMessagesSent
          })]
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(b.Z, {
            variant: "eyebrow",
            children: s === c.J6.HOURS ? S.intl.format(v.default.Xu0QsX, {
              numHours: l
            }) : S.intl.string(v.default.RmVTph)
          }), (0, r.jsx)(b.Z, {
            variant: "heading-xxl/normal",
            className: I.numeric,
            children: l
          })]
        })]
      })]
    })
  }, t.id)
}

function A(e) {
  let {
    guild: t,
    rank: n,
    primaryColor: i
  } = e, a = (0, y.gl)();
  return (0, r.jsx)(y.QR, {
    className: T.guildContainer,
    spring: a,
    children: (0, r.jsxs)(m.Z, {
      innerClassName: T.guildBorder,
      useTopRightClipPath: true,
      children: [(0, r.jsxs)("div", {
        className: T.guildInfo,
        children: [(0, r.jsx)(d.Z, {
          guild: t,
          size: d.Z.Sizes.LARGER,
          className: T.guildIcon
        }), (0, r.jsx)(b.Z, {
          className: T.guildName,
          variant: "heading-xl/medium",
          children: t.name
        })]
      }), (0, r.jsx)("div", {
        className: T.rank,
        style: {
          backgroundColor: i
        },
        children: (0, r.jsxs)(b.Z, {
          variant: "text-lg/normal",
          className: I.numeric,
          children: ["#", n]
        })
      })]
    })
  }, t.id)
}

function N() {
  let e = (0, i.useContext)(p.Q),
    t = (0, u.dQu)(e.primaryColor).hex(),
    {
      guilds: {
        guilds: n
      } = {
        guilds: []
      }
    } = (0, l.e7)([_.Z], () => _.Z.getCheckpointData()),
    a = (0, i.useMemo)(() => n.map(e => {
      let {
        guild: t,
        numMessagesSent: n,
        numVoiceMinutes: r
      } = e;
      return {
        guild: f.Z.getGuild(t.id),
        numMessagesSent: n,
        numVoiceMinutes: r
      }
    }).filter(e => {
      let {
        guild: t
      } = e;
      return null != t
    }), [n]),
    o = a.length > 0 ? a[0].guild : null;
  return (0, r.jsx)(E.Z, {
    verticalFlow: true,
    children: (0, r.jsxs)("div", {
      className: T.container,
      children: [(0, r.jsxs)("div", {
        className: I.title,
        children: [(0, r.jsx)(s.QTo, {
          size: "refresh_sm",
          color: t,
          colorClass: I.iconColor
        }), (0, r.jsx)(b.Z, {
          variant: "eyebrow",
          className: I.eyebrow,
          children: S.intl.string(v.default.mAroeJ)
        })]
      }), (0, r.jsxs)("div", {
        className: T.header,
        children: [(0, r.jsx)(b.Z, {
          variant: "display-lg",
          className: T.display,
          children: S.intl.string(S.t["7hB4kg"])
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(b.Z, {
            variant: "heading-xxl/medium",
            className: T.subtitle,
            children: S.intl.string(v.default.Q0EMOP)
          }), (0, r.jsx)(g.o, {
            slide: O.yD.GUILDS
          })]
        })]
      }), null != o && (0, r.jsx)(C, {
        guild: o,
        checkpointGuild: a[0],
        primaryColor: t
      }), (0, r.jsx)("div", {
        className: T.guilds,
        children: a.map((e, n) => {
          let {
            guild: i
          } = e;
          return 0 === n ? null : (0, r.jsx)(A, {
            guild: i,
            rank: n + 1,
            primaryColor: t
          }, i.id)
        })
      })]
    })
  })
}