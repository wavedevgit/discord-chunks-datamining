/** Chunk was on web.js **/
/** chunk id: 944043, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk194359 = require("./194359.js"),
  Chunk699516 = require("./699516.js"),
  Chunk502762 = require("./502762.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk195581 = require("./195581.js");

function m(e) {
  let {
    user: t,
    className: n
  } = e, {
    isPendingIncoming: i,
    isBlocked: m,
    isIgnored: h
  } = (0, s.cj)([u.Z], () => ({
    isPendingIncoming: u.Z.getRelationshipType(t.id) === f.OGo.PENDING_INCOMING,
    isBlocked: u.Z.isBlocked(t.id),
    isIgnored: u.Z.isIgnored(t.id)
  }));
  return m || h && !i ? (0, r.jsxs)(d.Z.Overlay, {
    className: a()(_.container, n),
    children: [m && (0, r.jsx)(o.xvT, {
      variant: "text-sm/semibold",
      color: "text-default",
      children: p.intl.string(p.t["oC/fU6"])
    }), h && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.xvT, {
        variant: "text-sm/semibold",
        color: "text-default",
        children: p.intl.string(p.t.HXz5An)
      }), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(o.xvT, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: "•"
        }), (0, r.jsx)(o.xvT, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: p.intl.format(p.t.PrtAqy, {
            unignoreHook: (e, n) => (0, r.jsx)(l.Anchor, {
              onClick: () => c.Z.unignoreUser(t.id, "UserProfileRemediatedNotice"),
              children: e
            }, n)
          })
        })]
      })]
    })]
  }) : null
}