/** Chunk was on 32249 **/
/** chunk id: 106743, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => s
}), require("./35282.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk184299 = require("./184299.js"),
  Chunk430799 = require("./430799.js");

function s(e) {
  var t;
  let {
    quest: n,
    onClose: s
  } = e, c = (0, a.km)(e => e.transcript), u = (null == c ? true : c.questId) === n.id && (null == c ? true : c.fetchStatus) === a.iF.SUCCESS && null != (t = c.text) ? t : "", d = o.useMemo(() => u.split("\n").map(e => e.trim()).filter(e => e.length > 0), [u]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: i.transcriptHeader,
      children: [(0, r.jsx)(l.X6q, {
        variant: "heading-md/semibold",
        color: "currentColor",
        children: "Transcript"
      }), (0, r.jsx)(l.P3F, {
        onClick: s,
        className: i.transcriptBackBtn,
        children: (0, r.jsx)(l.Dio, {
          color: "currentColor"
        })
      })]
    }), (0, r.jsx)(l.tEY, {
      children: (0, r.jsx)(l.w0Z, {
        className: i.transcriptScroller,
        fade: true,
        children: (0, r.jsx)("div", {
          className: i.transcriptBody,
          children: (null == c ? true : c.fetchStatus) === a.iF.FETCHING ? (0, r.jsx)("div", {
            className: i.transcriptBodySpinner,
            children: (0, r.jsx)(l.$jN, {
              type: l.$jN.Type.WANDERING_CUBES
            })
          }) : (0, r.jsx)(l.X6q, {
            variant: "heading-md/normal",
            color: "text-muted",
            children: d.map((e, t) => (0, r.jsx)("p", {
              children: e
            }, t))
          })
        })
      })
    })]
  })
}