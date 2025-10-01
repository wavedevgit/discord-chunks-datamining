/** Chunk was on 28934 **/
/** chunk id: 826011, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  default: () => I
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk660815 = require("./660815.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk572004 = require("./572004.js"),
  Chunk744993 = require("./744993.js"),
  Chunk693587 = require("./693587.js"),
  Chunk943970 = require("./943970.js"),
  Chunk998964 = require("./998964.js"),
  Chunk440589 = require("./440589.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk999852 = require("./999852.js");

function I(e) {
  let {
    guildId: t,
    instance: s,
    onClose: I,
    transitionState: j
  } = e, C = (0, l.e7)([u.Z], () => {
    var e;
    return null == (e = u.Z.getStateForGuild(t)) ? true : e.instructions[s.planId]
  });
  r.useEffect(() => {
    null == C && (0, p.iX)(t, s.planId)
  }, [t, s.planId, C]);
  let N = (0, x.Z)(s),
    g = r.useCallback(() => {
      (0, d.JG)(N), (0, c.showToast)((0, c.createToast)(h.intl.string(h.t["+5kSoa"]), c.ToastType.SUCCESS))
    }, [N]),
    T = (0, m.Z)(s.gameId, "cover"),
    _ = r.useMemo(() => {
      switch (s.status) {
        case i.V.STARTING:
          return h.intl.string(f.default["1XVBDQ"]);
        case i.V.OFFLINE:
          return h.intl.string(f.default.m4inWl);
        default:
          return
      }
    }, [s.status]);
  return (0, n.jsx)(a.ExpressiveModal, {
    graphic: {
      src: T,
      type: "image"
    },
    title: s.name,
    subtitle: h.intl.string(f.default["8Fgoo6"]),
    size: "md",
    transitionState: j,
    onClose: I,
    children: null == C ? (0, n.jsx)(c.$jN, {}) : (0, n.jsxs)("div", {
      className: v.content,
      children: [null != _ && (0, n.jsx)(o.Z, {
        className: v.infoBox,
        children: _
      }), (0, n.jsx)("div", {
        className: v.stepsContainer,
        children: C.map((e, t) => (0, n.jsxs)("div", {
          className: v.step,
          children: [(0, n.jsx)("div", {
            className: v.stepNumber,
            children: (0, n.jsx)(c.Text, {
              variant: "text-sm/semibold",
              color: "text-secondary",
              children: h.intl.formatToPlainString(f.default.e0RxEB, {
                step: t + 1
              })
            })
          }), (0, n.jsx)(c.Text, {
            variant: "text-md/normal",
            color: "header-primary",
            children: e
          })]
        }, t))
      }), (0, n.jsxs)("div", {
        className: v.serverIpContainer,
        children: [(0, n.jsx)("div", {
          className: v.serverIpInput,
          children: (0, n.jsx)(c.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: N
          })
        }), (0, n.jsx)(c.zxk, {
          variant: "primary",
          text: h.intl.string(h.t.OpuAlJ),
          onClick: g,
          icon: c.TIy
        })]
      })]
    })
  })
}