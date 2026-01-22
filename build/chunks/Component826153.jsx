/** Chunk was on 5490 **/
/** chunk id: 826153, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  default: () => j
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
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
    instance: s,
    onClose: a,
    transitionState: j
  } = t, v = (0, c.bG)([f.A], () => {
    var t;
    return null == (t = f.A.getStateForGuild(e)) ? true : t.instructions[s.planId]
  });
  n.useEffect(() => {
    null == v && (0, h.tT)(e, s.planId)
  }, [e, s.planId, v]);
  let S = (0, A.A)(s),
    {
      handleCopyServerIp: T,
      animateCopyIcon: C
    } = (0, b.A)(e, s.id, x.A.GAME_SERVER_INSTRUCTIONS_MODAL, null != S ? S : ""),
    E = n.useMemo(() => {
      switch (s.status) {
        case r.M.STARTING:
          return N.intl.string(_.default.ud4hxY);
        case r.M.OFFLINE:
          return N.intl.string(_.default.ABAm7x);
        default:
          return
      }
    }, [s.status]);
  return (0, i.jsxs)(d.dWK, {
    size: "lg",
    paddingSize: "lg",
    transitionState: j,
    onClose: a,
    children: [(0, i.jsx)(d.rQ0, {
      gradientColor: "purple",
      graphic: {
        type: "dynamic",
        component: u.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
        props: {
          instance: s
        }
      },
      alignCenter: true,
      title: s.name,
      subtitle: N.intl.string(_.default["4HqfaU"])
    }), null == v ? (0, i.jsx)(o.y$y, {}) : (0, i.jsxs)("div", {
      className: g.Qs,
      children: [null != E && (0, i.jsx)(m.A, {
        className: g.et,
        children: E
      }), (0, i.jsx)("div", {
        className: g.$6,
        children: v.map((t, e) => (0, i.jsxs)("div", {
          className: g.PM,
          children: [(0, i.jsx)("div", {
            className: g.CD,
            children: (0, i.jsx)(o.Text, {
              variant: "text-xs/semibold",
              color: "text-subtle",
              children: N.intl.formatToPlainString(_.default.oSU1fF, {
                step: e + 1
              })
            })
          }), (0, i.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: p.A.parse(t, false, {
              allowLinks: true
            })
          })]
        }, e))
      }), null != S && (0, i.jsxs)("div", {
        className: g.i7,
        children: [(0, i.jsx)("div", {
          className: l()(g.Nk, C && g.i0),
          children: (0, i.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            children: S
          })
        }), (0, i.jsx)(o.Button, {
          variant: C ? "active" : "primary",
          text: C ? N.intl.string(N.t.t5VZ88) : N.intl.string(N.t.OpuAlK),
          onClick: T,
          icon: o.TdU
        })]
      })]
    })]
  })
}