/** Chunk was on 1113 **/
/** chunk id: 812771, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A,
  X: () => m
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk817281 = require("./817281.js"),
  Chunk761929 = require("./761929.js"),
  Chunk964404 = require("./964404.js"),
  Chunk743898 = require("./743898.js"),
  Chunk3651 = require("./3651.js"),
  m = ((r = {})[r.PostSidebar = 0] = "PostSidebar", r[r.ThreadSidebar = 1] = "ThreadSidebar", r[r.CallChatSidebar = 2] = "CallChatSidebar", r[r.MessageRequestSidebar = 3] = "MessageRequestSidebar", r[r.HomeSidebar = 4] = "HomeSidebar", r[r.ParticipantsSidebar = 5] = "ParticipantsSidebar", r);

function b(e) {
  let {
    resizableNode: t,
    onResize: n,
    onResizeEnd: r,
    maxWidth: i,
    minWidth: s
  } = e, a = (0, h.A)({
    minDimension: s,
    maxDimension: i,
    resizableDomNodeRef: t,
    onElementResize: n,
    onElementResizeEnd: r,
    orientation: h.R.HORIZONTAL_LEFT,
    throttleDuration: 16
  });
  return (0, l.jsx)("div", {
    onMouseDown: a,
    className: f.Di
  })
}

function A(e) {
  let {
    sidebarType: t,
    maxWidth: n,
    onWidthChange: r,
    children: s,
    floatingLayer: h
  } = e, m = i.useRef(null), A = function(e) {
    switch (e) {
      case 0:
        return "postSidebarWidth";
      case 1:
        return "threadSidebarWidth";
      case 2:
        return "callChatSidebarWidth";
      case 3:
        return "messageRequestSidebarWidth";
      case 4:
        return "homeSidebarWidth";
      case 5:
        return "callParticipantsSidebarWidth"
    }
  }(t), [y, O] = i.useState(p.Ay[A]), _ = i.useCallback(e => {
    d.Ay.updatedUnsyncedSettings({
      [A]: e
    })
  }, [A]), x = 5 === t ? 360 : 450, j = (0, g.P)({
    maxWidth: n,
    minWidth: x
  }), v = (0, u.rdh)(c.A.modules.chat.RESIZE_HANDLE_WIDTH), E = (0, o.clamp)(y, x, n), C = j ? E : E + v;
  i.useEffect(() => {
    null == r || r(E, j)
  }, [E, r, j]);
  let S = null != h ? h : i.Fragment;
  return (0, l.jsxs)(l.Fragment, {
    children: [!j && (0, l.jsx)("div", {
      style: {
        minWidth: C
      }
    }), (0, l.jsx)(S, {
      children: (0, l.jsxs)("div", {
        className: a()(f.PA, {
          [f.R]: false
        }),
        children: [(0, l.jsx)("div", {
          className: a()(f.Uc, {
            [f.DU]: j,
            [f.iK]: !j
          }),
          style: {
            width: C
          }
        }), !j && (0, l.jsx)(b, {
          minWidth: x,
          maxWidth: n,
          resizableNode: m,
          onResize: O,
          onResizeEnd: _
        }), (0, l.jsx)("div", {
          ref: m,
          className: a()(f.kL, {
            [f.DU]: j
          }),
          style: {
            width: E
          },
          children: s
        })]
      })
    })]
  })
}