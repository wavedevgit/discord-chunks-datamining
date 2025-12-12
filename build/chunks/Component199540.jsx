/** Chunk was on 64722 **/
/** chunk id: 199540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk674552 = require("./674552.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk106663 = require("./106663.js");

function p(e) {
  let {
    guildId: t,
    animate: n
  } = e, i = (0, a.e7)([u.Z], () => u.Z.getGuild(t), [t]), l = (0, s.dQu)(s.TVs.modules.guildbar.AVATAR_SIZE);
  return null == i ? (0, r.jsx)("div", {
    className: o()(h.folderPreviewGuildIcon, h.folderPreviewGuildIconError),
    children: (0, r.jsx)(s.Mgn, {
      color: "currentColor"
    })
  }) : (0, r.jsx)(c.Z, {
    guild: i,
    animate: n,
    size: c.Z.Sizes.MINI,
    iconSize: l,
    lossless: true,
    className: h.folderPreviewGuildIcon,
    tabIndex: false
  })
}

function g(e) {
  let {
    folderNode: t,
    hovered: n,
    sorting: i
  } = e, {
    children: l
  } = t, a = n && i, c = (0, r.jsx)("div", {
    className: h.folderIconWrapper,
    children: (0, r.jsx)("div", {
      className: h.folderIcon,
      children: (0, r.jsx)(s.ROc, {
        size: "sm",
        color: "currentColor"
      })
    })
  }), u = (0, r.jsx)("div", {
    className: h.folderPreviewWrapper,
    children: (0, r.jsx)("div", {
      className: h.folderPreview,
      children: l.slice(0, 4).map(e => (0, r.jsx)(p, {
        guildId: e.id,
        animate: n
      }, e.id))
    })
  });
  return (0, r.jsxs)("div", {
    "aria-hidden": true,
    className: o()({
      [h.folderDragPreview]: a,
      [h.folderButtonContent]: !a
    }),
    children: [!a && c, u]
  })
}

function m(e) {
  var t, n;
  let {
    folderNode: l,
    expanded: o,
    sorting: a,
    mediaState: c,
    mentionCount: u = 0,
    isMentionLowImportance: p,
    tooltipName: m,
    folderGroupId: b,
    folderButtonContent: _,
    onClick: y,
    onContextMenu: O,
    onHoverChange: v,
    onKeyDown: j,
    treeItemProps: {
      onFocus: C
    },
    "aria-setsize": x,
    "aria-posinset": E
  } = e, S = function(e, t) {
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
  }(e.treeItemProps, ["onFocus"]), [I, P] = i.useState(false), N = i.useCallback(() => {
    a || P(true), null == v || v(true)
  }, [a, v]), Z = i.useCallback(() => {
    a || P(false), null == v || v(false)
  }, [a, v]), w = o || null == c ? null : (0, d.Or)(c), T = !o && u > 0 ? (0, d.Ne)(u, p ? s.TVs.colors.BACKGROUND_ACCENT.css : s.TVs.colors.STATUS_DANGER.css) : null;
  return (0, r.jsx)(s.tEY, {
    children: (0, r.jsxs)(s.P3F, (t = function(e) {
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
      className: h.folderButton,
      onClick: y,
      onContextMenu: O,
      onMouseEnter: N,
      onMouseLeave: Z,
      onKeyDown: j,
      onFocus: C,
      focusProps: {
        enabled: false
      }
    }, S), n = n = {
      role: "treeitem",
      "aria-setsize": x,
      "aria-posinset": E,
      "aria-expanded": o,
      "aria-owns": b,
      children: [(0, r.jsx)(s.nn4, {
        children: f.intl.formatToPlainString(f.t["90/DwM"], {
          folderName: m,
          mentions: u
        })
      }), (0, r.jsx)(s.aRk, {
        "aria-hidden": true,
        isFolder: true,
        upperBadge: w,
        lowerBadge: T,
        lowerBadgeSize: {
          width: (0, s.OVM)(u)
        },
        children: (0, r.jsx)("div", {
          className: h.folderButtonInner,
          children: null != _ ? (0, r.jsx)("div", {
            className: h.folderIconWrapper,
            children: _
          }) : (0, r.jsx)(g, {
            folderNode: l,
            hovered: I,
            sorting: a
          })
        })
      })]
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(n)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t))
  })
}