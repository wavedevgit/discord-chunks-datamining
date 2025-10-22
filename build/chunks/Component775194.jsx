/** Chunk was on 80960 **/
/** chunk id: 775194, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./642613.js"), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk481250 = require("./481250.jsx"),
  Chunk513547 = require("./513547.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk10198 = require("./10198.js");
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
  if (null == t) return (0, r.jsx)(l.$jN, {
    type: l.$jN.Type.SPINNING_CIRCLE
  });
  let n = i().map(t, (e, t) => {
    if (true !== e && "buffers" !== t) return (0, r.jsx)(s.ck, {
      label: t,
      value: e
    }, t)
  });
  return n.push((0, r.jsx)(s.ck, {
    label: "Frames Per Second",
    value: t.recentEncodedFrames / (t.recentDurationMs / 1e3)
  }, "framerate")), (0, r.jsxs)(l.Kqy, {
    children: [(0, r.jsx)(l.Heading, {
      variant: "heading-md/medium",
      children: c.intl.string(c.t.MKrFKE)
    }), (0, o.VE)(n), function(e) {
      if (null != e.buffers) return e.buffers.map(e => {
        let t = [];
        for (let n of Object.keys(e).sort((e, t) => {
            let n = u[e],
              r = u[t];
            return n !== r ? true === n ? 1 : true === r ? false : n - r : e > t ? 1 : false
          })) {
          let a = e[n];
          null !== a && "key" !== n && t.push((0, r.jsx)(s.ck, {
            label: n,
            value: a
          }, n))
        }
        return (0, r.jsxs)("div", {
          className: d.marginBottom40,
          children: [(0, r.jsx)(l.Heading, {
            variant: "heading-md/medium",
            children: "Buffer: ".concat(e.key)
          }), (0, o.VE)(t)]
        }, "Buffer: ".concat(e.key))
      })
    }(t)]
  })
}