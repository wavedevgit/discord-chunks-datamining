/** Chunk was on 36878 **/
/** chunk id: 178167, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk873546 = require("./873546.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk950796 = require("./950796.jsx"),
  Chunk59662 = require("./59662.js"),
  Chunk990757 = require("./990757.js");

function c(e) {
  let {
    icon: t,
    onClick: n,
    disabled: l
  } = e;
  return (0, i.jsx)(s.zx, {
    look: s.zx.Looks.BLANK,
    size: s.zx.Sizes.NONE,
    className: u.topBarButton,
    innerClassName: u.iconButtonInner,
    onClick: n,
    disabled: l,
    children: (0, i.jsx)(t, {
      size: "sm"
    })
  })
}

function d(e) {
  let {
    onClose: t
  } = e, {
    history: n,
    activeIndex: s,
    forward: d,
    back: f
  } = (0, a.t)();
  return (0, i.jsx)("div", {
    className: u.topBar,
    children: (0, i.jsx)(r.TF, {
      leading: (0, i.jsxs)("div", {
        className: u.arrowButtons,
        children: [(0, i.jsx)(c, {
          icon: o.whL,
          disabled: 0 === s,
          onClick: f
        }), (0, i.jsx)(c, {
          icon: o.ZSh,
          disabled: s === n.length - 1,
          onClick: d
        })]
      }),
      trailing: l.tq && (0, i.jsx)(c, {
        icon: o.Dio,
        onClick: t
      })
    })
  })
}