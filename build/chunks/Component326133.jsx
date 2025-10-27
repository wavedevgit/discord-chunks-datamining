/** Chunk was on web.js **/
/** chunk id: 326133, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk595519 = require("./595519.js"),
  Chunk317381 = require("./317381.js"),
  Chunk16609 = require("./16609.js"),
  Chunk588468 = require("./588468.jsx"),
  Chunk30465 = require("./30465.js"),
  Chunk313201 = require("./313201.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk549006 = require("./549006.js"),
  Chunk430824 = require("./430824.js"),
  Chunk590921 = require("./590921.js"),
  Chunk606992 = require("./606992.js"),
  Chunk51062 = require("./51062.js"),
  Chunk918559 = require("./918559.js"),
  Chunk671982 = require("./671982.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
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

function N(e, t) {
  if (null == e) return {};
  var n, r, i = R(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let P = 490,
  D = 490,
  w = 245,
  L = 200,
  x = 120,
  M = Chunk647438.forwardRef(function(e, t) {
    var n, a, T, A, R, M, k, j, U;
    let {
      channel: G,
      type: B,
      editorHeight: Z,
      onVisibilityChange: F,
      editorScrollerRef: V,
      barsHeight: H
    } = e, Y = (0, h.Dt)(), W = (0, l.e7)([E.Z], () => {
      var e;
      return null != (e = E.Z.getGuild(G.guild_id)) ? e : null
    }, [G.guild_id]), K = i.useRef(null), [z, q, X] = (0, O.Z)(C(S({}, e), {
      guild: W
    }), t, K), Q = (null == (n = B.autocomplete) ? true : n.forceChatLayer) ? g.ZP : m.ZP, J = (0, _.DJ)(z.selectedIndex);
    (0, p.KR)(Y, z.isVisible, J);
    let $ = (0, y.Z)({
        editorHeight: Z,
        type: B,
        state: z
      }),
      ee = (0, l.e7)([d.ZP], () => {
        let e = d.ZP.getSelfEmbeddedActivityForChannel(G.id),
          t = d.ZP.getActivityPanelMode();
        return (0, u.l5)(G) && null != e && (0, f.p)(e.location) === G.id && t === v.Ez.PANEL
      }, [G]),
      et = i.useMemo(() => (null == $ ? true : $.top) == null && (null == $ ? true : $.left) == null && (null == $ ? true : $.bottom) == null && (null == $ ? true : $.right) == null ? "" : String(Date.now()), [null == $ ? true : $.top, null == $ ? true : $.left, null == $ ? true : $.bottom, null == $ ? true : $.right]);
    if (i.useEffect(() => {
        var e, t;
        F(z.isVisible, null != (t = null == (e = z.query) ? true : e.type) ? t : null)
      }, [F, z.isVisible, null == (a = z.query) ? true : a.type]), !z.isVisible || null == z.query || true === $) return null;
    let en = null != (R = z.query.typeInfo.renderResults({
      results: z.query.results,
      selectedIndex: z.selectedIndex,
      channel: G,
      guild: W,
      query: z.query.queryText,
      options: z.query.options,
      onHover: e => q.onResultHover(e),
      onClick: e => q.onResultClick(e)
    })) ? R : null;
    if (null == en) return null;
    let er = {
        [I.autocompleteAttached]: null == $,
        [I.autocompletePopout]: null != $,
        [I.bottom]: null == $ && "bottom" === e.position,
        [I.autocompleteTop]: ee,
        [I.minimal]: (null == (T = z.query) ? true : T.type) === b.eq.MENTION_SUGGESTIONS
      },
      ei = P;
    null != $ && (ei = (null == (M = B.autocomplete) ? true : M.small) ? L : (null == (k = z.query) ? true : k.type) === b.eq.EMOJIS_AND_STICKERS ? D : w);
    let ea = Math.max(Z, null != (j = null == V || null == (A = V.current) ? true : A.clientHeight) ? j : 0),
      eo = Math.min(.5 * window.innerHeight, ea);
    ei = Math.min(window.innerHeight - x - eo - (null != H ? H : 0), ei);
    let es = (0, r.jsx)(_.ZP, {
      id: Y,
      className: o()(I.autocomplete, er),
      innerClassName: I.autocompleteInner,
      onMouseDown: e => e.preventDefault(),
      children: (0, r.jsx)(s.bG, {
        navigator: X,
        children: (0, r.jsx)(s.SJ, {
          children: e => {
            var {
              ref: t
            } = e, n = N(e, ["ref"]);
            return (0, r.jsx)(c.h21, C(S({
              id: Y,
              ref: e => {
                var n;
                t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null, K.current = e
              },
              orientation: "vertical",
              overflow: "auto"
            }, n), {
              className: I.scroller,
              style: {
                maxHeight: ei
              },
              role: "listbox",
              "aria-labelledby": (0, _.rp)(Y),
              children: en
            }))
          }
        })
      })
    });
    return null != $ ? (0, r.jsx)(Q, {
      children: (0, r.jsx)(c.jRF, {
        targetRef: e.targetRef,
        overrideTargetRect: $,
        positionKey: et,
        position: null != (U = e.position) ? U : "top",
        align: "left",
        spacing: 8,
        autoInvert: true,
        nudgeAlignIntoViewport: true,
        children: () => es
      })
    }) : es
  })