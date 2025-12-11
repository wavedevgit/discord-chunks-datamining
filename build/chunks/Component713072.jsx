/** Chunk was on web.js **/
/** chunk id: 713072, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk883407 = require("./883407.js"),
  Chunk695860 = require("./695860.js");

function u(e) {
  let {
    label: t,
    onClick: n,
    "aria-hidden": i,
    leading: a,
    trailing: u,
    inInput: f = false
  } = e, p = null;
  null != a && (p = (0, r.jsx)("div", {
    className: l.leading,
    children: (0, r.jsx)(d, {
      accessory: a,
      leading: true
    })
  }));
  let _ = null;
  return null != u && (_ = (0, r.jsx)("div", {
    className: l.trailing,
    children: (0, r.jsx)(d, {
      accessory: u
    })
  })), (0, r.jsxs)("div", {
    className: o()(c.listBoxItemContent, l.option, {
      [c.inInput]: f
    }),
    onClick: n,
    "aria-hidden": i,
    children: [p, (0, r.jsx)(s.xvT, {
      variant: "text-md/normal",
      color: "currentColor",
      lineClamp: 1,
      style: {
        gridColumnStart: null != p ? "2" : "1",
        gridColumnEnd: null != _ ? "2" : "3"
      },
      children: t
    }), _]
  })
}

function d(e) {
  let {
    accessory: t,
    leading: n
  } = e;
  if (null == t) return null;
  if (i.isValidElement(t)) return (0, r.jsx)("div", {
    className: o()({
      [l.iconAccessory]: n
    }),
    children: t
  });
  if ("string" == typeof t) return (0, r.jsx)(s.xvT, {
    variant: "text-sm/normal",
    color: "text-subtle",
    children: t
  });
  if ("object" == typeof t && "type" in t && "image" === t.type) return (0, r.jsx)("img", {
    "aria-hidden": true,
    alt: "",
    src: t.src,
    className: l.imageAccessory
  });
  if ("object" == typeof t && "type" in t && "avatar" === t.type) return (0, r.jsx)("img", {
    "aria-hidden": true,
    alt: "",
    src: t.src,
    className: l.avatarAccessory
  });
  if ("object" == typeof t && "type" in t && "badge" === t.type) return (0, r.jsx)(s.Cts, {
    type: t.badgeType
  });
  let a = t;
  return (0, r.jsx)("div", {
    className: l.iconAccessory,
    children: (0, r.jsx)(a, {
      size: "refresh_sm",
      color: "currentColor"
    })
  })
}