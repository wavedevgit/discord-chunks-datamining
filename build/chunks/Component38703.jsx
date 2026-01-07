/** Chunk was on 9536 **/
/** chunk id: 38703, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => h
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
  Chunk163022 = require("./163022.js");

function p(e) {
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

function h() {
  let e = (0, l.e7)([d.Z], () => d.Z.getEditedConnections()),
    t = (0, l.e7)([d.Z], () => d.Z.isSubmitting()),
    h = i.useCallback(() => {
      (0, a.ZDy)(async () => {
        let {
          default: e
        } = await n.e("11798").then(n.bind(n, 8656));
        return t => (0, r.jsx)(e, p({}, t))
      })
    }, []),
    x = i.useMemo(() => e.map(e => {
      var t, n;
      return t = p({}, e), n = n = {
        id: (0, f.a4)(e)
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
    }), [e]),
    j = i.useCallback(e => {
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
      handleDragStart: v,
      handleDragReset: O,
      handleDragComplete: C,
      draggingId: y
    } = (0, s.Z)(x, j),
    N = e.length < f.yx;
  return (0, r.jsxs)("div", {
    className: b.connectionsSection,
    children: [(0, r.jsxs)("div", {
      className: b.connectionsSectionHeader,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-lg/bold",
        children: m.intl.string(m.t.Cl8F8H)
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/medium",
        color: "text-strong",
        children: m.intl.format(m.t.vqgyJR, {
          linkedRolesUrl: o.Z.getArticleURL(g.BhN.CONNECTION_DETAILS_ADMIN)
        })
      }), !N && (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: m.intl.format(m.t.Nc7guW, {
          max: f.yx
        })
      })]
    }), e.length > 0 && (0, r.jsx)("div", {
      className: b.connectionsList,
      children: x.map((e, t) => (0, r.jsx)(u.Z, {
        connection: e,
        index: t,
        onDragStart: v,
        onDragReset: O,
        onDragComplete: C,
        draggingId: y
      }, e.id))
    }), (0, r.jsxs)("button", {
      className: b.addConnectionButton,
      onClick: h,
      disabled: !N || t,
      type: "button",
      children: [(0, r.jsx)(a.oFk, {
        size: "custom",
        width: 20,
        height: 20,
        color: "currentColor"
      }), (0, r.jsx)(a.Text, {
        variant: "text-md/semibold",
        color: "text-brand",
        children: m.intl.string(m.t["03EqaC"])
      })]
    })]
  })
}