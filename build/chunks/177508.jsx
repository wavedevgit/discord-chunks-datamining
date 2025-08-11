/** Chunk was on 75708 **/
/** chunk id: 177508, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => er
}), require("./704826.js"), require("./35282.js"), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  Chunk971809 = require("./971809.js"),
  Chunk442837 = require("./442837.js"),
  Chunk836459 = require("./836459.js"),
  Chunk680018 = require("./680018.js"),
  Chunk374415 = require("./374415.js"),
  Chunk861066 = require("./861066.js"),
  Chunk780842 = require("./780842.js"),
  Chunk179538 = require("./179538.js"),
  Chunk279570 = require("./279570.js"),
  Chunk257465 = require("./257465.js"),
  Chunk667202 = require("./667202.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk369585 = require("./369585.js"),
  Chunk103866 = require("./103866.jsx"),
  Chunk213734 = require("./213734.js"),
  Chunk37148 = require("./37148.jsx"),
  Chunk907862 = require("./907862.js"),
  Chunk466590 = require("./466590.js"),
  Chunk481060 = require("./481060.js"),
  Chunk240872 = require("./240872.js"),
  Chunk514361 = require("./514361.js"),
  Chunk705262 = require("./705262.js"),
  Chunk377089 = require("./377089.js"),
  Chunk581612 = require("./581612.js"),
  Chunk580747 = require("./580747.js"),
  Chunk526156 = require("./526156.js"),
  Chunk799071 = require("./799071.js"),
  Chunk554042 = require("./554042.js"),
  Chunk706705 = require("./706705.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk231338 = require("./231338.js"),
  Chunk426617 = require("./426617.js"),
  Chunk177475 = require("./177475.js"),
  Chunk691739 = require("./691739.js"),
  Chunk453707 = require("./453707.js"),
  Chunk315416 = require("./315416.js"),
  Chunk715720 = require("./715720.js");

function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function Y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function K() {
  return <div className={Chunk426617.root}>{<q />}{<ea />}{<eg />}{<eh />}{<ep />}{<eu />}{<em />}{<ed />}{<ec />}{<ev />}{<X />}{<eS />}</div>
}

function q() {
  let e = (0, Chunk580747.Z)("highlight_mana_components");
  return <Chunk481060.hjN title={"Design System Controls"}><Chunk481060.xJW><Chunk481060.j7V value={module} onChange={e => (0, P.Z)("highlight_mana_components", e)} note={"Highlights all mana components marked with data-mana-component"} hideBorder={true}>{"Highlight Mana Components"}</Chunk481060.j7V></Chunk481060.xJW></Chunk481060.hjN>
}

function X() {
  let e = Object.keys(Chunk481060.DM8);
  return <div className={Chunk426617.section}>{<Chunk481060.X6q variant={"heading-xl/semibold"}>{"Notice"}</Chunk481060.X6q>}{<Chunk481060.Kqy gap={16}>{module.map(e => (0, i.jsx)(T.qXd, {
        color: T.DM8[e],
        children: (0, i.jsxs)("code", {
          children: ["NoticeColors.", e]
        })
      }, e))}</Chunk481060.Kqy>}</div>
}
let J = ["neutral", "blue_new", "blurple", "green_new", "red_new", "teal_new", "yellow_new", "orange_new", "pink", "purple"],
  Q = ["background-surface-highest", "background-surface-higher", "background-surface-high", "background-base-low", "background-base-lower", "background-base-lowest"],
  $ = ["background-gradient-lowest", "background-gradient-lower", "background-gradient-low", "background-gradient-high", "background-gradient-higher", "background-gradient-highest"],
  ee = ["", "background-mod-subtle", "background-mod-normal", "background-mod-strong"],
  et = ["critical", "warning", "positive", "info"],
  en = ["text-default", "text-primary", "text-secondary", "text-tertiary", "text-feedback-critical", "text-feedback-warning", "text-feedback-positive", "text-feedback-info", "premium-nitro-pink-text"];

function ei() {
  let e = (0, Chunk442837.e7)([Chunk514361.Z], () => Chunk514361.Z.gradientPreset);
  return <div>{<Chunk481060.X6q variant={"heading-xl/semibold"} className={Chunk426617.heading}>{"Background Colors"}</Chunk481060.X6q>}{Q.map(e => <div className={U.palette} style={{
        backgroundColor: "var(--".concat(e, ")"),
        padding: 24
      }}>{<T.Text variant={"text-md/medium"}>{e}</T.Text>}{<div style={{
          display: "grid",
          gap: 8,
          gridTemplateColumns: "repeat(3, 1fr)"
        }}>{ee.map(e => (0, i.jsxs)("div", {
          className: U.color,
          style: {
            padding: 16,
            background: "var(--".concat(e, ")")
          },
          children: [(0, i.jsx)(T.Text, {
            variant: "text-xs/semibold",
            color: "header-secondary",
            children: e
          }), (0, i.jsx)("hr", {
            className: U.sectionDivider
          }), en.map(e => (0, i.jsx)(T.Text, {
            variant: "text-xs/medium",
            style: {
              color: "var(--".concat(e, ")")
            },
            children: e
          }, e))]
        }, e))}</div>}{<hr className={U.sectionDivider} />}{<div style={{
          display: "grid",
          gap: 8,
          gridTemplateColumns: "repeat(3, 1fr)"
        }}>{et.map(e => {
          let t = "var(--text-feedback-".concat(e, ")");
          return (0, i.jsxs)("div", {
            className: U.color,
            style: {
              padding: 16,
              background: "var(--background-feedback-".concat(e, ")")
            },
            children: [(0, i.jsx)(T.Text, {
              variant: "text-xs/semibold",
              color: "header-secondary"
            }), (0, i.jsxs)(T.Kqy, {
              children: [(0, i.jsxs)(T.Text, {
                variant: "text-xs/semibold",
                style: {
                  color: t
                },
                children: ["background-feedback-", e]
              }), (0, i.jsx)(T.Text, {
                variant: "text-xs/normal",
                style: {
                  color: t
                },
                children: "Lorem ipsum odor amet, consectetuer adipiscing elit. Sem semper venenatis a quisque suspendisse urna litora."
              })]
            })]
          }, e)
        })}</div>}</div>)}{null !== module && <Chunk255367.Fragment>{<Chunk481060.X6q variant={"heading-xl/semibold"} className={Chunk426617.heading}>{"Gradient Background Colors"}</Chunk481060.X6q>}{<div className={"custom-theme-background"} style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          transform: "translateZ(0)"
        }}>{$.map(e => (0, i.jsx)("div", {
          className: U.palette,
          style: {
            background: "var(--".concat(e, ")"),
            height: 400
          },
          children: (0, i.jsx)(T.Text, {
            variant: "text-xs/medium",
            children: e
          })
        }, e))}</div>}</Chunk255367.Fragment>}{<Chunk481060.X6q variant={"heading-xl/semibold"} className={Chunk426617.heading}>{"Scales"}</Chunk481060.X6q>}{J.map(e => <div className={U.palette}>{<T.Text variant={"text-lg/semibold"}>{e}</T.Text>}{<div className={U.colors}>{Array.from({
          length: 100
        }, (t, n) => (0, i.jsx)("div", {
          className: U.color,
          style: {
            background: "var(--".concat(e.replace("_", "-"), "-").concat(n + 1, ")")
          },
          children: (0, i.jsx)(T.f6W, {
            theme: n < 50 ? "light" : "dark",
            children: t => (0, i.jsxs)(T.Text, {
              className: t,
              variant: "text-xs/medium",
              children: [e, ".", n + 1]
            })
          })
        }, n))}</div>}</div>)}</div>
}

function er() {
  return <Chunk255367.Fragment>{<Chunk526156.Z parentSetting={Chunk726985.s6.DESIGN_SYSTEMS} settingsSection={Chunk981631.oAB.DESIGN_SYSTEMS} tabs={[{
        title: "Components",
        component: () => (0, Chunk255367.jsx)(K, {}),
        setting: Chunk726985.s6.DESIGN_SYSTEMS_COMPONENTS
      }, {
        title: "Colors",
        component: () => (0, Chunk255367.jsx)(ei, {}),
        setting: Chunk726985.s6.DESIGN_SYSTEMS_COLORS
      }, {
        title: "Animations",
        component: () => (0, Chunk255367.jsx)(Chunk706705.Z, {}),
        setting: Chunk726985.s6.ANIMATION_TESTING
      }, {
        title: "Text Playground",
        component: () => (0, Chunk255367.jsx)(Chunk554042.Z, {}),
        setting: Chunk726985.s6.TEXT_PLAYGROUND
      }, {
        title: "Text Componnts",
        component: () => (0, Chunk255367.jsx)(Chunk799071.Z, {}),
        setting: Chunk726985.s6.TEXT_COMPONENTS
      }]} />}{<div className={Chunk426617.themes}><Chunk705262.ZP type={Chunk705262.yH.SETTINGS}><Chunk705262.ZP.Basic className={Chunk426617.themeSelectionGroup} /></Chunk705262.ZP></div>}</Chunk255367.Fragment>
}

function es(e) {
  var {
    component: t,
    showLoadingAnimation: n
  } = e, s = function(e, t) {
    if (null == e) return {};
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        s = Object.keys(e);
      for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(e);
      for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["component", "showLoadingAnimation"]);
  let [a, l] = r.useState(false), o = r.useRef(false);
  return r.useEffect(() => (a && n && (o.current = setTimeout(() => {
    l(false)
  }, 3e3)), () => {
    o.current >= 0 && clearTimeout(o.current)
  }), [a, n]), <t{...Y(W({}, s), {
    loading: n ? a : true,
    onClick: () => l(!a)
  })} />
}

function ea() {
  let [e, t] = Chunk73800.useState("md"), [n, s] = Chunk73800.useState("start"), [a, o] = Chunk73800.useState(true), c = ["primary", "secondary", "critical-primary", "critical-secondary", "active", "overlay-primary", "overlay-secondary"], d = [...Chunk442837, "expressive"].map(t => <es component={u.z} variant={t} text={"".concat((0, l.capitalize)(t), " ").concat(e.toUpperCase())} size={e} icon={"none" !== n ? T.gw7 : true} iconPosition={n} showLoadingAnimation={a} />), g = [...Chunk442837, "icon-only"].map(t => <es component={p.h} variant={t} icon={T.gw7} size={e} aria-label={"".concat(t, " ").concat(e)} showLoadingAnimation={a} />), f = ["primary", "secondary", "always-white", "critical"].map(e => <r.Fragment><h.A variant={e} text={"Text button"} /></r.Fragment>);
  return <div className={Chunk426617.section}>{<Chunk481060.X6q variant={"heading-xl/semibold"}>{"Buttons"}</Chunk481060.X6q>}{<eo title={"Button Options"}>{<Chunk481060.xJW title={"Button size"}><Chunk481060.FXm onChange={e => {
            let {
              value: n
            } = e;
            return t(n)
          }} options={[{
            value: "sm",
            name: "Small"
          }, {
            value: "md",
            name: "Medium"
          }]} value={module} /></Chunk481060.xJW>}{<Chunk481060.xJW title={"Icon position"}><Chunk481060.FXm onChange={e => {
            let {
              value: t
            } = e;
            return s(t)
          }} options={[{
            value: "none",
            name: "None"
          }, {
            value: "start",
            name: "Start"
          }, {
            value: "end",
            name: "End"
          }]} value={require} /></Chunk481060.xJW>}{<Chunk481060.xJW title={"Loading animation"}><Chunk481060.FXm onChange={e => {
            let {
              value: t
            } = e;
            return o("on" === t)
          }} options={[{
            value: "off",
            name: "Off"
          }, {
            value: "on",
            name: "On"
          }]} value={a ? "on" : "off"} /></Chunk481060.xJW>}</eo>}{<div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 16
      }}>{Chunk279570}{Chunk836459}{Chunk780842}</div>}{<Chunk481060.Kqy gap={16} padding={{
        top: 16
      }}>{<Chunk481060.X6q variant={"heading-lg/semibold"}>{"Button Groups"}</Chunk481060.X6q>}{<Chunk481060.Text variant={"text-lg/medium"}>{"Horizontal"}</Chunk481060.Text>}{<Chunk481060.Kqy gap={16} direction={"horizontal"}>{<Chunk481060.Kqy gap={16}>{<Chunk374415.h size={module}>{<es component={Chunk680018.z} variant={"secondary"} text={"Cancel"} showLoadingAnimation={a} />}{<es component={Chunk680018.z} variant={"primary"} text={"Submit"} showLoadingAnimation={a} />}</Chunk374415.h>}{<Chunk374415.h size={module}>{<es component={Chunk680018.z} variant={"primary"} text={"Submit"} showLoadingAnimation={a} />}{<es component={Chunk861066.h} variant={"secondary"} icon={Chunk481060.gw7} aria-label={"Clyde"} showLoadingAnimation={a} />}</Chunk374415.h>}</Chunk481060.Kqy>}{<Chunk481060.Kqy gap={16}><Chunk374415.h size={module} fullWidth={true}>{<es component={Chunk680018.z} variant={"secondary"} text={"Cancel"} showLoadingAnimation={a} />}{<es component={Chunk680018.z} variant={"primary"} text={"Submit"} showLoadingAnimation={a} />}</Chunk374415.h></Chunk481060.Kqy>}</Chunk481060.Kqy>}{<Chunk481060.Text variant={"text-lg/medium"}>{"Vertical"}</Chunk481060.Text>}{<Chunk481060.Kqy gap={16} direction={"horizontal"}>{<Chunk481060.Kqy gap={16}><Chunk374415.h direction={"vertical"} size={module}>{<es component={Chunk680018.z} variant={"secondary"} text={"Cancel"} showLoadingAnimation={a} />}{<es component={Chunk680018.z} variant={"primary"} text={"Submit"} showLoadingAnimation={a} />}</Chunk374415.h></Chunk481060.Kqy>}{<Chunk481060.Kqy gap={16}><Chunk374415.h fullWidth={true} direction={"vertical"} size={module}>{<es component={Chunk680018.z} variant={"secondary"} text={"Cancel"} showLoadingAnimation={a} />}{<es component={Chunk680018.z} variant={"primary"} text={"Submit"} showLoadingAnimation={a} />}</Chunk374415.h></Chunk481060.Kqy>}</Chunk481060.Kqy>}{<el buttonSize={module} />}</Chunk481060.Kqy>}</div>
}

function el(e) {
  let {
    buttonSize: t
  } = e, [n, s] = r.useState(false);
  return <T.Kqy gap={16}>{<T.X6q variant={"heading-xl/semibold"}>{"PlayButton"}</T.X6q>}{<T.Kqy direction={"horizontal"} gap={16}>{["dark", "mid", "light"].map(e => (0, i.jsx)("div", {
        className: U.video,
        "data-luminance": e,
        children: (0, i.jsx)(g.J, {
          size: t,
          playing: n,
          onClick: () => s(!n)
        })
      }, e))}</T.Kqy>}</T.Kqy>
}

function eo(e) {
  let {
    children: t,
    title: n
  } = e, [s, l] = r.useState(false);
  return <T.Kqy direction={"vertical"} gap={0} padding={16} className={U.floatingControls}>{<T.Kqy direction={"horizontal"} gap={16} align={"center"} justify={"space-between"}>{<T.X6q variant={"heading-lg/semibold"}>{n}</T.X6q>}{<f.Q icon={s ? T.hic : T.sXD} onClick={() => l(!s)} pressed={s} aria-label={"Show controls"} />}</T.Kqy>}{<T.Kqy gap={16} className={a()(U.floatingControlsContent, {
        [U.floatingControlsContentHidden]: !s
      })}>{t}</T.Kqy>}</T.Kqy>
}

function ec() {
  let [e, t] = Chunk73800.useState("1");
  return <div className={Chunk426617.section}>{<Chunk481060.X6q variant={"heading-xl/semibold"}>{"TabBar"}</Chunk481060.X6q>}{<Chunk481060.njP type={"top"} look={"brand"} selectedItem={module} onItemSelect={e => t(e)} className={Chunk426617.tabBar}>{<Chunk481060.njP.Item id={"1"}>{"Tab 1"}</Chunk481060.njP.Item>}{<Chunk481060.njP.Item id={"2"}>{"Tab 2"}</Chunk481060.njP.Item>}{<Chunk481060.njP.Item id={"3"}>{"Tab 3"}</Chunk481060.njP.Item>}</Chunk481060.njP>}{<Chunk481060.Text variant={"text-md/medium"}>{"Selected tab: "}{module}</Chunk481060.Text>}</div>
}

function ed() {
  let [e, t] = Chunk73800.useState(1), [n, s] = Chunk73800.useState(false), [a, l] = Chunk73800.useState(5), [o, c] = Chunk73800.useState(false), d = Chunk73800.useRef(null);
  return <div className={Chunk426617.section}>{<Chunk481060.X6q variant={"heading-xl/semibold"}>{"Context Menus"}</Chunk481060.X6q>}{<span><Chunk481060.yRy targetElementRef={Chunk836459} shouldShow={Chunk971809} renderPopout={() => (0, Chunk255367.jsxs)(Chunk481060.v2r, {
          navId: "demo",
          "aria-label": "Demo Actions",
          onClose: () => null,
          onSelect: () => null,
          children: [(0, Chunk255367.jsxs)(Chunk481060.kSQ, {
            label: "Basic items",
            children: [(0, Chunk255367.jsx)(Chunk481060.sNh, {
              id: "first",
              label: "An option"
            }), (0, Chunk255367.jsx)(Chunk481060.sNh, {
              id: "second",
              label: "An option with an icon",
              icon: Chunk481060.kBi
            }), (0, Chunk255367.jsxs)(Chunk481060.sNh, {
              id: "item-with-submenu",
              label: "Item with submenu",
              children: [(0, Chunk255367.jsx)(Chunk481060.sNh, {
                id: "subitem-1",
                label: "Subitem 1"
              }), (0, Chunk255367.jsx)(Chunk481060.sNh, {
                id: "subitem-2",
                label: "Subitem 2"
              }), (0, Chunk255367.jsx)(Chunk481060.sNh, {
                id: "subitem-3",
                label: "Subitem 3"
              })]
            })]
          }), (0, Chunk255367.jsxs)(Chunk481060.kSQ, {
            label: "Inputs",
            children: [(0, Chunk255367.jsx)(Chunk481060.S89, {
              id: "checkable",
              label: "Checkbox",
              checked: require,
              action: () => Chunk120356(!require)
            }), (0, Chunk255367.jsx)(Chunk481060.k5B, {
              id: "radio-one",
              group: "a-group",
              label: "Radio 1",
              action: () => exports(1),
              checked: 1 === module
            }), (0, Chunk255367.jsx)(Chunk481060.k5B, {
              id: "radio-two",
              group: "a-group",
              label: "Radio 2",
              action: () => exports(2),
              checked: 2 === module
            }), (0, Chunk255367.jsx)(Chunk481060.k5B, {
              id: "radio-three",
              group: "a-group",
              label: "Radio 3",
              action: () => exports(3),
              checked: 3 === module
            }), (0, Chunk255367.jsx)(Chunk481060.II_, {
              id: "slider",
              label: "Slider",
              control: (e, t) => (0, i.jsx)(T._wy, {
                ref: t,
                value: a,
                minValue: 0,
                maxValue: 100,
                onChange: e => l(e),
                "aria-label": "Slider"
              })
            })]
          }), (0, Chunk255367.jsx)(Chunk481060.Clw, {}), (0, Chunk255367.jsx)(Chunk481060.sNh, {
            id: "danger",
            label: "A destructive option",
            color: "danger",
            icon: Chunk481060.XHJ
          })]
        })}>{() => (0, Chunk255367.jsx)(Chunk481060.zxk, {
          variant: "primary",
          text: "Toggle context menu",
          buttonRef: Chunk836459,
          onClick: () => Chunk442837(!Chunk971809)
        })}</Chunk481060.yRy></span>}</div>
}

function eu() {
  let [e, t] = Chunk73800.useState(Chunk481060.FGA.PRIMARY), n = Chunk73800.useMemo(() => Object.entries(Chunk481060.FGA).map(e => {
    let [t, n] = e;
    return {
      label: t,
      value: n
    }
  }), []);
  return <div className={Chunk426617.section}>{<Chunk481060.X6q variant={"heading-xl/semibold"}>{"Tooltips"}</Chunk481060.X6q>}{<Chunk481060.xJW title={"Color"}><Chunk481060.q4e value={module} onChange={exports} options={require} /></Chunk481060.xJW>}{<div style={{
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }}>{<Chunk481060.ua7 color={module} text={"Here's top aligned tooltip text!"} position={"top"}>{e => (0, i.jsx)(T.zxk, W({
          variant: "primary",
          text: "Tooltip on the top"
        }, e))}</Chunk481060.ua7>}{<Chunk481060.ua7 color={module} text={"Here's right aligned tooltip text!"} position={"left"}>{e => (0, i.jsx)(T.zxk, W({
          variant: "primary",
          text: "Tooltip on the left"
        }, e))}</Chunk481060.ua7>}{<Chunk481060.ua7 color={module} text={"Here's bottom aligned tooltip text!"} position={"bottom"}>{e => (0, i.jsx)(T.zxk, W({
          variant: "primary",
          text: "Tooltip on the bottom"
        }, e))}</Chunk481060.ua7>}{<Chunk481060.ua7 color={module} text={"Here's right aligned tooltip text!"} position={"right"}>{e => (0, i.jsx)(T.zxk, W({
          variant: "primary",
          text: "Tooltip on the right"
        }, e))}</Chunk481060.ua7>}</div>}{<div />}</div>
}

function em() {
  let [e, t] = Chunk73800.useState(false), [n, s] = Chunk73800.useState(false), [a, l] = Chunk73800.useState(false), [o, c] = Chunk73800.useState(false), [d, u] = Chunk73800.useState(false), [m, p] = Chunk73800.useState(false), [g, h] = Chunk73800.useState(false), [f, b] = Chunk73800.useState(false), [x, _] = Chunk73800.useState(false), [j, E] = Chunk73800.useState(false), [C, O] = Chunk73800.useState(false), [I, N] = Chunk73800.useState(false), [y, A] = Chunk73800.useState(false), [P, R] = Chunk73800.useState(false), [D, Z] = Chunk73800.useState(false), [w, k] = Chunk73800.useState(false), [L, M] = Chunk73800.useState(false), [B, V] = Chunk73800.useState(false), [G, W] = Chunk73800.useState(false), Y = Chunk73800.useRef(null), K = Chunk73800.useRef(null), q = Chunk73800.useRef(null), X = Chunk73800.useRef(null), J = Chunk73800.useRef(null), Q = Chunk73800.useRef(null), $ = Chunk73800.useRef(null), ee = Chunk73800.useRef(null), et = Chunk73800.useRef(null), en = Chunk73800.useRef(null), ei = Chunk73800.useRef(null), er = Chunk73800.useRef(null), es = Chunk73800.useRef(null), ea = Chunk73800.useRef(null), el = Chunk73800.useRef(null), eo = Chunk73800.useRef(null), ec = Chunk73800.useRef(null), ed = Chunk73800.useRef(null), eu = Chunk73800.useRef(null), em = Chunk73800.useCallback(() => {
    exports(false), Chunk120356(false), Chunk392711(false), Chunk442837(false), Chunk680018(false), Chunk861066(false), Chunk179538(false), Chunk257465(false), Chunk82659(false), Chunk103866(false), Chunk37148(false), Chunk514361(false), Chunk377089(false), Chunk580747(false), Chunk799071(false), Chunk706705(false), Chunk981631(false), Chunk177475(false), W(false)
  }, []);
  return <div className={Chunk426617.section}>{<Chunk481060.X6q variant={"heading-xl/semibold"}>{"Popovers"}</Chunk481060.X6q>}{<Chunk907862.J2 targetElementRef={Y} shouldShow={module} onRequestClose={em} caretConfig={{
        position: "bottom",
        align: "center"
      }} title={"Header"} body={"Body"} size={"sm"} asset={(0, Chunk255367.jsx)("img", {
        src: Chunk315416.Z,
        alt: "Small placeholder"
      })} badge={"new"} actions={[{
        text: "Button",
        onClick: em
      }]} />}{<Chunk907862.J2 targetElementRef={K} shouldShow={require} onRequestClose={em} caretConfig={{
        position: "bottom",
        align: "center"
      }} title={"Header"} body={"Body"} asset={(0, Chunk255367.jsx)("img", {
        src: Chunk453707.Z,
        alt: "Medium placeholder"
      })} badge={"new"} actions={[{
        text: "Button",
        onClick: em
      }]} />}{<Chunk907862.J2 targetElementRef={q} shouldShow={a} onRequestClose={em} caretConfig={{
        position: "bottom",
        align: "center"
      }} title={"Header"} body={"Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod."} actions={[{
        text: "Button",
        onClick: em
      }]} />}{<Chunk907862.J2 targetElementRef={X} shouldShow={Chunk971809} onRequestClose={em} caretConfig={{
        position: "bottom",
        align: "center"
      }} title={"Ipsum Dolor"} body={"Lorem ipsum dolor sit amet, consectetur elit. Sed do eiusmod."} asset={(0, Chunk255367.jsx)("img", {
        src: Chunk453707.Z,
        alt: "Medium placeholder"
      })} badge={"new"} actions={[{
        text: "Button",
        onClick: em
      }]} textLink={{
        text: "Learn More",
        link: "https://discord.com",
        external: true
      }} />}{<Chunk907862.J2 targetElementRef={J} shouldShow={Chunk836459} onRequestClose={em} caretConfig={{
        position: "bottom",
        align: "center"
      }} title={"Header"} body={"Body"} asset={(0, Chunk255367.jsx)("img", {
        src: Chunk453707.Z,
        alt: "Medium placeholder"
      })} badge={"new"} actions={[{
        text: "Primary",
        onClick: em,
        variant: "primary"
      }, {
        text: "Secondary",
        onClick: em,
        variant: "secondary"
      }]} />}{<Chunk907862.J2 targetElementRef={Q} shouldShow={Chunk374415} onRequestClose={em} caretConfig={{
        position: "bottom",
        align: "center"
      }} title={"No Actions"} body={"This popover has no action buttons, just content to display."} asset={(0, Chunk255367.jsx)("img", {
        src: Chunk453707.Z,
        alt: "Medium placeholder"
      })} badge={"new"} />}{<Chunk907862.J2 targetElementRef={$} shouldShow={Chunk780842} onRequestClose={em} caretConfig={{
        position: "top",
        align: "end"
      }} title={"Custom Caret API"} body={"Using CaretConfig with END placement"} asset={(0, Chunk255367.jsx)("img", {
        src: Chunk453707.Z,
        alt: "Medium placeholder"
      })} badge={"new"} actions={[{
        text: "Got it",
        onClick: em
      }]} />}{<Chunk907862.J2 targetElementRef={ee} shouldShow={Chunk279570} onRequestClose={em} caretConfig={{
        position: "left",
        align: "start"
      }} title={"Left Side Caret"} body={"Caret positioned on the left side at start"} asset={(0, Chunk255367.jsx)("img", {
        src: Chunk453707.Z,
        alt: "Medium placeholder"
      })} badge={"early_access"} actions={[{
        text: "Close",
        onClick: em
      }]} />}{<Chunk907862.J2 targetElementRef={et} shouldShow={Chunk667202} onRequestClose={em} caretConfig={{
        position: "bottom",
        align: "custom",
        customOffset: 50
      }} title={"Custom Offset"} body={"Caret positioned 50px from center with custom offset"} asset={(0, Chunk255367.jsx)("img", {
        src: Chunk453707.Z,
        alt: "Medium placeholder"
      })} badge={"beta"} actions={[{
        text: "Amazing!",
        onClick: em
      }]} />}{<Chunk907862.J2 targetElementRef={en} shouldShow={Chunk369585} onRequestClose={em} position={"right"} caretConfig={{
        position: "left",
        align: "center"
      }} title={"Left Center Positioning"} body={"Popover appears to the right with caret centered on the left side"} asset={(0, Chunk255367.jsx)("img", {
        src: Chunk453707.Z,
        alt: "Medium placeholder"
      })} badge={"new"} actions={[{
        text: "Perfect!",
        onClick: em
      }]} />}{<Chunk907862.J2 targetElementRef={ei} shouldShow={Chunk213734} onRequestClose={em} caretConfig={{
        position: "bottom",
        align: "center"
      }} title={"Purple Gradient"} body={"This popover has a beautiful purple gradient background"} asset={(0, Chunk255367.jsx)("img", {
        src: Chunk453707.Z,
        alt: "Medium placeholder"
      })} gradientColor={"purple"} badge={"new"} actions={[{
        text: "Looks Great!",
        onClick: em
      }]} />}{<Chunk907862.J2 targetElementRef={er} shouldShow={Chunk240872} onRequestClose={em} caretConfig={{
        position: "bottom",
        align: "center"
      }} title={"Blue Gradient"} body={"This popover showcases the blue gradient option"} asset={(0, Chunk255367.jsx)("img", {
        src: Chunk453707.Z,
        alt: "Medium placeholder"
      })} gradientColor={"blue"} badge={"beta"} actions={[{
        text: "Nice!",
        onClick: em
      }]} />}{<Chunk907862.J2 targetElementRef={es} shouldShow={Chunk705262} onRequestClose={em} caretConfig={{
        position: "bottom",
        align: "center"
      }} title={"Nitro Pink Gradient"} body={"Experience the premium nitro-pink gradient effect"} asset={(0, Chunk255367.jsx)("img", {
        src: Chunk453707.Z,
        alt: "Medium placeholder"
      })} gradientColor={"nitro-pink"} textLink={{
        text: "Learn about Nitro",
        link: "https://discord.com/nitro",
        external: true
      }} actions={[{
        text: "Get Nitro",
        onClick: em
      }]} />}{<Chunk907862.J2 targetElementRef={ea} shouldShow={Chunk581612} onRequestClose={em} caretConfig={{
        position: "bottom",
        align: "center"
      }} title={"Voice Filters"} body={"Experience enhanced voice quality with our latest filtering technology. Perfect for gaming and streaming."} asset={(0, Chunk255367.jsx)("img", {
        src: Chunk715720.Z,
        alt: "Voice Filters"
      })} badge={"new"} gradientColor={"purple"} actions={[{
        text: "Try it now",
        onClick: em
      }]} />}{<Chunk907862.Mb targetElementRef={el} shouldShow={Chunk526156} onRequestClose={em} caretConfig={{
        position: "bottom",
        align: "center"
      }} title={"With Video Asset"} body={"Click the video to view it in the media viewer!"} assetUrl={"https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov"} badge={"new"} gradientColor={"blue"} action={{
        text: "Learn More",
        onClick: em
      }} />}{<Chunk466590.e targetElementRef={eo} shouldShow={Chunk554042} onRequestClose={em} caretConfig={{
        position: "bottom",
        align: "center"
      }} steps={[{
        title: "Welcome to Quests!",
        body: "Journey to Quest Home in Discover to start earning Orbs.",
        asset: (0, Chunk255367.jsx)("img", {
          src: Chunk453707.Z,
          alt: "Medium placeholder"
        }),
        badge: "new",
        action: {
          text: "Next"
        },
        gradientColor: "blue"
      }, {
        title: "Earn Rewards",
        body: "Complete quests to earn Orbs and unlock exclusive rewards.",
        asset: (0, Chunk255367.jsx)("img", {
          src: Chunk715720.Z,
          alt: "Quest Rewards"
        }),
        action: {
          text: "Next"
        },
        gradientColor: "blue"
      }, {
        title: "Quest Complete!",
        body: "You're all set to start your quest adventure. Good luck!",
        asset: (0, Chunk255367.jsx)("img", {
          src: Chunk453707.Z,
          alt: "Medium placeholder"
        }),
        action: {
          text: "Get Started"
        },
        gradientColor: "blue",
        textLink: {
          text: "Learn More",
          link: "https://discord.com/quests",
          external: true
        }
      }]} onStepChange={e => {}} />}{<Chunk907862.J2 targetElementRef={ec} shouldShow={Chunk726985} onRequestClose={em} caretConfig={{
        position: "bottom",
        align: "center"
      }} title={"Experience Voice Filters"} body={"Enhanced voice quality with our latest filtering technology. Try the expressive button!"} asset={(0, Chunk255367.jsx)("img", {
        src: Chunk715720.Z,
        alt: "Voice Filters"
      })} badge={"new"} gradientColor={"nitro-pink"} actions={[{
        text: "Subscribe to Nitro",
        onClick: em,
        variant: "expressive"
      }]} />}{<Chunk466590.e targetElementRef={ed} shouldShow={Chunk231338} onRequestClose={em} caretConfig={{
        position: "bottom",
        align: "center"
      }} steps={[{
        title: "Discover Features",
        body: "Explore amazing new capabilities in Discord.",
        asset: (0, Chunk255367.jsx)("img", {
          src: Chunk453707.Z,
          alt: "Medium placeholder"
        }),
        badge: "new",
        action: {
          text: "Continue"
        },
        gradientColor: "purple"
      }, {
        title: "Unlock Potential",
        body: "Learn how to make the most of your Discord experience.",
        asset: (0, Chunk255367.jsx)("img", {
          src: Chunk715720.Z,
          alt: "Features"
        }),
        action: {
          text: "Almost There"
        },
        gradientColor: "blue"
      }, {
        title: "Ready to Go!",
        body: "You're all set! Notice the expressive button animation.",
        asset: (0, Chunk255367.jsx)("img", {
          src: Chunk453707.Z,
          alt: "Medium placeholder"
        }),
        action: {
          text: "Get Started",
          variant: "expressive"
        },
        gradientColor: "nitro-pink",
        textLink: {
          text: "Learn More",
          link: "https://discord.com",
          external: true
        }
      }]} onStepChange={e => {}} />}{<Chunk907862.Mb targetElementRef={eu} shouldShow={Chunk691739} onRequestClose={em} caretConfig={{
        position: "bottom",
        align: "center"
      }} title={"Expressive Video Experience"} body={"Watch this video with our expressive button design!"} assetUrl={"https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov"} badge={"new"} action={{
        text: "Experience More",
        onClick: em,
        variant: "expressive"
      }} />}{<div style={{
        marginTop: 16
      }}>{<Chunk481060.X6q variant={"heading-lg/semibold"}>{"Size Examples"}</Chunk481060.X6q>}{<div style={{
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          marginTop: 8
        }}>{<Chunk481060.zxk variant={"primary"} text={"Small Content"} buttonRef={Y} onClick={() => {
            em(), exports(true)
          }} />}{<Chunk481060.zxk variant={"primary"} text={"Medium Content"} buttonRef={K} onClick={() => {
            em(), Chunk120356(true)
          }} />}{<Chunk481060.zxk buttonRef={q} onClick={() => {
            em(), Chunk392711(true)
          }} text={"No Asset"} />}</div>}</div>}{<div style={{
        marginTop: 16
      }}>{<Chunk481060.X6q variant={"heading-lg/semibold"}>{"Actions Examples"}</Chunk481060.X6q>}{<div style={{
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          marginTop: 8
        }}>{<Chunk481060.zxk variant={"primary"} text={"External Link"} buttonRef={X} onClick={() => {
            em(), Chunk442837(true)
          }} />}{<Chunk481060.zxk variant={"primary"} text={"Two Actions"} buttonRef={J} onClick={() => {
            em(), Chunk680018(true)
          }} />}{<Chunk481060.zxk buttonRef={Q} onClick={() => {
            em(), Chunk861066(true)
          }} text={"No Actions"} />}</div>}</div>}{<div style={{
        marginTop: 16
      }}>{<Chunk481060.X6q variant={"heading-lg/semibold"}>{"Caret API Examples"}</Chunk481060.X6q>}{<div style={{
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          marginTop: 8
        }}>{<Chunk481060.zxk variant={"primary"} text={"Custom Caret API"} buttonRef={$} onClick={() => {
            em(), Chunk179538(true)
          }} />}{<Chunk481060.zxk variant={"primary"} text={"Left Side Caret"} buttonRef={ee} onClick={() => {
            em(), Chunk257465(true)
          }} />}{<Chunk481060.zxk variant={"primary"} text={"Custom Offset"} buttonRef={et} onClick={() => {
            em(), Chunk82659(true)
          }} />}{<Chunk481060.zxk variant={"primary"} text={"Left Center"} buttonRef={en} onClick={() => {
            em(), Chunk103866(true)
          }} />}</div>}</div>}{<div style={{
        marginTop: 16
      }}>{<Chunk481060.X6q variant={"heading-lg/semibold"}>{"Gradient Examples"}</Chunk481060.X6q>}{<div style={{
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          marginTop: 8
        }}>{<Chunk481060.zxk variant={"primary"} text={"Purple Gradient"} buttonRef={ei} onClick={() => {
            em(), Chunk37148(true)
          }} />}{<Chunk481060.zxk variant={"primary"} text={"Blue Gradient"} buttonRef={er} onClick={() => {
            em(), Chunk514361(true)
          }} />}{<Chunk481060.zxk variant={"primary"} text={"Nitro Pink Gradient"} buttonRef={es} onClick={() => {
            em(), Chunk377089(true)
          }} />}</div>}</div>}{<div style={{
        marginTop: 16
      }}>{<Chunk481060.X6q variant={"heading-lg/semibold"}>{"With Asset"}</Chunk481060.X6q>}{<div style={{
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          marginTop: 8
        }}>{<Chunk481060.zxk variant={"primary"} text={"Voice Filters"} buttonRef={ea} onClick={() => {
            em(), Chunk580747(true)
          }} />}{<Chunk481060.zxk variant={"primary"} text={"Video Media Viewer"} buttonRef={el} onClick={() => {
            em(), Chunk799071(true)
          }} />}</div>}</div>}{<div style={{
        marginTop: 16
      }}>{<Chunk481060.X6q variant={"heading-lg/semibold"}>{"Multi-Step"}</Chunk481060.X6q>}{<div style={{
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          marginTop: 8
        }}><Chunk481060.zxk variant={"primary"} text={"Multi-Step"} buttonRef={eo} onClick={() => {
            em(), Chunk706705(true)
          }} /></div>}</div>}{<div style={{
        marginTop: 16
      }}>{<Chunk481060.X6q variant={"heading-lg/semibold"}>{"Expressive"}</Chunk481060.X6q>}{<div style={{
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
          marginTop: 8
        }}>{<Chunk481060.zxk variant={"primary"} text={"Expressive Popover"} buttonRef={ec} onClick={() => {
            em(), Chunk981631(true)
          }} />}{<Chunk481060.zxk variant={"primary"} text={"Expressive Multi-Step"} buttonRef={ed} onClick={() => {
            em(), Chunk177475(true)
          }} />}{<Chunk481060.zxk variant={"primary"} text={"Expressive Video"} buttonRef={eu} onClick={() => {
            em(), W(true)
          }} />}</div>}</div>}</div>
}

function ep() {
  let [e, t] = Chunk73800.useState(false), [n, s] = Chunk73800.useState(false), [a, l] = Chunk73800.useState("auto");
  return <Chunk255367.Fragment>{<div className={Chunk426617.section}>{<Chunk481060.X6q variant={"heading-xl/semibold"}>{"Checkboxes"}</Chunk481060.X6q>}{<Chunk481060.XZJ value={module} onChange={(e, n) => t(n)}><Chunk481060.Text variant={"text-md/medium"}>{"Checkbox input"}</Chunk481060.Text></Chunk481060.XZJ>}{<Chunk481060.XZJ value={module} onChange={(e, n) => t(n)} disabled={true}><Chunk481060.Text variant={"text-md/medium"}>{"Disabled checkbox"}</Chunk481060.Text></Chunk481060.XZJ>}{<Chunk481060.XZJ value={module} onChange={(e, n) => t(n)} readOnly={true}><Chunk481060.Text variant={"text-md/medium"}>{"Read-only checkbox"}</Chunk481060.Text></Chunk481060.XZJ>}{<Chunk481060.XZJ value={module} onChange={(e, n) => t(n)} type={Chunk481060.XZJ.Types.ROW}><Chunk481060.Text variant={"text-md/medium"}>{"Checkbox row"}</Chunk481060.Text></Chunk481060.XZJ>}</div>}{<div className={Chunk426617.section}>{<Chunk481060.X6q variant={"heading-xl/semibold"}>{"Switches"}</Chunk481060.X6q>}{<Chunk481060.j7V hideBorder={true} value={require} onChange={e => s(e)}>{"FormSwitch with a label"}</Chunk481060.j7V>}</div>}{<div className={Chunk426617.section}>{<Chunk481060.X6q variant={"heading-xl/semibold"}>{"Radio Buttons"}</Chunk481060.X6q>}{<Chunk481060.xJW><Chunk481060.FXm onChange={e => {
            let {
              value: t
            } = e;
            return l(t)
          }} options={[{
            value: "auto",
            name: "Auto"
          }, {
            value: "720p",
            name: "720p"
          }, {
            value: "1080p",
            name: "1080p"
          }]} value={a} /></Chunk481060.xJW>}</div>}{<div className={Chunk426617.section}>{<Chunk481060.X6q variant={"heading-xl/semibold"}>{"Slider"}</Chunk481060.X6q>}{<div className={Chunk426617.slider}>{<Chunk481060.Text variant={"text-md/medium"}>{"Standard slider"}</Chunk481060.Text>}{<Chunk481060.iRW minValue={0} maxValue={100} initialValue={50} defaultValue={50} markers={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} />}</div>}{<div className={Chunk426617.slider}>{<Chunk481060.Text variant={"text-md/medium"}>{"Sticky markers"}</Chunk481060.Text>}{<Chunk481060.iRW minValue={0} maxValue={100} initialValue={50} markers={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]} stickToMarkers={true} />}</div>}{<div className={Chunk426617.slider}>{<Chunk481060.Text variant={"text-md/medium"}>{"Non-uniform markers"}</Chunk481060.Text>}{<Chunk481060.iRW minValue={0} maxValue={100} initialValue={50} markers={[0, 20, 50, 100]} equidistant={false} />}</div>}{<div className={Chunk426617.slider}>{<Chunk481060.Text variant={"text-md/medium"}>{"Non-uniform equidistant markers"}</Chunk481060.Text>}{<Chunk481060.iRW minValue={0} maxValue={100} initialValue={50} markers={[0, 20, 50, 100]} equidistant={true} />}</div>}{<div className={Chunk426617.slider}>{<Chunk481060.Text variant={"text-md/medium"}>{"No markers"}</Chunk481060.Text>}{<Chunk481060.iRW minValue={0} maxValue={100} initialValue={50} />}</div>}{<div className={Chunk426617.slider}>{<Chunk481060.Text variant={"text-md/medium"}>{"Mini slider"}</Chunk481060.Text>}{<Chunk481060.iRW mini={true} minValue={0} maxValue={100} initialValue={50} />}</div>}</div>}</Chunk255367.Fragment>
}

function eg() {
  let [e, t] = Chunk73800.useState(null), [n, s] = Chunk73800.useState(null), [a, l] = Chunk73800.useState([]), [c, d] = Chunk73800.useState([]), [u, m] = Chunk73800.useState([]);
  return <div className={Chunk426617.section}>{<Chunk481060.X6q variant={"heading-xl/semibold"}>{"SearchableSelect"}</Chunk481060.X6q>}{<Chunk481060.VcW placeholder={"Single select"} value={module} onChange={e => t(e)} options={Chunk971809.G} />}{<Chunk481060.VcW placeholder={"Single select (clearable)"} clearable={true} value={require} onChange={e => s(e)} options={Chunk971809.G} />}{<Chunk481060.VcW placeholder={"Multi select"} multi={true} value={a} onChange={e => l(e)} options={Chunk971809.G} />}{<Chunk481060.VcW placeholder={"Multi select (clearable)"} multi={true} clearable={true} value={Chunk680018} onChange={e => m(e)} options={Chunk971809.G} />}{<Chunk481060.VcW placeholder={"Multi select (custom pills)"} multi={true} value={Chunk442837} onChange={e => d(e)} options={Chunk971809.G} hidePills={true} customPillContainerClassName={Chunk426617.customPillContainer} renderCustomPill={e => (0, i.jsx)("div", {
        style: {
          padding: 8,
          border: "1px solid var(--bg-brand)",
          borderRadius: 8
        },
        children: (0, i.jsx)(T.Text, {
          variant: "text-md/bold",
          children: e.label
        })
      })} />}</div>
}

function eh() {
  let [e, t] = Chunk73800.useState(""), [n, s] = Chunk73800.useState(""), [a, l] = Chunk73800.useState(""), o = (0, Chunk377089.U)("UserSettingsDesignSystems");
  return <div className={Chunk426617.section}>{<Chunk481060.X6q variant={"heading-xl/semibold"}>{"TextInput"}</Chunk481060.X6q>}{<Chunk481060.xJW title={"Search"}><Chunk481060.Kqy gap={8}>{<Chunk481060.E1j placeholder={"Search..."} onChange={e => l(e)} query={a} onClear={() => Chunk392711("")} />}{<Chunk481060.E1j size={"sm"} placeholder={"Search..."} onChange={e => l(e)} query={a} onClear={() => Chunk392711("")} />}</Chunk481060.Kqy></Chunk481060.xJW>}{<Chunk481060.xJW title={"Disabled"} disabled={true}><Chunk481060.oil placeholder={"Disabled"} disabled={true} /></Chunk481060.xJW>}{<Chunk481060.xJW title={"Error"}><Chunk481060.oil required={true} error={"This must have a value"} /></Chunk481060.xJW>}{<Chunk481060.xJW title={"Error"}><Chunk481060.oil defaultValue={"Not a valid value"} error={"This has an error."} /></Chunk481060.xJW>}{<Chunk481060.xJW title={"minLength"}><Chunk481060.oil minLength={6} value={module} onChange={exports} placeholder={"Enter at least 6 characters"} /></Chunk481060.xJW>}{<Chunk481060.xJW title={"Read only"}><Chunk481060.oil value={"Read-only, not-editable field"} editable={false} /></Chunk481060.xJW>}{<Chunk481060.xJW title={"Input with a label"}><Chunk481060.oil placeholder={"Real placeholder"} value={module} onChange={exports} /></Chunk481060.xJW>}{Chunk971809 && <Chunk481060.xJW title={"Leading and Trailing"}><Chunk481060.Kqy gap={16}>{<Chunk481060.Wn messageType={Chunk481060.QYI.WARNING}>{"Leading and trailing accessories are not yet supported in the public API."}</Chunk481060.Wn>}{<Chunk481060.Kqy>{<Chunk481060.oil leading={Chunk481060.qJs} placeholder={"Create Channel"} value={module} onChange={exports} />}{<Chunk481060.oil trailing={Chunk481060.lOy} placeholder={"Send Message"} value={module} onChange={exports} />}</Chunk481060.Kqy>}</Chunk481060.Kqy></Chunk481060.xJW>}{<Chunk481060.xJW title={"Text area"}><Chunk481060.Kx8 placeholder={"Text area placeholder"} showCharacterCount={true} value={require} onChange={Chunk120356} /></Chunk481060.xJW>}</div>
}

function ef(e) {
  let {
    transitionState: t
  } = e, [n, s] = r.useState(false), [a, l] = r.useState(T.CgR.SMALL), [o, c] = r.useState(false), d = n ? U.modalOutlines : "";
  return <T.Y0X transitionState={t} size={a} parentComponent={"UserSettingsDesignSystem"}>{<T.xBx className={d}><T.X6q variant={"heading-xl/semibold"}>{"Modal"}</T.X6q></T.xBx>}{<T.hzk className={d}><T.Kqy gap={16}>{<T.xJW title={"Modal Size"}><T.q4e value={a} onChange={l} options={Object.entries(T.CgR).map(e => {
              let [t, n] = e;
              return {
                label: t,
                value: n
              }
            })} /></T.xJW>}{<T.hjN title={"Options"}><T.Kqy gap={16}>{<T.XZJ value={n} onChange={(e, t) => s(t)}><T.Text variant={"text-md/medium"}>{"Show Section Outlines"}</T.Text></T.XZJ>}{<T.XZJ value={o} onChange={(e, t) => c(t)}><T.Text variant={"text-md/medium"}>{"Show secondary action in footer"}</T.Text></T.XZJ>}</T.Kqy></T.hjN>}</T.Kqy></T.hzk>}{<T.mzw className={d}><T.Kqy direction={"horizontal"} justify={"end"} gap={8}>{o && <T.zxk variant={"secondary"} text={"Secondary Action"} />}{<T.zxk variant={"primary"} text={"Close"} />}</T.Kqy></T.mzw>}</T.Y0X>
}

function eb(e) {
  let {
    transitionState: t,
    onClose: n,
    modalCount: s = 1
  } = e, [a, l] = r.useState("replace"), o = s < 3;
  return <T.Y0X transitionState={t} size={1 === s ? T.CgR.LARGE : 2 === s ? T.CgR.MEDIUM : T.CgR.SMALL} parentComponent={"UserSettingsDesignSystem"}>{<T.xBx><T.X6q variant={"heading-xl/semibold"}>{"Modal Stacking Demo"}</T.X6q></T.xBx>}{<T.hzk><T.Kqy gap={16}>{<T.Text variant={"text-md/medium"}>{"This is modal level "}{s}{"."}</T.Text>}{o && <T.xJW title={"Stacking Behavior"}><T.q4e value={a} onChange={l} options={[{
              label: "Replace (default)",
              value: "replace"
            }, {
              label: "Stack",
              value: "stack"
            }, {
              label: "Replace All",
              value: "replaceAll"
            }]} /></T.xJW>}{<T.Kqy gap={8}>{<T.Text variant={"text-sm/normal"} color={"text-muted"}>{<strong>{"Replace One:"}</strong>}{" The modal directly below is hidden (default behavior)"}</T.Text>}{<T.Text variant={"text-sm/normal"} color={"text-muted"}>{<strong>{"Replace All:"}</strong>}{" All modals below are hidden"}</T.Text>}{<T.Text variant={"text-sm/normal"} color={"text-muted"}>{<strong>{"Stack:"}</strong>}{" The modal directly below remains visible"}</T.Text>}</T.Kqy>}</T.Kqy></T.hzk>}{<T.mzw><T.Kqy direction={"horizontal"} justify={"end"} gap={8}>{<T.zxk variant={"secondary"} text={"Close"} onClick={n} />}{o && <T.zxk variant={"primary"} text={"Open Next Modal"} onClick={() => {
            let e = s + 1;
            (0, T.h7j)(t => (0, i.jsx)(eb, Y(W({}, t), {
              modalCount: e
            })), {
              stackingBehavior: a
            })
          }} />}</T.Kqy></T.mzw>}</T.Y0X>
}

function ex(e) {
  let {
    transitionState: t,
    onClose: n
  } = e;

  function r(e) {
    let {
      children: t
    } = e;
    return <div className={U.modalOutlines} style={{
        padding: "24px"
      }}>{t}</div>
  }
  return <b.I transitionState={t} onClose={n}>{<div className={U.modalOutlines}><O.x title={"Demo Modal"} subtitle={"The ModalHeader can have leading and trailing items on either side of the text"} leading={(0, i.jsx)(r, {})} trailing={(0, i.jsx)(r, {})} /></div>}{<div className={U.modalOutlines}><E.f controls={(0, i.jsx)(r, {
          children: "This ModalBody renders any controls here"
        })}><r>{"This is the main ModalBody. This area scrolls if there is enough content"}</r></E.f></div>}{<div className={U.modalOutlines}><C.m><r>{"This is the ModalFooter"}</r></C.m></div>}{<div className={U.modalOutlines}><j.G leading={(0, i.jsx)(r, {
          children: "ModalActionBar leading"
        })} actions={[{
          variant: "secondary",
          text: "Cancel",
          onClick: n
        }, {
          variant: "primary",
          text: "Submit",
          onClick: n
        }]} /></div>}</b.I>
}

function e_(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, [s, a] = r.useState("md"), [l, o] = r.useState("Demo Modal"), [c, d] = r.useState("Header body copy"), [u, m] = r.useState(false), [p, g] = r.useState(false), [h, f] = r.useState(false), [x, _] = r.useState(false), [v, S] = r.useState(false);
  return <b.I transitionState={t} onClose={n} size={s}>{<O.x title={l} subtitle={c} alignCenter={u} />}{<E.f controls={p ? (0, i.jsx)(T.E1j, {
        placeholder: "Search",
        onChange: () => null,
        query: ""
      }) : true}><T.Kqy gap={16}>{<T.xJW title={"Modal Size"}><T.q4e value={s} onChange={a} options={[{
              label: "Small",
              value: "sm"
            }, {
              label: "Medium",
              value: "md"
            }, {
              label: "Large",
              value: "lg"
            }, {
              label: "XLarge",
              value: "xl"
            }]} /></T.xJW>}{<T.xJW title={"Header Title"}><T.oil onChange={o} defaultValue={l} /></T.xJW>}{<T.xJW title={"Header body"}><T.oil onChange={d} defaultValue={c} /></T.xJW>}{<T.xJW title={"Optional Content"}><T.Kqy gap={12}>{<T.XZJ value={u} onChange={(e, t) => m(t)}><T.Text variant={"text-md/medium"}>{"Header Align Center"}</T.Text></T.XZJ>}{<T.XZJ value={p} onChange={(e, t) => g(t)}><T.Text variant={"text-md/medium"}>{"Show Search Input"}</T.Text></T.XZJ>}{<T.XZJ value={h} onChange={(e, t) => f(t)}><T.Text variant={"text-md/medium"}>{"Show Preview Content"}</T.Text></T.XZJ>}{<T.XZJ value={x} onChange={(e, t) => _(t)}><T.Text variant={"text-md/medium"}>{"Show Action Bar Leading Input"}</T.Text></T.XZJ>}{<T.XZJ value={v} onChange={(e, t) => S(t)}><T.Text variant={"text-md/medium"}>{"Full Width Actions"}</T.Text></T.XZJ>}</T.Kqy></T.xJW>}</T.Kqy></E.f>}{h && <C.m>{<T.X6q variant={"heading-lg/semibold"}>{"Celebration Station"}</T.X6q>}{<T.Text variant={"text-sm/normal"} color={"text-secondary"}>{"32 Members ● 19 Online"}</T.Text>}</C.m>}{<j.G leading={x ? (0, i.jsx)(j.B, {
        value: false,
        onChange: () => {}
      }) : true} actionsFullWidth={v} actions={[{
        variant: "secondary",
        text: "Cancel",
        onClick: n
      }, {
        variant: "primary",
        text: "Submit",
        onClick: n
      }]} />}</b.I>
}

function ej(e) {
  let {
    transitionState: t,
    onClose: n
  } = e;

  function s(e) {
    let {
      text: t
    } = e, [n, s] = r.useState(false);
    return <div style={{
        padding: "8px 0"
      }}><T.XZJ value={n} onChange={(e, t) => s(t)}><T.Text variant={"text-md/medium"}>{t}</T.Text></T.XZJ></div>
  }
  return <_.Modal transitionState={t} onClose={n} size={"md"} title={"Invite to server"} input={(0, i.jsx)(T.E1j, {
      placeholder: "Search",
      onChange: () => null,
      query: ""
    })} preview={(0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(T.X6q, {
        variant: "heading-lg/semibold",
        children: "Celebration Station"
      }), (0, i.jsx)(T.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: "32 Members ● 19 Online"
      })]
    })} actions={[{
      variant: "secondary",
      text: "Cancel",
      onClick: n
    }, {
      variant: "primary",
      text: "Send Invite",
      icon: T.kBi,
      iconPosition: "end",
      onClick: n
    }]}>{<s text={"John Doe"} />}{<s text={"Mark"} />}{<s text={"KawaiiHermit"} />}{<s text={"YurBruhGio"} />}{<s text={"John Doe"} />}{<s text={"Mark"} />}{<s text={"KawaiiHermit"} />}{<s text={"YurBruhGio"} />}{<s text={"John Doe"} />}{<s text={"Mark"} />}{<s text={"KawaiiHermit"} />}{<s text={"YurBruhGio"} />}{<s text={"John Doe"} />}{<s text={"Mark"} />}{<s text={"KawaiiHermit"} />}{<s text={"YurBruhGio"} />}</_.Modal>
}

function eE(e) {
  let {
    transitionState: t,
    onClose: n
  } = e;
  return <_.Modal transitionState={t} onClose={n} title={"Alert Modal"} subtitle={"This is an alert"} actions={[{
      variant: "secondary",
      text: "Cancel",
      onClick: n
    }, {
      variant: "critical-primary",
      text: "Confirm",
      onClick: n
    }]} />
}

function eC(e) {
  let {
    transitionState: t,
    onClose: s
  } = e, [a, l] = r.useState(0), [o, c] = r.useState(false), u = r.useMemo(() => 0 === a ? {
    type: "image",
    src: V
  } : 1 === a ? {
    type: "lottie",
    lottie: () => n.e("94792").then(n.t.bind(n, 972951, 19)),
    aspectRatio: "6/4"
  } : 2 === a ? {
    type: "rive",
    rive: d.PerfTestRive
  } : 3 === a ? {
    type: "video",
    src: G.Z,
    fallbackImageSrc: V,
    loop: true,
    loopAt: 2.5
  } : 4 === a ? {
    type: "dynamic",
    component: T.AX$.DEMO,
    props: {
      text: "Dynamic Content"
    }
  } : true, [a]);
  return <x.I transitionState={t} onClose={s} gradientColor={"nitro-pink"} graphic={u} badge={o ? "beta" : true} title={"Expressive Modal"} subtitle={"This is an expressive modal with a header image"} actions={[{
      variant: "secondary",
      text: "Cancel",
      onClick: s
    }, {
      variant: "primary",
      text: "Submit",
      onClick: s
    }]}>{<T.xJW title={"Graphic Type"}><T.q4e value={a} onChange={l} options={[{
          label: "Image",
          value: 0
        }, {
          label: "Lottie",
          value: 1
        }, {
          label: "Rive",
          value: 2
        }, {
          label: "Looping Video",
          value: 3
        }, {
          label: "Dynamic Content",
          value: 4
        }]} /></T.xJW>}{<T.xJW style={{
        paddingTop: "16px"
      }}><T.XZJ value={o} onChange={(e, t) => c(t)}><T.Text variant={"text-md/medium"}>{"Show beta badge"}</T.Text></T.XZJ></T.xJW>}</x.I>
}

function eO(e) {
  let {
    transitionState: t,
    onClose: n,
    modalCount: s = 1
  } = e, [a, l] = r.useState("replace"), o = s < 3;
  return <_.Modal transitionState={t} onClose={n} size={1 === s ? "md" : "sm"} title={"Mana Modal Stacking Demo"} subtitle={"This is modal level ".concat(s, ".")} actions={[{
      variant: "secondary",
      text: "Close",
      onClick: n
    }, ...o ? [{
      variant: "primary",
      text: "Open Next Modal",
      onClick: () => {
        let e = s + 1;
        (0, T.h7j)(t => (0, i.jsx)(eO, Y(W({}, t), {
          modalCount: e
        })), {
          stackingBehavior: a
        })
      }
    }] : []]}><T.Kqy gap={16}>{o && <T.xJW title={"Stacking Behavior"}><T.q4e value={a} onChange={l} options={[{
            label: "Replace (default)",
            value: "replace"
          }, {
            label: "Stack",
            value: "stack"
          }, {
            label: "Replace All",
            value: "replaceAll"
          }]} /></T.xJW>}{<T.Kqy gap={8}>{<T.Text variant={"text-sm/normal"} color={"text-muted"}>{<strong>{"Replace One:"}</strong>}{" The modal directly below is hidden (default behavior)"}</T.Text>}{<T.Text variant={"text-sm/normal"} color={"text-muted"}>{<strong>{"Replace All:"}</strong>}{" All modals below are hidden"}</T.Text>}{<T.Text variant={"text-sm/normal"} color={"text-muted"}>{<strong>{"Stack:"}</strong>}{" The modal directly below remains visible"}</T.Text>}</T.Kqy>}</T.Kqy></_.Modal>
}

function ev() {
  return <Chunk255367.Fragment>{<div className={Chunk426617.section}>{<Chunk481060.X6q variant={"heading-xl/semibold"}>{"Modals (Void)"}</Chunk481060.X6q>}{<Chunk481060.zxk variant={"primary"} text={"Open modal"} onClick={() => {
          (0, Chunk481060.h7j)(e => (0, i.jsx)(ef, W({}, e)))
        }} />}{<Chunk481060.zxk variant={"primary"} text={"Show Alert"} onClick={() => {
          Chunk240872.Z.show({
            title: "Alert",
            body: "This is an alert",
            confirmText: "Confirm Text",
            cancelText: "Cancel Text"
          })
        }} />}{<Chunk481060.zxk variant={"primary"} text={"Open modal stacking demo"} onClick={() => {
          (0, Chunk481060.h7j)(e => (0, i.jsx)(eb, W({}, e)))
        }} />}</div>}{<div className={Chunk426617.section}>{<Chunk481060.X6q variant={"heading-xl/semibold"}>{"Modals (Mana)"}</Chunk481060.X6q>}{<Chunk481060.zxk variant={"primary"} text={"Open modal section visualizer"} onClick={() => {
          (0, Chunk481060.h7j)(e => (0, i.jsx)(ex, W({}, e)))
        }} />}{<Chunk481060.zxk variant={"primary"} text={"Open demo modal"} onClick={() => {
          (0, Chunk481060.h7j)(e => (0, i.jsx)(e_, W({}, e)))
        }} />}{<Chunk481060.zxk variant={"primary"} text={"Open sample invite modal"} onClick={() => {
          (0, Chunk481060.h7j)(e => (0, i.jsx)(ej, W({}, e)))
        }} />}{<Chunk481060.zxk variant={"primary"} text={"Open sample alert modal"} onClick={() => {
          (0, Chunk481060.h7j)(e => (0, i.jsx)(eE, W({}, e)))
        }} />}{<Chunk481060.zxk variant={"primary"} text={"Open expressive modal"} onClick={() => {
          (0, Chunk481060.h7j)(e => (0, i.jsx)(eC, W({}, e)))
        }} />}{<Chunk481060.zxk variant={"primary"} text={"Open Mana modal stacking demo"} onClick={() => {
          (0, Chunk481060.h7j)(e => (0, i.jsx)(eO, W({}, e)))
        }} />}</div>}</Chunk255367.Fragment>
}

function eS() {
  let e = (0, Chunk442837.e7)([Chunk514361.Z], () => Chunk514361.Z.gradientPreset);
  return <Chunk481060.f6W theme={Chunk231338.BR.DARKER} disableAdaptiveTheme={true}>{t => (0, i.jsxs)("div", {
      className: a()(t, U.section),
      children: [(0, i.jsx)(T.zxk, {
        variant: "secondary",
        text: "Button",
        fullWidth: true
      }), (0, i.jsx)(T.f6W, {
        theme: B.BR.LIGHT,
        children: t => (0, i.jsxs)("div", {
          className: a()(t, U.section),
          children: [(0, i.jsx)(T.zxk, {
            variant: "secondary",
            text: "Button",
            fullWidth: true
          }), (0, i.jsx)(T.f6W, {
            theme: B.BR.DARKER,
            children: e => (0, i.jsx)("div", {
              className: a()(e, U.section),
              children: (0, i.jsx)(T.zxk, {
                variant: "secondary",
                text: "Button",
                fullWidth: true
              })
            })
          }), (0, i.jsx)(T.f6W, {
            gradient: e,
            children: e => (0, i.jsx)("div", {
              className: a()(e, U.section),
              children: (0, i.jsx)(T.zxk, {
                variant: "secondary",
                text: "Button",
                fullWidth: true
              })
            })
          })]
        })
      })]
    })}</Chunk481060.f6W>
}