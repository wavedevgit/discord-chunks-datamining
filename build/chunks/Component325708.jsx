/** Chunk was on 73726 **/
/** chunk id: 325708, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _,
  y: () => g
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk347469 = require("./347469.js"),
  Chunk740492 = require("./740492.js"),
  Chunk36645 = require("./36645.js"),
  Chunk875675 = require("./875675.js"),
  g = ((r = {})[r.PostSidebar = 0] = "PostSidebar", r[r.ThreadSidebar = 1] = "ThreadSidebar", r[r.CallChatSidebar = 2] = "CallChatSidebar", r[r.MessageRequestSidebar = 3] = "MessageRequestSidebar", r[r.HomeSidebar = 4] = "HomeSidebar", r[r.ParticipantsSidebar = 5] = "ParticipantsSidebar", r);

function b(e) {
  let {
    resizableNode: t,
    onResize: n,
    onResizeEnd: r,
    maxWidth: l,
    minWidth: a
  } = e, o = (0, p.Z)({
    minDimension: a,
    maxDimension: l,
    resizableDomNodeRef: t,
    onElementResize: n,
    onElementResizeEnd: r,
    orientation: p.y.HORIZONTAL_LEFT,
    throttleDuration: 16
  });
  return (0, i.jsx)("div", {
    onMouseDown: o,
    className: m.resizeHandle
  })
}

function _(e) {
  let {
    sidebarType: t,
    maxWidth: n,
    onWidthChange: r,
    children: a,
    floatingLayer: p
  } = e, g = l.useRef(null), _ = function(e) {
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
  }(t), [y, C] = l.useState(f.ZP[_]), v = l.useCallback(e => {
    d.ZP.updatedUnsyncedSettings({
      [_]: e
    })
  }, [_]), x = 5 === t ? h.at : h.Co, O = (0, h.WL)({
    maxWidth: n,
    minWidth: x
  }), E = (0, u.dQu)(c.Z.modules.chat.RESIZE_HANDLE_WIDTH), j = (0, s.clamp)(y, x, n), S = O ? j : j + E;
  l.useEffect(() => {
    null == r || r(j, O)
  }, [j, r, O]);
  let P = null != p ? p : l.Fragment;
  return (0, i.jsxs)(i.Fragment, {
    children: [!O && (0, i.jsx)("div", {
      style: {
        minWidth: S
      }
    }), (0, i.jsx)(P, {
      children: (0, i.jsxs)("div", {
        className: o()(m.chatLayerWrapper, {
          [m.hidden]: false
        }),
        children: [(0, i.jsx)("div", {
          className: o()(m.chatTarget, {
            [m.floating]: O,
            [m.notFloating]: !O
          }),
          style: {
            width: S
          }
        }), !O && (0, i.jsx)(b, {
          minWidth: x,
          maxWidth: n,
          resizableNode: g,
          onResize: C,
          onResizeEnd: v
        }), (0, i.jsx)("div", {
          ref: g,
          className: o()(m.container, {
            [m.floating]: O
          }),
          style: {
            width: j
          },
          children: a
        })]
      })
    })]
  })
}