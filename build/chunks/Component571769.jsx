/** Chunk was on 32076 **/
/** chunk id: 571769, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk660815 = require("./660815.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk198168 = require("./198168.js"),
  Chunk481060 = require("./481060.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk572004 = require("./572004.js"),
  Chunk905551 = require("./905551.js"),
  Chunk60482 = require("./60482.js"),
  Chunk986841 = require("./986841.js"),
  Chunk948208 = require("./948208.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk71124 = require("./71124.js");

function _(e) {
  let {
    guildId: t,
    instance: n,
    onClose: _,
    transitionState: I
  } = e, C = (0, l.e7)([f.Z], () => {
    var e;
    return null == (e = f.Z.getStateForGuild(t)) ? true : e.instructions[n.planId]
  });
  r.useEffect(() => {
    null == C && (0, u.iX)(t, n.planId)
  }, [t, n.planId, C]);
  let N = (0, x.Z)(n),
    j = r.useCallback(() => {
      (0, p.JG)(null != N ? N : ""), (0, c.showToast)((0, c.createToast)(h.intl.string(h.t["+5kSoa"]), c.ToastType.SUCCESS))
    }, [N]),
    S = r.useMemo(() => {
      switch (n.status) {
        case a.V.STARTING:
          return h.intl.string(m.default.ud4hxc);
        case a.V.OFFLINE:
          return h.intl.string(m.default["ABAm7+"]);
        default:
          return
      }
    }, [n.status]);
  return (0, s.jsx)(i.ExpressiveModal, {
    graphic: {
      type: "dynamic",
      component: o.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
      props: {
        instance: n
      }
    },
    title: n.name,
    subtitle: h.intl.string(m.default["4HqfaW"]),
    size: "md",
    transitionState: I,
    onClose: _,
    children: null == C ? (0, s.jsx)(c.$jN, {}) : (0, s.jsxs)("div", {
      className: v.content,
      children: [null != S && (0, s.jsx)(d.Z, {
        className: v.infoBox,
        children: S
      }), (0, s.jsx)("div", {
        className: v.stepsContainer,
        children: C.map((e, t) => (0, s.jsxs)("div", {
          className: v.step,
          children: [(0, s.jsx)("div", {
            className: v.stepNumber,
            children: (0, s.jsx)(c.Text, {
              variant: "text-xs/semibold",
              color: "text-secondary",
              children: h.intl.formatToPlainString(m.default.oSU1fH, {
                step: t + 1
              })
            })
          }), (0, s.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-secondary",
            children: e
          })]
        }, t))
      }), null != N && (0, s.jsxs)("div", {
        className: v.serverIpContainer,
        children: [(0, s.jsx)("div", {
          className: v.serverIpInput,
          children: (0, s.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: N
          })
        }), (0, s.jsx)(c.Button, {
          variant: "primary",
          text: h.intl.string(h.t.OpuAlJ),
          onClick: j,
          icon: c.TIy
        })]
      })]
    })
  })
}