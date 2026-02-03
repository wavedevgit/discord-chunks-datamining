/** Chunk was on web.js **/
/** chunk id: 875163, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => M
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk837381 = require("./837381.jsx"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk811024 = require("./811024.js"),
  Chunk933958 = require("./933958.js"),
  Chunk969151 = require("./969151.js"),
  Chunk580424 = require("./580424.jsx"),
  Chunk579940 = require("./579940.js"),
  Chunk915089 = require("./915089.js"),
  Chunk750506 = require("./750506.jsx"),
  Chunk513609 = require("./513609.js"),
  Chunk71393 = require("./71393.js"),
  Chunk374803 = require("./374803.js"),
  Chunk105330 = require("./105330.js"),
  Chunk638897 = require("./638897.js"),
  Chunk5867 = require("./5867.js"),
  Chunk130139 = require("./130139.js");

function I(e, t, n) {
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
      I(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = w(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function w(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let R = 490,
  P = 490,
  D = 245,
  L = 200,
  x = 120,
  M = Chunk64700.forwardRef(function(e, t) {
    var n, a, I, T, w, M, j, k, U;
    let {
      channel: G,
      type: F,
      editorHeight: V,
      onVisibilityChange: B,
      editorScrollerRef: H,
      barsHeight: Y
    } = e, W = (0, h.GV)(), K = (0, l.bG)([E.A], () => {
      var e;
      return null != (e = E.A.getGuild(G.guild_id)) ? e : null
    }, [G.guild_id]), z = i.useRef(null), [q, Z, Q] = (0, O.A)(C(S({}, e), {
      guild: K
    }), t, z), X = (null == (I = F.autocomplete) ? true : I.forceChatLayer) ? g.Ay : m.Ay, J = (0, p.aI)(q.selectedIndex);
    (0, _.gf)(W, q.isVisible, J);
    let $ = (0, b.l)({
        editorHeight: V,
        type: F,
        state: q
      }),
      ee = (0, l.bG)([d.Ay], () => {
        let e = d.Ay.getSelfEmbeddedActivityForChannel(G.id),
          t = d.Ay.getActivityPanelMode();
        return (0, u.AX)(G) && null != e && (0, f.H)(e.location) === G.id && t === v.Gd.PANEL
      }, [G]),
      et = i.useMemo(() => (null == $ ? true : $.top) == null && (null == $ ? true : $.left) == null && (null == $ ? true : $.bottom) == null && (null == $ ? true : $.right) == null ? "" : String(Date.now()), [null == $ ? true : $.top, null == $ ? true : $.left, null == $ ? true : $.bottom, null == $ ? true : $.right]);
    if (i.useEffect(() => {
        var e, t;
        B(q.isVisible, null != (e = null == (t = q.query) ? true : t.type) ? e : null)
      }, [B, q.isVisible, null == (T = q.query) ? true : T.type]), !q.isVisible || null == q.query || true === $) return null;
    let en = null != (n = q.query.typeInfo.renderResults({
      results: q.query.results,
      selectedIndex: q.selectedIndex,
      channel: G,
      guild: K,
      query: q.query.queryText,
      options: q.query.options,
      onHover: e => Z.onResultHover(e),
      onClick: e => Z.onResultClick(e)
    })) ? n : null;
    if (null == en) return null;
    let er = {
        [A.pK]: null == $,
        [A.YB]: null != $,
        [A.sQ]: null == $ && "bottom" === e.position,
        [A.mO]: ee,
        [A.Wi]: (null == (w = q.query) ? true : w.type) === y.DB.MENTION_SUGGESTIONS
      },
      ei = R;
    null != $ && (ei = (null == (j = F.autocomplete) ? true : j.small) ? L : (null == (k = q.query) ? true : k.type) === y.DB.EMOJIS_AND_STICKERS ? P : D);
    let ea = Math.max(V, null != (a = null == H || null == (M = H.current) ? true : M.clientHeight) ? a : 0),
      eo = Math.min(.5 * window.innerHeight, ea);
    ei = Math.min(window.innerHeight - x - eo - (null != Y ? Y : 0), ei);
    let es = (0, r.jsx)(p.Ay, {
      id: W,
      className: o()(A.nx, er),
      innerClassName: A.Fv,
      onMouseDown: e => e.preventDefault(),
      children: (0, r.jsx)(s.hD, {
        navigator: Q,
        children: (0, r.jsx)(s.PR, {
          children: e => {
            let {
              ref: t
            } = e, n = N(e, ["ref"]);
            return (0, r.jsx)(c.ChK, C(S({
              id: W,
              ref: e => {
                var n;
                t.current = null != (n = null == e ? true : e.getScrollerNode()) ? n : null, z.current = e
              },
              orientation: "vertical",
              overflow: "auto"
            }, n), {
              className: A.XG,
              style: {
                maxHeight: ei
              },
              role: "listbox",
              "aria-labelledby": (0, p.Sz)(W),
              children: en
            }))
          }
        })
      })
    });
    return null != $ ? (0, r.jsx)(X, {
      children: (0, r.jsx)(c.QCO, {
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