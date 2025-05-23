/** Chunk was on 43473 **/
n.d(t, {
  M9: () => h,
  Pb: () => y,
  XX: () => b,
  ZP: () => x,
  ZT: () => f,
  iv: () => _,
  pk: () => m
});
var r = n(255367);
n(73800);
var o = n(120356),
  i = n.n(o),
  c = n(392711),
  l = n.n(c),
  a = n(481060),
  s = n(881448);

function d(e) {
  return "".concat(e / 16, "rem")
}

function u() {
  return (0, r.jsx)("div", {
    className: s.avatar,
    style: {
      opacity: .08
    }
  })
}

function f(e) {
  let {
    width: t,
    opacity: n,
    className: o
  } = e;
  return (0, r.jsx)("div", {
    className: i()(o, {
      [s.blob]: !0
    }),
    style: {
      width: d(t),
      opacity: null != n ? n : l().random(.02, .08)
    }
  })
}

function p(e) {
  let t, {
      groupStart: n = !1,
      compact: o = !1,
      attachmentSpecs: c,
      usernameWidth: d,
      usernameOpacity: p,
      className: m,
      style: b
    } = e,
    _ = o ? 50 : l().random(40, 50);
  return !o && n ? t = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u, {}), (0, r.jsx)(a.H, {
      className: s.header,
      children: (0, r.jsx)(f, {
        width: d,
        opacity: p,
        className: s.__invalid_username
      })
    })]
  }) : o && (t = (0, r.jsxs)(r.Fragment, {
    children: [o && (0, r.jsx)(f, {
      width: _,
      className: i()({
        [s.compactTimestamp]: !0,
        [s.hidden]: !n
      })
    }), (0, r.jsx)(a.H, {
      className: s.header,
      children: (0, r.jsx)(f, {
        width: d,
        opacity: p
      })
    })]
  })), (0, r.jsxs)("div", {
    "aria-hidden": !0,
    className: i()(m, {
      [s.wrapper]: !0,
      [s.compact]: o,
      [s.cozy]: !o
    }),
    style: b,
    children: [(0, r.jsxs)("div", {
      className: s.contents,
      children: [t, (0, r.jsx)("div", {
        className: s.content,
        children: Array(l().random(3, 8)).fill(null).map(() => l().random(30, 80)).map((e, t) => (0, r.jsx)(f, {
          width: e,
          opacity: .06
        }, t))
      })]
    }), null != c && (0, r.jsx)("div", {
      className: s.attachmentContainer,
      children: (0, r.jsx)("div", {
        className: s.attachment,
        style: function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
              }) : e[t] = r
            })
          }
          return e
        }({
          opacity: .03
        }, c)
      })
    })]
  })
}
let m = 44,
  b = 22,
  _ = 26,
  y = 26,
  h = 6;

function x(e) {
  let {
    messages: t,
    groupSpacing: n = 0,
    compact: o = !1,
    attachmentSpecs: i,
    className: c
  } = e, a = null != i ? i.last ? t - 1 : l().random(0, t - 1) : -1, s = l().random(80, 120), u = l().random(.1, .2);
  return (0, r.jsx)(r.Fragment, {
    children: Array(t).fill(null).map((e, t) => (0, r.jsx)(p, {
      compact: o,
      className: c,
      usernameWidth: s,
      usernameOpacity: u,
      groupStart: 0 === t,
      attachmentSpecs: t === a ? i : void 0,
      style: 0 === t ? {
        marginTop: d(n)
      } : void 0
    }, t))
  })
}