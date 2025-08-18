/** Chunk was on 2668 **/
/** chunk id: 542055, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./388685.js"), require("./781311.js"), require("./642613.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk658722 = require("./658722.js"),
  i = require.n(Chunk658722),
  Chunk392711 = require("./392711.js"),
  s = require.n(Chunk392711),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk709054 = require("./709054.js"),
  Chunk435064 = require("./435064.js"),
  Chunk39604 = require("./39604.js"),
  Chunk680056 = require("./680056.js"),
  Chunk10217 = require("./10217.jsx"),
  Chunk410426 = require("./410426.jsx"),
  Chunk207346 = require("./207346.jsx"),
  Chunk356659 = require("./356659.js"),
  Chunk862220 = require("./862220.js");

function w(e) {
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

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e) {
  let {
    channelId: t,
    onClose: a,
    transitionState: o
  } = e, [E, S] = l.useState(""), [k, Z] = l.useState("descending"), [L, D] = l.useState(true), [I, T] = l.useState(null), M = l.useDeferredValue(E), _ = (0, u.e7)([j.Z], () => j.Z.getClips()), z = (0, u.e7)([j.Z], () => j.Z.getPendingClips()), R = (0, u.e7)([j.Z], () => j.Z.getSettings().storageLocation), A = (0, u.Wu)([j.Z], () => j.Z.getNewClipIds()), {
    analyticsLocations: H
  } = (0, f.ZP)(m.Z.CLIPS_GALLERY), V = l.useMemo(() => [...z, ..._], [_, z]);
  (0, b.Z)({
    type: c.ImpressionTypes.MODAL,
    name: c.ImpressionNames.CLIP_GALLERY_VIEWED,
    properties: {
      number_of_clips_loaded: V.length
    }
  }, {
    disableTrack: L
  }, [V.length, L]), l.useEffect(() => ((0, y.eL)(), () => {
    (0, y.eL)(), (0, y.zq)()
  }), []);
  let B = l.useMemo(() => s()(V).filter(e => {
    if ("" === M.trim()) returntrue;
    let t = M.toLowerCase();
    return null != e.name && "" !== e.name && i()(t, e.name.toLowerCase()) || i()(t, e.applicationName.toLowerCase())
  }).sort((e, t) => "ascending" === k ? g.default.compare(e.id, t.id) : "descending" === k ? g.default.compare(t.id, e.id) : 0).chunk(3).value(), [V, M, k]);
  l.useEffect(() => {
    !async function() {
      D(true);
      try {
        await y.jv(R)
      } finally {
        D(false)
      }
    }()
  }, [R]);
  let F = l.useCallback(e => {
      (0, p.ZDy)(async () => {
        let {
          default: l
        } = await n.e("61526").then(n.bind(n, 22989));
        return n => (0, r.jsx)(l, N(w({}, n), {
          channelId: t,
          clip: e
        }))
      }, {
        modalKey: C.Ut
      })
    }, [t]),
    {
      onShareClick: G
    } = (0, h.Z)({
      channelId: t,
      setExporting: T
    }),
    Y = l.useCallback((e, t) => {
      (0, p.ZDy)(async () => {
        let {
          default: l
        } = await n.e("15915").then(n.bind(n, 799677));
        return n => (0, r.jsx)(l, N(w({
          clip: e
        }, n), {
          onBeforeDelete: t,
          onAfterDelete: () => n.onClose()
        }))
      })
    }, []),
    K = l.useCallback(e => {
      let {
        row: t
      } = e, n = B[t];
      return (0, r.jsx)("div", {
        className: P.clipsRow,
        children: n.map(e => {
          let t = 0 === e.length;
          return (0, r.jsx)(x.Z, {
            actionsDisabled: null != I || t,
            exporting: I === e.id,
            isNew: A.includes(e.id),
            onDelete: Y,
            onEdit: F,
            onShare: e => G({
              clip: e,
              onShareComplete: () => d.Mr(C.Qr)
            }),
            clip: e
          }, e.id)
        })
      }, "clips-gallery-".concat(t))
    }, [B, A, I, G, Y, F]),
    U = L || 0 !== B.length ? L ? (0, r.jsx)("div", {
      className: P.spinnerContainer,
      children: (0, r.jsx)(p.$jN, {})
    }) : (0, r.jsx)(p.aVo, {
      className: P.clipGrid,
      sections: [B.length],
      sectionHeight: 0,
      rowHeight: 328.25,
      renderRow: K
    }) : (0, r.jsx)(v.Z, {
      isEmptyBecauseQuery: V.length > 0,
      closePopout: a
    });
  return (0, r.jsx)(p.Y0X, {
    size: p.CgR.DYNAMIC,
    transitionState: o,
    className: P.root,
    parentComponent: "ClipsGalleryModal",
    children: (0, r.jsxs)(f.Gt, {
      value: H,
      children: [(0, r.jsx)(O.Z, {
        onClose: a,
        filterQuery: E,
        setFilterQuery: S,
        sortOrder: k,
        setSortOrder: Z
      }), U]
    })
  })
}