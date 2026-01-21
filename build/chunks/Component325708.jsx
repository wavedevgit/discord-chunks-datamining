/** Chunk was on 82124 **/
/** chunk id: 325708, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y,
  y: () => m
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
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
  m = ((r = {})[r.PostSidebar = 0] = "PostSidebar", r[r.ThreadSidebar = 1] = "ThreadSidebar", r[r.CallChatSidebar = 2] = "CallChatSidebar", r[r.MessageRequestSidebar = 3] = "MessageRequestSidebar", r[r.HomeSidebar = 4] = "HomeSidebar", r[r.ParticipantsSidebar = 5] = "ParticipantsSidebar", r);

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
    className: g.resizeHandle
  })
}

function y(e) {
  let {
    sidebarType: t,
    maxWidth: n,
    onWidthChange: r,
    children: a,
    floatingLayer: p
  } = e, m = l.useRef(null), y = function(e) {
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
  }(t), [v, O] = l.useState(f.ZP[y]), j = l.useCallback(e => {
    d.ZP.updatedUnsyncedSettings({
      [y]: e
    })
  }, [y]), x = 5 === t ? h.at : h.Co, C = (0, h.WL)({
    maxWidth: n,
    minWidth: x
  }), E = (0, u.dQu)(c.Z.modules.chat.RESIZE_HANDLE_WIDTH), S = (0, s.clamp)(v, x, n), _ = C ? S : S + E;
  l.useEffect(() => {
    null == r || r(S, C)
  }, [S, r, C]);
  let I = null != p ? p : l.Fragment;
  return (0, i.jsxs)(i.Fragment, {
    children: [!C && (0, i.jsx)("div", {
      style: {
        minWidth: _
      }
    }), (0, i.jsx)(I, {
      children: (0, i.jsxs)("div", {
        className: o()(g.chatLayerWrapper, {
          [g.hidden]: false
        }),
        children: [(0, i.jsx)("div", {
          className: o()(g.chatTarget, {
            [g.floating]: C,
            [g.notFloating]: !C
          }),
          style: {
            width: _
          }
        }), !C && (0, i.jsx)(b, {
          minWidth: x,
          maxWidth: n,
          resizableNode: m,
          onResize: O,
          onResizeEnd: j
        }), (0, i.jsx)("div", {
          ref: m,
          className: o()(g.container, {
            [g.floating]: C
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