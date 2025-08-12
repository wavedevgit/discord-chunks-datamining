/** Chunk was on web.js **/
/** chunk id: 779699, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk457926 = require("./457926.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk100881 = require("./100881.js");
let u = function(e) {
  let {
    iconType: t,
    children: n
  } = e, i = null;
  switch (t) {
    case "voice":
      i = (0, r.jsx)(a.gj8, {
        size: "md",
        color: "currentColor",
        className: c.icon,
        "aria-label": l.intl.string(l.t.BVZqJi)
      });
      break;
    case "voice-locked":
      i = (0, r.jsx)(a.mBM, {
        size: "md",
        color: "currentColor",
        className: c.icon,
        "aria-label": l.intl.string(l.t.aa0FYm)
      });
      break;
    case "stage":
      i = (0, r.jsx)(a.ewx, {
        size: "lg",
        color: "currentColor",
        className: c.icon,
        "aria-label": l.intl.string(l.t.EErMzM)
      });
      break;
    case "stage-locked":
      i = (0, r.jsx)(a.mBM, {
        size: "md",
        color: "currentColor",
        className: c.icon,
        "aria-label": l.intl.string(l.t.pKZ4Iy)
      });
      break;
    case "thread":
      i = (0, r.jsx)(a.or_, {
        size: "md",
        color: "currentColor",
        className: c.icon,
        "aria-label": l.intl.string(l.t["7Xm5QE"])
      });
      break;
    case "text":
      i = (0, r.jsx)(a.VL1, {
        size: "md",
        color: "currentColor",
        className: c.icon,
        "aria-label": l.intl.string(l.t.GK18KC)
      });
      break;
    case "forum":
      i = (0, r.jsx)(a.Mmi, {
        size: "md",
        color: "currentColor",
        className: c.icon,
        "aria-label": l.intl.string(l.t.GbryDQ)
      });
      break;
    case "post":
      i = (0, r.jsx)(a.kBi, {
        size: "md",
        color: "currentColor",
        className: c.icon,
        "aria-label": l.intl.string(l.t.Y4REmJ)
      });
      break;
    case "home":
    case "guide":
      i = (0, r.jsx)(a.Vy8, {
        size: "md",
        color: "currentColor",
        className: c.icon,
        "aria-label": l.intl.string(l.t.VbpLyc)
      });
      break;
    case "browse":
    case "customize":
      i = (0, r.jsx)(a.H$4, {
        size: "md",
        color: "currentColor",
        className: c.icon,
        "aria-label": l.intl.string(l.t.et6wam)
      });
      break;
    case "message":
      i = (0, r.jsx)(a.kBi, {
        size: "md",
        color: "currentColor",
        className: c.icon,
        "aria-label": l.intl.string(l.t.BAB0yM)
      });
      break;
    case "locked":
      i = (0, r.jsx)(a.mBM, {
        size: "md",
        color: "currentColor",
        className: c.icon,
        "aria-label": l.intl.string(l.t["/YzI6+"])
      });
      break;
    case "media":
      i = (0, r.jsx)(a.XBm, {
        size: "md",
        color: "currentColor",
        className: c.icon,
        "aria-label": l.intl.string(l.t.seKITE)
      });
      break;
    case "linked-roles":
      i = (0, r.jsx)(a.xPt, {
        size: "md",
        color: "currentColor",
        className: c.icon,
        "aria-label": l.intl.string(l.t.ghtnsr)
      })
  }
  return (0, r.jsxs)("span", {
    className: o()("channelWithIcon", {
      [c.iconMentionText]: "text" === t
    }),
    children: [(0, r.jsx)(s.Z, {
      children: i
    }), null != n && "" !== n ? (0, r.jsx)("span", {
      className: c.name,
      children: n
    }) : null]
  })
}