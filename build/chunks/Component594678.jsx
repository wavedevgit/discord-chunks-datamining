/** Chunk was on 20941 **/
/** chunk id: 594678, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => N
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975807 = require("./975807.js"),
  Chunk975571 = require("./975571.js"),
  Chunk854987 = require("./854987.js"),
  Chunk719718 = require("./719718.js"),
  Chunk368327 = require("./368327.jsx"),
  Chunk818947 = require("./818947.jsx"),
  Chunk155286 = require("./155286.jsx"),
  Chunk573138 = require("./573138.jsx"),
  Chunk877272 = require("./877272.jsx"),
  Chunk359588 = require("./359588.jsx"),
  Chunk532294 = require("./532294.js"),
  Chunk652215 = require("./652215.js"),
  Chunk622865 = require("./622865.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk308021 = require("./308021.js"),
  Chunk829252 = require("./829252.js"),
  Chunk416397 = require("./416397.js"),
  Chunk582165 = require("./582165.js");

function N() {
  let e = (0, l.useContext)(m.P),
    t = (0, c.rdh)(e.primaryColor).hex(),
    {
      quests: {
        numOrbs: n,
        numCompleted: a
      } = {
        numOrbs: 0,
        numCompleted: 0
      }
    } = (0, o.bG)([f.A], () => f.A.getCheckpointData()),
    N = 0 === a,
    I = () => {
      (0, u.A)(d.A.getArticleURL(j.MVz.QUESTS_LEARN_MORE))
    };
  return (0, r.jsxs)(g.A, {
    className: O.kL,
    children: [(0, r.jsx)(p.A, {
      className: O.Ki,
      slide: v.P7.QUESTS,
      videoEntrySrc: E.A,
      videoLoopSrc: S.A
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: i()(A.DD, {
          [O.p$]: N
        }),
        children: [(0, r.jsx)(s.r2v, {
          size: "refresh_sm",
          color: t,
          colorClass: A.d7,
          className: A.gr
        }), (0, r.jsx)(x.A, {
          variant: "eyebrow",
          className: A.UP,
          children: N ? _.intl.string(C.default.QkdNzt) : _.intl.string(C.default.qsFkSO)
        })]
      }), !N && (0, r.jsx)(y.A, {
        end: a
      }), (n > 0 || 0 === a) && (0, r.jsx)(x.A, {
        variant: "heading-xxl/medium",
        className: O.VA,
        children: 0 === a ? _.intl.format(C.default.UYTBoT, {
          learnMoreHook: (e, t) => (0, r.jsx)(s.DUT, {
            onClick: I,
            className: O.C2,
            children: (0, r.jsx)(x.A, {
              variant: "heading-xxl/medium",
              className: O.nf,
              children: e
            })
          }, t)
        }) : _.intl.format(C.default["gd+Olh"], {
          numOrbs: n,
          orbsHook: (e, t) => (0, r.jsxs)(h.A, {
            children: [(0, r.jsx)(s.Cp8, {
              className: O.Uu,
              color: c.LU0.colors.BLACK
            }), e]
          }, t)
        })
      }), (0, r.jsx)(b.e, {
        slide: v.P7.QUESTS
      })]
    })]
  })
}