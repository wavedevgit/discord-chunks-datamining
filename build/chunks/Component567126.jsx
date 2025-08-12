/** Chunk was on 46746 **/
/** chunk id: 567126, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Hu: () => Y,
  oA: () => F,
  se: () => V
}), require("./388685.js"), require("./642613.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk988598 = require("./988598.js");

function G(e) {
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

function W(e) {
  let t = (0, y.isWindows)() ? (0, T.Z)(x.ZP, C.Z) : null,
    n = x.ZP.getRunningGames();
  return null != t && (0, I.Z)(e.id, t.windowHandle) ? 2 : +(null != n.find(t => (0, I.Z)(e.id, t.windowHandle)))
}

function F(e) {
  let {
    selectedSource: t,
    onChangeSelectedSource: n
  } = e, {
    enableGoLiveCaptureCard: l
  } = O.Z.useExperiment({
    location: "GoLive_Source_Select"
  }), o = S.Z.supports(D.AN.GO_LIVE_HARDWARE), [a, m] = i.useState(null), [C, y] = i.useState(null), [Z, w] = i.useState(null), T = null != Z && Z.length > 0, [E, R] = i.useState(c.vA.WINDOW), [M, G] = i.useState(false), F = i.useRef(null), H = i.useRef(new u.Xp), z = (0, d.e7)([x.ZP], () => x.ZP.getRunningGames()), V = function(e, t, n) {
    let r = (0, j.Zy)({
      location: L.dr.STREAM_SOURCE_SELECT
    });
    return i.useMemo(() => {
      if (null == n || !r) return null;
      for (let r of n) {
        var i, l;
        let n = t.find(e => (0, I.Z)(r.id, e.windowHandle));
        if ((null == n ? true : n.id) == null) continue;
        let s = (0, _.lQ)(e, n.id);
        if (null != s && (null == (i = s.userStatus) ? true : i.enrolledAt) != null && (null == (l = s.userStatus) ? true : l.completedAt) == null) return {
          source: r,
          quest: s
        }
      }
      return null
    }, [r, e, t, n])
  }((0, d.e7)([v.Z], () => v.Z.quests), z, C), Y = i.useMemo(() => null == C ? null : [...C].sort((e, t) => (null == V ? true : V.source.id) === e.id ? false : (null == V ? true : V.source.id) === t.id ? 1 : W(t) - W(e)), [V, C]);
  i.useEffect(() => {
    let e = H.current;
    return (0, N.t)({
      width: 176,
      height: 99
    }).then(e => {
      let {
        screenSources: t,
        windowSources: n,
        cameraSources: r
      } = e;
      m(t), y(n), w(r)
    }), e.start(1e3, async () => {
      let {
        screenSources: e,
        windowSources: t,
        cameraSources: n
      } = await (0, N.t)({
        width: 176,
        height: 99
      });
      m(e), y(t), w(n)
    }), () => {
      e.stop()
    }
  }, []);
  let J = i.useCallback(e => {
      null !== e && (F.current = e, G(!e.isScrolledToTop()))
    }, []),
    [X, K] = i.useState(true);
  i.useEffect(() => {
    g.Z.hasPermission(k.Eu.SCREEN_RECORDING, {
      showAuthorizationError: false
    }).then(K)
  }, []);
  let q = function(e) {
    switch (e) {
      case c.vA.WINDOW:
        return Y;
      case c.vA.SCREEN:
        return a;
      case c.vA.CAMERA:
        return Z
    }
  }(E);
  if (null == q) returnfalse === X ? (0, r.jsxs)(f.Text, {
    className: U.errorMessage,
    variant: "text-md/normal",
    color: "text-danger",
    children: [B.intl.string(B.t["kW5h/f"]), (0, r.jsx)("br", {}), B.intl.string(B.t["5Jvu1d"])]
  }) : (0, r.jsx)(h.Z, {
    className: U.spinner,
    justify: h.Z.Justify.CENTER,
    align: h.Z.Align.CENTER,
    children: (0, r.jsx)(f.$jN, {})
  });
  let Q = q.map(e => {
    let {
      id: i
    } = e, l = (null == t ? true : t.id) === i;
    return (0, r.jsx)(f.P3F, {
      className: s()(U.tile, {
        [U.selected]: l
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
      className: U.segmentContainer,
      children: [(0, r.jsx)(P.Z, {
        separator: M
      }), (0, r.jsx)(f.sY7, {
        options: function() {
          let e = [{
            name: B.intl.string(B.t.tHoi7u),
            value: c.vA.WINDOW
          }, {
            name: B.intl.string(B.t["/iX8u7"]),
            value: c.vA.SCREEN
          }];
          return l && o && T && e.push({
            name: B.intl.string(B.t.cWt5Ul),
            value: c.vA.CAMERA
          }), e
        }(),
        value: E,
        onChange: e => {
          let {
            value: t
          } = e;
          return R(t)
        },
        className: U.segmentControl,
        optionClassName: U.segmentControlOption
      })]
    }), (0, r.jsxs)(f.Den, {
      ref: J,
      className: U.sourceScroller,
      onScroll: function() {
        let e = F.current;
        null != e && G(!e.isScrolledToTop())
      },
      children: [E === c.vA.WINDOW && null != V && (0, r.jsx)(b.Z, {
        quest: V.quest
      }), (0, r.jsx)(p.Z, {
        layout: p.Z.Layout.WRAP,
        columns: 2,
        className: U.sourceContainer,
        children: Q
      })]
    })]
  })
}

function H(e) {
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
    className: s()(U.nativeSourceSingleTypeButton, U.nativePickerRadioItem),
    children: (0, r.jsxs)("div", {
      className: U.nativeSourceSingleTypeButtonInner,
      children: [(0, r.jsx)(R.Z, {
        className: U.nativeSourceSingleTypeImage
      }), (0, r.jsx)(f.Text, {
        variant: "text-md/medium",
        color: "none",
        children: B.intl.string(B.t.Yp6h5e)
      })]
    })
  })
}

function z(e) {
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
    className: s()(U.nativeSourceTypeButton, U.nativePickerRadioItem),
    children: (0, r.jsxs)("div", {
      className: U.nativeSourceTypeButtonInner,
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

function V(e) {
  let {
    onSourceSelect: t
  } = e, [n, l] = i.useState([]), [o, c] = i.useState({}), d = i.useRef(new u.Xp);
  i.useEffect(() => {
    let e = d.current,
      t = () => {
        let e = Object.entries(S.Z.getVideoDevices()).filter(e => {
          let [t, n] = e;
          return !n.disabled
        });
        l(e), c(G({}, e.reduce((e, t) => {
          var n, r;
          let [i, l] = t;
          return n = G({}, e), r = r = {
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
    p = (0, y.isMac)() && a().satisfies(null === m.Z || true === m.Z ? true : m.Z.os.release, M.jR),
    x = (0, y.isMac)(),
    [g, _] = i.useState(false),
    v = i.useCallback(() => {
      _(!g)
    }, [g]),
    j = p ? (0, r.jsx)(H, {
      onSelect: t
    }) : (0, r.jsxs)("div", {
      className: U.nativePickerTypes,
      children: [(0, r.jsx)(z, {
        onSelect: t,
        id: "screen",
        name: B.intl.string(B.t.R4wpLC),
        text: B.intl.string(B.t.cVUFXV),
        icon: f.pzj
      }), (0, r.jsx)(z, {
        onSelect: t,
        id: "window",
        name: B.intl.string(B.t["+SLJCg"]),
        text: B.intl.string(B.t.dG2A1N),
        icon: f.GON
      }), x ? (0, r.jsx)(z, {
        onSelect: t,
        id: "app",
        name: B.intl.string(B.t.ct7AKS),
        text: B.intl.string(B.t["8lQwf3"]),
        icon: f.gw7
      }) : null]
    });
  return (0, r.jsxs)("div", {
    className: U.nativePickerScroll,
    children: [(0, r.jsx)(f.Text, {
      className: U.nativePickerLabel,
      variant: "text-md/semibold",
      color: "interactive-normal",
      children: B.intl.string(B.t.XyYoFR)
    }), j, 0 === n.length ? null : (0, r.jsxs)("div", {
      className: s()(U.nativePickerCaptureSection, g ? null : U.nativePickerCollapsed),
      children: [(0, r.jsxs)(f.P3F, {
        onClick: v,
        className: U.nativePickerLabel,
        children: [(0, r.jsx)(f.Text, {
          className: U.nativeCaptureDevicesText,
          variant: "text-md/semibold",
          color: "interactive-normal",
          children: B.intl.string(B.t.rO0Vi4)
        }), (0, r.jsx)(f.CJ0, {
          size: "sm",
          color: "currentColor",
          className: U.captureDevicesToggleIndicator
        })]
      }), (0, r.jsx)(f.FXm, {
        className: U.nativePickerCaptureList,
        onChange: h,
        radioItemClassName: U.nativePickerRadioItem,
        options: n.map(e => {
          let [t, n] = e;
          return {
            name: n.name,
            value: "camera:" + n.id,
            icon: f.Odl,
            radioItemIconClassName: U.hideRadioCheckbox
          }
        })
      })]
    })]
  })
}

function Y(e) {
  let {
    onSourceSelect: t,
    onCancel: n,
    pickerType: l
  } = e, {
    lastPickerAction: s,
    lastPickerError: o
  } = (0, E.Z)(t, n);
  return i.useEffect(() => {
    (0, y.isLinux)() || (0, y.isMac)() && a().satisfies(null === m.Z || true === m.Z ? true : m.Z.os.release, M.jR) ? (0, Z.T)(l) : (0, Z.t)()
  }, [l]), s === w.Uc.Error ? (0, r.jsx)(f.Text, {
    className: U.errorMessage,
    variant: "text-md/normal",
    color: "text-danger",
    children: null != o && o.length > 0 ? o : B.intl.string(B.t.CKsXk5)
  }) : (0, r.jsx)(R.Z, {
    animated: true,
    className: U.nativePickerGuide
  })
}