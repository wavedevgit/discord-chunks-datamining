/** Chunk was on 10778 **/
/** chunk id: 473855, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk388905 = require("./388905.jsx"),
  Chunk837748 = require("./837748.js"),
  Chunk306453 = require("./306453.jsx"),
  Chunk260539 = require("./260539.js"),
  Chunk285711 = require("./285711.js");
let d = {
  [Chunk260539.HQ.CLASSROOM]: require("./320440.js"),
  [Chunk260539.HQ.LOCAL_COMMUNITIES]: require("./526916.js"),
  [Chunk260539.HQ.CREATORS_HOBBIES]: require("./419185.js"),
  [Chunk260539.HQ.GLOBAL_COMMUNITIES]: require("./540909.js"),
  [Chunk260539.HQ.FRIENDS_FAMILY]: require("./826806.js"),
  [Chunk260539.HQ.STUDY_GROUPS]: require("./29654.js"),
  [Chunk260539.HQ.CREATE_FROM_SCRATCH]: require("./561030.js"),
  [Chunk260539.HQ.CAMPUS_CLUBS]: require("./494207.js"),
  [Chunk260539.HQ.LEAGUE_CLUBS]: require("./232454.js"),
  [Chunk260539.HQ.GITHUB_HACKATHON]: require("./123013.js")
};

function u(e) {
  let {
    headerId: t,
    guildTemplate: n
  } = e, u = n.code, o = d[u];
  if (null != o) {
    var C;
    let {
      header: e,
      description: d,
      author: m
    } = (0, l.Z)(u);
    return (0, r.jsxs)("div", {
      children: [(0, r.jsx)("img", {
        className: c.image,
        src: o,
        alt: ""
      }), (0, r.jsx)(i.Dx, {
        className: c.header,
        id: t,
        children: e
      }), (0, r.jsx)(i.DK, {
        children: d
      }), n.state === a.Rj.RESOLVED ? (0, r.jsx)(s.D, {
        className: c.usagePill,
        count: null != (C = n.usageCount) ? C : 0,
        verifiedName: m
      }) : null]
    })
  }
  return (0, r.jsx)(s.Z, {
    pillClassName: c.usagePill,
    guildTemplate: n,
    tall: true
  })
}