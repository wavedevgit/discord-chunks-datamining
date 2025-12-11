/** Chunk was on 75909 **/
/** chunk id: 890193, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  E: () => u
}), require("./35282.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk22095 = require("./22095.js"),
  Chunk184299 = require("./184299.js"),
  Chunk475595 = require("./475595.js"),
  Chunk209668 = require("./209668.js");

function u(e) {
  var t;
  let {
    quest: n,
    onClose: u
  } = e, d = (0, a.km)(e => e.transcript);
  o.useEffect(() => {
    let e = (0, s.fh)(n, s.eC.VIDEO_PLAYER_TRANSCRIPT, true, false);
    (null == d || d.questId !== n.id || d.fetchStatus === a.iF.NONE || d.fetchStatus === a.iF.SUCCESS && (null == e ? true : e.url) !== d.url) && (0, i.lL)(n)
  }, [d, n]);
  let m = (null == d ? true : d.questId) === n.id && (null == d ? true : d.fetchStatus) === a.iF.SUCCESS && null != (t = d.text) ? t : "",
    f = o.useMemo(() => m.split("\n").map(e => e.trim()).filter(e => e.length > 0), [m]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: c.transcriptHeader,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-md/semibold",
        color: "currentColor",
        children: "Transcript"
      }), (0, r.jsx)(l.P3F, {
        onClick: u,
        className: c.transcriptBackBtn,
        children: (0, r.jsx)(l.Dio, {
          color: "currentColor"
        })
      })]
    }), (0, r.jsx)(l.tEY, {
      children: (0, r.jsx)(l.w0Z, {
        className: c.transcriptScroller,
        fade: true,
        children: (0, r.jsx)("div", {
          className: c.transcriptBody,
          children: (null == d ? true : d.fetchStatus) === a.iF.FETCHING ? (0, r.jsx)("div", {
            className: c.transcriptBodySpinner,
            children: (0, r.jsx)(l.$jN, {
              type: l.$jN.Type.WANDERING_CUBES
            })
          }) : (0, r.jsx)(l.Heading, {
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