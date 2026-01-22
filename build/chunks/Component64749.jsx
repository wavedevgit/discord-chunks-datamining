/** Chunk was on 35894 **/
/** chunk id: 64749, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => T,
  eW: () => E,
  th: () => L
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk91871 = require("./91871.js"),
  s = require.n(Chunk91871),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk39255 = require("./39255.jsx"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk915089 = require("./915089.js"),
  Chunk201275 = require("./201275.js"),
  Chunk967144 = require("./967144.js"),
  Chunk657048 = require("./657048.jsx"),
  Chunk963307 = require("./963307.js"),
  Chunk734057 = require("./734057.js"),
  Chunk317525 = require("./317525.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk457325 = require("./457325.js");

function w(e) {
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

function A(e, t) {
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

function D(e) {
  return e && "u" > typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}
let S = (0, Chunk915089.Ld)(),
  _ = (0, Chunk915089.Ld)(),
  N = "text-sm/medium";

function P(e) {
  return 1 === e.type
}

function V(e) {
  return 0 === e.type
}

function L(e) {
  let t = "".concat(!e.name.includes(g.QP) ? "@" : "").concat(e.name);
  return {
    tag: {
      type: u._.ROLE,
      label: t
    },
    row: {
      id: e.id,
      display: t,
      type: 1,
      record: e
    }
  }
}

function E(e) {
  let t = (0, C.m1)(e, O.default, y.A);
  return {
    tag: {
      type: u._.CHANNEL,
      label: t
    },
    row: {
      id: e.id,
      display: t,
      type: 0,
      record: e
    }
  }
}
let M = Chunk64700.memo(function(e) {
  var t;
  let {
    row: n,
    guildId: l,
    className: i
  } = e, {
    id: a,
    name: s
  } = n.record, u = (0, m.$7)({
    guildId: l,
    roleId: a,
    size: 16
  }), C = (0, c.bG)([x.A], () => x.A.getRole(l, a)), f = s.includes(g.QP) ? "" : "@", b = (0, d.rdh)(d.LU0.unsafe_rawColors.PRIMARY_300).hsl(), h = null != (t = null == C ? true : C.colorString) ? t : b, y = (0, p.X_)(l, C, null == C ? true : C.colorStrings);
  return (0, r.jsxs)("div", {
    className: o()(H.xZ, H.ex, i),
    children: [(0, r.jsx)(d.WYI, {
      className: H.__invalid_roleDot,
      color: h,
      colors: y,
      background: false,
      tooltip: false
    }), null != u ? (0, r.jsx)(j.A, A(w({
      className: H.YS
    }, u), {
      enableTooltip: false
    })) : f, (0, r.jsx)(d.Text, {
      variant: N,
      className: H.pP,
      children: s
    })]
  })
});

function R(e) {
  let {
    channel: t,
    row: n,
    className: l
  } = e, i = null != t.parent_id, a = (0, f.gU)(t);
  return (0, r.jsxs)("div", {
    className: o()(H.xZ, H.sM, {
      [H.p7]: i
    }, l),
    children: [null != a && (0, r.jsx)(a, {
      size: "xs",
      color: "currentColor",
      className: H.p
    }), (0, r.jsx)(d.Text, {
      variant: t.isCategory() ? "eyebrow" : N,
      children: n.display
    })]
  })
}

function I(e, t, n) {
  return P(e) ? (0, r.jsx)(M, {
    row: e,
    guildId: t,
    className: n
  }, e.record.id) : V(e) ? (0, r.jsx)(R, {
    row: e,
    channel: e.record,
    className: n
  }, e.record.id) : null
}

function T(e) {
  let {
    guildId: t,
    roleRows: n = [],
    channelRows: i = [],
    selectedChannelIds: a = new Set,
    selectedRoleIds: C = new Set,
    onChange: f,
    placeholder: b,
    helperText: m,
    className: p
  } = e, j = (0, c.bG)([x.A], () => x.A.getRolesSnapshot(t)), g = l.useMemo(() => (function(e, t, n) {
    if (null == e) return {};
    let r = {};
    return e.forEach(e => {
      let t = h.A.getChannel(e);
      null != t && (r[e] = E(t))
    }), t.forEach(e => {
      e in n && (r[e] = L(n[e]))
    }), r
  })(a, C, j), [a, C, j]), y = l.useMemo(() => Object.keys(g), [g]), [O, N] = l.useState(""), [M, R] = l.useState(false), [T, Z] = l.useState(false), [k, U] = l.useState(false), F = l.useRef(null), {
    sections: B,
    sectionCounts: G
  } = l.useMemo(() => {
    let e = "" !== O ? i.filter(e => s()(O, e.display.toLocaleLowerCase())) : i,
      t = "" !== O ? n.filter(e => s()(O, e.display.toLocaleLowerCase())) : n,
      r = [],
      l = [];
    return r[0] = e, l[0] = e.length, r[1] = t, l[1] = t.length, {
      sections: r,
      sectionCounts: l
    }
  }, [O, i, n]), z = l.useCallback(e => {
    let t = Object.values(e),
      n = t.filter(e => {
        let {
          row: t
        } = e;
        return V(t)
      }).map(e => e.row.record.id),
      r = t.filter(e => {
        let {
          row: t
        } = e;
        return P(t)
      }).map(e => e.row.record.id);
    f(new Set(n), new Set(r))
  }, [f]), q = () => {
    R(false), Z(false)
  };
  l.useEffect(() => {
    let e = setTimeout(() => {
      U(M || T)
    }, 32);
    return () => {
      clearTimeout(e)
    }
  }, [M, T]);
  let Y = (e, t, n) => {
      n.stopPropagation(), n.preventDefault(), 2 === t ? R(e) : (1 === t || R(e), Z(e))
    },
    K = l.useCallback(e => {
      let t = w({}, g);
      V(e) ? t[e.id] = E(e.record) : P(e) && (t[e.id] = L(e.record)), z(t), N(""), q(), setTimeout(() => {
        var e;
        let t = null == (e = F.current) ? true : e.containerRef.current,
          n = null == t ? true : t.firstChild;
        null != n && n.scrollTo({
          top: n.scrollHeight,
          behavior: "smooth"
        })
      }, 16)
    }, [z, g]),
    Q = l.useCallback(e => {
      let {
        section: n,
        row: l
      } = e, i = B[n][l];
      return (0, r.jsx)(d.DUT, {
        className: o()(H.Xs, H.iw),
        onClick: e => {
          e.stopPropagation(), K(i)
        },
        children: (0, r.jsx)("div", {
          className: H.qd,
          children: I(i, t, H.Dq)
        })
      }, i.id)
    }, [t, K, B]),
    X = l.useMemo(() => y.map(e => {
      var n;
      return n = g[e], A(w({}, n.tag), {
        label: I(n.row, t, H.yS)
      })
    }), [g, y, t]);
  return (0, r.jsxs)("div", {
    className: o()(H.MT, p),
    children: [(0, r.jsxs)("div", {
      className: H.M6,
      children: [(0, r.jsx)(u.A, {
        tags: X,
        maxHeight: 98,
        size: u.A.Sizes.MEDIUM,
        query: O,
        ref: F,
        onRemoveTag: e => {
          var t;
          let n = y[e],
            {
              [n]: r
            } = g;
          z(function(e, t) {
            if (null == e) return {};
            var n, r, l, i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
              for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
              return i
            }
            if (i = function(e, t) {
                if (null == e) return {};
                var n, r, l = {},
                  i = Object.getOwnPropertyNames(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
              }(e, t), Object.getOwnPropertySymbols)
              for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
          }(g, [(t = function(e, t) {
            if ("object" !== D(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (true !== n) {
              var r = n.call(e, t || "default");
              if ("object" !== D(r)) return r;
              throw TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
          }(n, "string"), "symbol" === D(t) ? t : String(t))])), N(""), q()
        },
        onQueryChange: e => {
          N(e.trim().toLocaleLowerCase())
        },
        placeholder: null != b ? b : v.intl.string(v.t.uqHLzW),
        sections: [y.length],
        inputProps: {
          "aria-labelledby": S,
          "aria-controls": _,
          "aria-expanded": k,
          onFocus: e => Y(true, 2, e),
          onBlur: e => Y(false, 2, e)
        }
      }), k && (0, r.jsx)("div", {
        className: H.Dr,
        onFocus: e => Y(true, 1, e),
        onBlur: e => Y(false, 1, e),
        tabIndex: false,
        children: (0, r.jsx)(d.Eie, {
          className: H.ac,
          innerClassName: H.bB,
          sections: G,
          renderRow: Q,
          rowHeight: 34,
          renderSection: e => {
            let {
              section: t
            } = e;
            return 0 === t ? (0, r.jsx)(d.Heading, {
              variant: "heading-sm/semibold",
              className: o()(H.Gf, H.r6),
              children: v.intl.string(v.t.OGiMXJ)
            }, v.intl.string(v.t.OGiMXJ)) : 1 === t ? (0, r.jsx)(d.Heading, {
              variant: "heading-sm/semibold",
              className: o()(H.Gf, H.r6),
              children: v.intl.string(v.t["LPJmL/"])
            }, v.intl.string(v.t["LPJmL/"])) : null
          },
          renderFooter: e => {
            let {
              section: t
            } = e;
            return 0 === t ? 0 === G[1] && G[0] > 0 ? null : (0, r.jsx)("div", {
              className: H.Nf,
              children: (0, r.jsx)(d.cGx, {})
            }) : null
          },
          sectionHeight: 24,
          footerHeight: e => 0 === e ? 0 === G[1] && G[0] > 0 ? 0 : 32 : 0,
          role: true,
          innerRole: "listbox",
          innerId: _,
          innerAriaOrientation: "vertical"
        })
      })]
    }), null != m && (0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: H.cy,
      children: m
    })]
  })
}