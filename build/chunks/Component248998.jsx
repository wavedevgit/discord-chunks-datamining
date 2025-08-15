/** Chunk was on 30202 **/
/** chunk id: 248998, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk55935 = require("./55935.js"),
  Chunk955204 = require("./955204.js"),
  Chunk674680 = require("./674680.jsx"),
  Chunk655219 = require("./655219.js");

function p(e) {
  let {
    achievementId: t,
    dateUnlocked: n
  } = e, r = (0, d.oX)(t);
  if (null == r) return null;
  let a = null != n,
    {
      name: p,
      description: g,
      hideDescriptionUntilUnlock: h,
      onAction: f
    } = r,
    b = h && !a,
    x = a ? "header-primary" : "text-muted",
    _ = a ? "header-secondary" : "text-muted",
    j = l()(n),
    E = null != f && a,
    C = E ? o.P3F : "div";
  return (0, i.jsxs)(C, {
    className: s()(m.container, E && m.actionable),
    onClick: () => {
      E && f()
    },
    children: [(0, i.jsx)("div", {
      className: m.iconContainer,
      children: (0, i.jsx)(u.Z, {
        achievementId: t,
        size: u.Z.Sizes.SIZE_40,
        unlocked: a
      })
    }), (0, i.jsxs)("div", {
      className: m.nameContainer,
      children: [null != n && (0, i.jsx)(o.Text, {
        variant: "text-xxs/semibold",
        color: "text-muted",
        className: m.unlocked,
        children: (0, c.Y4)(j)
      }), (0, i.jsx)(o.Text, {
        variant: "text-md/medium",
        color: x,
        children: p()
      }), (0, i.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: _,
        children: b ? "?????" : g()
      })]
    })]
  })
}