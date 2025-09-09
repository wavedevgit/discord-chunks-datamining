/** Chunk was on 39159 **/
/** chunk id: 560467, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk642633 = require("./642633.jsx"),
  Chunk183369 = require("./183369.jsx"),
  Chunk422663 = require("./422663.jsx"),
  Chunk555546 = require("./555546.js"),
  Chunk473682 = require("./473682.js"),
  Chunk401561 = require("./401561.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk149671 = require("./149671.js");

function b(e) {
  let {
    currentGame: n,
    planId: t,
    selected: a,
    className: o
  } = e, c = i.useMemo(() => null == n ? true : n.plans.find(e => e.id === t), [null == n ? true : n.plans, t]);
  return null == c ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: l()(f.optionContainer, o),
      children: [(0, r.jsx)("span", {
        children: c.name
      }), (0, r.jsxs)("div", {
        className: f.labelContainer,
        children: [(0, r.jsx)(s.$Eu, {
          size: "xs",
          color: s.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/medium",
          children: v.intl.format(p.default.FrRqub, {
            boostCount: c.cost
          })
        })]
      })]
    }), !a && (0, r.jsx)("div", {
      className: f.optionSpacer
    })]
  })
}

function x(e) {
  let {
    currentGame: n,
    locationString: t,
    selected: a,
    className: o
  } = e, c = i.useMemo(() => null == n ? true : n.locations.find(e => e.region === t), [null == n ? true : n.locations, t]), {
    pingText: d,
    pingCircleStyle: u
  } = (0, m.i)(null == c ? true : c.pingUrl);
  return null == c ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: l()(f.optionContainer, o),
      children: [(0, r.jsx)("span", {
        children: c.region
      }), (0, r.jsxs)("div", {
        className: f.labelContainer,
        children: [(0, r.jsx)("div", {
          className: l()(f.pingCircle, u)
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/medium",
          children: d
        })]
      })]
    }), !a && (0, r.jsx)("div", {
      className: f.optionSpacer
    })]
  })
}

function j() {
  let {
    currentGame: e,
    location: n,
    setLocation: t,
    name: a,
    setName: l,
    planId: m,
    setPlanId: j
  } = (0, Chunk183369.aj)(), h = Chunk647438.useMemo(() => {
    var n;
    return null != (n = null == module ? true : module.locations.map(e => ({
      value: e.region,
      label: e.region
    }))) ? exports : []
  }, [module]), _ = Chunk647438.useMemo(() => {
    var n;
    return null != (n = null == module ? true : module.plans.map(e => ({
      value: e.id,
      label: e.name
    }))) ? exports : []
  }, [module]), C = true === Chunk120356 || "" === Chunk120356 || true === exports || "" === exports || true === Chunk555546;
  return null == module ? null : (0, Chunk951288.jsxs)("div", {
    children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
      className: Chunk149671.title,
      variant: "heading-lg/semibold",
      children: Chunk388032.intl.string(Chunk401561.default.Eonh9P)
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk149671.contentContainer,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk149671.settingsContainer,
        children: [(0, Chunk951288.jsxs)("div", {
          className: Chunk149671.sectionContainer,
          children: [(0, Chunk951288.jsxs)("div", {
            className: Chunk149671.sectionHeader,
            children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
              variant: "heading-sm/semibold",
              children: Chunk388032.intl.string(Chunk401561.default["78avu7"])
            }), (0, Chunk951288.jsx)(Chunk681715.u, {
              position: "top",
              text: Chunk388032.intl.string(Chunk401561.default.hmt2ra),
              children: (0, Chunk951288.jsx)(Chunk481060.idN, {
                className: Chunk149671.sectionHeaderIcon,
                size: "xs"
              })
            })]
          }), (0, Chunk951288.jsx)(Chunk481060.oil, {
            value: Chunk120356,
            onChange: l,
            placeholder: Chunk388032.intl.string(Chunk401561.default.Kg0Zio)
          })]
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk149671.sectionContainer,
          children: [(0, Chunk951288.jsxs)("div", {
            className: Chunk149671.sectionHeader,
            children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
              variant: "heading-sm/semibold",
              children: Chunk388032.intl.string(Chunk401561.default.iccpNT)
            }), (0, Chunk951288.jsx)(Chunk681715.u, {
              position: "top",
              text: Chunk388032.intl.string(Chunk401561.default.wKyl39),
              children: (0, Chunk951288.jsx)(Chunk481060.idN, {
                className: Chunk149671.sectionHeaderIcon,
                size: "xs"
              })
            })]
          }), (0, Chunk951288.jsx)(Chunk481060.PhF, {
            serialize: e => e.toString(),
            isSelected: e => e === n,
            options: h,
            optionClassName: Chunk149671.option,
            select: e => t(e),
            placeholder: Chunk388032.intl.string(Chunk401561.default["op6/kZ"]),
            renderOptionLabel: t => (0, r.jsx)(x, {
              currentGame: e,
              locationString: t.value,
              selected: (null == t ? true : t.value) === n
            }),
            renderOptionValue: t => {
              var i, a;
              return (0, r.jsx)(x, {
                currentGame: e,
                locationString: null == (i = t[0]) ? true : i.value,
                selected: (null == (a = t[0]) ? true : a.value) === n,
                className: f.value
              })
            }
          })]
        }), (0, Chunk951288.jsxs)("div", {
          className: Chunk149671.sectionContainer,
          children: [(0, Chunk951288.jsx)("div", {
            className: Chunk149671.sectionHeader,
            children: (0, Chunk951288.jsx)(Chunk481060.X6q, {
              variant: "heading-sm/semibold",
              children: Chunk388032.intl.string(Chunk401561.default["3QONen"])
            })
          }), (0, Chunk951288.jsx)(Chunk481060.PhF, {
            serialize: e => e.toString(),
            isSelected: e => e === m,
            options: _,
            optionClassName: Chunk149671.option,
            select: e => j(e),
            placeholder: Chunk388032.intl.string(Chunk401561.default["4QOSPj"]),
            renderOptionValue: n => {
              var t, i;
              return (0, r.jsx)(b, {
                currentGame: e,
                planId: null == (t = n[0]) ? true : t.value,
                selected: (null == (i = n[0]) ? true : i.value) === m,
                className: f.value
              })
            },
            renderOptionLabel: n => (0, r.jsx)(b, {
              currentGame: e,
              planId: null == n ? true : n.value,
              selected: (null == n ? true : n.value) === m
            })
          })]
        })]
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk149671.gameDetailsContainer,
        children: (0, Chunk951288.jsx)(Chunk642633.Z, {})
      })]
    }), (0, Chunk951288.jsxs)(Chunk422663.ok, {
      step: Chunk473682.Vb.SERVER_SETTINGS,
      className: Chunk149671.footerContainer,
      children: [(0, Chunk951288.jsx)(Chunk422663.VS, {}), (0, Chunk951288.jsx)(Chunk422663.oh, {
        disabled: C
      })]
    })]
  })
}