/** Chunk was on 43473 **/
t.d(n, {
  M9: () => h,
  Pb: () => y,
  XX: () => b,
  ZP: () => g,
  ZT: () => f,
  iv: () => _,
  pk: () => m
});
var o = t(255367);
t(73800);
var r = t(120356),
  c = t.n(r),
  i = t(392711),
  a = t.n(i),
  l = t(481060),
  s = t(881448);

function d(e) {
  return "".concat(e / 16, "rem")
}

function u() {
  return (0, o.jsx)("div", {
    className: s.avatar,
    style: {
      opacity: .08
    }
  })
}

function f(e) {
  let {
    width: n,
    opacity: t,
    className: r
  } = e;
  return (0, o.jsx)("div", {
    className: c()(r, {
      [s.blob]: !0
    }),
    style: {
      width: d(n),
      opacity: null != t ? t : a().random(.02, .08)
    }
  })
}

function p(e) {
  let n, {
      groupStart: t = !1,
      compact: r = !1,
      attachmentSpecs: i,
      usernameWidth: d,
      usernameOpacity: p,
      className: m,
      style: b
    } = e,
    _ = r ? 50 : a().random(40, 50);
  return !r && t ? n = (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(u, {}), (0, o.jsx)(l.H, {
      className: s.header,
      children: (0, o.jsx)(f, {
        width: d,
        opacity: p,
        className: s.__invalid_username
      })
    })]
  }) : r && (n = (0, o.jsxs)(o.Fragment, {
    children: [r && (0, o.jsx)(f, {
      width: _,
      className: c()({
        [s.compactTimestamp]: !0,
        [s.hidden]: !t
      })
    }), (0, o.jsx)(l.H, {
      className: s.header,
      children: (0, o.jsx)(f, {
        width: d,
        opacity: p
      })
    })]
  })), (0, o.jsxs)("div", {
    "aria-hidden": !0,
    className: c()(m, {
      [s.wrapper]: !0,
      [s.compact]: r,
      [s.cozy]: !r
    }),
    style: b,
    children: [(0, o.jsxs)("div", {
      className: s.contents,
      children: [n, (0, o.jsx)("div", {
        className: s.content,
        children: Array(a().random(3, 8)).fill(null).map(() => a().random(30, 80)).map((e, n) => (0, o.jsx)(f, {
          width: e,
          opacity: .06
        }, n))
      })]
    }), null != i && (0, o.jsx)("div", {
      className: s.attachmentContainer,
      children: (0, o.jsx)("div", {
        className: s.attachment,
        style: function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
              o = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), o.forEach(function(n) {
              var o;
              o = t[n], n in e ? Object.defineProperty(e, n, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[n] = o
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
let m = 44,
  b = 22,
  _ = 26,
  y = 26,
  h = 6;

function g(e) {
  let {
    messages: n,
    groupSpacing: t = 0,
    compact: r = !1,
    attachmentSpecs: c,
    className: i
  } = e, l = null != c ? c.last ? n - 1 : a().random(0, n - 1) : -1, s = a().random(80, 120), u = a().random(.1, .2);
  return (0, o.jsx)(o.Fragment, {
    children: Array(n).fill(null).map((e, n) => (0, o.jsx)(p, {
      compact: r,
      className: i,
      usernameWidth: s,
      usernameOpacity: u,
      groupStart: 0 === n,
      attachmentSpecs: n === l ? c : void 0,
      style: 0 === n ? {
        marginTop: d(t)
      } : void 0
    }, n))
  })
}