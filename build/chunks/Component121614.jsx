/** Chunk was on 71138 **/
/** chunk id: 121614, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./638769.js"), require("./321073.js"), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk397927 = require("./397927.js"),
  Chunk828904 = require("./828904.jsx"),
  Chunk974175 = require("./974175.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk473169 = require("./473169.js");
let u = {
  userId: 1,
  dataType: 2,
  savedKB: 3,
  numFrames: 4,
  startTimestampMs: 5,
  endTimestampMs: 6,
  width: 7,
  height: 8,
  audioChannels: 9,
  sampleRate: 10
};

function m(e) {
  let {
    clips: t
  } = e;
  if (null == t) return (0, r.jsx)(l.y$y, {
    type: l.y$y.Type.SPINNING_CIRCLE
  });
  let n = i().map(t, (e, t) => {
    if (true !== e && "buffers" !== t) return (0, r.jsx)(o.q7, {
      label: t,
      value: e
    }, t)
  });
  return n.push((0, r.jsx)(o.q7, {
    label: "Frames Per Second",
    value: t.recentEncodedFrames / (t.recentDurationMs / 1e3)
  }, "framerate")), (0, r.jsxs)(l.BJc, {
    children: [(0, r.jsx)(l.Heading, {
      variant: "heading-md/medium",
      children: d.intl.string(d.t.MKrFKE)
    }), (0, s.C6)(n), function(e) {
      if (null != e.buffers) return e.buffers.map(e => {
        let t = [];
        for (let n of Object.keys(e).sort((e, t) => {
            let n = u[e],
              r = u[t];
            return n !== r ? true === n ? 1 : true === r ? false : n - r : e > t ? 1 : false
          })) {
          let a = e[n];
          null !== a && "key" !== n && t.push((0, r.jsx)(o.q7, {
            label: n,
            value: a
          }, n))
        }
        return (0, r.jsxs)("div", {
          className: c.C2,
          children: [(0, r.jsx)(l.Heading, {
            variant: "heading-md/medium",
            children: "Buffer: ".concat(e.key)
          }), (0, s.C6)(t)]
        }, "Buffer: ".concat(e.key))
      })
    }(t)]
  })
}