/** Chunk was on 61195 **/
n.d(t, {
  U: () => h
});
var i = n(200651),
  o = n(192379),
  r = n(399606),
  a = n(481060),
  l = n(592125),
  c = n(922482),
  s = n(750154),
  u = n(427679),
  d = n(388032);

function _(e) {
  var t, n;
  let {
    activity: _
  } = e, {
    channelId: h
  } = null !== (t = (0, s.rq)(_)) && void 0 !== t ? t : {}, f = (0, r.e7)([u.Z], () => u.Z.getStageInstanceByChannel(h), [h]), p = o.useRef(null), g = o.useCallback(() => {
    let e = l.Z.getChannel(h);
    null != e && c.Cq(e)
  }, [h]), v = null !== (n = null == f ? void 0 : f.topic) && void 0 !== n ? n : _.name, b = d.NW.formatToPlainString(d.t["T+DNAA"], {
    channel: v
  });
  return (0, i.jsx)("div", {
    ref: p,
    children: (0, i.jsx)(a.P3F, {
      onClick: g,
      focusProps: {
        ringTarget: p
      },
      children: (0, i.jsx)(a.X6q, {
        variant: "heading-sm/semibold",
        children: b
      })
    })
  })
}
class h {
  shouldShow(e) {
    return (0, s.JE)(e)
  }
  createHeader(e) {
    return {
      subtitle: d.NW.string(d.t["+AJFJy"]),
      icon: null
    }
  }
  constructor() {
    var e;
    (e = "body") in this ? Object.defineProperty(this, e, {
      value: _,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : this[e] = _
  }
}