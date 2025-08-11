/** Chunk was on 34779 **/
/** chunk id: 179809, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk562075 = require("./562075.js"),
  Chunk717976 = require("./717976.js"),
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
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk728492 = require("./728492.js"),
  Chunk335426 = require("./335426.js");
let P = (0, Chunk624138.Mg)(Chunk477690.Z.FOLDER_ITEM_ANIMATION_DURATION),
  N = (0, Chunk717976.animated)(Chunk481060.Kqy),
  w = Chunk73800.memo(function(e) {
    let {
      folderNode: t,
      setNodeRef: n,
      selected: l,
      expanded: a,
      mediaState: d,
      mentionCount: m = 0,
      isMentionLowImportance: w,
      unread: Z = false,
      defaultFolderName: T,
      draggable: A = false,
      sorting: R = false,
      onDragStart: D,
      onDragEnd: L,
      onExpandCollapse: M,
      onContextMenu: k,
      renderChildNode: U,
      folderButtonSize: G,
      folderButtonContent: B,
      "aria-setsize": V,
      "aria-posinset": F
    } = e, {
      id: H,
      name: z,
      children: W
    } = t, [K, Y] = i.useState(false), [q, X] = i.useState(false), Q = K || q, J = (0, f.Ml)("FolderItem");
    i.useEffect(() => {
      R && Y(false)
    }, [R]);
    let [{
      dragging: $
    }, ee] = (0, s.c)({
      type: b.eD.FOLDER,
      item: () => (null == D || D(), {
        type: b.eD.FOLDER,
        nodeId: t.id
      }),
      end() {
        null == L || L(), (0, p.V1)(g.ZP.getCompatibleGuildFolders())
      },
      collect: e => ({
        dragging: e.isDragging()
      })
    }), et = i.useCallback(e => {
      X(e)
    }, []), en = i.useCallback(e => {
      ("ArrowRight" === e.key && !a || "ArrowLeft" === e.key && a) && M()
    }, [M, a]), er = null != z && "" !== z ? z : null != T && "" !== T ? T : S.intl.string(S.t.xV9hVl), ei = (0, c.Ie)("".concat(H)), el = "folder-items-".concat(H), eo = function(e) {
      let t = (0, h.dQu)(h.TVs.modules.guildbar.FOLDER_SIZE),
        n = (0, h.dQu)(h.TVs.modules.guildbar.AVATAR_SIZE),
        r = (0, h.dQu)(h.TVs.space.SPACE_XS);
      return e * (n + r) - r + (r - (t - n) / 2) + (0, h.dQu)(h.TVs.space.SPACE_4)
    }(W.length), es = (0, h.Yzy)(!$ && a, {
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
    }), ea = i.useCallback(e => null == n ? true : n(H, e), [n, H]), ec = (0, r.jsxs)(v.H, {
      children: [(0, r.jsx)(O.Z, {
        disabled: $ || a,
        hovered: K,
        selected: l,
        unread: Z,
        className: I.pill
      }), (0, r.jsx)(j.Z, {
        text: er,
        disabled: R,
        selected: l,
        disableWrapper: true,
        children: (0, r.jsx)("div", {
          ref: A ? e => {
            ee(e)
          } : true,
          className: o()(x.folderHeader, {
            [x.folderHeaderSmall]: "icon" === G || J,
            [I.wobble]: !$ && q && !a
          }),
          "data-dnd-name": er,
          children: $ ? (0, r.jsx)(C.Z, {
            isFolder: true
          }) : (0, r.jsx)(_.Z, {
            folderNode: t,
            expanded: a,
            sorting: R,
            mediaState: d,
            mentionCount: m,
            isMentionLowImportance: w,
            tooltipName: er,
            folderGroupId: el,
            onClick: M,
            onContextMenu: k,
            onHoverChange: Y,
            onKeyDown: en,
            treeItemProps: ei,
            folderButtonContent: B,
            "aria-setsize": V,
            "aria-posinset": F
          })
        })
      }), A ? (0, r.jsx)(y.ZP, {
        name: er,
        targetNode: t,
        onDragOverChanged: et
      }) : null]
    }), eu = null != t.color ? t.color : E.Wyy, ed = eu === E.Wyy ? true : (0, u.Rf)(eu);
    return (0, r.jsxs)("div", {
      ref: ea,
      className: o()(x.folderGroup, {
        [x.isExpanded]: a,
        [x.isHovering]: Q
      }),
      style: {
        "--custom-folder-color": null != ed ? ed : ""
      },
      "data-drop-hovering": q,
      children: [!$ && a && (0, r.jsx)("span", {
        className: x.folderGroupBackground
      }), ec, es((e, n, i) => {
        let {
          key: l
        } = i;
        return n && (0, r.jsx)(N, {
          id: el,
          role: "group",
          as: "ul",
          gap: "xs",
          className: x.folderGuildsList,
          style: {
            height: e.height.to(e => e * eo)
          },
          "aria-label": t.name,
          children: W.map((t, n) => U(t, n, W.length, e.height))
        }, l)
      }), A && a ? (0, r.jsx)(y.Zu, {
        name: er,
        targetNode: t
      }) : null]
    })
  })