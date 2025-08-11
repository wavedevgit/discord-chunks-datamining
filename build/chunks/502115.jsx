/** Chunk was on web.js **/
/** chunk id: 502115, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FJ: () => l,
  HL: () => u,
  Yc: () => d,
  xe: () => c
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk834129 = require("./834129.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk794446 = require("./794446.js");

function l(e) {
  let {
    message: t,
    compact: i,
    onClick: l
  } = e;
  return <o.Z icon={n(508933)} timestamp={t.timestamp} compact={i} contentClassName={s.messageContent}>{a.intl.format(a.t.bYdG3d, {
      onClick: l
    })}</o.Z>
}

function c(e) {
  let {
    message: t,
    compact: i
  } = e;
  return <o.Z icon={n(324606)} timestamp={t.timestamp} compact={i} contentClassName={s.messageContent}>{a.intl.string(a.t.tu6tOT)}</o.Z>
}

function u(e) {
  let {
    message: t,
    compact: n
  } = e;
  return <o.Z iconNode={(0, r.jsx)(i.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: s.alertIcon
    })} timestamp={t.timestamp} compact={n} contentClassName={s.messageContent}>{a.intl.string(a.t.vzfXqq)}</o.Z>
}

function d(e) {
  let {
    message: t,
    compact: n
  } = e;
  return <o.Z iconNode={(0, r.jsx)(i.Mgn, {
      size: "custom",
      width: 20,
      height: 20,
      color: "currentColor",
      className: s.alertIcon
    })} timestamp={t.timestamp} compact={n} contentClassName={s.messageContent}>{a.intl.string(a.t["/Tfvyc"])}</o.Z>
}