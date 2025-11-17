/** Chunk was on 37220 **/
/** chunk id: 225138, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  S: () => K,
  default: () => B
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk374470 = require("./374470.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk911969 = require("./911969.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk299206 = require("./299206.jsx"),
  Chunk26737 = require("./26737.jsx"),
  Chunk29264 = require("./29264.jsx"),
  Chunk905041 = require("./905041.jsx"),
  Chunk89013 = require("./89013.jsx"),
  Chunk988500 = require("./988500.jsx"),
  Chunk570870 = require("./570870.jsx"),
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
  Chunk388032 = require("./388032.jsx");

function B(e) {
  var t, n;
  let l, o, u, d, {
      channel: f,
      message: g,
      target: b,
      mediaItem: p,
      shouldHideMediaOptions: y,
      onSelect: O,
      onHeightUpdate: h
    } = e,
    {
      analyticsLocations: m
    } = (0, c.ZP)([s.Z.MESSAGE_CONTEXT_MENU]),
    v = b,
    j = b.getAttribute("data-type"),
    S = b.getAttribute("data-id"),
    E = b.getAttribute("data-name");
  if (null != p) o = l = u = p.url;
  else
    for (;
      (0, i.kK)(v);)(0, i.kK)(v, HTMLImageElement) && null != v.src && (o = v.src), (0, i.kK)(v, HTMLAnchorElement) && null != v.href && (l = v.href, d = v.textContent, null == o && "img" === v.getAttribute("data-role") && (o = l, v.hasAttribute("data-safe-src") && "" !== v.getAttribute("data-safe-src") && (u = v.getAttribute("data-safe-src")))), v = v.parentNode;
  let P = null != (n = null == (t = document.getSelection()) ? true : t.toString()) ? n : "";
  return (0, r.jsx)(c.Gt, {
    value: m,
    children: K({
      message: g,
      channel: f,
      mediaItem: p,
      textSelection: P,
      favoriteableType: j,
      favoriteableId: S,
      favoriteableName: E,
      itemHref: l,
      itemSrc: o,
      itemSafeSrc: u,
      itemTextContent: d,
      canReport: true,
      onHeightUpdate: h,
      onSelect: O,
      onClose: a.Zy,
      navId: "message",
      ariaLabel: H.intl.string(H.t.ChPNkN),
      shouldHideMediaOptions: y
    })
  })
}

function K(e) {
  let {
    message: t,
    channel: n,
    mediaItem: i,
    textSelection: a,
    favoriteableType: s,
    favoriteableId: c,
    favoriteableName: B,
    itemHref: K,
    itemSrc: X,
    itemSafeSrc: V,
    itemTextContent: q,
    canReport: Q,
    onHeightUpdate: W,
    onSelect: J,
    onClose: Y,
    navId: $,
    ariaLabel: ee,
    shouldHideMediaOptions: et = false
  } = e, en = (0, d.Z)(a), er = (0, b.Z)(a), ei = (0, w.Z)(t, n), el = (0, v.Z)(t, n), ea = (0, Z.Z)(t, n), eo = (0, N.Z)(t, n), es = (0, _.Z)({
    type: s,
    id: c,
    name: B
  }), ec = (0, R.Z)(t, n), eu = (0, I.Z)(t, n), ed = (0, A.Z)(t), ef = (0, j.Z)(t, n), eg = (0, S.Z)(t, n), eb = (0, x.Z)(t, n), ep = (0, M.Z)(t, n), ey = (0, P.Z)(t, n), eO = (0, C.ZP)(t), eh = (0, C.wY)(t), em = (0, C.eH)(t), ev = (0, L.Z)(t, n), ej = (0, g.Z)(null != K ? K : X, q, t, {
    shouldHideMediaOptions: et
  }), eS = (0, f.Z)(V, t, {
    shouldHideMediaOptions: et,
    contentType: null == i ? true : i.contentType,
    originalContentType: null == i ? true : i.originalContentType
  }), eE = (0, F.Z)(t, i), eP = (0, u.Z)({
    id: t.id,
    label: H.intl.string(H.t.zBoHlf),
    shiftId: "".concat(t.channel_id, "-").concat(t.id)
  }), eZ = (0, D.Z)(t, n), e_ = (0, T.Z)(t, n), eT = (0, G.Z)(t, n), eI = (0, O.Z)(a, n.getGuildId()), eN = (0, h.Z)(t), ew = (0, E.Z)(t), eA = (0, k.Z)(t, n), ex = (0, z.Z)(t), eM = (0, m.Z)(t, n), eD = (0, y.Z)({
    commandType: o.yU.MESSAGE,
    commandTargetId: t.id,
    channel: n,
    guildId: true,
    onHeightUpdate: W
  }), eC = (0, U.Z)(t), eR = (0, p.Z)(t);
  return (0, r.jsxs)(l.v2r, {
    navId: $,
    onClose: Y,
    "aria-label": ee,
    onSelect: J,
    children: [(0, r.jsx)(l.kSQ, {
      children: en
    }), (0, r.jsx)(l.kSQ, {
      children: er
    }), (0, r.jsxs)(l.kSQ, {
      children: ["" === a ? ei : null, el, ed, eM]
    }), (0, r.jsxs)(l.kSQ, {
      children: [ea, eZ, e_, eT]
    }), (0, r.jsxs)(l.kSQ, {
      children: [ew, eA, eo, eN, eD, ec, eu, ef, eg, ev, eR, eC]
    }), (0, r.jsxs)(l.kSQ, {
      children: [ep, eb, ey, Q && eO, Q && em, eh]
    }), (0, r.jsxs)(l.kSQ, {
      children: [es, eI, eS, eE, ex]
    }), (0, r.jsx)(l.kSQ, {
      children: ej
    }), (0, r.jsx)(l.kSQ, {
      children: eP
    })]
  })
}