/** Chunk was on web.js **/
/** chunk id: 200645, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594190 = require("./594190.js"),
  Chunk865066 = require("./865066.js"),
  Chunk823379 = require("./823379.js"),
  Chunk63063 = require("./63063.js"),
  Chunk358085 = require("./358085.js"),
  Chunk998502 = require("./998502.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk680465 = require("./680465.js");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
  switch (e.state) {
    case "unknown":
      return p.intl.string(p.t["KW+nqT"]);
    case "disabled":
      return p.intl.string(p.t["Q/wAF7"]);
    case "disconnected":
      return p.intl.string(p.t.Xvs9IM);
    case "initializing":
      return p.intl.string(p.t.h4qz8W);
    case "connecting":
      return p.intl.string(p.t.fSu9XF);
    case "handshaking":
      return p.intl.string(p.t["00aYLJ"]);
    case "running":
      return p.intl.string(p.t["54TB7Z"]);
    case "waiting-for-retry":
      return p.intl.string(p.t["0FONwi"]);
    case "failure":
      return p.intl.string(p.t.Ic0nkd);
    default:
      (0, c.vE)(e.state)
  }
}

function E() {
  let e = (0, Chunk865066.O9)(),
    [t, n] = Chunk647438.useState(false),
    [c, d] = Chunk647438.useState(() => (0, Chunk865066.aL)()),
    f = (0, Chunk442837.e7)([Chunk594190.ZP], () => Chunk594190.ZP.getInputServiceStatus()),
    m = Chunk647438.useCallback(async () => {
      require(true), Chunk823379 ? await (0, Chunk865066.OK)("windows-settings") : await (0, Chunk865066.sU)("windows-settings"), require(false), Chunk358085((0, Chunk865066.aL)())
    }, [Chunk823379]);
  if (!module) return null;
  let E = "running" === Chunk998502.state;
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk680465.systemServiceContainer,
    children: [(0, Chunk951288.jsxs)("div", {
      className: Chunk680465.systemServiceTextContainer,
      children: [(0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-md/medium",
        color: "header-primary",
        children: Chunk388032.intl.string(Chunk388032.t.roHq80)
      }), (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: Chunk388032.intl.format(Chunk388032.t["8CAL+D"], {
          helpCenterLink: Chunk63063.Z.getArticleURL(Chunk981631.BhN.SYSTEM_SERVICE)
        })
      }), Chunk823379 ? (0, Chunk951288.jsx)(Chunk481060.Text, {
        variant: "text-sm/normal",
        color: E ? "text-feedback-positive" : "text-feedback-warning",
        children: E ? Chunk388032.intl.string(Chunk388032.t.KHVMkW) : Chunk388032.intl.format(Chunk388032.t["5Rlr0b"], {
          status: g(Chunk998502)
        })
      }) : null]
    }), (0, Chunk951288.jsx)(Chunk481060.Button, {
      variant: Chunk823379 ? "critical-secondary" : "primary",
      loading: exports,
      onClick: m,
      text: Chunk823379 ? Chunk388032.intl.string(Chunk388032.t.pAwbdL) : Chunk388032.intl.string(Chunk388032.t["1iI46O"])
    })]
  })
}
class b extends Chunk647438.PureComponent {
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
    } = this.state, i = (0, Chunk358085.isLinux)() ? Chunk388032.intl.string(Chunk388032.t["7pPjTW"]) : Chunk388032.intl.string(Chunk388032.t.ZkDZov);
    return (0, Chunk951288.jsxs)(Chunk481060.Kqy, {
      gap: 16,
      children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: Chunk647438
      }), (0, Chunk951288.jsxs)(Chunk481060.C3N, {
        children: [(0, Chunk951288.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t.WQm4p1),
          description: Chunk388032.intl.string(Chunk388032.t["s/cQrU"]),
          checked: module,
          onChange: this.handleToggleOpenOnStartup
        }), (0, Chunk358085.isWindows)() ? (0, Chunk951288.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t.n7Yjes),
          description: Chunk388032.intl.string(Chunk388032.t.o2FSjB),
          checked: !!module && exports,
          disabled: !module,
          onChange: this.handleToggleStartMinimized
        }) : null, (0, Chunk951288.jsx)(Chunk481060.rsf, {
          label: Chunk388032.intl.string(Chunk388032.t.abLFes),
          description: Chunk388032.intl.string(Chunk388032.t["mVuX+j"]),
          checked: require,
          onChange: this.handleToggleMinimizeToTray
        }), (0, Chunk951288.jsx)(E, {})]
      })]
    })
  }
  constructor(e) {
    super(e), m(this, "handleToggleOpenOnStartup", () => {
      let e = !this.state.openOnStartup;
      this.setState({
        openOnStartup: e
      }), f.ZP.send("TOGGLE_OPEN_ON_STARTUP", e)
    }), m(this, "handleToggleStartMinimized", () => {
      let e = !this.state.startMinimized;
      this.setState({
        startMinimized: e
      }), f.ZP.send("TOGGLE_START_MINIMIZED", e)
    }), m(this, "handleToggleMinimizeToTray", () => {
      let e = !this.state.minimizeToTray;
      this.setState({
        minimizeToTray: e
      }), f.ZP.send("TOGGLE_MINIMIZE_TO_TRAY", e)
    }), this.state = {
      openOnStartup: true,
      startMinimized: false,
      minimizeToTray: true
    }
  }
}
let y = b