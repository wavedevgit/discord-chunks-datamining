/** Chunk was on 67000 **/
/** chunk id: 179809, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk891371 = require("./891371.js"),
  Chunk620792 = require("./620792.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk866442 = require("./866442.js"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk591146 = require("./591146.js"),
  Chunk771845 = require("./771845.js"),
  Chunk624138 = require("./624138.js"),
  Chunk727258 = require("./727258.js"),
  Chunk276952 = require("./276952.jsx"),
  Chunk199540 = require("./199540.jsx"),
  Chunk40153 = require("./40153.jsx"),
  Chunk252686 = require("./252686.jsx"),
  Chunk682662 = require("./682662.jsx"),
  Chunk662146 = require("./662146.jsx"),
  Chunk126134 = require("./126134.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk829313 = require("./829313.js"),
  Chunk455802 = require("./455802.js");
let P = (0, Chunk624138.Mg)(Chunk477690.Z.FOLDER_ITEM_ANIMATION_DURATION),
  N = (0, Chunk620792.animated)(Chunk481060.Kqy),
  Z = Chunk473749.memo(function(e) {
    let {
      folderNode: t,
      setNodeRef: n,
      selected: l,
      expanded: s,
      mediaState: d,
      mentionCount: b = 0,
      isMentionLowImportance: Z,
      unread: w = false,
      defaultFolderName: T,
      draggable: A = false,
      sorting: R = false,
      onDragStart: D,
      onDragEnd: M,
      onExpandCollapse: L,
      onContextMenu: k,
      renderChildNode: G,
      folderButtonSize: U,
      folderButtonContent: B,
      "aria-setsize": F,
      "aria-posinset": V
    } = e, {
      id: H,
      name: W,
      children: z
    } = t, [K, Y] = i.useState(false), [q, Q] = i.useState(false), X = K || q, J = (0, p.Ml)("FolderItem");
    i.useEffect(() => {
      R && Y(false)
    }, [R]);
    let [{
      dragging: $
    }, ee] = (0, o.c)({
      type: m.eD.FOLDER,
      item: () => (null == D || D(), {
        type: m.eD.FOLDER,
        nodeId: t.id
      }),
      end() {
        null == M || M(), (0, h.V1)(g.ZP.getCompatibleGuildFolders())
      },
      collect: e => ({
        dragging: e.isDragging()
      })
    }), et = i.useCallback(e => {
      Q(e)
    }, []), en = i.useCallback(e => {
      ("ArrowRight" === e.key && !s || "ArrowLeft" === e.key && s) && L()
    }, [L, s]), er = null != W && "" !== W ? W : null != T && "" !== T ? T : S.intl.string(S.t.xV9hVh), ei = (0, c.Ie)("".concat(H)), el = "folder-items-".concat(H), ea = function(e) {
      let t = (0, f.dQu)(f.TVs.modules.guildbar.FOLDER_SIZE),
        n = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE),
        r = (0, f.dQu)(f.TVs.space.SPACE_XS);
      return e * (n + r) - r + (r - (t - n) / 2) + (0, f.dQu)(f.TVs.space.SPACE_4)
    }(z.length), eo = (0, f.Yzy)(!$ && s, {
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
    }), es = i.useCallback(e => null == n ? true : n(H, e), [n, H]), ec = (0, r.jsxs)(C.H, {
      children: [(0, r.jsx)(y.Z, {
        disabled: $ || s,
        hovered: K,
        selected: l,
        unread: w,
        className: I.pill
      }), (0, r.jsx)(x.Z, {
        text: er,
        disabled: R,
        selected: l,
        disableWrapper: true,
        children: (0, r.jsx)("div", {
          ref: A ? e => {
            ee(e)
          } : true,
          className: a()(_.folderHeader, {
            [_.folderHeaderSmall]: "icon" === U || J,
            [I.wobble]: !$ && q && !s
          }),
          "data-dnd-name": er,
          children: $ ? (0, r.jsx)(j.Z, {
            isFolder: true
          }) : (0, r.jsx)(O.Z, {
            folderNode: t,
            expanded: s,
            sorting: R,
            mediaState: d,
            mentionCount: b,
            isMentionLowImportance: Z,
            tooltipName: er,
            folderGroupId: el,
            onClick: L,
            onContextMenu: k,
            onHoverChange: Y,
            onKeyDown: en,
            treeItemProps: ei,
            folderButtonContent: B,
            "aria-setsize": F,
            "aria-posinset": V
          })
        })
      }), A ? (0, r.jsx)(v.ZP, {
        name: er,
        targetNode: t,
        onDragOverChanged: et
      }) : null]
    }), eu = null != t.color ? t.color : E.Wy, ed = eu === E.Wy ? true : (0, u.Rf)(eu);
    return (0, r.jsxs)("div", {
      ref: es,
      className: a()(_.folderGroup, {
        [_.isExpanded]: s,
        [_.isHovering]: X
      }),
      style: {
        "--custom-folder-color": null != ed ? ed : ""
      },
      "data-drop-hovering": q,
      children: [!$ && s && (0, r.jsx)("span", {
        className: _.folderGroupBackground
      }), ec, eo((e, n, i) => {
        let {
          key: l
        } = i;
        return n && (0, r.jsx)(N, {
          id: el,
          role: "group",
          as: "ul",
          gap: "xs",
          className: _.folderGuildsList,
          style: {
            height: e.height.to(e => e * ea)
          },
          "aria-label": t.name,
          children: z.map((t, n) => G(t, n, z.length, e.height))
        }, l)
      }), A && s ? (0, r.jsx)(v.Zu, {
        name: er,
        targetNode: t
      }) : null]
    })
  })