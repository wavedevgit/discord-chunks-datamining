/** Chunk was on 5606 **/
/** chunk id: 508971, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk397927 = require("./397927.js"),
  Chunk405269 = require("./405269.js"),
  Chunk927018 = require("./927018.js"),
  Chunk906688 = require("./906688.jsx"),
  Chunk869295 = require("./869295.js");

function _(e) {
  let {
    achievementId: t,
    dateUnlocked: n
  } = e, i = (0, d.vM)(t);
  if (null == i) return null;
  let s = null != n,
    {
      name: _,
      description: m,
      hideDescriptionUntilUnlock: g,
      onAction: f
    } = i,
    b = g && !s,
    h = s ? "text-strong" : "text-muted",
    A = s ? "text-default" : "text-muted",
    E = a()(n),
    x = null != f && s,
    O = x ? o.DUT : "div";
  return (0, r.jsxs)(O, {
    className: l()(p.kL, x && p.b),
    onClick: () => {
      x && f()
    },
    children: [(0, r.jsx)("div", {
      className: p.zc,
      children: (0, r.jsx)(u.A, {
        achievementId: t,
        size: u.A.Sizes.SIZE_40,
        unlocked: s
      })
    }), (0, r.jsxs)("div", {
      className: p.VW,
      children: [null != n && (0, r.jsx)(o.Text, {
        variant: "text-xxs/semibold",
        color: "text-muted",
        className: p.YR,
        children: (0, c.mk)(E)
      }), (0, r.jsx)(o.Text, {
        variant: "text-md/medium",
        color: h,
        children: _()
      }), (0, r.jsx)(o.Text, {
        variant: "text-xs/normal",
        color: A,
        children: b ? "?????" : m()
      })]
    })]
  })
}