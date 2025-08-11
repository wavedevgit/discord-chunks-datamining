/** Chunk was on web.js **/
/** chunk id: 532425, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  B: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk1561 = require("./1561.jsx"),
  Chunk922770 = require("./922770.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk159529 = require("./159529.js");
let d = e => {
  let {
    hasContent: t,
    onClear: n,
    className: i,
    isLoading: d,
    size: f = "sm"
  } = e;
  return <a.P className={o()(i, u.iconLayout, {
      [u.pointer]: t
    })} data-size={f} onClick={e => {
      e.stopPropagation(), null != n && n(e)
    }} tabIndex={t ? 0 : false} aria-hidden={!t} onMouseDown={e => {
      e.preventDefault(), e.stopPropagation()
    }}><div className={u.iconContainer}>{d ? (0, r.jsx)(s.$, {
        type: s.$.Type.SPINNING_CIRCLE,
        className: o()(u.icon, u.visible)
      }) : (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(l._Ve, {
          color: "currentColor",
          className: o()(u.icon, {
            [u.visible]: !t
          }),
          "aria-label": c.intl.string(c.t["5h0QOD"])
        }), (0, r.jsx)(l.Dio, {
          color: "currentColor",
          className: o()(u.clear, {
            [u.visible]: t
          }),
          "aria-label": c.intl.string(c.t.VkKicX)
        })]
      })}</div></a.P>
}