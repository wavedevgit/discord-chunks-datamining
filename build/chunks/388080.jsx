/** Chunk was on 44808 **/
/** chunk id: 388080, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk446411 = require("./446411.js"),
  Chunk468846 = require("./468846.js"),
  Chunk600164 = require("./600164.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk299379 = require("./299379.js"),
  Chunk454585 = require("./454585.js"),
  Chunk524444 = require("./524444.js"),
  Chunk55406 = require("./55406.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk875231 = require("./875231.js"),
  Chunk321250 = require("./321250.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let k = Chunk454585.Z.reactParserFor(Chunk55406.default.getDefaultRules(Chunk875231)),
  S = {};
class E extends Chunk73800.PureComponent {
  track(e, t, n) {
    this.props.track(e, t, n)
  }
  renderFooter() {
    return <div className={Chunk875231.footer}>{<Chunk481060.eee aria-label={Chunk388032.intl.string(Chunk388032.t["/84uiI"])} className={Chunk875231.socialLink} href={(0, Chunk299379.Z)(Chunk981631.RK.TWITTER)} target={"blank"}><Chunk481060.TAi size={"xs"} color={"currentColor"} /></Chunk481060.eee>}{<Chunk481060.eee aria-label={Chunk388032.intl.string(Chunk388032.t["h0or/v"])} className={Chunk875231.socialLink} href={Chunk981631.fK7.FACEBOOK_URL} target={"blank"}><Chunk481060.tdR size={"xs"} color={"currentColor"} /></Chunk481060.eee>}{<Chunk481060.eee aria-label={Chunk388032.intl.string(Chunk388032.t["5uVPyc"])} className={Chunk875231.socialLink} href={Chunk981631.fK7.INSTAGRAM_URL} target={"blank"}><Chunk481060.gST size={"xs"} color={"currentColor"} /></Chunk481060.eee>}{<Chunk481060.Text variant={"text-xs/normal"}>{Chunk388032.intl.string(Chunk388032.t.EjVVIy)}</Chunk481060.Text>}</div>
  }
  renderVideo() {
    let {
      changeLog: e
    } = this.props, t = module.youtube_video_id, l = module.video, o = module.image;
    if (null != exports && "" !== exports) return <Chunk446411.BC className={Chunk875231.video} allowFullScreen={false} href={"https://youtu.be/".concat(exports)} thumbnail={{
        url: "https://i.ytimg.com/vi/".concat(exports, "/hqdefault.jpg"),
        width: 451,
        height: 254
      }} video={{
        url: "https://www.youtube.com/embed/".concat(exports, "?vq=large&rel=0&controls=0&showinfo=0"),
        width: 451,
        height: 254
      }} provider={Chunk468846.pn.YOUTUBE} maxWidth={451} maxHeight={254} renderVideoComponent={Chunk524444.lV} renderImageComponent={Chunk524444.Yi} renderLinkComponent={Chunk524444.iT} onPlay={() => {
        this.track(Chunk981631.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, true)
      }} />;
    if (null != Chunk73800 && "" !== Chunk73800) {
      let e = Chunk73800.startsWith("https://") ? Chunk73800 : require("./595173.js")("./".concat(Chunk73800));
      return <Chunk70097.Z src={module} poster={Chunk120356} width={451} height={254} loop={true} muted={true} autoPlay={true} className={Chunk875231.video} onPlay={() => {
          this.track(Chunk981631.rMx.CHANGE_LOG_VIDEO_INTERACTED, {}, true)
        }} />
    }
    if (null == Chunk120356 || "" === Chunk120356) return null;
    {
      let e = Chunk120356.startsWith("https://") ? Chunk120356 : require("./595173.js")("./".concat(Chunk120356));
      return <img className={Chunk875231.image} alt={""} src={module} width={451} height={254} />
    }
  }
  render() {
    let {
      changeLog: e
    } = this.props;
    return <Chunk481060.Y0X transitionState={Chunk481060.Dvm.ENTERED} className={Chunk321250.modal} parentComponent={"ChangelogStandardTemplate"}>{<Chunk481060.xBx align={Chunk600164.Z.Justify.BETWEEN} separator={false}>{this.renderHeader()}{<Chunk600164.Z.Child grow={0}><Chunk481060.olH onClick={this.props.onClose} /></Chunk600164.Z.Child>}</Chunk481060.xBx>}{<Chunk481060.hzk className={a()(Chunk321250.content, Chunk875231.container, {})} scrollerRef={this.scrollerRef} onScroll={this.handleScroll}><div tabIndex={0} role={"region"} aria-label={Chunk388032.intl.string(Chunk388032.t.HzBchI)}>{this.renderVideo()}{k(module.body, false, {
            changeLog: this,
            interpolations: S,
            onLinkClick: this.trackLinkClick
          })}</div></Chunk481060.hzk>}{<Chunk481060.mzw direction={Chunk600164.Z.Direction.HORIZONTAL}>{this.renderFooter()}</Chunk481060.mzw>}</Chunk481060.Y0X>
  }
  constructor(...e) {
    super(...e), y(this, "scrollerRef", l.createRef()), y(this, "handleScroll", () => {
      let {
        current: e
      } = this.scrollerRef;
      if (null != e) {
        var t, n;
        null == (t = (n = this.props).onScroll) || t.call(n, e)
      }
    }), y(this, "trackLinkClick", e => {
      this.props.track(j.rMx.CHANGE_LOG_CTA_CLICKED, {
        cta_type: "inline_link",
        target: e
      }, false)
    }), y(this, "renderHeader", () => {
      let {
        changeLog: e
      } = this.props;
      return <u.Z.Child grow={1} shrink={1}>{<c.X6q variant={"heading-lg/semibold"}>{C.intl.string(C.t.LRmNAg)}</c.X6q>}{<c.Text variant={"text-xs/normal"} className={b.date}>{C.intl.format(C.t.Fb8xx8, {
            date: null != e.date && "" !== e.date ? s()(e.date).toDate() : new Date
          })}</c.Text>}</u.Z.Child>
    })
  }
}
let _ = E