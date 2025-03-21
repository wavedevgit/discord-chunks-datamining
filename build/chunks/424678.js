/** Chunk was on 98977 **/
n.d(e, {
  Z: () => u
}), n(47120), n(301563);
var r = n(200651),
  s = n(192379),
  i = n(481060);

function l(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t
}
class a extends s.PureComponent {
  render() {
    let {
      text: t,
      lastItem: e,
      className: n
    } = this.props;
    return (0, r.jsxs)("span", {
      children: [(0, r.jsx)(i.eee, {
        className: n,
        onClick: this.handleClick,
        children: t
      }), e ? "" : ", "]
    })
  }
  constructor(...t) {
    super(...t), l(this, "handleClick", () => {
      let {
        onClick: t,
        index: e
      } = this.props;
      null == t || t(e)
    })
  }
}
class u extends s.PureComponent {
  render() {
    let t = this.props.artists.split(";");
    if (!this.props.canOpen) return t.join(", ");
    let e = t.length - 1;
    return t.map((t, n) => (0, r.jsx)(a, {
      text: t,
      index: n,
      lastItem: n === e,
      onClick: this.handleOpenSpotifyArtist,
      className: this.props.linkClassName
    }, "spotify-artist-".concat(n)))
  }
  constructor(...t) {
    super(...t), l(this, "handleOpenSpotifyArtist", t => {
      let {
        onOpenSpotifyArtist: e
      } = this.props;
      null == e || e(t)
    })
  }
}