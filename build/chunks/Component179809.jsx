/** Chunk was on 65354 **/
/** chunk id: 179809, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => Z
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk891371 = require("./891371.js"),
  Chunk636606 = require("./636606.js"),
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
  Chunk106663 = require("./106663.js"),
  Chunk534175 = require("./534175.js");
let P = (0, Chunk624138.Mg)(Chunk477690.Z.FOLDER_ITEM_ANIMATION_DURATION),
  N = (0, Chunk636606.animated)(Chunk481060.Kqy),
  Z = Chunk473749.memo(function(e) {
    let {
      folderNode: t,
      setNodeRef: n,
      selected: l,
      expanded: s,
      mediaState: d,
      mentionCount: m = 0,
      isMentionLowImportance: Z,
      unread: w = false,
      defaultFolderName: T,
      draggable: A = false,
      sorting: R = false,
      onDragStart: D,
      onDragEnd: L,
      onExpandCollapse: M,
      onContextMenu: k,
      renderChildNode: G,
      folderButtonSize: U,
      folderButtonContent: B,
      "aria-setsize": F,
      "aria-posinset": V
    } = e, {
      id: H,
      name: z,
      children: W
    } = t, [K, Y] = i.useState(false), [q, X] = i.useState(false), Q = K || q, J = (0, h.Ml)("FolderItem");
    i.useEffect(() => {
      R && Y(false)
    }, [R]);
    let [{
      dragging: $
    }, ee] = (0, a.c)({
      type: b.eD.FOLDER,
      item: () => (null == D || D(), {
        type: b.eD.FOLDER,
        nodeId: t.id
      }),
      end() {
        null == L || L(), (0, f.V1)(g.ZP.getCompatibleGuildFolders())
      },
      collect: e => ({
        dragging: e.isDragging()
      })
    }), et = i.useCallback(e => {
      X(e)
    }, []), en = i.useCallback(e => {
      ("ArrowRight" === e.key && !s || "ArrowLeft" === e.key && s) && M()
    }, [M, s]), er = null != z && "" !== z ? z : null != T && "" !== T ? T : E.intl.string(E.t.xV9hVh), ei = (0, c.Ie)("".concat(H)), el = "folder-items-".concat(H), eo = function(e) {
      let t = (0, p.dQu)(p.TVs.modules.guildbar.FOLDER_SIZE),
        n = (0, p.dQu)(p.TVs.modules.guildbar.AVATAR_SIZE),
        r = (0, p.dQu)(p.TVs.space.SPACE_XS);
      return e * (n + r) - r + (r - (t - n) / 2) + (0, p.dQu)(p.TVs.space.SPACE_4)
    }(W.length), ea = (0, p.Yzy)(!$ && s, {
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
    }), es = i.useCallback(e => null == n ? true : n(H, e), [n, H]), ec = (0, r.jsxs)(j.H, {
      children: [(0, r.jsx)(_.Z, {
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
          className: o()(S.folderHeader, {
            [S.folderHeaderSmall]: "icon" === U || J,
            [I.wobble]: !$ && q && !s
          }),
          "data-dnd-name": er,
          children: $ ? (0, r.jsx)(v.Z, {
            isFolder: true
          }) : (0, r.jsx)(y.Z, {
            folderNode: t,
            expanded: s,
            sorting: R,
            mediaState: d,
            mentionCount: m,
            isMentionLowImportance: Z,
            tooltipName: er,
            folderGroupId: el,
            onClick: M,
            onContextMenu: k,
            onHoverChange: Y,
            onKeyDown: en,
            treeItemProps: ei,
            folderButtonContent: B,
            "aria-setsize": F,
            "aria-posinset": V
          })
        })
      }), A ? (0, r.jsx)(O.ZP, {
        name: er,
        targetNode: t,
        onDragOverChanged: et
      }) : null]
    }), eu = null != t.color ? t.color : C.Wyy, ed = eu === C.Wyy ? true : (0, u.Rf)(eu);
    return (0, r.jsxs)("div", {
      ref: es,
      className: o()(S.folderGroup, {
        [S.isExpanded]: s,
        [S.isHovering]: Q
      }),
      style: {
        "--custom-folder-color": null != ed ? ed : ""
      },
      "data-drop-hovering": q,
      children: [!$ && s && (0, r.jsx)("span", {
        className: S.folderGroupBackground
      }), ec, ea((e, n, i) => {
        let {
          key: l
        } = i;
        return n && (0, r.jsx)(N, {
          id: el,
          role: "group",
          as: "ul",
          gap: "xs",
          className: S.folderGuildsList,
          style: {
            height: e.height.to(e => e * eo)
          },
          "aria-label": t.name,
          children: W.map((t, n) => G(t, n, W.length, e.height))
        }, l)
      }), A && s ? (0, r.jsx)(O.Zu, {
        name: er,
        targetNode: t
      }) : null]
    })
  })