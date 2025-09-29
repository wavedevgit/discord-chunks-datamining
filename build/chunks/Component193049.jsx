/** Chunk was on 85342 **/
/** chunk id: 193049, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk990547 = require("./990547.js"),
  Chunk399606 = require("./399606.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk232567 = require("./232567.js"),
  Chunk809206 = require("./809206.js"),
  Chunk479531 = require("./479531.js"),
  Chunk484459 = require("./484459.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk51144 = require("./51144.js"),
  Chunk986197 = require("./986197.js"),
  Chunk135200 = require("./135200.js"),
  Chunk346585 = require("./346585.js"),
  Chunk361117 = require("./361117.js"),
  Chunk108793 = require("./108793.jsx"),
  Chunk635774 = require("./635774.jsx"),
  Chunk387955 = require("./387955.jsx"),
  Chunk801461 = require("./801461.js"),
  Chunk448624 = require("./448624.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk225562 = require("./225562.js");

function C(e) {
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

function A(e) {
  let t, {
      source: r,
      transitionState: o,
      onClose: A,
      oneClickFlow: w = false
    } = e,
    [M, L] = i.useState(w ? x.A.SUGGESTIONS : x.A.INFO),
    [k, D] = i.useState(false),
    [Z, U] = i.useState(null),
    [G, W] = i.useState(w ? N.Wq.SUGGESTION : N.Wq.NONE),
    [q, F] = i.useState(false),
    [z, B] = i.useState(false),
    H = i.useRef(null),
    V = (0, l.e7)([h.Z], () => h.Z.isCurrentUsernameInvalid()),
    K = (0, l.e7)([E.default], () => {
      let e = E.default.getCurrentUser();
      return a()(null != e, "PomeloModal: user cannot be undefined"), e
    }),
    {
      usernameSuggestion: X,
      usernameSuggestionLoading: Y
    } = (0, S.G)(w ? N.en : true);
  i.useEffect(() => {
    G === N.Wq.EDIT_USERNAME && B(true), p.default.track(T.rMx.POMELO_EDIT_STEP_VIEWED, {
      source: r,
      step: G
    })
  }, [G, r]), i.useEffect(() => {
    z || q || null == X || !(X.length > 0) || $(e => {
      var t, r;
      return t = C({}, e), r = r = {
        username: X
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t
    })
  }, [X, z, q]);
  let [Q, $] = i.useState({
    username: (0, b.e$)(K),
    globalName: y.ZP.getName(K)
  }), J = e => {
    U(null), null != e.username && F(true), $(t => C({}, t, e))
  }, ee = i.useMemo(() => [{
    slideId: x.A.INFO,
    next: x.A.EDIT_SCREEN,
    footerButtons: ["REMIND_ME_LATER", "GET_STARTED"]
  }, {
    slideId: x.A.EDIT_SCREEN,
    next: x.A.FINISH_LATER,
    back: x.A.INFO,
    footerButtons: [G === N.Wq.PREVIEW ? "GOT_IT" : "BACK", G === N.Wq.PREVIEW ? "GOT_IT" : G === N.Wq.EDIT_USERNAME ? "SUBMIT" : "NEXT"]
  }, {
    slideId: x.A.FINISH_LATER,
    back: x.A.EDIT_SCREEN
  }, {
    slideId: x.A.SUGGESTIONS,
    footerButtons: [G === N.Wq.PREVIEW ? "GOT_IT" : "UPDATE"]
  }, {
    slideId: x.A.FINISH_LATER
  }], [G]), et = ee.length, er = i.useCallback(async () => {
    if (Q.globalName.length <= 0) {
      let e = I.intl.formatToPlainString(I.t.IpijXF, {
        minNum: 1,
        maxNum: 32
      });
      U(e), p.default.track(T.rMx.POMELO_ERRORS, {
        reason: e,
        display_name_error: true,
        location: "modal"
      });
      return
    }
    if (y.ZP.getGlobalName(K) === Q.globalName) return void W(N.Wq.EDIT_USERNAME);
    try {
      U(null), D(true), await (0, m.S2)({
        global_name: Q.globalName
      }), W(N.Wq.EDIT_USERNAME)
    } catch (t) {
      let e = new g.Z(t).getAnyErrorMessage();
      p.default.track(T.rMx.POMELO_ERRORS, {
        reason: e,
        display_name_error: true,
        location: "modal"
      }), U(e)
    } finally {
      D(false)
    }
  }, [K, Q]), en = i.useCallback(async () => {
    try {
      U(null), D(true), await O.Z.createPomelo({
        username: (0, b.R_)(Q.username)
      }, w), await (0, d.In)(K.id), W(N.Wq.PREVIEW)
    } catch (r) {
      let e = new g.Z(r),
        t = (null == e ? true : e.status) != null && e.status >= 400 && e.status < 500 ? e.getAnyErrorMessage() : I.intl.string(I.t.R0RpRU);
      U(t), p.default.track(T.rMx.POMELO_ERRORS, {
        reason: t,
        username_error: true,
        location: "modal",
        one_click_flow: w
      })
    } finally {
      D(false)
    }
  }, [Q, K.id, w]), ei = V || (0, b.NX)(K), eo = i.useCallback(() => {
    W(ei ? N.Wq.EDIT_USERNAME : N.Wq.EDIT_DISPLAY_NAME), L(ee[Math.min(et - 1, M + 1)].slideId)
  }, [M, ee, et, ei]), ea = i.useCallback(() => {
    U(null), M === x.A.EDIT_SCREEN ? G === N.Wq.EDIT_USERNAME ? ei ? (W(N.Wq.NONE), L(ee[Math.max(0, M - 1)].slideId)) : W(N.Wq.EDIT_DISPLAY_NAME) : G === N.Wq.EDIT_DISPLAY_NAME ? (W(N.Wq.NONE), L(ee[Math.max(0, M - 1)].slideId)) : G === N.Wq.PREVIEW && W(N.Wq.EDIT_USERNAME) : L(ee[Math.max(0, M - 1)].slideId)
  }, [ee, M, G, ei]), es = i.useCallback(() => {
    L(x.A.FINISH_LATER)
  }, []), el = i.useMemo(() => M === x.A.EDIT_SCREEN && G === N.Wq.EDIT_DISPLAY_NAME ? er : M === x.A.EDIT_SCREEN && G === N.Wq.EDIT_USERNAME ? en : M === x.A.SUGGESTIONS && G === N.Wq.SUGGESTION ? en : eo, [M, G, er, en, eo]), ec = i.useMemo(() => {
    var e, t;
    return R(null != (t = null == (e = ee.find(e => e.slideId === M)) ? true : e.footerButtons) ? t : [], {
      handleNext: el,
      handleBack: ea,
      handleRemindMeLater: es,
      onClose: A
    }, k, Y, q)
  }, [ea, es, el, A, ee, M, k, Y, q]), eu = i.useMemo(() => (0, b.zV)(K), [K]);
  return i.useLayoutEffect(() => {
    (0, f.Z)(K.id, eu)
  }, [K, eu]), i.useEffect(() => {
    var e, t;
    switch (G) {
      case N.Wq.EDIT_DISPLAY_NAME:
        null == (e = H.current) || e.focusDisplayName();
        break;
      case N.Wq.EDIT_USERNAME:
      case N.Wq.SUGGESTION:
        null == (t = H.current) || t.focusUsername()
    }
  }, [G]), !q && null == Z && (G === N.Wq.EDIT_USERNAME ? t = I.intl.formatToPlainString(I.t.AJh8BQ, {
    source: K.username
  }) : G === N.Wq.SUGGESTION && (Y || null != X) && (t = I.intl.string(I.t["i/2SgI"]))), (0, n.jsxs)(u.Y0X, {
    className: P.modalRoot,
    impression: {
      impressionName: s.ImpressionNames.POMELO_LANDING,
      impressionProperties: {
        source: r,
        impression_group: s.ImpressionGroups.POMELO_FLOW,
        one_click_flow: w
      }
    },
    transitionState: o,
    size: u.CgR.DYNAMIC,
    parentComponent: "PomeloModal",
    children: [(0, n.jsx)(c.zx, {
      onClick: () => {
        M === x.A.SUGGESTIONS || M === x.A.EDIT_SCREEN ? L(x.A.FINISH_LATER) : A()
      },
      size: c.zx.Sizes.MIN,
      look: c.zx.Looks.BLANK,
      className: P.closeContainer,
      "aria-label": I.intl.string(I.t.cpT0Cg),
      children: (0, n.jsx)(u.Dio, {
        size: "custom",
        color: "currentColor",
        width: 15,
        height: 15,
        className: P.close
      })
    }), (0, n.jsx)(u.hzk, {
      className: P.contentContainer,
      children: (0, n.jsxs)(u.MyZ, {
        activeSlide: M,
        width: 480,
        children: [(0, n.jsx)(u.Mi4, {
          id: x.A.INFO,
          children: (0, n.jsx)(j.Z, {
            user: K
          })
        }), (0, n.jsx)(u.Mi4, {
          id: x.A.EDIT_SCREEN,
          children: (0, n.jsx)(_.Z, {
            user: K,
            error: Z,
            editState: G,
            userRef: H,
            formValues: Q,
            footerNotice: t,
            onChangeFormValue: J,
            onFocusUsername: () => W(N.Wq.EDIT_USERNAME),
            onFocusDisplayName: () => W(N.Wq.EDIT_DISPLAY_NAME),
            onClose: A
          })
        }), (0, n.jsx)(u.Mi4, {
          id: x.A.FINISH_LATER,
          children: (0, n.jsx)(v.Z, {
            onClose: A
          })
        }), (0, n.jsx)(u.Mi4, {
          id: x.A.SUGGESTIONS,
          children: (0, n.jsx)(_.Z, {
            user: K,
            error: Z,
            editState: G,
            userRef: H,
            formValues: Q,
            footerNotice: t,
            onChangeFormValue: J,
            onFocusUsername: () => W(N.Wq.SUGGESTION),
            onFocusDisplayName: () => W(N.Wq.EDIT_DISPLAY_NAME),
            onClose: A,
            usernameSuggestionLoading: Y,
            oneClickFlow: w
          })
        })]
      })
    }), ec]
  })
}
let R = (e, t, r, i, o) => 0 === e.length ? null : (0, n.jsxs)(u.mzw, {
  className: P.footer,
  children: [(0, n.jsxs)("div", {
    className: P.inline,
    children: [e.includes("REMIND_ME_LATER") && (0, n.jsx)(c.zx, {
      className: P.unfilledButton,
      type: "button",
      size: c.zx.Sizes.SMALL,
      look: c.zx.Looks.BLANK,
      color: c.zx.Colors.CUSTOM,
      onClick: t.handleRemindMeLater,
      children: I.intl.string(I.t["1mGbXF"])
    }), e.includes("NEXT") && (0, n.jsx)(u.zxk, {
      variant: "primary",
      size: "sm",
      text: I.intl.string(I.t.PDTjLC),
      type: "button",
      loading: r,
      onClick: t.handleNext
    }), e.includes("SUBMIT") && (0, n.jsx)(u.zxk, {
      variant: "primary",
      size: "sm",
      text: I.intl.string(I.t.geKm7u),
      type: "button",
      loading: r,
      onClick: t.handleNext
    }), e.includes("GET_STARTED") && (0, n.jsx)(u.zxk, {
      variant: "primary",
      size: "sm",
      text: I.intl.string(I.t.LhlgY2),
      type: "button",
      onClick: t.handleNext
    }), e.includes("GOT_IT") && (0, n.jsx)(u.zxk, {
      variant: "primary",
      size: "sm",
      text: I.intl.string(I.t["NX+WJC"]),
      type: "button",
      onClick: t.onClose
    }), e.includes("UPDATE") && (0, n.jsx)(u.zxk, {
      variant: "primary",
      size: "sm",
      text: I.intl.string(I.t.VZANAA),
      type: "button",
      disabled: i && !o,
      loading: r,
      onClick: t.handleNext
    })]
  }), e.includes("BACK") && (0, n.jsx)(c.zx, {
    className: P.unfilledButton,
    type: "button",
    size: c.zx.Sizes.SMALL,
    look: c.zx.Looks.BLANK,
    color: c.zx.Colors.CUSTOM,
    onClick: t.handleBack,
    children: I.intl.string(I.t["13/7kZ"])
  })]
})