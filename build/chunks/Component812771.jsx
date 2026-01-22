/** Chunk was on 97492 **/
/** chunk id: 812771, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A,
  X: () => g
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk817281 = require("./817281.js"),
  Chunk761929 = require("./761929.js"),
  Chunk964404 = require("./964404.js"),
  Chunk743898 = require("./743898.js"),
  Chunk3651 = require("./3651.js"),
  g = ((r = {})[r.PostSidebar = 0] = "PostSidebar", r[r.ThreadSidebar = 1] = "ThreadSidebar", r[r.CallChatSidebar = 2] = "CallChatSidebar", r[r.MessageRequestSidebar = 3] = "MessageRequestSidebar", r[r.HomeSidebar = 4] = "HomeSidebar", r[r.ParticipantsSidebar = 5] = "ParticipantsSidebar", r);

function m(e) {
  let {
    resizableNode: t,
    onResize: n,
    onResizeEnd: r,
    maxWidth: i,
    minWidth: a
  } = e, s = (0, f.A)({
    minDimension: a,
    maxDimension: i,
    resizableDomNodeRef: t,
    onElementResize: n,
    onElementResizeEnd: r,
    orientation: f.R.HORIZONTAL_LEFT,
    throttleDuration: 16
  });
  return (0, l.jsx)("div", {
    onMouseDown: s,
    className: b.Di
  })
}

function A(e) {
  let {
    sidebarType: t,
    maxWidth: n,
    onWidthChange: r,
    children: a,
    floatingLayer: f
  } = e, g = i.useRef(null), A = function(e) {
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
  }(t), [y, O] = i.useState(p.Ay[A]), j = i.useCallback(e => {
    d.Ay.updatedUnsyncedSettings({
      [A]: e
    })
  }, [A]), v = 5 === t ? 360 : 450, x = (0, h.P)({
    maxWidth: n,
    minWidth: v
  }), E = (0, u.rdh)(c.A.modules.chat.RESIZE_HANDLE_WIDTH), _ = (0, o.clamp)(y, v, n), C = x ? _ : _ + E;
  i.useEffect(() => {
    null == r || r(_, x)
  }, [_, r, x]);
  let S = null != f ? f : i.Fragment;
  return (0, l.jsxs)(l.Fragment, {
    children: [!x && (0, l.jsx)("div", {
      style: {
        minWidth: C
      }
    }), (0, l.jsx)(S, {
      children: (0, l.jsxs)("div", {
        className: s()(b.PA, {
          [b.R]: false
        }),
        children: [(0, l.jsx)("div", {
          className: s()(b.Uc, {
            [b.DU]: x,
            [b.iK]: !x
          }),
          style: {
            width: C
          }
        }), !x && (0, l.jsx)(m, {
          minWidth: v,
          maxWidth: n,
          resizableNode: g,
          onResize: O,
          onResizeEnd: j
        }), (0, l.jsx)("div", {
          ref: g,
          className: s()(b.kL, {
            [b.DU]: x
          }),
          style: {
            width: _
          },
          children: a
        })]
      })
    })]
  })
}