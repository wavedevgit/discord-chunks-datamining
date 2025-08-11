/** Chunk was on 75708 **/
/** chunk id: 843200, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk418632 = require("./418632.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk231829 = require("./231829.js");

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function f(e) {
  let {
    unclaimedNotice: t,
    unverifiedNotice: r,
    className: a
  } = e, {
    isClaimed: f,
    isVerified: b,
    hasEmail: x
  } = (0, o.cj)([u.default], () => {
    let e = u.default.getCurrentUser();
    return l()(null != e, "EmailNotice: currentUser cannot be undefined"), {
      isClaimed: e.isClaimed(),
      isVerified: e.verified,
      hasEmail: null != e.email
    }
  });

  function _() {
    (0, c.ZDy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("9343"), n.e("39809")]).then(n.bind(n, 642298));
      return t => (0, i.jsx)(e, h({}, t))
    })
  }
  return f && b ? null : (0, i.jsx)(c.Zbd, {
    className: s()(g.wrapper, a),
    children: (0, i.jsxs)(d.Z, {
      align: d.Z.Align.CENTER,
      children: [(0, i.jsx)(d.Z.Child, {
        className: g.image,
        grow: 0,
        shrink: 0
      }), (0, i.jsxs)(d.Z.Child, {
        children: [(0, i.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: f ? null != r ? r : p.intl.string(p.t.WuyBbG) : null != t ? t : p.intl.string(p.t["f+Zaoq"])
        }), (0, i.jsxs)(d.Z, {
          justify: d.Z.Justify.CENTER,
          className: g.content,
          children: [f ? x ? (0, i.jsx)(d.Z.Child, {
            grow: 0,
            shrink: 0,
            children: (0, i.jsx)(m.Z, {})
          }) : (0, i.jsx)(c.zxk, {
            variant: "primary",
            text: p.intl.string(p.t.ydw5nZ),
            onClick: _
          }) : (0, i.jsx)(d.Z.Child, {
            grow: 0,
            shrink: 0,
            children: (0, i.jsx)(c.zxk, {
              variant: "primary",
              text: p.intl.string(p.t.fiNVio),
              onClick: function() {
                (0, c.ZDy)(async () => {
                  let {
                    default: e
                  } = await n.e("60827").then(n.bind(n, 324239));
                  return t => (0, i.jsx)(e, h({}, t))
                })
              }
            })
          }), f && x ? (0, i.jsx)(d.Z.Child, {
            grow: 0,
            shrink: 0,
            children: (0, i.jsx)(c.zxk, {
              variant: "secondary",
              text: p.intl.string(p.t.Vm8akJ),
              onClick: _
            })
          }) : null]
        })]
      })]
    })
  })
}