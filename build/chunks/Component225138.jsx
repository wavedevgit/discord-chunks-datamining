/** Chunk was on 37220 **/
/** chunk id: 225138, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => W,
  default: () => Q
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
  Chunk304685 = require("./304685.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function Q(e) {
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
    children: W({
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
      ariaLabel: q.intl.string(q.t.ChPNkN),
      shouldHideMediaOptions: m
    })
  })
}

function W(e) {
  let {
    message: t,
    channel: n,
    mediaItem: l,
    textSelection: o,
    favoriteableType: c,
    favoriteableId: u,
    favoriteableName: Q,
    itemHref: W,
    itemSrc: J,
    itemSafeSrc: Y,
    itemTextContent: $,
    canReport: ee,
    onHeightUpdate: et,
    onSelect: en,
    onClose: er,
    navId: ei,
    ariaLabel: el,
    shouldHideMediaOptions: ea = false
  } = e, eo = i.useRef(null);
  i.useEffect(() => {
    eo.current = Date.now()
  }, []), i.useEffect(() => () => {
    if (null != eo.current) {
      var e;
      let r = Date.now() - eo.current;
      h.default.track(V.rMx.MESSAGE_MENU_TIME_TO_CLOSE, {
        time_to_close_ms: r,
        channel_id: n.id,
        guild_id: null != (e = n.getGuildId()) ? e : true,
        message_id: t.id
      })
    }
  }, [n, t]);
  let es = i.useCallback(() => {
      if (null != eo.current) {
        var e;
        let r = Date.now() - eo.current;
        h.default.track(V.rMx.MESSAGE_MENU_TIME_TO_SELECT, {
          time_to_first_click_ms: r,
          channel_id: n.id,
          guild_id: null != (e = n.getGuildId()) ? e : true,
          message_id: t.id
        })
      }
      null == en || en()
    }, [en, n, t]),
    ec = (0, g.Z)(o),
    eu = (0, m.Z)(o),
    ed = (0, A.Z)(t, n),
    ef = (0, S.Z)(t, n),
    eg = (0, T.Z)(t, n),
    eb = (0, x.Z)(t, n),
    ep = (0, N.Z)({
      type: c,
      id: u,
      name: Q
    }),
    em = (0, G.Z)(t, n),
    eO = (0, w.Z)(t, n),
    ey = (0, D.Z)(t),
    eh = (0, P.Z)(t, n),
    ev = (0, _.Z)(t, n),
    ej = (0, C.Z)(t, n),
    eE = (0, L.Z)(t, n),
    eS = (0, I.Z)(t, n),
    eP = (0, k.ZP)(t),
    e_ = (0, k.wY)(t),
    eZ = (0, k.eH)(t),
    eI = (0, U.Z)(t, n),
    eT = (0, p.Z)(null != W ? W : J, $, t, {
      shouldHideMediaOptions: ea
    }),
    eN = (0, b.Z)(Y, t, {
      shouldHideMediaOptions: ea,
      contentType: null == l ? true : l.contentType,
      originalContentType: null == l ? true : l.originalContentType
    }),
    eM = (0, B.Z)(t, l),
    ew = (0, f.Z)({
      id: t.id,
      label: q.intl.string(q.t.zBoHlf),
      shiftId: "".concat(t.channel_id, "-").concat(t.id)
    }),
    ex = (0, R.Z)(t, n),
    eA = (0, M.Z)(t, n),
    eD = (0, F.Z)(t, n),
    eC = (0, v.Z)(o, n.getGuildId()),
    eL = (0, j.Z)(t),
    eR = (0, Z.Z)(t),
    ek = (0, z.Z)(t, n),
    eG = (0, K.Z)(t),
    eU = (0, E.Z)(t, n),
    eF = (0, X.Z)(l, {
      shouldHideMediaOptions: ea
    }),
    ez = (0, y.Z)({
      commandType: s.yU.MESSAGE,
      commandTargetId: t.id,
      channel: n,
      guildId: true,
      onHeightUpdate: et
    }),
    eH = (0, H.Z)(t),
    eB = (0, O.Z)(t),
    {
      forceIconsLeft: eK,
      reorderMessageMenuItems: eX
    } = (0, d.d)("MessageContextMenu");
  return (0, r.jsxs)(a.v2r, {
    navId: ei,
    onClose: er,
    "aria-label": el,
    onSelect: es,
    forceIconsLeft: eK,
    children: [(0, r.jsx)(a.kSQ, {
      children: ec
    }), (0, r.jsx)(a.kSQ, {
      children: eu
    }), (0, r.jsxs)(a.kSQ, {
      children: ["" === o ? ed : null, ef, ey, eU]
    }), (0, r.jsxs)(a.kSQ, {
      children: [eg, ex, eA, eD]
    }), (0, r.jsxs)(a.kSQ, {
      children: [eR, ek, eb, eL, ez, em, eO, eh, ev, eI, eB, eH]
    }), (0, r.jsxs)(a.kSQ, {
      children: [eE, ej, eS, ee && eP, ee && eZ, e_]
    }), (0, r.jsxs)(a.kSQ, {
      children: [ep, eC, eN, eM, eG, eF]
    }), (0, r.jsx)(a.kSQ, {
      children: eT
    }), (0, r.jsx)(a.kSQ, {
      children: ew
    })]
  })
}