/** Chunk was on web.js **/
/** chunk id: 326133, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => j
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
  w = 490,
  D = 245,
  L = 200,
  x = 120,
  j = Chunk647438.forwardRef(function(e, t) {
    var n, a, T, A, R, j, M;
    let {
      channel: k,
      type: U,
      editorHeight: G,
      onVisibilityChange: B,
      editorScrollerRef: Z,
      barsHeight: F
    } = e, V = (0, h.Dt)(), H = (0, l.e7)([E.Z], () => {
      var e;
      return null != (e = E.Z.getGuild(k.guild_id)) ? e : null
    }, [k.guild_id]), Y = i.useRef(null), [W, K, z] = (0, O.Z)(C(S({}, e), {
      guild: H
    }), t, Y), q = (null == (n = U.autocomplete) ? true : n.forceChatLayer) ? g.ZP : m.ZP, X = (0, _.DJ)(W.selectedIndex);
    (0, p.KR)(V, W.isVisible, X);
    let Q = (0, y.Z)({
        editorHeight: G,
        type: U,
        state: W
      }),
      J = (0, l.e7)([d.ZP], () => {
        let e = d.ZP.getSelfEmbeddedActivityForChannel(k.id),
          t = d.ZP.getActivityPanelMode();
        return (0, u.l5)(k) && null != e && (0, f.p)(e.location) === k.id && t === v.Ez.PANEL
      }, [k]),
      $ = i.useMemo(() => (null == Q ? true : Q.top) == null && (null == Q ? true : Q.left) == null && (null == Q ? true : Q.bottom) == null && (null == Q ? true : Q.right) == null ? "" : String(Date.now()), [null == Q ? true : Q.top, null == Q ? true : Q.left, null == Q ? true : Q.bottom, null == Q ? true : Q.right]);
    if (i.useEffect(() => {
        B(W.isVisible)
      }, [B, W.isVisible]), !W.isVisible || null == W.query || true === Q) return null;
    let ee = null != (T = W.query.typeInfo.renderResults({
      results: W.query.results,
      selectedIndex: W.selectedIndex,
      channel: k,
      guild: H,
      query: W.query.queryText,
      options: W.query.options,
      onHover: e => K.onResultHover(e),
      onClick: e => K.onResultClick(e)
    })) ? T : null;
    if (null == ee) return null;
    let et = {
        [I.autocompleteAttached]: null == Q,
        [I.autocompletePopout]: null != Q,
        [I.bottom]: null == Q && "bottom" === e.position,
        [I.autocompleteTop]: J
      },
      en = P;
    null != Q && (en = (null == (A = U.autocomplete) ? true : A.small) ? L : (null == (R = W.query) ? true : R.type) === b.eq.EMOJIS_AND_STICKERS ? w : D);
    let er = Math.max(G, null != (j = null == Z || null == (a = Z.current) ? true : a.clientHeight) ? j : 0),
      ei = Math.min(.5 * window.innerHeight, er);
    en = Math.min(window.innerHeight - x - ei - (null != F ? F : 0), en);
    let ea = (0, r.jsx)(_.ZP, {
      id: V,
      className: o()(I.autocomplete, et),
      innerClassName: I.autocompleteInner,
      onMouseDown: e => e.preventDefault(),
      children: (0, r.jsx)(s.bG, {
        navigator: z,
        children: (0, r.jsx)(s.SJ, {
          children: e => {
            var {
              ref: t
            } = e, n = N(e, ["ref"]);
            return (0, r.jsx)(c.h21, C(S({
              id: V,
              ref: e => {
                var n;
                t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null, Y.current = e
              },
              orientation: "vertical",
              overflow: "auto"
            }, n), {
              className: I.scroller,
              style: {
                maxHeight: en
              },
              role: "listbox",
              "aria-labelledby": (0, _.rp)(V),
              children: ee
            }))
          }
        })
      })
    });
    return null != Q ? (0, r.jsx)(q, {
      children: (0, r.jsx)(c.jRF, {
        targetRef: e.targetRef,
        overrideTargetRect: Q,
        positionKey: $,
        position: null != (M = e.position) ? M : "top",
        align: "left",
        spacing: 8,
        autoInvert: true,
        nudgeAlignIntoViewport: true,
        children: () => ea
      })
    }) : ea
  })