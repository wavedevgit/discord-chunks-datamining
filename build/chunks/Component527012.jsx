/** Chunk was on 46673 **/
/** chunk id: 527012, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  y: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk652215 = require("./652215.js"),
  Chunk321018 = require("./321018.js");

function s(e) {
  let {
    buttonText: t,
    onGoBack: n,
    onDismiss: s,
    showCloseButton: c
  } = e;
  return (0, r.jsxs)(l.$Td, {
    className: o.eR,
    children: [c && (0, r.jsx)(l.PMB, {
      onClick: s,
      className: o.b,
      noticeType: a.kqX.BACK_TO_PREVIOUS_SCREEN
    }), (0, r.jsx)(i.$nd, {
      text: t,
      variant: "overlay-secondary",
      size: "sm",
      icon: l.rJJ,
      onClick: n
    })]
  })
}