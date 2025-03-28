/** Chunk was on 20447 **/
n.d(t, {
  Z: () => c
});
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  o = n(981631),
  l = n(393858);
class c extends i.Component {
  render() {
    let {
      className: e,
      videoID: t,
      videoClassName: n
    } = this.props;
    return (0, r.jsx)("div", {
      className: a()(e, l.videoWrapper),
      children: (0, r.jsx)("iframe", {
        className: a()(n, l.video),
        src: "https://www.youtube.com/embed/".concat(t, "?rel=0&showinfo=0&controls=1&origin=https://").concat(o.$R1),
        allowFullScreen: !0,
        sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      })
    })
  }
}