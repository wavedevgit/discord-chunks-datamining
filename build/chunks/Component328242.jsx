/** Chunk was on 46746 **/
/** chunk id: 328242, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk209739 = require("./209739.js"),
  a = require.n(Chunk209739),
  Chunk268146 = require("./268146.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk579806 = require("./579806.js"),
  Chunk594190 = require("./594190.js"),
  Chunk320724 = require("./320724.js"),
  Chunk751571 = require("./751571.js"),
  Chunk569984 = require("./569984.js"),
  Chunk63063 = require("./63063.js"),
  Chunk358085 = require("./358085.js"),
  Chunk747268 = require("./747268.js"),
  Chunk215915 = require("./215915.js"),
  Chunk855403 = require("./855403.js"),
  Chunk567126 = require("./567126.jsx"),
  Chunk615161 = require("./615161.jsx"),
  Chunk761274 = require("./761274.js"),
  Chunk637824 = require("./637824.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk602804 = require("./602804.js");

function I(e) {
  let {
    source: t
  } = e;
  return t.id.startsWith(c.vA.SCREEN) ? (0, r.jsx)(u.pzj, {
    size: "xs"
  }) : t.id.startsWith(c.vA.WINDOW) ? null != t.icon && "" !== t.icon ? (0, r.jsx)("img", {
    src: t.icon,
    className: Z.sourceIcon,
    alt: ""
  }) : (0, r.jsx)(u.GON, {
    size: "xs"
  }) : (0, r.jsx)(u.Odl, {
    size: "xs"
  })
}

function P(e) {
  let {
    source: t,
    selected: n,
    onClick: i
  } = e, {
    url: l,
    name: o
  } = t;
  return (0, r.jsxs)(u.P3F, {
    onClick: () => i(t),
    className: s()(Z.source, {
      [Z.selectedSource]: n
    }),
    children: [(0, r.jsx)("div", {
      className: Z.sourcePreviewContainer,
      children: (0, r.jsxs)("div", {
        className: Z.sourcePreview,
        children: [(0, r.jsx)("img", {
          src: l,
          className: Z.sourcePreviewImage,
          alt: ""
        }), (0, r.jsx)("div", {
          className: Z.sourceOverlay,
          children: (0, r.jsx)("div", {
            className: Z.sourceOverlayCTA,
            children: (0, r.jsx)(u.Text, {
              variant: "text-sm/medium",
              color: "button-filled-white-text",
              children: w.intl.string(w.t.z7WGho)
            })
          })
        })]
      })
    }), (0, r.jsxs)("div", {
      className: Z.sourceNameContainer,
      children: [(0, r.jsx)(I, {
        source: t
      }), (0, r.jsx)(u.Text, {
        variant: "text-sm/medium",
        className: Z.sourceName,
        children: o
      })]
    })]
  })
}

function N(e) {
  let {
    onClick: t
  } = e, [{
    windowSources: n,
    deviceSources: l,
    screenSources: s,
    sourceType: o,
    fetchingSources: x,
    selectedSource: O,
    discordSourceId: I,
    hasPermission: N
  }] = (0, y.E_)(), {
    smarterSourceOrdering: E
  } = (0, j.E)({
    location: "GoLiveSourceGrid"
  }), R = (0, d.e7)([h.ZP], () => h.ZP.getRunningGames()), A = (0, d.cj)([h.ZP], () => {
    let e = h.ZP.getCandidateGames(),
      t = {};
    for (let n of e) null != n.windowHandle && (t[n.windowHandle] = n.exeName);
    return t
  }), k = (0, d.e7)([g.Z], () => g.Z.quests), M = (0, S.jx)(k, R, n);
  i.useEffect(() => ((0, m.Ky)(), m.P7), []);
  let D = i.useMemo(() => E ? [...n].sort((e, t) => (0, S.ov)(t, null == M ? true : M.source.id, I, A) - (0, S.ov)(e, null == M ? true : M.source.id, I, A)) : n, [M, E, n, I, A]);
  if (x) {
    if (false === N) {
      let e = false;
      if ((0, _.isMac)()) {
        var L, B;
        let t = null === f.Z || true === f.Z || null == (B = f.Z.remoteApp) || null == (L = B.getVersion) ? true : L.call(B);
        e = !v.o || "0.0.0" === t || a().satisfies(t, "0.0.363")
      }
      return (0, r.jsxs)("div", {
        className: Z.errorBox,
        children: [(0, r.jsxs)(u.Text, {
          className: Z.errorText,
          variant: "text-md/normal",
          color: "text-danger",
          children: [w.intl.string(w.t["kW5h/f"]), (0, r.jsx)("br", {}), w.intl.string(w.t["5Jvu1d"])]
        }), e && (0, r.jsx)(u.zxk, {
          text: w.intl.string(w.t["XgZk+v"]),
          onClick: () => {
            p.Z.openSettings(C.Eu.SCREEN_RECORDING)
          }
        })]
      })
    }
    return (0, r.jsx)("div", {
      className: Z.loading,
      children: (0, r.jsx)(u.$jN, {})
    })
  }
  let U = [];
  return (U = o === c.vA.WINDOW ? D : o === c.vA.SCREEN ? s : l, o === c.vA.CAMERA && 0 === U.length) ? (0, r.jsx)(T, {}) : (0, r.jsx)("div", {
    className: Z.root,
    children: U.map(e => (0, r.jsx)(P, {
      onClick: t,
      source: e,
      selected: null != O && "windowHandle" in O ? (0, b.Z)(e.id, O.windowHandle) : (null == O ? true : O.id) === e.id
    }, e.id))
  })
}

function T() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk602804.emptyState,
    children: [(0, Chunk951288.jsx)(Chunk481060.Odl, {
      size: "md",
      color: Chunk481060.TVs.colors.ICON_MUTED,
      className: Chunk602804.emptyIcon
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-lg/medium",
      color: "header-primary",
      className: Chunk602804.emptyHeader,
      children: Chunk388032.intl.string(Chunk637824.default["/z3YaW"])
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      color: "text-secondary",
      className: Chunk602804.emptyBody,
      children: Chunk388032.intl.string(Chunk637824.default.agwSGB)
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      variant: "text-sm/semibold",
      children: Chunk388032.intl.format(Chunk637824.default.xpVzr6, {
        helpdeskURL: Chunk63063.Z.getArticleURL(0x53d41ade17)
      })
    })]
  })
}