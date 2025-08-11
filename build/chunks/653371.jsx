/** Chunk was on 87626 **/
/** chunk id: 653371, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  a: () => O
}), require("./388685.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk771950 = require("./771950.js"),
  Chunk860911 = require("./860911.js"),
  Chunk66037 = require("./66037.jsx"),
  Chunk787907 = require("./787907.js"),
  Chunk643103 = require("./643103.jsx"),
  Chunk34211 = require("./34211.jsx"),
  Chunk231338 = require("./231338.js"),
  Chunk436620 = require("./436620.js"),
  Chunk431138 = require("./431138.js"),
  Chunk330711 = require("./330711.js"),
  Chunk306222 = require("./306222.js");

function k(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = a, e
}
let g = Chunk231338.j_.MAIN_NAVIGATION_MENU,
  A = () => [{
    route: (0, Chunk771950.L)(Chunk231338.RK.TWITTER),
    linkClicked: "twitter",
    alt: "Discord's Twitter",
    img: Chunk431138.r.ASSET_SOCIAL_TWITTER
  }, {
    route: Chunk231338.fK.FACEBOOK_URL,
    linkClicked: "facebook",
    alt: "Discord's Facebook",
    img: Chunk431138.r.ASSET_SOCIAL_FACEBOOK
  }, {
    route: Chunk231338.fK.INSTAGRAM_URL,
    linkClicked: "instagram",
    alt: "Discord's Instagram",
    img: Chunk431138.r.ASSET_SOCIAL_INSTAGRAM
  }];
class O extends Chunk73800.PureComponent {
  componentDidMount() {
    this.setState({
      isAppCompatible: Chunk436620.KO
    })
  }
  render() {
    let {
      className: e,
      mainContentId: t,
      skipToContentLabel: a,
      onChangeLocale: r,
      TrackClick: s,
      avoidRouter: i
    } = this.props;
    return <header className={l()(Chunk306222.header, module)}>{<nav className={Chunk306222.headerInner}>{<div className={Chunk306222.headerLogo}>{<Chunk120356 tag={"div"} eventName={g} data={{
              linkClicked: "logo"
            }}><Chunk66037.Z avoidRouter={Chunk771950} to={Chunk231338.am.INDEX} from={Chunk231338.j_.MAIN_NAVIGATION_MENU}><Chunk787907.O /></Chunk66037.Z></Chunk120356>}{null != exports ? <a className={Chunk306222.skipToContent} href={"#".concat(exports)}>{require}</a> : null}</div>}{<ul className={Chunk306222.headerNav}><Chunk34211.o avoidRouter={Chunk771950} TrackClick={Chunk120356} styles={Chunk306222} /></ul>}{<ul className={Chunk306222.headerNavRight}>{this.renderSocialMediaNav()}{<Chunk643103.p onChange={Chunk73800} />}</ul>}</nav>}{null != exports && <div id={exports} tabIndex={false} />}</header>
  }
  constructor(...e) {
    super(...e), k(this, "state", {
      isAppCompatible: true
    }), k(this, "getAppButton", () => {
      let {
        token: e,
        TrackClick: t,
        authRedirectTo: a
      } = this.props, {
        isAppCompatible: r
      } = this.state, s = (0, o.Ui)(a), l = h.Z.Messages.NAVIGATION_LOGIN;
      return null != e && (s = N.$w.ME, l = h.Z.Messages.NAVIGATION_OPEN), r ? <li className={I.listItemInactive}><t eventName={g} className={I.appButton} data={{
            linkClicked: e ? "open" : "login",
            googleAnalytics: true
          }} href={s}>{l}</t></li> : null
    }), k(this, "renderSocialMediaNav", () => {
      let {
        TrackClick: e
      } = this.props, t = A().map(t => <li className={l()(I.listItemInactive, I.listItemSocialMedia)}><e eventName={g} className={I.rightNavLink} data={{
            linkClicked: t.linkClicked
          }} href={t.route} rel={"me"} target={"_blank"}><img src={t.img} alt={t.alt} /></e></li>), a = this.getAppButton();
      return null != a && t.push(a), t
    })
  }
}