/** Chunk was on 5490 **/
/** chunk id: 826153, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk390544 = require("./390544.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk116833 = require("./116833.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk46054 = require("./46054.js"),
  Chunk801264 = require("./801264.jsx"),
  Chunk665171 = require("./665171.js"),
  Chunk522055 = require("./522055.js"),
  Chunk500897 = require("./500897.js"),
  Chunk117265 = require("./117265.js"),
  Chunk294726 = require("./294726.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk889801 = require("./889801.js");

function j(t) {
  let {
    guildId: e,
    instance: n,
    onClose: l,
    transitionState: j
  } = t, S = (0, c.bG)([_.A], () => {
    var t;
    return null == (t = _.A.getStateForGuild(e)) ? true : t.instructions[n.planId]
  });
  i.useEffect(() => {
    null == S && (0, m.tT)(e, n.planId)
  }, [e, n.planId, S]);
  let C = (0, v.A)(n),
    {
      handleCopyServerIp: T,
      animateCopyIcon: I
    } = (0, h.A)(e, n.id, f.A.GAME_SERVER_INSTRUCTIONS_MODAL, null != C ? C : ""),
    E = i.useMemo(() => {
      switch (n.status) {
        case r.M.STARTING:
          return N.intl.string(A.default.ud4hxY);
        case r.M.OFFLINE:
          return N.intl.string(A.default.ABAm7x);
        default:
          return
      }
    }, [n.status]);
  return (0, s.jsxs)(d.dWK, {
    size: "lg",
    paddingSize: "lg",
    transitionState: j,
    onClose: l,
    children: [(0, s.jsx)(d.rQ0, {
      gradientColor: "purple",
      graphic: {
        type: "dynamic",
        component: o.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
        props: {
          instance: n
        }
      },
      alignCenter: true,
      title: n.name,
      subtitle: N.intl.string(A.default["4HqfaU"])
    }), null == S ? (0, s.jsx)(u.y$y, {}) : (0, s.jsxs)("div", {
      className: g.Qs,
      children: [null != E && (0, s.jsx)(x.A, {
        className: g.et,
        children: E
      }), (0, s.jsx)("div", {
        className: g.$6,
        children: S.map((t, e) => (0, s.jsxs)("div", {
          className: g.PM,
          children: [(0, s.jsx)("div", {
            className: g.CD,
            children: (0, s.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-subtle",
              children: N.intl.formatToPlainString(A.default.oSU1fF, {
                step: e + 1
              })
            })
          }), (0, s.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: p.A.parse(t, false, {
              allowLinks: true
            })
          })]
        }, e))
      }), null != C && (0, s.jsxs)("div", {
        className: g.i7,
        children: [(0, s.jsx)("div", {
          className: a()(g.Nk, I && g.i0),
          children: (0, s.jsx)(u.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            children: C
          })
        }), (0, s.jsx)(u.Button, {
          variant: I ? "active" : "primary",
          text: I ? N.intl.string(N.t.t5VZ88) : N.intl.string(N.t.OpuAlK),
          onClick: T,
          icon: u.TdU
        })]
      })]
    })]
  })
}