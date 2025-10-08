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
  w = 490,
  D = 245,
  L = 200,
  x = 120,
  M = Chunk647438.forwardRef(function(e, t) {
    var n, a, T, A, R, M, j, k;
    let {
      channel: U,
      type: G,
      editorHeight: B,
      onVisibilityChange: Z,
      editorScrollerRef: F,
      barsHeight: V
    } = e, H = (0, h.Dt)(), Y = (0, l.e7)([E.Z], () => {
      var e;
      return null != (e = E.Z.getGuild(U.guild_id)) ? e : null
    }, [U.guild_id]), W = i.useRef(null), [K, z, q] = (0, O.Z)(C(S({}, e), {
      guild: Y
    }), t, W), X = (null == (n = G.autocomplete) ? true : n.forceChatLayer) ? g.ZP : m.ZP, Q = (0, _.DJ)(K.selectedIndex);
    (0, p.KR)(H, K.isVisible, Q);
    let J = (0, y.Z)({
        editorHeight: B,
        type: G,
        state: K
      }),
      $ = (0, l.e7)([d.ZP], () => {
        let e = d.ZP.getSelfEmbeddedActivityForChannel(U.id),
          t = d.ZP.getActivityPanelMode();
        return (0, u.l5)(U) && null != e && (0, f.p)(e.location) === U.id && t === v.Ez.PANEL
      }, [U]),
      ee = i.useMemo(() => (null == J ? true : J.top) == null && (null == J ? true : J.left) == null && (null == J ? true : J.bottom) == null && (null == J ? true : J.right) == null ? "" : String(Date.now()), [null == J ? true : J.top, null == J ? true : J.left, null == J ? true : J.bottom, null == J ? true : J.right]);
    if (i.useEffect(() => {
        Z(K.isVisible)
      }, [Z, K.isVisible]), !K.isVisible || null == K.query || true === J) return null;
    let et = null != (A = K.query.typeInfo.renderResults({
      results: K.query.results,
      selectedIndex: K.selectedIndex,
      channel: U,
      guild: Y,
      query: K.query.queryText,
      options: K.query.options,
      onHover: e => z.onResultHover(e),
      onClick: e => z.onResultClick(e)
    })) ? A : null;
    if (null == et) return null;
    let en = {
        [I.autocompleteAttached]: null == J,
        [I.autocompletePopout]: null != J,
        [I.bottom]: null == J && "bottom" === e.position,
        [I.autocompleteTop]: $,
        [I.minimal]: (null == (a = K.query) ? true : a.type) === b.eq.MENTION_SUGGESTIONS
      },
      er = P;
    null != J && (er = (null == (R = G.autocomplete) ? true : R.small) ? L : (null == (M = K.query) ? true : M.type) === b.eq.EMOJIS_AND_STICKERS ? w : D);
    let ei = Math.max(B, null != (j = null == F || null == (T = F.current) ? true : T.clientHeight) ? j : 0),
      ea = Math.min(.5 * window.innerHeight, ei);
    er = Math.min(window.innerHeight - x - ea - (null != V ? V : 0), er);
    let eo = (0, r.jsx)(_.ZP, {
      id: H,
      className: o()(I.autocomplete, en),
      innerClassName: I.autocompleteInner,
      onMouseDown: e => e.preventDefault(),
      children: (0, r.jsx)(s.bG, {
        navigator: q,
        children: (0, r.jsx)(s.SJ, {
          children: e => {
            var {
              ref: t
            } = e, n = N(e, ["ref"]);
            return (0, r.jsx)(c.h21, C(S({
              id: H,
              ref: e => {
                var n;
                t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null, W.current = e
              },
              orientation: "vertical",
              overflow: "auto"
            }, n), {
              className: I.scroller,
              style: {
                maxHeight: er
              },
              role: "listbox",
              "aria-labelledby": (0, _.rp)(H),
              children: et
            }))
          }
        })
      })
    });
    return null != J ? (0, r.jsx)(X, {
      children: (0, r.jsx)(c.jRF, {
        targetRef: e.targetRef,
        overrideTargetRect: J,
        positionKey: ee,
        position: null != (k = e.position) ? k : "top",
        align: "left",
        spacing: 8,
        autoInvert: true,
        nudgeAlignIntoViewport: true,
        children: () => eo
      })
    }) : eo
  })