/** Chunk was on 33285 **/
/** chunk id: 974339, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => $
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk385499 = require("./385499.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk605436 = require("./605436.js"),
  Chunk537383 = require("./537383.jsx"),
  Chunk71080 = require("./71080.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk613007 = require("./613007.js");

function f(e) {
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
}

function y(e, t) {
  if (null == e) return {};
  var r, n, l = function(e, t) {
    if (null == e) return {};
    var r, n, l = {},
      o = Object.keys(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (l[r] = e[r]);
    return l
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
  }
  return l
}

function g(e) {
  var t = function(e, t) {
    if ("object" !== p(e) || null === e) return e;
    var r = e[Symbol.toPrimitive];
    if (true !== r) {
      var n = r.call(e, t || "default");
      if ("object" !== p(n)) return n;
      throw TypeError("@@toPrimitive must return a primitive value.")
    }
    return ("string" === t ? String : Number)(e)
  }(e, "string");
  return "symbol" === p(t) ? t : String(t)
}

function p(e) {
  return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}
let j = (0, Chunk313201.hQ)(),
  S = (0, Chunk313201.hQ)();

function v(e) {
  return "".concat(e.rowType, ":").concat(e.id)
}
let E = Chunk647438.createContext({
    searchRef: {
      current: null
    },
    selectedSection: 0,
    selectedRow: false,
    roles: [],
    members: [],
    users: [],
    guilds: [],
    pendingAdditions: {},
    isAtMaxPendingRows: false,
    onSelectionChange: () => {},
    onRowClick: () => {},
    query: "",
    onQueryChange: () => {},
    onQueryClick: () => {},
    onRemovePendingAddition: () => {}
  }),
  R = () => Chunk647438.useContext(E),
  O = [];

function T(e) {
  let {
    roles: t = O,
    members: r = O,
    users: n = O,
    guilds: o = O
  } = e;
  return l.useMemo(() => [t.length, r.length, n.length, o.length], [t.length, r.length, n.length, o.length])
}
let k = e => {
  let {
    title: t
  } = e;
  return (0, n.jsx)(a.vwX, {
    tag: "h5",
    className: i()(w.sectionTitle, w.rowHeight),
    children: t
  }, t)
};

function C(e) {
  var t, r;
  let {
    id: o,
    sectionIndex: c,
    rowIndex: u,
    rows: d,
    children: x,
    showCheckbox: b,
    showRowLabel: y
  } = e, g = (0, s.JA)(o), {
    selectedSection: p,
    selectedRow: j,
    onSelectionChange: S,
    pendingAdditions: E,
    onRowClick: O,
    isAtMaxPendingRows: T
  } = R(), k = d[u], C = v(k), P = k.disabled || C in E, L = k.disabled || !P && T;
  return (0, l.createElement)(a.P3F, (t = f({}, g), r = r = {
    id: o,
    key: C,
    role: "option",
    className: i()(w.clickableRow, {
      [w.selectedRow]: p === c && j === u
    }),
    onClick: e => {
      L || (e.preventDefault(), k.rowType !== h.aC.EMPTY_STATE && O(k))
    },
    onMouseEnter: () => S(c, u, false),
    "aria-disabled": L,
    "aria-selected": P,
    "aria-setsize": d.length,
    "aria-posinset": u + 1,
    children: [b ? (0, n.jsx)(a.XZJ, {
      className: w.checkbox,
      displayOnly: true,
      size: 18,
      value: P,
      type: a.XZJ.Types.INVERTED,
      disabled: L,
      children: (0, n.jsx)("div", {
        className: w.rowBody,
        children: x
      })
    }) : (0, n.jsx)("div", {
      className: w.rowBody,
      children: x
    }), y ? (0, n.jsx)(a.Text, {
      color: "text-muted",
      variant: "text-xs/normal",
      children: m.zB(k.rowType)
    }) : null]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(r)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
  }), t))
}
let P = e => {
    let {
      index: t,
      disabledText: r
    } = e, {
      roles: l
    } = R(), o = l[t];
    return null == o ? null : (0, n.jsxs)(C, {
      id: "roles-row-".concat(t),
      sectionIndex: h.m$.ROLES,
      rowIndex: t,
      rows: l,
      showCheckbox: true,
      showRowLabel: true,
      children: [(0, n.jsx)("div", {
        className: i()(w.rowHeight, w.alignCenter),
        children: (0, n.jsx)(a.lZ8, {
          size: "custom",
          color: o.colorString,
          height: 20
        })
      }), (0, n.jsxs)("div", {
        className: w.rowLabel,
        children: [(0, n.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: o.rowType === h.aC.EMPTY_STATE ? "text-muted" : "text-default",
          children: o.name
        }), o.disabled && null != r ? (0, n.jsx)(a.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          children: r
        }) : null]
      })]
    })
  },
  L = e => {
    let {
      index: t
    } = e, {
      members: r
    } = R(), l = r[t];
    return null == l ? null : (0, n.jsxs)(C, {
      id: "members-row-".concat(t),
      sectionIndex: h.m$.MEMBERS,
      rowIndex: t,
      rows: r,
      showCheckbox: true,
      showRowLabel: true,
      children: [(0, n.jsx)(a.qEK, {
        src: l.avatarURL,
        size: a.EFr.SIZE_24,
        "aria-label": ""
      }), (0, n.jsx)(a.Text, {
        className: w.rowLabel,
        variant: "text-sm/normal",
        children: l.name
      }), null != l.nickname ? (0, n.jsx)(a.Text, {
        color: "text-muted",
        className: w.rowLabelSubText,
        variant: "text-sm/normal",
        "aria-hidden": true,
        children: l.username
      }) : null, l.bot && (0, n.jsx)(c.Z, {
        verified: l.verifiedBot
      })]
    })
  },
  I = e => {
    let {
      index: t,
      disabledText: r
    } = e, {
      users: l
    } = R(), o = l[t];
    return null == o ? null : (0, n.jsxs)(C, {
      id: "users-row-".concat(t),
      sectionIndex: h.m$.USERS,
      rowIndex: t,
      rows: l,
      showCheckbox: true,
      showRowLabel: true,
      children: [(0, n.jsx)(a.qEK, {
        src: o.avatarURL,
        size: a.EFr.SIZE_24,
        "aria-label": ""
      }), (0, n.jsxs)("div", {
        className: w.rowLabel,
        children: [(0, n.jsx)(a.Text, {
          variant: "text-sm/normal",
          children: o.name
        }), o.disabled && null != r ? (0, n.jsx)(a.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          children: r
        }) : null]
      })]
    })
  },
  M = e => {
    let {
      index: t
    } = e, {
      guilds: r
    } = R(), l = r[t];
    return null == l ? null : (0, n.jsxs)(C, {
      id: "guilds-row-".concat(t),
      sectionIndex: h.m$.GUILDS,
      rowIndex: t,
      rows: r,
      showCheckbox: true,
      showRowLabel: true,
      children: [(0, n.jsx)(d.Z, {
        guild: l.guild,
        active: true,
        size: d.Z.Sizes.SMALLER
      }), (0, n.jsx)("div", {
        className: w.rowLabel,
        children: (0, n.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: l.name
        })
      })]
    })
  },
  $ = {
    SECTION_HEIGHT: 32,
    ROW_HEIGHT: 40,
    Provider: e => {
      let {
        children: t,
        listRef: r,
        query: o,
        setQuery: i,
        pendingAdditions: s,
        setPendingAdditions: a,
        roles: c = O,
        members: u = O,
        users: d = O,
        guilds: m = O,
        getRichTag: x,
        maxPendingRows: b
      } = e, w = l.useRef(null), [p, j] = l.useState({
        section: 0,
        row: false
      });

      function S(e) {
        var t;
        let r = v(e);
        a(t => {
          if (r in t) {
            let {
              [r]: e
            } = t;
            return y(t, [r].map(g))
          } {
            let n = x(e);
            if (null != n) {
              let l = f({}, t);
              return l[r] = {
                display: n,
                row: e
              }, l
            }
          }
          return t
        }), i(""), null == (t = w.current) || t.focus()
      }
      l.useEffect(() => {
        var e;
        null == (e = w.current) || e.focus()
      }, []);
      let R = null != b && Object.keys(s).length >= b;
      return (0, n.jsx)(E.Provider, {
        value: {
          searchRef: w,
          selectedSection: p.section,
          selectedRow: p.row,
          roles: c,
          members: u,
          users: d,
          guilds: m,
          pendingAdditions: s,
          isAtMaxPendingRows: R,
          onSelectionChange: function(e, t) {
            let n = !(arguments.length > 2) || true === arguments[2] || arguments[2];
            if (j(r => r.section === e && r.row === t ? r : {
                section: null != e ? e : 0,
                row: null != t ? t : false
              }), n) {
              var l;
              null == r || null == (l = r.current) || l.scrollToIndex({
                section: null != e ? e : 0,
                row: null != t ? t : 0,
                padding: 8
              })
            }
          },
          onRowClick: S,
          query: o,
          onQueryChange: i,
          onQueryClick: function(e, t) {
            if (null == t) return;
            i("");
            let r = [];
            switch (e) {
              case h.m$.ROLES:
                r = c;
                break;
              case h.m$.MEMBERS:
                r = u;
                break;
              case h.m$.USERS:
                r = d;
                break;
              case h.m$.GUILDS:
                r = m
            }
            let n = r[t];
            null != n && n.rowType !== h.aC.EMPTY_STATE && S(n)
          },
          onRemovePendingAddition: function(e) {
            a(t => {
              let {
                [e]: r
              } = t;
              return y(t, [e].map(g))
            })
          }
        },
        children: t
      })
    },
    SearchBox: e => {
      let {
        placeholderText: t,
        focusSearchAfterReady: r,
        isReady: o
      } = e, {
        searchRef: i,
        selectedSection: s,
        selectedRow: a,
        pendingAdditions: c,
        query: u,
        onSelectionChange: d,
        onQueryChange: m,
        onQueryClick: h,
        onRemovePendingAddition: b,
        roles: w,
        members: f,
        users: y,
        guilds: g
      } = R(), {
        keys: p,
        tags: v
      } = l.useMemo(() => {
        let e = Object.keys(c),
          t = e.map(e => c[e].display);
        return {
          keys: e,
          tags: t
        }
      }, [c]), E = T({
        roles: w,
        members: f,
        users: y,
        guilds: g
      });
      return (0, n.jsx)(x.Z, {
        ref: i,
        query: u,
        onQueryChange: m,
        selectedSection: s,
        selectedRow: a,
        onSelectionChange: d,
        onSelect: h,
        tags: v,
        sections: E,
        onRemoveTag: e => b(p[e]),
        placeholder: t,
        focusAfterReady: r,
        isReady: o,
        "aria-labelledby": j,
        "aria-controls": S
      })
    },
    renderSection: e => {
      let {
        section: t
      } = e;
      switch (t) {
        case h.m$.ROLES:
          return (0, n.jsx)(k, {
            title: b.intl.string(b.t.LPJmLy)
          });
        case h.m$.MEMBERS:
          return (0, n.jsx)(k, {
            title: b.intl.string(b.t["9Oq93t"])
          });
        case h.m$.USERS:
          return (0, n.jsx)(k, {
            title: b.intl.string(b.t.nqDUBQ)
          });
        case h.m$.GUILDS:
          return (0, n.jsx)(k, {
            title: b.intl.string(b.t["7hB4kp"])
          });
        default:
          return null
      }
    },
    renderRow: e => {
      let {
        section: t,
        row: r
      } = e;
      switch (t) {
        case h.m$.ROLES:
          return (0, n.jsx)(P, {
            index: r
          });
        case h.m$.MEMBERS:
          return (0, n.jsx)(L, {
            index: r
          });
        case h.m$.USERS:
          return (0, n.jsx)(I, {
            index: r
          });
        case h.m$.GUILDS:
          return (0, n.jsx)(M, {
            index: r
          })
      }
      return null
    },
    useSections: T
  }