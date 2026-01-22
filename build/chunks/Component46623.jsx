/** Chunk was on 78870 **/
/** chunk id: 46623, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk381969 = require("./381969.jsx"),
  Chunk920814 = require("./920814.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk41715 = require("./41715.js");

function d() {
  let {
    selectedTab: e,
    isPhantomPreview: t,
    handlePreviewDismiss: r
  } = (0, l.k)();
  return t ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: a.ZF,
      children: [(0, n.jsx)(o.G3N, {
        size: "xs",
        color: "currentColor"
      }), (0, n.jsx)(o.Text, {
        variant: "text-sm/normal",
        className: a.cP,
        children: e === s.B.GUILD_PRODUCTS_PREVIEW ? c.intl.string(c.t.F4Z0nV) : c.intl.string(c.t.pzTFpM)
      })]
    }), (0, n.jsx)(i.$nd, {
      text: e === s.B.GUILD_PRODUCTS_PREVIEW ? c.intl.string(c.t.YF35pV) : c.intl.string(c.t.r30bky),
      size: "sm",
      variant: "secondary",
      onClick: r
    })]
  }) : null
}