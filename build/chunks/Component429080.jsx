/** Chunk was on 1272 **/
/** chunk id: 429080, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk545957 = require("./545957.js"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk664385 = require("./664385.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk818923 = require("./818923.js"),
  Chunk746882 = require("./746882.js");
let _ = function(e) {
  let {
    quest: t
  } = e, [n, l] = i.useState(false), _ = i.useRef(null), b = (0, s.e7)([u.default], () => u.default.getCurrentUser()), E = d.ZP.useName(b), O = (0, c.Z)(null == b ? true : b.id), y = i.useCallback(e => {
    var n, i;
    return (0, r.jsx)(p.Z, (n = function(e) {
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
    }({
      name: E,
      quest: t,
      memberListItemRef: _,
      applicationStream: O
    }, e), i = i = {
      closePopout: () => {
        l(false)
      }
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(i)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
    }), n))
  }, [t, O, E]);
  return (0, r.jsx)("div", {
    className: g.previewBackground,
    children: (0, r.jsxs)("div", {
      className: g.previewCard,
      children: [(0, r.jsx)(o.Heading, {
        className: m.heading,
        variant: "heading-md/semibold",
        children: h.intl.string(h.t.jY7Zxg)
      }), (0, r.jsx)("div", {
        className: m.previewDescription,
        children: h.intl.string(h.t.q3hbne)
      }), (0, r.jsx)("div", {
        className: m.memberListContainer,
        children: (0, r.jsx)(o.yRy, {
          targetElementRef: _,
          renderPopout: y,
          position: "bottom",
          shouldShow: n,
          onRequestClose: () => l(false),
          nudgeAlignIntoViewport: false,
          useRawTargetDimensions: true,
          animation: o.yRy.Animation.NONE,
          spacing: false,
          fixed: true,
          scrollBehavior: "close",
          children: () => (0, r.jsx)("div", {
            ref: _,
            className: a()(m.minimalMemberItem, {
              [m.selected]: n
            }),
            children: (0, r.jsx)(o.P3F, {
              onClick: () => l(!n),
              tabIndex: 0,
              children: (0, r.jsxs)("div", {
                className: m.memberItemContent,
                children: [(0, r.jsx)(o.qEK, {
                  size: o.EFr.SIZE_32,
                  src: null == b ? true : b.getAvatarURL(true, 32),
                  status: f.Skl.ONLINE,
                  "aria-label": null == b ? true : b.username
                }), (0, r.jsxs)("div", {
                  className: m.memberInfo,
                  children: [(0, r.jsx)(o.Text, {
                    variant: "text-md/semibold",
                    color: "header-primary",
                    children: E
                  }), (0, r.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: h.intl.string(h.t.b9w3bO)
                  })]
                })]
              })
            })
          })
        })
      })]
    })
  })
}