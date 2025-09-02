/** Chunk was on 85342 **/
/** chunk id: 544508, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk261616 = require("./261616.js"),
  Chunk399606 = require("./399606.js"),
  Chunk755721 = require("./755721.js"),
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
      style: r,
      value: i,
      placeholder: a,
      maxLength: s,
      onFocus: l,
      onChange: u
    } = e;
    return (0, n.jsx)(c.iS, {
      className: o()(_.userCardInput, r),
      autosize: true,
      error: null,
      showCharacterCount: false,
      spellCheck: false,
      showRemainingCharacterCount: false,
      value: i,
      placeholder: a,
      rows: 1,
      maxLength: s,
      onChange: u,
      onFocus: l,
      onKeyDown: e => {
        "Enter" === e.key && e.preventDefault()
      },
      inputRef: t
    })
  }),
  N = Chunk647438.forwardRef(function(e, t) {
    let {
      user: r,
      error: a,
      formValues: c,
      displayProfile: N,
      onChangeFormValue: j,
      onFocusDisplayName: T,
      onFocusUsername: I,
      editState: C,
      footerNotice: P,
      usernameSuggestionLoading: A,
      oneClickFlow: R
    } = e, {
      username: w,
      globalName: M
    } = c, L = i.useRef(null), k = i.useRef(null), D = i.useMemo(() => r.merge({
      discriminator: "0000"
    }), [r]), [U, Z] = (0, u.q_F)(() => ({
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
    }, [Z, C]), i.useImperativeHandle(t, () => ({
      focusDisplayName: () => {
        var e, t, r;
        null == (t = k.current) || t.setSelection(0, null == (e = k.current) ? true : e.value.length), null == (r = k.current) || r.focus()
      },
      focusUsername: () => {
        var e, t, r;
        null == (t = L.current) || t.setSelection(0, null == (e = L.current) ? true : e.value.length), null == (r = L.current) || r.focus()
      }
    }), []);
    let G = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
      {
        createMultipleConfettiAt: W
      } = i.useContext(m.h),
      F = null == N ? true : N.getLegacyUsername();
    return i.useEffect(() => {
      !G && C === O.Wq.PREVIEW && r.username.includes(O.nA) && (W(window.innerWidth / 2 + 150, 0, {
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
      }, 15), W(window.innerWidth / 2 - 150, 0, {
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
    }, [W, C, r, G]), (0, n.jsxs)("div", {
      className: o()(_.userCardContainer, {
        [_.shinyCard]: C === O.Wq.PREVIEW
      }),
      children: [(0, n.jsxs)("div", {
        className: _.profileCard,
        children: [(0, n.jsx)(f.Z, {
          user: D,
          displayProfile: N,
          themeType: b.l.SIDEBAR
        }), (0, n.jsx)(g.Z, {
          user: D,
          displayProfile: N,
          themeType: b.l.SIDEBAR
        }), C === O.Wq.PREVIEW && null != F && (0, n.jsx)("div", {
          className: _.legacyUsernameBadgeContainer,
          children: (0, n.jsx)(u.ua7, {
            position: "top",
            text: S.intl.formatToPlainString(S.t.bhrgkJ, {
              legacyUsername: F
            }),
            spacing: 12,
            children: e => {
              var t, r;
              return (0, n.jsx)(u.eee, (t = function(e) {
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
                  className: _.legacyUsernameBadge,
                  alt: "",
                  src: x
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
      }), C !== O.Wq.PREVIEW && (0, n.jsxs)(s.animated.div, {
        style: {
          opacity: U.opacity,
          y: U.y
        },
        className: _.inputContainer,
        children: [C === O.Wq.EDIT_DISPLAY_NAME && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(u.Text, {
            className: _.textPadding,
            color: "text-muted",
            variant: "text-sm/semibold",
            children: S.intl.string(S.t["9AjdkJ"])
          }), (0, n.jsx)(v, {
            style: o()(_.displayNameHeight, _["heading-xl/bold"]),
            value: null != M ? M : "",
            placeholder: p.ZP.getName(r),
            maxLength: O.hy,
            onChange: e => j({
              globalName: e
            }),
            onFocus: T,
            ref: k
          })]
        }), (C === O.Wq.EDIT_USERNAME || C === O.Wq.SUGGESTION) && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)(u.Text, {
            className: _.textPadding,
            color: "text-muted",
            variant: "text-sm/semibold",
            children: S.intl.string(S.t.IEpCBQ)
          }), (0, n.jsx)(v, {
            style: o()(_.userCardHeight, _.lowercaseUsername, _["heading-lg/medium"]),
            value: null != w ? w : "",
            placeholder: r.username,
            maxLength: O.hy,
            onChange: e => j({
              username: e.replace("@", "")
            }),
            onFocus: I,
            ref: L
          })]
        }), (0, n.jsx)("div", {
          className: _.messageContainer,
          children: (() => {
            if (null != a) return (0, n.jsx)(h.Z, {
              type: "error",
              children: a
            });
            if (null != P) {
              if (C !== O.Wq.SUGGESTION) return (0, n.jsx)(u.Text, {
                variant: "text-sm/normal",
                children: P
              });
              else if (!A) return (0, n.jsx)(h.Z, {
                type: "success",
                children: P
              })
            }
            return null == P && null == a && (C === O.Wq.EDIT_USERNAME || C === O.Wq.SUGGESTION) ? (0, n.jsx)(y.Z, {
              username: w,
              oneClickFlow: R
            }) : null
          })()
        })]
      }), C === O.Wq.PREVIEW && (0, n.jsxs)("div", {
        className: _.userCard,
        children: [(0, n.jsx)(u.X6q, {
          color: "header-primary",
          variant: "heading-xl/bold",
          children: p.ZP.getName(r)
        }), (0, n.jsx)(u.X6q, {
          color: "text-default",
          variant: "heading-lg/medium",
          children: r.username
        }), (0, n.jsx)(u.Text, {
          className: _.memberText,
          color: "text-muted",
          variant: "text-sm/medium",
          children: S.intl.format(S.t["9rfonp"], {
            date: (0, E.K9)(r.id)
          })
        })]
      })]
    })
  })