/** Chunk was on 85342 **/
/** chunk id: 193049, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk37781 = require("./37781.js");

function C(e) {
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
  let t, {
      source: n,
      transitionState: a,
      onClose: A,
      oneClickFlow: M = false
    } = e,
    [L, w] = i.useState(M ? I.A.SUGGESTIONS : I.A.INFO),
    [D, k] = i.useState(false),
    [Z, U] = i.useState(null),
    [G, W] = i.useState(M ? T.Wq.SUGGESTION : T.Wq.NONE),
    [F, q] = i.useState(false),
    [B, z] = i.useState(false),
    H = i.useRef(null),
    V = (0, l.e7)([y.Z], () => y.Z.isCurrentUsernameInvalid()),
    K = (0, l.e7)([E.default], () => {
      let e = E.default.getCurrentUser();
      return o()(null != e, "PomeloModal: user cannot be undefined"), e
    }),
    {
      usernameSuggestion: X,
      usernameSuggestionLoading: Y
    } = (0, b.G)(M ? T.en : true);
  i.useEffect(() => {
    G === T.Wq.EDIT_USERNAME && z(true), p.default.track(j.rMx.POMELO_EDIT_STEP_VIEWED, {
      source: n,
      step: G
    })
  }, [G, n]), i.useEffect(() => {
    B || F || null == X || !(X.length > 0) || $(e => {
      var t, n;
      return t = C({}, e), n = n = {
        username: X
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t
    })
  }, [X, B, F]);
  let [Q, $] = i.useState({
    username: (0, S.e$)(K),
    globalName: h.ZP.getName(K)
  }), J = e => {
    U(null), null != e.username && q(true), $(t => C({}, t, e))
  }, ee = i.useMemo(() => [{
    slideId: I.A.INFO,
    next: I.A.EDIT_SCREEN,
    footerButtons: ["REMIND_ME_LATER", "GET_STARTED"]
  }, {
    slideId: I.A.EDIT_SCREEN,
    next: I.A.FINISH_LATER,
    back: I.A.INFO,
    footerButtons: [G === T.Wq.PREVIEW ? "GOT_IT" : "BACK", G === T.Wq.PREVIEW ? "GOT_IT" : G === T.Wq.EDIT_USERNAME ? "SUBMIT" : "NEXT"]
  }, {
    slideId: I.A.FINISH_LATER,
    back: I.A.EDIT_SCREEN
  }, {
    slideId: I.A.SUGGESTIONS,
    footerButtons: [G === T.Wq.PREVIEW ? "GOT_IT" : "UPDATE"]
  }, {
    slideId: I.A.FINISH_LATER
  }], [G]), et = ee.length, en = i.useCallback(async () => {
    if (Q.globalName.length <= 0) {
      let e = _.intl.formatToPlainString(_.t.IpijXA, {
        minNum: 1,
        maxNum: 32
      });
      U(e), p.default.track(j.rMx.POMELO_ERRORS, {
        reason: e,
        display_name_error: true,
        location: "modal"
      });
      return
    }
    if (h.ZP.getGlobalName(K) === Q.globalName) return void W(T.Wq.EDIT_USERNAME);
    try {
      U(null), k(true), await (0, f.S2)({
        global_name: Q.globalName
      }), W(T.Wq.EDIT_USERNAME)
    } catch (t) {
      let e = new m.Z(t).getAnyErrorMessage();
      p.default.track(j.rMx.POMELO_ERRORS, {
        reason: e,
        display_name_error: true,
        location: "modal"
      }), U(e)
    } finally {
      k(false)
    }
  }, [K, Q]), er = i.useCallback(async () => {
    try {
      U(null), k(true), await O.Z.createPomelo({
        username: (0, S.R_)(Q.username)
      }, M), await (0, d.In)(K.id), W(T.Wq.PREVIEW)
    } catch (n) {
      let e = new m.Z(n),
        t = (null == e ? true : e.status) != null && e.status >= 400 && e.status < 500 ? e.getAnyErrorMessage() : _.intl.string(_.t.R0RpRX);
      U(t), p.default.track(j.rMx.POMELO_ERRORS, {
        reason: t,
        username_error: true,
        location: "modal",
        one_click_flow: M
      })
    } finally {
      k(false)
    }
  }, [Q, K.id, M]), ei = V || (0, S.NX)(K), ea = i.useCallback(() => {
    W(ei ? T.Wq.EDIT_USERNAME : T.Wq.EDIT_DISPLAY_NAME), w(ee[Math.min(et - 1, L + 1)].slideId)
  }, [L, ee, et, ei]), eo = i.useCallback(() => {
    U(null), L === I.A.EDIT_SCREEN ? G === T.Wq.EDIT_USERNAME ? ei ? (W(T.Wq.NONE), w(ee[Math.max(0, L - 1)].slideId)) : W(T.Wq.EDIT_DISPLAY_NAME) : G === T.Wq.EDIT_DISPLAY_NAME ? (W(T.Wq.NONE), w(ee[Math.max(0, L - 1)].slideId)) : G === T.Wq.PREVIEW && W(T.Wq.EDIT_USERNAME) : w(ee[Math.max(0, L - 1)].slideId)
  }, [ee, L, G, ei]), es = i.useCallback(() => {
    w(I.A.FINISH_LATER)
  }, []), el = i.useMemo(() => L === I.A.EDIT_SCREEN && G === T.Wq.EDIT_DISPLAY_NAME ? en : L === I.A.EDIT_SCREEN && G === T.Wq.EDIT_USERNAME ? er : L === I.A.SUGGESTIONS && G === T.Wq.SUGGESTION ? er : ea, [L, G, en, er, ea]), ec = i.useMemo(() => {
    var e, t;
    return R(null != (t = null == (e = ee.find(e => e.slideId === L)) ? true : e.footerButtons) ? t : [], {
      handleNext: el,
      handleBack: eo,
      handleRemindMeLater: es,
      onClose: A
    }, D, Y, F)
  }, [eo, es, el, A, ee, L, D, Y, F]), eu = i.useMemo(() => (0, S.zV)(K), [K]);
  return i.useLayoutEffect(() => {
    (0, g.Z)(K.id, eu)
  }, [K, eu]), i.useEffect(() => {
    var e, t;
    switch (G) {
      case T.Wq.EDIT_DISPLAY_NAME:
        null == (e = H.current) || e.focusDisplayName();
        break;
      case T.Wq.EDIT_USERNAME:
      case T.Wq.SUGGESTION:
        null == (t = H.current) || t.focusUsername()
    }
  }, [G]), !F && null == Z && (G === T.Wq.EDIT_USERNAME ? t = _.intl.formatToPlainString(_.t.AJh8BR, {
    source: K.username
  }) : G === T.Wq.SUGGESTION && (Y || null != X) && (t = _.intl.string(_.t["i/2SgP"]))), (0, r.jsxs)(u.Y0X, {
    "data-migration-pending": true,
    className: P.modalRoot,
    impression: {
      impressionName: s.ImpressionNames.POMELO_LANDING,
      impressionProperties: {
        source: n,
        impression_group: s.ImpressionGroups.POMELO_FLOW,
        one_click_flow: M
      }
    },
    transitionState: a,
    size: u.CgR.DYNAMIC,
    parentComponent: "PomeloModal",
    children: [(0, r.jsx)(c.zx, {
      "data-migration-pending": true,
      onClick: () => {
        L === I.A.SUGGESTIONS || L === I.A.EDIT_SCREEN ? w(I.A.FINISH_LATER) : A()
      },
      size: c.zx.Sizes.MIN,
      look: c.zx.Looks.BLANK,
      className: P.closeContainer,
      "aria-label": _.intl.string(_.t.cpT0Cq),
      children: (0, r.jsx)(u.Dio, {
        size: "custom",
        color: "currentColor",
        width: 15,
        height: 15,
        className: P.close
      })
    }), (0, r.jsx)(u.hzk, {
      "data-migration-pending": true,
      className: P.contentContainer,
      children: (0, r.jsxs)(u.MyZ, {
        activeSlide: L,
        width: 480,
        children: [(0, r.jsx)(u.Mi4, {
          id: I.A.INFO,
          children: (0, r.jsx)(v.Z, {
            user: K
          })
        }), (0, r.jsx)(u.Mi4, {
          id: I.A.EDIT_SCREEN,
          children: (0, r.jsx)(x.Z, {
            user: K,
            error: Z,
            editState: G,
            userRef: H,
            formValues: Q,
            footerNotice: t,
            onChangeFormValue: J,
            onFocusUsername: () => W(T.Wq.EDIT_USERNAME),
            onFocusDisplayName: () => W(T.Wq.EDIT_DISPLAY_NAME),
            onClose: A
          })
        }), (0, r.jsx)(u.Mi4, {
          id: I.A.FINISH_LATER,
          children: (0, r.jsx)(N.Z, {
            onClose: A
          })
        }), (0, r.jsx)(u.Mi4, {
          id: I.A.SUGGESTIONS,
          children: (0, r.jsx)(x.Z, {
            user: K,
            error: Z,
            editState: G,
            userRef: H,
            formValues: Q,
            footerNotice: t,
            onChangeFormValue: J,
            onFocusUsername: () => W(T.Wq.SUGGESTION),
            onFocusDisplayName: () => W(T.Wq.EDIT_DISPLAY_NAME),
            onClose: A,
            usernameSuggestionLoading: Y,
            oneClickFlow: M
          })
        })]
      })
    }), ec]
  })
}
let R = (e, t, n, i, a) => 0 === e.length ? null : (0, r.jsxs)(u.mzw, {
  "data-migration-pending": true,
  className: P.footer,
  children: [(0, r.jsxs)("div", {
    className: P.inline,
    children: [e.includes("REMIND_ME_LATER") && (0, r.jsx)(c.zx, {
      "data-migration-pending": true,
      className: P.unfilledButton,
      type: "button",
      size: c.zx.Sizes.SMALL,
      look: c.zx.Looks.BLANK,
      color: c.zx.Colors.CUSTOM,
      onClick: t.handleRemindMeLater,
      children: _.intl.string(_.t["1mGbXA"])
    }), e.includes("NEXT") && (0, r.jsx)(u.Button, {
      variant: "primary",
      size: "sm",
      text: _.intl.string(_.t.PDTjLN),
      type: "button",
      loading: n,
      onClick: t.handleNext
    }), e.includes("SUBMIT") && (0, r.jsx)(u.Button, {
      variant: "primary",
      size: "sm",
      text: _.intl.string(_.t.geKm7t),
      type: "button",
      loading: n,
      onClick: t.handleNext
    }), e.includes("GET_STARTED") && (0, r.jsx)(u.Button, {
      variant: "primary",
      size: "sm",
      text: _.intl.string(_.t.LhlgY9),
      type: "button",
      onClick: t.handleNext
    }), e.includes("GOT_IT") && (0, r.jsx)(u.Button, {
      variant: "primary",
      size: "sm",
      text: _.intl.string(_.t["NX+WJN"]),
      type: "button",
      onClick: t.onClose
    }), e.includes("UPDATE") && (0, r.jsx)(u.Button, {
      variant: "primary",
      size: "sm",
      text: _.intl.string(_.t.VZANAD),
      type: "button",
      disabled: i && !a,
      loading: n,
      onClick: t.handleNext
    })]
  }), e.includes("BACK") && (0, r.jsx)(c.zx, {
    "data-migration-pending": true,
    className: P.unfilledButton,
    type: "button",
    size: c.zx.Sizes.SMALL,
    look: c.zx.Looks.BLANK,
    color: c.zx.Colors.CUSTOM,
    onClick: t.handleBack,
    children: _.intl.string(_.t["13/7kX"])
  })]
})