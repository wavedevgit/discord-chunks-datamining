/** Chunk was on 79312 **/
/** chunk id: 566898, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  M9: () => O,
  Pb: () => S,
  XX: () => m,
  ZP: () => h,
  ZT: () => p,
  iv: () => b,
  pk: () => y
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk674944 = require("./674944.js");

function u(e) {
  return "".concat(e / 16, "rem")
}

function d() {
  return (0, Chunk255367.jsx)("div", {
    className: Chunk674944.avatar,
    style: {
      opacity: .08
    }
  })
}

function p(e) {
  let {
    width: t,
    height: r,
    opacity: a,
    className: i
  } = e, s = {
    width: u(t),
    opacity: null != a ? a : o().random(.02, .08)
  };
  return null != r && (s.height = u(r)), (0, n.jsx)("div", {
    className: l()(i, {
      [c.blob]: true
    }),
    style: s
  })
}

function f(e) {
  let t, {
      groupStart: r = false,
      compact: a = false,
      attachmentSpecs: i,
      usernameWidth: u,
      usernameOpacity: f,
      className: y,
      style: m
    } = e,
    b = a ? 50 : o().random(40, 50);
  return !a && r ? t = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(d, {}), (0, n.jsx)(s.H, {
      className: c.header,
      children: (0, n.jsx)(p, {
        width: u,
        opacity: f,
        className: c.__invalid_username
      })
    })]
  }) : a && (t = (0, n.jsxs)(n.Fragment, {
    children: [a && (0, n.jsx)(p, {
      width: b,
      className: l()({
        [c.compactTimestamp]: true,
        [c.hidden]: !r
      })
    }), (0, n.jsx)(s.H, {
      className: c.header,
      children: (0, n.jsx)(p, {
        width: u,
        opacity: f
      })
    })]
  })), (0, n.jsxs)("div", {
    "aria-hidden": true,
    className: l()(y, {
      [c.wrapper]: true,
      [c.compact]: a,
      [c.cozy]: !a
    }),
    style: m,
    children: [(0, n.jsxs)("div", {
      className: c.contents,
      children: [t, (0, n.jsx)("div", {
        className: c.content,
        children: Array(o().random(3, 8)).fill(null).map(() => o().random(30, 80)).map((e, t) => (0, n.jsx)(p, {
          width: e,
          opacity: .06
        }, t))
      })]
    }), null != i && (0, n.jsx)("div", {
      className: c.attachmentContainer,
      children: (0, n.jsx)("div", {
        className: c.attachment,
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
        }, i)
      })
    })]
  })
}
let y = 44,
  m = 22,
  b = 26,
  S = 26,
  O = 6;

function h(e) {
  let {
    messages: t,
    groupSpacing: r = 0,
    compact: a = false,
    attachmentSpecs: l,
    className: i
  } = e, s = null != l ? l.last ? t - 1 : o().random(0, t - 1) : false, c = o().random(80, 120), d = o().random(.1, .2);
  return (0, n.jsx)(n.Fragment, {
    children: Array(t).fill(null).map((e, t) => (0, n.jsx)(f, {
      compact: a,
      className: i,
      usernameWidth: c,
      usernameOpacity: d,
      groupStart: 0 === t,
      attachmentSpecs: t === s ? l : true,
      style: 0 === t ? {
        marginTop: u(r)
      } : true
    }, t))
  })
}