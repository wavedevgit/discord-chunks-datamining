/** Chunk was on 97492 **/
/** chunk id: 842452, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => T
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk131346 = require("./131346.js"),
  Chunk432022 = require("./432022.js"),
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
  N = (0, Chunk432022.animated)(Chunk397927.BJc),
  T = Chunk64700.memo(function(e) {
    var t;
    let n, i, o, {
        folderNode: d,
        setNodeRef: g,
        selected: T,
        expanded: P,
        mediaState: w,
        mentionCount: R = 0,
        isMentionLowImportance: D,
        unread: M = false,
        defaultFolderName: L,
        draggable: G = false,
        sorting: k = false,
        onDragStart: U,
        onDragEnd: V,
        onExpandCollapse: F,
        onContextMenu: H,
        renderChildNode: B,
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
      en = (0, h.qK)("FolderItem");
    l.useEffect(() => {
      k && Z(false)
    }, [k]);
    let [{
      dragging: er
    }, el] = (0, s.i)({
      type: m.PJ.FOLDER,
      item: () => (null == U || U(), {
        type: m.PJ.FOLDER,
        nodeId: d.id
      }),
      end() {
        null == V || V(), (0, p.um)(b.Ay.getCompatibleGuildFolders())
      },
      collect: e => ({
        dragging: e.isDragging()
      })
    }), ei = l.useCallback(e => {
      ee(e)
    }, []), ea = l.useCallback(e => {
      ("ArrowRight" === e.key && !P || "ArrowLeft" === e.key && P) && F()
    }, [F, P]), es = null != X && "" !== X ? X : null != L && "" !== L ? L : _.intl.string(_.t.xV9hVh), eo = (0, c.Vd)("".concat(q)), ec = "folder-items-".concat(q), eu = (t = J.length, n = (0, f.rdh)(f.LU0.modules.guildbar.FOLDER_SIZE), i = (0, f.rdh)(f.LU0.modules.guildbar.AVATAR_SIZE), t * (i + (o = (0, f.rdh)(f.LU0.space.SPACE_XS))) - o + (o - (n - i) / 2) + (0, f.rdh)(f.LU0.space.SPACE_4)), ed = (0, f.pnh)(!er && P, {
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
    }), ef = l.useCallback(e => null == g ? true : g(q, e), [g, q]), ep = (0, r.jsxs)(v.c, {
      children: [(0, r.jsx)(A.A, {
        disabled: er || P,
        hovered: Q,
        selected: T,
        unread: M,
        className: S.Io
      }), (0, r.jsx)(x.A, {
        text: es,
        disabled: k,
        selected: T,
        disableWrapper: true,
        children: (0, r.jsx)("div", {
          ref: G ? e => {
            el(e)
          } : true,
          className: a()(C.MJ, {
            [C.L0]: "icon" === K || en,
            [S.oR]: !er && $ && !P
          }),
          "data-dnd-name": es,
          children: er ? (0, r.jsx)(j.A, {
            isFolder: true
          }) : (0, r.jsx)(y.A, {
            folderNode: d,
            expanded: P,
            sorting: k,
            mediaState: w,
            mentionCount: R,
            isMentionLowImportance: D,
            tooltipName: es,
            folderGroupId: ec,
            onClick: F,
            onContextMenu: H,
            onHoverChange: Z,
            onKeyDown: ea,
            treeItemProps: eo,
            folderButtonContent: W,
            "aria-setsize": z,
            "aria-posinset": Y
          })
        })
      }), G ? (0, r.jsx)(O.Ay, {
        name: es,
        targetNode: d,
        onDragOverChanged: ei
      }) : null]
    }), eh = null != d.color ? d.color : E.DO, eb = eh === E.DO ? true : (0, u.Hl)(eh);
    return (0, r.jsxs)("div", {
      ref: ef,
      className: a()(C.qc, {
        [C.Av]: P,
        [C.Lg]: et
      }),
      style: {
        "--custom-folder-color": null != eb ? eb : ""
      },
      "data-drop-hovering": $,
      children: [!er && P && (0, r.jsx)("span", {
        className: C.GO
      }), ep, ed((e, t, n) => {
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
          children: J.map((t, n) => B(t, n, J.length, e.height))
        }, l)
      }), G && P ? (0, r.jsx)(O.qv, {
        name: es,
        targetNode: d
      }) : null]
    })
  })