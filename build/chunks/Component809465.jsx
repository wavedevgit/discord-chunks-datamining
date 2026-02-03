/** Chunk was on 42402 **/
/** chunk id: 809465, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js"), require("./747238.js"), require("./812715.js"), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
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

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e) {
  var t, n, l, s, A;
  let {
    compact: y = false
  } = e, O = (0, d.GV)(), j = window.GLOBAL_ENV.RELEASE_CHANNEL, x = "492569", _ = "dba95b5f1bcc8544e074394e2ac356c67f233f55".substring(0, 7), v = null === c.A || true === c.A ? true : c.A.remoteApp.getVersion(), E = null === c.A || true === c.A || null == (t = (n = c.A.remoteApp).getBuildNumber) ? true : t.call(n), C = null === c.A || true === c.A || null == (l = (s = c.A.remoteApp).getAppArch) ? true : l.call(s), S = null == (A = u.A.getCurrentBuildOverride().overrides) ? true : A.discord_web, I = function() {
    var e;
    let t = null === a() || true === a() || null == (e = a().os) ? true : e.toString();
    if (null == t || null == c.A) return null;
    let n = c.A.os.release,
      [r, l, i] = h.Ay.parsedOSRelease;
    return t.includes("Windows 10") && true !== i && i >= 22e3 && (t = t.replace("Windows 10", "Windows 11")), t.includes("OS X 10.15.7") && true !== r && r >= 20 && (t = "macOS ".concat(r >= 25 ? r + 1 : r - 9)), "".concat(t, " (").concat(n, ")")
  }(), N = [j, x, "(".concat(_, ")")];
  return (null != v && (N.push("Host ".concat(v)), null != C && N.push(C.toLowerCase()), null != E && N.push("(".concat(E, ")"))), N.push("Build Override: ".concat(null != S ? S.id : "N/A")), null != I && N.push(I), y) ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(p.A, {
      copyValue: N.join(" "),
      text: g.intl.string(g.t["9Al4Qd"]),
      "aria-label": false,
      dataMeticulousIgnore: "true",
      children: e => (0, r.jsxs)(o.DUT, b(m({}, e), {
        "aria-describedby": O,
        className: i()(f.vk, f.oE),
        children: [(0, r.jsxs)("div", {
          className: f.Cr,
          "data-mtctest-ignore": "true",
          children: [(0, r.jsxs)(o.Text, {
            tag: "span",
            variant: "text-xxs/normal",
            color: "text-muted",
            children: [j, " ", x, " ", (0, r.jsxs)("span", {
              className: f.Pc,
              children: ["(", _, ")"]
            })]
          }), null != v && (0, r.jsxs)(o.Text, {
            tag: "span",
            variant: "text-xxs/normal",
            color: "text-muted",
            children: [v, null != C && (0, r.jsxs)("span", {
              className: f.GI,
              children: [" ", C.toLowerCase()]
            }), null != E && (0, r.jsxs)("span", {
              children: [" (", E, ")"]
            })]
          })]
        }), null != S && (0, r.jsx)(o.Text, {
          tag: "span",
          variant: "text-xxs/normal",
          color: "text-muted",
          children: (0, r.jsxs)("span", {
            className: f.Pc,
            children: ["Build Override: ", S.id]
          })
        })]
      }))
    }), (0, r.jsx)(o.AC4, {
      id: O,
      children: g.intl.string(g.t["9Al4Qd"])
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(p.A, {
      copyValue: N.join(" "),
      text: g.intl.string(g.t["9Al4Qd"]),
      "aria-label": false,
      dataMeticulousIgnore: "true",
      children: e => (0, r.jsx)(o.DUT, b(m({}, e), {
        "aria-describedby": O,
        className: i()(f.vk, f.oE),
        children: (0, r.jsxs)("div", {
          className: f.pq,
          "data-mtctest-ignore": "true",
          children: [(0, r.jsxs)(o.Text, {
            tag: "span",
            className: f.n8,
            variant: "text-xs/normal",
            color: "text-muted",
            children: [j, " ", x, " ", (0, r.jsxs)("span", {
              className: f.Pc,
              children: ["(", _, ")"]
            })]
          }), " ", null != S && (0, r.jsx)(o.Text, {
            tag: "span",
            className: f.n8,
            variant: "text-xs/normal",
            color: "text-muted",
            children: (0, r.jsxs)("span", {
              className: f.Pc,
              children: ["Build Override: ", S.id]
            })
          }), null != v ? (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsxs)(o.Text, {
              tag: "span",
              className: f.n8,
              variant: "text-xs/normal",
              color: "text-muted",
              children: ["Host ", v, " ", null != C ? (0, r.jsxs)("span", {
                className: f.GI,
                children: [C.toLowerCase(), " "]
              }) : null, null != E ? (0, r.jsxs)("span", {
                children: ["(", E, ")"]
              }) : null]
            }), " "]
          }) : null, null != I ? (0, r.jsx)(o.Text, {
            tag: "span",
            className: i()(f.n8, f.os),
            variant: "text-xs/normal",
            color: "text-muted",
            children: I
          }) : null]
        })
      }))
    }), (0, r.jsx)(o.AC4, {
      id: O,
      children: g.intl.string(g.t["9Al4Qd"])
    })]
  })
}