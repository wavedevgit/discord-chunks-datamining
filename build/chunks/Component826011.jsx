/** Chunk was on 28934 **/
/** chunk id: 826011, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk667202 = require("./667202.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk572004 = require("./572004.js"),
  Chunk744993 = require("./744993.js"),
  Chunk693587 = require("./693587.js"),
  Chunk943970 = require("./943970.js"),
  Chunk998964 = require("./998964.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk927607 = require("./927607.js");

function h(e) {
  let {
    guildId: t,
    instance: s,
    onClose: h,
    transitionState: I
  } = e, f = (0, a.e7)([p.Z], () => {
    var e;
    return null == (e = p.Z.getStateForGuild(t)) ? true : e.instructions[s.planId]
  });
  r.useEffect(() => {
    null == f && (0, o.iX)(t, s.planId)
  }, [t, s.planId, f]);
  let j = (0, u.Z)(s),
    C = r.useCallback(() => {
      (0, c.JG)(j), (0, l.showToast)((0, l.createToast)(x.intl.string(x.t["+5kSoa"]), l.ToastType.SUCCESS))
    }, [j]),
    N = (0, d.Z)(s.gameId, "cover");
  return (0, n.jsx)(i.I, {
    graphic: {
      src: N,
      type: "image"
    },
    title: s.name,
    subtitle: s.planName,
    size: "md",
    transitionState: I,
    onClose: h,
    children: null == f ? (0, n.jsx)(l.$jN, {}) : (0, n.jsxs)("div", {
      className: v.content,
      children: [(0, n.jsx)("div", {
        className: v.stepsContainer,
        children: f.map((e, t) => (0, n.jsxs)("div", {
          className: v.step,
          children: [(0, n.jsx)("div", {
            className: v.stepNumber,
            children: (0, n.jsx)(l.Text, {
              variant: "text-sm/semibold",
              color: "text-secondary",
              children: x.intl.formatToPlainString(m.default.e0RxEB, {
                step: t + 1
              })
            })
          }), (0, n.jsx)(l.Text, {
            variant: "text-md/normal",
            color: "header-primary",
            children: e
          })]
        }, t))
      }), (0, n.jsxs)("div", {
        className: v.serverIpContainer,
        children: [(0, n.jsx)("div", {
          className: v.serverIpInput,
          children: (0, n.jsx)(l.Text, {
            variant: "text-md/medium",
            color: "header-primary",
            children: j
          })
        }), (0, n.jsx)(l.zxk, {
          variant: "primary",
          text: x.intl.string(x.t.OpuAlJ),
          onClick: C,
          icon: l.TIy
        })]
      })]
    })
  })
}