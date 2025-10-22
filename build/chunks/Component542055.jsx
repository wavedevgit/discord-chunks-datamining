/** Chunk was on 57478 **/
/** chunk id: 542055, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => N
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

function P(e) {
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

function w(e, t) {
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

function N(e) {
  let {
    channelId: t,
    onClose: r,
    transitionState: o
  } = e, [N, E] = a.useState(""), [T, I] = a.useState("descending"), [S, k] = a.useState(true), [Z, L] = a.useState(null), D = a.useDeferredValue(N), M = (0, u.e7)([h.Z], () => h.Z.getClips()), R = (0, u.e7)([h.Z], () => h.Z.getPendingClips()), H = (0, u.e7)([h.Z], () => h.Z.getSettings().storageLocation), A = (0, u.Wu)([h.Z], () => h.Z.getNewClipIds()), {
    analyticsLocations: z
  } = (0, f.ZP)(m.Z.CLIPS_GALLERY), B = a.useMemo(() => [...R, ...M], [M, R]);
  (0, g.Z)({
    type: c.ImpressionTypes.MODAL,
    name: c.ImpressionNames.CLIP_GALLERY_VIEWED,
    properties: {
      number_of_clips_loaded: B.length
    }
  }, {
    disableTrack: S
  }, [B.length, S]), a.useEffect(() => ((0, x.eL)(), () => {
    (0, x.eL)(), (0, x.zq)()
  }), []);
  let V = a.useMemo(() => s()(B).filter(e => {
    if ("" === D.trim()) returntrue;
    let t = D.toLowerCase();
    return null != e.name && "" !== e.name && i()(t, e.name.toLowerCase()) || i()(t, e.applicationName.toLowerCase())
  }).sort((e, t) => "ascending" === T ? b.default.compare(e.id, t.id) : "descending" === T ? b.default.compare(t.id, e.id) : 0).chunk(3).value(), [B, D, T]);
  a.useEffect(() => {
    !async function() {
      k(true);
      try {
        await x.jv(H)
      } finally {
        k(false)
      }
    }()
  }, [H]);
  let F = a.useCallback(e => {
      (0, p.ZDy)(async () => {
        let {
          default: a
        } = await n.e("61526").then(n.bind(n, 22989));
        return n => (0, l.jsx)(a, w(P({}, n), {
          channelId: t,
          clip: e
        }))
      }, {
        modalKey: C.Ut
      })
    }, [t]),
    {
      onShareClick: G
    } = (0, j.Z)({
      channelId: t,
      setExporting: L
    }),
    K = a.useCallback((e, t) => {
      (0, p.ZDy)(async () => {
        let {
          default: a
        } = await n.e("15915").then(n.bind(n, 799677));
        return n => (0, l.jsx)(a, w(P({
          clip: e
        }, n), {
          onBeforeDelete: t,
          onAfterDelete: () => n.onClose()
        }))
      })
    }, []),
    Y = a.useCallback(e => {
      let {
        row: t
      } = e, n = V[t];
      return (0, l.jsx)("div", {
        className: O.clipsRow,
        children: n.map(e => {
          let t = 0 === e.length;
          return (0, l.jsx)(y.Z, {
            actionsDisabled: null != Z || t,
            exporting: Z === e.id,
            isNew: A.includes(e.id),
            onDelete: K,
            onEdit: F,
            onShare: e => G({
              clip: e,
              onShareComplete: () => d.Mr(C.Qr)
            }),
            clip: e
          }, e.id)
        })
      }, "clips-gallery-".concat(t))
    }, [V, A, Z, G, K, F]),
    U = S || 0 !== V.length ? S ? (0, l.jsx)("div", {
      className: O.spinnerContainer,
      children: (0, l.jsx)(p.$jN, {})
    }) : (0, l.jsx)(p.aVo, {
      className: O.clipGrid,
      sections: [V.length],
      sectionHeight: 0,
      rowHeight: 328.25,
      renderRow: Y
    }) : (0, l.jsx)(_.Z, {
      isEmptyBecauseQuery: B.length > 0,
      closePopout: r
    });
  return (0, l.jsx)(p.Y0X, {
    size: p.CgR.DYNAMIC,
    transitionState: o,
    className: O.root,
    parentComponent: "ClipsGalleryModal",
    children: (0, l.jsxs)(f.Gt, {
      value: z,
      children: [(0, l.jsx)(v.Z, {
        onClose: r,
        filterQuery: N,
        setFilterQuery: E,
        sortOrder: T,
        setSortOrder: I
      }), U]
    })
  })
}