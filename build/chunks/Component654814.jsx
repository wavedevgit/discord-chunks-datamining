/** Chunk was on 6850 **/
/** chunk id: 654814, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  PM: () => V,
  WG: () => P,
  ZP: () => k
}), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk658722 = require("./658722.js"),
  s = require.n(Chunk658722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk794433 = require("./794433.jsx"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk313201 = require("./313201.js"),
  Chunk518738 = require("./518738.js"),
  Chunk884902 = require("./884902.js"),
  Chunk48950 = require("./48950.jsx"),
  Chunk439170 = require("./439170.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk155339 = require("./155339.js");

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

function S(e, t) {
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

function Z(e) {
  var t = function(e, t) {
    if ("object" !== D(e) || null === e) return e;
    var n = e[Symbol.toPrimitive];
    if (true !== n) {
      var r = n.call(e, t || "default");
      if ("object" !== D(r)) return r;
      throw TypeError("@@toPrimitive must return a primitive value.")
    }
    return ("string" === t ? String : Number)(e)
  }(e, "string");
  return "symbol" === D(t) ? t : String(t)
}

function D(e) {
  return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}
let N = (0, Chunk313201.hQ)(),
  _ = (0, Chunk313201.hQ)(),
  R = "text-sm/medium";

function L(e) {
  return 1 === e.type
}

function I(e) {
  return 0 === e.type
}

function P(e) {
  let t = "".concat(!e.name.includes(g.CR) ? "@" : "").concat(e.name);
  return {
    tag: {
      type: u.F.ROLE,
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

function V(e) {
  let t = (0, C.F6)(e, y.default, v.Z);
  return {
    tag: {
      type: u.F.CHANNEL,
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
let M = Chunk473749.memo(function(e) {
  var t;
  let {
    row: n,
    guildId: l,
    className: i
  } = e, {
    id: o,
    name: s
  } = n.record, u = (0, f.p9)({
    guildId: l,
    roleId: o,
    size: 16
  }), C = (0, c.e7)([x.Z], () => x.Z.getRole(l, o)), m = s.includes(g.CR) ? "" : "@", b = (0, d.dQu)(d.TVs.unsafe_rawColors.PRIMARY_300).hsl(), j = null != (t = null == C ? true : C.colorString) ? t : b, v = (0, p._f)(l, C, null == C ? true : C.colorStrings);
  return (0, r.jsxs)("div", {
    className: a()(H.rowLabel, H.roleTagContainer, i),
    children: [(0, r.jsx)(d.FhE, {
      className: H.__invalid_roleDot,
      color: j,
      colors: v,
      background: false,
      tooltip: false
    }), null != u ? (0, r.jsx)(h.Z, S(w({
      className: H.roleTagIcon
    }, u), {
      enableTooltip: false
    })) : m, (0, r.jsx)(d.Text, {
      variant: R,
      className: H.roleTagLabel,
      children: s
    })]
  })
});

function E(e) {
  let {
    channel: t,
    row: n,
    className: l
  } = e, i = null != t.parent_id, o = (0, m.KS)(t);
  return (0, r.jsxs)("div", {
    className: a()(H.rowLabel, H.channelLabel, {
      [H.hasParent]: i
    }, l),
    children: [null != o && (0, r.jsx)(o, {
      size: "xs",
      color: "currentColor",
      className: H.channelIcon
    }), (0, r.jsx)(d.Text, {
      variant: t.isCategory() ? "eyebrow" : R,
      children: n.display
    })]
  })
}

function T(e, t, n) {
  return L(e) ? (0, r.jsx)(M, {
    row: e,
    guildId: t,
    className: n
  }, e.record.id) : I(e) ? (0, r.jsx)(E, {
    row: e,
    channel: e.record,
    className: n
  }, e.record.id) : null
}

function k(e) {
  let {
    guildId: t,
    roleRows: n = [],
    channelRows: i = [],
    selectedChannelIds: o = new Set,
    selectedRoleIds: C = new Set,
    onChange: m,
    placeholder: b,
    helperText: f,
    className: p
  } = e, h = (0, c.e7)([x.Z], () => x.Z.getRolesSnapshot(t)), g = l.useMemo(() => (function(e, t, n) {
    if (null == e) return {};
    let r = {};
    return e.forEach(e => {
      let t = j.Z.getChannel(e);
      null != t && (r[e] = V(t))
    }), t.forEach(e => {
      e in n && (r[e] = P(n[e]))
    }), r
  })(o, C, h), [o, C, h]), v = l.useMemo(() => Object.keys(g), [g]), [y, D] = l.useState(""), [R, M] = l.useState(false), [E, k] = l.useState(false), [A, U] = l.useState(false), F = l.useRef(null), {
    sections: B,
    sectionCounts: q
  } = l.useMemo(() => {
    let e = "" !== y ? i.filter(e => s()(y, e.display.toLocaleLowerCase())) : i,
      t = "" !== y ? n.filter(e => s()(y, e.display.toLocaleLowerCase())) : n,
      r = [],
      l = [];
    return r[0] = e, l[0] = e.length, r[1] = t, l[1] = t.length, {
      sections: r,
      sectionCounts: l
    }
  }, [y, i, n]), G = l.useCallback(e => {
    let t = Object.values(e),
      n = t.filter(e => {
        let {
          row: t
        } = e;
        return I(t)
      }).map(e => e.row.record.id),
      r = t.filter(e => {
        let {
          row: t
        } = e;
        return L(t)
      }).map(e => e.row.record.id);
    m(new Set(n), new Set(r))
  }, [m]), z = () => {
    M(false), k(false)
  };
  l.useEffect(() => {
    let e = setTimeout(() => {
      U(R || E)
    }, 32);
    return () => {
      clearTimeout(e)
    }
  }, [R, E]);
  let Y = (e, t, n) => {
      n.stopPropagation(), n.preventDefault(), 2 === t ? M(e) : (1 === t || M(e), k(e))
    },
    Q = l.useCallback(e => {
      let t = w({}, g);
      I(e) ? t[e.id] = V(e.record) : L(e) && (t[e.id] = P(e.record)), G(t), D(""), z(), setTimeout(() => {
        var e;
        let t = null == (e = F.current) ? true : e.containerRef.current,
          n = null == t ? true : t.firstChild;
        null != n && n.scrollTo({
          top: n.scrollHeight,
          behavior: "smooth"
        })
      }, 16)
    }, [G, g]),
    W = l.useCallback(e => {
      let {
        section: n,
        row: l
      } = e, i = B[n][l];
      return (0, r.jsx)(d.P3F, {
        className: a()(H.selectableSearchRow, H.rowHeight),
        onClick: e => {
          e.stopPropagation(), Q(i)
        },
        children: (0, r.jsx)("div", {
          className: H.rowContainer,
          children: T(i, t, H.searchRowLabel)
        })
      }, i.id)
    }, [t, Q, B]),
    K = l.useMemo(() => v.map(e => {
      var n;
      return n = g[e], S(w({}, n.tag), {
        label: T(n.row, t, H.noIndent)
      })
    }), [g, v, t]);
  return (0, r.jsxs)("div", {
    className: a()(H.searchContainer, p),
    children: [(0, r.jsxs)("div", {
      className: H.searchBox,
      children: [(0, r.jsx)(u.Z, {
        tags: K,
        maxHeight: 98,
        size: u.Z.Sizes.MEDIUM,
        query: y,
        ref: F,
        onRemoveTag: e => {
          let t = v[e],
            {
              [t]: n
            } = g;
          G(function(e, t) {
            if (null == e) return {};
            var n, r, l = function(e, t) {
              if (null == e) return {};
              var n, r, l = {},
                i = Object.keys(e);
              for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
              return l
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
            }
            return l
          }(g, [t].map(Z))), D(""), z()
        },
        onQueryChange: e => {
          D(e.trim().toLocaleLowerCase())
        },
        placeholder: null != b ? b : O.intl.string(O.t.uqHLzW),
        sections: [v.length],
        inputProps: {
          "aria-labelledby": N,
          "aria-controls": _,
          "aria-expanded": A,
          onFocus: e => Y(true, 2, e),
          onBlur: e => Y(false, 2, e)
        }
      }), A && (0, r.jsx)("div", {
        className: H.resultsListParent,
        onFocus: e => Y(true, 1, e),
        onBlur: e => Y(false, 1, e),
        tabIndex: false,
        children: (0, r.jsx)(d._2F, {
          className: H.resultsListContainer,
          innerClassName: H.resultsList,
          sections: q,
          renderRow: W,
          rowHeight: 34,
          renderSection: e => {
            let {
              section: t
            } = e;
            return 0 === t ? (0, r.jsx)(d.Heading, {
              variant: "heading-sm/semibold",
              className: a()(H.sectionTitle, H.sectionHeight),
              children: O.intl.string(O.t.OGiMXJ)
            }, O.intl.string(O.t.OGiMXJ)) : 1 === t ? (0, r.jsx)(d.Heading, {
              variant: "heading-sm/semibold",
              className: a()(H.sectionTitle, H.sectionHeight),
              children: O.intl.string(O.t["LPJmL/"])
            }, O.intl.string(O.t["LPJmL/"])) : null
          },
          renderFooter: e => {
            let {
              section: t
            } = e;
            return 0 === t ? 0 === q[1] && q[0] > 0 ? null : (0, r.jsx)("div", {
              className: H.sectionFooter,
              children: (0, r.jsx)(d.izJ, {})
            }) : null
          },
          sectionHeight: 24,
          footerHeight: e => 0 === e ? 0 === q[1] && q[0] > 0 ? 0 : 32 : 0,
          role: true,
          innerRole: "listbox",
          innerId: _,
          innerAriaOrientation: "vertical"
        })
      })]
    }), null != f && (0, r.jsx)(d.Text, {
      variant: "text-xs/normal",
      color: "text-muted",
      className: H.helperText,
      children: f
    })]
  })
}