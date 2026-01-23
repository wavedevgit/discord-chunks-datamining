/** Chunk was on web.js **/
/** chunk id: 594678, original params: e,t,n (module,exports,re quire) **/
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
  let e = (0, i.useContext)(f.P),
    t = (0, c.rdh)(e.primaryColor).hex(),
    {
      quests: {
        numOrbs: n,
        numCompleted: a
      } = {
        numOrbs: 0,
        numCompleted: 0
      }
    } = (0, l.bG)([p.A], () => p.A.getCheckpointData()),
    N = 0 === a,
    w = n > 0 || 0 === a,
    R = () => {
      (0, u.A)(d.A.getArticleURL(O.MVz.QUESTS_LEARN_MORE))
    };
  return (0, r.jsxs)(g.A, {
    className: S.kL,
    children: [(0, r.jsx)(_.A, {
      className: S.Ki,
      slide: b.P7.QUESTS,
      videoEntrySrc: T.A,
      videoLoopSrc: C.A
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: s()(I.DD, {
          [S.p$]: N
        }),
        children: [(0, r.jsx)(o.r2v, {
          size: "refresh_sm",
          color: t,
          colorClass: I.d7,
          className: I.gr
        }), (0, r.jsx)(E.A, {
          variant: "eyebrow",
          className: I.UP,
          children: N ? A.intl.string(v.default.QkdNzt) : A.intl.string(v.default.qsFkSO)
        })]
      }), !N && (0, r.jsx)(y.A, {
        end: a
      }), w && (0, r.jsx)(E.A, {
        variant: "heading-xxl/medium",
        className: S.VA,
        children: 0 === a ? A.intl.format(v.default.UYTBoT, {
          learnMoreHook: (e, t) => (0, r.jsx)(o.DUT, {
            onClick: R,
            className: S.C2,
            children: (0, r.jsx)(E.A, {
              variant: "heading-xxl/medium",
              className: S.nf,
              children: e
            })
          }, t)
        }) : A.intl.format(v.default["gd+Olh"], {
          numOrbs: n,
          orbsHook: (e, t) => (0, r.jsxs)(h.A, {
            children: [(0, r.jsx)(o.Cp8, {
              className: S.Uu,
              color: c.LU0.colors.BLACK
            }), e]
          }, t)
        })
      }), (0, r.jsx)(m.e, {
        slide: b.P7.QUESTS
      })]
    })]
  })
}