/** Chunk was on 22988 **/
/** chunk id: 54842, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => w
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk142497 = require("./142497.js"),
  Chunk338327 = require("./338327.js"),
  Chunk496675 = require("./496675.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk190378 = require("./190378.js"),
  Chunk388032 = require("./388032.js"),
  Chunk239721 = require("./239721.js"),
  Chunk438825 = require("./438825.js"),
  Chunk236140 = require("./236140.js"),
  Chunk37069 = require("./37069.js"),
  Chunk518513 = require("./518513.js"),
  Chunk40271 = require("./40271.js"),
  Chunk348986 = require("./348986.js"),
  Chunk930065 = require("./930065.js"),
  Chunk345669 = require("./345669.js");

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let E = () => [{
    icon: Chunk481060.IeX,
    color: Chunk692547.Z.unsafe_rawColors.GREEN_360.css,
    header: Chunk388032.intl.string(Chunk388032.t.oVQF29),
    body: Chunk388032.intl.format(Chunk388032.t.A6G7am, {
      featureHook: (e, t) => <strong className={b.featuredText}>{e}</strong>
    })
  }, {
    icon: Chunk481060.IeX,
    color: Chunk692547.Z.unsafe_rawColors.PARTNER.css,
    header: Chunk388032.intl.string(Chunk388032.t["0rJl9/"]),
    body: Chunk388032.intl.format(Chunk388032.t.XsCNk5, {
      infoHook: () => <Chunk481060.ua7 text={Chunk388032.intl.string(Chunk388032.t.kPJlTk)} aria-label={Chunk388032.intl.string(Chunk388032.t.kPJlTk)}>{e => (0, r.jsx)(c.d3s, I({
          size: "xs",
          color: "currentColor",
          className: b.infoIcon
        }, e))}</Chunk481060.ua7>,
      featureHook: (e, t) => <strong className={b.featuredText}>{e}</strong>
    })
  }, {
    icon: Chunk481060.d3s,
    color: Chunk692547.Z.unsafe_rawColors.RED_360.css,
    header: Chunk388032.intl.string(Chunk388032.t.W2kLJC),
    body: Chunk388032.intl.string(Chunk388032.t.hyNkHx)
  }],
  S = [{
    iconSrc: Chunk348986,
    name: "Pokemon GO Paris",
    position: [false, false]
  }, {
    iconSrc: Chunk930065,
    name: "Python",
    position: [false, false],
    faded: true,
    rightAlign: true
  }, {
    iconSrc: Chunk518513,
    name: "Learn Latin",
    position: [false, false],
    faded: true
  }, {
    iconSrc: Chunk40271,
    name: "r/leagueoflegends",
    position: [false, false],
    rightAlign: true
  }, {
    iconSrc: Chunk345669,
    name: "Sneaker Fans",
    position: [false, 40]
  }, {
    iconSrc: Chunk37069,
    name: "Hogwarts School",
    position: [false, 40],
    faded: true,
    rightAlign: true
  }],
  T = e => {
    let {
      icon: t,
      color: n,
      size: i = 24,
      header: l,
      body: a
    } = e;
    return <div className={b.featureCard}>{<div className={b.featureIcon}><t color={null != n ? n : "currentColor"} width={i} height={i} size={"custom"} /></div>}{<c.X6q variant={"heading-md/semibold"} className={b.featureHeader}>{l}</c.X6q>}{<c.Text color={"header-secondary"} variant={"text-sm/normal"}>{a}</c.Text>}</div>
  },
  P = e => {
    let {
      iconSrc: t,
      name: n,
      position: i,
      faded: l,
      rightAlign: s,
      imageCoordinates: o
    } = e, d = {
      [s ? "right" : "left"]: o[0] + i[0],
      top: o[1] + i[1]
    };
    return <div className={a()(b.guildDetails, {
        [b.faded]: l
      })} style={d}>{<div className={b.guildIcon}><img alt={""} src={t} width={24} height={24} /></div>}{<c.X6q variant={"heading-deprecated-12/semibold"}>{n}</c.X6q>}</div>
  },
  w = e => {
    let {
      guild: t
    } = e, [n, l] = i.useState(0), [a, o] = i.useState(0), [v, _] = i.useState(), O = (0, s.e7)([m.Z], () => m.Z.can(p.Plq.ADMINISTRATOR, t)), y = null == v ? true : v.offsetWidth, C = null == v ? true : v.offsetHeight;
    i.useEffect(() => {
      null != y && l(y / 2), null != C && o(C / 2)
    }, [y, C, l, o]), i.useEffect(() => {
      (0, d.Kw)(h.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL)
    }, []);
    let N = () => {
      u.Z.open()
    };
    return <div className={b.container}>{<div className={b.banner} ref={e => _(e)}>{S.map(e => {
          var t, i;
          return <P{...t = I({}, e), i = i = {
            imageCoordinates: [n, a]
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
          }), t} />
        })}{<img alt={""} src={x} className={b.image} width={256} />}{<img alt={""} src={j} className={b.sparkles} />}</div>}{<c.X6q variant={"heading-xl/semibold"}>{f.intl.string(f.t["M/gBcH"])}</c.X6q>}{<c.Text color={"header-secondary"} variant={"text-md/normal"} className={b.body}>{f.intl.format(f.t["52EgsL"], {
          helpdeskArticle: g.Z.getArticleURL(p.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
        })}</c.Text>}{<c.ua7 text={O ? null : f.intl.string(f.t["pjG+T0"])} aria-label={O ? true : f.intl.string(f.t["pjG+T0"])}>{e => (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: b.button,
          children: (0, r.jsx)(c.zxk, I({
            variant: "primary",
            text: f.intl.string(f.t.LhlgY2),
            onClick: N,
            disabled: !O
          }, e))
        })}</c.ua7>}{<hr className={b.separator} />}{<c.Text color={"header-secondary"} variant={"text-sm/normal"}>{f.intl.string(f.t.OzLWLC)}</c.Text>}{<c.Text color={"header-secondary"} className={b.body} variant={"text-sm/normal"}>{f.intl.format(f.t.rjhrqK, {
          helpdeskArticle: g.Z.getArticleURL(p.BhN.GUILD_COMMUNITY_FEATURE)
        })}</c.Text>}{<div className={b.features}>{E().map((e, t) => (0, r.jsx)(T, I({}, e), t))}</div>}</div>
  }