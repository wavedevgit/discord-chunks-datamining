/** Chunk was on 1636 **/
/** chunk id: 547983, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  c: () => Y,
  default: () => W
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk621466 = require("./621466.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk155718 = require("./155718.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
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

function W(e) {
  var t, n;
  let i, a, c, u, {
      channel: g,
      message: p,
      target: f,
      mediaItem: y,
      shouldHideMediaOptions: b,
      onSelect: A,
      onHeightUpdate: m
    } = e,
    {
      analyticsLocations: O
    } = (0, d.Ay)([s.A.MESSAGE_CONTEXT_MENU]),
    v = f,
    h = f.getAttribute("data-type"),
    j = f.getAttribute("data-id"),
    E = f.getAttribute("data-name");
  if (null != y) a = i = c = y.url;
  else
    for (;
      (0, l.vq)(v);)(0, l.vq)(v, HTMLImageElement) && null != v.src && (a = v.src), (0, l.vq)(v, HTMLAnchorElement) && null != v.href && (i = v.href, u = v.textContent, null == a && "img" === v.getAttribute("data-role") && (a = i, v.hasAttribute("data-safe-src") && "" !== v.getAttribute("data-safe-src") && (c = v.getAttribute("data-safe-src")))), v = v.parentNode;
  let S = null != (t = null == (n = document.getSelection()) ? true : n.toString()) ? t : "";
  return (0, r.jsx)(d.f5, {
    value: O,
    children: Y({
      message: p,
      channel: g,
      mediaItem: y,
      textSelection: S,
      favoriteableType: h,
      favoriteableId: j,
      favoriteableName: E,
      itemHref: i,
      itemSrc: a,
      itemSafeSrc: c,
      itemTextContent: u,
      canReport: true,
      onHeightUpdate: m,
      onSelect: A,
      onClose: o.Z_,
      navId: "message",
      ariaLabel: z.intl.string(z.t.ChPNkN),
      shouldHideMediaOptions: b
    })
  })
}

function Y(e) {
  let {
    message: t,
    channel: n,
    mediaItem: l,
    textSelection: o,
    favoriteableType: s,
    favoriteableId: d,
    favoriteableName: W,
    itemHref: Y,
    itemSrc: Z,
    itemSafeSrc: $,
    itemTextContent: Q,
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
      O.default.track(J.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
        time_to_close_ms: r,
        channel_id: n.id,
        guild_id: null != (e = n.getGuildId()) ? e : true,
        message_id: t.id
      })
    }
  }, [n, t]);
  let ec = i.useCallback(() => {
      if (null != eo.current) {
        var e;
        let r = Date.now() - eo.current;
        O.default.track(J.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
          time_to_first_click_ms: r,
          channel_id: n.id,
          guild_id: null != (e = n.getGuildId()) ? e : true,
          message_id: t.id
        })
      }
      null == en || en()
    }, [en, n, t]),
    {
      tidaWebformEnabled: es
    } = g.A.useExperiment({
      location: "MessageContextMenu"
    }, {
      autoTrackExposure: false
    }),
    ed = (0, C.A)(t, n),
    eu = (0, p.A)(o),
    eg = (0, b.A)(o),
    ep = (0, j.A)(t, n),
    ef = (0, T.A)(t, n),
    ey = (0, L.A)(t, n),
    eb = (0, x.A)(t, n),
    eA = (0, X.A)(t, n),
    em = (0, _.A)(t),
    eO = (0, V.A)(t, n),
    ev = (0, M.A)(t, n),
    eh = (0, h.A)(t),
    ej = (0, m.A)({
      commandType: c.kc.MESSAGE,
      commandTargetId: t.id,
      channel: n,
      guildId: true,
      onHeightUpdate: et
    }),
    eE = (0, k.A)(t, n),
    eS = (0, w.A)(t, n),
    e_ = (0, E.A)(t, n),
    eD = (0, S.A)(t, n),
    eP = (0, F.A)(t, n),
    eT = (0, N.A)(t),
    eI = (0, A.A)(t),
    ex = (0, B.A)(t),
    ew = (0, G.A)(t, n),
    eM = (0, R.A)(t, n),
    eC = (0, D.A)(t, n),
    eN = (0, U.Ay)(t),
    eR = (0, U.S_)(t),
    eG = (0, U.zo)(t),
    eL = (0, I.A)({
      type: s,
      id: d,
      name: W
    }),
    eU = (0, v.A)(o, n.getGuildId()),
    ek = (0, f.A)($, t, {
      shouldHideMediaOptions: ea,
      contentType: null == l ? true : l.contentType,
      originalContentType: null == l ? true : l.originalContentType
    }),
    eF = (0, H.A)(t, l),
    eX = (0, K.A)(t),
    eV = (0, q.A)(l, {
      shouldHideMediaOptions: ea
    }),
    eB = (0, y.A)(null != Y ? Y : Z, Q, t, {
      shouldHideMediaOptions: ea
    }),
    eH = (0, u.A)({
      id: t.id,
      label: z.intl.string(z.t.zBoHlf),
      shiftId: "".concat(t.channel_id, "-").concat(t.id)
    }),
    eK = (0, P.A)({
      messageId: t.id,
      itemId: d,
      type: s,
      imageSrc: Z
    }),
    eq = (0, r.jsx)(a.rXV, {
      children: null != eK ? eK : eH
    }),
    eJ = (0, r.jsxs)(a.rXV, {
      children: [eL, eU, ek, eF, eX, eV]
    });
  return (0, r.jsxs)(a.W1t, {
    "data-menu-needs-review": true,
    navId: ei,
    onClose: er,
    "aria-label": el,
    onSelect: ec,
    children: [(0, r.jsx)(a.rXV, {
      children: eu
    }), (0, r.jsx)(a.rXV, {
      children: eg
    }), (0, r.jsxs)(a.rXV, {
      children: ["" === o ? ed : null, ep, eT]
    }), (0, r.jsxs)(a.rXV, {
      children: [ef, ey, eb, eA]
    }), (0, r.jsxs)(a.rXV, {
      children: [em, eO, ev, eh, ej, eE, eS, e_, eD, eP, eI, ex]
    }), (0, r.jsxs)(a.rXV, {
      children: [ew, eM, eC, ee && eN, ee && eR, eG]
    }), es ? (0, r.jsxs)(r.Fragment, {
      children: [eq, eJ, (0, r.jsx)(a.rXV, {
        children: eB
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [eJ, (0, r.jsx)(a.rXV, {
        children: eB
      }), eq]
    })]
  })
}