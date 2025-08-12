/** Chunk was on 5533 **/
/** chunk id: 651390, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => d
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk66511 = require("./66511.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk1662 = require("./1662.js");

function d(e) {
  let {
    guildId: t
  } = e, n = i.useCallback(() => {
    s.Z.openMemberVerificationPreviewModal(t)
  }, [t]);
  return (0, r.jsxs)(a.P3F, {
    onClick: n,
    className: c.previewButton,
    children: [(0, r.jsx)(l.xv, {
      tag: "span",
      variant: "text-sm/semibold",
      color: "text-brand",
      children: o.intl.string(o.t.SKNnqq)
    }), (0, r.jsx)(a.rgF, {
      size: "xs",
      color: "currentColor"
    })]
  })
}