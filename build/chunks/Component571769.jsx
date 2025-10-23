/** Chunk was on 19038 **/
/** chunk id: 571769, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => N
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
  Chunk494620 = require("./494620.jsx"),
  Chunk905551 = require("./905551.js"),
  Chunk60482 = require("./60482.js"),
  Chunk587065 = require("./587065.js"),
  Chunk986841 = require("./986841.js"),
  Chunk470658 = require("./470658.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk71124 = require("./71124.js");

function N(t) {
  let {
    guildId: e,
    instance: n,
    onClose: r,
    transitionState: N
  } = t, j = (0, c.e7)([m.Z], () => {
    var t;
    return null == (t = m.Z.getStateForGuild(e)) ? true : t.instructions[n.planId]
  });
  i.useEffect(() => {
    null == j && (0, u.iX)(e, n.planId)
  }, [e, n.planId, j]);
  let C = (0, _.Z)(n),
    {
      handleCopyServerIp: S,
      animateCopyIcon: T
    } = (0, x.Z)(null != C ? C : ""),
    g = i.useMemo(() => {
      switch (n.status) {
        case l.V.STARTING:
          return v.intl.string(h.default.ud4hxY);
        case l.V.OFFLINE:
          return v.intl.string(h.default.ABAm7x);
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
    subtitle: v.intl.string(h.default["4HqfaU"]),
    size: "md",
    transitionState: N,
    onClose: r,
    children: null == j ? (0, s.jsx)(p.$jN, {}) : (0, s.jsxs)("div", {
      className: I.content,
      children: [null != g && (0, s.jsx)(f.Z, {
        className: I.infoBox,
        children: g
      }), (0, s.jsx)("div", {
        className: I.stepsContainer,
        children: j.map((t, e) => (0, s.jsxs)("div", {
          className: I.step,
          children: [(0, s.jsx)("div", {
            className: I.stepNumber,
            children: (0, s.jsx)(p.Text, {
              variant: "text-xs/semibold",
              color: "text-secondary",
              children: v.intl.formatToPlainString(h.default.oSU1fF, {
                step: e + 1
              })
            })
          }), (0, s.jsx)(p.Text, {
            variant: "text-sm/normal",
            color: "text-secondary",
            children: t
          })]
        }, e))
      }), null != C && (0, s.jsxs)("div", {
        className: I.serverIpContainer,
        children: [(0, s.jsx)("div", {
          className: a()(I.serverIpInput, T && I.animate),
          children: (0, s.jsx)(p.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: C
          })
        }), (0, s.jsx)(p.Button, {
          variant: T ? "active" : "primary",
          text: T ? v.intl.string(v.t.t5VZ88) : v.intl.string(v.t.OpuAlK),
          onClick: S,
          icon: p.TIy
        })]
      })]
    })
  })
}