/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => j
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(91192),
  l = n(442837),
  c = n(481060),
  u = n(595519),
  d = n(317381),
  f = n(16609),
  _ = n(588468),
  p = n(30465),
  h = n(313201),
  g = n(314910),
  m = n(549006),
  E = n(430824),
  v = n(436896),
  b = n(590921),
  y = n(606992),
  O = n(51062),
  S = n(918559),
  I = n(37499);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = P(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function P(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let D = 490,
  w = 490,
  L = 245,
  x = 200,
  M = 175,
  j = i.forwardRef(function(e, t) {
    var n, o, T, A, P;
    let {
      channel: j,
      type: k,
      editorHeight: U,
      onVisibilityChange: G
    } = e, B = (0, h.Dt)(), F = (0, l.e7)([E.Z], () => {
      var e;
      return null !== (e = E.Z.getGuild(j.guild_id)) && void 0 !== e ? e : null
    }, [j.guild_id]), V = i.useRef(), [Z, H, W] = (0, O.Z)(C(N({}, e), {
      guild: F
    }), t, V), Y = (null === (n = k.autocomplete) || void 0 === n ? void 0 : n.forceChatLayer) ? m.ZP : g.ZP, K = (0, _.DJ)(Z.selectedIndex);
    (0, p.KR)(B, Z.isVisible, K), v.Z.trackExposure({
      location: "6e9811_1"
    });
    let {
      usePopoutAutocomplete: z
    } = v.Z.useExperiment({
      location: "6e9811_2"
    }, {
      autoTrackExposure: !1
    }), q = (0, y.Z)({
      editorHeight: U,
      type: k,
      state: Z,
      isInPopoutExperiment: z
    }), Q = (0, l.e7)([d.ZP], () => {
      let e = d.ZP.getSelfEmbeddedActivityForChannel(j.id),
        t = d.ZP.getActivityPanelMode();
      return (0, u.l5)(j) && null != e && (0, f.pY)(e.location) === j.id && t === S.Ez.PANEL
    }, [j]), X = i.useMemo(() => (null == q ? void 0 : q.top) == null && (null == q ? void 0 : q.left) == null && (null == q ? void 0 : q.bottom) == null && (null == q ? void 0 : q.right) == null ? "" : String(Date.now()), [null == q ? void 0 : q.top, null == q ? void 0 : q.left, null == q ? void 0 : q.bottom, null == q ? void 0 : q.right]);
    if (i.useEffect(() => {
        G(Z.isVisible)
      }, [G, Z.isVisible]), !Z.isVisible || null == Z.query || void 0 === q) return null;
    let J = null !== (o = Z.query.typeInfo.renderResults({
      results: Z.query.results,
      selectedIndex: Z.selectedIndex,
      channel: j,
      guild: F,
      query: Z.query.queryText,
      options: Z.query.options,
      onHover: e => H.onResultHover(e),
      onClick: e => H.onResultClick(e)
    })) && void 0 !== o ? o : null;
    if (null == J) return null;
    let $ = {
        [I.autocompleteAttached]: null == q,
        [I.autocompletePopout]: null != q,
        [I.bottom]: null == q && "bottom" === e.position,
        [I.autocompleteTop]: Q
      },
      ee = D;
    null != q && (ee = (null === (T = k.autocomplete) || void 0 === T ? void 0 : T.small) ? x : (null === (A = Z.query) || void 0 === A ? void 0 : A.type) === b.eq.EMOJIS_AND_STICKERS ? w : L), ee = Math.min(window.innerHeight - M, ee);
    let et = (0, r.jsx)(_.ZP, {
      id: B,
      className: a()(I.autocomplete, $),
      innerClassName: I.autocompleteInner,
      onMouseDown: e => e.preventDefault(),
      children: (0, r.jsx)(s.bG, {
        navigator: W,
        children: (0, r.jsx)(s.SJ, {
          children: e => {
            var {
              ref: t
            } = e, n = R(e, ["ref"]);
            return (0, r.jsx)(c.h21, C(N({
              id: B,
              ref: e => {
                var n;
                t.current = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null, V.current = e
              }
            }, n), {
              className: I.scroller,
              style: {
                maxHeight: ee
              },
              role: "listbox",
              "aria-labelledby": (0, _.rp)(B),
              children: J
            }))
          }
        })
      })
    });
    return null != q ? (0, r.jsx)(Y, {
      children: (0, r.jsx)(c.jRF, {
        targetRef: e.targetRef,
        overrideTargetRect: q,
        positionKey: X,
        position: null !== (P = e.position) && void 0 !== P ? P : "top",
        align: "left",
        spacing: 8,
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        children: () => et
      })
    }) : et
  })