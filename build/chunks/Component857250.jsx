/** Chunk was on web.js **/
/** chunk id: 857250, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  o: () => f,
  y: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk835245 = require("./835245.js"),
  Chunk571356 = require("./571356.js"),
  Chunk397927 = require("./397927.js"),
  Chunk427209 = require("./427209.jsx"),
  Chunk97483 = require("./97483.js"),
  Chunk910200 = require("./910200.js");

function d(e) {
  switch (e) {
    case c.Ck.SUCCESS:
      return (0, r.jsx)(o.A9s, {
        size: "md",
        className: u.Kk,
        color: o.LU0.colors.STATUS_POSITIVE.css
      });
    case c.Ck.FAILURE:
      return (0, r.jsx)(o.d$L, {
        size: "md",
        className: u.Kk,
        color: o.LU0.colors.ICON_FEEDBACK_CRITICAL.css
      });
    case c.Ck.CLIP:
      return (0, r.jsx)(o.xgA, {
        size: "xs",
        className: u.gS,
        color: o.LU0.colors.TEXT_STRONG.css
      });
    case c.Ck.LINK:
      return (0, r.jsx)(o.qYV, {
        className: u.Kk,
        color: o.LU0.colors.TEXT_STRONG.css
      });
    case c.Ck.FORWARD:
      return (0, r.jsx)(l.A, {
        className: u.Kk,
        color: o.LU0.colors.STATUS_POSITIVE.css
      });
    case c.Ck.INVITE:
      return (0, r.jsx)(o.u6c, {
        className: u.Kk,
        color: o.LU0.colors.TEXT_BRAND.css
      });
    case c.Ck.BOOKMARK:
      return (0, r.jsx)(o.cFy, {
        className: u.Kk,
        color: o.LU0.colors.TEXT_STRONG.css
      });
    case c.Ck.CLOCK:
      return (0, r.jsx)(o.O4, {
        className: u.Kk,
        color: o.LU0.colors.TEXT_STRONG.css
      });
    case c.Ck.AI:
      return (0, r.jsx)(o.Dud, {
        className: u.Kk,
        color: o.LU0.colors.TEXT_STRONG.css
      });
    default:
      return null
  }
}

function f(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : c.jg,
    {
      position: r = c.jg.position,
      component: i = c.jg.component,
      duration: s = c.jg.duration,
      appContext: o = c.jg.appContext
    } = n;
  return {
    message: e,
    id: (0, a.A)(),
    type: t,
    options: {
      position: r,
      component: i,
      duration: s,
      appContext: o
    }
  }
}
let p = Chunk64700.memo(function(e) {
  let {
    message: t,
    type: n,
    id: i,
    options: {
      component: a = c.jg.component
    } = c.jg
  } = e;
  return null != a ? a : (0, r.jsxs)("div", {
    id: i,
    className: u.oR,
    "data-type": n,
    children: [d(n), (0, r.jsx)(s.E, {
      className: u.Qs,
      variant: "text-md/normal",
      children: t
    })]
  })
})