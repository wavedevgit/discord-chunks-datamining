/** Chunk was on 82575 **/
/** chunk id: 809465, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
}), require("./896048.js"), require("./747238.js"), require("./812715.js"), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk481613 = require("./481613.js"),
  a = require.n(Chunk481613),
  Chunk397927 = require("./397927.js"),
  Chunk77729 = require("./77729.js"),
  Chunk521502 = require("./521502.js"),
  Chunk915089 = require("./915089.js"),
  Chunk206845 = require("./206845.jsx"),
  Chunk837921 = require("./837921.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk355893 = require("./355893.js");

function A(e) {
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

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e) {
  var t, n, s, r, j;
  let {
    compact: b = false
  } = e, O = (0, u.GV)(), S = window.GLOBAL_ENV.RELEASE_CHANNEL, E = "490432", f = "e81f4fbb043cb49d06339b7af0db15c7f22f9176".substring(0, 7), v = null === c.A || true === c.A ? true : c.A.remoteApp.getVersion(), T = null === c.A || true === c.A || null == (t = (n = c.A.remoteApp).getBuildNumber) ? true : t.call(n), C = null === c.A || true === c.A || null == (s = (r = c.A.remoteApp).getAppArch) ? true : s.call(r), y = null == (j = d.A.getCurrentBuildOverride().overrides) ? true : j.discord_web, N = function() {
    var e;
    let t = null === a() || true === a() || null == (e = a().os) ? true : e.toString();
    if (null == t || null == c.A) return null;
    let n = c.A.os.release,
      [i, s, l] = h.Ay.parsedOSRelease;
    return t.includes("Windows 10") && true !== l && l >= 22e3 && (t = t.replace("Windows 10", "Windows 11")), t.includes("OS X 10.15.7") && true !== i && i >= 20 && (t = "macOS ".concat(i >= 25 ? i + 1 : i - 9)), "".concat(t, " (").concat(n, ")")
  }(), I = [S, E, "(".concat(f, ")")];
  return (null != v && (I.push("Host ".concat(v)), null != C && I.push(C.toLowerCase()), null != T && I.push("(".concat(T, ")"))), I.push("Build Override: ".concat(null != y ? y.id : "N/A")), null != N && I.push(N), b) ? (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(g.A, {
      copyValue: I.join(" "),
      text: x.intl.string(x.t["9Al4Qd"]),
      "aria-label": false,
      dataMeticulousIgnore: "true",
      children: e => (0, i.jsxs)(o.DUT, m(A({}, e), {
        "aria-describedby": O,
        className: l()(p.vk, p.oE),
        children: [(0, i.jsxs)("div", {
          className: p.Cr,
          "data-mtctest-ignore": "true",
          children: [(0, i.jsxs)(o.Text, {
            tag: "span",
            variant: "text-xxs/normal",
            color: "text-muted",
            children: [S, " ", E, " ", (0, i.jsxs)("span", {
              className: p.Pc,
              children: ["(", f, ")"]
            })]
          }), null != v && (0, i.jsxs)(o.Text, {
            tag: "span",
            variant: "text-xxs/normal",
            color: "text-muted",
            children: [v, null != C && (0, i.jsxs)("span", {
              className: p.GI,
              children: [" ", C.toLowerCase()]
            }), null != T && (0, i.jsxs)("span", {
              children: [" (", T, ")"]
            })]
          })]
        }), null != y && (0, i.jsx)(o.Text, {
          tag: "span",
          variant: "text-xxs/normal",
          color: "text-muted",
          children: (0, i.jsxs)("span", {
            className: p.Pc,
            children: ["Build Override: ", y.id]
          })
        })]
      }))
    }), (0, i.jsx)(o.AC4, {
      id: O,
      children: x.intl.string(x.t["9Al4Qd"])
    })]
  }) : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(g.A, {
      copyValue: I.join(" "),
      text: x.intl.string(x.t["9Al4Qd"]),
      "aria-label": false,
      dataMeticulousIgnore: "true",
      children: e => (0, i.jsx)(o.DUT, m(A({}, e), {
        "aria-describedby": O,
        className: l()(p.vk, p.oE),
        children: (0, i.jsxs)("div", {
          className: p.pq,
          "data-mtctest-ignore": "true",
          children: [(0, i.jsxs)(o.Text, {
            tag: "span",
            className: p.n8,
            variant: "text-xs/normal",
            color: "text-muted",
            children: [S, " ", E, " ", (0, i.jsxs)("span", {
              className: p.Pc,
              children: ["(", f, ")"]
            })]
          }), " ", null != y && (0, i.jsx)(o.Text, {
            tag: "span",
            className: p.n8,
            variant: "text-xs/normal",
            color: "text-muted",
            children: (0, i.jsxs)("span", {
              className: p.Pc,
              children: ["Build Override: ", y.id]
            })
          }), null != v ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(o.Text, {
              tag: "span",
              className: p.n8,
              variant: "text-xs/normal",
              color: "text-muted",
              children: ["Host ", v, " ", null != C ? (0, i.jsxs)("span", {
                className: p.GI,
                children: [C.toLowerCase(), " "]
              }) : null, null != T ? (0, i.jsxs)("span", {
                children: ["(", T, ")"]
              }) : null]
            }), " "]
          }) : null, null != N ? (0, i.jsx)(o.Text, {
            tag: "span",
            className: l()(p.n8, p.os),
            variant: "text-xs/normal",
            color: "text-muted",
            children: N
          }) : null]
        })
      }))
    }), (0, i.jsx)(o.AC4, {
      id: O,
      children: x.intl.string(x.t["9Al4Qd"])
    })]
  })
}