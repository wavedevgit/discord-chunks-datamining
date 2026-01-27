/** Chunk was on web.js **/
/** chunk id: 383448, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk49229 = require("./49229.js"),
  Chunk994500 = require("./994500.js"),
  Chunk946356 = require("./946356.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk842218 = require("./842218.js");

function h(e) {
  let {
    user: t,
    className: n
  } = e, {
    isPendingIncoming: i,
    isBlocked: h,
    isIgnored: m
  } = (0, s.cf)([u.A], () => ({
    isPendingIncoming: u.A.getRelationshipType(t.id) === f.eA$.PENDING_INCOMING,
    isBlocked: u.A.isBlocked(t.id),
    isIgnored: u.A.isIgnored(t.id)
  }));
  return h || m && !i ? (0, r.jsxs)(d.A.Overlay, {
    className: a()(_.k, n),
    children: [h && (0, r.jsx)(o.EYj, {
      variant: "text-sm/semibold",
      color: "text-default",
      children: p.intl.string(p.t["oC/fU6"])
    }), m && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(o.EYj, {
        variant: "text-sm/semibold",
        color: "text-default",
        children: p.intl.string(p.t.HXz5An)
      }), (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(o.EYj, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: "•"
        }), (0, r.jsx)(o.EYj, {
          variant: "text-sm/semibold",
          color: "text-default",
          children: p.intl.format(p.t.PrtAqy, {
            unignoreHook: (e, n) => (0, r.jsx)(l.MzZ, {
              onClick: () => c.A.unignoreUser(t.id, "UserProfileRemediatedNotice"),
              children: e
            }, n)
          })
        })]
      })]
    })]
  }) : null
}