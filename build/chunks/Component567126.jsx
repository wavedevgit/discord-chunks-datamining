/** Chunk was on 46746 **/
/** chunk id: 567126, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Hu: () => X,
  jx: () => F,
  oA: () => H,
  ov: () => z,
  se: () => J
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
  Chunk755721 = require("./755721.js"),
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
  Chunk613098 = require("./613098.js");

function W(e) {
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

function z(e, t, n, r) {
  let i = (0, O.isWindows)() ? (0, T.Z)(x.ZP, y.Z) : null,
    l = x.ZP.getRunningGames(),
    s = null == n ? true : n.split(":")[1],
    o = e.id.split(":")[1];
  if (null != s && s === o) return 0;
  if (null != t && t === e.id) return 5;
  if (null != i && (0, Z.Z)(e.id, i.windowHandle)) return 4;
  if (null != l.find(t => (0, Z.Z)(e.id, t.windowHandle))) return 3;
  let a = null == r ? true : r[o];
  return null != a && M.Mm.has(a) ? 2 : 1
}

function F(e, t, n) {
  let r = (0, b.Z)({
    location: L.dr.STREAM_SOURCE_SELECT
  });
  return i.useMemo(() => {
    if (null == n || !r) return null;
    for (let r of n) {
      var i, l;
      let n = t.find(e => (0, Z.Z)(r.id, e.windowHandle));
      if ((null == n ? true : n.id) == null) continue;
      let s = (0, v.lQ)(e, n.id);
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
  } = w.Z.useExperiment({
    location: "GoLive_Source_Select"
  }), o = C.Z.supports(B.AN.GO_LIVE_HARDWARE), [a, f] = i.useState(null), [h, v] = i.useState(null), [b, y] = i.useState(null), O = null != b && b.length > 0, [Z, I] = i.useState(c.vA.WINDOW), [N, T] = i.useState(false), E = i.useRef(null), A = i.useRef(new u.Xp), M = (0, d.e7)([x.ZP], () => x.ZP.getRunningGames()), L = F((0, d.e7)([j.Z], () => j.Z.quests), M, h), W = i.useMemo(() => null == h ? null : [...h].sort((e, t) => z(t, null == L ? true : L.source.id) - z(e, null == L ? true : L.source.id)), [L, h]);
  i.useEffect(() => {
    let e = A.current;
    return (0, P.t)({
      width: 176,
      height: 99
    }).then(e => {
      let {
        screenSources: t,
        windowSources: n,
        cameraSources: r
      } = e;
      f(t), v(n), y(r)
    }), e.start(1e3, async () => {
      let {
        screenSources: e,
        windowSources: t,
        cameraSources: n
      } = await (0, P.t)({
        width: 176,
        height: 99
      });
      f(e), v(t), y(n)
    }), () => {
      e.stop()
    }
  }, []);
  let H = i.useCallback(e => {
      null !== e && (E.current = e, T(!e.isScrolledToTop()))
    }, []),
    [V, Y] = i.useState(true);
  i.useEffect(() => {
    _.Z.hasPermission(D.Eu.SCREEN_RECORDING, {
      showAuthorizationError: false
    }).then(Y)
  }, []);
  let J = function(e) {
    switch (e) {
      case c.vA.WINDOW:
        return W;
      case c.vA.SCREEN:
        return a;
      case c.vA.CAMERA:
        return b
    }
  }(Z);
  if (null == J) returnfalse === V ? (0, r.jsxs)(m.Text, {
    className: U.errorMessage,
    variant: "text-md/normal",
    color: "text-danger",
    children: [G.intl.string(G.t["kW5h/f"]), (0, r.jsx)("br", {}), G.intl.string(G.t["5Jvu1d"])]
  }) : (0, r.jsx)(p.Z, {
    className: U.spinner,
    justify: p.Z.Justify.CENTER,
    align: p.Z.Align.CENTER,
    children: (0, r.jsx)(m.$jN, {})
  });
  let X = J.map(e => {
    let {
      id: i
    } = e, l = (null == t ? true : t.id) === i;
    return (0, r.jsx)(m.P3F, {
      className: s()(U.tile, {
        [U.selected]: l
      }),
      onClick: () => n(e, null),
      children: (0, r.jsx)(k.Z, {
        source: e,
        selectedSource: t
      }, e.id)
    }, i)
  });
  return (0, r.jsxs)(i.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: U.segmentContainer,
      children: [(0, r.jsx)(R.Z, {
        separator: N
      }), (0, r.jsx)(m.sY7, {
        options: function() {
          let e = [{
            name: G.intl.string(G.t.tHoi7u),
            value: c.vA.WINDOW
          }, {
            name: G.intl.string(G.t["/iX8u7"]),
            value: c.vA.SCREEN
          }];
          return l && o && O && e.push({
            name: G.intl.string(G.t.cWt5Ul),
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
        className: U.segmentControl,
        optionClassName: U.segmentControlOption
      })]
    }), (0, r.jsxs)(m.Den, {
      ref: H,
      className: U.sourceScroller,
      onScroll: function() {
        let e = E.current;
        null != e && T(!e.isScrolledToTop())
      },
      children: [Z === c.vA.WINDOW && null != L && (0, r.jsx)(S.Z, {
        quest: L.quest
      }), (0, r.jsx)(g.Z, {
        layout: g.Z.Layout.WRAP,
        columns: 2,
        className: U.sourceContainer,
        children: X
      })]
    })]
  })
}

function V(e) {
  let {
    onSelect: t
  } = e, n = i.useCallback(() => {
    t({
      id: "prepicked:",
      name: G.intl.string(G.t["KKcy9/"]),
      url: ""
    })
  }, [t]);
  return (0, r.jsx)(m.P3F, {
    role: "radio",
    "aria-checked": false,
    onClick: n,
    tabIndex: 0,
    className: s()(U.nativeSourceSingleTypeButton, U.nativePickerRadioItem),
    children: (0, r.jsxs)("div", {
      className: U.nativeSourceSingleTypeButtonInner,
      children: [(0, r.jsx)(A.Z, {
        className: U.nativeSourceSingleTypeImage
      }), (0, r.jsx)(m.Text, {
        variant: "text-md/medium",
        color: "none",
        children: G.intl.string(G.t.Yp6h5e)
      })]
    })
  })
}

function Y(e) {
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
  return (0, r.jsx)(m.P3F, {
    role: "radio",
    "aria-checked": false,
    onClick: c,
    tabIndex: 0,
    className: s()(U.nativeSourceTypeButton, U.nativePickerRadioItem),
    children: (0, r.jsxs)("div", {
      className: U.nativeSourceTypeButtonInner,
      children: [(0, r.jsx)(o, {
        size: "lg"
      }), (0, r.jsx)(m.Text, {
        variant: "text-sm/medium",
        color: "none",
        children: l
      })]
    })
  })
}

function J(e) {
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
        l(e), c(W({}, e.reduce((e, t) => {
          var n, r;
          let [i, l] = t;
          return n = W({}, e), r = r = {
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
  let p = i.useCallback(e => {
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
    g = (0, O.isMac)() && a().satisfies(null === h.Z || true === h.Z ? true : h.Z.os.release, M.jR),
    x = (0, O.isMac)(),
    [_, v] = i.useState(false),
    j = i.useCallback(() => {
      v(!_)
    }, [_]),
    b = g ? (0, r.jsx)(V, {
      onSelect: t
    }) : (0, r.jsxs)("div", {
      className: U.nativePickerTypes,
      children: [(0, r.jsx)(Y, {
        onSelect: t,
        id: "screen",
        name: G.intl.string(G.t.R4wpLC),
        text: G.intl.string(G.t.cVUFXV),
        icon: m.pzj
      }), (0, r.jsx)(Y, {
        onSelect: t,
        id: "window",
        name: G.intl.string(G.t["+SLJCg"]),
        text: G.intl.string(G.t.dG2A1N),
        icon: m.GON
      }), x ? (0, r.jsx)(Y, {
        onSelect: t,
        id: "app",
        name: G.intl.string(G.t.ct7AKS),
        text: G.intl.string(G.t["8lQwf3"]),
        icon: m.gw7
      }) : null]
    });
  return (0, r.jsxs)("div", {
    className: U.nativePickerScroll,
    children: [(0, r.jsx)(m.Text, {
      className: U.nativePickerLabel,
      variant: "text-md/semibold",
      color: "interactive-normal",
      children: G.intl.string(G.t.XyYoFR)
    }), b, 0 === n.length ? null : (0, r.jsxs)("div", {
      className: s()(U.nativePickerCaptureSection, _ ? null : U.nativePickerCollapsed),
      children: [(0, r.jsxs)(m.P3F, {
        onClick: j,
        className: U.nativePickerLabel,
        children: [(0, r.jsx)(m.Text, {
          className: U.nativeCaptureDevicesText,
          variant: "text-md/semibold",
          color: "interactive-normal",
          children: G.intl.string(G.t.rO0Vi4)
        }), (0, r.jsx)(m.CJ0, {
          size: "sm",
          color: "currentColor",
          className: U.captureDevicesToggleIndicator
        })]
      }), (0, r.jsx)(f.Gu, {
        className: U.nativePickerCaptureList,
        onChange: p,
        radioItemClassName: U.nativePickerRadioItem,
        options: n.map(e => {
          let [t, n] = e;
          return {
            name: n.name,
            value: "camera:" + n.id,
            icon: m.Odl,
            radioItemIconClassName: U.hideRadioCheckbox
          }
        })
      })]
    })]
  })
}

function X(e) {
  let {
    onSourceSelect: t,
    onCancel: n,
    pickerType: l
  } = e, {
    lastPickerAction: s,
    lastPickerError: o
  } = (0, E.Z)(t, n);
  return i.useEffect(() => {
    (0, O.isLinux)() || (0, O.isMac)() && a().satisfies(null === h.Z || true === h.Z ? true : h.Z.os.release, M.jR) ? (0, I.T)(l) : (0, I.t)()
  }, [l]), s === N.Uc.Error ? (0, r.jsx)(m.Text, {
    className: U.errorMessage,
    variant: "text-md/normal",
    color: "text-danger",
    children: null != o && o.length > 0 ? o : G.intl.string(G.t.CKsXk5)
  }) : (0, r.jsx)(A.Z, {
    animated: true,
    className: U.nativePickerGuide
  })
}