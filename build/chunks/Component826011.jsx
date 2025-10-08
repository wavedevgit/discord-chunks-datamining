/** Chunk was on 28934 **/
/** chunk id: 826011, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => I
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
  Chunk744993 = require("./744993.js"),
  Chunk693587 = require("./693587.js"),
  Chunk998964 = require("./998964.js"),
  Chunk440589 = require("./440589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk999852 = require("./999852.js");

function I(e) {
  let {
    guildId: t,
    instance: n,
    onClose: I,
    transitionState: C
  } = e, N = (0, l.e7)([x.Z], () => {
    var e;
    return null == (e = x.Z.getStateForGuild(t)) ? true : e.instructions[n.planId]
  });
  r.useEffect(() => {
    null == N && (0, u.iX)(t, n.planId)
  }, [t, n.planId, N]);
  let T = (0, m.Z)(n),
    j = r.useCallback(() => {
      (0, d.JG)(null != T ? T : ""), (0, o.showToast)((0, o.createToast)(h.intl.string(h.t["+5kSoa"]), o.ToastType.SUCCESS))
    }, [T]),
    S = r.useMemo(() => {
      switch (n.status) {
        case i.V.STARTING:
          return h.intl.string(f.default["1XVBDQ"]);
        case i.V.OFFLINE:
          return h.intl.string(f.default.m4inWl);
        default:
          return
      }
    }, [n.status]);
  return (0, s.jsx)(a.ExpressiveModal, {
    graphic: {
      type: "dynamic",
      component: c.DynamicGraphicComponent.PORTKEY_GAME_INSTRUCTIONS_ASSET,
      props: {
        instance: n
      }
    },
    title: n.name,
    subtitle: h.intl.string(f.default["8Fgoo6"]),
    size: "md",
    transitionState: C,
    onClose: I,
    children: null == N ? (0, s.jsx)(o.$jN, {}) : (0, s.jsxs)("div", {
      className: v.content,
      children: [null != S && (0, s.jsx)(p.Z, {
        className: v.infoBox,
        children: S
      }), (0, s.jsx)("div", {
        className: v.stepsContainer,
        children: N.map((e, t) => (0, s.jsxs)("div", {
          className: v.step,
          children: [(0, s.jsx)("div", {
            className: v.stepNumber,
            children: (0, s.jsx)(o.Text, {
              variant: "text-xs/semibold",
              color: "text-secondary",
              children: h.intl.formatToPlainString(f.default.e0RxEB, {
                step: t + 1
              })
            })
          }), (0, s.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-secondary",
            children: e
          })]
        }, t))
      }), null != T && (0, s.jsxs)("div", {
        className: v.serverIpContainer,
        children: [(0, s.jsx)("div", {
          className: v.serverIpInput,
          children: (0, s.jsx)(o.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: T
          })
        }), (0, s.jsx)(o.zxk, {
          variant: "primary",
          text: h.intl.string(h.t.OpuAlJ),
          onClick: j,
          icon: o.TIy
        })]
      })]
    })
  })
}