/** Chunk was on 81162 **/
/** chunk id: 193049, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk225562 = require("./225562.js");

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
    [w, L] = i.useState(M ? T.A.SUGGESTIONS : T.A.INFO),
    [D, k] = i.useState(false),
    [Z, U] = i.useState(null),
    [G, W] = i.useState(M ? x.Wq.SUGGESTION : x.Wq.NONE),
    [q, F] = i.useState(false),
    [B, z] = i.useState(false),
    H = i.useRef(null),
    V = (0, l.e7)([O.Z], () => O.Z.isCurrentUsernameInvalid()),
    K = (0, l.e7)([E.default], () => {
      let e = E.default.getCurrentUser();
      return o()(null != e, "PomeloModal: user cannot be undefined"), e
    }),
    {
      usernameSuggestion: X,
      usernameSuggestionLoading: Y
    } = (0, b.G)(M ? x.en : true);
  i.useEffect(() => {
    G === x.Wq.EDIT_USERNAME && z(true), p.default.track(j.rMx.POMELO_EDIT_STEP_VIEWED, {
      source: n,
      step: G
    })
  }, [G, n]), i.useEffect(() => {
    B || q || null == X || !(X.length > 0) || $(e => {
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
  }, [X, B, q]);
  let [Q, $] = i.useState({
    username: (0, S.e$)(K),
    globalName: h.ZP.getName(K)
  }), J = e => {
    U(null), null != e.username && F(true), $(t => C({}, t, e))
  }, ee = i.useMemo(() => [{
    slideId: T.A.INFO,
    next: T.A.EDIT_SCREEN,
    footerButtons: ["REMIND_ME_LATER", "GET_STARTED"]
  }, {
    slideId: T.A.EDIT_SCREEN,
    next: T.A.FINISH_LATER,
    back: T.A.INFO,
    footerButtons: [G === x.Wq.PREVIEW ? "GOT_IT" : "BACK", G === x.Wq.PREVIEW ? "GOT_IT" : G === x.Wq.EDIT_USERNAME ? "SUBMIT" : "NEXT"]
  }, {
    slideId: T.A.FINISH_LATER,
    back: T.A.EDIT_SCREEN
  }, {
    slideId: T.A.SUGGESTIONS,
    footerButtons: [G === x.Wq.PREVIEW ? "GOT_IT" : "UPDATE"]
  }, {
    slideId: T.A.FINISH_LATER
  }], [G]), et = ee.length, en = i.useCallback(async () => {
    if (Q.globalName.length <= 0) {
      let e = I.intl.formatToPlainString(I.t.IpijXA, {
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
    if (h.ZP.getGlobalName(K) === Q.globalName) return void W(x.Wq.EDIT_USERNAME);
    try {
      U(null), k(true), await (0, m.S2)({
        global_name: Q.globalName
      }), W(x.Wq.EDIT_USERNAME)
    } catch (t) {
      let e = new g.Z(t).getAnyErrorMessage();
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
      U(null), k(true), await y.Z.createPomelo({
        username: (0, S.R_)(Q.username)
      }, M), await (0, d.In)(K.id), W(x.Wq.PREVIEW)
    } catch (n) {
      let e = new g.Z(n),
        t = (null == e ? true : e.status) != null && e.status >= 400 && e.status < 500 ? e.getAnyErrorMessage() : I.intl.string(I.t.R0RpRX);
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
    W(ei ? x.Wq.EDIT_USERNAME : x.Wq.EDIT_DISPLAY_NAME), L(ee[Math.min(et - 1, w + 1)].slideId)
  }, [w, ee, et, ei]), eo = i.useCallback(() => {
    U(null), w === T.A.EDIT_SCREEN ? G === x.Wq.EDIT_USERNAME ? ei ? (W(x.Wq.NONE), L(ee[Math.max(0, w - 1)].slideId)) : W(x.Wq.EDIT_DISPLAY_NAME) : G === x.Wq.EDIT_DISPLAY_NAME ? (W(x.Wq.NONE), L(ee[Math.max(0, w - 1)].slideId)) : G === x.Wq.PREVIEW && W(x.Wq.EDIT_USERNAME) : L(ee[Math.max(0, w - 1)].slideId)
  }, [ee, w, G, ei]), es = i.useCallback(() => {
    L(T.A.FINISH_LATER)
  }, []), el = i.useMemo(() => w === T.A.EDIT_SCREEN && G === x.Wq.EDIT_DISPLAY_NAME ? en : w === T.A.EDIT_SCREEN && G === x.Wq.EDIT_USERNAME ? er : w === T.A.SUGGESTIONS && G === x.Wq.SUGGESTION ? er : ea, [w, G, en, er, ea]), ec = i.useMemo(() => {
    var e, t;
    return R(null != (t = null == (e = ee.find(e => e.slideId === w)) ? true : e.footerButtons) ? t : [], {
      handleNext: el,
      handleBack: eo,
      handleRemindMeLater: es,
      onClose: A
    }, D, Y, q)
  }, [eo, es, el, A, ee, w, D, Y, q]), eu = i.useMemo(() => (0, S.zV)(K), [K]);
  return i.useLayoutEffect(() => {
    (0, f.Z)(K.id, eu)
  }, [K, eu]), i.useEffect(() => {
    var e, t;
    switch (G) {
      case x.Wq.EDIT_DISPLAY_NAME:
        null == (e = H.current) || e.focusDisplayName();
        break;
      case x.Wq.EDIT_USERNAME:
      case x.Wq.SUGGESTION:
        null == (t = H.current) || t.focusUsername()
    }
  }, [G]), !q && null == Z && (G === x.Wq.EDIT_USERNAME ? t = I.intl.formatToPlainString(I.t.AJh8BR, {
    source: K.username
  }) : G === x.Wq.SUGGESTION && (Y || null != X) && (t = I.intl.string(I.t["i/2SgP"]))), (0, r.jsxs)(u.Y0X, {
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
        w === T.A.SUGGESTIONS || w === T.A.EDIT_SCREEN ? L(T.A.FINISH_LATER) : A()
      },
      size: c.zx.Sizes.MIN,
      look: c.zx.Looks.BLANK,
      className: P.closeContainer,
      "aria-label": I.intl.string(I.t.cpT0Cq),
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
        activeSlide: w,
        width: 480,
        children: [(0, r.jsx)(u.Mi4, {
          id: T.A.INFO,
          children: (0, r.jsx)(v.Z, {
            user: K
          })
        }), (0, r.jsx)(u.Mi4, {
          id: T.A.EDIT_SCREEN,
          children: (0, r.jsx)(_.Z, {
            user: K,
            error: Z,
            editState: G,
            userRef: H,
            formValues: Q,
            footerNotice: t,
            onChangeFormValue: J,
            onFocusUsername: () => W(x.Wq.EDIT_USERNAME),
            onFocusDisplayName: () => W(x.Wq.EDIT_DISPLAY_NAME),
            onClose: A
          })
        }), (0, r.jsx)(u.Mi4, {
          id: T.A.FINISH_LATER,
          children: (0, r.jsx)(N.Z, {
            onClose: A
          })
        }), (0, r.jsx)(u.Mi4, {
          id: T.A.SUGGESTIONS,
          children: (0, r.jsx)(_.Z, {
            user: K,
            error: Z,
            editState: G,
            userRef: H,
            formValues: Q,
            footerNotice: t,
            onChangeFormValue: J,
            onFocusUsername: () => W(x.Wq.SUGGESTION),
            onFocusDisplayName: () => W(x.Wq.EDIT_DISPLAY_NAME),
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
      children: I.intl.string(I.t["1mGbXA"])
    }), e.includes("NEXT") && (0, r.jsx)(u.Button, {
      variant: "primary",
      size: "sm",
      text: I.intl.string(I.t.PDTjLN),
      type: "button",
      loading: n,
      onClick: t.handleNext
    }), e.includes("SUBMIT") && (0, r.jsx)(u.Button, {
      variant: "primary",
      size: "sm",
      text: I.intl.string(I.t.geKm7t),
      type: "button",
      loading: n,
      onClick: t.handleNext
    }), e.includes("GET_STARTED") && (0, r.jsx)(u.Button, {
      variant: "primary",
      size: "sm",
      text: I.intl.string(I.t.LhlgY9),
      type: "button",
      onClick: t.handleNext
    }), e.includes("GOT_IT") && (0, r.jsx)(u.Button, {
      variant: "primary",
      size: "sm",
      text: I.intl.string(I.t["NX+WJN"]),
      type: "button",
      onClick: t.onClose
    }), e.includes("UPDATE") && (0, r.jsx)(u.Button, {
      variant: "primary",
      size: "sm",
      text: I.intl.string(I.t.VZANAD),
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
    children: I.intl.string(I.t["13/7kX"])
  })]
})