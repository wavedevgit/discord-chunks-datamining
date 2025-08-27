/** Chunk was on web.js **/
/** chunk id: 91218, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk274424 = require("./274424.js");
let u = Chunk647438.forwardRef(function(e, t) {
  let {
    className: n,
    src: i,
    unicodeEmoji: a,
    name: u,
    size: d = 20,
    enableTooltip: f = true,
    enableHeight: _ = true,
    onClick: p
  } = e;
  if (null == i && null == a) return null;
  let h = () => {
    let e = (0, r.jsx)("img", {
      ref: t,
      alt: "",
      "aria-label": l.intl.formatToPlainString(l.t["9+YWrK"], {
        name: u
      }),
      className: o()(c.roleIcon, n, {
        [c.clickable]: null != p
      }),
      height: _ ? d : true,
      src: i,
      width: d
    });
    return (null != a && (e = (0, r.jsx)("img", {
      ref: t,
      alt: "",
      "aria-label": a.allNamesString,
      className: o()(c.roleIcon, n, {
        [c.clickable]: null != p
      }),
      height: _ ? d : true,
      src: a.url,
      width: d
    })), null == p) ? (0, r.jsx)(s.tEY, {
      offset: {
        left: 5
      },
      children: e
    }) : (0, r.jsx)(s.P3F, {
      onClick: p,
      tag: "span",
      focusProps: {
        offset: {
          left: 5
        }
      },
      children: e
    })
  };
  return (0, r.jsx)(s.DY3, {
    text: u,
    "aria-label": false,
    shouldShow: f,
    element: "span",
    children: h()
  })
})