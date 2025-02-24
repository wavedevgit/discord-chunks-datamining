/** Chunk was on 71611 (6f02c158d7813e32.js) **/
n.d(t, {
  Z: () => _,
  y: () => g
}), n(47120);
var r, i = n(200651),
  l = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(392711),
  c = n(692547),
  u = n(481060),
  d = n(153867),
  p = n(347469),
  h = n(740492),
  f = n(36645),
  m = n(281797),
  g = ((r = {})[r.PostSidebar = 0] = "PostSidebar", r[r.ThreadSidebar = 1] = "ThreadSidebar", r[r.CallChatSidebar = 2] = "CallChatSidebar", r[r.MessageRequestSidebar = 3] = "MessageRequestSidebar", r[r.HomeSidebar = 4] = "HomeSidebar", r[r.ParticipantsSidebar = 5] = "ParticipantsSidebar", r);

function b(e) {
  let {
    resizableNode: t,
    onResize: n,
    onResizeEnd: r,
    maxWidth: l,
    minWidth: o
  } = e, a = (0, p.Z)({
    minDimension: o,
    maxDimension: l,
    resizableDomNodeRef: t,
    onElementResize: n,
    onElementResizeEnd: r,
    orientation: p.y.HORIZONTAL_LEFT,
    throttleDuration: 16
  });
  return (0, i.jsx)("div", {
    onMouseDown: a,
    className: m.resizeHandle
  })
}

function _(e) {
  let {
    sidebarType: t,
    maxWidth: n,
    onWidthChange: r,
    children: o,
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
  }(t), [C, v] = l.useState(h.ZP[_]), y = l.useCallback(e => {
    d.ZP.updatedUnsyncedSettings({
      [_]: e
    })
  }, [_]), x = 5 === t ? f.at : f.Co, j = (0, f.WL)({
    maxWidth: n,
    minWidth: x
  }), O = (0, u.dQu)(c.Z.modules.chat.RESIZE_HANDLE_WIDTH), N = (0, s.clamp)(C, x, n), E = j ? N : N + O;
  l.useEffect(() => {
    null == r || r(N, j)
  }, [N, r, j]);
  let P = null != p ? p : l.Fragment;
  return (0, i.jsxs)(i.Fragment, {
    children: [!j && (0, i.jsx)("div", {
      style: {
        minWidth: E
      }
    }), (0, i.jsx)(P, {
      children: (0, i.jsxs)("div", {
        className: m.chatLayerWrapper,
        children: [(0, i.jsx)("div", {
          className: a()(m.chatTarget, {
            [m.floating]: j,
            [m.notFloating]: !j
          }),
          style: {
            width: E
          }
        }), !j && (0, i.jsx)(b, {
          minWidth: x,
          maxWidth: n,
          resizableNode: g,
          onResize: v,
          onResizeEnd: y
        }), (0, i.jsx)("div", {
          ref: g,
          className: a()(m.container, {
            [m.floating]: j
          }),
          style: {
            width: N
          },
          children: o
        })]
      })
    })]
  })
}