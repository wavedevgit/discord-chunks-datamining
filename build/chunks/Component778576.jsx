/** Chunk was on 53653 **/
/** chunk id: 778576, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => E
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk287809 = require("./287809.js"),
  Chunk101058 = require("./101058.js"),
  Chunk989299 = require("./989299.js"),
  Chunk348 = require("./348.js"),
  Chunk783173 = require("./783173.jsx"),
  Chunk656925 = require("./656925.js"),
  Chunk652215 = require("./652215.js"),
  Chunk339984 = require("./339984.js");
require("./363385.js");
var Chunk985018 = require("./985018.jsx"),
  Chunk449998 = require("./449998.js");

function j(e) {
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

function O(e) {
  let {
    avatar: t,
    index: r,
    onSelectRecentAvatar: a,
    onDeleteRecentAvatar: i,
    avatarButtonRef: s
  } = e, {
    id: u,
    storageHash: f,
    description: d = h.intl.string(h.t.lqaIxI)
  } = t, {
    avatarSrc: p,
    eventHandlers: g
  } = (0, b.A)({
    avatarId: u,
    storageHash: f
  }), {
    onMouseEnter: y,
    onMouseLeave: A
  } = g, j = l.useRef(null), O = null != d ? d : f.substring(0, 6).toUpperCase(), x = h.intl.formatToPlainString(h.t.tmJ75y, {
    orderNumber: r + 1,
    description: O
  }), E = h.intl.formatToPlainString(h.t.pBzwhc, {
    orderNumber: r + 1,
    description: O
  });
  return (0, n.jsxs)("div", {
    className: m.ge,
    children: [(0, n.jsx)(c.DUT, {
      onClick: () => a(t),
      onMouseEnter: y,
      onMouseLeave: A,
      className: m.Hk,
      "aria-label": x,
      innerRef: s,
      children: (0, n.jsx)("img", {
        src: p,
        alt: d,
        className: m.Hc
      })
    }), (0, n.jsx)(o.m, {
      text: h.intl.string(h.t.N86XcP),
      anchorRef: j,
      asContainer: true,
      ariaHidden: true,
      children: (0, n.jsx)(c.vN3, {
        children: (0, n.jsx)("button", {
          type: "button",
          ref: j,
          "aria-label": E,
          onClick: e => i(e, r, u, f, E),
          className: m.G5,
          children: (0, n.jsx)(c.ucK, {
            size: "xs",
            color: "currentColor",
            className: m.fy
          })
        })
      })
    })]
  })
}

function x(e) {
  let {
    avatars: t,
    onComplete: a,
    setFetchError: o,
    className: p
  } = e, b = (0, s.bG)([u.default], () => u.default.getCurrentUser()), x = l.useRef([]), E = l.useRef(null), C = l.useRef(t.length), v = l.useRef(null), [R, w] = l.useState(false), [N, T] = l.useState(false), S = t.length, P = Math.max(6 - S, 0), _ = (0, c.k34)(), F = l.useCallback(async e => {
    if (null == b || R) return;
    w(true), o(null);
    let {
      id: t,
      storageHash: l,
      description: i
    } = e, s = (0, f.Xp)({
      userId: b.id,
      avatarId: t,
      storageHash: l,
      size: y.XAf,
      canAnimate: true,
      allowWebp: false
    });
    try {
      let t = await fetch(s),
        o = await t.blob(),
        {
          filename: u,
          type: d
        } = (0, f.yM)(l, i);
      (0, c.mMO)(async () => {
        let {
          default: t
        } = await Promise.all([r.e("35929"), r.e("74571"), r.e("1208")]).then(r.bind(r, 142630));
        return r => (0, n.jsx)(t, j({
          imageUri: s,
          file: new File([o], u, {
            type: d
          }),
          originalAsset: e,
          onCrop: a,
          uploadType: A.HL.AVATAR,
          showUpsellHeader: true
        }, r))
      }, {
        contextKey: _
      })
    } catch (e) {
      o(h.intl.string(h.t.fZRH9P))
    } finally {
      w(false)
    }
  }, [_, R, a, o, b]), L = l.useCallback((e, l, a, i, s) => {
    let o = l + 1 < t.length ? l + 1 : l - 1;
    v.current = o >= 0 ? x.current[o] : E.current, e.shiftKey ? (0, d.O)(a) : (T(true), (0, c.mMO)(async () => {
      let {
        default: e
      } = await r.e("48944").then(r.bind(r, 555251));
      return t => {
        let {
          onClose: r
        } = t, l = function(e, t) {
          if (null == e) return {};
          var r, n, l, a = {};
          if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            return a
          }
          if (a = function(e, t) {
              if (null == e) return {};
              var r, n, l = {},
                a = Object.getOwnPropertyNames(e);
              for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
              return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
          return a
        }(t, ["onClose"]);
        return (0, n.jsx)(e, j({
          avatarId: a,
          storageHash: i,
          avatarDescription: s,
          onConfirmDelete: () => (0, d.O)(a),
          onClose: async () => {
            await r(), requestAnimationFrame(() => {
              T(false)
            })
          }
        }, l))
      }
    }))
  }, [t]);
  return l.useEffect(() => {
    N || (t.length < C.current && null != v.current && requestAnimationFrame(() => {
      var e;
      null == (e = v.current) || e.focus()
    }), C.current = t.length)
  }, [t.length, N]), (0, n.jsx)("div", {
    className: i()(m.AU, p),
    children: (0, n.jsxs)("div", {
      className: m.mE,
      children: [S > 0 && (0, n.jsx)("ul", {
        "aria-label": h.intl.string(h.t.lsU63N),
        className: m.xL,
        children: t.map((e, t) => (0, n.jsx)("li", {
          children: (0, n.jsx)(O, {
            avatar: e,
            index: t,
            onSelectRecentAvatar: F,
            onDeleteRecentAvatar: L,
            avatarButtonRef: e => {
              x.current[t] = e
            }
          })
        }, e.id))
      }), P > 0 && (0, n.jsxs)("div", {
        className: m.wh,
        tabIndex: false,
        ref: E,
        children: [(0, n.jsxs)(c.AC4, {
          children: [0 === S && (0, n.jsxs)(n.Fragment, {
            children: [h.intl.string(h.t.x0DsRS), " "]
          }), h.intl.format(h.t["8W2HO3"], {
            numberOfEmptyAvatarSlots: P
          })]
        }), [...Array(P)].map((e, t) => (0, n.jsx)(g.A, {
          className: m.rZ
        }, t))]
      })]
    })
  })
}

function E(e) {
  let {
    className: t,
    onComplete: r
  } = e, {
    avatars: a,
    loading: s,
    error: o
  } = (0, p.b)(), [u, f] = l.useState(null), g = null != u ? u : null == o ? true : o.message;
  return l.useEffect(() => {
    (0, d.I)()
  }, []), (0, n.jsx)("div", {
    className: i()(m.kL, t),
    children: (0, n.jsx)(c.D0$, {
      label: h.intl.string(h.t.Bnq9zK),
      description: h.intl.format(h.t["+CyJu3"], {
        recentAvatarsLimit: 6
      }),
      errorMessage: g,
      children: s ? (0, n.jsx)(c.y$y, {
        className: m.u1
      }) : (0, n.jsx)(x, {
        avatars: a,
        onComplete: r,
        setFetchError: f,
        className: null != g ? m.JD : true
      })
    })
  })
}