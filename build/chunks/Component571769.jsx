/** Chunk was on 19038 **/
/** chunk id: 571769, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => C
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk400580 = require("./400580.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk71124 = require("./71124.js");

function C(t) {
  let {
    guildId: e,
    instance: n,
    onClose: r,
    transitionState: C
  } = t, S = (0, c.e7)([_.Z], () => {
    var t;
    return null == (t = _.Z.getStateForGuild(e)) ? true : t.instructions[n.planId]
  });
  i.useEffect(() => {
    null == S && (0, m.iX)(e, n.planId)
  }, [e, n.planId, S]);
  let g = (0, v.Z)(n),
    {
      handleCopyServerIp: T,
      animateCopyIcon: E
    } = (0, h.Z)(e, n.id, d.Z.GAME_SERVER_INSTRUCTIONS_MODAL, null != g ? g : ""),
    b = i.useMemo(() => {
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
        component: p.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
        props: {
          instance: n
        }
      },
      alignCenter: true,
      title: n.name,
      subtitle: N.intl.string(I.default["4HqfaU"])
    }), null == S ? (0, s.jsx)(u.$jN, {}) : (0, s.jsxs)("div", {
      className: j.content,
      children: [null != b && (0, s.jsx)(x.Z, {
        className: j.infoBox,
        children: b
      }), (0, s.jsx)("div", {
        className: j.stepsContainer,
        children: S.map((t, e) => (0, s.jsxs)("div", {
          className: j.step,
          children: [(0, s.jsx)("div", {
            className: j.stepNumber,
            children: (0, s.jsx)(u.Text, {
              variant: "text-xs/semibold",
              color: "text-subtle",
              children: N.intl.formatToPlainString(I.default.oSU1fF, {
                step: e + 1
              })
            })
          }), (0, s.jsx)(u.Text, {
            variant: "text-sm/normal",
            color: "text-subtle",
            children: f.Z.parse(t, false, {
              allowLinks: true
            })
          })]
        }, e))
      }), null != g && (0, s.jsxs)("div", {
        className: j.serverIpContainer,
        children: [(0, s.jsx)("div", {
          className: a()(j.serverIpInput, E && j.animate),
          children: (0, s.jsx)(u.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: g
          })
        }), (0, s.jsx)(u.Button, {
          variant: E ? "active" : "primary",
          text: E ? N.intl.string(N.t.t5VZ88) : N.intl.string(N.t.OpuAlK),
          onClick: T,
          icon: u.TIy
        })]
      })]
    })]
  })
}