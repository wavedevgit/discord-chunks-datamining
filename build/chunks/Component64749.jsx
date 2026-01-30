/** Chunk was on 35894 **/
/** chunk id: 64749, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => T,
  eW: () => E,
  th: () => R
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

function H(e) {
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

function w(e, t) {
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
  return e && "u" > typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}
let D = (0, Chunk915089.Ld)(),
  S = (0, Chunk915089.Ld)(),
  P = "text-sm/medium";

function N(e) {
  return 1 === e.type
}

function L(e) {
  return 0 === e.type
}

function R(e) {
  let t = "".concat(!e.name.includes(g.QP) ? "@" : "").concat(e.name);
  return {
    tag: {
      type: d._.ROLE,
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
      type: d._.CHANNEL,
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
let V = Chunk64700.memo(function(e) {
  var t;
  let {
    row: n,
    guildId: l,
    className: i
  } = e, {
    id: a,
    name: s
  } = n.record, d = (0, f.$7)({
    guildId: l,
    roleId: a,
    size: 16
  }), C = (0, c.bG)([x.A], () => x.A.getRole(l, a)), m = s.includes(g.QP) ? "" : "@", p = (0, u.rdh)(u.LU0.unsafe_rawColors.PRIMARY_300).hsl(), h = null != (t = null == C ? true : C.colorString) ? t : p, y = (0, b.X_)(l, C, null == C ? true : C.colorStrings);
  return (0, r.jsxs)("div", {
    className: o()(_.xZ, _.ex, i),
    children: [(0, r.jsx)(u.WYI, {
      className: _.__invalid_roleDot,
      color: h,
      colors: y,
      background: false,
      tooltip: false
    }), null != d ? (0, r.jsx)(j.A, w(H({
      className: _.YS
    }, d), {
      enableTooltip: false
    })) : m, (0, r.jsx)(u.Text, {
      variant: P,
      className: _.pP,
      children: s
    })]
  })
});

function M(e) {
  let {
    channel: t,
    row: n,
    className: l
  } = e, i = null != t.parent_id, a = (0, m.gU)(t);
  return (0, r.jsxs)("div", {
    className: o()(_.xZ, _.sM, {
      [_.p7]: i
    }, l),
    children: [null != a && (0, r.jsx)(a, {
      size: "xs",
      color: "currentColor",
      className: _.p
    }), (0, r.jsx)(u.Text, {
      variant: t.isCategory() ? "eyebrow" : P,
      children: n.display
    })]
  })
}

function I(e, t, n) {
  return N(e) ? (0, r.jsx)(V, {
    row: e,
    guildId: t,
    className: n
  }, e.record.id) : L(e) ? (0, r.jsx)(M, {
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
    onChange: m,
    placeholder: p,
    helperText: f,
    className: b
  } = e, j = (0, c.bG)([x.A], () => x.A.getRolesSnapshot(t)), g = l.useMemo(() => (function(e, t, n) {
    if (null == e) return {};
    let r = {};
    return e.forEach(e => {
      let t = h.A.getChannel(e);
      null != t && (r[e] = E(t))
    }), t.forEach(e => {
      e in n && (r[e] = R(n[e]))
    }), r
  })(a, C, j), [a, C, j]), y = l.useMemo(() => Object.keys(g), [g]), [O, P] = l.useState(""), [V, M] = l.useState(false), [T, Z] = l.useState(false), [k, U] = l.useState(false), F = l.useRef(null), {
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
  }, [O, i, n]), q = l.useCallback(e => {
    let t = Object.values(e),
      n = t.filter(e => {
        let {
          row: t
        } = e;
        return L(t)
      }).map(e => e.row.record.id),
      r = t.filter(e => {
        let {
          row: t
        } = e;
        return N(t)
      }).map(e => e.row.record.id);
    m(new Set(n), new Set(r))
  }, [m]), z = () => {
    M(false), Z(false)
  };
  l.useEffect(() => {
    let e = setTimeout(() => {
      U(V || T)
    }, 32);
    return () => {
      clearTimeout(e)
    }
  }, [V, T]);
  let Y = (e, t, n) => {
      n.stopPropagation(), n.preventDefault(), 2 === t ? M(e) : (1 === t || M(e), Z(e))
    },
    K = l.useCallback(e => {
      let t = H({}, g);
      L(e) ? t[e.id] = E(e.record) : N(e) && (t[e.id] = R(e.record)), q(t), P(""), z(), setTimeout(() => {
        var e;
        let t = null == (e = F.current) ? true : e.containerRef.current,
          n = null == t ? true : t.firstChild;
        null != n && n.scrollTo({
          top: n.scrollHeight,
          behavior: "smooth"
        })
      }, 16)
    }, [q, g]),
    Q = l.useCallback(e => {
      let {
        section: n,
        row: l
      } = e, i = B[n][l];
      return (0, r.jsx)(u.DUT, {
        className: o()(_.Xs, _.iw),
        onClick: e => {
          e.stopPropagation(), K(i)
        },
        children: (0, r.jsx)("div", {
          className: _.qd,
          children: I(i, t, _.Dq)
        })
      }, i.id)
    }, [t, K, B]),
    W = l.useMemo(() => y.map(e => {
      var n;
      return n = g[e], w(H({}, n.tag), {
        label: I(n.row, t, _.yS)
      })
    }), [g, y, t]);
  return (0, r.jsxs)("div", {
    className: o()(_.MT, b),
    children: [(0, r.jsxs)("div", {
      className: _.M6,
      children: [(0, r.jsx)(d.A, {
        tags: W,
        maxHeight: 98,
        size: d.A.Sizes.MEDIUM,
        query: O,
        ref: F,
        onRemoveTag: e => {
          var t;
          let n = y[e],
            {
              [n]: r
            } = g;
          q(function(e, t) {
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
            if ("object" !== A(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (true !== n) {
              var r = n.call(e, t || "default");
              if ("object" !== A(r)) return r;
              throw TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
          }(n, "string"), "symbol" === A(t) ? t : String(t))])), P(""), z()
        },
        onQueryChange: e => {
          P(e.trim().toLocaleLowerCase())
        },
        placeholder: null != p ? p : v.intl.string(v.t.uqHLzW),
        sections: [y.length],
        inputProps: {
          "aria-labelledby": D,
          "aria-controls": S,
          "aria-expanded": k,
          onFocus: e => Y(true, 2, e),
          onBlur: e => Y(false, 2, e)
        }
      }), k && (0, r.jsx)("div", {
        className: _.Dr,
        onFocus: e => Y(true, 1, e),
        onBlur: e => Y(false, 1, e),
        tabIndex: false,
        children: (0, r.jsx)(u.Eie, {
          className: _.ac,
          innerClassName: _.bB,
          sections: G,
          renderRow: Q,
          rowHeight: 34,
          renderSection: e => {
            let {
              section: t
            } = e;
            return 0 === t ? (0, r.jsx)(u.Heading, {
              variant: "heading-sm/semibold",
              className: o()(_.Gf, _.r6),
              children: v.intl.string(v.t.OGiMXJ)
            }, v.intl.string(v.t.OGiMXJ)) : 1 === t ? (0, r.jsx)(u.Heading, {
              variant: "heading-sm/semibold",
              className: o()(_.Gf, _.r6),
              children: v.intl.string(v.t["LPJmL/"])
            }, v.intl.string(v.t["LPJmL/"])) : null
          },
          renderFooter: e => {
            let {
              section: t
            } = e;
            return 0 === t ? 0 === G[1] && G[0] > 0 ? null : (0, r.jsx)("div", {
              className: _.Nf,
              children: (0, r.jsx)(u.cGx, {})
            }) : null
          },
          sectionHeight: 24,
          footerHeight: e => 0 === e ? 0 === G[1] && G[0] > 0 ? 0 : 32 : 0,
          role: true,
          innerRole: "listbox",
          innerId: S,
          innerAriaOrientation: "vertical"
        })
      })]
    }), null != f && (0, r.jsx)(u.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: _.cy,
      children: f
    })]
  })
}