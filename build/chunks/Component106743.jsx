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
  Chunk946232 = require("./946232.js");

function d(e) {
  var t;
  let {
    quest: n,
    onClose: d
  } = e, m = (0, s.km)(e => e.transcript);
  o.useEffect(() => {
    let e = (0, c.z0)(n, l.X.WATCH_VIDEO, c.n1.VIDEO, c.O.TRANSCRIPT);
    (null == m || m.questId !== n.id || m.fetchStatus === s.iF.NONE || m.fetchStatus === s.iF.SUCCESS && (null == e ? true : e.url) !== m.url) && (0, a.lL)(n, l.X.WATCH_VIDEO)
  }, [m, n]);
  let p = (null == m ? true : m.questId) === n.id && (null == m ? true : m.fetchStatus) === s.iF.SUCCESS && null != (t = m.text) ? t : "",
    f = o.useMemo(() => p.split("\n").map(e => e.trim()).filter(e => e.length > 0), [p]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: u.transcriptHeader,
      children: [(0, r.jsx)(i.Heading, {
        variant: "heading-md/semibold",
        color: "currentColor",
        children: "Transcript"
      }), (0, r.jsx)(i.P3F, {
        onClick: d,
        className: u.transcriptBackBtn,
        children: (0, r.jsx)(i.Dio, {
          color: "currentColor"
        })
      })]
    }), (0, r.jsx)(i.tEY, {
      children: (0, r.jsx)(i.w0Z, {
        className: u.transcriptScroller,
        fade: true,
        children: (0, r.jsx)("div", {
          className: u.transcriptBody,
          children: (null == m ? true : m.fetchStatus) === s.iF.FETCHING ? (0, r.jsx)("div", {
            className: u.transcriptBodySpinner,
            children: (0, r.jsx)(i.$jN, {
              type: i.$jN.Type.WANDERING_CUBES
            })
          }) : (0, r.jsx)(i.Heading, {
            variant: "heading-md/normal",
            color: "text-muted",
            children: f.map((e, t) => (0, r.jsx)("p", {
              children: e
            }, t))
          })
        })
      })
    })]
  })
}