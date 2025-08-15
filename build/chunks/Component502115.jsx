/** Chunk was on 66866 **/
/** chunk id: 502115, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  FJ: () => s,
  HL: () => u,
  Yc: () => d,
  xe: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk304946 = require("./304946.js");

function s(e) {
  let {
    message: t,
    compact: i,
    onClick: s
  } = e;
  return (0, r.jsx)(l.Z, {
    icon: n(508933),
    timestamp: t.timestamp,
    compact: i,
    contentClassName: o.messageContent,
    children: a.intl.format(a.t.bYdG3d, {
      onClick: s
    })
  })
}

function c(e) {
  let {
    message: t,
    compact: i
  } = e;
  return (0, r.jsx)(l.Z, {
    icon: n(324606),
    timestamp: t.timestamp,
    compact: i,
    contentClassName: o.messageContent,
    children: a.intl.string(a.t.tu6tOT)
  })
}

function u(e) {
  let {
    message: t,
    compact: n
  } = e;
  return (0, r.jsx)(l.Z, {
    iconNode: (0, r.jsx)(i.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: o.alertIcon
    }),
    timestamp: t.timestamp,
    compact: n,
    contentClassName: o.messageContent,
    children: a.intl.string(a.t.vzfXqq)
  })
}

function d(e) {
  let {
    message: t,
    compact: n
  } = e;
  return (0, r.jsx)(l.Z, {
    iconNode: (0, r.jsx)(i.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: o.alertIcon
    }),
    timestamp: t.timestamp,
    compact: n,
    contentClassName: o.messageContent,
    children: a.intl.string(a.t["/Tfvyc"])
  })
}