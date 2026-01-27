/** Chunk was on 20941 **/
/** chunk id: 16293, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
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

function E(e) {
  let {
    guild: t,
    checkpointGuild: n,
    primaryColor: l
  } = e, a = (0, v.vy)(), {
    unit: s,
    duration: o
  } = (0, h.oO)(n.numVoiceMinutes);
  return (0, r.jsx)(v.vw, {
    className: i()(O.bo, O.dl),
    spring: a,
    children: (0, r.jsxs)(b.A, {
      innerClassName: O.lm,
      useTopRightClipPath: true,
      children: [(0, r.jsxs)("div", {
        className: O.OA,
        children: [(0, r.jsx)(d.A, {
          guild: t,
          size: d.A.Sizes.LARGER,
          className: O.$f
        }), (0, r.jsx)(y.A, {
          className: O.J5,
          variant: "heading-xl/medium",
          children: t.name
        })]
      }), (0, r.jsx)("div", {
        className: O.Tm,
        style: {
          backgroundColor: l
        },
        children: (0, r.jsx)(y.A, {
          variant: "text-lg/normal",
          className: A.sH,
          children: "#1"
        })
      }), (0, r.jsxs)("div", {
        className: O.dX,
        children: [(0, r.jsxs)("div", {
          children: [(0, r.jsx)(y.A, {
            variant: "eyebrow",
            children: _.intl.string(C.default.wWKySP)
          }), (0, r.jsx)(y.A, {
            variant: "heading-xxl/normal",
            className: A.sH,
            children: n.numMessagesSent
          })]
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(y.A, {
            variant: "eyebrow",
            children: s === c.pJ.HOURS ? _.intl.format(C.default.Xu0QsX, {
              numHours: o
            }) : _.intl.string(C.default.RmVTph)
          }), (0, r.jsx)(y.A, {
            variant: "heading-xxl/normal",
            className: A.sH,
            children: o
          })]
        })]
      })]
    })
  }, t.id)
}

function S(e) {
  let {
    guild: t,
    rank: n,
    primaryColor: l
  } = e, a = (0, v.vy)();
  return (0, r.jsx)(v.vw, {
    className: O.bo,
    spring: a,
    children: (0, r.jsxs)(b.A, {
      innerClassName: O.oQ,
      useTopRightClipPath: true,
      children: [(0, r.jsxs)("div", {
        className: O.OA,
        children: [(0, r.jsx)(d.A, {
          guild: t,
          size: d.A.Sizes.LARGER,
          className: O.$f
        }), (0, r.jsx)(y.A, {
          className: O.J5,
          variant: "heading-xl/medium",
          children: t.name
        })]
      }), (0, r.jsx)("div", {
        className: O.Tm,
        style: {
          backgroundColor: l
        },
        children: (0, r.jsxs)(y.A, {
          variant: "text-lg/normal",
          className: A.sH,
          children: ["#", n]
        })
      })]
    })
  }, t.id)
}

function N() {
  let e = (0, l.useContext)(f.P),
    t = (0, u.rdh)(e.primaryColor).hex(),
    {
      guilds: {
        guilds: n
      } = {
        guilds: []
      }
    } = (0, o.bG)([p.A], () => p.A.getCheckpointData()),
    a = (0, l.useMemo)(() => n.map(e => {
      let {
        guild: t,
        numMessagesSent: n,
        numVoiceMinutes: r
      } = e;
      return {
        guild: m.A.getGuild(t.id),
        numMessagesSent: n,
        numVoiceMinutes: r
      }
    }).filter(e => {
      let {
        guild: t
      } = e;
      return null != t
    }), [n]),
    i = a.length > 0 ? a[0].guild : null;
  return (0, r.jsx)(x.A, {
    verticalFlow: true,
    children: (0, r.jsxs)("div", {
      className: O.kL,
      children: [(0, r.jsxs)("div", {
        className: A.DD,
        children: [(0, r.jsx)(s.RR9, {
          size: "refresh_sm",
          color: t,
          colorClass: A.d7
        }), (0, r.jsx)(y.A, {
          variant: "eyebrow",
          className: A.UP,
          children: _.intl.string(C.default.mAroeJ)
        })]
      }), (0, r.jsxs)("div", {
        className: O.wx,
        children: [(0, r.jsx)(y.A, {
          variant: "display-lg",
          className: O.Vy,
          children: _.intl.string(_.t["7hB4kg"])
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)(y.A, {
            variant: "heading-xxl/medium",
            className: O.VA,
            children: _.intl.string(C.default.Q0EMOP)
          }), (0, r.jsx)(g.e, {
            slide: j.P7.GUILDS
          })]
        })]
      }), null != i && (0, r.jsx)(E, {
        guild: i,
        checkpointGuild: a[0],
        primaryColor: t
      }), (0, r.jsx)("div", {
        className: O.Pl,
        children: a.map((e, n) => {
          let {
            guild: l
          } = e;
          return 0 === n ? null : (0, r.jsx)(S, {
            guild: l,
            rank: n + 1,
            primaryColor: t
          }, l.id)
        })
      })]
    })
  })
}