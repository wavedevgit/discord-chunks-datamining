/** Chunk was on 54160 **/
/** chunk id: 914131, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => R
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk110259 = require("./110259.js"),
  Chunk417597 = require("./417597.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk803306 = require("./803306.js"),
  Chunk631670 = require("./631670.js"),
  Chunk181658 = require("./181658.js"),
  Chunk576622 = require("./576622.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk427262 = require("./427262.js"),
  Chunk32120 = require("./32120.js"),
  Chunk574454 = require("./574454.js"),
  Chunk871210 = require("./871210.js"),
  Chunk917118 = require("./917118.js"),
  Chunk325866 = require("./325866.jsx"),
  Chunk350277 = require("./350277.jsx"),
  Chunk351486 = require("./351486.jsx"),
  Chunk789622 = require("./789622.js"),
  Chunk581735 = require("./581735.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk176115 = require("./176115.js");

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

function R(e) {
  let t, {
      source: r,
      transitionState: s,
      onClose: R,
      oneClickFlow: C = false
    } = e,
    [L, M] = i.useState(C ? x.E.SUGGESTIONS : x.E.INFO),
    [D, G] = i.useState(false),
    [k, U] = i.useState(null),
    [F, B] = i.useState(C ? _.iv.SUGGESTION : _.iv.NONE),
    [H, z] = i.useState(false),
    [V, W] = i.useState(false),
    K = i.useRef(null),
    q = (0, l.bG)([y.A], () => y.A.isCurrentUsernameInvalid()),
    Y = (0, l.bG)([E.default], () => {
      let e = E.default.getCurrentUser();
      return a()(null != e, "PomeloModal: user cannot be undefined"), e
    }),
    {
      usernameSuggestion: $,
      usernameSuggestionLoading: X
    } = (0, S.G)(C ? 2e3 : true);
  i.useEffect(() => {
    F === _.iv.EDIT_USERNAME && W(true), p.default.track(N.HAw.POMELO_EDIT_STEP_VIEWED, {
      source: r,
      step: F
    })
  }, [F, r]), i.useEffect(() => {
    V || H || null == $ || !($.length > 0) || J(e => {
      var t, r;
      return t = P({}, e), r = r = {
        username: $
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
  }, [$, V, H]);
  let [Z, J] = i.useState({
    username: (0, b.et)(Y),
    globalName: h.Ay.getName(Y)
  }), Q = e => {
    U(null), null != e.username && z(true), J(t => P({}, t, e))
  }, ee = i.useMemo(() => [{
    slideId: x.E.INFO,
    next: x.E.EDIT_SCREEN,
    footerButtons: ["REMIND_ME_LATER", "GET_STARTED"]
  }, {
    slideId: x.E.EDIT_SCREEN,
    next: x.E.FINISH_LATER,
    back: x.E.INFO,
    footerButtons: [F === _.iv.PREVIEW ? "GOT_IT" : "BACK", F === _.iv.PREVIEW ? "GOT_IT" : F === _.iv.EDIT_USERNAME ? "SUBMIT" : "NEXT"]
  }, {
    slideId: x.E.FINISH_LATER,
    back: x.E.EDIT_SCREEN
  }, {
    slideId: x.E.SUGGESTIONS,
    footerButtons: [F === _.iv.PREVIEW ? "GOT_IT" : "UPDATE"]
  }, {
    slideId: x.E.FINISH_LATER
  }], [F]), et = ee.length, er = i.useCallback(async () => {
    if (Z.globalName.length <= 0) {
      let e = I.intl.formatToPlainString(I.t.IpijXA, {
        minNum: 1,
        maxNum: 32
      });
      U(e), p.default.track(N.HAw.POMELO_ERRORS, {
        reason: e,
        display_name_error: true,
        location: "modal"
      });
      return
    }
    if (h.Ay.getGlobalName(Y) === Z.globalName) return void B(_.iv.EDIT_USERNAME);
    try {
      U(null), G(true), await (0, m.gt)({
        global_name: Z.globalName
      }), B(_.iv.EDIT_USERNAME)
    } catch (t) {
      let e = new g.A(t).getAnyErrorMessage();
      p.default.track(N.HAw.POMELO_ERRORS, {
        reason: e,
        display_name_error: true,
        location: "modal"
      }), U(e)
    } finally {
      G(false)
    }
  }, [Y, Z]), en = i.useCallback(async () => {
    try {
      U(null), G(true), await O.A.createPomelo({
        username: (0, b.h_)(Z.username)
      }, C), await (0, d.eO)(Y.id), B(_.iv.PREVIEW)
    } catch (r) {
      let e = new g.A(r),
        t = (null == e ? true : e.status) != null && e.status >= 400 && e.status < 500 ? e.getAnyErrorMessage() : I.intl.string(I.t.R0RpRX);
      U(t), p.default.track(N.HAw.POMELO_ERRORS, {
        reason: t,
        username_error: true,
        location: "modal",
        one_click_flow: C
      })
    } finally {
      G(false)
    }
  }, [Z, Y.id, C]), ei = q || (0, b.C4)(Y), es = i.useCallback(() => {
    B(ei ? _.iv.EDIT_USERNAME : _.iv.EDIT_DISPLAY_NAME), M(ee[Math.min(et - 1, L + 1)].slideId)
  }, [L, ee, et, ei]), ea = i.useCallback(() => {
    U(null), L === x.E.EDIT_SCREEN ? F === _.iv.EDIT_USERNAME ? ei ? (B(_.iv.NONE), M(ee[Math.max(0, L - 1)].slideId)) : B(_.iv.EDIT_DISPLAY_NAME) : F === _.iv.EDIT_DISPLAY_NAME ? (B(_.iv.NONE), M(ee[Math.max(0, L - 1)].slideId)) : F === _.iv.PREVIEW && B(_.iv.EDIT_USERNAME) : M(ee[Math.max(0, L - 1)].slideId)
  }, [ee, L, F, ei]), eo = i.useCallback(() => {
    M(x.E.FINISH_LATER)
  }, []), el = i.useMemo(() => L === x.E.EDIT_SCREEN && F === _.iv.EDIT_DISPLAY_NAME ? er : L === x.E.EDIT_SCREEN && F === _.iv.EDIT_USERNAME ? en : L === x.E.SUGGESTIONS && F === _.iv.SUGGESTION ? en : es, [L, F, er, en, es]), ec = i.useMemo(() => {
    var e, t;
    return w(null != (e = null == (t = ee.find(e => e.slideId === L)) ? true : t.footerButtons) ? e : [], {
      handleNext: el,
      handleBack: ea,
      handleRemindMeLater: eo,
      onClose: R
    }, D, X, H)
  }, [ea, eo, el, R, ee, L, D, X, H]), eu = i.useMemo(() => (0, b.Bj)(Y), [Y]);
  return i.useLayoutEffect(() => {
    (0, f.A)(Y.id, eu)
  }, [Y, eu]), i.useEffect(() => {
    var e, t;
    switch (F) {
      case _.iv.EDIT_DISPLAY_NAME:
        null == (e = K.current) || e.focusDisplayName();
        break;
      case _.iv.EDIT_USERNAME:
      case _.iv.SUGGESTION:
        null == (t = K.current) || t.focusUsername()
    }
  }, [F]), !H && null == k && (F === _.iv.EDIT_USERNAME ? t = I.intl.formatToPlainString(I.t.AJh8BR, {
    source: Y.username
  }) : F === _.iv.SUGGESTION && (X || null != $) && (t = I.intl.string(I.t["i/2SgP"]))), (0, n.jsxs)(u.EOs, {
    "data-migration-pending": true,
    className: T.CR,
    impression: {
      impressionName: o.ImpressionNames.POMELO_LANDING,
      impressionProperties: {
        source: r,
        impression_group: o.ImpressionGroups.POMELO_FLOW,
        one_click_flow: C
      }
    },
    transitionState: s,
    size: u.rIJ.DYNAMIC,
    parentComponent: "PomeloModal",
    children: [(0, n.jsx)(c.$n, {
      "data-migration-pending": true,
      onClick: () => {
        L === x.E.SUGGESTIONS || L === x.E.EDIT_SCREEN ? M(x.E.FINISH_LATER) : R()
      },
      size: c.$n.Sizes.MIN,
      look: c.$n.Looks.BLANK,
      className: T.G3,
      "aria-label": I.intl.string(I.t.cpT0Cq),
      children: (0, n.jsx)(u.PGe, {
        size: "custom",
        color: "currentColor",
        width: 15,
        height: 15,
        className: T.VN
      })
    }), (0, n.jsx)(u.$mQ, {
      "data-migration-pending": true,
      className: T.hQ,
      children: (0, n.jsxs)(u.tN_, {
        activeSlide: L,
        width: 480,
        children: [(0, n.jsx)(u.q7S, {
          id: x.E.INFO,
          children: (0, n.jsx)(j.A, {
            user: Y
          })
        }), (0, n.jsx)(u.q7S, {
          id: x.E.EDIT_SCREEN,
          children: (0, n.jsx)(v.A, {
            user: Y,
            error: k,
            editState: F,
            userRef: K,
            formValues: Z,
            footerNotice: t,
            onChangeFormValue: Q,
            onFocusUsername: () => B(_.iv.EDIT_USERNAME),
            onFocusDisplayName: () => B(_.iv.EDIT_DISPLAY_NAME),
            onClose: R
          })
        }), (0, n.jsx)(u.q7S, {
          id: x.E.FINISH_LATER,
          children: (0, n.jsx)(A.A, {
            onClose: R
          })
        }), (0, n.jsx)(u.q7S, {
          id: x.E.SUGGESTIONS,
          children: (0, n.jsx)(v.A, {
            user: Y,
            error: k,
            editState: F,
            userRef: K,
            formValues: Z,
            footerNotice: t,
            onChangeFormValue: Q,
            onFocusUsername: () => B(_.iv.SUGGESTION),
            onFocusDisplayName: () => B(_.iv.EDIT_DISPLAY_NAME),
            onClose: R,
            usernameSuggestionLoading: X,
            oneClickFlow: C
          })
        })]
      })
    }), ec]
  })
}
let w = (e, t, r, i, s) => 0 === e.length ? null : (0, n.jsxs)(u.jlY, {
  "data-migration-pending": true,
  className: T.qr,
  children: [(0, n.jsxs)("div", {
    className: T.mG,
    children: [e.includes("REMIND_ME_LATER") && (0, n.jsx)(c.$n, {
      "data-migration-pending": true,
      className: T.I,
      type: "button",
      size: c.$n.Sizes.SMALL,
      look: c.$n.Looks.BLANK,
      color: c.$n.Colors.CUSTOM,
      onClick: t.handleRemindMeLater,
      children: I.intl.string(I.t["1mGbXA"])
    }), e.includes("NEXT") && (0, n.jsx)(u.Button, {
      variant: "primary",
      size: "sm",
      text: I.intl.string(I.t.PDTjLN),
      type: "button",
      loading: r,
      onClick: t.handleNext
    }), e.includes("SUBMIT") && (0, n.jsx)(u.Button, {
      variant: "primary",
      size: "sm",
      text: I.intl.string(I.t.geKm7t),
      type: "button",
      loading: r,
      onClick: t.handleNext
    }), e.includes("GET_STARTED") && (0, n.jsx)(u.Button, {
      variant: "primary",
      size: "sm",
      text: I.intl.string(I.t.LhlgY9),
      type: "button",
      onClick: t.handleNext
    }), e.includes("GOT_IT") && (0, n.jsx)(u.Button, {
      variant: "primary",
      size: "sm",
      text: I.intl.string(I.t["NX+WJN"]),
      type: "button",
      onClick: t.onClose
    }), e.includes("UPDATE") && (0, n.jsx)(u.Button, {
      variant: "primary",
      size: "sm",
      text: I.intl.string(I.t.VZANAD),
      type: "button",
      disabled: i && !s,
      loading: r,
      onClick: t.handleNext
    })]
  }), e.includes("BACK") && (0, n.jsx)(c.$n, {
    "data-migration-pending": true,
    className: T.I,
    type: "button",
    size: c.$n.Sizes.SMALL,
    look: c.$n.Looks.BLANK,
    color: c.$n.Colors.CUSTOM,
    onClick: t.handleBack,
    children: I.intl.string(I.t["13/7kX"])
  })]
})