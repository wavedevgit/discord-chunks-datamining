/** Chunk was on 37220 **/
/** chunk id: 225138, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => Q,
  default: () => q
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
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function q(e) {
  var t, n;
  let i, a, s, d, {
      channel: f,
      message: g,
      target: b,
      mediaItem: p,
      shouldHideMediaOptions: m,
      onSelect: O,
      onHeightUpdate: y
    } = e,
    {
      analyticsLocations: h
    } = (0, u.ZP)([c.Z.MESSAGE_CONTEXT_MENU]),
    v = b,
    j = b.getAttribute("data-type"),
    E = b.getAttribute("data-id"),
    S = b.getAttribute("data-name");
  if (null != p) a = i = s = p.url;
  else
    for (;
      (0, l.kK)(v);)(0, l.kK)(v, HTMLImageElement) && null != v.src && (a = v.src), (0, l.kK)(v, HTMLAnchorElement) && null != v.href && (i = v.href, d = v.textContent, null == a && "img" === v.getAttribute("data-role") && (a = i, v.hasAttribute("data-safe-src") && "" !== v.getAttribute("data-safe-src") && (s = v.getAttribute("data-safe-src")))), v = v.parentNode;
  let P = null != (n = null == (t = document.getSelection()) ? true : t.toString()) ? n : "";
  return (0, r.jsx)(u.Gt, {
    value: h,
    children: Q({
      message: g,
      channel: f,
      mediaItem: p,
      textSelection: P,
      favoriteableType: j,
      favoriteableId: E,
      favoriteableName: S,
      itemHref: i,
      itemSrc: a,
      itemSafeSrc: s,
      itemTextContent: d,
      canReport: true,
      onHeightUpdate: y,
      onSelect: O,
      onClose: o.Zy,
      navId: "message",
      ariaLabel: V.intl.string(V.t.ChPNkN),
      shouldHideMediaOptions: m
    })
  })
}

function Q(e) {
  let {
    message: t,
    channel: n,
    mediaItem: l,
    textSelection: o,
    favoriteableType: c,
    favoriteableId: u,
    favoriteableName: q,
    itemHref: Q,
    itemSrc: W,
    itemSafeSrc: J,
    itemTextContent: Y,
    canReport: $,
    onHeightUpdate: ee,
    onSelect: et,
    onClose: en,
    navId: er,
    ariaLabel: ei,
    shouldHideMediaOptions: el = false
  } = e, ea = i.useRef(null);
  i.useEffect(() => {
    ea.current = Date.now()
  }, []), i.useEffect(() => () => {
    if (null != ea.current) {
      var e;
      let r = Date.now() - ea.current;
      h.default.track(X.rMx.MESSAGE_MENU_TIME_TO_CLOSE, {
        time_to_close_ms: r,
        channel_id: n.id,
        guild_id: null != (e = n.getGuildId()) ? e : true,
        message_id: t.id
      })
    }
  }, [n, t]);
  let eo = i.useCallback(() => {
      if (null != ea.current) {
        var e;
        let r = Date.now() - ea.current;
        h.default.track(X.rMx.MESSAGE_MENU_TIME_TO_SELECT, {
          time_to_first_click_ms: r,
          channel_id: n.id,
          guild_id: null != (e = n.getGuildId()) ? e : true,
          message_id: t.id
        })
      }
      null == et || et()
    }, [et, n, t]),
    es = (0, g.Z)(o),
    ec = (0, m.Z)(o),
    eu = (0, A.Z)(t, n),
    ed = (0, S.Z)(t, n),
    ef = (0, T.Z)(t, n),
    eg = (0, x.Z)(t, n),
    eb = (0, N.Z)({
      type: c,
      id: u,
      name: q
    }),
    ep = (0, G.Z)(t, n),
    em = (0, w.Z)(t, n),
    eO = (0, D.Z)(t),
    ey = (0, P.Z)(t, n),
    eh = (0, _.Z)(t, n),
    ev = (0, C.Z)(t, n),
    ej = (0, L.Z)(t, n),
    eE = (0, I.Z)(t, n),
    eS = (0, k.ZP)(t),
    eP = (0, k.wY)(t),
    e_ = (0, k.eH)(t),
    eZ = (0, U.Z)(t, n),
    eI = (0, p.Z)(null != Q ? Q : W, Y, t, {
      shouldHideMediaOptions: el
    }),
    eT = (0, b.Z)(J, t, {
      shouldHideMediaOptions: el,
      contentType: null == l ? true : l.contentType,
      originalContentType: null == l ? true : l.originalContentType
    }),
    eN = (0, B.Z)(t, l),
    eM = (0, f.Z)({
      id: t.id,
      label: V.intl.string(V.t.zBoHlf),
      shiftId: "".concat(t.channel_id, "-").concat(t.id)
    }),
    ew = (0, R.Z)(t, n),
    ex = (0, M.Z)(t, n),
    eA = (0, F.Z)(t, n),
    eD = (0, v.Z)(o, n.getGuildId()),
    eC = (0, j.Z)(t),
    eL = (0, Z.Z)(t),
    eR = (0, z.Z)(t, n),
    ek = (0, K.Z)(t),
    eG = (0, E.Z)(t, n),
    eU = (0, y.Z)({
      commandType: s.yU.MESSAGE,
      commandTargetId: t.id,
      channel: n,
      guildId: true,
      onHeightUpdate: ee
    }),
    eF = (0, H.Z)(t),
    ez = (0, O.Z)(t),
    {
      forceIconsLeft: eH,
      reorderMessageMenuItems: eB
    } = (0, d.d)("MessageContextMenu");
  return (0, r.jsxs)(a.v2r, {
    navId: er,
    onClose: en,
    "aria-label": ei,
    onSelect: eo,
    forceIconsLeft: eH,
    children: [(0, r.jsx)(a.kSQ, {
      children: es
    }), (0, r.jsx)(a.kSQ, {
      children: ec
    }), (0, r.jsxs)(a.kSQ, {
      children: ["" === o ? eu : null, ed, eO, eG]
    }), (0, r.jsxs)(a.kSQ, {
      children: [ef, ew, ex, eA]
    }), (0, r.jsxs)(a.kSQ, {
      children: [eL, eR, eg, eC, eU, ep, em, ey, eh, eZ, ez, eF]
    }), (0, r.jsxs)(a.kSQ, {
      children: [ej, ev, eE, $ && eS, $ && e_, eP]
    }), (0, r.jsxs)(a.kSQ, {
      children: [eb, eD, eT, eN, ek]
    }), (0, r.jsx)(a.kSQ, {
      children: eI
    }), (0, r.jsx)(a.kSQ, {
      children: eM
    })]
  })
}