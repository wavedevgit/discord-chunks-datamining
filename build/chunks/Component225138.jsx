/** Chunk was on web.js **/
/** chunk id: 225138, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  S: () => Y,
  default: () => H
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk374470 = require("./374470.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk911969 = require("./911969.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk299206 = require("./299206.jsx"),
  Chunk359571 = require("./359571.jsx"),
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

function H(e) {
  var t, n;
  let o, s, u, d, {
      channel: f,
      message: _,
      target: p,
      mediaItem: h,
      shouldHideMediaOptions: m,
      onSelect: g,
      onHeightUpdate: E
    } = e,
    {
      analyticsLocations: b
    } = (0, c.ZP)([l.Z.MESSAGE_CONTEXT_MENU]),
    y = p,
    O = p.getAttribute("data-type"),
    v = p.getAttribute("data-id"),
    I = p.getAttribute("data-name");
  if (null != h) s = o = u = h.url;
  else
    for (;
      (0, i.k)(y);)(0, i.k)(y, HTMLImageElement) && null != y.src && (s = y.src), (0, i.k)(y, HTMLAnchorElement) && null != y.href && (o = y.href, d = y.textContent, null == s && "img" === y.getAttribute("data-role") && (s = o, y.hasAttribute("data-safe-src") && "" !== y.getAttribute("data-safe-src") && (u = y.getAttribute("data-safe-src")))), y = y.parentNode;
  let T = null != (n = null == (t = document.getSelection()) ? true : t.toString()) ? n : "";
  return (0, r.jsx)(c.Gt, {
    value: b,
    children: Y({
      message: _,
      channel: f,
      mediaItem: h,
      textSelection: T,
      favoriteableType: O,
      favoriteableId: v,
      favoriteableName: I,
      itemHref: o,
      itemSrc: s,
      itemSafeSrc: u,
      itemTextContent: d,
      canReport: true,
      onHeightUpdate: E,
      onSelect: g,
      onClose: a.Zy,
      navId: "message",
      ariaLabel: V.intl.string(V.t.ChPNkJ),
      shouldHideMediaOptions: m
    })
  })
}

function Y(e) {
  let {
    message: t,
    channel: n,
    mediaItem: i,
    textSelection: a,
    favoriteableType: l,
    favoriteableId: c,
    favoriteableName: H,
    itemHref: Y,
    itemSrc: W,
    itemSafeSrc: K,
    itemTextContent: z,
    canReport: q,
    onHeightUpdate: X,
    onSelect: Q,
    onClose: J,
    navId: $,
    ariaLabel: ee,
    shouldHideMediaOptions: et = false
  } = e, en = (0, d.Z)(a), er = (0, p.Z)(a), ei = (0, P.Z)(t, n), eo = (0, y.Z)(t, n), ea = (0, S.Z)(t, n), es = (0, R.Z)(t, n), el = (0, A.Z)({
    type: l,
    id: c,
    name: H
  }), ec = (0, k.Z)(t, n), eu = (0, C.Z)(t, n), ed = (0, w.Z)(t), ef = (0, O.Z)(t, n), e_ = (0, v.Z)(t, n), ep = (0, D.Z)(t, n), eh = (0, L.Z)(t, n), em = (0, T.Z)(t, n), eg = (0, M.ZP)(t), eE = (0, M.wY)(t), eb = (0, M.eH)(t), ey = (0, j.Z)(t, n), eO = (0, _.Z)(null != Y ? Y : W, z, t, {
    shouldHideMediaOptions: et
  }), ev = (0, f.Z)(K, t, {
    shouldHideMediaOptions: et,
    contentType: null == i ? true : i.contentType
  }), eI = (0, Z.Z)(t, i), eT = (0, u.Z)({
    id: t.id,
    label: V.intl.string(V.t.zBoHlZ),
    shiftId: "".concat(t.channel_id, "-").concat(t.id)
  }), eS = (0, x.Z)(t, n), eA = (0, N.Z)(t, n), eN = (0, U.Z)(t, n), eC = (0, g.Z)(a, n.getGuildId()), eR = (0, E.Z)(t), eP = (0, I.Z)(t), ew = (0, G.Z)(t, n), eD = (0, F.Z)(t), eL = (0, b.Z)(t, n), ex = (0, m.Z)({
    commandType: s.yU.MESSAGE,
    commandTargetId: t.id,
    channel: n,
    guildId: true,
    onHeightUpdate: X
  }), eM = (0, B.Z)(t), ek = (0, h.Z)(t);
  return (0, r.jsxs)(o.v2r, {
    navId: $,
    onClose: J,
    "aria-label": ee,
    onSelect: Q,
    children: [(0, r.jsx)(o.kSQ, {
      children: en
    }), (0, r.jsx)(o.kSQ, {
      children: er
    }), (0, r.jsxs)(o.kSQ, {
      children: ["" === a ? ei : null, eo, ed, eL]
    }), (0, r.jsxs)(o.kSQ, {
      children: [ea, eS, eA, eN]
    }), (0, r.jsxs)(o.kSQ, {
      children: [eP, ew, es, eR, ex, ec, eu, ef, e_, ey, ek, eM]
    }), (0, r.jsxs)(o.kSQ, {
      children: [eh, ep, em, q && eg, q && eb, eE]
    }), (0, r.jsxs)(o.kSQ, {
      children: [el, eC, ev, eI, eD]
    }), (0, r.jsx)(o.kSQ, {
      children: eO
    }), (0, r.jsx)(o.kSQ, {
      children: eT
    })]
  })
}