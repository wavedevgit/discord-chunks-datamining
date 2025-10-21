/** Chunk was on 29679 **/
/** chunk id: 651390, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  c: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk66511 = require("./66511.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk300137 = require("./300137.js");

function d(e) {
  let {
    guildId: t
  } = e, n = i.useCallback(() => {
    s.Z.openMemberVerificationPreviewModal(t)
  }, [t]);
  return (0, r.jsxs)(a.P3F, {
    onClick: n,
    className: c.previewButton,
    children: [(0, r.jsx)(l.xvT, {
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