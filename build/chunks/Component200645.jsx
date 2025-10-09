/** Chunk was on web.js **/
/** chunk id: 200645, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594190 = require("./594190.js"),
  Chunk865066 = require("./865066.js"),
  Chunk63063 = require("./63063.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk761588 = require("./761588.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m() {
  let e = (0, Chunk865066.O9)(),
    [t, n] = Chunk647438.useState(false),
    [u, d] = Chunk647438.useState(() => (0, Chunk865066.aL)()),
    h = (0, Chunk442837.e7)([Chunk594190.ZP], () => Chunk594190.ZP.getInputServiceStatus()),
    m = Chunk647438.useCallback(async () => {
      require(true), Chunk358085 ? await (0, Chunk865066.OK)("windows-settings") : await (0, Chunk865066.sU)("windows-settings"), require(false), Chunk998502((0, Chunk865066.aL)())
    }, [Chunk358085]);
  if (!module) return null;
  let g = "running" === h.state;
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk761588.systemServiceContainer,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk761588.systemServiceTextContainer,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: Chunk388032.intl.string(Chunk388032.t["roHq8/"])
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: Chunk388032.intl.format(Chunk388032.t["8CAL+P"], {
          helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SYSTEM_SERVICE)
        })
      }), Chunk358085 ? (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: g ? "text-feedback-positive" : "text-feedback-warning",
        children: g ? Chunk388032.intl.string(Chunk388032.t.KHVMkZ) : Chunk388032.intl.format(Chunk388032.t["5Rlr0d"], {
          status: h.state
        })
      }) : null]
    }), (0, Chunk951288.jsx)(Chunk481060.zxk, {
      variant: Chunk358085 ? "critical-secondary" : "primary",
      loading: exports,
      onClick: m,
      text: Chunk358085 ? Chunk388032.intl.string(Chunk388032.t.pAwbdH) : Chunk388032.intl.string(Chunk388032.t["1iI46O"])
    })]
  })
}
class g extends Chunk647438.PureComponent {
  async componentDidMount() {
    this.setState({
      openOnStartup: await Chunk998502.ZP.getSetting("OPEN_ON_STARTUP", true),
      startMinimized: await Chunk998502.ZP.getSetting("START_MINIMIZED", false),
      minimizeToTray: await Chunk998502.ZP.getSetting("MINIMIZE_TO_TRAY", true)
    })
  }
  render() {
    let {
      openOnStartup: e,
      startMinimized: t,
      minimizeToTray: n
    } = this.state, i = (0, Chunk358085.isLinux)() ? Chunk388032.intl.string(Chunk388032.t["7pPjTU"]) : Chunk388032.intl.string(Chunk388032.t.ZkDZoq);
    return (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
      gap: 16,
      children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: Chunk647438
      }), (0, Chunk951288.jsxs)(Chunk481060.C3N, {
        children: [(0, Chunk951288.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t.WQm4p6),
          description: Chunk388032.intl.string(Chunk388032.t["s/cQra"]),
          checked: module,
          onChange: this.handleToggleOpenOnStartup
        }), (0, Chunk358085.isWindows)() ? (0, Chunk951288.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t.n7Yjen),
          description: Chunk388032.intl.string(Chunk388032.t.o2FSjI),
          checked: !!module && exports,
          disabled: !module,
          onChange: this.handleToggleStartMinimized
        }) : null, (0, Chunk951288.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t.abLFen),
          description: Chunk388032.intl.string(Chunk388032.t["mVuX+v"]),
          checked: require,
          onChange: this.handleToggleMinimizeToTray
        }), (0, Chunk951288.jsx)(m, {})]
      })]
    })
  }
  constructor(e) {
    super(e), h(this, "handleToggleOpenOnStartup", () => {
      let e = !this.state.openOnStartup;
      this.setState({
        openOnStartup: e
      }), d.ZP.send("TOGGLE_OPEN_ON_STARTUP", e)
    }), h(this, "handleToggleStartMinimized", () => {
      let e = !this.state.startMinimized;
      this.setState({
        startMinimized: e
      }), d.ZP.send("TOGGLE_START_MINIMIZED", e)
    }), h(this, "handleToggleMinimizeToTray", () => {
      let e = !this.state.minimizeToTray;
      this.setState({
        minimizeToTray: e
      }), d.ZP.send("TOGGLE_MINIMIZE_TO_TRAY", e)
    }), this.state = {
      openOnStartup: true,
      startMinimized: false,
      minimizeToTray: true
    }
  }
}
let E = g