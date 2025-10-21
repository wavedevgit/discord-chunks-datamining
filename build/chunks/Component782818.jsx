/** Chunk was on 89289 **/
/** chunk id: 782818, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
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
  Chunk900400 = require("./900400.js");

function y(e) {
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

function C(e) {
  let {
    avatar: t,
    index: n,
    onSelectRecentAvatar: l,
    onDeleteRecentAvatar: a,
    avatarButtonRef: i
  } = e, {
    id: s,
    storageHash: u,
    description: d = A.intl.string(A.t.lqaIxM)
  } = t, {
    avatarSrc: f,
    eventHandlers: p
  } = (0, m.Z)({
    avatarId: s,
    storageHash: u
  }), {
    onMouseEnter: g,
    onMouseLeave: h
  } = p, b = null != d ? d : u.substring(0, 6).toUpperCase(), j = A.intl.formatToPlainString(A.t["tmJ75+"], {
    orderNumber: n + 1,
    description: b
  }), y = A.intl.formatToPlainString(A.t.pBzwhY, {
    orderNumber: n + 1,
    description: b
  });
  return (0, r.jsxs)("div", {
    className: x.recentAvatarButtonContainer,
    children: [(0, r.jsx)(c.P3F, {
      onClick: () => l(t),
      onMouseEnter: g,
      onMouseLeave: h,
      className: x.recentAvatarButton,
      "aria-label": j,
      innerRef: i,
      children: (0, r.jsx)("img", {
        src: f,
        alt: d,
        className: x.recentAvatar
      })
    }), (0, r.jsx)(o.u, {
      text: A.intl.string(A.t.N86XcH),
      children: (0, r.jsx)(c.P3F, {
        "aria-label": y,
        onClick: e => a(e, n, s, u, y),
        className: x.deleteButton,
        children: (0, r.jsx)(c.XHJ, {
          size: "xs",
          color: "currentColor",
          className: x.deleteIcon
        })
      })
    })]
  })
}

function v(e) {
  let {
    onComplete: t
  } = e, a = (0, s.e7)([u.default], () => u.default.getCurrentUser()), {
    avatars: i,
    loading: o,
    error: m
  } = (0, p.S)(), v = l.useRef([]), E = l.useRef(null), O = l.useRef(i.length), N = l.useRef(null), [S, T] = l.useState(false), [w, R] = l.useState(false), [P, F] = l.useState(null), _ = null != P ? P : null == m ? true : m.message, Z = i.length, I = Math.max(j.iZ - Z, 0), k = (0, c.vRw)(), D = l.useCallback(async e => {
    if (null == a || S) return;
    T(true), F(null);
    let {
      id: l,
      storageHash: i,
      description: s
    } = e, o = (0, d.fD)({
      userId: a.id,
      avatarId: l,
      storageHash: i,
      size: h.dGM,
      canAnimate: true,
      allowWebp: false
    });
    try {
      let l = await fetch(o),
        a = await l.blob(),
        {
          filename: u,
          type: f
        } = (0, d.mh)(i, s);
      (0, c.ZDy)(async () => {
        let {
          default: l
        } = await Promise.all([n.e("59732"), n.e("96033")]).then(n.bind(n, 712451));
        return n => (0, r.jsx)(l, y({
          imageUri: o,
          file: new File([a], u, {
            type: f
          }),
          originalAsset: e,
          onCrop: t,
          uploadType: b.pC.AVATAR,
          showUpsellHeader: true
        }, n))
      }, {
        contextKey: k
      })
    } catch (e) {
      F(A.intl.string(A.t.fZRH9P))
    } finally {
      T(false)
    }
  }, [k, S, t, a]), M = l.useCallback((e, t, l, a, s) => {
    let o = t + 1 < i.length ? t + 1 : t - 1;
    N.current = o >= 0 ? v.current[o] : E.current, e.shiftKey ? (0, f.B)(l) : (R(true), (0, c.ZDy)(async () => {
      let {
        default: e
      } = await n.e("70871").then(n.bind(n, 225525));
      return t => {
        var {
          onClose: n
        } = t, i = function(e, t) {
          if (null == e) return {};
          var n, r, l = function(e, t) {
            if (null == e) return {};
            var n, r, l = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
            return l
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
          }
          return l
        }(t, ["onClose"]);
        return (0, r.jsx)(e, y({
          avatarId: l,
          storageHash: a,
          avatarDescription: s,
          onConfirmDelete: () => (0, f.B)(l),
          onClose: async () => {
            await n(), requestAnimationFrame(() => {
              R(false)
            })
          }
        }, i))
      }
    }))
  }, [i]);
  return (l.useEffect(() => {
    (0, f.N)()
  }, []), l.useEffect(() => {
    w || (i.length < O.current && null != N.current && requestAnimationFrame(() => {
      var e;
      null == (e = N.current) || e.focus()
    }), O.current = i.length)
  }, [i.length, w]), o) ? (0, r.jsx)(c.$jN, {
    className: x.spinner
  }) : (0, r.jsxs)("div", {
    className: x.recentAvatarContainer,
    children: [null != _ && !o && (0, r.jsx)(c.Text, {
      variant: "text-sm/normal",
      color: "text-danger",
      children: _
    }), (0, r.jsxs)("div", {
      className: x.recentAvatarSlots,
      children: [Z > 0 && (0, r.jsx)("ul", {
        "aria-label": A.intl.string(A.t.lsU63N),
        className: x.recentAvatarList,
        children: i.map((e, t) => (0, r.jsx)("li", {
          children: (0, r.jsx)(C, {
            avatar: e,
            index: t,
            onSelectRecentAvatar: D,
            onDeleteRecentAvatar: M,
            avatarButtonRef: e => {
              v.current[t] = e
            }
          })
        }, e.id))
      }), I > 0 && (0, r.jsxs)("div", {
        className: x.emptyAvatarSlots,
        tabIndex: false,
        ref: E,
        children: [(0, r.jsxs)(c.nn4, {
          children: [0 === Z && (0, r.jsxs)(r.Fragment, {
            children: [A.intl.string(A.t.x0DsRU), " "]
          }), A.intl.format(A.t["8W2HOz"], {
            numberOfEmptyAvatarSlots: I
          })]
        }), [...Array(I)].map((e, t) => (0, r.jsx)(g.Z, {
          className: x.avatarPlaceholder
        }, t))]
      })]
    })]
  })
}

function E(e) {
  let {
    className: t,
    onComplete: n
  } = e;
  return (0, r.jsx)("div", {
    className: i()(x.container, t),
    children: (0, r.jsx)(c.gNt, {
      label: A.intl.string(A.t.Bnq9zM),
      description: A.intl.format(A.t["+CyJu7"], {
        recentAvatarsLimit: j.iZ
      }),
      children: (0, r.jsx)(v, {
        onComplete: n
      })
    })
  })
}