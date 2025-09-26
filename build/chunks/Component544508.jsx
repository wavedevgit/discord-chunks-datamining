/** Chunk was on 85342 **/
/** chunk id: 544508, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk786920 = require("./786920.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk745510 = require("./745510.jsx"),
  Chunk899007 = require("./899007.jsx"),
  Chunk867176 = require("./867176.jsx"),
  Chunk51144 = require("./51144.js"),
  Chunk346585 = require("./346585.js"),
  Chunk81259 = require("./81259.jsx"),
  Chunk119848 = require("./119848.jsx"),
  Chunk801461 = require("./801461.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk631936 = require("./631936.js"),
  Chunk733469 = require("./733469.js");
let v = Chunk647438.forwardRef(function(e, t) {
  let {
    user: r,
    error: o,
    formValues: v,
    displayProfile: j,
    onChangeFormValue: N,
    onFocusDisplayName: x,
    onFocusUsername: T,
    editState: I,
    footerNotice: P,
    usernameSuggestionLoading: C,
    oneClickFlow: A
  } = e, {
    username: R,
    globalName: w
  } = v, M = i.useRef(null), L = i.useRef(null), k = i.useMemo(() => r.merge({
    discriminator: "0000"
  }), [r]), [D, Z] = (0, c.q_F)(() => ({
    opacity: 0,
    y: 5
  }));
  i.useEffect(() => {
    Z({
      y: 0,
      opacity: 1,
      from: {
        y: 5,
        opacity: 0
      }
    })
  }, [Z, I]), i.useImperativeHandle(t, () => ({
    focusDisplayName: () => {
      var e;
      null == (e = L.current) || e.focus()
    },
    focusUsername: () => {
      var e;
      null == (e = M.current) || e.focus()
    }
  }), []);
  let U = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
    {
      createMultipleConfettiAt: G
    } = i.useContext(d.h),
    W = null == j ? true : j.getLegacyUsername();
  return i.useEffect(() => {
    !U && I === O.Wq.PREVIEW && r.username.includes(O.nA) && (G(window.innerWidth / 2 + 150, 0, {
      velocity: {
        type: "static-random",
        minValue: {
          x: 0,
          y: false
        },
        maxValue: {
          x: 500,
          y: 180
        }
      }
    }, 15), G(window.innerWidth / 2 - 150, 0, {
      velocity: {
        type: "static-random",
        minValue: {
          x: false,
          y: false
        },
        maxValue: {
          x: 0,
          y: 180
        }
      }
    }, 15))
  }, [G, I, r, U]), (0, n.jsxs)("div", {
    className: a()(S.userCardContainer, {
      [S.shinyCard]: I === O.Wq.PREVIEW
    }),
    children: [(0, n.jsxs)("div", {
      className: S.profileCard,
      children: [(0, n.jsx)(g.Z, {
        user: k,
        displayProfile: j,
        themeType: h.l.SIDEBAR
      }), (0, n.jsx)(m.Z, {
        user: k,
        displayProfile: j,
        themeType: h.l.SIDEBAR,
        className: S.avatar
      }), I === O.Wq.PREVIEW && null != W && (0, n.jsx)("div", {
        className: S.legacyUsernameBadgeContainer,
        children: (0, n.jsx)(c.ua7, {
          position: "top",
          text: b.intl.formatToPlainString(b.t.bhrgkJ, {
            legacyUsername: W
          }),
          spacing: 12,
          children: e => {
            var t, r;
            return (0, n.jsx)(c.eee, (t = function(e) {
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
            }({}, e), r = r = {
              onClick: e.onClick,
              children: (0, n.jsx)("img", {
                className: S.legacyUsernameBadge,
                alt: "",
                src: _
              })
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
        })
      })]
    }), I !== O.Wq.PREVIEW && (0, n.jsxs)(s.animated.div, {
      style: {
        opacity: D.opacity,
        y: D.y
      },
      className: S.inputContainer,
      children: [(0, n.jsxs)(c.Kqy, {
        gap: 16,
        children: [I === O.Wq.EDIT_DISPLAY_NAME && (0, n.jsx)(c.oil, {
          label: b.intl.string(b.t["9AjdkJ"]),
          value: null != w ? w : "",
          placeholder: f.ZP.getName(r),
          maxLength: O.hy,
          onChange: e => N({
            globalName: e
          }),
          onFocus: x,
          inputRef: L
        }), (I === O.Wq.EDIT_USERNAME || I === O.Wq.SUGGESTION) && (0, n.jsx)(c.oil, {
          label: b.intl.string(b.t.IEpCBQ),
          leading: "@",
          value: null != R ? R : "",
          placeholder: r.username,
          maxLength: O.hy,
          onChange: e => N({
            username: e.replace("@", "")
          }),
          onFocus: T,
          inputRef: M
        })]
      }), (0, n.jsx)("div", {
        className: S.messageContainer,
        children: (() => {
          if (null != o) return (0, n.jsx)(p.Z, {
            type: "error",
            children: o
          });
          if (null != P) {
            if (I !== O.Wq.SUGGESTION) return (0, n.jsx)(c.Text, {
              variant: "text-sm/normal",
              children: P
            });
            else if (!C) return (0, n.jsx)(p.Z, {
              type: "success",
              children: P
            })
          }
          return null == P && null == o && (I === O.Wq.EDIT_USERNAME || I === O.Wq.SUGGESTION) ? (0, n.jsx)(y.Z, {
            username: R,
            oneClickFlow: A
          }) : null
        })()
      })]
    }), I === O.Wq.PREVIEW && (0, n.jsxs)("div", {
      className: S.userCard,
      children: [(0, n.jsx)(c.X6q, {
        color: "header-primary",
        variant: "heading-xl/bold",
        children: f.ZP.getName(r)
      }), (0, n.jsx)(c.X6q, {
        color: "text-default",
        variant: "heading-lg/medium",
        children: r.username
      }), (0, n.jsx)(c.Text, {
        className: S.memberText,
        color: "text-muted",
        variant: "text-sm/medium",
        children: b.intl.format(b.t["9rfonp"], {
          date: (0, E.K9)(r.id)
        })
      })]
    })]
  })
})