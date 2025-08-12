/** Chunk was on 32249 **/
/** chunk id: 106743, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  K: () => s
}), require("./35282.js"), require("./781311.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk184299 = require("./184299.js"),
  Chunk177004 = require("./177004.js");

function s(e) {
  var t;
  let {
    quest: n,
    onClose: s
  } = e, c = (0, i.km)(e => e.transcript), u = (null == c ? true : c.questId) === n.id && (null == c ? true : c.fetchStatus) === i.iF.SUCCESS && null != (t = c.text) ? t : "", d = l.useMemo(() => u.split("\n").map(e => e.trim()).filter(e => e.length > 0), [u]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: a.transcriptHeader,
      children: [(0, r.jsx)(o.X6q, {
        variant: "heading-md/semibold",
        color: "currentColor",
        children: "Transcript"
      }), (0, r.jsx)(o.P3F, {
        onClick: s,
        className: a.transcriptBackBtn,
        children: (0, r.jsx)(o.Dio, {
          color: "currentColor"
        })
      })]
    }), (0, r.jsx)(o.tEY, {
      children: (0, r.jsx)(o.w0Z, {
        className: a.transcriptScroller,
        fade: true,
        children: (0, r.jsx)("div", {
          className: a.transcriptBody,
          children: (null == c ? true : c.fetchStatus) === i.iF.FETCHING ? (0, r.jsx)("div", {
            className: a.transcriptBodySpinner,
            children: (0, r.jsx)(o.$jN, {
              type: o.$jN.Type.WANDERING_CUBES
            })
          }) : (0, r.jsx)(o.X6q, {
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