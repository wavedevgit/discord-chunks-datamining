/** Chunk was on 97492 **/
/** chunk id: 842452, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk131346 = require("./131346.js"),
  Chunk108531 = require("./108531.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk317097 = require("./317097.js"),
  Chunk319060 = require("./319060.js"),
  Chunk397927 = require("./397927.js"),
  Chunk817281 = require("./817281.js"),
  Chunk534409 = require("./534409.js"),
  Chunk711014 = require("./711014.js"),
  Chunk240248 = require("./240248.js"),
  Chunk263715 = require("./263715.js"),
  Chunk941971 = require("./941971.jsx"),
  Chunk447253 = require("./447253.jsx"),
  Chunk531053 = require("./531053.jsx"),
  Chunk107385 = require("./107385.jsx"),
  Chunk900848 = require("./900848.jsx"),
  Chunk550591 = require("./550591.jsx"),
  Chunk114329 = require("./114329.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk211170 = require("./211170.js"),
  Chunk837021 = require("./837021.js");
let I = (0, Chunk240248.xI)(Chunk319060.A.FOLDER_ITEM_ANIMATION_DURATION),
  N = (0, Chunk108531.animated)(Chunk397927.BJc),
  T = Chunk64700.memo(function(e) {
    var t;
    let n, i, o, {
        folderNode: d,
        setNodeRef: m,
        selected: T,
        expanded: P,
        mediaState: w,
        mentionCount: R = 0,
        isMentionLowImportance: D,
        unread: M = false,
        defaultFolderName: L,
        draggable: k = false,
        sorting: G = false,
        onDragStart: U,
        onDragEnd: B,
        onExpandCollapse: V,
        onContextMenu: F,
        renderChildNode: H,
        folderButtonSize: K,
        folderButtonContent: W,
        "aria-setsize": z,
        "aria-posinset": Y
      } = e,
      {
        id: q,
        name: X,
        children: J
      } = d,
      [Q, Z] = l.useState(false),
      [$, ee] = l.useState(false),
      et = Q || $,
      en = (0, f.qK)("FolderItem");
    l.useEffect(() => {
      G && Z(false)
    }, [G]);
    let [{
      dragging: er
    }, el] = (0, a.i)({
      type: b.PJ.FOLDER,
      item: () => (null == U || U(), {
        type: b.PJ.FOLDER,
        nodeId: d.id
      }),
      end() {
        null == B || B(), (0, h.um)(g.Ay.getCompatibleGuildFolders())
      },
      collect: e => ({
        dragging: e.isDragging()
      })
    }), ei = l.useCallback(e => {
      ee(e)
    }, []), es = l.useCallback(e => {
      ("ArrowRight" === e.key && !P || "ArrowLeft" === e.key && P) && V()
    }, [V, P]), ea = null != X && "" !== X ? X : null != L && "" !== L ? L : E.intl.string(E.t.xV9hVh), eo = (0, c.Vd)("".concat(q)), ec = "folder-items-".concat(q), eu = (t = J.length, n = (0, p.rdh)(p.LU0.modules.guildbar.FOLDER_SIZE), i = (0, p.rdh)(p.LU0.modules.guildbar.AVATAR_SIZE), t * (i + (o = (0, p.rdh)(p.LU0.space.SPACE_XS))) - o + (o - (n - i) / 2) + (0, p.rdh)(p.LU0.space.SPACE_4)), ed = (0, p.pnh)(!er && P, {
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
        duration: I
      }
    }), ep = l.useCallback(e => null == m ? true : m(q, e), [m, q]), eh = (0, r.jsxs)(j.c, {
      children: [(0, r.jsx)(A.A, {
        disabled: er || P,
        hovered: Q,
        selected: T,
        unread: M,
        className: S.Io
      }), (0, r.jsx)(v.A, {
        text: ea,
        disabled: G,
        selected: T,
        disableWrapper: true,
        children: (0, r.jsx)("div", {
          ref: k ? e => {
            el(e)
          } : true,
          className: s()(C.MJ, {
            [C.L0]: "icon" === K || en,
            [S.oR]: !er && $ && !P
          }),
          "data-dnd-name": ea,
          children: er ? (0, r.jsx)(O.A, {
            isFolder: true
          }) : (0, r.jsx)(y.A, {
            folderNode: d,
            expanded: P,
            sorting: G,
            mediaState: w,
            mentionCount: R,
            isMentionLowImportance: D,
            tooltipName: ea,
            folderGroupId: ec,
            onClick: V,
            onContextMenu: F,
            onHoverChange: Z,
            onKeyDown: es,
            treeItemProps: eo,
            folderButtonContent: W,
            "aria-setsize": z,
            "aria-posinset": Y
          })
        })
      }), k ? (0, r.jsx)(_.Ay, {
        name: ea,
        targetNode: d,
        onDragOverChanged: ei
      }) : null]
    }), ef = null != d.color ? d.color : x.DO, eg = ef === x.DO ? true : (0, u.Hl)(ef);
    return (0, r.jsxs)("div", {
      ref: ep,
      className: s()(C.qc, {
        [C.Av]: P,
        [C.Lg]: et
      }),
      style: {
        "--custom-folder-color": null != eg ? eg : ""
      },
      "data-drop-hovering": $,
      children: [!er && P && (0, r.jsx)("span", {
        className: C.GO
      }), eh, ed((e, t, n) => {
        let {
          key: l
        } = n;
        return t && (0, r.jsx)(N, {
          id: ec,
          role: "group",
          as: "ul",
          gap: "xs",
          className: C.TN,
          style: {
            height: e.height.to(e => e * eu)
          },
          "aria-label": d.name,
          children: J.map((t, n) => H(t, n, J.length, e.height))
        }, l)
      }), k && P ? (0, r.jsx)(_.qv, {
        name: ea,
        targetNode: d
      }) : null]
    })
  })