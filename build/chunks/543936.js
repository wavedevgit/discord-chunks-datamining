/** Chunk was on 82081 **/
r.d(t, {
  x: () => o
}), r(388685);
var n = r(73800),
  a = r(960048);
class o extends n.PureComponent {
  componentDidCatch(e, t) {
    a.Z.captureException(e, {
      tags: {
        app_context: "virtual_currency",
        source: this.props.errorSource
      },
      extra: {
        info: t
      }
    }), this.setState({
      error: e,
      info: t
    })
  }
  render() {
    return null != this.state.error ? null != this.props.renderCustomErrorComponent ? this.props.renderCustomErrorComponent() : null : this.props.children
  }
  constructor(...e) {
    var t, r;
    super(...e), r = {
      error: null,
      info: null
    }, (t = "state") in this ? Object.defineProperty(this, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : this[t] = r
  }
}