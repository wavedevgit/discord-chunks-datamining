/** Chunk was on 80960 **/
/** chunk id: 481250, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  VE: () => Z,
  lV: () => S
}), require("./539854.js"), require("./642613.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk468194 = require("./468194.js"),
  Chunk442837 = require("./442837.js"),
  Chunk199849 = require("./199849.jsx"),
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
  Chunk101713 = require("./101713.js"),
  Chunk478411 = require("./478411.js");
let C = {
  [Chunk65154.Z.NO_OVERRIDE]: "None",
  [Chunk65154.Z.LOW]: "Low Quality Stream",
  [Chunk65154.Z.HIGH]: "High Quality Stream"
};

function Z(e) {
  let t = [],
    n = 0;
  for (e.length % 2 != 0 && e.push((0, r.jsx)(p.Z, {
      basis: "50%",
      grow: 0
    }, n++)); e.length > 0;) t.push((0, r.jsx)(p.Z, {
    basis: "50%",
    grow: 0,
    children: e.splice(0, 2)
  }, n++));
  return t
}
let R = {
  ssrc: 1,
  codec: 2
};

function S(e) {
  let {
    streams: t,
    context: n,
    mediaEngineConnectionId: i,
    userId: S,
    videoStreams: F,
    title: N,
    showUserInfo: I = false,
    showSimulcastOverride: k = false
  } = e, [w, B] = a.useState("0"), A = (0, s.e7)([g.Z], () => I ? g.Z.getGuildId() : null), T = (0, s.e7)([E.default], () => I && null != S ? E.default.getUser(S) : null), L = (0, s.e7)([f.ZP], () => I && null != A && null != S ? f.ZP.getNick(A, S) : null);
  if (null == t || I && null == S || 0 === t.length) return (0, r.jsx)(d.$jN, {
    type: d.$jN.Type.SPINNING_CIRCLE
  });
  let O = N;
  I && null != T && (O = "".concat(N, " — ").concat(null != L ? L : b.ZP.getName(T)));
  let M = t.map((e, t) => (0, r.jsx)(d.njP.Item, {
      id: t.toString(),
      children: function(e) {
        let t = (0, o.De)(e.type),
          n = "";
        return "resolution" in e && null != e.resolution && 0 !== e.resolution.width && 0 !== e.resolution.height && (n = " (".concat(e.resolution.width, "x").concat(e.resolution.height, ")")), t + n
      }(e)
    }, t.toString())),
    V = Math.min(parseInt(w, 10), t.length - 1),
    G = t[V],
    H = function(e, t, n, a, i) {
      let o = [];
      for (let t of Object.keys(e).sort((e, t) => {
          let n = R[e],
            r = R[t];
          return n !== r ? true === n ? 1 : true === r ? false : n - r : v.Pz[e] !== v.Pz[t] ? v.Pz[e] ? 1 : false : e > t ? 1 : false
        })) {
        let n = e[t];
        D.al[t] || true === n || o.push((0, r.jsx)(D.ck, {
          section: a,
          label: t,
          value: n
        }, t))
      }
      return (0, r.jsxs)("div", {
        className: x.marginBottom40,
        children: ["video" === e.type && null != n && null != a && null != i && function(e, t, n, a) {
          let i = a.get(t, n, e.ssrc);
          return null != i ? (0, r.jsx)("div", {
            className: l()(j.videoWrapper, x.marginBottom40),
            children: (0, r.jsx)(h.Z, {
              streamId: i,
              videoComponent: y.Z.getMediaEngine().Video,
              paused: false,
              videoSpinnerContext: m.m.REPLAY_VIDEO_STREAM,
              userId: n
            })
          }) : null
        }(e, n, a, i), Z(o)]
      }, "".concat(e.type, " + ").concat(e.ssrc))
    }(G, 0, i, S, F),
    U = k && "video" === G.type && null != i && null != S && null != F && (0, r.jsx)(p.Z, {
      className: x.marginBottom20,
      children: (0, r.jsx)(p.Z.Child, {
        basis: "100%",
        children: (0, r.jsx)(c.y6, {
          label: "Simulcast Override",
          value: v.ZP.getSimulcastDebugOverride(S, n),
          onChange: e => {
            u.MS(S, n, e)
          },
          options: Object.values(P.Z).map(e => ({
            value: e,
            label: C[e]
          }))
        })
      })
    });
  return (0, r.jsxs)(d.Kqy, {
    gap: 16,
    children: [(0, r.jsx)(d.Heading, {
      variant: "heading-md/medium",
      children: O
    }), (0, r.jsx)(d.njP, {
      type: "top",
      look: "brand",
      selectedItem: w,
      onItemSelect: B,
      className: j.tabBar,
      children: M
    }), H, U]
  })
}