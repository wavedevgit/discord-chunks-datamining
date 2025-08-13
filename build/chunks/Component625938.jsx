/** Chunk was on web.js **/
/** chunk id: 625938, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => D
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk584973 = require("./584973.jsx"),
  Chunk377171 = require("./377171.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk906605 = require("./906605.js"),
  Chunk106301 = require("./106301.js"),
  Chunk833858 = require("./833858.js"),
  Chunk866071 = require("./866071.js"),
  Chunk223135 = require("./223135.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk1165 = require("./1165.js");

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function C(e) {
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

function R(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function P(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : R(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let w = e => {
    let {
      style: t,
      className: n,
      name: i,
      icon: o
    } = e;
    return (0, r.jsx)(d.ua7, {
      text: i,
      children: e => (0, r.jsx)("div", P(C({
        className: a()(n, A.iconWidget),
        style: t
      }, e), {
        children: null != o && o
      }))
    })
  },
  D = e => {
    let {
      currentStatus: t,
      channel: o
    } = e, s = i.useRef(E.Z.getRecentCustomStatuses()), [N, R] = i.useState(false), P = (0, b.V)(), [D, L] = i.useState(null != t ? t : null), x = (0, c.e7)([h.default], () => h.default.getCurrentUser()), M = i.useMemo(() => [], []), k = i.useRef(null).current;
    i.useEffect(() => (N || M.push(u.z.HANG_STATUS_NEW_BADGE), () => {
      N && (null == k || k(I.L.PRIMARY))
    }), [N, M, k]);
    let j = (e, t) => {
        e.stopPropagation(), (0, g.Zx)(t, true), R(true)
      },
      U = (e, t) => {
        e.stopPropagation(), (0, g._s)(t.status, t.emoji, true), R(true)
      },
      G = i.useCallback(e => {
        e.stopPropagation(), (0, g.Sc)(true)
      }, []),
      B = e => {
        e.stopPropagation(), (0, d.ZDy)(async () => {
          let {
            default: e
          } = await n.e("1631").then(n.bind(n, 333541));
          return t => (0, r.jsx)(e, C({}, t))
        }), R(true)
      },
      Z = i.useCallback(e => {
        L({
          type: v.IIU.HANG_STATUS,
          name: "Hang Status",
          state: e
        })
      }, []),
      F = i.useCallback(e => {
        L({
          type: v.IIU.HANG_STATUS,
          name: "Hang Status",
          state: T.tN.CUSTOM,
          details: e.status,
          emoji: e.emoji
        })
      }, []);
    return (0, r.jsx)(p.ZP, {
      contentTypes: M,
      children: e => {
        let {
          visibleContent: n,
          markAsDismissed: i
        } = e;
        return k = i, (0, r.jsxs)("div", {
          className: A.container,
          children: [n === u.z.HANG_STATUS_NEW_BADGE && (0, r.jsxs)("div", {
            className: A.onboarding,
            children: [(0, r.jsxs)("div", {
              className: A.title,
              children: [(0, r.jsx)(d.Text, {
                variant: "text-md/semibold",
                color: "header-primary",
                children: S.intl.string(S.t["8ka8lp"])
              }), (0, r.jsx)(d.IGR, {
                text: S.intl.string(S.t.oW0eUV),
                color: _.Z.BG_BRAND
              })]
            }), (0, r.jsx)(d.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: A.helpText,
              children: S.intl.string(S.t.GFo2Gh)
            }), (0, r.jsxs)("div", {
              className: A.iconGroup,
              children: [null != x && (0, r.jsxs)("div", {
                className: A.avatarWrapper,
                children: [(0, r.jsx)(d.qEK, {
                  className: A.avatar,
                  size: d.EFr.SIZE_40,
                  src: (0, m.ov)(x),
                  "aria-hidden": true
                }), (0, r.jsx)("div", {
                  className: A.outline
                })]
              }), (0, r.jsx)(O.Z, {
                className: A.statusIcon,
                hangStatusActivity: D
              })]
            })]
          }), (0, r.jsxs)("div", {
            className: A.options,
            children: [(0, r.jsxs)("div", {
              className: A.iconsContainer,
              children: [Object.entries(P).map(e => {
                let [n, i] = e;
                return (0, r.jsx)(d.P3F, {
                  "aria-label": i.title,
                  onMouseEnter: () => Z(n),
                  onClick: e => j(e, n),
                  children: (0, r.jsx)(w, {
                    className: a()(A.iconWidget, {
                      [A.selectedWidget]: n === (null == t ? true : t.state)
                    }),
                    name: i.title,
                    icon: (0, r.jsx)("img", {
                      src: i.icon,
                      alt: "",
                      className: A.icon
                    }),
                    style: n === (null == t ? true : t.state) ? {
                      backgroundColor: null != i.color ? i.color : true
                    } : {}
                  })
                }, n)
              }), (0, r.jsx)(d.P3F, {
                "aria-label": S.intl.string(S.t.S90Fub),
                onClick: G,
                onMouseEnter: () => L(null),
                children: (0, r.jsx)(w, {
                  className: A.optionButton,
                  name: S.intl.string(S.t.S90Fub),
                  icon: (0, r.jsx)(d.t6m, {
                    size: "md",
                    color: "currentColor",
                    className: A.editIcon,
                    colorClass: A.editIconColor
                  })
                })
              })]
            }), (0, r.jsx)("div", {
              className: A.divider
            }), (0, r.jsxs)("div", {
              className: A.iconsContainer,
              children: [s.current.map((e, n) => {
                let i = e.status === (null == t ? true : t.details) && l().isEqual(e.emoji, null == t ? true : t.emoji),
                  s = null != e.emoji && !(0, y.K)(e.emoji, o);
                return (0, r.jsxs)(d.P3F, {
                  "aria-label": e.status,
                  onMouseEnter: () => F(e),
                  onClick: s ? true : t => U(t, e),
                  className: A.statusOptionContainer,
                  children: [(0, r.jsx)(w, {
                    className: a()(A.iconWidget, {
                      [A.selectedWidget]: i
                    }),
                    name: e.status,
                    icon: null != e.emoji ? (0, r.jsx)(f.Z, {
                      className: A.customIcon,
                      emoji: e.emoji,
                      hideTooltip: true
                    }) : null,
                    style: i ? {
                      backgroundColor: "#7174B7B3"
                    } : {
                      backgroundColor: "#6466914D"
                    }
                  }), s ? (0, r.jsx)("div", {
                    className: A.emojiLockIconContainer,
                    children: (0, r.jsx)(d.mBM, {
                      size: "xs",
                      color: "currentColor",
                      className: A.emojiLockIcon
                    })
                  }) : null]
                }, "custom-status-".concat(n))
              }), s.current.length > 0 ? (0, r.jsx)(d.P3F, {
                "aria-label": null != t ? S.intl.string(S.t.IN2LTk) : S.intl.string(S.t.UDg0qK),
                onClick: B,
                children: (0, r.jsx)(w, {
                  className: A.optionButton,
                  name: null != t ? S.intl.string(S.t.IN2LTk) : S.intl.string(S.t.UDg0qK),
                  icon: (0, r.jsx)(d.vdY, {
                    size: "custom",
                    color: "currentColor",
                    width: 20,
                    height: 20,
                    colorClass: A.editIconColor
                  })
                })
              }, "custom-status-edit") : (0, r.jsxs)(d.P3F, {
                "aria-label": S.intl.string(S.t.UDg0qK),
                onClick: B,
                className: A.setCustomButton,
                children: [(0, r.jsx)(d.vdY, {
                  size: "xs",
                  color: "currentColor",
                  className: A.editIcon,
                  colorClass: A.editIconColor
                }), (0, r.jsx)(d.Text, {
                  variant: "text-xs/medium",
                  color: "interactive-active",
                  children: S.intl.string(S.t.UDg0qK)
                })]
              }, "custom-status-edit-full")]
            })]
          })]
        })
      }
    })
  }