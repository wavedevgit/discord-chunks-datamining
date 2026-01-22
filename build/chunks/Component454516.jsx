/** Chunk was on 47841 **/
/** chunk id: 454516, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => C
}), require("./896048.js"), require("./733351.js"), require("./228524.js"), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk686956 = require("./686956.js"),
  Chunk475743 = require("./475743.js"),
  Chunk736653 = require("./736653.js"),
  Chunk962125 = require("./962125.jsx"),
  Chunk859126 = require("./859126.js"),
  Chunk287809 = require("./287809.js"),
  Chunk996439 = require("./996439.js"),
  Chunk997509 = require("./997509.js"),
  Chunk555337 = require("./555337.js"),
  Chunk203498 = require("./203498.js"),
  Chunk660496 = require("./660496.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk220906 = require("./220906.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
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
class S extends Chunk64700.PureComponent {
  render() {
    var e;
    let {
      user: t,
      guild: n
    } = this.props;
    return (0, r.jsxs)(c.DUT, {
      className: A.KD,
      onClick: this.handleShowModal,
      onContextMenu: this.handleContextMenu,
      children: [(0, r.jsx)(c.euF, {
        src: t.getAvatarURL(null == n ? true : n.id, 40),
        "aria-label": t.username,
        size: c._3J.SIZE_40,
        className: A.pX
      }), (0, r.jsxs)("div", {
        className: A.Xh,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: null != (e = t.globalName) ? e : t.username
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/medium",
          color: "text-default",
          children: null != t.globalName ? t.username : null
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), E(this, "handleShowModal", () => {
      let {
        guild: e,
        user: t,
        ban: i
      } = this.props;
      (0, c.mMO)(async () => {
        let {
          default: l
        } = await n.e("50437").then(n.bind(n, 392516));
        return n => (0, r.jsx)(l, _(N({}, n), {
          guild: e,
          user: t,
          ban: i
        }))
      })
    }), E(this, "handleContextMenu", e => {
      (0, o.L3)(e, async () => {
        let {
          default: e
        } = await n.e("12123").then(n.bind(n, 263702));
        return t => (0, r.jsx)(e, _(N({}, t), {
          user: this.props.user
        }))
      })
    })
  }
}
let T = Chunk64700.forwardRef(function(e, t) {
  let {
    guild: n,
    sortedBans: l,
    bans: s
  } = e, a = i.useCallback(e => {
    var t;
    if (null == s && 0 === e) return 60;
    let n = l[e],
      r = null == s ? true : s.get(null != (t = null == n ? true : n.id) ? t : "");
    return 60 * (null != n && null != r)
  }, [s, l]), o = i.useCallback(e => {
    var t;
    if (null == s && 0 === e) return (0, r.jsx)(c.y$y, {
      className: A.u1,
      type: c.y$y.Type.SPINNING_CIRCLE
    }, "spinner");
    let i = l[e],
      a = null == s ? true : s.get(null != (t = null == i ? true : i.id) ? t : "");
    if (null != i && null != a) return (0, r.jsx)(S, {
      user: i,
      ban: a,
      guild: n
    }, i.id)
  }, [s, n, l]);
  return (0, r.jsx)(g.A, {
    role: "listbox",
    listPadding: [8, 8, 8, 8],
    rowCount: l.length,
    rowHeight: a,
    renderRow: o,
    ref: t
  })
});

function I(e) {
  let {
    guildId: t,
    storedSearchQuery: n
  } = e, [l, s] = i.useState(null != n ? n : ""), [a, o] = i.useState(false), u = i.useCallback(() => {
    x.A.setSection(y.BEX.SAFETY), (0, j.K)(O.C.DM_AND_SPAM_PROTECTION)
  }, []), f = i.useCallback(e => {
    s(e), 0 === e.trim().length && x.A.setSearchQuery(e)
  }, []), g = i.useCallback(() => {
    s(""), x.A.setSearchQuery("")
  }, []), m = i.useCallback(async () => {
    if (0 === l.trim().length) {
      x.A.setSearchQuery(l), o(false);
      return
    }
    if (!a) try {
      o(true);
      let [e, n] = (0, b.H)(l), r = e[0];
      x.A.setSearchQuery(l), await d.A.searchGuildBans(t, r, n), o(false)
    } catch (e) {
      o(false)
    }
  }, [t, a, l]), p = i.useCallback(e => {
    "Enter" === e.key && (e.preventDefault(), e.stopPropagation(), m())
  }, [m]);
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(c.Heading, {
      variant: "heading-lg/semibold",
      children: v.intl.string(v.t["7OY0gJ"])
    }), (0, r.jsx)("div", {
      className: A.Vu,
      children: (0, r.jsx)(c.Text, {
        variant: "text-sm/normal",
        className: A.h_,
        children: v.intl.format(v.t.JcZ36i, {
          onModerationClick: u
        })
      })
    }), (0, r.jsxs)("div", {
      className: A.IA,
      children: [(0, r.jsx)(c.IWV, {
        query: null != l ? l : "",
        placeholder: v.intl.string(v.t.MiqUmf),
        "aria-label": v.intl.string(v.t.MiqUmf),
        onChange: f,
        onKeyDown: p,
        onClear: g
      }), (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: A.JU,
        children: (0, r.jsx)(c.Button, {
          variant: "primary",
          text: v.intl.string(v.t["5h0QOP"]),
          onClick: m,
          disabled: a,
          loading: a
        })
      })]
    })]
  })
}

function C() {
  var e, t;
  let {
    guild: o,
    searchQuery: g
  } = (0, a.bG)([h.A], () => h.A.getProps(), [], l.isEqual), x = null != g && g.trim().length > 0, j = (0, u.A)(x), O = x !== j, [E] = (0, a.bG)([h.A], () => h.A.getBans(), [], p.D), S = null != (e = null == E ? true : E.size) ? e : 0, C = (0, f.Ay)(), P = null != (t = null == o ? true : o.id) ? t : y.dJq, w = i.useRef(null), R = i.useCallback(e => null == e || 0 === e.length ? e => null != e : t => {
    if (null == t || 0 === e.trim().length) returnfalse;
    let [
      [n], r
    ] = (0, b.H)(e);
    return !!r.includes(t.id) || null != n && !!(t.username.toLowerCase().includes(n.toLowerCase()) || null != t.globalName && t.globalName.toLowerCase().includes(n.toLowerCase()))
  }, []), D = i.useCallback((e, t, n) => {
    if (null == e || 0 === n) return [];
    let r = [];
    for (let n of e.keys()) {
      let e = m.default.getUser(n);
      null != e && R(t)(e) && r.push(e)
    }
    return r
  }, [R]), G = i.useMemo(() => D(E, g, S), [E, D, g, S]), L = null != E, k = G.length % 1e3 == 0 && G.length > 0 && L, M = 0 === G.length, [U, F] = i.useState({
    currentPage: 1,
    pageSize: 100
  });
  i.useEffect(() => {
    O && 1 !== U.currentPage && F(e => _(N({}, e), {
      currentPage: 1
    }))
  }, [O, U.currentPage]);
  let B = i.useCallback(e => {
      d.A.fetchGuildBansBatch(P, 1e3, e)
    }, [P]),
    H = i.useMemo(() => s().chunk(G, U.pageSize), [U.pageSize, G]),
    V = i.useCallback(e => {
      var t, n, r;
      null == (t = w.current) || t.scrollToSectionTop(0), (e + 1) * U.pageSize > G.length && k && !x && (K.current = null != (n = null == (r = G[G.length - 1]) ? true : r.id) ? n : null, B(K.current)), (null != H[e - 1] || k) && F(t => _(N({}, t), {
        currentPage: e
      }))
    }, [U.pageSize, G, k, H, B, x]),
    K = i.useRef(null);
  i.useEffect(() => {
    B(K.current)
  }, [B]);
  let z = i.useMemo(() => {
    var e;
    return null != (e = H[U.currentPage - 1]) ? e : []
  }, [H, U.currentPage]);
  return null == o ? null : (0, r.jsxs)("div", {
    className: A.kL,
    children: [(0, r.jsx)(I, {
      guildId: P,
      storedSearchQuery: g
    }), (0, r.jsxs)("div", {
      className: A.gs,
      children: [!M && (0, r.jsx)(T, {
        guild: o,
        bans: E,
        sortedBans: z,
        ref: w
      }), !k && M && (0, r.jsxs)(c.ppr, {
        theme: C,
        className: A.p$,
        children: [(0, r.jsx)(c.G8R, {
          darkSrc: n(29093),
          lightSrc: n(993507),
          width: 256,
          height: 212
        }), (0, r.jsx)(c.SGT, {
          note: v.intl.string(v.t.zfCsAw),
          style: {
            maxWidth: 300
          },
          children: v.intl.string(v.t.ZEiY1D)
        })]
      })]
    }), (0, r.jsx)("div", {
      children: (0, r.jsx)(c.mgR, {
        className: A.JV,
        totalCount: G.length + (k ? U.pageSize : 0),
        pageSize: U.pageSize,
        currentPage: U.currentPage,
        onPageChange: V,
        maxVisiblePages: 9
      })
    })]
  })
}