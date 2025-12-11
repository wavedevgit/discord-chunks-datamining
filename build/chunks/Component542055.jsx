/** Chunk was on 61342 **/
/** chunk id: 542055, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  U: () => x,
  default: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk352065 = require("./352065.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk435064 = require("./435064.js"),
  Chunk680056 = require("./680056.js"),
  Chunk651587 = require("./651587.jsx"),
  Chunk870731 = require("./870731.jsx"),
  Chunk52436 = require("./52436.js"),
  Chunk965762 = require("./965762.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk114121 = require("./114121.js");

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let x = Chunk473749.createContext({
  selectedClipIds: new Set,
  toggleClipSelection: () => {},
  clearSelection: () => {},
  isMultiSelectMode: false
});

function O(e) {
  var {
    channelId: t,
    onClose: O,
    onClipClick: C
  } = e, w = function(e, t) {
    if (null == e) return {};
    var n, l, r = function(e, t) {
      if (null == e) return {};
      var n, l, r = {},
        i = Object.keys(e);
      for (l = 0; l < i.length; l++) n = i[l], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["channelId", "onClose", "onClipClick"]);
  let {
    analyticsLocations: P
  } = (0, u.ZP)(o.Z.CLIPS_GALLERY), [k, I] = r.useState(new Set), {
    clipsByGame: S,
    filteredClips: E,
    favoriteClips: N,
    allClips: M
  } = (0, y.n)(), {
    onShareClick: D
  } = (0, p.Z)(t), Z = (0, i.e7)([d.Z], () => d.Z.getExportingClipIds().length > 0), L = (0, b.f)(e => e.selectedGameId), H = r.useMemo(() => {
    var e;
    return null == L || "favorites" === L ? null : null != (e = S.find(e => e.applicationId === L)) ? e : null
  }, [L, S]), T = r.useMemo(() => {
    var e;
    return "favorites" === L ? N : null != (e = null == H ? true : H.filteredClips) ? e : E
  }, [L, H, E, N]), A = r.useMemo(() => {
    var e;
    return "favorites" === L ? v.intl.string(v.t["9rlCk1"]) : null != (e = null == H ? true : H.name) ? e : v.intl.string(v.t.dPVrEv)
  }, [L, H]), R = r.useCallback(e => {
    I(t => {
      let n = new Set(t);
      return n.has(e) ? n.delete(e) : n.add(e), n
    })
  }, []), V = r.useCallback(() => {
    I(new Set)
  }, []), _ = k.size > 0, U = r.useCallback(() => {
    let e = M.filter(e => k.has(e.id));
    (0, c.ZDy)(async () => {
      let {
        default: t
      } = await n.e("81409").then(n.bind(n, 210480));
      return n => (0, l.jsx)(t, g(j({}, n), {
        clips: e,
        onAfterDelete: () => {
          V(), n.onClose()
        }
      }))
    }, {
      stackingBehavior: "stack"
    })
  }, [M, k, V]), z = r.useCallback(async () => {
    let e = M.filter(e => k.has(e.id));
    await D({
      clips: e
    }), V()
  }, [M, k, D, V]), B = r.useMemo(() => ({
    selectedClipIds: k,
    toggleClipSelection: R,
    clearSelection: V,
    isMultiSelectMode: _
  }), [k, R, V, _]);
  return (0, l.jsx)(u.Gt, {
    value: P,
    children: (0, l.jsx)(x.Provider, {
      value: B,
      children: (0, l.jsx)(s.A, g(j({
        onClose: O
      }, w), {
        children: (0, l.jsxs)("div", {
          className: h.modalContainer,
          children: [(0, l.jsx)(f.Z, {
            clipsByGame: S,
            filteredClips: E,
            favoriteClips: N,
            allClips: M
          }), (0, l.jsxs)("div", {
            className: h.content,
            children: [(0, l.jsxs)("div", {
              className: h.contentHeader,
              children: [(0, l.jsx)(c.Heading, {
                variant: "heading-md/medium",
                color: "text-default",
                children: A
              }), (0, l.jsxs)("div", {
                className: h.headerActions,
                children: [_ && (0, l.jsxs)(l.Fragment, {
                  children: [(0, l.jsx)(a.u, {
                    text: v.intl.string(v.t.RDE0Sc),
                    children: (0, l.jsx)(c.hU, {
                      onClick: z,
                      icon: c.aAc,
                      size: "sm",
                      variant: "icon-only",
                      "aria-label": v.intl.string(v.t.RDE0Sc),
                      loading: Z
                    })
                  }), (0, l.jsx)(a.u, {
                    text: v.intl.string(v.t.oyYWHE),
                    children: (0, l.jsx)(c.hU, {
                      onClick: U,
                      icon: c.XHJ,
                      size: "sm",
                      variant: "icon-only",
                      "aria-label": v.intl.string(v.t.oyYWHE)
                    })
                  })]
                }), (0, l.jsx)(c.hU, {
                  onClick: O,
                  icon: c.Uz9,
                  size: "sm",
                  variant: "icon-only",
                  "aria-label": v.intl.string(v.t.cpT0Cq)
                })]
              })]
            }), (0, l.jsx)(m.Z, {
              channelId: t,
              filteredClips: T,
              totalClipCount: M.length,
              onClipClick: C
            })]
          })]
        })
      }))
    })
  })
}