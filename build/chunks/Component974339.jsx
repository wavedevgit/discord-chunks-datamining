/** Chunk was on 46786 **/
/** chunk id: 974339, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356);
if (12633 == require.j) var Chunk91192 = require("./91192.jsx");
var Chunk481060 = require("./481060.js"),
  Chunk385499 = require("./385499.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk605436 = require("./605436.js"),
  Chunk537383 = require("./537383.jsx"),
  Chunk71080 = require("./71080.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk613007 = require("./613007.js");

function y(e) {
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

function g(e, t) {
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

function p(e) {
  var t = function(e, t) {
    if ("object" !== w(e) || null === e) return e;
    var r = e[Symbol.toPrimitive];
    if (true !== r) {
      var n = r.call(e, t || "default");
      if ("object" !== w(n)) return n;
      throw TypeError("@@toPrimitive must return a primitive value.")
    }
    return ("string" === t ? String : Number)(e)
  }(e, "string");
  return "symbol" === w(t) ? t : String(t)
}

function w(e) {
  return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
}
let j = (0, Chunk313201.hQ)(),
  O = (0, Chunk313201.hQ)();

function v(e) {
  return "".concat(e.rowType, ":").concat(e.id)
}
let S = 12633 == require.j ? Chunk647438.createContext({
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
  }) : null,
  E = () => Chunk647438.useContext(S),
  R = 12633 == require.j ? [] : null;

function T(e) {
  let {
    roles: t = R,
    members: r = R,
    users: n = R,
    guilds: o = R
  } = e;
  return l.useMemo(() => [t.length, r.length, n.length, o.length], [t.length, r.length, n.length, o.length])
}
let P = e => {
  let {
    title: t
  } = e;
  return (0, n.jsx)(a.vwX, {
    tag: "h5",
    className: i()(f.sectionTitle, f.rowHeight),
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
    showCheckbox: h,
    showRowLabel: g
  } = e, p = (0, s.JA)(o), {
    selectedSection: w,
    selectedRow: j,
    onSelectionChange: O,
    pendingAdditions: S,
    onRowClick: R
  } = E(), T = d[u], P = v(T), C = T.disabled || P in S, k = T.disabled;
  return (0, l.createElement)(a.P3F, (t = y({}, p), r = r = {
    id: o,
    key: P,
    role: "option",
    className: i()(f.clickableRow, {
      [f.selectedRow]: w === c && j === u
    }),
    onClick: e => {
      k || (e.preventDefault(), T.rowType !== b.aC.EMPTY_STATE && R(T))
    },
    onMouseEnter: () => O(c, u, false),
    "aria-disabled": k,
    "aria-selected": C,
    "aria-setsize": d.length,
    "aria-posinset": u + 1,
    children: [h ? (0, n.jsx)(a.XZJ, {
      className: f.checkbox,
      displayOnly: true,
      size: 18,
      value: C,
      type: a.XZJ.Types.INVERTED,
      disabled: k,
      children: (0, n.jsx)("div", {
        className: f.rowBody,
        children: x
      })
    }) : (0, n.jsx)("div", {
      className: f.rowBody,
      children: x
    }), g ? (0, n.jsx)(a.Text, {
      color: "text-muted",
      variant: "text-xs/normal",
      children: m.zB(T.rowType)
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
let k = e => {
    let {
      index: t,
      disabledText: r
    } = e, {
      roles: l
    } = E(), o = l[t];
    return null == o ? null : (0, n.jsxs)(C, {
      id: "roles-row-".concat(t),
      sectionIndex: b.m$.ROLES,
      rowIndex: t,
      rows: l,
      showCheckbox: true,
      showRowLabel: true,
      children: [(0, n.jsx)("div", {
        className: i()(f.rowHeight, f.alignCenter),
        children: (0, n.jsx)(a.lZ8, {
          size: "custom",
          color: o.colorString,
          height: 20
        })
      }), (0, n.jsxs)("div", {
        className: f.rowLabel,
        children: [(0, n.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: o.rowType === b.aC.EMPTY_STATE ? "text-muted" : "text-default",
          children: o.name
        }), o.disabled && null != r ? (0, n.jsx)(a.Text, {
          color: "header-secondary",
          variant: "text-xs/normal",
          children: r
        }) : null]
      })]
    })
  },
  I = e => {
    let {
      index: t
    } = e, {
      members: r
    } = E(), l = r[t];
    return null == l ? null : (0, n.jsxs)(C, {
      id: "members-row-".concat(t),
      sectionIndex: b.m$.MEMBERS,
      rowIndex: t,
      rows: r,
      showCheckbox: true,
      showRowLabel: true,
      children: [(0, n.jsx)(a.qEK, {
        src: l.avatarURL,
        size: a.EFr.SIZE_24,
        "aria-label": ""
      }), (0, n.jsx)(a.Text, {
        className: f.rowLabel,
        variant: "text-sm/normal",
        children: l.name
      }), null != l.nickname ? (0, n.jsx)(a.Text, {
        color: "text-muted",
        className: f.rowLabelSubText,
        variant: "text-sm/normal",
        "aria-hidden": true,
        children: l.username
      }) : null, l.bot && (0, n.jsx)(c.Z, {
        verified: l.verifiedBot
      })]
    })
  },
  L = e => {
    let {
      index: t,
      disabledText: r
    } = e, {
      users: l
    } = E(), o = l[t];
    return null == o ? null : (0, n.jsxs)(C, {
      id: "users-row-".concat(t),
      sectionIndex: b.m$.USERS,
      rowIndex: t,
      rows: l,
      showCheckbox: true,
      showRowLabel: true,
      children: [(0, n.jsx)(a.qEK, {
        src: o.avatarURL,
        size: a.EFr.SIZE_24,
        "aria-label": ""
      }), (0, n.jsxs)("div", {
        className: f.rowLabel,
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
    } = E(), l = r[t];
    return null == l ? null : (0, n.jsxs)(C, {
      id: "guilds-row-".concat(t),
      sectionIndex: b.m$.GUILDS,
      rowIndex: t,
      rows: r,
      showCheckbox: true,
      showRowLabel: true,
      children: [(0, n.jsx)(d.Z, {
        guild: l.guild,
        active: true,
        size: d.Z.Sizes.SMALLER
      }), (0, n.jsx)("div", {
        className: f.rowLabel,
        children: (0, n.jsx)(a.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: l.name
        })
      })]
    })
  },
  Z = 12633 == require.j ? {
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
        roles: c = R,
        members: u = R,
        users: d = R,
        guilds: m = R,
        getRichTag: x,
        maxPendingRows: h
      } = e, f = l.useRef(null), [w, j] = l.useState({
        section: 0,
        row: false
      });

      function O(e) {
        var t;
        let r = v(e);
        a(t => {
          if (r in t) {
            let {
              [r]: e
            } = t;
            return g(t, [r].map(p))
          } {
            let n = x(e);
            if (null != n) {
              let l = y({}, t);
              return l[r] = {
                display: n,
                row: e
              }, l
            }
          }
          return t
        }), i(""), null == (t = f.current) || t.focus()
      }
      l.useEffect(() => {
        var e;
        null == (e = f.current) || e.focus()
      }, []);
      let E = null != h && Object.keys(s).length >= h;
      return (0, n.jsx)(S.Provider, {
        value: {
          searchRef: f,
          selectedSection: w.section,
          selectedRow: w.row,
          roles: c,
          members: u,
          users: d,
          guilds: m,
          pendingAdditions: s,
          isAtMaxPendingRows: E,
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
          onRowClick: O,
          query: o,
          onQueryChange: i,
          onQueryClick: function(e, t) {
            if (null == t) return;
            i("");
            let r = [];
            switch (e) {
              case b.m$.ROLES:
                r = c;
                break;
              case b.m$.MEMBERS:
                r = u;
                break;
              case b.m$.USERS:
                r = d;
                break;
              case b.m$.GUILDS:
                r = m
            }
            let n = r[t];
            null != n && n.rowType !== b.aC.EMPTY_STATE && O(n)
          },
          onRemovePendingAddition: function(e) {
            a(t => {
              let {
                [e]: r
              } = t;
              return g(t, [e].map(p))
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
        onQueryClick: b,
        onRemovePendingAddition: h,
        roles: f,
        members: y,
        users: g,
        guilds: p
      } = E(), {
        keys: w,
        tags: v
      } = l.useMemo(() => {
        let e = Object.keys(c),
          t = e.map(e => c[e].display);
        return {
          keys: e,
          tags: t
        }
      }, [c]), S = T({
        roles: f,
        members: y,
        users: g,
        guilds: p
      });
      return (0, n.jsx)(x.Z, {
        ref: i,
        query: u,
        onQueryChange: m,
        selectedSection: s,
        selectedRow: a,
        onSelectionChange: d,
        onSelect: b,
        tags: v,
        sections: S,
        onRemoveTag: e => h(w[e]),
        placeholder: t,
        focusAfterReady: r,
        isReady: o,
        "aria-labelledby": j,
        "aria-controls": O
      })
    },
    renderSection: e => {
      let {
        section: t
      } = e;
      switch (t) {
        case b.m$.ROLES:
          return (0, n.jsx)(P, {
            title: h.intl.string(h.t.LPJmLy)
          });
        case b.m$.MEMBERS:
          return (0, n.jsx)(P, {
            title: h.intl.string(h.t["9Oq93t"])
          });
        case b.m$.USERS:
          return (0, n.jsx)(P, {
            title: h.intl.string(h.t.nqDUBQ)
          });
        case b.m$.GUILDS:
          return (0, n.jsx)(P, {
            title: h.intl.string(h.t["7hB4kp"])
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
        case b.m$.ROLES:
          return (0, n.jsx)(k, {
            index: r
          });
        case b.m$.MEMBERS:
          return (0, n.jsx)(I, {
            index: r
          });
        case b.m$.USERS:
          return (0, n.jsx)(L, {
            index: r
          });
        case b.m$.GUILDS:
          return (0, n.jsx)(M, {
            index: r
          })
      }
      return null
    },
    useSections: T
  } : null