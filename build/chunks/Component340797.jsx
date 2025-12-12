/** Chunk was on web.js **/
/** chunk id: 340797, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk946273 = require("./946273.js"),
  Chunk441110 = require("./441110.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk223850 = require("./223850.js");

function d(e) {
  let {
    guild: t,
    message: n
  } = e, d = i.useRef(null);
  return (0, s.vV)(t.id, n.author.id) ? (0, r.jsx)(o.yRy, {
    targetElementRef: d,
    animation: o.yRy.Animation.TRANSLATE,
    align: "center",
    autoInvert: true,
    nudgeAlignIntoViewport: true,
    position: "right",
    renderPopout: e => {
      let {
        closePopout: i
      } = e;
      return (0, r.jsx)(l.Z, {
        guild: t,
        message: n,
        onClose: i
      })
    },
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, r.jsx)(o.P3F, {
        onClick: t,
        tag: "span",
        innerRef: d,
        children: (0, r.jsx)(a.u, {
          text: c.intl.string(c.t["v/OYd2"]),
          children: (0, r.jsx)("div", {
            className: u.newMemberBadge,
            children: (0, r.jsx)(o.hg2, {
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