/** Chunk was on 60449 **/
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

function p(e) {
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
    compact: O = false
  } = e, E = (0, u.GV)(), b = window.GLOBAL_ENV.RELEASE_CHANNEL, S = "490958", v = "96c0930db92231a6ee794d8072684a7cf5dd77e5".substring(0, 7), C = null === c.A || true === c.A ? true : c.A.remoteApp.getVersion(), f = null === c.A || true === c.A || null == (t = (n = c.A.remoteApp).getBuildNumber) ? true : t.call(n), T = null === c.A || true === c.A || null == (s = (r = c.A.remoteApp).getAppArch) ? true : s.call(r), N = null == (j = d.A.getCurrentBuildOverride().overrides) ? true : j.discord_web, _ = function() {
    var e;
    let t = null === a() || true === a() || null == (e = a().os) ? true : e.toString();
    if (null == t || null == c.A) return null;
    let n = c.A.os.release,
      [i, s, l] = h.Ay.parsedOSRelease;
    return t.includes("Windows 10") && true !== l && l >= 22e3 && (t = t.replace("Windows 10", "Windows 11")), t.includes("OS X 10.15.7") && true !== i && i >= 20 && (t = "macOS ".concat(i >= 25 ? i + 1 : i - 9)), "".concat(t, " (").concat(n, ")")
  }(), I = [b, S, "(".concat(v, ")")];
  return (null != C && (I.push("Host ".concat(C)), null != T && I.push(T.toLowerCase()), null != f && I.push("(".concat(f, ")"))), I.push("Build Override: ".concat(null != N ? N.id : "N/A")), null != _ && I.push(_), O) ? (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(g.A, {
      copyValue: I.join(" "),
      text: x.intl.string(x.t["9Al4Qd"]),
      "aria-label": false,
      dataMeticulousIgnore: "true",
      children: e => (0, i.jsxs)(o.DUT, m(p({}, e), {
        "aria-describedby": E,
        className: l()(A.vk, A.oE),
        children: [(0, i.jsxs)("div", {
          className: A.Cr,
          "data-mtctest-ignore": "true",
          children: [(0, i.jsxs)(o.Text, {
            tag: "span",
            variant: "text-xxs/normal",
            color: "text-muted",
            children: [b, " ", S, " ", (0, i.jsxs)("span", {
              className: A.Pc,
              children: ["(", v, ")"]
            })]
          }), null != C && (0, i.jsxs)(o.Text, {
            tag: "span",
            variant: "text-xxs/normal",
            color: "text-muted",
            children: [C, null != T && (0, i.jsxs)("span", {
              className: A.GI,
              children: [" ", T.toLowerCase()]
            }), null != f && (0, i.jsxs)("span", {
              children: [" (", f, ")"]
            })]
          })]
        }), null != N && (0, i.jsx)(o.Text, {
          tag: "span",
          variant: "text-xxs/normal",
          color: "text-muted",
          children: (0, i.jsxs)("span", {
            className: A.Pc,
            children: ["Build Override: ", N.id]
          })
        })]
      }))
    }), (0, i.jsx)(o.AC4, {
      id: E,
      children: x.intl.string(x.t["9Al4Qd"])
    })]
  }) : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(g.A, {
      copyValue: I.join(" "),
      text: x.intl.string(x.t["9Al4Qd"]),
      "aria-label": false,
      dataMeticulousIgnore: "true",
      children: e => (0, i.jsx)(o.DUT, m(p({}, e), {
        "aria-describedby": E,
        className: l()(A.vk, A.oE),
        children: (0, i.jsxs)("div", {
          className: A.pq,
          "data-mtctest-ignore": "true",
          children: [(0, i.jsxs)(o.Text, {
            tag: "span",
            className: A.n8,
            variant: "text-xs/normal",
            color: "text-muted",
            children: [b, " ", S, " ", (0, i.jsxs)("span", {
              className: A.Pc,
              children: ["(", v, ")"]
            })]
          }), " ", null != N && (0, i.jsx)(o.Text, {
            tag: "span",
            className: A.n8,
            variant: "text-xs/normal",
            color: "text-muted",
            children: (0, i.jsxs)("span", {
              className: A.Pc,
              children: ["Build Override: ", N.id]
            })
          }), null != C ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(o.Text, {
              tag: "span",
              className: A.n8,
              variant: "text-xs/normal",
              color: "text-muted",
              children: ["Host ", C, " ", null != T ? (0, i.jsxs)("span", {
                className: A.GI,
                children: [T.toLowerCase(), " "]
              }) : null, null != f ? (0, i.jsxs)("span", {
                children: ["(", f, ")"]
              }) : null]
            }), " "]
          }) : null, null != _ ? (0, i.jsx)(o.Text, {
            tag: "span",
            className: l()(A.n8, A.os),
            variant: "text-xs/normal",
            color: "text-muted",
            children: _
          }) : null]
        })
      }))
    }), (0, i.jsx)(o.AC4, {
      id: E,
      children: x.intl.string(x.t["9Al4Qd"])
    })]
  })
}