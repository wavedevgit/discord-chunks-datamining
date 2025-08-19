/** Chunk was on 36878 **/
/** chunk id: 178167, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk873546 = require("./873546.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk950796 = require("./950796.jsx"),
  Chunk990757 = require("./990757.js");

function u(e) {
  let {
    icon: t,
    onClick: n,
    disabled: l
  } = e;
  return (0, i.jsx)(o.zx, {
    look: o.zx.Looks.BLANK,
    size: o.zx.Sizes.NONE,
    className: a.topBarButton,
    innerClassName: a.iconButtonInner,
    onClick: n,
    disabled: l,
    children: (0, i.jsx)(t, {
      size: "sm"
    })
  })
}

function c(e) {
  let {
    onClose: t
  } = e;
  return (0, i.jsx)("div", {
    className: a.topBar,
    children: (0, i.jsx)(s.TF, {
      leading: (0, i.jsxs)("div", {
        className: a.arrowButtons,
        children: [(0, i.jsx)(u, {
          icon: r.whL,
          disabled: true
        }), (0, i.jsx)(u, {
          icon: r.ZSh,
          disabled: true
        })]
      }),
      trailing: l.tq && (0, i.jsx)(u, {
        icon: r.Dio,
        onClick: t
      })
    })
  })
}