/** Chunk was on web.js **/
/** chunk id: 432147, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk901461 = require("./901461.js"),
  Chunk592125 = require("./592125.js"),
  Chunk709054 = require("./709054.js"),
  Chunk723774 = require("./723774.js"),
  Chunk144140 = require("./144140.js"),
  Chunk91159 = require("./91159.js"),
  Chunk576799 = require("./576799.jsx"),
  Chunk488131 = require("./488131.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk859497 = require("./859497.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e) {
  let {
    message: t,
    compact: n
  } = e, i = (0, o.e7)([u.Z], () => u.Z.getChannel(d.default.castMessageIdAsChannelId(t.id)));
  return null == i ? null : (0, r.jsx)(I, {
    channel: i,
    compact: n,
    isSystemMessage: (0, c.Z)(t)
  })
}

function I(e) {
  let {
    channel: t,
    compact: i,
    isSystemMessage: c
  } = e;

  function u(e) {
    e.stopPropagation(), (0, m.ok)(t, e.shiftKey)
  }

  function d(e) {
    e.stopPropagation();
    let n = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
      r = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
    (e.which === g.yXg.SPACE || e.which === g.yXg.ENTER) && (e.preventDefault(), (n || r) && (0, m.ok)(t, r))
  }

  function p(e) {
    (0, l.jW)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("90508"), n.e("89250"), n.e("43012")]).then(n.bind(n, 422200));
      return n => (0, r.jsx)(e, O({
        channel: t
      }, n))
    })
  }
  let h = (0, o.e7)([_.Z], () => _.Z.getCount(t.id)),
    y = T(t),
    v = null != h && h > 0;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: a()(b.spine, {
        [b.cozy]: !i,
        [b.systemMessageSpine]: c
      })
    }), (0, r.jsx)(s.P3F, {
      onClick: u,
      onKeyDown: d,
      onContextMenu: p,
      "aria-roledescription": E.intl.string(E.t["8ipxiY"]),
      className: a()(b.container, {
        [b.systemMessageContainer]: c
      }),
      children: (0, r.jsxs)(s.nuw, {
        children: [(0, r.jsxs)("div", {
          className: b.topLine,
          children: [(0, r.jsx)(s.nn4, {
            children: E.intl.string(E.t["7Xm5QI"])
          }), (0, r.jsx)("span", {
            className: b.name,
            children: t.name
          }), (0, r.jsx)("span", {
            className: b.cta,
            "aria-hidden": !v,
            children: (0, f.WE)(h, t.id)
          })]
        }), (0, r.jsx)(s.Text, {
          variant: "text-sm/normal",
          "aria-hidden": true,
          lineClamp: 1,
          color: "header-secondary",
          className: b.bottomLine,
          children: y
        })]
      })
    })]
  })
}

function T(e) {
  var t;
  let n = (0, o.e7)([_.Z], () => _.Z.getMostRecentMessage(e.id)),
    i = (0, o.e7)([_.Z], () => _.Z.getCount(e.id)),
    a = (0, p.Ok)(e);
  return (null == (t = e.threadMetadata) ? true : t.archived) ? E.intl.string(E.t.ZTo4HS) : null == i || 0 === i ? E.intl.string(E.t.HYtNyE) : null == n ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("span", {
      children: E.intl.string(E.t.ZTo4HS)
    }), (0, r.jsx)("span", {
      className: b.timestamp,
      children: (0, p.Ye)(a)
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(h.Z, {
      message: n,
      channel: e
    }), (0, r.jsx)("span", {
      className: b.timestamp,
      children: (0, p.Ye)(a)
    })]
  })
}