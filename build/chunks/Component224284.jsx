/** Chunk was on 23628 **/
/** chunk id: 224284, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => u
}), require("./747238.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk829219 = require("./829219.js"),
  Chunk405670 = require("./405670.js"),
  Chunk579473 = require("./579473.js"),
  Chunk438655 = require("./438655.js");

function u(e) {
  var t;
  let {
    quest: n,
    onClose: u
  } = e, d = (0, s.Kr)(e => e.transcript);
  l.useEffect(() => {
    let e = (0, a.tW)(n, a.fY.VIDEO_PLAYER_TRANSCRIPT, true, false);
    (null == d || d.questId !== n.id || d.fetchStatus === s.Lx.NONE || d.fetchStatus === s.Lx.SUCCESS && (null == e ? true : e.url) !== d.url) && (0, i.qY)(n)
  }, [d, n]);
  let p = (null == d ? true : d.questId) === n.id && (null == d ? true : d.fetchStatus) === s.Lx.SUCCESS && null != (t = d.text) ? t : "",
    f = l.useMemo(() => p.split("\n").map(e => e.trim()).filter(e => e.length > 0), [p]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: c.Mm,
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-md/semibold",
        color: "currentColor",
        children: "Transcript"
      }), (0, r.jsx)(o.DUT, {
        onClick: u,
        className: c.GI,
        children: (0, r.jsx)(o.PGe, {
          color: "currentColor"
        })
      })]
    }), (0, r.jsx)(o.vN3, {
      children: (0, r.jsx)(o.ArX, {
        className: c.j5,
        fade: true,
        children: (0, r.jsx)("div", {
          className: c.FN,
          children: (null == d ? true : d.fetchStatus) === s.Lx.FETCHING ? (0, r.jsx)("div", {
            className: c.Cw,
            children: (0, r.jsx)(o.y$y, {
              type: o.y$y.Type.WANDERING_CUBES
            })
          }) : (0, r.jsx)(o.Heading, {
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