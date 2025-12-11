/** Chunk was on 19038 **/
/** chunk id: 571769, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk660815 = require("./660815.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk198168 = require("./198168.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk454585 = require("./454585.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk905551 = require("./905551.js"),
  Chunk60482 = require("./60482.js"),
  Chunk587065 = require("./587065.js"),
  Chunk986841 = require("./986841.js"),
  Chunk160589 = require("./160589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk321464 = require("./321464.js");

function j(t) {
  let {
    guildId: e,
    instance: n,
    onClose: i,
    transitionState: j
  } = t, C = (0, o.e7)([h.Z], () => {
    var t;
    return null == (t = h.Z.getStateForGuild(e)) ? true : t.instructions[n.planId]
  });
  a.useEffect(() => {
    null == C && (0, m.iX)(e, n.planId)
  }, [e, n.planId, C]);
  let g = (0, I.Z)(n),
    {
      handleCopyServerIp: S,
      animateCopyIcon: T
    } = (0, v.Z)(e, n.id, u.Z.GAME_SERVER_INSTRUCTIONS_MODAL, null != g ? g : ""),
    E = a.useMemo(() => {
      switch (n.status) {
        case l.V.STARTING:
          return N.intl.string(b.default.ud4hxY);
        case l.V.OFFLINE:
          return N.intl.string(b.default.ABAm7x);
        default:
          return
      }
    }, [n.status]);
  return (0, s.jsxs)(c.IX, {
    size: "lg",
    paddingSize: "lg",
    transitionState: j,
    onClose: i,
    children: [(0, s.jsx)(c.xBx, {
      gradientColor: "purple",
      graphic: {
        type: "dynamic",
        component: f.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
        props: {
          instance: n
        }
      },
      alignCenter: true,
      title: n.name,
      subtitle: N.intl.string(b.default["4HqfaU"])
    }), null == C ? (0, s.jsx)(p.$jN, {}) : (0, s.jsxs)("div", {
      className: _.content,
      children: [null != E && (0, s.jsx)(x.Z, {
        className: _.infoBox,
        children: E
      }), (0, s.jsx)("div", {
        className: _.stepsContainer,
        children: C.map((t, e) => (0, s.jsxs)("div", {
          className: _.step,
          children: [(0, s.jsx)("div", {
            className: _.stepNumber,
            children: (0, s.jsx)(p.Text, {
              variant: "text-xs/semibold",
              color: "text-subtle",
              children: N.intl.formatToPlainString(b.default.oSU1fF, {
                step: e + 1
              })
            })
          }), (0, s.jsx)(p.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: d.Z.parse(t, false, {
              allowLinks: true
            })
          })]
        }, e))
      }), null != g && (0, s.jsxs)("div", {
        className: _.serverIpContainer,
        children: [(0, s.jsx)("div", {
          className: r()(_.serverIpInput, T && _.animate),
          children: (0, s.jsx)(p.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            children: g
          })
        }), (0, s.jsx)(p.Button, {
          variant: T ? "active" : "primary",
          text: T ? N.intl.string(N.t.t5VZ88) : N.intl.string(N.t.OpuAlK),
          onClick: S,
          icon: p.TIy
        })]
      })]
    })]
  })
}