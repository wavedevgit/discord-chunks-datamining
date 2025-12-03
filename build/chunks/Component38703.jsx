/** Chunk was on 384 **/
/** chunk id: 38703, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk710344 = require("./710344.js"),
  Chunk63063 = require("./63063.js"),
  Chunk190007 = require("./190007.js"),
  Chunk926958 = require("./926958.js"),
  Chunk964821 = require("./964821.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk407810 = require("./407810.js");

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

function b() {
  let e = (0, Chunk442837.e7)([Chunk926958.Z], () => Chunk926958.Z.getEditedConnections()),
    t = (0, Chunk442837.e7)([Chunk926958.Z], () => Chunk926958.Z.isSubmitting()),
    b = Chunk473749.useCallback(() => {
      (0, Chunk481060.ZDy)(async () => {
        let {
          default: e
        } = await require.e("11798").then(require.bind(require, 8656));
        return t => (0, r.jsx)(e, h({}, t))
      })
    }, []),
    x = Chunk473749.useMemo(() => module.map(e => {
      var t, n;
      return t = h({}, e), n = n = {
        id: (0, m.a4)(e)
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
    }), [module]),
    j = Chunk473749.useCallback(e => {
      let t = e.map(e => {
        var {
          id: t
        } = e;
        return function(e, t) {
          if (null == e) return {};
          var n, r, i = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
        }(e, ["id"])
      });
      (0, c.l_)(t)
    }, []),
    {
      handleDragStart: _,
      handleDragReset: v,
      handleDragComplete: O,
      draggingId: C
    } = (0, Chunk710344.Z)(x, j),
    y = module.length < Chunk290511.yx;
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk407810.connectionsSection,
    children: [(0, Chunk54381.jsxs)("div", {
      className: Chunk407810.connectionsSectionHeader,
      children: [(0, Chunk54381.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/bold",
        children: Chunk388032.intl.string(Chunk388032.t.Cl8F8H)
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/medium",
        color: "text-strong",
        children: Chunk388032.intl.format(Chunk388032.t.vqgyJR, {
          linkedRolesUrl: Chunk63063.Z.getArticleURL(Chunk981631.BhN.CONNECTION_DETAILS_ADMIN)
        })
      }), !y && (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: Chunk388032.intl.format(Chunk388032.t.Nc7guW, {
          max: Chunk290511.yx
        })
      })]
    }), module.length > 0 && (0, Chunk54381.jsx)("div", {
      className: Chunk407810.connectionsList,
      children: x.map((e, t) => (0, r.jsx)(d.Z, {
        connection: e,
        index: t,
        onDragStart: _,
        onDragReset: v,
        onDragComplete: O,
        draggingId: C
      }, e.id))
    }), (0, Chunk54381.jsxs)("button", {
      className: Chunk407810.addConnectionButton,
      onClick: b,
      disabled: !y || exports,
      type: "button",
      children: [(0, Chunk54381.jsx)(Chunk481060.oFk, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor"
      }), (0, Chunk54381.jsx)(Chunk481060.Text, {
        variant: "text-md/semibold",
        color: "text-brand",
        children: Chunk388032.intl.string(Chunk388032.t["03EqaC"])
      })]
    })]
  })
}