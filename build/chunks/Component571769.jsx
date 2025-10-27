/** Chunk was on 19038 **/
/** chunk id: 571769, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk660815 = require("./660815.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk198168 = require("./198168.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk905551 = require("./905551.js"),
  Chunk60482 = require("./60482.js"),
  Chunk587065 = require("./587065.js"),
  Chunk986841 = require("./986841.js"),
  Chunk269794 = require("./269794.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk71124 = require("./71124.js");

function j(t) {
  let {
    guildId: e,
    instance: n,
    onClose: r,
    transitionState: j
  } = t, C = (0, c.e7)([x.Z], () => {
    var t;
    return null == (t = x.Z.getStateForGuild(e)) ? true : t.instructions[n.planId]
  });
  i.useEffect(() => {
    null == C && (0, m.iX)(e, n.planId)
  }, [e, n.planId, C]);
  let S = (0, h.Z)(n),
    {
      handleCopyServerIp: T,
      animateCopyIcon: E
    } = (0, _.Z)(e, n.id, f.Z.GAME_SERVER_INSTRUCTIONS_MODAL, null != S ? S : ""),
    A = i.useMemo(() => {
      switch (n.status) {
        case l.V.STARTING:
          return I.intl.string(v.default.ud4hxY);
        case l.V.OFFLINE:
          return I.intl.string(v.default.ABAm7x);
        default:
          return
      }
    }, [n.status]);
  return (0, s.jsx)(o.ExpressiveModal, {
    graphic: {
      type: "dynamic",
      component: d.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
      props: {
        instance: n
      }
    },
    title: n.name,
    subtitle: I.intl.string(v.default["4HqfaU"]),
    size: "md",
    transitionState: j,
    onClose: r,
    children: null == C ? (0, s.jsx)(p.$jN, {}) : (0, s.jsxs)("div", {
      className: N.content,
      children: [null != A && (0, s.jsx)(u.Z, {
        className: N.infoBox,
        children: A
      }), (0, s.jsx)("div", {
        className: N.stepsContainer,
        children: C.map((t, e) => (0, s.jsxs)("div", {
          className: N.step,
          children: [(0, s.jsx)("div", {
            className: N.stepNumber,
            children: (0, s.jsx)(p.Text, {
              variant: "text-xs/semibold",
              color: "text-secondary",
              children: I.intl.formatToPlainString(v.default.oSU1fF, {
                step: e + 1
              })
            })
          }), (0, s.jsx)(p.Text, {
            variant: "text-sm/normal",
            color: "text-secondary",
            children: t
          })]
        }, e))
      }), null != S && (0, s.jsxs)("div", {
        className: N.serverIpContainer,
        children: [(0, s.jsx)("div", {
          className: a()(N.serverIpInput, E && N.animate),
          children: (0, s.jsx)(p.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: S
          })
        }), (0, s.jsx)(p.Button, {
          variant: E ? "active" : "primary",
          text: E ? I.intl.string(I.t.t5VZ88) : I.intl.string(I.t.OpuAlK),
          onClick: T,
          icon: p.TIy
        })]
      })]
    })
  })
}