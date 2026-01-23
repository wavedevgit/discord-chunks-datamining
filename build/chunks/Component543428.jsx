/** Chunk was on 4918 **/
/** chunk id: 543428, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  $: () => O,
  default: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk521489 = require("./521489.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk274372 = require("./274372.js"),
  Chunk794905 = require("./794905.js"),
  Chunk219480 = require("./219480.jsx"),
  Chunk650995 = require("./650995.jsx"),
  Chunk792852 = require("./792852.js"),
  Chunk409067 = require("./409067.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk144894 = require("./144894.js");

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var l = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(l);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
      return Object.getOwnPropertyDescriptor(l, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = l[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var l = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      l.push.apply(l, n)
    }
    return l
  })(Object(t)).forEach(function(l) {
    Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l))
  }), e
}
let O = Chunk64700.createContext({
  selectedClipIds: new Set,
  toggleClipSelection: () => {},
  clearSelection: () => {},
  isMultiSelectMode: false
});

function x(e) {
  let {
    channelId: t,
    onClose: x,
    onClipClick: C
  } = e, w = function(e, t) {
    if (null == e) return {};
    var l, n, r, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (r = 0, l = Reflect.ownKeys(e); r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var l, n, r = {},
          i = Object.getOwnPropertyNames(e);
        for (n = 0; n < i.length; n++) l = i[n], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
        return r
      }(e, t), Object.getOwnPropertySymbols)
      for (r = 0, l = Object.getOwnPropertySymbols(e); r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i
  }(e, ["channelId", "onClose", "onClipClick"]), {
    analyticsLocations: P
  } = (0, u.Ay)(o.A.CLIPS_GALLERY), [A, E] = r.useState(new Set), {
    clipsByGame: I,
    filteredClips: S,
    favoriteClips: N,
    allClips: k
  } = (0, b.a)(), {
    onShareClick: D
  } = (0, p.A)(t), M = (0, i.bG)([d.A], () => d.A.getExportingClipIds().length > 0), L = (0, y.P)(e => e.selectedGameId), H = r.useMemo(() => {
    var e;
    return null == L || "favorites" === L ? null : null != (e = I.find(e => e.applicationId === L)) ? e : null
  }, [L, I]), T = r.useMemo(() => {
    var e;
    return "favorites" === L ? N : null != (e = null == H ? true : H.filteredClips) ? e : S
  }, [L, H, S, N]), R = r.useMemo(() => {
    var e;
    return "favorites" === L ? v.intl.string(v.t["9rlCk1"]) : null != (e = null == H ? true : H.name) ? e : v.intl.string(v.t.dPVrEv)
  }, [L, H]), V = r.useCallback(e => {
    E(t => {
      let l = new Set(t);
      return l.has(e) ? l.delete(e) : l.add(e), l
    })
  }, []), G = r.useCallback(() => {
    E(new Set)
  }, []), _ = A.size > 0, K = r.useCallback(() => {
    let e = k.filter(e => A.has(e.id));
    (0, c.mMO)(async () => {
      let {
        default: t
      } = await l.e("13367").then(l.bind(l, 223818));
      return l => (0, n.jsx)(t, g(h({}, l), {
        clips: e,
        onAfterDelete: () => {
          G(), l.onClose()
        }
      }))
    }, {
      stackingBehavior: "stack"
    })
  }, [k, A, G]), z = r.useCallback(async () => {
    let e = k.filter(e => A.has(e.id));
    await D({
      clips: e
    }), G()
  }, [k, A, D, G]), U = r.useMemo(() => ({
    selectedClipIds: A,
    toggleClipSelection: V,
    clearSelection: G,
    isMultiSelectMode: _
  }), [A, V, G, _]);
  return (0, n.jsx)(u.f5, {
    value: P,
    children: (0, n.jsx)(O.Provider, {
      value: U,
      children: (0, n.jsx)(s.N, g(h({
        onClose: x
      }, w), {
        children: (0, n.jsxs)("div", {
          className: j.jT,
          children: [(0, n.jsx)(f.A, {
            clipsByGame: I,
            filteredClips: S,
            favoriteClips: N,
            allClips: k
          }), (0, n.jsxs)("div", {
            className: j.Qs,
            children: [(0, n.jsxs)("div", {
              className: j.$Q,
              children: [(0, n.jsx)(c.Heading, {
                variant: "heading-md/medium",
                color: "text-default",
                children: R
              }), (0, n.jsxs)("div", {
                className: j.$s,
                children: [_ && (0, n.jsxs)(n.Fragment, {
                  children: [(0, n.jsx)(a.m, {
                    text: v.intl.string(v.t.RDE0Sc),
                    children: (0, n.jsx)(c.K0, {
                      onClick: z,
                      icon: c.liv,
                      size: "sm",
                      variant: "icon-only",
                      "aria-label": v.intl.string(v.t.RDE0Sc),
                      loading: M
                    })
                  }), (0, n.jsx)(a.m, {
                    text: v.intl.string(v.t.oyYWHE),
                    children: (0, n.jsx)(c.K0, {
                      onClick: K,
                      icon: c.ucK,
                      size: "sm",
                      variant: "icon-only",
                      "aria-label": v.intl.string(v.t.oyYWHE)
                    })
                  })]
                }), (0, n.jsx)(c.K0, {
                  onClick: x,
                  icon: c.d$L,
                  size: "sm",
                  variant: "icon-only",
                  "aria-label": v.intl.string(v.t.cpT0Cq)
                })]
              })]
            }), (0, n.jsx)(m.A, {
              channelId: t,
              filteredClips: T,
              totalClipCount: k.length,
              onClipClick: C
            })]
          })]
        })
      }))
    })
  })
}