/** Chunk was on 46746 **/
/** chunk id: 567126, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Hu: () => J,
  jx: () => F,
  oA: () => H,
  ov: () => W,
  se: () => Y
}), require("./35282.js"), require("./388685.js"), require("./642613.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk209739 = require("./209739.js"),
  a = require.n(Chunk209739),
  Chunk268146 = require("./268146.js"),
  Chunk442837 = require("./442837.js"),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk579806 = require("./579806.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk152708 = require("./152708.jsx"),
  Chunk594190 = require("./594190.js"),
  Chunk751571 = require("./751571.js"),
  Chunk509212 = require("./509212.js"),
  Chunk569984 = require("./569984.js"),
  Chunk977156 = require("./977156.js"),
  Chunk28798 = require("./28798.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk449224 = require("./449224.js"),
  Chunk358085 = require("./358085.js"),
  Chunk463727 = require("./463727.js"),
  Chunk855403 = require("./855403.js"),
  Chunk299570 = require("./299570.js"),
  Chunk960861 = require("./960861.js"),
  Chunk59468 = require("./59468.js"),
  Chunk989941 = require("./989941.js"),
  Chunk39540 = require("./39540.js"),
  Chunk958707 = require("./958707.jsx"),
  Chunk152165 = require("./152165.jsx"),
  Chunk133179 = require("./133179.jsx"),
  Chunk70722 = require("./70722.js"),
  Chunk761274 = require("./761274.js"),
  Chunk46140 = require("./46140.js"),
  Chunk65154 = require("./65154.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk336606 = require("./336606.js");

function U(e) {
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

function W(e, t, n, r) {
  let i = (0, y.isWindows)() ? (0, P.Z)(x.ZP, S.Z) : null,
    l = x.ZP.getRunningGames(),
    s = null == n ? true : n.split(":")[1],
    o = e.id.split(":")[1];
  if (null != s && s === o) return 0;
  if (null != t && t === e.id) return 5;
  if (null != i && (0, w.Z)(e.id, i.windowHandle)) return 4;
  if (null != l.find(t => (0, w.Z)(e.id, t.windowHandle))) return 3;
  let a = null == r ? true : r[o];
  return null != a && k.Mm.has(a) ? 2 : 1
}

function F(e, t, n) {
  let r = (0, j.Z)({
    location: D.dr.STREAM_SOURCE_SELECT
  });
  return i.useMemo(() => {
    if (null == n || !r) return null;
    for (let r of n) {
      var i, l;
      let n = t.find(e => (0, w.Z)(r.id, e.windowHandle));
      if ((null == n ? true : n.id) == null) continue;
      let s = (0, _.lQ)(e, n.id);
      if (null != s && (null == (i = s.userStatus) ? true : i.enrolledAt) != null && (null == (l = s.userStatus) ? true : l.completedAt) == null) return {
        source: r,
        quest: s
      }
    }
    return null
  }, [r, e, t, n])
}

function H(e) {
  let {
    selectedSource: t,
    onChangeSelectedSource: n
  } = e, {
    enableGoLiveCaptureCard: l
  } = O.Z.useExperiment({
    location: "GoLive_Source_Select"
  }), o = C.Z.supports(L.AN.GO_LIVE_HARDWARE), [a, m] = i.useState(null), [_, j] = i.useState(null), [S, y] = i.useState(null), w = null != S && S.length > 0, [Z, I] = i.useState(c.vA.WINDOW), [P, T] = i.useState(false), R = i.useRef(null), k = i.useRef(new u.Xp), D = (0, d.e7)([x.ZP], () => x.ZP.getRunningGames()), U = F((0, d.e7)([v.Z], () => v.Z.quests), D, _), H = i.useMemo(() => null == _ ? null : [..._].sort((e, t) => W(t, null == U ? true : U.source.id) - W(e, null == U ? true : U.source.id)), [U, _]);
  i.useEffect(() => {
    let e = k.current;
    return (0, N.t)({
      width: 176,
      height: 99
    }).then(e => {
      let {
        screenSources: t,
        windowSources: n,
        cameraSources: r
      } = e;
      m(t), j(n), y(r)
    }), e.start(1e3, async () => {
      let {
        screenSources: e,
        windowSources: t,
        cameraSources: n
      } = await (0, N.t)({
        width: 176,
        height: 99
      });
      m(e), j(t), y(n)
    }), () => {
      e.stop()
    }
  }, []);
  let z = i.useCallback(e => {
      null !== e && (R.current = e, T(!e.isScrolledToTop()))
    }, []),
    [V, Y] = i.useState(true);
  i.useEffect(() => {
    g.Z.hasPermission(M.Eu.SCREEN_RECORDING, {
      showAuthorizationError: false
    }).then(Y)
  }, []);
  let J = function(e) {
    switch (e) {
      case c.vA.WINDOW:
        return H;
      case c.vA.SCREEN:
        return a;
      case c.vA.CAMERA:
        return S
    }
  }(Z);
  if (null == J) returnfalse === V ? (0, r.jsxs)(f.Text, {
    className: G.errorMessage,
    variant: "text-md/normal",
    color: "text-danger",
    children: [B.intl.string(B.t["kW5h/f"]), (0, r.jsx)("br", {}), B.intl.string(B.t["5Jvu1d"])]
  }) : (0, r.jsx)(h.Z, {
    className: G.spinner,
    justify: h.Z.Justify.CENTER,
    align: h.Z.Align.CENTER,
    children: (0, r.jsx)(f.$jN, {})
  });
  let X = J.map(e => {
    let {
      id: i
    } = e, l = (null == t ? true : t.id) === i;
    return (0, r.jsx)(f.P3F, {
      className: s()(G.tile, {
        [G.selected]: l
      }),
      onClick: () => n(e, null),
      children: (0, r.jsx)(A.Z, {
        source: e,
        selectedSource: t
      }, e.id)
    }, i)
  });
  return (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: G.segmentContainer,
      children: [(0, r.jsx)(E.Z, {
        separator: P
      }), (0, r.jsx)(f.sY7, {
        options: function() {
          let e = [{
            name: B.intl.string(B.t.tHoi7u),
            value: c.vA.WINDOW
          }, {
            name: B.intl.string(B.t["/iX8u7"]),
            value: c.vA.SCREEN
          }];
          return l && o && w && e.push({
            name: B.intl.string(B.t.cWt5Ul),
            value: c.vA.CAMERA
          }), e
        }(),
        value: Z,
        onChange: e => {
          let {
            value: t
          } = e;
          return I(t)
        },
        className: G.segmentControl,
        optionClassName: G.segmentControlOption
      })]
    }), (0, r.jsxs)(f.Den, {
      ref: z,
      className: G.sourceScroller,
      onScroll: function() {
        let e = R.current;
        null != e && T(!e.isScrolledToTop())
      },
      children: [Z === c.vA.WINDOW && null != U && (0, r.jsx)(b.Z, {
        quest: U.quest
      }), (0, r.jsx)(p.Z, {
        layout: p.Z.Layout.WRAP,
        columns: 2,
        className: G.sourceContainer,
        children: X
      })]
    })]
  })
}

function z(e) {
  let {
    onSelect: t
  } = e, n = i.useCallback(() => {
    t({
      id: "prepicked:",
      name: B.intl.string(B.t["KKcy9/"]),
      url: ""
    })
  }, [t]);
  return (0, r.jsx)(f.P3F, {
    role: "radio",
    "aria-checked": false,
    onClick: n,
    tabIndex: 0,
    className: s()(G.nativeSourceSingleTypeButton, G.nativePickerRadioItem),
    children: (0, r.jsxs)("div", {
      className: G.nativeSourceSingleTypeButtonInner,
      children: [(0, r.jsx)(R.Z, {
        className: G.nativeSourceSingleTypeImage
      }), (0, r.jsx)(f.Text, {
        variant: "text-md/medium",
        color: "none",
        children: B.intl.string(B.t.Yp6h5e)
      })]
    })
  })
}

function V(e) {
  let {
    id: t,
    name: n,
    text: l,
    icon: o,
    onSelect: a
  } = e, c = i.useCallback(() => {
    a({
      id: "prepicked:" + t,
      name: n,
      url: ""
    })
  }, [t, n, a]);
  return (0, r.jsx)(f.P3F, {
    role: "radio",
    "aria-checked": false,
    onClick: c,
    tabIndex: 0,
    className: s()(G.nativeSourceTypeButton, G.nativePickerRadioItem),
    children: (0, r.jsxs)("div", {
      className: G.nativeSourceTypeButtonInner,
      children: [(0, r.jsx)(o, {
        size: "lg"
      }), (0, r.jsx)(f.Text, {
        variant: "text-sm/medium",
        color: "none",
        children: l
      })]
    })
  })
}

function Y(e) {
  let {
    onSourceSelect: t
  } = e, [n, l] = i.useState([]), [o, c] = i.useState({}), d = i.useRef(new u.Xp);
  i.useEffect(() => {
    let e = d.current,
      t = () => {
        let e = Object.entries(C.Z.getVideoDevices()).filter(e => {
          let [t, n] = e;
          return !n.disabled
        });
        l(e), c(U({}, e.reduce((e, t) => {
          var n, r;
          let [i, l] = t;
          return n = U({}, e), r = r = {
            ["camera:" + i]: l.name
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(r)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
          }), n
        }, {})))
      };
    return t(), e.start(1e3, t), () => {
      e.stop()
    }
  }, []);
  let h = i.useCallback(e => {
      var n;
      let {
        value: r
      } = e;
      t({
        id: r,
        name: null != (n = o[r]) ? n : "",
        url: ""
      })
    }, [t, o]),
    p = (0, y.isMac)() && a().satisfies(null === m.Z || true === m.Z ? true : m.Z.os.release, k.jR),
    x = (0, y.isMac)(),
    [g, _] = i.useState(false),
    v = i.useCallback(() => {
      _(!g)
    }, [g]),
    j = p ? (0, r.jsx)(z, {
      onSelect: t
    }) : (0, r.jsxs)("div", {
      className: G.nativePickerTypes,
      children: [(0, r.jsx)(V, {
        onSelect: t,
        id: "screen",
        name: B.intl.string(B.t.R4wpLC),
        text: B.intl.string(B.t.cVUFXV),
        icon: f.pzj
      }), (0, r.jsx)(V, {
        onSelect: t,
        id: "window",
        name: B.intl.string(B.t["+SLJCg"]),
        text: B.intl.string(B.t.dG2A1N),
        icon: f.GON
      }), x ? (0, r.jsx)(V, {
        onSelect: t,
        id: "app",
        name: B.intl.string(B.t.ct7AKS),
        text: B.intl.string(B.t["8lQwf3"]),
        icon: f.gw7
      }) : null]
    });
  return (0, r.jsxs)("div", {
    className: G.nativePickerScroll,
    children: [(0, r.jsx)(f.Text, {
      className: G.nativePickerLabel,
      variant: "text-md/semibold",
      color: "interactive-normal",
      children: B.intl.string(B.t.XyYoFR)
    }), j, 0 === n.length ? null : (0, r.jsxs)("div", {
      className: s()(G.nativePickerCaptureSection, g ? null : G.nativePickerCollapsed),
      children: [(0, r.jsxs)(f.P3F, {
        onClick: v,
        className: G.nativePickerLabel,
        children: [(0, r.jsx)(f.Text, {
          className: G.nativeCaptureDevicesText,
          variant: "text-md/semibold",
          color: "interactive-normal",
          children: B.intl.string(B.t.rO0Vi4)
        }), (0, r.jsx)(f.CJ0, {
          size: "sm",
          color: "currentColor",
          className: G.captureDevicesToggleIndicator
        })]
      }), (0, r.jsx)(f.FXm, {
        className: G.nativePickerCaptureList,
        onChange: h,
        radioItemClassName: G.nativePickerRadioItem,
        options: n.map(e => {
          let [t, n] = e;
          return {
            name: n.name,
            value: "camera:" + n.id,
            icon: f.Odl,
            radioItemIconClassName: G.hideRadioCheckbox
          }
        })
      })]
    })]
  })
}

function J(e) {
  let {
    onSourceSelect: t,
    onCancel: n,
    pickerType: l
  } = e, {
    lastPickerAction: s,
    lastPickerError: o
  } = (0, T.Z)(t, n);
  return i.useEffect(() => {
    (0, y.isLinux)() || (0, y.isMac)() && a().satisfies(null === m.Z || true === m.Z ? true : m.Z.os.release, k.jR) ? (0, Z.T)(l) : (0, Z.t)()
  }, [l]), s === I.Uc.Error ? (0, r.jsx)(f.Text, {
    className: G.errorMessage,
    variant: "text-md/normal",
    color: "text-danger",
    children: null != o && o.length > 0 ? o : B.intl.string(B.t.CKsXk5)
  }) : (0, r.jsx)(R.Z, {
    animated: true,
    className: G.nativePickerGuide
  })
}