/** Chunk was on 71138 **/
/** chunk id: 828904, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  C6: () => R,
  HI: () => S
}), require("./321073.js"), require("./638769.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk23339 = require("./23339.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk233545 = require("./233545.js"),
  Chunk684339 = require("./684339.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk401901 = require("./401901.jsx"),
  Chunk696451 = require("./696451.js"),
  Chunk430452 = require("./430452.js"),
  Chunk383501 = require("./383501.js"),
  Chunk412780 = require("./412780.js"),
  Chunk287809 = require("./287809.js"),
  Chunk427262 = require("./427262.js"),
  Chunk974175 = require("./974175.jsx"),
  Chunk731854 = require("./731854.js"),
  Chunk518959 = require("./518959.js"),
  Chunk473169 = require("./473169.js");
let D = {
  [Chunk731854.r8.NO_OVERRIDE]: "None",
  [Chunk731854.r8.LOW]: "Low Quality Stream",
  [Chunk731854.r8.HIGH]: "High Quality Stream"
};

function R(e) {
  let t = [],
    r = 0;
  for (e.length % 2 != 0 && e.push((0, n.jsx)(m.A, {
      basis: "50%",
      grow: 0
    }, r++)); e.length > 0;) t.push((0, n.jsx)(m.A, {
    basis: "50%",
    grow: 0,
    children: e.splice(0, 2)
  }, r++));
  return t
}
let F = {
  ssrc: 1,
  codec: 2
};

function S(e) {
  let {
    streams: t,
    context: r,
    mediaEngineConnectionId: i,
    userId: S,
    videoStreams: j,
    title: P,
    showUserInfo: N = false,
    showSimulcastOverride: I = false
  } = e, [k, B] = a.useState("0"), w = (0, o.bG)([g.A], () => N ? g.A.getGuildId() : null), T = (0, o.bG)([f.default], () => N && null != S ? f.default.getUser(S) : null), L = (0, o.bG)([y.Ay], () => N && null != w && null != S ? y.Ay.getNick(w, S) : null);
  if (null == t || N && null == S || 0 === t.length) return (0, n.jsx)(d.y$y, {
    type: d.y$y.Type.SPINNING_CIRCLE
  });
  let O = P;
  N && null != T && (O = "".concat(P, " — ").concat(null != L ? L : v.Ay.getName(T)));
  let M = t.map((e, t) => {
      let r, a;
      return (0, n.jsx)(d.VQ0.Item, {
        id: t.toString(),
        children: (r = (0, s.$G)(e.type), a = "", "resolution" in e && null != e.resolution && 0 !== e.resolution.width && 0 !== e.resolution.height && (a = " (".concat(e.resolution.width, "x").concat(e.resolution.height, ")")), r + a)
      }, t.toString())
    }),
    G = Math.min(parseInt(k, 10), t.length - 1),
    H = t[G],
    U = function(e, t, r, a, i) {
      let s, o = [];
      for (let t of Object.keys(e).sort((e, t) => {
          let r = F[e],
            n = F[t];
          return r !== n ? true === r ? 1 : true === n ? false : r - n : A.iA[e] !== A.iA[t] ? A.iA[e] ? 1 : false : e > t ? 1 : false
        })) {
        let r = e[t];
        b.R[t] || true === r || o.push((0, n.jsx)(b.q7, {
          section: a,
          label: t,
          value: r
        }, t))
      }
      return (0, n.jsxs)("div", {
        className: x.C2,
        children: ["video" === e.type && null != r && null != a && null != i && (null != (s = i.get(r, a, e.ssrc)) ? (0, n.jsx)("div", {
          className: l()(E.tN, x.C2),
          children: (0, n.jsx)(p.A, {
            streamId: s,
            videoComponent: h.A.getMediaEngine().Video,
            paused: false,
            videoSpinnerContext: u.u.REPLAY_VIDEO_STREAM,
            userId: a
          })
        }) : null), R(o)]
      }, "".concat(e.type, " + ").concat(e.ssrc))
    }(H, 0, i, S, j),
    q = I && "video" === H.type && null != i && null != S && null != j && (0, n.jsx)(m.A, {
      className: x.SX,
      children: (0, n.jsx)(m.A.Child, {
        basis: "100%",
        children: (0, n.jsx)(d.l6P, {
          label: "Simulcast Override",
          value: A.Ay.getSimulcastDebugOverride(S, r),
          onSelectionChange: e => {
            c.z0(S, r, e)
          },
          options: Object.values(C.r8).map(e => ({
            id: e,
            value: e,
            label: D[e]
          })),
          selectionMode: "single",
          fullWidth: true
        })
      })
    });
  return (0, n.jsxs)(d.BJc, {
    gap: 16,
    children: [(0, n.jsx)(d.Heading, {
      variant: "heading-md/medium",
      children: O
    }), (0, n.jsx)(d.VQ0, {
      type: "top",
      look: "brand",
      selectedItem: k,
      onItemSelect: B,
      className: E.$H,
      children: M
    }), U, q]
  })
}