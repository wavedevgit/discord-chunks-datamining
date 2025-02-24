/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
n.d(t, {
  Z: () => S
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(990547),
  a = n(442837),
  s = n(481060),
  l = n(239091),
  c = n(40851),
  u = n(213609),
  d = n(314910),
  f = n(210887),
  p = n(574254),
  _ = n(585483),
  h = n(981631);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
    })
  }
  return e
}

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function v(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function b() {
  window.getSelection().removeAllRanges()
}
let y = e => {
  let {
    children: t,
    close: n,
    onUnmount: a,
    target: l,
    rect: f,
    position: p,
    align: _,
    impressionName: m,
    impressionProperties: g,
    disableClickTrap: E = !1
  } = e, v = i.useRef(null), y = i.useMemo(() => ({
    current: l
  }), [l]), O = i.useRef(n);
  i.useEffect(() => {
    O.current = n
  }), i.useEffect(() => {
    var e, t, n;
    let r = null === (e = v.current) || void 0 === e ? void 0 : e.elementRef.current;
    if (null == r) return;
    let i = e => {
      var t;
      let n = e.target,
        r = null === (t = v.current) || void 0 === t ? void 0 : t.elementRef.current;
      !(null != r && (0, s.ty$)(r, n)) && (b(), O.current())
    };
    return null === (t = r.ownerDocument) || void 0 === t || t.addEventListener("click", i, !0), null === (n = r.ownerDocument) || void 0 === n || n.addEventListener("contextmenu", i, !0), () => {
      var e, t;
      null === (e = r.ownerDocument) || void 0 === e || e.removeEventListener("click", i, !0), null === (t = r.ownerDocument) || void 0 === t || t.removeEventListener("contextmenu", i, !0)
    }
  }, []);
  let S = i.useRef(a);
  i.useEffect(() => {
    S.current = a
  }), i.useEffect(() => () => {
    var e;
    return null === (e = S.current) || void 0 === e ? void 0 : e.call(S)
  }, []), i.useLayoutEffect(() => {
    var e;
    null === (e = v.current) || void 0 === e || e.updatePosition()
  }), (0, u.Z)({
    type: o.ImpressionTypes.MENU,
    name: m,
    properties: g
  });
  let I = (0, c.Aq)(),
    T = i.useCallback(() => {
      I.dispatch(h.CkL.POPOUT_SHOW)
    }, [I]),
    N = i.useCallback(() => {
      I.dispatch(h.CkL.POPOUT_HIDE)
    }, [I]);
  return (0, r.jsx)(d.W5, {
    onMount: T,
    onUnmount: N,
    targetRef: y,
    overrideTargetRect: f,
    position: null != p ? p : "right",
    align: null != _ ? _ : "top",
    autoInvert: !0,
    ref: v,
    nudgeAlignIntoViewport: !0,
    clickTrap: !E,
    children: t
  })
};
class O extends i.PureComponent {
  componentDidMount() {
    let {
      renderLazy: e,
      renderWindow: t
    } = this.props;
    if (t.addEventListener("resize", this.closeResize, !0), _.S.subscribe(h.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != e) {
      let t = setTimeout(() => {
        this.setState({
          render: () => (0, r.jsx)(s.TlX, {})
        })
      }, 300);
      e().then(e => {
        this.setState({
          render: e
        }), clearTimeout(t)
      })
    }
  }
  componentDidUpdate(e) {
    let {
      isOpen: t
    } = this.props;
    if (!t && e.isOpen) {
      var n, r;
      null === (r = e.config) || void 0 === r || null === (n = r.onClose) || void 0 === n || n.call(r)
    }
  }
  componentWillUnmount() {
    let {
      renderWindow: e
    } = this.props;
    e.removeEventListener("resize", this.closeResize, !0), _.S.unsubscribe(h.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu)
  }
  render() {
    var e, t;
    let {
      appContext: n,
      target: i,
      isOpen: o,
      theme: a,
      config: s,
      rect: l
    } = this.props, c = null !== (e = this.state.render) && void 0 !== e ? e : this.props.render;
    return o && null != l && null != s && null != i && null != c && s.context === n ? (0, r.jsx)(y, {
      target: i,
      rect: l,
      close: this.close,
      onUnmount: s.onClose,
      align: s.align,
      position: s.position,
      impressionName: s.impressionName,
      impressionProperties: s.impressionProperties,
      disableClickTrap: null !== (t = s.disableClickTrap) && void 0 !== t && t,
      children: (e, t) => {
        let {
          position: r
        } = e;
        return c({
          position: r,
          theme: a,
          onHeightUpdate: t,
          config: s,
          target: i,
          context: n
        })
      }
    }) : null
  }
  constructor(...e) {
    super(...e), m(this, "state", {
      render: void 0
    }), m(this, "closeResize", e => {
      let {
        renderWindow: t
      } = this.props;
      e.target === t && this.close()
    }), m(this, "close", () => {
      let {
        isOpen: e,
        closeContextMenu: t
      } = this.props;
      e && t()
    })
  }
}

function S() {
  let {
    contextMenu: e,
    version: t,
    isOpen: n
  } = (0, a.cj)([p.Z], () => ({
    contextMenu: p.Z.getContextMenu(),
    version: p.Z.version,
    isOpen: p.Z.isOpen()
  })), o = (0, a.e7)([f.Z], () => f.Z.theme), {
    appContext: s,
    renderWindow: u
  } = i.useContext(c.ZP);
  return (0, r.jsx)(O, v(g({
    appContext: s,
    renderWindow: u
  }, e), {
    isOpen: n,
    theme: o,
    closeContextMenu: l.Zy
  }), t)
}