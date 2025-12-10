/** Chunk was on 37220 **/
/** chunk id: 225138, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => $,
  default: () => Y
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
  Chunk667922 = require("./667922.jsx"),
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

function J(e, t) {
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

function Y(e) {
  var t, n;
  let i, o, s, d, {
      channel: f,
      message: g,
      target: b,
      mediaItem: p,
      shouldHideMediaOptions: m,
      onSelect: O,
      onHeightUpdate: v
    } = e,
    {
      analyticsLocations: y
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
    value: y,
    children: $({
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
      onHeightUpdate: v,
      onSelect: O,
      onClose: a.Zy,
      navId: "message",
      ariaLabel: q.intl.string(q.t.ChPNkN),
      shouldHideMediaOptions: m
    })
  })
}

function $(e) {
  let {
    message: t,
    channel: n,
    mediaItem: l,
    textSelection: a,
    favoriteableType: c,
    favoriteableId: u,
    favoriteableName: Y,
    itemHref: $,
    itemSrc: ee,
    itemSafeSrc: et,
    itemTextContent: en,
    canReport: er,
    onHeightUpdate: ei,
    onSelect: el,
    onClose: eo,
    navId: ea,
    ariaLabel: es,
    shouldHideMediaOptions: ec = false
  } = e, eu = i.useRef(null);
  i.useEffect(() => {
    eu.current = Date.now()
  }, []), i.useEffect(() => () => {
    if (null != eu.current) {
      var e;
      let r = Date.now() - eu.current;
      y.default.track(Q.rMx.MESSAGE_MENU_TIME_TO_CLOSE, {
        time_to_close_ms: r,
        channel_id: n.id,
        guild_id: null != (e = n.getGuildId()) ? e : true,
        message_id: t.id
      })
    }
  }, [n, t]);
  let ed = i.useCallback(() => {
      if (null != eu.current) {
        var e;
        let r = Date.now() - eu.current;
        y.default.track(Q.rMx.MESSAGE_MENU_TIME_TO_SELECT, {
          time_to_first_click_ms: r,
          channel_id: n.id,
          guild_id: null != (e = n.getGuildId()) ? e : true,
          message_id: t.id
        })
      }
      null == el || el()
    }, [el, n, t]),
    {
      forceIconsLeft: ef,
      reorderMessageMenuItems: eg
    } = (0, d.d)("MessageContextMenu"),
    eb = (e, t) => {
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
        if (r) return i.cloneElement(t, J(W({}, u), {
          icon: true,
          iconLeft: true,
          children: d
        }));
        if (l) {
          var f;
          return i.cloneElement(t, J(W({}, u), {
            icon: true,
            iconLeft: null != (f = null != s ? s : n) ? f : a,
            children: d
          }))
        }
        return t
      }(e, null == t ? true : t.iconToAdd, null != (n = null == t ? true : t.removeIcon) ? n : eg, ef)
    },
    ep = (0, D.Z)(t, n),
    em = eb((0, g.Z)(a), {
      iconToAdd: o.TIy
    }),
    eO = eb((0, I.Z)(t, n, a), {
      iconToAdd: o.TIy
    }),
    ev = eb((0, m.Z)(a), {
      iconToAdd: o._Ve
    }),
    ey = eb((0, E.Z)(t, n), {
      iconToAdd: o.EO4,
      removeIcon: false
    }),
    eh = eb((0, N.Z)(t, n), {
      removeIcon: false
    }),
    ej = eb((0, k.Z)(t, n), {
      removeIcon: false
    }),
    eS = eb((0, A.Z)(t, n), {
      removeIcon: false
    }),
    eE = eb((0, z.Z)(t, n), {
      removeIcon: false
    }),
    eP = eb((0, T.Z)(t)),
    eI = eb((0, H.Z)(t, n), {
      iconToAdd: o.os0
    }),
    e_ = eb((0, M.Z)(t, n)),
    eT = eb((0, j.Z)(t), {
      iconToAdd: o.plf
    }),
    eZ = eb((0, v.Z)({
      commandType: s.yU.MESSAGE,
      commandTargetId: t.id,
      channel: n,
      guildId: true,
      onHeightUpdate: ei
    }), {
      iconToAdd: o.jje
    }),
    eN = eb((0, U.Z)(t, n), {
      iconToAdd: o.DuK
    }),
    ew = eb((0, x.Z)(t, n)),
    eA = eb((0, P.Z)(t, n)),
    ex = eb((0, _.Z)(t, n)),
    eM = eb((0, F.Z)(t, n)),
    eD = eb((0, C.Z)(t), {
      removeIcon: false
    }),
    eC = eb((0, S.Z)(t, n)),
    eL = eb((0, O.Z)(t)),
    eR = eb((0, B.Z)(t), {
      iconToAdd: o.T39
    }),
    ek = eb((0, R.Z)(t, n), {
      iconToAdd: o.P$X,
      removeIcon: false
    }),
    eG = eb((0, L.Z)(t, n), {
      iconToAdd: o.P$X,
      removeIcon: false
    }),
    eU = eb((0, Z.Z)(t, n), {
      removeIcon: false
    }),
    eF = eb((0, G.ZP)(t), {
      removeIcon: false
    }),
    ez = eb((0, G.eH)(t), {
      removeIcon: false
    }),
    eH = eb((0, G.wY)(t), {
      removeIcon: false
    }),
    eB = eb((0, w.Z)({
      type: c,
      id: u,
      name: Y
    }), {
      iconToAdd: o.r7p,
      removeIcon: false
    }),
    eK = eb((0, h.Z)(a, n.getGuildId()), {
      iconToAdd: o.b7C,
      removeIcon: false
    }),
    eX = eb((0, b.Z)(et, t, {
      shouldHideMediaOptions: ec,
      contentType: null == l ? true : l.contentType,
      originalContentType: null == l ? true : l.originalContentType
    }), {
      removeIcon: false
    }),
    eV = eb((0, K.Z)(t, l)),
    eQ = eb((0, X.Z)(t)),
    eq = eb((0, V.Z)(l, {
      shouldHideMediaOptions: ec
    }), {
      iconToAdd: o.d3s,
      removeIcon: false
    }),
    eW = eb((0, p.Z)(null != $ ? $ : ee, en, t, {
      shouldHideMediaOptions: ec
    }), {
      removeIcon: false
    }),
    eJ = eb((0, f.Z)({
      id: t.id,
      label: q.intl.string(q.t.zBoHlf),
      shiftId: "".concat(t.channel_id, "-").concat(t.id)
    }), {
      removeIcon: false
    });
  return eg ? (0, r.jsxs)(o.v2r, {
    navId: ea,
    onClose: eo,
    "aria-label": es,
    onSelect: ed,
    children: [(0, r.jsxs)(o.kSQ, {
      children: ["" === a ? ep : null, ey, eD, eh, ej, eS, eE]
    }), (0, r.jsxs)(o.kSQ, {
      children: [eC, ev, eI, e_, eT, eZ, eN, ew, eA, eM, eL, eR]
    }), (0, r.jsx)(o.kSQ, {
      children: eO
    }), (0, r.jsxs)(o.kSQ, {
      children: [eB, eK, eX, eV, eQ, eq]
    }), (0, r.jsxs)(o.kSQ, {
      children: [ek, eG, eU, er && eF, er && ez, eH]
    }), (0, r.jsx)(o.kSQ, {
      children: eW
    })]
  }) : (0, r.jsxs)(o.v2r, {
    navId: ea,
    onClose: eo,
    "aria-label": es,
    onSelect: ed,
    children: [(0, r.jsx)(o.kSQ, {
      children: em
    }), (0, r.jsx)(o.kSQ, {
      children: ev
    }), (0, r.jsxs)(o.kSQ, {
      children: ["" === a ? ep : null, ey, eD, eC]
    }), (0, r.jsxs)(o.kSQ, {
      children: [eh, ej, eS, eE]
    }), (0, r.jsxs)(o.kSQ, {
      children: [eP, eI, e_, eT, eZ, eN, ew, eA, ex, eM, eL, eR]
    }), (0, r.jsxs)(o.kSQ, {
      children: [ek, eG, eU, er && eF, er && ez, eH]
    }), (0, r.jsxs)(o.kSQ, {
      children: [eB, eK, eX, eV, eQ, eq]
    }), (0, r.jsx)(o.kSQ, {
      children: eW
    }), (0, r.jsx)(o.kSQ, {
      children: eJ
    })]
  })
}