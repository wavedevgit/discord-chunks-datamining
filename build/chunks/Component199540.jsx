/** Chunk was on 64271 **/
/** chunk id: 199540, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk377171 = require("./377171.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk674552 = require("./674552.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk106663 = require("./106663.js");

function g(e) {
  let {
    guildId: t,
    animate: n
  } = e, i = (0, a.e7)([d.Z], () => d.Z.getGuild(t), [t]), l = (0, s.dQu)(s.TVs.modules.guildbar.AVATAR_SIZE);
  return null == i ? (0, r.jsx)("div", {
    className: o()(p.folderPreviewGuildIcon, p.folderPreviewGuildIconError),
    children: (0, r.jsx)(s.Mgn, {
      color: "currentColor"
    })
  }) : (0, r.jsx)(u.Z, {
    guild: i,
    animate: n,
    size: u.Z.Sizes.MINI,
    iconSize: l,
    lossless: true,
    className: p.folderPreviewGuildIcon,
    tabIndex: false
  })
}

function m(e) {
  let {
    folderNode: t,
    hovered: n,
    sorting: i
  } = e, {
    children: l
  } = t, a = n && i, c = (0, r.jsx)("div", {
    className: p.folderIconWrapper,
    children: (0, r.jsx)("div", {
      className: p.folderIcon,
      children: (0, r.jsx)(s.ROc, {
        size: "sm",
        color: "currentColor"
      })
    })
  }), u = (0, r.jsx)("div", {
    className: p.folderPreviewWrapper,
    children: (0, r.jsx)("div", {
      className: p.folderPreview,
      children: l.slice(0, 4).map(e => (0, r.jsx)(g, {
        guildId: e.id,
        animate: n
      }, e.id))
    })
  });
  return (0, r.jsxs)("div", {
    "aria-hidden": true,
    className: o()({
      [p.folderDragPreview]: a,
      [p.folderButtonContent]: !a
    }),
    children: [!a && c, u]
  })
}

function b(e) {
  var t, n;
  let {
    folderNode: l,
    expanded: o,
    sorting: a,
    mediaState: u,
    mentionCount: d = 0,
    isMentionLowImportance: g,
    tooltipName: b,
    folderGroupId: _,
    folderButtonContent: y,
    onClick: O,
    onContextMenu: v,
    onHoverChange: j,
    onKeyDown: x,
    treeItemProps: {
      onFocus: C
    },
    "aria-setsize": E,
    "aria-posinset": S
  } = e, I = function(e, t) {
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
  }(e.treeItemProps, ["onFocus"]), [P, N] = i.useState(false), Z = i.useCallback(() => {
    a || N(true), null == j || j(true)
  }, [a, j]), w = i.useCallback(() => {
    a || N(false), null == j || j(false)
  }, [a, j]), T = o || null == u ? null : (0, f.Or)(u), A = !o && d > 0 ? (0, f.Ne)(d, g ? c.Z.BACKGROUND_ACCENT : c.Z.STATUS_DANGER) : null;
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
      className: p.folderButton,
      onClick: O,
      onContextMenu: v,
      onMouseEnter: Z,
      onMouseLeave: w,
      onKeyDown: x,
      onFocus: C,
      focusProps: {
        enabled: false
      }
    }, I), n = n = {
      role: "treeitem",
      "aria-setsize": E,
      "aria-posinset": S,
      "aria-expanded": o,
      "aria-owns": _,
      children: [(0, r.jsx)(s.nn4, {
        children: h.intl.formatToPlainString(h.t["90/DwM"], {
          folderName: b,
          mentions: d
        })
      }), (0, r.jsx)(s.aRk, {
        "aria-hidden": true,
        isFolder: true,
        upperBadge: T,
        lowerBadge: A,
        lowerBadgeSize: {
          width: (0, s.OVM)(d)
        },
        children: (0, r.jsx)("div", {
          className: p.folderButtonInner,
          children: null != y ? (0, r.jsx)("div", {
            className: p.folderIconWrapper,
            children: y
          }) : (0, r.jsx)(m, {
            folderNode: l,
            hovered: P,
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