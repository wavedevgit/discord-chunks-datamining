/** Chunk was on 32098 **/
n.d(t, {
  Z: () => S
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(642128),
  s = n(866442),
  c = n(442837),
  u = n(477690),
  d = n(481060),
  p = n(377171),
  h = n(540059),
  f = n(565138),
  g = n(430824),
  m = n(624138),
  b = n(674552),
  v = n(981631),
  y = n(388032),
  _ = n(602079);
let O = (0, m.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
  j = (0, m.Mg)(u.Z.FOLDER_ITEM_GUILD_ICON_SIZE),
  C = ["13px 4px 4px 4px", "4px 13px 4px 4px", "4px 4px 4px 13px", "4px 4px 13px 4px"];

function x(e) {
  let {
    guildId: t,
    animate: n,
    index: i
  } = e, l = (0, c.e7)([g.Z], () => g.Z.getGuild(t), [t]), o = (0, h.Q3)("GuildIcon"), a = (0, d.dQu)(d.TVs.modules.guildbar.AVATAR_SIZE);
  return null == l ? (0, r.jsx)("div", {
    className: _.guildIconUnavailable,
    children: "!"
  }) : (0, r.jsx)(f.Z, {
    guild: l,
    animate: n,
    size: o ? f.Z.Sizes.MINI : f.Z.Sizes.SMOL,
    iconSize: o ? a : void 0,
    lossless: o,
    className: _.guildIcon,
    tabIndex: -1,
    style: o ? {
      borderRadius: C[i]
    } : void 0
  })
}

function P(e) {
  let t, n, {
      folderNode: l,
      hovered: o,
      expanded: c
    } = e,
    u = (0, h.Q3)("FolderIconContent"),
    {
      color: p,
      children: f
    } = l,
    g = null != p ? p : v.Wyy,
    m = g === v.Wyy,
    b = f.map(e => e.id),
    [y, C] = i.useState(!1),
    [P, S] = i.useState(c),
    N = u ? c ? 22 : -11 : c ? 0 : -j,
    I = (0, d.q_F)({
      transform: "translate3d(0, ".concat(N, "px, 0)"),
      config: {
        duration: O
      },
      onStart() {
        C(!0), S(c)
      },
      onRest() {
        C(!1), S(c)
      }
    }, "animate-always"),
    Z = y ? I : void 0;
  (y || P) && (t = (0, r.jsx)(a.animated.div, {
    style: Z,
    className: _.expandedFolderIconWrapper,
    children: (0, r.jsx)(d.ROc, {
      size: u ? "sm" : "md",
      color: "currentColor",
      style: {
        color: (0, s.Rf)(g)
      }
    })
  })), (y || !P) && (n = (0, r.jsx)(a.animated.div, {
    style: Z,
    className: _.closedFolderIconWrapper,
    children: b.slice(0, 4).map((e, t) => (0, r.jsx)(x, {
      index: t,
      guildId: e,
      animate: o
    }, e))
  }));
  let w = {
    backgroundColor: u && m ? d.TVs.colors.BG_MOD_SUBTLE.css : (0, s.br)(g, .4)
  };
  return (0, r.jsxs)("div", {
    "aria-hidden": !0,
    style: c ? void 0 : w,
    className: _.folderIconWrapper,
    children: [t, n]
  })
}

function S(e) {
  var t, n;
  let {
    folderNode: l,
    forceCircular: a,
    expanded: s,
    sorting: c,
    mediaState: u,
    mentionCount: f = 0,
    isMentionLowImportance: g,
    tooltipName: m,
    folderGroupId: v,
    folderIconContentClassName: O,
    folderIconContent: j,
    onClick: C,
    onContextMenu: x,
    onHoverChange: S,
    onKeyDown: N,
    treeItemProps: {
      onFocus: I
    }
  } = e, Z = function(e, t) {
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
  }(e.treeItemProps, ["onFocus"]), [w, E] = i.useState(!1), T = i.useCallback(() => {
    c || E(!0), null == S || S(!0)
  }, [c, S]), A = i.useCallback(() => {
    c || E(!1), null == S || S(!1)
  }, [c, S]), D = (0, h.Q3)("FolderHeader"), R = s || null == u ? null : (0, b.Or)(u), L = !s && f > 0 ? (0, b.Ne)(f, g ? p.Z.BACKGROUND_ACCENT : p.Z.STATUS_DANGER) : null, k = (0, d.dQu)(d.TVs.modules.guildbar.FOLDER_SIZE);
  return (0, r.jsx)(d.aRk, {
    isFolder: !0,
    style: D ? {
      width: k,
      height: k
    } : void 0,
    selected: !!D || !a,
    upperBadge: R,
    lowerBadge: L,
    lowerBadgeSize: {
      width: (0, d.OVM)(f)
    },
    children: (0, r.jsx)(d.P3F, (t = function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = r
        })
      }
      return e
    }({
      className: o()(_.folder, {
        [_.hover]: w
      }),
      onClick: C,
      onContextMenu: x,
      onMouseEnter: T,
      onMouseLeave: A,
      onKeyDown: N,
      onFocus: I,
      "aria-label": y.NW.formatToPlainString(y.t["90/DwM"], {
        folderName: m,
        mentions: f
      }),
      "aria-expanded": s,
      "aria-owns": v,
      focusProps: {
        enabled: !1
      }
    }, Z), n = n = {
      role: "treeitem",
      children: null != j ? (0, r.jsx)("div", {
        className: o()(_.expandedFolderIconWrapper, O),
        children: j
      }) : (0, r.jsx)(P, {
        folderNode: l,
        hovered: w,
        expanded: s
      })
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