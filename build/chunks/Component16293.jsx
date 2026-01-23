/** Chunk was on web.js **/
/** chunk id: 16293, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk499979 = require("./499979.js"),
  Chunk397927 = require("./397927.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk854987 = require("./854987.js"),
  Chunk719718 = require("./719718.js"),
  Chunk57882 = require("./57882.js"),
  Chunk927989 = require("./927989.jsx"),
  Chunk155286 = require("./155286.jsx"),
  Chunk573138 = require("./573138.jsx"),
  Chunk877272 = require("./877272.jsx"),
  Chunk398225 = require("./398225.jsx"),
  Chunk532294 = require("./532294.js"),
  Chunk622865 = require("./622865.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk308021 = require("./308021.js"),
  Chunk80577 = require("./80577.js");

function T(e) {
  let {
    guild: t,
    checkpointGuild: n,
    primaryColor: i
  } = e, a = (0, b.vy)(), {
    unit: o,
    duration: l
  } = (0, h.oO)(n.numVoiceMinutes);
  return (0, r.jsx)(b.vw, {
    className: s()(S.bo, S.dl),
    spring: a,
    children: (0, r.jsxs)(m.A, {
      innerClassName: S.lm,
      useTopRightClipPath: true,
      children: [(0, r.jsxs)("div", {
        className: S.OA,
        children: [(0, r.jsx)(d.A, {
          guild: t,
          size: d.A.Sizes.LARGER,
          className: S.$f
        }), (0, r.jsx)(y.A, {
          className: S.J5,
          variant: "heading-xl/medium",
          children: t.name
        })]
      }), (0, r.jsx)("div", {
        className: S.Tm,
        style: {
          backgroundColor: i
        },
        children: (0, r.jsx)(y.A, {
          variant: "text-lg/normal",
          className: I.sH,
          children: "#1"
        })
      }), (0, r.jsxs)("div", {
        className: S.dX,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(y.A, {
            variant: "eyebrow",
            children: A.intl.string(v.default.wWKySP)
          }), (0, r.jsx)(y.A, {
            variant: "heading-xxl/normal",
            className: I.sH,
            children: n.numMessagesSent
          })]
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(y.A, {
            variant: "eyebrow",
            children: o === c.pJ.HOURS ? A.intl.format(v.default.Xu0QsX, {
              numHours: l
            }) : A.intl.string(v.default.RmVTph)
          }), (0, r.jsx)(y.A, {
            variant: "heading-xxl/normal",
            className: I.sH,
            children: l
          })]
        })]
      })]
    })
  }, t.id)
}

function C(e) {
  let {
    guild: t,
    rank: n,
    primaryColor: i
  } = e, a = (0, b.vy)();
  return (0, r.jsx)(b.vw, {
    className: S.bo,
    spring: a,
    children: (0, r.jsxs)(m.A, {
      innerClassName: S.oQ,
      useTopRightClipPath: true,
      children: [(0, r.jsxs)("div", {
        className: S.OA,
        children: [(0, r.jsx)(d.A, {
          guild: t,
          size: d.A.Sizes.LARGER,
          className: S.$f
        }), (0, r.jsx)(y.A, {
          className: S.J5,
          variant: "heading-xl/medium",
          children: t.name
        })]
      }), (0, r.jsx)("div", {
        className: S.Tm,
        style: {
          backgroundColor: i
        },
        children: (0, r.jsxs)(y.A, {
          variant: "text-lg/normal",
          className: I.sH,
          children: ["#", n]
        })
      })]
    })
  }, t.id)
}

function N() {
  let e = (0, i.useContext)(p.P),
    t = (0, u.rdh)(e.primaryColor).hex(),
    {
      guilds: {
        guilds: n
      } = {
        guilds: []
      }
    } = (0, l.bG)([_.A], () => _.A.getCheckpointData()),
    a = (0, i.useMemo)(() => n.map(e => {
      let {
        guild: t,
        numMessagesSent: n,
        numVoiceMinutes: r
      } = e;
      return {
        guild: f.A.getGuild(t.id),
        numMessagesSent: n,
        numVoiceMinutes: r
      }
    }).filter(e => {
      let {
        guild: t
      } = e;
      return null != t
    }), [n]),
    s = a.length > 0 ? a[0].guild : null;
  return (0, r.jsx)(E.A, {
    verticalFlow: true,
    children: (0, r.jsxs)("div", {
      className: S.kL,
      children: [(0, r.jsxs)("div", {
        className: I.DD,
        children: [(0, r.jsx)(o.RR9, {
          size: "refresh_sm",
          color: t,
          colorClass: I.d7
        }), (0, r.jsx)(y.A, {
          variant: "eyebrow",
          className: I.UP,
          children: A.intl.string(v.default.mAroeJ)
        })]
      }), (0, r.jsxs)("div", {
        className: S.wx,
        children: [(0, r.jsx)(y.A, {
          variant: "display-lg",
          className: S.Vy,
          children: A.intl.string(A.t["7hB4kg"])
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(y.A, {
            variant: "heading-xxl/medium",
            className: S.VA,
            children: A.intl.string(v.default.Q0EMOP)
          }), (0, r.jsx)(g.e, {
            slide: O.P7.GUILDS
          })]
        })]
      }), null != s && (0, r.jsx)(T, {
        guild: s,
        checkpointGuild: a[0],
        primaryColor: t
      }), (0, r.jsx)("div", {
        className: S.Pl,
        children: a.map((e, n) => {
          let {
            guild: i
          } = e;
          return 0 === n ? null : (0, r.jsx)(C, {
            guild: i,
            rank: n + 1,
            primaryColor: t
          }, i.id)
        })
      })]
    })
  })
}