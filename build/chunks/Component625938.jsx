/** Chunk was on 36499 **/
/** chunk id: 625938, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => Z
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
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
  Chunk805787 = require("./805787.js");

function P(e) {
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
let I = e => {
    let {
      style: t,
      className: n,
      name: i,
      icon: l
    } = e;
    return (0, r.jsx)(d.ua7, {
      text: i,
      children: e => {
        var i, o;
        return (0, r.jsx)("div", (i = P({
          className: a()(n, S.iconWidget),
          style: t
        }, e), o = o = {
          children: null != l && l
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
        }), i))
      }
    })
  },
  Z = e => {
    let {
      currentStatus: t,
      channel: l
    } = e, o = i.useRef(y.Z.getRecentCustomStatuses()), [Z, T] = i.useState(false), N = (0, _.V)(), [A, w] = i.useState(null != t ? t : null), R = (0, c.e7)([m.default], () => m.default.getCurrentUser()), M = i.useMemo(() => [], []), k = i.useRef(null).current;
    i.useEffect(() => (Z || M.push(u.z.HANG_STATUS_NEW_BADGE), () => {
      Z && (null == k || k(j.L.PRIMARY))
    }), [Z, M, k]);
    let D = i.useCallback(e => {
        e.stopPropagation(), (0, b.Sc)(true)
      }, []),
      L = e => {
        e.stopPropagation(), (0, d.ZDy)(async () => {
          let {
            default: e
          } = await n.e("1631").then(n.bind(n, 333541));
          return t => (0, r.jsx)(e, P({}, t))
        }), T(true)
      },
      U = i.useCallback(e => {
        w({
          type: v.IIU.HANG_STATUS,
          name: "Hang Status",
          state: e
        })
      }, []),
      B = i.useCallback(e => {
        w({
          type: v.IIU.HANG_STATUS,
          name: "Hang Status",
          state: O.tN.CUSTOM,
          details: e.status,
          emoji: e.emoji
        })
      }, []);
    return (0, r.jsx)(f.ZP, {
      contentTypes: M,
      children: e => {
        let {
          visibleContent: n,
          markAsDismissed: i
        } = e;
        return k = i, (0, r.jsxs)("div", {
          className: S.container,
          children: [n === u.z.HANG_STATUS_NEW_BADGE && (0, r.jsxs)("div", {
            className: S.onboarding,
            children: [(0, r.jsxs)("div", {
              className: S.title,
              children: [(0, r.jsx)(d.Text, {
                variant: "text-md/semibold",
                color: "header-primary",
                children: E.intl.string(E.t["8ka8lp"])
              }), (0, r.jsx)(d.IGR, {
                text: E.intl.string(E.t.oW0eUV),
                color: h.Z.BG_BRAND
              })]
            }), (0, r.jsx)(d.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: S.helpText,
              children: E.intl.string(E.t.GFo2Gh)
            }), (0, r.jsxs)("div", {
              className: S.iconGroup,
              children: [null != R && (0, r.jsxs)("div", {
                className: S.avatarWrapper,
                children: [(0, r.jsx)(d.qEK, {
                  className: S.avatar,
                  size: d.EFr.SIZE_40,
                  src: (0, g.ov)(R),
                  "aria-hidden": true
                }), (0, r.jsx)("div", {
                  className: S.outline
                })]
              }), (0, r.jsx)(x.Z, {
                className: S.statusIcon,
                hangStatusActivity: A
              })]
            })]
          }), (0, r.jsxs)("div", {
            className: S.options,
            children: [(0, r.jsxs)("div", {
              className: S.iconsContainer,
              children: [Object.entries(N).map(e => {
                let [n, i] = e;
                return (0, r.jsx)(d.P3F, {
                  "aria-label": i.title,
                  onMouseEnter: () => U(n),
                  onClick: e => {
                    e.stopPropagation(), (0, b.Zx)(n, true), T(true)
                  },
                  children: (0, r.jsx)(I, {
                    className: a()(S.iconWidget, {
                      [S.selectedWidget]: n === (null == t ? true : t.state)
                    }),
                    name: i.title,
                    icon: (0, r.jsx)("img", {
                      src: i.icon,
                      alt: "",
                      className: S.icon
                    }),
                    style: n === (null == t ? true : t.state) ? {
                      backgroundColor: null != i.color ? i.color : true
                    } : {}
                  })
                }, n)
              }), (0, r.jsx)(d.P3F, {
                "aria-label": E.intl.string(E.t.S90Fub),
                onClick: D,
                onMouseEnter: () => w(null),
                children: (0, r.jsx)(I, {
                  className: S.optionButton,
                  name: E.intl.string(E.t.S90Fub),
                  icon: (0, r.jsx)(d.t6m, {
                    size: "md",
                    color: "currentColor",
                    className: S.editIcon,
                    colorClass: S.editIconColor
                  })
                })
              })]
            }), (0, r.jsx)("div", {
              className: S.divider
            }), (0, r.jsxs)("div", {
              className: S.iconsContainer,
              children: [o.current.map((e, n) => {
                let i = e.status === (null == t ? true : t.details) && s().isEqual(e.emoji, null == t ? true : t.emoji),
                  o = null != e.emoji && !(0, C.K)(e.emoji, l);
                return (0, r.jsxs)(d.P3F, {
                  "aria-label": e.status,
                  onMouseEnter: () => B(e),
                  onClick: o ? true : t => {
                    t.stopPropagation(), (0, b._s)(e.status, e.emoji, true), T(true)
                  },
                  className: S.statusOptionContainer,
                  children: [(0, r.jsx)(I, {
                    className: a()(S.iconWidget, {
                      [S.selectedWidget]: i
                    }),
                    name: e.status,
                    icon: null != e.emoji ? (0, r.jsx)(p.Z, {
                      className: S.customIcon,
                      emoji: e.emoji,
                      hideTooltip: true
                    }) : null,
                    style: i ? {
                      backgroundColor: "#7174B7B3"
                    } : {
                      backgroundColor: "#6466914D"
                    }
                  }), o ? (0, r.jsx)("div", {
                    className: S.emojiLockIconContainer,
                    children: (0, r.jsx)(d.mBM, {
                      size: "xs",
                      color: "currentColor",
                      className: S.emojiLockIcon
                    })
                  }) : null]
                }, "custom-status-".concat(n))
              }), o.current.length > 0 ? (0, r.jsx)(d.P3F, {
                "aria-label": null != t ? E.intl.string(E.t.IN2LTk) : E.intl.string(E.t.UDg0qK),
                onClick: L,
                children: (0, r.jsx)(I, {
                  className: S.optionButton,
                  name: null != t ? E.intl.string(E.t.IN2LTk) : E.intl.string(E.t.UDg0qK),
                  icon: (0, r.jsx)(d.vdY, {
                    size: "custom",
                    color: "currentColor",
                    width: 20,
                    height: 20,
                    colorClass: S.editIconColor
                  })
                })
              }, "custom-status-edit") : (0, r.jsxs)(d.P3F, {
                "aria-label": E.intl.string(E.t.UDg0qK),
                onClick: L,
                className: S.setCustomButton,
                children: [(0, r.jsx)(d.vdY, {
                  size: "xs",
                  color: "currentColor",
                  className: S.editIcon,
                  colorClass: S.editIconColor
                }), (0, r.jsx)(d.Text, {
                  variant: "text-xs/medium",
                  color: "interactive-active",
                  children: E.intl.string(E.t.UDg0qK)
                })]
              }, "custom-status-edit-full")]
            })]
          })]
        })
      }
    })
  }