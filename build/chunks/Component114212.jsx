/** Chunk was on 72752 **/
/** chunk id: 114212, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Ay: () => y,
  B5: () => h,
  BP: () => p,
  FQ: () => _,
  Uj: () => g,
  VF: () => f,
  _G: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk397927 = require("./397927.js"),
  Chunk406590 = require("./406590.js");

function s(e) {
  return "".concat(e / 16, "rem")
}

function u() {
  return (0, n.jsx)("div", {
    className: d.my,
    style: {
      opacity: .08
    }
  })
}

function _(e) {
  let {
    width: t,
    height: r,
    opacity: o,
    className: a
  } = e, c = {
    width: s(t),
    opacity: null != o ? o : i().random(.02, .08)
  };
  return null != r && (c.height = s(r)), (0, n.jsx)("div", {
    className: l()(a, {
      [d.av]: true
    }),
    style: c
  })
}

function m(e) {
  let t, {
      groupStart: r = false,
      compact: o = false,
      attachmentSpecs: a,
      usernameWidth: s,
      usernameOpacity: m,
      className: h,
      style: b
    } = e,
    p = o ? 50 : i().random(40, 50);
  return !o && r ? t = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(u, {}), (0, n.jsx)(c.H, {
      className: d.wx,
      children: (0, n.jsx)(_, {
        width: s,
        opacity: m,
        className: d.__invalid_username
      })
    })]
  }) : o && (t = (0, n.jsxs)(n.Fragment, {
    children: [o && (0, n.jsx)(_, {
      width: p,
      className: l()({
        [d.ce]: true,
        [d.R]: !r
      })
    }), (0, n.jsx)(c.H, {
      className: d.wx,
      children: (0, n.jsx)(_, {
        width: s,
        opacity: m
      })
    })]
  })), (0, n.jsxs)("div", {
    "aria-hidden": true,
    className: l()(h, {
      [d.iE]: true,
      [d.oE]: o,
      [d.E]: !o
    }),
    style: b,
    children: [(0, n.jsxs)("div", {
      className: d.PG,
      children: [t, (0, n.jsx)("div", {
        className: d.Qs,
        children: Array(i().random(3, 8)).fill(null).map(() => i().random(30, 80)).map((e, t) => (0, n.jsx)(_, {
          width: e,
          opacity: .06
        }, t))
      })]
    }), null != a && (0, n.jsx)("div", {
      className: d.Dq,
      children: (0, n.jsx)("div", {
        className: d.oh,
        style: function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
              n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
              return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
              var n;
              n = r[t], t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = n
            })
          }
          return e
        }({
          opacity: .03
        }, a)
      })
    })]
  })
}
let h = 44,
  b = 22,
  p = 26,
  g = 26,
  f = 6;

function y(e) {
  let {
    messages: t,
    groupSpacing: r = 0,
    compact: o = false,
    attachmentSpecs: l,
    className: a
  } = e, c = null != l ? l.last ? t - 1 : i().random(0, t - 1) : false, d = i().random(80, 120), u = i().random(.1, .2);
  return (0, n.jsx)(n.Fragment, {
    children: Array(t).fill(null).map((e, t) => (0, n.jsx)(m, {
      compact: o,
      className: a,
      usernameWidth: d,
      usernameOpacity: u,
      groupStart: 0 === t,
      attachmentSpecs: t === c ? l : true,
      style: 0 === t ? {
        marginTop: s(r)
      } : true
    }, t))
  })
}