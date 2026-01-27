/** Chunk was on web.js **/
/** chunk id: 232042, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk936755 = require("./936755.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk800344 = require("./800344.js");
let u = function(e) {
  let {
    iconType: t,
    children: n
  } = e, i = null;
  switch (t) {
    case "voice":
      i = (0, r.jsx)(o.HKD, {
        size: "md",
        color: "currentColor",
        className: c.Kk,
        "aria-label": l.intl.string(l.t.BVZqJl)
      });
      break;
    case "voice-locked":
      i = (0, r.jsx)(o.XAi, {
        size: "md",
        color: "currentColor",
        className: c.Kk,
        "aria-label": l.intl.string(l.t.aa0FYn)
      });
      break;
    case "stage":
      i = (0, r.jsx)(o.qux, {
        size: "lg",
        color: "currentColor",
        className: c.Kk,
        "aria-label": l.intl.string(l.t.EErMzA)
      });
      break;
    case "stage-locked":
      i = (0, r.jsx)(o.XAi, {
        size: "md",
        color: "currentColor",
        className: c.Kk,
        "aria-label": l.intl.string(l.t.pKZ4I8)
      });
      break;
    case "thread":
      i = (0, r.jsx)(o.ysw, {
        size: "md",
        color: "currentColor",
        className: c.Kk,
        "aria-label": l.intl.string(l.t["7Xm5QI"])
      });
      break;
    case "text":
      i = (0, r.jsx)(o.N$i, {
        size: "md",
        color: "currentColor",
        className: c.Kk,
        "aria-label": l.intl.string(l.t.GK18KJ)
      });
      break;
    case "forum":
      i = (0, r.jsx)(o.bSJ, {
        size: "md",
        color: "currentColor",
        className: c.Kk,
        "aria-label": l.intl.string(l.t.GbryDd)
      });
      break;
    case "post":
      i = (0, r.jsx)(o.oyn, {
        size: "md",
        color: "currentColor",
        className: c.Kk,
        "aria-label": l.intl.string(l.t.Y4REmB)
      });
      break;
    case "home":
    case "guide":
      i = (0, r.jsx)(o.Zf8, {
        size: "md",
        color: "currentColor",
        className: c.Kk,
        "aria-label": l.intl.string(l.t.VbpLyU)
      });
      break;
    case "browse":
    case "customize":
      i = (0, r.jsx)(o.kiI, {
        size: "md",
        color: "currentColor",
        className: c.Kk,
        "aria-label": l.intl.string(l.t.et6wav)
      });
      break;
    case "message":
      i = (0, r.jsx)(o.oyn, {
        size: "md",
        color: "currentColor",
        className: c.Kk,
        "aria-label": l.intl.string(l.t.BAB0yK)
      });
      break;
    case "locked":
      i = (0, r.jsx)(o.XAi, {
        size: "md",
        color: "currentColor",
        className: c.Kk,
        "aria-label": l.intl.string(l.t["/YzI63"])
      });
      break;
    case "media":
      i = (0, r.jsx)(o.xfq, {
        size: "md",
        color: "currentColor",
        className: c.Kk,
        "aria-label": l.intl.string(l.t.seKITE)
      });
      break;
    case "linked-roles":
      i = (0, r.jsx)(o.qYV, {
        size: "md",
        color: "currentColor",
        className: c.Kk,
        "aria-label": l.intl.string(l.t.ghtnss)
      })
  }
  return (0, r.jsxs)("span", {
    className: a()("channelWithIcon", {
      [c.bV]: "text" === t
    }),
    children: [(0, r.jsx)(s.A, {
      children: i
    }), null != n && "" !== n ? (0, r.jsx)("span", {
      className: c.UU,
      children: n
    }) : null]
  })
}