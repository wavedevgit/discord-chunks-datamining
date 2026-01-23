/** Chunk was on 66708 **/
/** chunk id: 303174, original params: e,n,s (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk976860 = require("./976860.js"),
  Chunk961350 = require("./961350.js"),
  Chunk207913 = require("./207913.js"),
  Chunk210742 = require("./210742.jsx"),
  Chunk239093 = require("./239093.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk90344 = require("./90344.js");

function N() {
  return (0, t.jsxs)(r.$Td, {
    color: r.Hv$.DANGER,
    className: h.aL,
    children: [(0, t.jsx)(r.Text, {
      tag: "span",
      color: "always-white",
      variant: "text-md/normal",
      children: u.intl.string(u.t["MG+Bzb"])
    }), (0, t.jsx)(r.eCN, {
      noticeType: p.kqX.SAFETY_SUSPENDED_USER_WARNING,
      href: o.d$.WARNING_SYSTEM_HELPCENTER_LINK,
      children: (0, t.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: u.intl.string(u.t["9JceHN"])
      })
    })]
  })
}

function x(e) {
  let {} = e, n = (0, a.bG)([c.A], () => c.A.getAgeCheckStatus());
  return n === o.qN.NONE ? null : n === o.qN.SUCCESS ? (0, t.jsx)(r.po8, {
    messageType: r.YCn.POSITIVE,
    children: u.intl.format(u.t.maZDL6, {
      login: "/login"
    })
  }) : n === o.qN.ERROR ? (0, t.jsx)(r.po8, {
    messageType: r.YCn.ERROR,
    children: u.intl.string(u.t["4sILBU"])
  }) : n === o.qN.FAILURE ? (0, t.jsx)(r.po8, {
    messageType: r.YCn.ERROR,
    children: u.intl.string(u.t["40R63o"])
  }) : (0, t.jsx)(r.po8, {
    messageType: r.YCn.INFO,
    children: u.intl.string(u.t["nhhy/R"])
  })
}

function g() {
  return (0, t.jsxs)("div", {
    className: h.$$,
    children: [(0, t.jsx)(x, {}), (0, t.jsx)(d.A, {})]
  })
}

function _() {
  return null == (0, a.bG)([l.default], () => l.default.getSuspendedUserToken()) && (0, i.pX)(p.BVt.LOGIN, {
    source: "suspended_user_safety_hub_page"
  }), (0, t.jsxs)("div", {
    className: h.kL,
    children: [(0, t.jsx)(N, {}), (0, t.jsx)(g, {})]
  })
}