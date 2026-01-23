/** Chunk was on 71138 **/
/** chunk id: 121614, original params: e,t,r (module,exports,require) **/
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
  if (null == t) return (0, n.jsx)(l.y$y, {
    type: l.y$y.Type.SPINNING_CIRCLE
  });
  let r = i().map(t, (e, t) => {
    if (true !== e && "buffers" !== t) return (0, n.jsx)(o.q7, {
      label: t,
      value: e
    }, t)
  });
  return r.push((0, n.jsx)(o.q7, {
    label: "Frames Per Second",
    value: t.recentEncodedFrames / (t.recentDurationMs / 1e3)
  }, "framerate")), (0, n.jsxs)(l.BJc, {
    children: [(0, n.jsx)(l.Heading, {
      variant: "heading-md/medium",
      children: d.intl.string(d.t.MKrFKE)
    }), (0, s.C6)(r), function(e) {
      if (null != e.buffers) return e.buffers.map(e => {
        let t = [];
        for (let r of Object.keys(e).sort((e, t) => {
            let r = u[e],
              n = u[t];
            return r !== n ? true === r ? 1 : true === n ? false : r - n : e > t ? 1 : false
          })) {
          let a = e[r];
          null !== a && "key" !== r && t.push((0, n.jsx)(o.q7, {
            label: r,
            value: a
          }, r))
        }
        return (0, n.jsxs)("div", {
          className: c.C2,
          children: [(0, n.jsx)(l.Heading, {
            variant: "heading-md/medium",
            children: "Buffer: ".concat(e.key)
          }), (0, s.C6)(t)]
        }, "Buffer: ".concat(e.key))
      })
    }(t)]
  })
}