/** Chunk was on web.js **/
/** chunk id: 200759, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk351001 = require("./351001.js"),
  Chunk226884 = require("./226884.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk58855 = require("./58855.js");

function d(e) {
  let {
    guild: t,
    message: n
  } = e, d = i.useRef(null);
  return (0, s.HU)(t.id, n.author.id) ? (0, r.jsx)(o.YNO, {
    targetElementRef: d,
    animation: o.YNO.Animation.TRANSLATE,
    align: "center",
    autoInvert: true,
    nudgeAlignIntoViewport: true,
    position: "right",
    renderPopout: e => {
      let {
        closePopout: i
      } = e;
      return (0, r.jsx)(l.A, {
        guild: t,
        message: n,
        onClose: i
      })
    },
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(o.DUT, {
        onClick: t,
        tag: "span",
        innerRef: d,
        children: (0, r.jsx)(a.m, {
          text: c.intl.string(c.t["v/OYd2"]),
          children: (0, r.jsx)("div", {
            className: u.C,
            children: (0, r.jsx)(o.NVf, {
              size: "custom",
              color: "currentColor",
              width: 20,
              height: 20
            })
          })
        })
      })
    }
  }) : null
}