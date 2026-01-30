/** Chunk was on 54160 **/
/** chunk id: 587510, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js"), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk970984 = require("./970984.js"),
  Chunk417597 = require("./417597.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk21161 = require("./21161.jsx"),
  Chunk718019 = require("./718019.jsx"),
  Chunk915614 = require("./915614.jsx"),
  Chunk427262 = require("./427262.js"),
  Chunk871210 = require("./871210.js"),
  Chunk885168 = require("./885168.jsx"),
  Chunk621866 = require("./621866.jsx"),
  Chunk789622 = require("./789622.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk299043 = require("./299043.js"),
  Chunk166723 = require("./166723.js");
let A = Chunk64700.forwardRef(function(e, t) {
  let {
    user: r,
    error: a,
    formValues: A,
    displayProfile: j,
    onChangeFormValue: N,
    onFocusDisplayName: x,
    onFocusUsername: I,
    editState: T,
    footerNotice: P,
    usernameSuggestionLoading: R,
    oneClickFlow: C
  } = e, {
    username: w,
    globalName: L
  } = A, M = i.useRef(null), D = i.useRef(null), G = i.useMemo(() => r.merge({
    discriminator: "0000"
  }), [r]), [k, U] = (0, u.zhh)(() => ({
    opacity: 0,
    y: 5
  }));
  i.useEffect(() => {
    U({
      y: 0,
      opacity: 1,
      from: {
        y: 5,
        opacity: 0
      }
    })
  }, [U, T]), i.useImperativeHandle(t, () => ({
    focusDisplayName: () => {
      var e;
      null == (e = D.current) || e.focus()
    },
    focusUsername: () => {
      var e;
      null == (e = M.current) || e.focus()
    }
  }), []);
  let F = (0, l.bG)([d.A], () => d.A.useReducedMotion),
    {
      createMultipleConfettiAt: B
    } = i.useContext(m.x),
    H = null == j ? true : j.getLegacyUsername();
  return i.useEffect(() => {
    F || T !== O.iv.PREVIEW || r.username.includes("pomelo") && (B(window.innerWidth / 2 + 150, 0, {
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
    }, 15), B(window.innerWidth / 2 - 150, 0, {
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
  }, [B, T, r, F]), (0, n.jsxs)("div", {
    className: s()(v.d3, {
      [v.Sr]: T === O.iv.PREVIEW
    }),
    children: [(0, n.jsxs)("div", {
      className: v.Kq,
      children: [(0, n.jsx)(f.A, {
        user: G,
        displayProfile: j,
        themeType: S.d.SIDEBAR
      }), (0, n.jsx)(g.A, {
        user: G,
        displayProfile: j,
        themeType: S.d.SIDEBAR,
        className: v.my
      }), T === O.iv.PREVIEW && null != H && (0, n.jsx)("div", {
        className: v.kB,
        children: (0, n.jsx)(c.m, {
          position: "top",
          text: b.intl.formatToPlainString(b.t.bhrgkA, {
            legacyUsername: H
          }),
          spacing: 12,
          children: (0, n.jsx)(u.MzZ, {
            children: (0, n.jsx)("img", {
              className: v.zF,
              alt: "",
              src: _
            })
          })
        })
      })]
    }), T !== O.iv.PREVIEW && (0, n.jsxs)(o.animated.div, {
      style: {
        opacity: k.opacity,
        y: k.y
      },
      className: v.Kf,
      children: [(0, n.jsxs)(u.BJc, {
        gap: 16,
        children: [T === O.iv.EDIT_DISPLAY_NAME && (0, n.jsx)(u.ksK, {
          label: b.intl.string(b.t["9AjdkD"]),
          value: null != L ? L : "",
          placeholder: E.Ay.getName(r),
          maxLength: 32,
          onChange: e => N({
            globalName: e
          }),
          onFocus: x,
          inputRef: D
        }), (T === O.iv.EDIT_USERNAME || T === O.iv.SUGGESTION) && (0, n.jsx)(u.ksK, {
          label: b.intl.string(b.t.IEpCBQ),
          leading: "@",
          value: null != w ? w : "",
          placeholder: r.username,
          maxLength: 32,
          onChange: e => N({
            username: e.replace("@", "")
          }),
          onFocus: I,
          inputRef: M
        })]
      }), (0, n.jsx)("div", {
        className: v.zC,
        children: (() => {
          if (null != a) return (0, n.jsx)(h.A, {
            type: "error",
            children: a
          });
          if (null != P) {
            if (T !== O.iv.SUGGESTION) return (0, n.jsx)(u.Text, {
              variant: "text-sm/normal",
              children: P
            });
            else if (!R) return (0, n.jsx)(h.A, {
              type: "success",
              children: P
            })
          }
          return null == P && null == a && (T === O.iv.EDIT_USERNAME || T === O.iv.SUGGESTION) ? (0, n.jsx)(y.A, {
            username: w,
            oneClickFlow: C
          }) : null
        })()
      })]
    }), T === O.iv.PREVIEW && (0, n.jsxs)("div", {
      className: v.Kg,
      children: [(0, n.jsx)(u.Heading, {
        color: "text-strong",
        variant: "heading-xl/bold",
        children: E.Ay.getName(r)
      }), (0, n.jsx)(u.Heading, {
        color: "text-default",
        variant: "heading-lg/medium",
        children: r.username
      }), (0, n.jsx)(u.Text, {
        className: v.WI,
        color: "text-muted",
        variant: "text-sm/medium",
        children: b.intl.format(b.t["9rfonh"], {
          date: (0, p.b5)(r.id)
        })
      })]
    })]
  })
})