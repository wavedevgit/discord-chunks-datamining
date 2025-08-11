/** Chunk was on 58227 **/
/** chunk id: 707076, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => v,
  j: () => _
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk548473 = require("./548473.jsx"),
  Chunk721012 = require("./721012.js"),
  Chunk869764 = require("./869764.js"),
  Chunk150512 = require("./150512.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk999382 = require("./999382.js"),
  Chunk983135 = require("./983135.js"),
  Chunk84658 = require("./84658.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk568614 = require("./568614.js");
let O = () => [{
    emoji: "\uD83E\uDDD9",
    emojiDescription: Chunk388032.intl.string(Chunk388032.t.Jh9uiY),
    title: Chunk388032.intl.string(Chunk388032.t.ATF45u),
    selected: true
  }, {
    emoji: "\uD83C\uDFA4",
    emojiDescription: Chunk388032.intl.string(Chunk388032.t["nGt+MT"]),
    title: Chunk388032.intl.string(Chunk388032.t["30uo7O"]),
    selected: false
  }, {
    emoji: "\uD83D\uDC40",
    emojiDescription: Chunk388032.intl.string(Chunk388032.t.hOMH5u),
    title: Chunk388032.intl.string(Chunk388032.t["5Z5sgo"]),
    selected: false
  }],
  x = () => [{
    channelIcon: () => <Chunk481060.MqZ size={"xs"} color={"currentColor"} className={Chunk568614.channelIcon} />,
    channel: Chunk388032.intl.string(Chunk388032.t.MXJozM),
    selected: true
  }, {
    channelIcon: () => <Chunk481060.VL1 size={"md"} color={"currentColor"} className={Chunk568614.channelIcon} />,
    channel: Chunk388032.intl.string(Chunk388032.t.Pkj0f3),
    selected: true
  }, {
    channelIcon: () => <Chunk481060.VL1 size={"md"} color={"currentColor"} className={Chunk568614.channelIcon} />,
    channel: Chunk388032.intl.string(Chunk388032.t["imVD+v"]),
    selected: false
  }, {
    channelIcon: () => <Chunk481060.Mmi size={"md"} color={"currentColor"} className={Chunk568614.channelIcon} />,
    channel: Chunk388032.intl.string(Chunk388032.t["Pj/Wpq"]),
    selected: true
  }];

function _(e) {
  let {
    isTooltip: t = false
  } = e, n = O();
  t && n.pop();
  let i = t ? <a.Text variant={"text-sm/semibold"} color={"header-primary"}>{E.intl.string(E.t.nTI2mZ)}</a.Text> : <a.X6q variant={"heading-md/semibold"}>{E.intl.string(E.t.g1OQtr)}</a.X6q>,
    s = t ? <a.Text variant={"text-xxs/normal"}>{E.intl.format(E.t.hGwDPT, {})}</a.Text> : <a.Text variant={"text-xs/normal"}>{E.intl.format(E.t["8XLD3t"], {})}</a.Text>;
  return <div className={r()(T.upsellPreview, T.spacingLarge, {
      [T.tooltip]: t
    })}>{i}{<div className={T.spacingSmall}>{n.map((e, t) => {
        let {
          emoji: n,
          emojiDescription: i,
          title: s,
          selected: o
        } = e;
        return (0, l.jsxs)("div", {
          className: r()(T.previewListItem, {
            [T.selected]: o
          }),
          children: [(0, l.jsx)("span", {
            role: "img",
            "aria-label": i,
            children: n
          }), (0, l.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: "header-primary",
            children: s
          }), o && (0, l.jsx)("div", {
            className: T.checkboxCircle,
            children: (0, l.jsx)(a.dz2, {
              size: "md",
              color: "currentColor",
              className: T.checkmark
            })
          })]
        }, t)
      })}</div>}{s}</div>
}

function j() {
  let e = [{
    message: Chunk388032.t.FUUXXl,
    profilePic: "https://cdn.discordapp.com/avatars/302407541994946561/bb3fd59e6c2ea0a86a2bdabf5dff7856.webp?size=80",
    adminTitle: Chunk388032.intl.string(Chunk388032.t.RZVpur)
  }, {
    message: Chunk388032.t.JAXvDQ,
    profilePic: "https://cdn.discordapp.com/avatars/433499434098229249/b6d433308debef625537e33df04023e5.webp?size=80",
    adminTitle: Chunk388032.intl.string(Chunk388032.t.xyrlg4)
  }, {
    message: Chunk388032.t.Wj9Djo,
    profilePic: "https://cdn.discordapp.com/avatars/555460020494663691/599bfcdb0b0700b415f4c695890f272c.webp?size=80",
    adminTitle: Chunk388032.intl.string(Chunk388032.t["o/LQMj"])
  }, {
    message: Chunk388032.t.ALsMNT,
    profilePic: "https://cdn.discordapp.com/guilds/936317138904440892/users/125526751064489984/avatars/f35679626acac9943e102533fc170d41.webp?size=80",
    adminTitle: Chunk388032.intl.string(Chunk388032.t["uvM+xc"])
  }];
  return <Chunk721012.i testimonials={module} />
}

function v() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getGuildId()),
    t = (0, Chunk442837.e7)([Chunk430824.Z], () => Chunk430824.Z.getGuild(module)),
    n = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser());
  return null == module || null == exports || null == require ? null : <div className={Chunk568614.upsellContainer}>{<div className={Chunk568614.upsellHeader}>{<div className={Chunk568614.islands}>{<Chunk548473.xm />}{<Chunk548473._I guild={exports} mainIslandClassName={Chunk568614.mainIsland} balloonDogClassName={Chunk568614.balloonDog} />}{<Chunk548473.B0 />}</div>}{<div className={Chunk568614.upsellHeaderText}>{<Chunk481060.X6q variant={"heading-xl/semibold"}>{Chunk388032.intl.string(Chunk388032.t.GnKOAw)}</Chunk481060.X6q>}{<Chunk481060.Text variant={"text-md/normal"}>{Chunk388032.intl.string(Chunk388032.t.SJRFJi)}</Chunk481060.Text>}</div>}{<div className={Chunk568614.upsellButtons}><Chunk481060.zxk variant={"primary"} text={Chunk388032.intl.string(Chunk388032.t.RzWDqa)} onClick={function() {
            if (null != module) {
              var t, n;
              Chunk626135.default.track(Chunk981631.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                  "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                  }))), l.forEach(function(t) {
                    var l;
                    l = n[t], t in e ? Object.defineProperty(e, t, {
                      value: l,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = l
                  })
                }
                return e
              }({}, (0, Chunk367907.hH)(module)), n = n = {
                step: Chunk84658.PG[Chunk84658.PG.LANDING],
                back: false,
                skip: false
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(exports, Object.getOwnPropertyDescriptors(require)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var l = Object.getOwnPropertySymbols(e);
                  n.push.apply(n, l)
                }
                return n
              })(Object(require)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
              }), exports)), (0, Chunk983135.IG)(module, Chunk84658.PG.LANDING)
            }
          }} disabled={false} /></div>}</div>}{<Chunk481060.$i$ />}{<j />}{<Chunk481060.$i$ />}{<div className={Chunk568614.valuesContainer}>{<div className={Chunk568614.valueContainer}>{<_ />}{<div className={Chunk568614.valueText}>{<Chunk481060.X6q variant={"heading-md/semibold"}>{Chunk388032.intl.string(Chunk388032.t.Z7kqKS)}</Chunk481060.X6q>}{<Chunk481060.Text variant={"text-sm/normal"}>{Chunk388032.intl.string(Chunk388032.t.di3UCw)}</Chunk481060.Text>}</div>}</div>}{<div className={Chunk568614.valueContainer}>{<div className={Chunk568614.valueText}>{<Chunk481060.X6q variant={"heading-md/semibold"}>{Chunk388032.intl.string(Chunk388032.t.O4jYEh)}</Chunk481060.X6q>}{<Chunk481060.Text variant={"text-sm/normal"}>{Chunk388032.intl.string(Chunk388032.t["l/l/Gx"])}</Chunk481060.Text>}</div>}{<div className={r()(Chunk568614.upsellPreview, Chunk568614.spacingLarge)}>{<Chunk150512.Z guildId={module} welcomeMessage={{
              authorIds: [require.id],
              message: Chunk388032.intl.string(Chunk388032.t.hIWAfn)
            }} />}{<Chunk869764.k title={Chunk388032.intl.string(Chunk388032.t["47zu7O"])} subtitle={Chunk388032.intl.string(Chunk388032.t.amoSNz)} completed={true} Icon={Chunk481060.VL1} variant={"static"} />}{<Chunk869764.k title={Chunk388032.intl.string(Chunk388032.t.EZfTKC)} subtitle={Chunk388032.intl.string(Chunk388032.t["/sYelZ"])} completed={true} Icon={Chunk481060.VL1} variant={"static"} />}</div>}</div>}{<div className={Chunk568614.valueContainer}>{<div className={r()(Chunk568614.upsellPreview, Chunk568614.spacingLarge)}>{x().map((e, t) => {
            let {
              channelIcon: n,
              channel: i,
              selected: s
            } = e;
            return (0, l.jsxs)("div", {
              className: r()(T.previewListItem, T.spaceBetween, {
                [T.selected]: s
              }),
              children: [(0, l.jsxs)("div", {
                className: T.channel,
                children: [n(), (0, l.jsx)(a.Text, {
                  variant: "text-md/medium",
                  color: "header-primary",
                  children: i
                })]
              }), (0, l.jsx)("div", {
                className: r()(T.checkbox, {
                  [T.selected]: s
                }),
                children: s && (0, l.jsx)(a.dz2, {
                  size: "md",
                  color: "currentColor",
                  className: T.checkmark
                })
              })]
            }, t)
          })}</div>}{<div className={Chunk568614.valueText}>{<Chunk481060.X6q variant={"heading-md/semibold"}>{Chunk388032.intl.string(Chunk388032.t["3T9aHB"])}</Chunk481060.X6q>}{<Chunk481060.Text variant={"text-sm/normal"}>{Chunk388032.intl.string(Chunk388032.t.dA7Cam)}</Chunk481060.Text>}</div>}</div>}</div>}</div>
}