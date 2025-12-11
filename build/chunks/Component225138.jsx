/** Chunk was on 37220 **/
/** chunk id: 225138, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => ee,
  default: () => $
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk374470 = require("./374470.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk911969 = require("./911969.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk285230 = require("./285230.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk26737 = require("./26737.jsx"),
  Chunk29264 = require("./29264.jsx"),
  Chunk905041 = require("./905041.jsx"),
  Chunk89013 = require("./89013.jsx"),
  Chunk988500 = require("./988500.jsx"),
  Chunk570870 = require("./570870.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk786095 = require("./786095.jsx"),
  Chunk268623 = require("./268623.jsx"),
  Chunk986240 = require("./986240.jsx"),
  Chunk293335 = require("./293335.jsx"),
  Chunk941389 = require("./941389.jsx"),
  Chunk289889 = require("./289889.jsx"),
  Chunk449751 = require("./449751.jsx"),
  Chunk749339 = require("./749339.jsx"),
  Chunk601184 = require("./601184.jsx"),
  Chunk6148 = require("./6148.jsx"),
  Chunk519110 = require("./519110.jsx"),
  Chunk759875 = require("./759875.jsx"),
  Chunk168405 = require("./168405.jsx"),
  Chunk536639 = require("./536639.jsx"),
  Chunk720904 = require("./720904.jsx"),
  Chunk88791 = require("./88791.jsx"),
  Chunk385302 = require("./385302.jsx"),
  Chunk445445 = require("./445445.js"),
  Chunk873699 = require("./873699.jsx"),
  Chunk134323 = require("./134323.jsx"),
  Chunk429260 = require("./429260.jsx"),
  Chunk1626 = require("./1626.jsx"),
  Chunk279329 = require("./279329.jsx"),
  Chunk627938 = require("./627938.jsx"),
  Chunk189976 = require("./189976.jsx"),
  Chunk512303 = require("./512303.jsx"),
  Chunk481300 = require("./481300.jsx"),
  Chunk975368 = require("./975368.jsx"),
  Chunk304685 = require("./304685.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function J(e) {
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

function Y(e, t) {
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

function $(e) {
  var t, n;
  let i, o, s, d, {
      channel: f,
      message: g,
      target: b,
      mediaItem: p,
      shouldHideMediaOptions: O,
      onSelect: y,
      onHeightUpdate: m
    } = e,
    {
      analyticsLocations: v
    } = (0, u.ZP)([c.Z.MESSAGE_CONTEXT_MENU]),
    h = b,
    j = b.getAttribute("data-type"),
    S = b.getAttribute("data-id"),
    E = b.getAttribute("data-name");
  if (null != p) o = i = s = p.url;
  else
    for (;
      (0, l.kK)(h);)(0, l.kK)(h, HTMLImageElement) && null != h.src && (o = h.src), (0, l.kK)(h, HTMLAnchorElement) && null != h.href && (i = h.href, d = h.textContent, null == o && "img" === h.getAttribute("data-role") && (o = i, h.hasAttribute("data-safe-src") && "" !== h.getAttribute("data-safe-src") && (s = h.getAttribute("data-safe-src")))), h = h.parentNode;
  let P = null != (n = null == (t = document.getSelection()) ? true : t.toString()) ? n : "";
  return (0, r.jsx)(u.Gt, {
    value: v,
    children: ee({
      message: g,
      channel: f,
      mediaItem: p,
      textSelection: P,
      favoriteableType: j,
      favoriteableId: S,
      favoriteableName: E,
      itemHref: i,
      itemSrc: o,
      itemSafeSrc: s,
      itemTextContent: d,
      canReport: true,
      onHeightUpdate: m,
      onSelect: y,
      onClose: a.Zy,
      navId: "message",
      ariaLabel: W.intl.string(W.t.ChPNkN),
      shouldHideMediaOptions: O
    })
  })
}

function ee(e) {
  let {
    message: t,
    channel: n,
    mediaItem: l,
    textSelection: a,
    favoriteableType: c,
    favoriteableId: u,
    favoriteableName: $,
    itemHref: ee,
    itemSrc: et,
    itemSafeSrc: en,
    itemTextContent: er,
    canReport: ei,
    onHeightUpdate: el,
    onSelect: eo,
    onClose: ea,
    navId: es,
    ariaLabel: ec,
    shouldHideMediaOptions: eu = false
  } = e, ed = i.useRef(null);
  i.useEffect(() => {
    ed.current = Date.now()
  }, []), i.useEffect(() => () => {
    if (null != ed.current) {
      var e;
      let r = Date.now() - ed.current;
      v.default.track(q.rMx.MESSAGE_MENU_TIME_TO_CLOSE, {
        time_to_close_ms: r,
        channel_id: n.id,
        guild_id: null != (e = n.getGuildId()) ? e : true,
        message_id: t.id
      })
    }
  }, [n, t]);
  let ef = i.useCallback(() => {
      if (null != ed.current) {
        var e;
        let r = Date.now() - ed.current;
        v.default.track(q.rMx.MESSAGE_MENU_TIME_TO_SELECT, {
          time_to_first_click_ms: r,
          channel_id: n.id,
          guild_id: null != (e = n.getGuildId()) ? e : true,
          message_id: t.id
        })
      }
      null == eo || eo()
    }, [eo, n, t]),
    {
      forceIconsLeft: eg,
      reorderMessageMenuItems: eb
    } = (0, d.d)("MessageContextMenu"),
    ep = (e, t) => {
      var n;
      return function e(t, n, r, l) {
        if (null == t) return null;
        if (!r && !l) return t;
        if (Array.isArray(t)) return t.map(t => e(t, n, r, l));
        if (!i.isValidElement(t)) return t;
        let o = t.props,
          {
            icon: a,
            iconLeft: s,
            children: c
          } = o,
          u = function(e, t) {
            if (null == e) return {};
            var n, r, i = function(e, t) {
              if (null == e) return {};
              var n, r, i = {},
                l = Object.keys(e);
              for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
              return i
            }(e, t);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
            }
            return i
          }(o, ["icon", "iconLeft", "children"]),
          d = null != c ? i.Children.map(c, t => null == t ? null : e(t, true, false, l)) : c;
        if (r) return i.cloneElement(t, Y(J({}, u), {
          icon: true,
          iconLeft: true,
          children: d
        }));
        if (l) {
          var f;
          return i.cloneElement(t, Y(J({}, u), {
            icon: true,
            iconLeft: null != (f = null != s ? s : n) ? f : a,
            children: d
          }))
        }
        return t
      }(e, null == t ? true : t.iconToAdd, null != (n = null == t ? true : t.removeIcon) ? n : eb, eg)
    },
    eO = (0, D.Z)(t, n),
    ey = ep((0, g.Z)(a), {
      iconToAdd: o.TIy
    }),
    em = ep((0, T.Z)(t, n, a), {
      iconToAdd: o.TIy
    }),
    ev = ep((0, O.Z)(a), {
      iconToAdd: o._Ve
    }),
    eh = ep((0, E.Z)(t, n), {
      iconToAdd: o.UZo,
      removeIcon: false
    }),
    ej = ep((0, w.Z)(t, n), {
      removeIcon: false
    }),
    eS = ep((0, G.Z)(t, n), {
      removeIcon: false
    }),
    eE = ep((0, N.Z)(t, n), {
      removeIcon: false
    }),
    eP = ep((0, H.Z)(t, n), {
      removeIcon: false
    }),
    eT = ep((0, I.Z)(t)),
    e_ = ep((0, B.Z)(t, n), {
      iconToAdd: o.os0
    }),
    eI = ep((0, M.Z)(t, n)),
    eZ = ep((0, j.Z)(t), {
      iconToAdd: o.plf
    }),
    ew = ep((0, m.Z)({
      commandType: s.yU.MESSAGE,
      commandTargetId: t.id,
      channel: n,
      guildId: true,
      onHeightUpdate: el
    }), {
      iconToAdd: o.jje
    }),
    eA = ep((0, F.Z)(t, n), {
      iconToAdd: o.DuK
    }),
    eN = ep((0, x.Z)(t, n)),
    ex = ep((0, P.Z)(t, n)),
    eM = ep((0, _.Z)(t, n)),
    eD = ep((0, z.Z)(t, n)),
    eC = ep((0, C.Z)(t), {
      removeIcon: false
    }),
    eL = ep((0, S.Z)(t, n)),
    eR = ep((0, y.Z)(t)),
    ek = ep((0, K.Z)(t), {
      iconToAdd: o.T39
    }),
    eG = ep((0, k.Z)(t, n), {
      iconToAdd: o.STQ,
      removeIcon: false
    }),
    eU = ep((0, L.Z)(t, n), {
      iconToAdd: o.STQ,
      removeIcon: false
    }),
    eF = ep((0, Z.Z)(t, n), {
      removeIcon: false
    }),
    ez = ep((0, U.ZP)(t), {
      removeIcon: false
    }),
    eH = ep((0, U.eH)(t), {
      removeIcon: false
    }),
    eB = ep((0, U.wY)(t), {
      removeIcon: false
    }),
    eK = ep((0, A.Z)({
      type: c,
      id: u,
      name: $
    }), {
      iconToAdd: o.r7p
    }),
    eX = ep((0, h.Z)(a, n.getGuildId()), {
      iconToAdd: o.b7C
    }),
    eV = ep((0, b.Z)(en, t, {
      shouldHideMediaOptions: eu,
      contentType: null == l ? true : l.contentType,
      originalContentType: null == l ? true : l.originalContentType
    }), {
      iconToAdd: o.XBm
    }),
    eQ = ep((0, X.Z)(t, l)),
    eq = ep((0, V.Z)(t)),
    eW = ep((0, Q.Z)(l, {
      shouldHideMediaOptions: eu
    }), {
      iconToAdd: o.d3s
    }),
    eJ = ep((0, p.Z)(null != ee ? ee : et, er, t, {
      shouldHideMediaOptions: eu
    }), {
      iconToAdd: o.xPt
    }),
    eY = ep((0, f.Z)({
      id: t.id,
      label: W.intl.string(W.t.zBoHlf),
      shiftId: "".concat(t.channel_id, "-").concat(t.id)
    })),
    e$ = ep((0, R.Z)(t, n), {
      iconToAdd: o.STQ,
      removeIcon: false
    });
  return eb ? (0, r.jsxs)(o.v2r, {
    navId: es,
    onClose: ea,
    "aria-label": ec,
    onSelect: ef,
    children: [(0, r.jsxs)(o.kSQ, {
      children: ["" === a ? eO : null, eh, eC, ej, eS, eE, eP]
    }), (0, r.jsxs)(o.kSQ, {
      children: [eL, ev, e_, eI, eZ, ew, eA, eN, ex, eD, eR, ek]
    }), (0, r.jsx)(o.kSQ, {
      children: em
    }), (0, r.jsxs)(o.kSQ, {
      children: [eK, eX, eV, eQ, eq, eW, eJ]
    }), (0, r.jsxs)(o.kSQ, {
      children: [e$, eF, ei && ez, ei && eH, eB]
    })]
  }) : (0, r.jsxs)(o.v2r, {
    navId: es,
    onClose: ea,
    "aria-label": ec,
    onSelect: ef,
    children: [(0, r.jsx)(o.kSQ, {
      children: ey
    }), (0, r.jsx)(o.kSQ, {
      children: ev
    }), (0, r.jsxs)(o.kSQ, {
      children: ["" === a ? eO : null, eh, eC, eL]
    }), (0, r.jsxs)(o.kSQ, {
      children: [ej, eS, eE, eP]
    }), (0, r.jsxs)(o.kSQ, {
      children: [eT, e_, eI, eZ, ew, eA, eN, ex, eM, eD, eR, ek]
    }), (0, r.jsxs)(o.kSQ, {
      children: [eG, eU, eF, ei && ez, ei && eH, eB]
    }), (0, r.jsxs)(o.kSQ, {
      children: [eK, eX, eV, eQ, eq, eW]
    }), (0, r.jsx)(o.kSQ, {
      children: eJ
    }), (0, r.jsx)(o.kSQ, {
      children: eY
    })]
  })
}