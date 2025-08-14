/** Chunk was on 85342 **/
/** chunk id: 193049, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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
  Chunk770718 = require("./770718.js");

function P(e) {
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
      transitionState: a,
      onClose: A,
      oneClickFlow: w = false
    } = e,
    [M, L] = i.useState(w ? j.A.SUGGESTIONS : j.A.INFO),
    [k, D] = i.useState(false),
    [U, Z] = i.useState(null),
    [G, W] = i.useState(w ? N.Wq.SUGGESTION : N.Wq.NONE),
    [F, q] = i.useState(false),
    [z, B] = i.useState(false),
    H = i.useRef(null),
    V = (0, l.e7)([O.Z], () => O.Z.isCurrentUsernameInvalid()),
    K = (0, l.e7)([p.default], () => {
      let e = p.default.getCurrentUser();
      return o()(null != e, "PomeloModal: user cannot be undefined"), e
    }),
    {
      usernameSuggestion: X,
      usernameSuggestionLoading: Y
    } = (0, S.G)(w ? N.en : true);
  i.useEffect(() => {
    G === N.Wq.EDIT_USERNAME && B(true), E.default.track(T.rMx.POMELO_EDIT_STEP_VIEWED, {
      source: r,
      step: G
    })
  }, [G, r]), i.useEffect(() => {
    z || F || null == X || !(X.length > 0) || $(e => {
      var t, r;
      return t = P({}, e), r = r = {
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
  }, [X, z, F]);
  let [Q, $] = i.useState({
    username: (0, b.e$)(K),
    globalName: h.ZP.getName(K)
  }), J = e => {
    Z(null), null != e.username && q(true), $(t => P({}, t, e))
  }, ee = i.useMemo(() => [{
    slideId: j.A.INFO,
    next: j.A.EDIT_SCREEN,
    footerButtons: ["REMIND_ME_LATER", "GET_STARTED"]
  }, {
    slideId: j.A.EDIT_SCREEN,
    next: j.A.FINISH_LATER,
    back: j.A.INFO,
    footerButtons: [G === N.Wq.PREVIEW ? "GOT_IT" : "BACK", G === N.Wq.PREVIEW ? "GOT_IT" : G === N.Wq.EDIT_USERNAME ? "SUBMIT" : "NEXT"]
  }, {
    slideId: j.A.FINISH_LATER,
    back: j.A.EDIT_SCREEN
  }, {
    slideId: j.A.SUGGESTIONS,
    footerButtons: [G === N.Wq.PREVIEW ? "GOT_IT" : "UPDATE"]
  }, {
    slideId: j.A.FINISH_LATER
  }], [G]), et = ee.length, er = i.useCallback(async () => {
    if (Q.globalName.length <= 0) {
      let e = I.intl.formatToPlainString(I.t.IpijXF, {
        minNum: 1,
        maxNum: 32
      });
      Z(e), E.default.track(T.rMx.POMELO_ERRORS, {
        reason: e,
        display_name_error: true,
        location: "modal"
      });
      return
    }
    if (h.ZP.getGlobalName(K) === Q.globalName) return void W(N.Wq.EDIT_USERNAME);
    try {
      Z(null), D(true), await (0, m.S2)({
        global_name: Q.globalName
      }), W(N.Wq.EDIT_USERNAME)
    } catch (t) {
      let e = new g.Z(t).getAnyErrorMessage();
      E.default.track(T.rMx.POMELO_ERRORS, {
        reason: e,
        display_name_error: true,
        location: "modal"
      }), Z(e)
    } finally {
      D(false)
    }
  }, [K, Q]), en = i.useCallback(async () => {
    try {
      Z(null), D(true), await y.Z.createPomelo({
        username: (0, b.R_)(Q.username)
      }, w), await (0, d.In)(K.id), W(N.Wq.PREVIEW)
    } catch (r) {
      let e = new g.Z(r),
        t = (null == e ? true : e.status) != null && e.status >= 400 && e.status < 500 ? e.getAnyErrorMessage() : I.intl.string(I.t.R0RpRU);
      Z(t), E.default.track(T.rMx.POMELO_ERRORS, {
        reason: t,
        username_error: true,
        location: "modal",
        one_click_flow: w
      })
    } finally {
      D(false)
    }
  }, [Q, K.id, w]), ei = V || (0, b.NX)(K), ea = i.useCallback(() => {
    W(ei ? N.Wq.EDIT_USERNAME : N.Wq.EDIT_DISPLAY_NAME), L(ee[Math.min(et - 1, M + 1)].slideId)
  }, [M, ee, et, ei]), eo = i.useCallback(() => {
    Z(null), M === j.A.EDIT_SCREEN ? G === N.Wq.EDIT_USERNAME ? ei ? (W(N.Wq.NONE), L(ee[Math.max(0, M - 1)].slideId)) : W(N.Wq.EDIT_DISPLAY_NAME) : G === N.Wq.EDIT_DISPLAY_NAME ? (W(N.Wq.NONE), L(ee[Math.max(0, M - 1)].slideId)) : G === N.Wq.PREVIEW && W(N.Wq.EDIT_USERNAME) : L(ee[Math.max(0, M - 1)].slideId)
  }, [ee, M, G, ei]), es = i.useCallback(() => {
    L(j.A.FINISH_LATER)
  }, []), el = i.useMemo(() => M === j.A.EDIT_SCREEN && G === N.Wq.EDIT_DISPLAY_NAME ? er : M === j.A.EDIT_SCREEN && G === N.Wq.EDIT_USERNAME ? en : M === j.A.SUGGESTIONS && G === N.Wq.SUGGESTION ? en : ea, [M, G, er, en, ea]), ec = i.useMemo(() => {
    var e, t;
    return R(null != (t = null == (e = ee.find(e => e.slideId === M)) ? true : e.footerButtons) ? t : [], {
      handleNext: el,
      handleBack: eo,
      handleRemindMeLater: es,
      onClose: A
    }, k, Y, F)
  }, [eo, es, el, A, ee, M, k, Y, F]), eu = i.useMemo(() => (0, b.zV)(K), [K]);
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
  }, [G]), !F && null == U && (G === N.Wq.EDIT_USERNAME ? t = I.intl.formatToPlainString(I.t.AJh8BQ, {
    source: K.username
  }) : G === N.Wq.SUGGESTION && (Y || null != X) && (t = I.intl.string(I.t["i/2SgI"]))), (0, n.jsxs)(u.Y0X, {
    className: C.modalRoot,
    impression: {
      impressionName: s.ImpressionNames.POMELO_LANDING,
      impressionProperties: {
        source: r,
        impression_group: s.ImpressionGroups.POMELO_FLOW,
        one_click_flow: w
      }
    },
    transitionState: a,
    size: u.CgR.DYNAMIC,
    parentComponent: "PomeloModal",
    children: [(0, n.jsx)(c.zx, {
      onClick: () => {
        M === j.A.SUGGESTIONS || M === j.A.EDIT_SCREEN ? L(j.A.FINISH_LATER) : A()
      },
      size: c.zx.Sizes.MIN,
      look: c.zx.Looks.BLANK,
      className: C.closeContainer,
      "aria-label": I.intl.string(I.t.cpT0Cg),
      children: (0, n.jsx)(u.Dio, {
        size: "custom",
        color: "currentColor",
        width: 15,
        height: 15,
        className: C.close
      })
    }), (0, n.jsx)(u.hzk, {
      className: C.contentContainer,
      children: (0, n.jsxs)(u.MyZ, {
        activeSlide: M,
        width: 480,
        children: [(0, n.jsx)(u.Mi4, {
          id: j.A.INFO,
          children: (0, n.jsx)(v.Z, {
            user: K
          })
        }), (0, n.jsx)(u.Mi4, {
          id: j.A.EDIT_SCREEN,
          children: (0, n.jsx)(_.Z, {
            user: K,
            error: U,
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
          id: j.A.FINISH_LATER,
          children: (0, n.jsx)(x.Z, {
            onClose: A
          })
        }), (0, n.jsx)(u.Mi4, {
          id: j.A.SUGGESTIONS,
          children: (0, n.jsx)(_.Z, {
            user: K,
            error: U,
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
let R = (e, t, r, i, a) => 0 === e.length ? null : (0, n.jsxs)(u.mzw, {
  className: C.footer,
  children: [(0, n.jsxs)("div", {
    className: C.inline,
    children: [e.includes("REMIND_ME_LATER") && (0, n.jsx)(c.zx, {
      className: C.unfilledButton,
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
      disabled: i && !a,
      loading: r,
      onClick: t.handleNext
    })]
  }), e.includes("BACK") && (0, n.jsx)(c.zx, {
    className: C.unfilledButton,
    type: "button",
    size: c.zx.Sizes.SMALL,
    look: c.zx.Looks.BLANK,
    color: c.zx.Colors.CUSTOM,
    onClick: t.handleBack,
    children: I.intl.string(I.t["13/7kZ"])
  })]
})