/** Chunk was on 32249 **/
/** chunk id: 106743, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => d
}), require("./35282.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk754700 = require("./754700.js"),
  Chunk481060 = require("./481060.js"),
  Chunk272008 = require("./272008.js"),
  Chunk184299 = require("./184299.js"),
  Chunk720293 = require("./720293.js"),
  Chunk430799 = require("./430799.js");

function d(e) {
  var t;
  let {
    quest: n,
    onClose: d
  } = e, f = (0, s.km)(e => e.transcript);
  o.useEffect(() => {
    let e = (0, c.z0)(n, a.X.WATCH_VIDEO, c.n1.VIDEO, c.O.TRANSCRIPT);
    (null == f || f.questId !== n.id || f.fetchStatus === s.iF.NONE || f.fetchStatus === s.iF.SUCCESS && (null == e ? true : e.url) !== f.url) && (0, i.lL)(n, a.X.WATCH_VIDEO)
  }, [f, n]);
  let p = (null == f ? true : f.questId) === n.id && (null == f ? true : f.fetchStatus) === s.iF.SUCCESS && null != (t = f.text) ? t : "",
    m = o.useMemo(() => p.split("\n").map(e => e.trim()).filter(e => e.length > 0), [p]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: u.transcriptHeader,
      children: [(0, r.jsx)(l.X6q, {
        variant: "heading-md/semibold",
        color: "currentColor",
        children: "Transcript"
      }), (0, r.jsx)(l.P3F, {
        onClick: d,
        className: u.transcriptBackBtn,
        children: (0, r.jsx)(l.Dio, {
          color: "currentColor"
        })
      })]
    }), (0, r.jsx)(l.tEY, {
      children: (0, r.jsx)(l.w0Z, {
        className: u.transcriptScroller,
        fade: true,
        children: (0, r.jsx)("div", {
          className: u.transcriptBody,
          children: (null == f ? true : f.fetchStatus) === s.iF.FETCHING ? (0, r.jsx)("div", {
            className: u.transcriptBodySpinner,
            children: (0, r.jsx)(l.$jN, {
              type: l.$jN.Type.WANDERING_CUBES
            })
          }) : (0, r.jsx)(l.X6q, {
            variant: "heading-md/normal",
            color: "text-muted",
            children: m.map((e, t) => (0, r.jsx)("p", {
              children: e
            }, t))
          })
        })
      })
    })]
  })
}