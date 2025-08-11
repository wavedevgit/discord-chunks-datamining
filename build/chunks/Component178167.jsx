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
  Chunk254204 = require("./254204.js");

function u(e) {
  let {
    icon: t,
    onClick: n,
    disabled: o
  } = e;
  return (0, i.jsx)(l.zx, {
    look: l.zx.Looks.BLANK,
    size: l.zx.Sizes.NONE,
    className: c.topBarButton,
    innerClassName: c.iconButtonInner,
    onClick: n,
    disabled: o,
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
    activeIndex: l,
    forward: d,
    back: f
  } = (0, s.t)();
  return (0, i.jsx)("div", {
    className: c.topBar,
    children: (0, i.jsx)(a.TF, {
      leading: (0, i.jsxs)("div", {
        className: c.arrowButtons,
        children: [(0, i.jsx)(u, {
          icon: r.whL,
          disabled: 0 === l,
          onClick: f
        }), (0, i.jsx)(u, {
          icon: r.ZSh,
          disabled: l === n.length - 1,
          onClick: d
        })]
      }),
      trailing: o.tq && (0, i.jsx)(u, {
        icon: r.Dio,
        onClick: t
      })
    })
  })
}