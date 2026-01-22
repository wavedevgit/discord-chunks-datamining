/** Chunk was on 7726 **/
/** chunk id: 895600, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk854378 = require("./854378.jsx"),
  Chunk651539 = require("./651539.js"),
  Chunk768397 = require("./768397.jsx"),
  Chunk401755 = require("./401755.js"),
  Chunk125986 = require("./125986.js");
let c = {
  [Chunk401755.IZ.CLASSROOM]: require("./749576.js"),
  [Chunk401755.IZ.LOCAL_COMMUNITIES]: require("./409682.js"),
  [Chunk401755.IZ.CREATORS_HOBBIES]: require("./785161.js"),
  [Chunk401755.IZ.GLOBAL_COMMUNITIES]: require("./371376.js"),
  [Chunk401755.IZ.FRIENDS_FAMILY]: require("./585589.js"),
  [Chunk401755.IZ.STUDY_GROUPS]: require("./500697.js"),
  [Chunk401755.IZ.CREATE_FROM_SCRATCH]: require("./881377.js"),
  [Chunk401755.IZ.CAMPUS_CLUBS]: require("./573230.js"),
  [Chunk401755.IZ.LEAGUE_CLUBS]: require("./629278.js"),
  [Chunk401755.IZ.GITHUB_HACKATHON]: require("./263135.js")
};

function u(e) {
  let {
    headerId: t,
    guildTemplate: r
  } = e, u = r.code, o = c[u];
  if (null != o) {
    var C;
    let {
      header: e,
      description: c,
      author: m
    } = (0, n.A)(u);
    return (0, s.jsxs)("div", {
      children: [(0, s.jsx)("img", {
        className: d.Sl,
        src: o,
        alt: ""
      }), (0, s.jsx)(l.hE, {
        className: d.wx,
        id: t,
        children: e
      }), (0, s.jsx)(l.tK, {
        children: c
      }), r.state === a.QB.RESOLVED ? (0, s.jsx)(i.F, {
        className: d.t5,
        count: null != (C = r.usageCount) ? C : 0,
        verifiedName: m
      }) : null]
    })
  }
  return (0, s.jsx)(i.A, {
    pillClassName: d.t5,
    guildTemplate: r,
    tall: true
  })
}