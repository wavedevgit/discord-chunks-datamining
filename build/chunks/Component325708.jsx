/** Chunk was on 40184 **/
/** chunk id: 325708, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y,
  y: () => g
}), require("./388685.js");
var i, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk153867 = require("./153867.js"),
  Chunk347469 = require("./347469.js"),
  Chunk740492 = require("./740492.js"),
  Chunk36645 = require("./36645.js"),
  Chunk631871 = require("./631871.js"),
  g = ((i = {})[i.PostSidebar = 0] = "PostSidebar", i[i.ThreadSidebar = 1] = "ThreadSidebar", i[i.CallChatSidebar = 2] = "CallChatSidebar", i[i.MessageRequestSidebar = 3] = "MessageRequestSidebar", i[i.HomeSidebar = 4] = "HomeSidebar", i[i.ParticipantsSidebar = 5] = "ParticipantsSidebar", i);

function b(e) {
  let {
    resizableNode: t,
    onResize: n,
    onResizeEnd: i,
    maxWidth: l,
    minWidth: a
  } = e, o = (0, p.Z)({
    minDimension: a,
    maxDimension: l,
    resizableDomNodeRef: t,
    onElementResize: n,
    onElementResizeEnd: i,
    orientation: p.y.HORIZONTAL_LEFT,
    throttleDuration: 16
  });
  return (0, r.jsx)("div", {
    onMouseDown: o,
    className: m.resizeHandle
  })
}

function y(e) {
  let {
    sidebarType: t,
    maxWidth: n,
    onWidthChange: i,
    children: a,
    floatingLayer: p
  } = e, g = l.useRef(null), y = function(e) {
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
  }(t), [C, v] = l.useState(f.ZP[y]), x = l.useCallback(e => {
    d.ZP.updatedUnsyncedSettings({
      [y]: e
    })
  }, [y]), O = 5 === t ? h.at : h.Co, E = (0, h.WL)({
    maxWidth: n,
    minWidth: O
  }), j = (0, u.dQu)(c.Z.modules.chat.RESIZE_HANDLE_WIDTH), S = (0, s.clamp)(C, O, n), _ = E ? S : S + j;
  l.useEffect(() => {
    null == i || i(S, E)
  }, [S, i, E]);
  let P = null != p ? p : l.Fragment;
  return (0, r.jsxs)(r.Fragment, {
    children: [!E && (0, r.jsx)("div", {
      style: {
        minWidth: _
      }
    }), (0, r.jsx)(P, {
      children: (0, r.jsxs)("div", {
        className: o()(m.chatLayerWrapper, {
          [m.hidden]: false
        }),
        children: [(0, r.jsx)("div", {
          className: o()(m.chatTarget, {
            [m.floating]: E,
            [m.notFloating]: !E
          }),
          style: {
            width: _
          }
        }), !E && (0, r.jsx)(b, {
          minWidth: O,
          maxWidth: n,
          resizableNode: g,
          onResize: v,
          onResizeEnd: x
        }), (0, r.jsx)("div", {
          ref: g,
          className: o()(m.container, {
            [m.floating]: E
          }),
          style: {
            width: S
          },
          children: a
        })]
      })
    })]
  })
}