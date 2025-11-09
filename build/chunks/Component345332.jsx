/** Chunk was on web.js **/
/** chunk id: 345332, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  F: () => _,
  Y: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk772848 = require("./772848.js"),
  Chunk993365 = require("./993365.js"),
  Chunk481060 = require("./481060.js"),
  Chunk245216 = require("./245216.jsx"),
  Chunk561466 = require("./561466.js"),
  Chunk74866 = require("./74866.js");

function d(e) {
  switch (e) {
    case c.pC.SUCCESS:
      return (0, r.jsx)(s.dz2, {
        size: "md",
        className: u.icon,
        color: s.TVs.colors.STATUS_POSITIVE.css
      });
    case c.pC.FAILURE:
      return (0, r.jsx)(s.Uz9, {
        size: "md",
        className: u.icon,
        color: s.TVs.colors.STATUS_DANGER.css
      });
    case c.pC.CLIP:
      return (0, r.jsx)(s.AlX, {
        size: "xs",
        className: u.clipIcon,
        color: s.TVs.colors.HEADER_PRIMARY.css
      });
    case c.pC.LINK:
      return (0, r.jsx)(s.xPt, {
        className: u.icon,
        color: s.TVs.colors.HEADER_PRIMARY.css
      });
    case c.pC.FORWARD:
      return (0, r.jsx)(l.Z, {
        className: u.icon,
        color: s.TVs.colors.STATUS_POSITIVE.css
      });
    case c.pC.INVITE:
      return (0, r.jsx)(s._XJ, {
        className: u.icon,
        color: s.TVs.colors.TEXT_BRAND.css
      });
    case c.pC.BOOKMARK:
      return (0, r.jsx)(s.plf, {
        className: u.icon,
        color: s.TVs.colors.HEADER_PRIMARY.css
      });
    case c.pC.CLOCK:
      return (0, r.jsx)(s.T39, {
        className: u.icon,
        color: s.TVs.colors.HEADER_PRIMARY.css
      });
    case c.pC.AI:
      return (0, r.jsx)(s.$2U, {
        className: u.icon,
        color: s.TVs.colors.HEADER_PRIMARY.css
      });
    default:
      return null
  }
}

function f(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : c.si,
    {
      position: r = c.si.position,
      component: i = c.si.component,
      duration: o = c.si.duration,
      appContext: s = c.si.appContext
    } = n;
  return {
    message: e,
    id: (0, a.Z)(),
    type: t,
    options: {
      position: r,
      component: i,
      duration: o,
      appContext: s
    }
  }
}
let _ = Chunk647438.memo(function(e) {
  let {
    message: t,
    type: n,
    id: i,
    options: {
      component: a = c.si.component
    } = c.si
  } = e;
  return null != a ? a : (0, r.jsxs)("div", {
    id: i,
    className: u.toast,
    "data-type": n,
    children: [d(n), (0, r.jsx)(o.x, {
      className: u.content,
      variant: "text-md/normal",
      children: t
    })]
  })
})