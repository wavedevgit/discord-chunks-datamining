/** Chunk was on web.js **/
/** chunk id: 502115, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FJ: () => l,
  HL: () => u,
  Yc: () => d,
  xe: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk180814 = require("./180814.js");

function l(e) {
  let {
    message: t,
    compact: i,
    onClick: l
  } = e;
  return (0, r.jsx)(a.Z, {
    icon: n(508933),
    timestamp: t.timestamp,
    compact: i,
    contentClassName: s.messageContent,
    children: o.intl.format(o.t.bYdG3f, {
      onClick: l
    })
  })
}

function c(e) {
  let {
    message: t,
    compact: i
  } = e;
  return (0, r.jsx)(a.Z, {
    icon: n(324606),
    timestamp: t.timestamp,
    compact: i,
    contentClassName: s.messageContent,
    children: o.intl.string(o.t.tu6tOR)
  })
}

function u(e) {
  let {
    message: t,
    compact: n
  } = e;
  return (0, r.jsx)(a.Z, {
    iconNode: (0, r.jsx)(i.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: s.alertIcon
    }),
    timestamp: t.timestamp,
    compact: n,
    contentClassName: s.messageContent,
    children: o.intl.string(o.t.vzfXql)
  })
}

function d(e) {
  let {
    message: t,
    compact: n
  } = e;
  return (0, r.jsx)(a.Z, {
    iconNode: (0, r.jsx)(i.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: s.alertIcon
    }),
    timestamp: t.timestamp,
    compact: n,
    contentClassName: s.messageContent,
    children: o.intl.string(o.t["/TfvyR"])
  })
}