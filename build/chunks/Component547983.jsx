/** Chunk was on 1636 **/
/** chunk id: 547983, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => et,
  default: () => ee
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk621466 = require("./621466.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk155718 = require("./155718.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk441602 = require("./441602.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk486503 = require("./486503.js"),
  Chunk373963 = require("./373963.jsx"),
  Chunk115184 = require("./115184.jsx"),
  Chunk777933 = require("./777933.jsx"),
  Chunk826308 = require("./826308.jsx"),
  Chunk51512 = require("./51512.jsx"),
  Chunk773699 = require("./773699.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk363398 = require("./363398.jsx"),
  Chunk880457 = require("./880457.jsx"),
  Chunk840088 = require("./840088.jsx"),
  Chunk276887 = require("./276887.jsx"),
  Chunk577147 = require("./577147.jsx"),
  Chunk345254 = require("./345254.jsx"),
  Chunk734495 = require("./734495.jsx"),
  Chunk483768 = require("./483768.jsx"),
  Chunk522333 = require("./522333.jsx"),
  Chunk692457 = require("./692457.jsx"),
  Chunk253925 = require("./253925.jsx"),
  Chunk513560 = require("./513560.jsx"),
  Chunk20883 = require("./20883.jsx"),
  Chunk979766 = require("./979766.jsx"),
  Chunk982308 = require("./982308.jsx"),
  Chunk959239 = require("./959239.jsx"),
  Chunk420975 = require("./420975.jsx"),
  Chunk725924 = require("./725924.js"),
  Chunk207115 = require("./207115.jsx"),
  Chunk614323 = require("./614323.jsx"),
  Chunk292103 = require("./292103.jsx"),
  Chunk878956 = require("./878956.jsx"),
  Chunk389889 = require("./389889.jsx"),
  Chunk729883 = require("./729883.jsx"),
  Chunk474445 = require("./474445.jsx"),
  Chunk25287 = require("./25287.jsx"),
  Chunk220167 = require("./220167.jsx"),
  Chunk772331 = require("./772331.jsx"),
  Chunk649455 = require("./649455.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function $(e) {
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

function Q(e, t) {
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

function ee(e) {
  var t, n;
  let l, o, c, u, {
      channel: f,
      message: g,
      target: p,
      mediaItem: b,
      shouldHideMediaOptions: m,
      onSelect: y,
      onHeightUpdate: O
    } = e,
    {
      analyticsLocations: A
    } = (0, d.Ay)([s.A.MESSAGE_CONTEXT_MENU]),
    v = p,
    j = p.getAttribute("data-type"),
    h = p.getAttribute("data-id"),
    E = p.getAttribute("data-name");
  if (null != b) o = l = c = b.url;
  else
    for (;
      (0, i.vq)(v);)(0, i.vq)(v, HTMLImageElement) && null != v.src && (o = v.src), (0, i.vq)(v, HTMLAnchorElement) && null != v.href && (l = v.href, u = v.textContent, null == o && "img" === v.getAttribute("data-role") && (o = l, v.hasAttribute("data-safe-src") && "" !== v.getAttribute("data-safe-src") && (c = v.getAttribute("data-safe-src")))), v = v.parentNode;
  let S = null != (t = null == (n = document.getSelection()) ? true : n.toString()) ? t : "";
  return (0, r.jsx)(d.f5, {
    value: A,
    children: et({
      message: g,
      channel: f,
      mediaItem: b,
      textSelection: S,
      favoriteableType: j,
      favoriteableId: h,
      favoriteableName: E,
      itemHref: l,
      itemSrc: o,
      itemSafeSrc: c,
      itemTextContent: u,
      canReport: true,
      onHeightUpdate: O,
      onSelect: y,
      onClose: a.Z_,
      navId: "message",
      ariaLabel: Z.intl.string(Z.t.ChPNkN),
      shouldHideMediaOptions: m
    })
  })
}

function et(e) {
  let {
    message: t,
    channel: n,
    mediaItem: i,
    textSelection: a,
    favoriteableType: s,
    favoriteableId: d,
    favoriteableName: ee,
    itemHref: et,
    itemSrc: en,
    itemSafeSrc: er,
    itemTextContent: el,
    canReport: ei,
    onHeightUpdate: eo,
    onSelect: ea,
    onClose: ec,
    navId: es,
    ariaLabel: ed,
    shouldHideMediaOptions: eu = false
  } = e, ef = l.useRef(null);
  l.useEffect(() => {
    ef.current = Date.now()
  }, []), l.useEffect(() => () => {
    if (null != ef.current) {
      var e;
      let r = Date.now() - ef.current;
      v.default.track(Y.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
        time_to_close_ms: r,
        channel_id: n.id,
        guild_id: null != (e = n.getGuildId()) ? e : true,
        message_id: t.id
      })
    }
  }, [n, t]);
  let eg = l.useCallback(() => {
      if (null != ef.current) {
        var e;
        let r = Date.now() - ef.current;
        v.default.track(Y.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
          time_to_first_click_ms: r,
          channel_id: n.id,
          guild_id: null != (e = n.getGuildId()) ? e : true,
          message_id: t.id
        })
      }
      null == ea || ea()
    }, [ea, n, t]),
    {
      forceIconsLeft: ep,
      reorderMessageMenuItems: eb
    } = (0, u.P)("MessageContextMenu"),
    {
      tidaWebformEnabled: em
    } = g.A.useExperiment({
      location: "MessageContextMenu"
    }, {
      autoTrackExposure: false
    }),
    ey = (e, t) => {
      var n;
      return function e(t, n, r, i) {
        var o;
        if (null == t) return null;
        if (!r && !i) return t;
        if (Array.isArray(t)) return t.map(t => e(t, n, r, i));
        if (!l.isValidElement(t)) return t;
        let a = t.props,
          {
            icon: c,
            iconLeft: s,
            children: d
          } = a,
          u = function(e, t) {
            if (null == e) return {};
            var n, r, l, i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
              for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
              return i
            }
            if (i = function(e, t) {
                if (null == e) return {};
                var n, r, l = {},
                  i = Object.getOwnPropertyNames(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
              }(e, t), Object.getOwnPropertySymbols)
              for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
          }(a, ["icon", "iconLeft", "children"]),
          f = null != d ? l.Children.map(d, t => null == t ? null : e(t, true, false, i)) : d;
        if (r) return l.cloneElement(t, Q($({}, u), {
          icon: true,
          iconLeft: true,
          children: f
        }));
        let g = null != (o = null != s ? s : n) ? o : "function" == typeof c ? c : true;
        return null == g ? l.cloneElement(t, Q($({}, u), {
          icon: c,
          iconLeft: s,
          children: f
        })) : i ? l.cloneElement(t, Q($({}, u), {
          icon: true,
          iconLeft: g,
          children: f
        })) : t
      }(e, null == t ? true : t.iconToAdd, null != (n = null == t ? true : t.removeIcon) ? n : eb, ep)
    },
    eO = (0, R.A)(t, n),
    eA = ey((0, p.A)(a), {
      iconToAdd: o.TdU
    }),
    ev = ey((0, _.A)(t, n, a), {
      iconToAdd: o.TdU
    }),
    ej = ey((0, y.A)(a), {
      iconToAdd: o.$p$
    }),
    eh = ey((0, E.A)(t, n), {
      iconToAdd: o.xVQ,
      removeIcon: false
    }),
    eE = ey((0, x.A)(t, n), {
      removeIcon: false
    }),
    eS = ey((0, F.A)(t, n), {
      removeIcon: false
    }),
    e_ = ey((0, M.A)(t, n), {
      removeIcon: false
    }),
    eD = ey((0, K.A)(t, n), {
      removeIcon: false
    }),
    eI = ey((0, I.A)(t)),
    eP = ey((0, H.A)(t, n), {
      iconToAdd: o.UaP
    }),
    eT = ey((0, N.A)(t, n)),
    ex = ey((0, h.A)(t), {
      iconToAdd: o.cFy
    }),
    ew = ey((0, A.A)({
      commandType: c.kc.MESSAGE,
      commandTargetId: t.id,
      channel: n,
      guildId: true,
      onHeightUpdate: eo
    }), {
      iconToAdd: o.k9F
    }),
    eM = ey((0, V.A)(t, n), {
      iconToAdd: o.fNY
    }),
    eC = ey((0, C.A)(t, n)),
    eN = ey((0, S.A)(t, n)),
    eR = ey((0, D.A)(t, n)),
    eG = ey((0, B.A)(t, n)),
    eL = ey((0, G.A)(t), {
      removeIcon: false
    }),
    ek = ey((0, O.A)(t)),
    eU = ey((0, q.A)(t), {
      iconToAdd: o.O4
    }),
    eF = ey((0, U.A)(t, n), {
      iconToAdd: o.tjR,
      removeIcon: false
    }),
    eX = ey((0, L.A)(t, n), {
      iconToAdd: o.tjR,
      removeIcon: false
    }),
    eV = ey((0, P.A)(t, n), {
      removeIcon: false
    }),
    eB = ey((0, X.Ay)(t), {
      removeIcon: false
    }),
    eK = ey((0, X.S_)(t), {
      removeIcon: false
    }),
    eH = ey((0, X.zo)(t), {
      iconToAdd: o.iFK,
      removeIcon: false
    }),
    eq = ey((0, w.A)({
      type: s,
      id: d,
      name: ee
    }), {
      iconToAdd: o.Gg5
    }),
    eJ = ey((0, j.A)(a, n.getGuildId()), {
      iconToAdd: o.lmn
    }),
    eW = ey((0, b.A)(er, t, {
      shouldHideMediaOptions: eu,
      contentType: null == i ? true : i.contentType,
      originalContentType: null == i ? true : i.originalContentType
    }), {
      iconToAdd: o.xfq
    }),
    ez = ey((0, J.A)(t, i)),
    eY = ey((0, W.A)(t)),
    eZ = ey((0, z.A)(i, {
      shouldHideMediaOptions: eu
    }), {
      iconToAdd: o.mir
    }),
    e$ = ey((0, m.A)(null != et ? et : en, el, t, {
      shouldHideMediaOptions: eu
    }), {
      iconToAdd: o.qYV
    }),
    eQ = ey((0, f.A)({
      id: t.id,
      label: Z.intl.string(Z.t.zBoHlf),
      shiftId: "".concat(t.channel_id, "-").concat(t.id)
    })),
    e0 = ey((0, T.A)({
      messageId: t.id,
      itemId: d,
      type: s,
      imageSrc: en
    })),
    e7 = ey((0, k.A)(t, n), {
      iconToAdd: o.tjR,
      removeIcon: false
    }),
    e9 = (0, r.jsx)(o.rXV, {
      children: null != e0 ? e0 : eQ
    }),
    e1 = e => {
      let {
        includeLinks: t
      } = e;
      return (0, r.jsxs)(o.rXV, {
        children: [eq, eJ, eW, ez, eY, eZ, t && e$]
      })
    };
  return eb ? (0, r.jsxs)(o.W1t, {
    "data-menu-mixed": true,
    navId: es,
    onClose: ec,
    "aria-label": ed,
    onSelect: eg,
    children: [(0, r.jsxs)(o.rXV, {
      children: ["" === a ? eO : null, eh, eL, eE, eS, e_, eD]
    }), (0, r.jsxs)(o.rXV, {
      children: [ej, eP, eT, ex, ew, eM, eC, eN, eG, ek, eU]
    }), (0, r.jsx)(o.rXV, {
      children: ev
    }), em ? (0, r.jsxs)(r.Fragment, {
      children: [e9, e1({
        includeLinks: true
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [e1({
        includeLinks: true
      }), e9]
    }), (0, r.jsxs)(o.rXV, {
      children: [e7, eV, ei && eB, ei && eK, eH]
    })]
  }) : (0, r.jsxs)(o.W1t, {
    "data-menu-mixed": true,
    navId: es,
    onClose: ec,
    "aria-label": ed,
    onSelect: eg,
    children: [(0, r.jsx)(o.rXV, {
      children: eA
    }), (0, r.jsx)(o.rXV, {
      children: ej
    }), (0, r.jsxs)(o.rXV, {
      children: ["" === a ? eO : null, eh, eL]
    }), (0, r.jsxs)(o.rXV, {
      children: [eE, eS, e_, eD]
    }), (0, r.jsxs)(o.rXV, {
      children: [eI, eP, eT, ex, ew, eM, eC, eN, eR, eG, ek, eU]
    }), (0, r.jsxs)(o.rXV, {
      children: [eF, eX, eV, ei && eB, ei && eK, eH]
    }), em ? (0, r.jsxs)(r.Fragment, {
      children: [e9, e1({
        includeLinks: false
      }), (0, r.jsx)(o.rXV, {
        children: e$
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [e1({
        includeLinks: false
      }), (0, r.jsx)(o.rXV, {
        children: e$
      }), e9]
    })]
  })
}