/** Chunk was on 82124 **/
/** chunk id: 179809, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk17163 = require("./17163.js"),
  Chunk81239 = require("./81239.js"),
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
  Z = (0, Chunk81239.animated)(Chunk481060.Kqy),
  N = Chunk473749.memo(function(e) {
    let {
      folderNode: t,
      setNodeRef: n,
      selected: l,
      expanded: s,
      mediaState: d,
      mentionCount: m = 0,
      isMentionLowImportance: N,
      unread: T = false,
      defaultFolderName: A,
      draggable: w = false,
      sorting: R = false,
      onDragStart: D,
      onDragEnd: M,
      onExpandCollapse: k,
      onContextMenu: L,
      renderChildNode: U,
      folderButtonSize: G,
      folderButtonContent: B,
      "aria-setsize": F,
      "aria-posinset": H
    } = e, {
      id: V,
      name: z,
      children: W
    } = t, [K, Y] = i.useState(false), [q, X] = i.useState(false), Q = K || q, J = (0, h.Ml)("FolderItem");
    i.useEffect(() => {
      R && Y(false)
    }, [R]);
    let [{
      dragging: $
    }, ee] = (0, o.c)({
      type: b.eD.FOLDER,
      item: () => (null == D || D(), {
        type: b.eD.FOLDER,
        nodeId: t.id
      }),
      end() {
        null == M || M(), (0, f.V1)(g.ZP.getCompatibleGuildFolders())
      },
      collect: e => ({
        dragging: e.isDragging()
      })
    }), et = i.useCallback(e => {
      X(e)
    }, []), en = i.useCallback(e => {
      ("ArrowRight" === e.key && !s || "ArrowLeft" === e.key && s) && k()
    }, [k, s]), er = null != z && "" !== z ? z : null != A && "" !== A ? A : S.intl.string(S.t.xV9hVh), ei = (0, c.Ie)("".concat(V)), el = "folder-items-".concat(V), ea = function(e) {
      let t = (0, p.dQu)(p.TVs.modules.guildbar.FOLDER_SIZE),
        n = (0, p.dQu)(p.TVs.modules.guildbar.AVATAR_SIZE),
        r = (0, p.dQu)(p.TVs.space.SPACE_XS);
      return e * (n + r) - r + (r - (t - n) / 2) + (0, p.dQu)(p.TVs.space.SPACE_4)
    }(W.length), eo = (0, p.Yzy)(!$ && s, {
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
    }), es = i.useCallback(e => null == n ? true : n(V, e), [n, V]), ec = (0, r.jsxs)(x.H, {
      children: [(0, r.jsx)(y.Z, {
        disabled: $ || s,
        hovered: K,
        selected: l,
        unread: T,
        className: I.pill
      }), (0, r.jsx)(C.Z, {
        text: er,
        disabled: R,
        selected: l,
        disableWrapper: true,
        children: (0, r.jsx)("div", {
          ref: w ? e => {
            ee(e)
          } : true,
          className: a()(_.folderHeader, {
            [_.folderHeaderSmall]: "icon" === G || J,
            [I.wobble]: !$ && q && !s
          }),
          "data-dnd-name": er,
          children: $ ? (0, r.jsx)(j.Z, {
            isFolder: true
          }) : (0, r.jsx)(v.Z, {
            folderNode: t,
            expanded: s,
            sorting: R,
            mediaState: d,
            mentionCount: m,
            isMentionLowImportance: N,
            tooltipName: er,
            folderGroupId: el,
            onClick: k,
            onContextMenu: L,
            onHoverChange: Y,
            onKeyDown: en,
            treeItemProps: ei,
            folderButtonContent: B,
            "aria-setsize": F,
            "aria-posinset": H
          })
        })
      }), w ? (0, r.jsx)(O.ZP, {
        name: er,
        targetNode: t,
        onDragOverChanged: et
      }) : null]
    }), eu = null != t.color ? t.color : E.Wy, ed = eu === E.Wy ? true : (0, u.Rf)(eu);
    return (0, r.jsxs)("div", {
      ref: es,
      className: a()(_.folderGroup, {
        [_.isExpanded]: s,
        [_.isHovering]: Q
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
        return n && (0, r.jsx)(Z, {
          id: el,
          role: "group",
          as: "ul",
          gap: "xs",
          className: _.folderGuildsList,
          style: {
            height: e.height.to(e => e * ea)
          },
          "aria-label": t.name,
          children: W.map((t, n) => U(t, n, W.length, e.height))
        }, l)
      }), w && s ? (0, r.jsx)(O.Zu, {
        name: er,
        targetNode: t
      }) : null]
    })
  })