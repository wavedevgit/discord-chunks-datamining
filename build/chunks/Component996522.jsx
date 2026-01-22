/** Chunk was on web.js **/
/** chunk id: 996522, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk143413 = require("./143413.js"),
  Chunk734057 = require("./734057.js"),
  Chunk661191 = require("./661191.js"),
  Chunk321045 = require("./321045.js"),
  Chunk456874 = require("./456874.js"),
  Chunk707539 = require("./707539.js"),
  Chunk519397 = require("./519397.jsx"),
  Chunk747926 = require("./747926.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk868320 = require("./868320.js");

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

function A(e) {
  let {
    message: t,
    compact: n
  } = e, i = (0, s.bG)([u.A], () => u.A.getChannel(d.default.castMessageIdAsChannelId(t.id)));
  return null == i ? null : (0, r.jsx)(v, {
    channel: i,
    compact: n,
    isSystemMessage: (0, c.A)(t)
  })
}

function v(e) {
  let {
    channel: t,
    compact: i,
    isSystemMessage: c
  } = e;

  function u(e) {
    e.stopPropagation(), (0, m.JA)(t, e.shiftKey)
  }

  function d(e) {
    e.stopPropagation();
    let n = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
      r = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
    (e.which === g.Ks6.SPACE || e.which === g.Ks6.ENTER) && (e.preventDefault(), (n || r) && (0, m.JA)(t, r))
  }

  function _(e) {
    (0, l.L3)(e, async () => {
      let {
        default: e
      } = await Promise.all([n.e("99011"), n.e("88974"), n.e("98865")]).then(n.bind(n, 44536));
      return n => (0, r.jsx)(e, O({
        channel: t
      }, n))
    })
  }
  let h = (0, s.bG)([p.A], () => p.A.getCount(t.id)),
    y = S(t),
    A = null != h && h > 0;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("div", {
      className: a()(b.GI, {
        [b.E]: !i,
        [b.E_]: c
      })
    }), (0, r.jsx)(o.DUT, {
      onClick: u,
      onKeyDown: d,
      onContextMenu: _,
      "aria-roledescription": E.intl.string(E.t["8ipxiY"]),
      className: a()(b.kL, {
        [b.og]: c
      }),
      children: (0, r.jsxs)(o.RDc, {
        children: [(0, r.jsxs)("div", {
          className: b.kq,
          children: [(0, r.jsx)(o.AC4, {
            children: E.intl.string(E.t["7Xm5QI"])
          }), (0, r.jsx)("span", {
            className: b.UU,
            children: t.name
          }), (0, r.jsx)("span", {
            className: b.lO,
            "aria-hidden": !A,
            children: (0, f.ub)(h, t.id)
          })]
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          "aria-hidden": true,
          lineClamp: 1,
          color: "text-default",
          className: b.sb,
          children: y
        })]
      })
    })]
  })
}

function S(e) {
  var t;
  let n = (0, s.bG)([p.A], () => p.A.getMostRecentMessage(e.id)),
    i = (0, s.bG)([p.A], () => p.A.getCount(e.id)),
    a = (0, _.JO)(e);
  return (null == (t = e.threadMetadata) ? true : t.archived) ? E.intl.string(E.t.ZTo4HS) : null == i || 0 === i ? E.intl.string(E.t.HYtNyE) : null == n ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)("span", {
      children: E.intl.string(E.t.ZTo4HS)
    }), (0, r.jsx)("span", {
      className: b.vE,
      children: (0, _.aK)(a)
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(h.A, {
      message: n,
      channel: e
    }), (0, r.jsx)("span", {
      className: b.vE,
      children: (0, _.aK)(a)
    })]
  })
}