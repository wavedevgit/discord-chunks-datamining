/** Chunk was on 53494 **/
n.d(t, {
  Z: () => N
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  l = n.n(o),
  a = n(999153),
  s = n(642128),
  c = n(91192),
  u = n(477690),
  d = n(481060),
  p = n(153867),
  h = n(540059),
  f = n(771845),
  g = n(624138),
  m = n(727258),
  b = n(276952),
  v = n(199540),
  y = n(40153),
  _ = n(252686),
  O = n(682662),
  j = n(662146),
  C = n(388032),
  x = n(457528),
  S = n(625704);
let P = (0, g.Mg)(u.Z.FOLDER_ITEM_ANIMATION_DURATION),
  I = (0, s.animated)(d.Kqy),
  N = i.memo(function(e) {
    let {
      folderNode: t,
      setNodeRef: n,
      selected: o,
      expanded: s,
      mediaState: u,
      mentionCount: g = 0,
      isMentionLowImportance: N,
      unread: Z = !1,
      defaultFolderName: w,
      useCircleMask: E = !1,
      draggable: T = !1,
      sorting: A = !1,
      onDragStart: D,
      onDragEnd: R,
      onExpandCollapse: L,
      onContextMenu: k,
      renderChildNode: M,
      folderIconContent: G,
      folderIconContentClassName: B
    } = e, {
      id: U,
      name: W,
      children: V
    } = t, F = (0, h.Q3)("FolderItem"), [H, z] = i.useState(!1), [Y, q] = i.useState(!1), Q = H || Y;
    i.useEffect(() => {
      A && z(!1)
    }, [A]);
    let [{
      dragging: K
    }, J] = (0, a.c)({
      type: m.eD.FOLDER,
      item: () => (null == D || D(), {
        type: m.eD.FOLDER,
        nodeId: t.id
      }),
      end() {
        null == R || R(), (0, p.V1)(f.ZP.getCompatibleGuildFolders())
      },
      collect: e => ({
        dragging: e.isDragging()
      })
    }), X = i.useCallback(e => {
      q(e)
    }, []), $ = i.useCallback(e => {
      ("ArrowRight" === e.key && !s || "ArrowLeft" === e.key && s) && L()
    }, [L, s]), ee = null != W && "" !== W ? W : null != w && "" !== w ? w : C.NW.string(C.t.xV9hVl), et = (0, c.Ie)("".concat(U)), en = "folder-items-".concat(U), er = function(e) {
      let t = (0, d.dQu)(d.TVs.modules.guildbar.AVATAR_SIZE),
        n = (0, h.Q3)("FolderItem.useHeight"),
        {
          density: r
        } = (0, d.TCT)();
      if (!n) return e * (t + 8);
      let i = e * (t + ("cozy" === r ? 8 : 4));
      return "cozy" === r ? i - 4 : i
    }(V.length), ei = (0, d.Yzy)(!K && s, {
      from: {
        height: 0
      },
      enter: {
        height: 1
      },
      leave: {
        height: 0
      },
      config: {
        duration: P
      }
    }), eo = i.useCallback(e => null == n ? void 0 : n(U, e), [n, U]), el = (0, r.jsxs)(O.H, {
      children: [(0, r.jsx)(b.Z, {
        disabled: K || s,
        hovered: H,
        selected: o,
        unread: Z,
        className: S.pill
      }), (0, r.jsx)(j.Z, {
        text: ee,
        disabled: A,
        selected: o,
        disableWrapper: !0,
        children: (0, r.jsx)("div", {
          ref: T ? J : void 0,
          className: l()(x.folderIcon, {
            [S.wobble]: !K && Y && !s
          }),
          "data-dnd-name": ee,
          children: K ? (0, r.jsx)(_.Z, {}) : (0, r.jsx)(v.Z, {
            folderNode: t,
            expanded: s,
            forceCircular: E,
            sorting: A,
            mediaState: u,
            mentionCount: g,
            isMentionLowImportance: N,
            tooltipName: ee,
            folderGroupId: en,
            onClick: L,
            onContextMenu: k,
            onHoverChange: z,
            onKeyDown: $,
            treeItemProps: et,
            folderIconContentClassName: B,
            folderIconContent: G
          })
        })
      }), T ? (0, r.jsx)(y.ZP, {
        name: ee,
        targetNode: t,
        onDragOverChanged: X
      }) : null]
    });
    return (0, r.jsxs)("div", {
      ref: eo,
      className: l()(x.wrapper, s && x.isExpanded),
      "data-drop-hovering": Y,
      children: [!K && s && (0, r.jsx)("span", {
        className: l()(x.expandedFolderBackground, {
          [x.collapsed]: !s,
          [x.hover]: Q
        })
      }), el, ei((e, t, n) => {
        let {
          key: i
        } = n;
        return t && (0, r.jsx)(I, {
          as: "ul",
          gap: F ? "xxs" : 0,
          id: en,
          style: {
            height: e.height.to(e => e * er),
            overflow: "hidden"
          },
          role: "group",
          children: V.map(t => M(t, e.height))
        }, i)
      }), T && s ? (0, r.jsx)(y.Zu, {
        name: ee,
        targetNode: t
      }) : null]
    })
  })