/** Chunk was on 7034 **/
/** chunk id: 447215, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk349288 = require("./349288.jsx"),
  Chunk473193 = require("./473193.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk609425 = require("./609425.js"),
  Chunk922301 = require("./922301.js"),
  Chunk750112 = require("./750112.jsx"),
  Chunk73392 = require("./73392.js"),
  Chunk676608 = require("./676608.js"),
  Chunk342296 = require("./342296.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk841549 = require("./841549.jsx"),
  Chunk560936 = require("./560936.js");

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function j(e) {
  let {
    user: t,
    channelId: n,
    guildId: j,
    messageId: A,
    stopPropagation: T = false,
    ariaLabel: E,
    enableDisplayNameStyles: I = false
  } = e, S = l.useRef(null), {
    analyticsLocations: x
  } = (0, u.Ay)(s.A.USERNAME), N = (0, m.Ay)(j, null == t ? true : t.id), R = (0, c.A)({
    userId: null == t ? true : t.id,
    guildId: j
  }), P = (0, h.a)({
    displayNameStyles: R
  }), C = l.useCallback(e => {
    let i = g.A.getChannel(n);
    null != i && null != t && (0, b.wQ)(e, t, i)
  }, [t, n]), w = l.useContext(o.C);
  return (0, y.A)({
    subscribeToGroupId: A,
    authorId: null == t ? true : t.id,
    shouldSubscribe: I && null != R && null == j
  }), l.useCallback(e => (l, o) => {
    let s = null == e ? true : e.colorStrings,
      c = N && null != s && null != s.primaryColor && null != s.secondaryColor,
      h = (t, n) => {
        var o, u, h;
        if (!I || null == R || null != j) return (0, i.jsx)(a.V30, v(O({}, null != t ? t : {}), {
          ref: S,
          onContextMenu: C,
          name: null != (u = (0, a.Oer)(l)) ? u : "",
          colorString: null != (h = null == e ? true : e.colorString) ? h : null,
          roleName: null == e ? true : e.colorRoleName,
          colorStrings: c ? s : null,
          "aria-label": E,
          className: P
        }));
        {
          let e = (null == w ? true : w.animate) || (null == n ? true : n.isShown) ? d.G.ANIMATED : d.G.PLAIN;
          return (0, i.jsx)(r.Anchor, v(O({}, null != t ? t : {}), {
            ref: S,
            onContextMenu: C,
            "aria-label": E,
            children: (0, i.jsx)(p.A, {
              userName: null != (o = (0, a.Oer)(l)) ? o : "",
              displayNameStyles: R,
              effectDisplayType: e,
              shouldUnderlineOnHover: true,
              loop: true
            })
          }))
        }
      };
    return (0, i.jsx)(u.f5, {
      value: x,
      children: null != t ? (0, i.jsx)(f.A, {
        targetElementRef: S,
        user: t,
        guildId: j,
        channelId: n,
        messageId: A,
        roleId: null == e ? true : e.colorRoleId,
        clickTrap: true,
        children: (e, t) => {
          let [n, ...i] = [e, t], {
            onClick: l
          } = n, r = function(e, t) {
            if (null == e) return {};
            var n, i, l, r = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
              for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) i = n[l], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
              return r
            }
            if (r = function(e, t) {
                if (null == e) return {};
                var n, i, l = {},
                  r = Object.getOwnPropertyNames(e);
                for (i = 0; i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
              }(e, t), Object.getOwnPropertySymbols)
              for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) i = n[l], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
            return r
          }(n, ["onClick"]), [o] = i;
          return h(O({
            onClick: e => {
              T && null != e && e.stopPropagation(), l(e)
            }
          }, r), o)
        }
      }) : h(true, true)
    }, o)
  }, [x, t, n, j, A, C, T, E, N, P, null == w ? true : w.animate, R, I])
}