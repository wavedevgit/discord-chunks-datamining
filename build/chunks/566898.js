/** Chunk was on 69826 **/
t.d(n, {
  M9: () => g,
  Pb: () => b,
  XX: () => h,
  ZP: () => y,
  ZT: () => f,
  iv: () => _,
  pk: () => m
});
var o = t(200651);
t(192379);
var i = t(120356),
  c = t.n(i),
  r = t(392711),
  a = t.n(r),
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
    className: i
  } = e;
  return (0, o.jsx)("div", {
    className: c()(i, {
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
      compact: i = !1,
      attachmentSpecs: r,
      usernameWidth: d,
      usernameOpacity: p,
      className: m,
      style: h
    } = e,
    _ = i ? 50 : a().random(40, 50);
  return !i && t ? n = (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(u, {}), (0, o.jsx)(l.H, {
      className: s.header,
      children: (0, o.jsx)(f, {
        width: d,
        opacity: p,
        className: s.__invalid_username
      })
    })]
  }) : i && (n = (0, o.jsxs)(o.Fragment, {
    children: [i && (0, o.jsx)(f, {
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
      [s.compact]: i,
      [s.cozy]: !i
    }),
    style: h,
    children: [(0, o.jsxs)("div", {
      className: s.contents,
      children: [n, (0, o.jsx)("div", {
        className: s.content,
        children: Array(a().random(3, 8)).fill(null).map(() => a().random(30, 80)).map((e, n) => (0, o.jsx)(f, {
          width: e,
          opacity: .06
        }, n))
      })]
    }), null != r && (0, o.jsx)("div", {
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
        }, r)
      })
    })]
  })
}
let m = 44,
  h = 22,
  _ = 26,
  b = 26,
  g = 6;

function y(e) {
  let {
    messages: n,
    groupSpacing: t = 0,
    compact: i = !1,
    attachmentSpecs: c,
    className: r
  } = e, l = null != c ? c.last ? n - 1 : a().random(0, n - 1) : -1, s = a().random(80, 120), u = a().random(.1, .2);
  return (0, o.jsx)(o.Fragment, {
    children: Array(n).fill(null).map((e, n) => (0, o.jsx)(p, {
      compact: i,
      className: r,
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