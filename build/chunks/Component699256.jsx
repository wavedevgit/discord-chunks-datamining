/** Chunk was on 47841 **/
/** chunk id: 699256, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => x
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk219504 = require("./219504.js"),
  Chunk975571 = require("./975571.js"),
  Chunk923121 = require("./923121.js"),
  Chunk352821 = require("./352821.js"),
  Chunk949034 = require("./949034.js"),
  Chunk250006 = require("./250006.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk539916 = require("./539916.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk902973 = require("./902973.js");

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function x(e) {
  let {
    guildId: t
  } = e, x = (0, l.bG)([d.A], () => d.A.getEditedConnections()), j = (0, l.bG)([d.A], () => d.A.isSubmitting()), _ = i.useCallback(() => {
    (0, s.mMO)(async () => {
      let {
        default: e
      } = await n.e("90194").then(n.bind(n, 566857));
      return t => (0, r.jsx)(e, h({}, t))
    })
  }, []), O = i.useMemo(() => x.map(e => {
    var t, n;
    return t = h({}, e), n = n = {
      id: (0, p.Sq)(e)
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t
  }), [x]), v = i.useCallback(e => {
    let t = e.map(e => {
      let {
        id: t
      } = e;
      return function(e, t) {
        if (null == e) return {};
        var n, r, i, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
          for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
          return l
        }
        if (l = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
              l = Object.getOwnPropertyNames(e);
            for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i
          }(e, t), Object.getOwnPropertySymbols)
          for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }(e, ["id"])
    });
    (0, c.Bq)(t)
  }, []), {
    handleDragStart: y,
    handleDragReset: A,
    handleDragComplete: E,
    draggingId: N
  } = (0, a.A)(O, v), {
    enabled: S
  } = u.A.useExperiment({
    guildId: t,
    location: "guild_settings"
  }, {
    autoTrackExposure: true
  });
  if (!S) return null;
  let I = x.length < p.pA;
  return (0, r.jsxs)("div", {
    className: b.jx,
    children: [(0, r.jsxs)("div", {
      className: b.G6,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-lg/bold",
        children: f.intl.string(f.t.Cl8F8H)
      }), (0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-strong",
        children: f.intl.format(f.t.vqgyJR, {
          linkedRolesUrl: o.A.getArticleURL(m.MVz.CONNECTION_DETAILS_ADMIN)
        })
      }), !I && (0, r.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: f.intl.format(f.t.Nc7guW, {
          max: p.pA
        })
      })]
    }), x.length > 0 && (0, r.jsx)("div", {
      className: b.eF,
      children: O.map((e, t) => (0, r.jsx)(g.A, {
        connection: e,
        index: t,
        onDragStart: y,
        onDragReset: A,
        onDragComplete: E,
        draggingId: N
      }, e.id))
    }), (0, r.jsxs)("button", {
      className: b.qG,
      onClick: _,
      disabled: !I || j,
      type: "button",
      children: [(0, r.jsx)(s.U1e, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor"
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/semibold",
        color: "text-brand",
        children: f.intl.string(f.t["03EqaC"])
      })]
    })]
  })
}