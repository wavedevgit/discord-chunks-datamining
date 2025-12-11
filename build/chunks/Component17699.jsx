/** Chunk was on 9536 **/
/** chunk id: 17699, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js"), require("./781311.js"), require("./953529.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk749210 = require("./749210.js"),
  Chunk110924 = require("./110924.js"),
  Chunk410030 = require("./410030.js"),
  Chunk218867 = require("./218867.jsx"),
  Chunk733026 = require("./733026.js"),
  Chunk594174 = require("./594174.js"),
  Chunk136015 = require("./136015.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk84613 = require("./84613.js"),
  Chunk740903 = require("./740903.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk678286 = require("./678286.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      N(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
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
class S extends Chunk473749.PureComponent {
  render() {
    var e;
    let {
      user: t,
      guild: n
    } = this.props;
    return (0, Chunk54381.jsxs)(Chunk481060.P3F, {
      className: Chunk678286.bannedUser,
      onClick: this.handleShowModal,
      onContextMenu: this.handleContextMenu,
      children: [(0, Chunk54381.jsx)(Chunk481060.qEK, {
        src: exports.getAvatarURL(null == require ? true : require.id, 40),
        "aria-label": exports.username,
        size: Chunk481060.EFr.SIZE_40,
        className: Chunk678286.bannedUserAvatar
      }), (0, Chunk54381.jsxs)("div", {
        className: Chunk678286.username,
        children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: null != (e = exports.globalName) ? module : exports.username
        }), (0, Chunk54381.jsx)(Chunk481060.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: null != exports.globalName ? exports.username : null
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), N(this, "handleShowModal", () => {
      let {
        guild: e,
        user: t,
        ban: i
      } = this.props;
      (0, o.ZDy)(async () => {
        let {
          default: l
        } = await n.e("61697").then(n.bind(n, 355160));
        return n => (0, r.jsx)(l, I(E({}, n), {
          guild: e,
          user: t,
          ban: i
        }))
      })
    }), N(this, "handleContextMenu", e => {
      (0, c.jW)(e, async () => {
        let {
          default: e
        } = await n.e("23835").then(n.bind(n, 768079));
        return t => (0, r.jsx)(e, I(E({}, t), {
          user: this.props.user
        }))
      })
    })
  }
}
let _ = Chunk473749.forwardRef(function(e, t) {
  let {
    guild: n,
    sortedBans: l,
    bans: a
  } = e, s = i.useCallback(e => {
    var t;
    if (null == a && 0 === e) return 60;
    let n = l[e],
      r = null == a ? true : a.get(null != (t = null == n ? true : n.id) ? t : "");
    return 60 * (null != n && null != r)
  }, [a, l]), c = i.useCallback(e => {
    var t;
    if (null == a && 0 === e) return (0, r.jsx)(o.$jN, {
      className: y.spinner,
      type: o.$jN.Type.SPINNING_CIRCLE
    }, "spinner");
    let i = l[e],
      s = null == a ? true : a.get(null != (t = null == i ? true : i.id) ? t : "");
    if (null != i && null != s) return (0, r.jsx)(S, {
      user: i,
      ban: s,
      guild: n
    }, i.id)
  }, [a, n, l]);
  return (0, r.jsx)(m.Z, {
    role: "listbox",
    listPadding: [8, 8, 8, 8],
    rowCount: l.length,
    rowHeight: s,
    renderRow: c,
    ref: t
  })
});

function T(e) {
  let {
    guildId: t,
    storedSearchQuery: n
  } = e, [l, a] = i.useState(null != n ? n : ""), [s, c] = i.useState(false), u = i.useCallback(() => {
    h.Z.setSection(O.pNK.SAFETY), (0, j.K)(v.u.DM_AND_SPAM_PROTECTION)
  }, []), g = i.useCallback(e => {
    a(e), 0 === e.trim().length && h.Z.setSearchQuery(e)
  }, []), m = i.useCallback(() => {
    a(""), h.Z.setSearchQuery("")
  }, []), p = i.useCallback(async () => {
    if (0 === l.trim().length) {
      h.Z.setSearchQuery(l), c(false);
      return
    }
    if (!s) try {
      c(true);
      let [e, n] = (0, f.C)(l), r = e[0];
      h.Z.setSearchQuery(l), await d.Z.searchGuildBans(t, r, n), c(false)
    } catch (e) {
      c(false)
    }
  }, [t, s, l]), b = i.useCallback(e => {
    "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), p())
  }, [p]);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(o.Heading, {
      variant: "heading-lg/semibold",
      children: C.intl.string(C.t["7OY0gJ"])
    }), (0, r.jsx)("div", {
      className: y.settingsHeader,
      children: (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        className: y.description,
        children: C.intl.format(C.t.JcZ36i, {
          onModerationClick: u
        })
      })
    }), (0, r.jsxs)("div", {
      className: y.bansSearchContainer,
      children: [(0, r.jsx)(o.E1j, {
        query: null != l ? l : "",
        placeholder: C.intl.string(C.t.MiqUmf),
        "aria-label": C.intl.string(C.t.MiqUmf),
        onChange: g,
        onKeyDown: b,
        onClear: m
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: y.searchButton,
        children: (0, r.jsx)(o.Button, {
          variant: "primary",
          text: C.intl.string(C.t["5h0QOP"]),
          onClick: p,
          disabled: s,
          loading: s
        })
      })]
    })]
  })
}

function P() {
  var e, t;
  let {
    guild: c,
    searchQuery: m
  } = (0, Chunk399606.e7)([Chunk999382.Z], () => Chunk999382.Z.getProps(), [], Chunk392711.isEqual), h = null != Chunk218867 && Chunk218867.trim().length > 0, j = (0, Chunk110924.Z)(Chunk434404), v = Chunk434404 !== Chunk84613, [N] = (0, Chunk399606.e7)([Chunk999382.Z], () => Chunk999382.Z.getBans(), [], Chunk136015.Q), S = null != (e = null == N ? true : N.size) ? module : 0, P = (0, Chunk410030.ZP)(), w = null != (t = null == Chunk239091 ? true : Chunk239091.id) ? exports : Chunk981631.lds, Z = Chunk473749.useRef(null), R = Chunk473749.useCallback(e => null == e || 0 === e.length ? e => null != e : t => {
    if (null == t || 0 === e.trim().length) returnfalse;
    let [
      [n], r
    ] = (0, f.C)(e);
    return !!r.includes(t.id) || null != n && !!(t.username.toLowerCase().includes(n.toLowerCase()) || null != t.globalName && t.globalName.toLowerCase().includes(n.toLowerCase()))
  }, []), D = Chunk473749.useCallback((e, t, n) => {
    if (null == e || 0 === n) return [];
    let r = [];
    for (let n of e.keys()) {
      let e = p.default.getUser(n);
      null != e && R(t)(e) && r.push(e)
    }
    return r
  }, [R]), A = Chunk473749.useMemo(() => D(N, Chunk218867, S), [N, D, Chunk218867, S]), L = null != N, k = A.length % 1e3 == 0 && A.length > 0 && L, G = 0 === A.length, [M, U] = Chunk473749.useState({
    currentPage: 1,
    pageSize: 100
  });
  Chunk473749.useEffect(() => {
    Chunk740903 && 1 !== M.currentPage && U(e => I(E({}, e), {
      currentPage: 1
    }))
  }, [Chunk740903, M.currentPage]);
  let B = Chunk473749.useCallback(e => {
      d.Z.fetchGuildBansBatch(w, 1e3, e)
    }, [w]),
    F = Chunk473749.useMemo(() => a().chunk(A, M.pageSize), [M.pageSize, A]),
    H = Chunk473749.useCallback(e => {
      var t, n, r;
      null == (t = Z.current) || t.scrollToSectionTop(0), (e + 1) * M.pageSize > A.length && k && !h && (W.current = null != (r = null == (n = A[A.length - 1]) ? true : n.id) ? r : null, B(W.current)), (null != F[e - 1] || k) && U(t => I(E({}, t), {
        currentPage: e
      }))
    }, [M.pageSize, A, k, F, B, Chunk434404]),
    W = Chunk473749.useRef(null);
  Chunk473749.useEffect(() => {
    B(W.current)
  }, [B]);
  let z = Chunk473749.useMemo(() => {
    var e;
    return null != (e = F[M.currentPage - 1]) ? module : []
  }, [F, M.currentPage]);
  return null == Chunk239091 ? null : (0, Chunk54381.jsxs)("div", {
    className: Chunk678286.container,
    children: [(0, Chunk54381.jsx)(T, {
      guildId: w,
      storedSearchQuery: Chunk218867
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk678286.scrollerContainer,
      children: [!G && (0, Chunk54381.jsx)(_, {
        guild: Chunk239091,
        bans: N,
        sortedBans: z,
        ref: Z
      }), !k && G && (0, Chunk54381.jsxs)(Chunk481060.ubH, {
        theme: P,
        className: Chunk678286.emptyState,
        children: [(0, Chunk54381.jsx)(Chunk481060.oxh, {
          darkSrc: require("./532747.js"),
          lightSrc: require("./433466.js"),
          width: 256,
          height: 212
        }), (0, Chunk54381.jsx)(Chunk481060.OZU, {
          note: Chunk388032.intl.string(Chunk388032.t.zfCsAw),
          style: {
            maxWidth: 300
          },
          children: Chunk388032.intl.string(Chunk388032.t.ZEiY1D)
        })]
      })]
    }), (0, Chunk54381.jsx)("div", {
      children: (0, Chunk54381.jsx)(Chunk481060.DsT, {
        className: Chunk678286.paginationInput,
        totalCount: A.length + (k ? M.pageSize : 0),
        pageSize: M.pageSize,
        currentPage: M.currentPage,
        onPageChange: H,
        maxVisiblePages: 9
      })
    })]
  })
}