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
  Chunk860076 = require("./860076.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk417788 = require("./417788.js"),
  Chunk154326 = require("./154326.js");

function C(e) {
  let {
    guild: t,
    checkpointGuild: n,
    primaryColor: i
  } = e, a = (0, y.gl)(), {
    unit: s,
    duration: l
  } = (0, m.Bi)(n.numVoiceMinutes);
  return (0, r.jsx)(y.QR, {
    className: o()(T.guildContainer, T.topGuild),
    spring: a,
    children: (0, r.jsxs)(h.Z, {
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
    children: (0, r.jsxs)(h.Z, {
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
  let e = (0, Chunk473749.useContext)(Chunk324060.Q),
    t = (0, Chunk481060.dQu)(module.primaryColor).hex(),
    {
      guilds: {
        guilds: n
      } = {
        guilds: []
      }
    } = (0, Chunk442837.e7)([Chunk5888.Z], () => Chunk5888.Z.getCheckpointData()),
    a = (0, Chunk473749.useMemo)(() => require.map(e => {
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
    }), [require]),
    o = Chunk120356.length > 0 ? Chunk120356[0].guild : null;
  return (0, Chunk54381.jsx)(Chunk198358.Z, {
    verticalFlow: true,
    children: (0, Chunk54381.jsxs)("div", {
      className: Chunk154326.container,
      children: [(0, Chunk54381.jsxs)("div", {
        className: Chunk417788.title,
        children: [(0, Chunk54381.jsx)(Chunk793030.QTo, {
          size: "refresh_sm",
          color: exports,
          colorClass: Chunk417788.iconColor
        }), (0, Chunk54381.jsx)(Chunk391876.Z, {
          variant: "eyebrow",
          className: Chunk417788.eyebrow,
          children: Chunk388032.intl.string(Chunk860076.default.mAroeJ)
        })]
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk154326.header,
        children: [(0, Chunk54381.jsx)(Chunk391876.Z, {
          variant: "display-lg",
          className: Chunk154326.display,
          children: Chunk388032.intl.string(Chunk388032.t["7hB4kg"])
        }), (0, Chunk54381.jsxs)("div", {
          children: [(0, Chunk54381.jsx)(Chunk391876.Z, {
            variant: "heading-xxl/medium",
            className: Chunk154326.subtitle,
            children: Chunk388032.intl.string(Chunk860076.default.Q0EMOP)
          }), (0, Chunk54381.jsx)(Chunk909397.o, {
            slide: Chunk612776.yD.GUILDS
          })]
        })]
      }), null != o && (0, Chunk54381.jsx)(C, {
        guild: o,
        checkpointGuild: Chunk120356[0],
        primaryColor: exports
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk154326.guilds,
        children: Chunk120356.map((e, n) => {
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