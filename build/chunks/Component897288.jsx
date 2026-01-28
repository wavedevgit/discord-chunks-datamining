/** Chunk was on 37372 **/
/** chunk id: 897288, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js"), require("./638769.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk835245 = require("./835245.js"),
  Chunk884362 = require("./884362.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk417454 = require("./417454.jsx"),
  Chunk7864 = require("./7864.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk420206 = require("./420206.js");

function O(e) {
  let {
    guild: t,
    roles: r,
    className: i
  } = e, O = l.useMemo(() => "invite-roles-".concat((0, s.A)()), []), h = (0, a.Ay)({
    id: O,
    isEnabled: true,
    scrollToStart: f.js$,
    scrollToEnd: f.js$,
    wrap: true
  }), S = l.useMemo(() => null == t || null == r || 0 === r.length ? [] : [...r].sort(E.d6).map(e => (0, E.ZW)(t.id, e)), [t, r]);
  if (null == t || 0 === S.length) return null;
  let g = S.length,
    y = p.intl.formatToPlainString(p.t.PCs0oo, {
      numRoles: g
    });
  return (0, n.jsx)(c.hD, {
    navigator: h,
    children: (0, n.jsx)(c.PR, {
      children: e => {
        var r, l;
        let {
          ref: s
        } = e, a = function(e, t) {
          if (null == e) return {};
          var r, n, l, i = {};
          if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i
          }
          if (i = function(e, t) {
              if (null == e) return {};
              var r, n, l = {},
                i = Object.getOwnPropertyNames(e);
              for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
              return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
          return i
        }(e, ["ref"]);
        return (0, n.jsxs)("div", {
          className: o()(_.zr, i),
          children: [(0, n.jsx)(u.Text, {
            variant: "text-sm/semibold",
            color: "text-default",
            className: _.Ed,
            children: p.intl.string(p.t.stcSfI)
          }), (0, n.jsx)("div", (r = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
              }))), n.forEach(function(t) {
                var n;
                n = r[t], t in e ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = n
              })
            }
            return e
          }({
            className: _.Ei,
            "aria-label": y,
            ref: s
          }, a), l = l = {
            children: S.map(e => (0, n.jsx)(d.b_, {
              className: _.Yq,
              role: e,
              canRemove: false,
              onRemove: () => {},
              guildId: t.id,
              guild: t,
              disableBorderColor: false
            }, e.id))
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r.push.apply(r, n)
            }
            return r
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
          }), r))]
        })
      }
    })
  })
}