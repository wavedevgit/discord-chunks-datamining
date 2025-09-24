/** Chunk was on 89289 **/
/** chunk id: 782818, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk643879 = require("./643879.js"),
  Chunk225516 = require("./225516.js"),
  Chunk598989 = require("./598989.js"),
  Chunk898331 = require("./898331.jsx"),
  Chunk841183 = require("./841183.js"),
  Chunk981631 = require("./981631.js"),
  Chunk486324 = require("./486324.js"),
  Chunk485696 = require("./485696.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk916340 = require("./916340.js");

function x(e) {
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

function A(e) {
  let {
    avatar: t,
    index: n,
    onSelectRecentAvatar: a,
    onDeleteRecentAvatar: l,
    avatarButtonRef: i
  } = e, {
    id: s,
    storageHash: c,
    description: u = j.intl.string(j.t.lqaIxM)
  } = t, {
    avatarSrc: d,
    eventHandlers: f
  } = (0, g.Z)({
    avatarId: s,
    storageHash: c
  }), {
    onMouseEnter: p,
    onMouseLeave: m
  } = f, h = null != u ? u : c.substring(0, 6).toUpperCase(), b = j.intl.formatToPlainString(j.t["tmJ75+"], {
    orderNumber: n + 1,
    description: h
  }), A = j.intl.formatToPlainString(j.t.pBzwhY, {
    orderNumber: n + 1,
    description: h
  });
  return (0, r.jsxs)("div", {
    className: y.recentAvatarButtonContainer,
    children: [(0, r.jsx)(o.P3F, {
      onClick: () => a(t),
      onMouseEnter: p,
      onMouseLeave: m,
      className: y.recentAvatarButton,
      "aria-label": b,
      innerRef: i,
      children: (0, r.jsx)("img", {
        src: d,
        alt: u,
        className: y.recentAvatar
      })
    }), (0, r.jsx)(o.ua7, {
      text: j.intl.string(j.t.N86XcH),
      children: e => {
        var t, a;
        return (0, r.jsx)(o.P3F, (t = x({}, e), a = a = {
          "aria-label": A,
          onClick: e => l(e, n, s, c, A),
          className: y.deleteButton,
          children: (0, r.jsx)(o.XHJ, {
            size: "xs",
            color: "currentColor",
            className: y.deleteIcon
          })
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
        }), t))
      }
    })]
  })
}

function C(e) {
  let {
    onComplete: t
  } = e, l = (0, s.e7)([c.default], () => c.default.getCurrentUser()), {
    avatars: i,
    loading: g,
    error: C
  } = (0, f.S)(), v = a.useRef([]), O = a.useRef(null), E = a.useRef(i.length), N = a.useRef(null), [S, w] = a.useState(false), [P, T] = a.useState(false), [R, _] = a.useState(null), F = null != R ? R : null == C ? true : C.message, Z = i.length, D = Math.max(b.iZ - Z, 0), I = (0, o.vRw)(), k = a.useCallback(async e => {
    if (null == l || S) return;
    w(true), _(null);
    let {
      id: a,
      storageHash: i,
      description: s
    } = e, c = (0, u.fD)({
      userId: l.id,
      avatarId: a,
      storageHash: i,
      size: m.dGM,
      canAnimate: true,
      allowWebp: false
    });
    try {
      let a = await fetch(c),
        l = await a.blob(),
        {
          filename: d,
          type: f
        } = (0, u.mh)(i, s);
      (0, o.ZDy)(async () => {
        let {
          default: a
        } = await Promise.all([n.e("59732"), n.e("11866")]).then(n.bind(n, 712451));
        return n => (0, r.jsx)(a, x({
          imageUri: c,
          file: new File([l], d, {
            type: f
          }),
          originalAsset: e,
          onCrop: t,
          uploadType: h.pC.AVATAR,
          showUpsellHeader: true
        }, n))
      }, {
        contextKey: I
      })
    } catch (e) {
      _(j.intl.string(j.t.fZRH9P))
    } finally {
      w(false)
    }
  }, [I, S, t, l]), M = a.useCallback((e, t, a, l, s) => {
    let c = t + 1 < i.length ? t + 1 : t - 1;
    N.current = c >= 0 ? v.current[c] : O.current, e.shiftKey ? (0, d.B)(a) : (T(true), (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("70871").then(n.bind(n, 225525));
      return t => {
        var {
          onClose: n
        } = t, i = function(e, t) {
          if (null == e) return {};
          var n, r, a = function(e, t) {
            if (null == e) return {};
            var n, r, a = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
          }
          return a
        }(t, ["onClose"]);
        return (0, r.jsx)(e, x({
          avatarId: a,
          storageHash: l,
          avatarDescription: s,
          onConfirmDelete: () => (0, d.B)(a),
          onClose: async () => {
            await n(), requestAnimationFrame(() => {
              T(false)
            })
          }
        }, i))
      }
    }))
  }, [i]);
  return (a.useEffect(() => {
    (0, d.N)()
  }, []), a.useEffect(() => {
    P || (i.length < E.current && null != N.current && requestAnimationFrame(() => {
      var e;
      null == (e = N.current) || e.focus()
    }), E.current = i.length)
  }, [i.length, P]), g) ? (0, r.jsx)(o.$jN, {
    className: y.spinner
  }) : (0, r.jsxs)("div", {
    className: y.recentAvatarContainer,
    children: [null != F && !g && (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-danger",
      children: F
    }), (0, r.jsxs)("div", {
      className: y.recentAvatarSlots,
      children: [Z > 0 && (0, r.jsx)("ul", {
        "aria-label": j.intl.string(j.t.lsU63N),
        className: y.recentAvatarList,
        children: i.map((e, t) => (0, r.jsx)("li", {
          children: (0, r.jsx)(A, {
            avatar: e,
            index: t,
            onSelectRecentAvatar: k,
            onDeleteRecentAvatar: M,
            avatarButtonRef: e => {
              v.current[t] = e
            }
          })
        }, e.id))
      }), D > 0 && (0, r.jsxs)("div", {
        className: y.emptyAvatarSlots,
        tabIndex: false,
        ref: O,
        children: [(0, r.jsxs)(o.nn4, {
          children: [0 === Z && (0, r.jsxs)(r.Fragment, {
            children: [j.intl.string(j.t.x0DsRU), " "]
          }), j.intl.format(j.t["8W2HOz"], {
            numberOfEmptyAvatarSlots: D
          })]
        }), [...Array(D)].map((e, t) => (0, r.jsx)(p.Z, {
          className: y.avatarPlaceholder
        }, t))]
      })]
    })]
  })
}

function v(e) {
  let {
    className: t,
    onComplete: n
  } = e;
  return (0, r.jsxs)("div", {
    className: i()(y.container, t),
    children: [(0, r.jsxs)("div", {
      children: [(0, r.jsx)(o.vwX, {
        className: y.recentAvatarsHeading,
        children: j.intl.string(j.t.Bnq9zM)
      }), (0, r.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: j.intl.format(j.t["+CyJu7"], {
          recentAvatarsLimit: b.iZ
        })
      })]
    }), (0, r.jsx)(C, {
      onComplete: n
    })]
  })
}