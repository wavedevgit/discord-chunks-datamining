/** Chunk was on 80960 **/
/** chunk id: 481250, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  VE: () => C,
  lV: () => R
}), require("./539854.js"), require("./642613.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk468194 = require("./468194.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk304680 = require("./304680.js"),
  Chunk763520 = require("./763520.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk352978 = require("./352978.jsx"),
  Chunk271383 = require("./271383.js"),
  Chunk131951 = require("./131951.js"),
  Chunk19780 = require("./19780.js"),
  Chunk226961 = require("./226961.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk513547 = require("./513547.jsx"),
  Chunk65154 = require("./65154.js"),
  Chunk966117 = require("./966117.js"),
  Chunk197571 = require("./197571.js");
let x = {
  [Chunk65154.Z.NO_OVERRIDE]: "None",
  [Chunk65154.Z.LOW]: "Low Quality Stream",
  [Chunk65154.Z.HIGH]: "High Quality Stream"
};

function C(e) {
  let t = [],
    n = 0;
  for (e.length % 2 != 0 && e.push((0, r.jsx)(m.Z, {
      basis: "50%",
      grow: 0
    }, n++)); e.length > 0;) t.push((0, r.jsx)(m.Z, {
    basis: "50%",
    grow: 0,
    children: e.splice(0, 2)
  }, n++));
  return t
}
let Z = {
  ssrc: 1,
  codec: 2
};

function R(e) {
  let {
    streams: t,
    context: n,
    mediaEngineConnectionId: i,
    userId: R,
    videoStreams: S,
    title: F,
    showUserInfo: N = false,
    showSimulcastOverride: I = false
  } = e, [k, w] = a.useState("0"), B = (0, s.e7)([y.Z], () => N ? y.Z.getGuildId() : null), A = (0, s.e7)([v.default], () => N && null != R ? v.default.getUser(R) : null), T = (0, s.e7)([h.ZP], () => N && null != B && null != R ? h.ZP.getNick(B, R) : null);
  if (null == t || N && null == R || 0 === t.length) return (0, r.jsx)(c.$jN, {
    type: c.$jN.Type.SPINNING_CIRCLE
  });
  let L = F;
  N && null != A && (L = "".concat(F, " — ").concat(null != T ? T : E.ZP.getName(A)));
  let O = t.map((e, t) => (0, r.jsx)(c.njP.Item, {
      id: t.toString(),
      children: function(e) {
        let t = (0, o.De)(e.type),
          n = "";
        return "resolution" in e && null != e.resolution && 0 !== e.resolution.width && 0 !== e.resolution.height && (n = " (".concat(e.resolution.width, "x").concat(e.resolution.height, ")")), t + n
      }(e)
    }, t.toString())),
    M = Math.min(parseInt(k, 10), t.length - 1),
    V = t[M],
    G = function(e, t, n, a, i) {
      let o = [];
      for (let t of Object.keys(e).sort((e, t) => {
          let n = Z[e],
            r = Z[t];
          return n !== r ? true === n ? 1 : true === r ? false : n - r : g.Pz[e] !== g.Pz[t] ? g.Pz[e] ? 1 : false : e > t ? 1 : false
        })) {
        let n = e[t];
        b.al[t] || true === n || o.push((0, r.jsx)(b.ck, {
          section: a,
          label: t,
          value: n
        }, t))
      }
      return (0, r.jsxs)("div", {
        className: j.marginBottom40,
        children: ["video" === e.type && null != n && null != a && null != i && function(e, t, n, a) {
          let i = a.get(t, n, e.ssrc);
          return null != i ? (0, r.jsx)("div", {
            className: l()(P.videoWrapper, j.marginBottom40),
            children: (0, r.jsx)(p.Z, {
              streamId: i,
              videoComponent: f.Z.getMediaEngine().Video,
              paused: false,
              videoSpinnerContext: u.m.REPLAY_VIDEO_STREAM,
              userId: n
            })
          }) : null
        }(e, n, a, i), C(o)]
      }, "".concat(e.type, " + ").concat(e.ssrc))
    }(V, 0, i, R, S),
    H = I && "video" === V.type && null != i && null != R && null != S && (0, r.jsx)(m.Z, {
      className: j.marginBottom20,
      children: (0, r.jsx)(m.Z.Child, {
        basis: "100%",
        children: (0, r.jsx)(c.q4e, {
          label: "Simulcast Override",
          value: g.ZP.getSimulcastDebugOverride(R, n),
          onChange: e => {
            d.MS(R, n, e)
          },
          options: Object.values(D.Z).map(e => ({
            value: e,
            label: x[e]
          }))
        })
      })
    });
  return (0, r.jsxs)(c.Kqy, {
    gap: 16,
    children: [(0, r.jsx)(c.Heading, {
      variant: "heading-md/medium",
      children: L
    }), (0, r.jsx)(c.njP, {
      type: "top",
      look: "brand",
      selectedItem: k,
      onItemSelect: w,
      className: P.tabBar,
      children: O
    }), G, H]
  })
}