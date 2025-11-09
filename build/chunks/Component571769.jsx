/** Chunk was on 19038 **/
/** chunk id: 571769, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => C
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
  Chunk454585 = require("./454585.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk905551 = require("./905551.js"),
  Chunk60482 = require("./60482.js"),
  Chunk587065 = require("./587065.js"),
  Chunk986841 = require("./986841.js"),
  Chunk97200 = require("./97200.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk581385 = require("./581385.js");

function C(e) {
  let {
    guildId: t,
    instance: n,
    onClose: r,
    transitionState: C
  } = e, S = (0, c.e7)([_.Z], () => {
    var e;
    return null == (e = _.Z.getStateForGuild(t)) ? true : e.instructions[n.planId]
  });
  i.useEffect(() => {
    null == S && (0, m.iX)(t, n.planId)
  }, [t, n.planId, S]);
  let g = (0, v.Z)(n),
    {
      handleCopyServerIp: T,
      animateCopyIcon: E
    } = (0, h.Z)(t, n.id, u.Z.GAME_SERVER_INSTRUCTIONS_MODAL, null != g ? g : ""),
    A = i.useMemo(() => {
      switch (n.status) {
        case l.V.STARTING:
          return N.intl.string(I.default.ud4hxY);
        case l.V.OFFLINE:
          return N.intl.string(I.default.ABAm7x);
        default:
          return
      }
    }, [n.status]);
  return (0, s.jsxs)(o.IX, {
    size: "lg",
    paddingSize: "lg",
    transitionState: C,
    onClose: r,
    children: [(0, s.jsx)(o.xBx, {
      gradientColor: "purple",
      graphic: {
        type: "dynamic",
        component: d.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
        props: {
          instance: n
        }
      },
      alignCenter: true,
      title: n.name,
      subtitle: N.intl.string(I.default["4HqfaU"])
    }), null == S ? (0, s.jsx)(p.$jN, {}) : (0, s.jsxs)("div", {
      className: j.content,
      children: [null != A && (0, s.jsx)(x.Z, {
        className: j.infoBox,
        children: A
      }), (0, s.jsx)("div", {
        className: j.stepsContainer,
        children: S.map((e, t) => (0, s.jsxs)("div", {
          className: j.step,
          children: [(0, s.jsx)("div", {
            className: j.stepNumber,
            children: (0, s.jsx)(p.Text, {
              variant: "text-xs/semibold",
              color: "text-secondary",
              children: N.intl.formatToPlainString(I.default.oSU1fF, {
                step: t + 1
              })
            })
          }), (0, s.jsx)(p.Text, {
            variant: "text-sm/normal",
            color: "text-secondary",
            children: f.Z.parse(e, false, {
              allowLinks: true
            })
          })]
        }, t))
      }), null != g && (0, s.jsxs)("div", {
        className: j.serverIpContainer,
        children: [(0, s.jsx)("div", {
          className: a()(j.serverIpInput, E && j.animate),
          children: (0, s.jsx)(p.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: g
          })
        }), (0, s.jsx)(p.Button, {
          variant: E ? "active" : "primary",
          text: E ? N.intl.string(N.t.t5VZ88) : N.intl.string(N.t.OpuAlK),
          onClick: T,
          icon: p.TIy
        })]
      })]
    })]
  })
}