/** Chunk was on web.js **/
/** chunk id: 384137, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk854987 = require("./854987.js"),
  Chunk719718 = require("./719718.js"),
  Chunk57882 = require("./57882.js"),
  Chunk368327 = require("./368327.jsx"),
  Chunk818947 = require("./818947.jsx"),
  Chunk155286 = require("./155286.jsx"),
  Chunk573138 = require("./573138.jsx"),
  Chunk877272 = require("./877272.jsx"),
  Chunk359588 = require("./359588.jsx"),
  Chunk532294 = require("./532294.js"),
  Chunk622865 = require("./622865.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk308021 = require("./308021.js"),
  Chunk881493 = require("./881493.js"),
  Chunk485508 = require("./485508.js"),
  Chunk656122 = require("./656122.js");

function I() {
  let {
    messages: {
      numMessagesSent: e,
      numMessagesSentPercentile: t,
      topMonth: {
        month: n
      }
    } = {
      numMessagesSent: 0,
      numMessagesSentPercentile: 0,
      topMonth: {
        month: 0
      }
    }
  } = (0, s.bG)([c.A], () => c.A.getCheckpointData()), I = i.useContext(l.P), S = (0, o.rdh)(I.primaryColor).hex(), {
    monthName: T
  } = (0, u.od)(n, y.intl.currentLocale), C = null != t;
  return (0, r.jsxs)(_.A, {
    className: O.kL,
    children: [(0, r.jsx)(d.A, {
      className: O.Ki,
      slide: g.P7.MESSAGES,
      videoEntrySrc: v.A,
      videoLoopSrc: A.A
    }), (0, r.jsxs)("div", {
      children: [(0, r.jsxs)("div", {
        className: b.DD,
        children: [(0, r.jsx)(a.oyn, {
          size: "refresh_sm",
          color: S,
          colorClass: b.d7,
          className: b.gr
        }), (0, r.jsx)(h.A, {
          variant: "eyebrow",
          className: b.UP,
          children: y.intl.format(E.default.nPTMHj, {
            numMessages: e
          })
        })]
      }), (0, r.jsx)(m.A, {
        end: e
      }), (0, r.jsx)(h.A, {
        variant: "heading-xxl/medium",
        className: O.VA,
        children: C ? y.intl.format(E.default.ixvOza, {
          percent: 100 - t,
          percentHook: (e, t) => (0, r.jsx)(f.A, {
            children: e
          }, t)
        }) : y.intl.format(E.default["Zd+Ej+"], {
          month: T,
          monthHook: (e, t) => (0, r.jsx)(f.A, {
            children: e
          }, t)
        })
      }), (0, r.jsx)(p.e, {
        slide: g.P7.MESSAGES
      })]
    })]
  })
}