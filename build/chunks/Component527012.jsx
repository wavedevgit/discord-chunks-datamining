/** Chunk was on web.js **/
/** chunk id: 527012, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  y: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk652215 = require("./652215.js"),
  Chunk321018 = require("./321018.js");

function l(e) {
  let {
    buttonText: t,
    onGoBack: n,
    onDismiss: l,
    showCloseButton: c
  } = e;
  return (0, r.jsxs)(a.$Td, {
    className: o.eR,
    children: [c && (0, r.jsx)(a.PMB, {
      onClick: l,
      className: o.b,
      noticeType: s.kqX.BACK_TO_PREVIOUS_SCREEN
    }), (0, r.jsx)(i.$nd, {
      text: t,
      variant: "overlay-secondary",
      size: "sm",
      icon: a.rJJ,
      onClick: n
    })]
  })
}