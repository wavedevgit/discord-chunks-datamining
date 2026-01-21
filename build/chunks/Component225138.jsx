/** Chunk was on 37220 **/
/** chunk id: 225138, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => et,
  default: () => ee
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
  Chunk796762 = require("./796762.js"),
  Chunk26737 = require("./26737.jsx"),
  Chunk29264 = require("./29264.jsx"),
  Chunk905041 = require("./905041.jsx"),
  Chunk89013 = require("./89013.jsx"),
  Chunk988500 = require("./988500.jsx"),
  Chunk570870 = require("./570870.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk786095 = require("./786095.jsx"),
  Chunk268623 = require("./268623.jsx"),
  Chunk293335 = require("./293335.jsx"),
  Chunk941389 = require("./941389.jsx"),
  Chunk289889 = require("./289889.jsx"),
  Chunk449751 = require("./449751.jsx"),
  Chunk749339 = require("./749339.jsx"),
  Chunk601184 = require("./601184.jsx"),
  Chunk557935 = require("./557935.jsx"),
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

function Y(e) {
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

function $(e, t) {
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
  let i, o, s, d, {
      channel: f,
      message: g,
      target: p,
      mediaItem: b,
      shouldHideMediaOptions: m,
      onSelect: y,
      onHeightUpdate: O
    } = e,
    {
      analyticsLocations: h
    } = (0, u.ZP)([c.Z.MESSAGE_CONTEXT_MENU]),
    v = p,
    j = p.getAttribute("data-type"),
    S = p.getAttribute("data-id"),
    E = p.getAttribute("data-name");
  if (null != b) o = i = s = b.url;
  else
    for (;
      (0, l.kK)(v);)(0, l.kK)(v, HTMLImageElement) && null != v.src && (o = v.src), (0, l.kK)(v, HTMLAnchorElement) && null != v.href && (i = v.href, d = v.textContent, null == o && "img" === v.getAttribute("data-role") && (o = i, v.hasAttribute("data-safe-src") && "" !== v.getAttribute("data-safe-src") && (s = v.getAttribute("data-safe-src")))), v = v.parentNode;
  let P = null != (n = null == (t = document.getSelection()) ? true : t.toString()) ? n : "";
  return (0, r.jsx)(u.Gt, {
    value: h,
    children: et({
      message: g,
      channel: f,
      mediaItem: b,
      textSelection: P,
      favoriteableType: j,
      favoriteableId: S,
      favoriteableName: E,
      itemHref: i,
      itemSrc: o,
      itemSafeSrc: s,
      itemTextContent: d,
      canReport: true,
      onHeightUpdate: O,
      onSelect: y,
      onClose: a.Zy,
      navId: "message",
      ariaLabel: W.intl.string(W.t.ChPNkN),
      shouldHideMediaOptions: m
    })
  })
}

function et(e) {
  let {
    message: t,
    channel: n,
    mediaItem: l,
    textSelection: a,
    favoriteableType: c,
    favoriteableId: u,
    favoriteableName: ee,
    itemHref: et,
    itemSrc: en,
    itemSafeSrc: er,
    itemTextContent: ei,
    canReport: el,
    onHeightUpdate: eo,
    onSelect: ea,
    onClose: es,
    navId: ec,
    ariaLabel: eu,
    shouldHideMediaOptions: ed = false
  } = e, ef = i.useRef(null);
  i.useEffect(() => {
    ef.current = Date.now()
  }, []), i.useEffect(() => () => {
    if (null != ef.current) {
      var e;
      let r = Date.now() - ef.current;
      v.default.track(q.rMx.MESSAGE_MENU_TIME_TO_CLOSE, {
        time_to_close_ms: r,
        channel_id: n.id,
        guild_id: null != (e = n.getGuildId()) ? e : true,
        message_id: t.id
      })
    }
  }, [n, t]);
  let eg = i.useCallback(() => {
      if (null != ef.current) {
        var e;
        let r = Date.now() - ef.current;
        v.default.track(q.rMx.MESSAGE_MENU_TIME_TO_SELECT, {
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
    } = (0, d.d)("MessageContextMenu"),
    {
      tidaWebformEnabled: em
    } = g.Z.useExperiment({
      location: "MessageContextMenu"
    }, {
      autoTrackExposure: false
    }),
    ey = (e, t) => {
      var n;
      return function e(t, n, r, l) {
        var o;
        if (null == t) return null;
        if (!r && !l) return t;
        if (Array.isArray(t)) return t.map(t => e(t, n, r, l));
        if (!i.isValidElement(t)) return t;
        let a = t.props,
          {
            icon: s,
            iconLeft: c,
            children: u
          } = a,
          d = function(e, t) {
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
          }(a, ["icon", "iconLeft", "children"]),
          f = null != u ? i.Children.map(u, t => null == t ? null : e(t, true, false, l)) : u;
        if (r) return i.cloneElement(t, $(Y({}, d), {
          icon: true,
          iconLeft: true,
          children: f
        }));
        let g = null != (o = null != c ? c : n) ? o : "function" == typeof s ? s : true;
        return null == g ? i.cloneElement(t, $(Y({}, d), {
          icon: s,
          iconLeft: c,
          children: f
        })) : l ? i.cloneElement(t, $(Y({}, d), {
          icon: true,
          iconLeft: g,
          children: f
        })) : t
      }(e, null == t ? true : t.iconToAdd, null != (n = null == t ? true : t.removeIcon) ? n : eb, ep)
    },
    eO = (0, C.Z)(t, n),
    eh = ey((0, p.Z)(a), {
      iconToAdd: o.TIy
    }),
    ev = ey((0, T.Z)(t, n, a), {
      iconToAdd: o.TIy
    }),
    ej = ey((0, y.Z)(a), {
      iconToAdd: o._Ve
    }),
    eS = ey((0, E.Z)(t, n), {
      iconToAdd: o.UZo,
      removeIcon: false
    }),
    eE = ey((0, w.Z)(t, n), {
      removeIcon: false
    }),
    eP = ey((0, U.Z)(t, n), {
      removeIcon: false
    }),
    eT = ey((0, N.Z)(t, n), {
      removeIcon: false
    }),
    eI = ey((0, z.Z)(t, n), {
      removeIcon: false
    }),
    e_ = ey((0, _.Z)(t)),
    eZ = ey((0, K.Z)(t, n), {
      iconToAdd: o.os0
    }),
    eA = ey((0, D.Z)(t, n)),
    ew = ey((0, S.Z)(t), {
      iconToAdd: o.plf
    }),
    ex = ey((0, h.Z)({
      commandType: s.yU.MESSAGE,
      commandTargetId: t.id,
      channel: n,
      guildId: true,
      onHeightUpdate: eo
    }), {
      iconToAdd: o.jje
    }),
    eN = ey((0, H.Z)(t, n), {
      iconToAdd: o.DuK
    }),
    eM = ey((0, M.Z)(t, n)),
    eD = ey((0, P.Z)(t, n)),
    eC = ey((0, I.Z)(t, n)),
    eL = ey((0, B.Z)(t, n)),
    ek = ey((0, L.Z)(t), {
      removeIcon: false
    }),
    eR = ey((0, O.Z)(t)),
    eG = ey((0, V.Z)(t), {
      iconToAdd: o.T39
    }),
    eU = ey((0, G.Z)(t, n), {
      iconToAdd: o.STQ,
      removeIcon: false
    }),
    eF = ey((0, k.Z)(t, n), {
      iconToAdd: o.STQ,
      removeIcon: false
    }),
    eH = ey((0, Z.Z)(t, n), {
      removeIcon: false
    }),
    eB = ey((0, F.ZP)(t), {
      removeIcon: false
    }),
    ez = ey((0, F.eH)(t), {
      removeIcon: false
    }),
    eK = ey((0, F.wY)(t), {
      iconToAdd: o.U65,
      removeIcon: false
    }),
    eV = ey((0, x.Z)({
      type: c,
      id: u,
      name: ee
    }), {
      iconToAdd: o.r7p
    }),
    eX = ey((0, j.Z)(a, n.getGuildId()), {
      iconToAdd: o.b7C
    }),
    eQ = ey((0, b.Z)(er, t, {
      shouldHideMediaOptions: ed,
      contentType: null == l ? true : l.contentType,
      originalContentType: null == l ? true : l.originalContentType
    }), {
      iconToAdd: o.XBm
    }),
    eJ = ey((0, X.Z)(t, l)),
    eq = ey((0, Q.Z)(t)),
    eW = ey((0, J.Z)(l, {
      shouldHideMediaOptions: ed
    }), {
      iconToAdd: o.d3s
    }),
    eY = ey((0, m.Z)(null != et ? et : en, ei, t, {
      shouldHideMediaOptions: ed
    }), {
      iconToAdd: o.xPt
    }),
    e$ = ey((0, f.Z)({
      id: t.id,
      label: W.intl.string(W.t.zBoHlf),
      shiftId: "".concat(t.channel_id, "-").concat(t.id)
    })),
    e0 = ey((0, A.Z)({
      messageId: t.id,
      itemId: u,
      type: c,
      imageSrc: en
    })),
    e4 = ey((0, R.Z)(t, n), {
      iconToAdd: o.STQ,
      removeIcon: false
    }),
    e1 = (0, r.jsx)(o.kSQ, {
      children: null != e0 ? e0 : e$
    }),
    e8 = e => {
      let {
        includeLinks: t
      } = e;
      return (0, r.jsxs)(o.kSQ, {
        children: [eV, eX, eQ, eJ, eq, eW, t && eY]
      })
    };
  return eb ? (0, r.jsxs)(o.v2r, {
    navId: ec,
    onClose: es,
    "aria-label": eu,
    onSelect: eg,
    children: [(0, r.jsxs)(o.kSQ, {
      children: ["" === a ? eO : null, eS, ek, eE, eP, eT, eI]
    }), (0, r.jsxs)(o.kSQ, {
      children: [ej, eZ, eA, ew, ex, eN, eM, eD, eL, eR, eG]
    }), (0, r.jsx)(o.kSQ, {
      children: ev
    }), em ? (0, r.jsxs)(r.Fragment, {
      children: [e1, e8({
        includeLinks: true
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [e8({
        includeLinks: true
      }), e1]
    }), (0, r.jsxs)(o.kSQ, {
      children: [e4, eH, el && eB, el && ez, eK]
    })]
  }) : (0, r.jsxs)(o.v2r, {
    navId: ec,
    onClose: es,
    "aria-label": eu,
    onSelect: eg,
    children: [(0, r.jsx)(o.kSQ, {
      children: eh
    }), (0, r.jsx)(o.kSQ, {
      children: ej
    }), (0, r.jsxs)(o.kSQ, {
      children: ["" === a ? eO : null, eS, ek]
    }), (0, r.jsxs)(o.kSQ, {
      children: [eE, eP, eT, eI]
    }), (0, r.jsxs)(o.kSQ, {
      children: [e_, eZ, eA, ew, ex, eN, eM, eD, eC, eL, eR, eG]
    }), (0, r.jsxs)(o.kSQ, {
      children: [eU, eF, eH, el && eB, el && ez, eK]
    }), em ? (0, r.jsxs)(r.Fragment, {
      children: [e1, e8({
        includeLinks: false
      }), (0, r.jsx)(o.kSQ, {
        children: eY
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [e8({
        includeLinks: false
      }), (0, r.jsx)(o.kSQ, {
        children: eY
      }), e1]
    })]
  })
}