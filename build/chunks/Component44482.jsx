/** Chunk was on web.js **/
/** chunk id: 44482, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  c: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk508770 = require("./508770.jsx"),
  Chunk834730 = require("./834730.jsx"),
  Chunk336389 = require("./336389.js"),
  Chunk686724 = require("./686724.js");

function d(e) {
  let {
    label: t,
    onClick: n,
    "aria-hidden": i,
    leading: a,
    trailing: s,
    inInput: d = false
  } = e, p = null;
  null != a && (p = (0, r.jsx)("div", {
    className: u.R4,
    children: (0, r.jsx)(f, {
      accessory: a,
      leading: true
    })
  }));
  let _ = null;
  return null != s && (_ = (0, r.jsx)("div", {
    className: u.ZY,
    children: (0, r.jsx)(f, {
      accessory: s
    })
  })), (0, r.jsxs)("div", {
    className: o()(c.uN, u.uK, {
      [c.MO]: d
    }),
    onClick: n,
    "aria-hidden": i,
    children: [p, (0, r.jsx)(l.E, {
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

function f(e) {
  let {
    accessory: t,
    leading: n
  } = e;
  if (null == t) return null;
  if (i.isValidElement(t)) return (0, r.jsx)("div", {
    className: o()({
      [u.MG]: n
    }),
    children: t
  });
  if ("string" == typeof t) return (0, r.jsx)(l.E, {
    variant: "text-sm/normal",
    color: "text-subtle",
    children: t
  });
  if ("object" == typeof t && "type" in t && "image" === t.type) return (0, r.jsx)("img", {
    "aria-hidden": true,
    alt: "",
    src: t.src,
    className: u.mQ
  });
  if ("object" == typeof t && "type" in t && "avatar" === t.type) return (0, r.jsx)("img", {
    "aria-hidden": true,
    alt: "",
    src: t.src,
    className: u.CD
  });
  if ("object" == typeof t && "type" in t && "badge" === t.type) return (0, r.jsx)(s.E, {
    type: t.badgeType
  });
  let a = t;
  return (0, r.jsx)("div", {
    className: u.MG,
    children: (0, r.jsx)(a, {
      size: "refresh_sm",
      color: "currentColor"
    })
  })
}